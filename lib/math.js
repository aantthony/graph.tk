/*! 
 *  Math JavaScript Library v2.0.0
 *  https://github.com/aantthony/javascript-cas
 *  
 *  Copyright 2011 Anthony Foster. All rights reserved.
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


(function (window, undefined) {

	var f = {};
	function O(n, v){
		f[v]=f[v]?f[v]+1:1;
	}
	"use strict";
	_M = window.M;

	Array.prototype.toString=null; // Trigger errors for debugging.

Array.prototype.setType=function(type){
	this.type=type;
	return this;
};
Array.prototype.clone=function(){
	return Array.prototype.slice.apply(this).setType(this.type);
};



function I(){
	return this.constructor(this);
}
function _false(){
	return false;
}
function _true(){
	return true;
}
Number.prototype.eval=
Number.prototype.simplify=
String.prototype.eval=
String.prototype.simplify=
Boolean.prototype.simplify=
Boolean.prototype.toLatex=
Number.prototype.clone=
Boolean.prototype.clone=
String.prototype.clone=
I;
Number.prototype.requiresParentheses=
String.prototype.requiresParentheses=
Boolean.prototype.requiresParentheses=
_false;// Or should it be true for strings, parens = ", and "
Number.prototype.impliedBy=
String.prototype.impliedBy=
Boolean.prototype.impliedBy=
_true;
//Information for the shunting parser to use:
var languages = {};	
var language = "javascript+math";
var left,right;
var L = left = 0;
var R = right = 1;
/*
 Language spec columns in order of _increasing precedence_:
 * operator string representation(s). These are different operators, but share all properties.
 * Associativity
 * Operand count (Must be a fixed number) 
 * (TODO??) commute group? - or should this be derived?
 * (TODO?) associative? commutative?  - Should be calculated?
 * (TODO?) Identity?
*/


languages[language] = [
	[";"],			/*L / R makes no difference???!??!? */
	[","],
	[["=","+=","-=","*=","/=","%=","&=","^=","|="],R],
	[["?",":"],R,2],
	[["∨"]],
	[["&&"]],
	[["|"]],
	[["??????"]],//XOR
	[["&"]],
	[["==","≠","!==","==="]],
	[["<","<=",">",">="],L],
	[[">>","<<"]],
	["±",R,2],
	[["+","-"]],
	[["∫","∑"],R,1],
	[["*","%"]],
	[["@+","@-","@±"],R,1], //unary plus/minus
	[["¬"],L,1],
	["∘",R,2],
	[["/"]],
	[["^"]],//e**x
	["!",L,1],
	[["~"],R,1], //bitwise negation
	[["++","++",".","->"],L,1],
	[["::"]],
	[["_"],L,2],
	["var",R,1],
	["break",R,0],
	["throw",R,1],
	["'",L,1],
	["√",R,1],
	["#",R,1],	/*anonymous function*/
];



var operators={};

var op_precedence=0;
function op(v,assoc,arg_c){
	//Register an operator
	var memsave=[assoc,op_precedence++,arg_c];
	if(typeof v==="object") {
		for(var i=0;i<v.length;i++){
			operators[v[i]]=memsave;
		}
	}else{
		operators[v]=memsave;
	}
}

languages[language||"jsMath"].forEach(function(o) {
	op(o[0],o[1]||L,(o[2]===undefined)?2:o[2]);
});


function precedence(v){
	if(!operators[v]){
		throw("Precedence of "+v+" not known!");
	}
	return operators[v][1];
}
window.precedence=precedence;

function postfix(o){
	var op=operators[o];
	return op[0]==0 && op[2]==1;
}
function unary(o){
	var unary_secondarys=["+","-","±"];
	return (unary_secondarys.indexOf(o)!=-1)?("@"+o):false;
}



function inverse(o,b,d,side){
	var SideError = "Side must be specified for noncommutative operations!";
	b=b.clone();
	d=d.clone();
	// d (old) = [A, B], where b = A if L, and b = B if R.
	switch(o){
		case "+":
			return [d, b].setType("-");
		case "-":
			if(side===L){
				// d = b - ?
				// ? = b - d
				return [b, d].setType("-");
			}else if(side===R){
				// d = ? - b
				// ? = d + b
				return [d, b].setType("+");
			}else{
				throw(SideError);
			}
		case "/":
			if(side===L){
				// d = b / ?
				// d * ? = b / ? * ?
				// ? = (1/d) b
				
				//TODO: THIS ASSUMES A*B = B*A
				// ? = b/d
				if(d===0){
					return false; //DIVISION BY ZERO
				}
				return [b, d].setType("/");
			}else if(side===R){
				// d = ? / b
				// d * b = ?
				return [d, b].setType("*");
			}else{
				throw(SideError);
			}
		case "*":
			// d = b * ?
			// 1/b * d = ?
			
			//TODO: THIS ASSUMES A*B = B*A
			// ? = d / b
			if(b===0){
				return false;
			}
			return [d, b].setType("/");
		case "^":
			if(side===L){
				// d = b ^ ?
				// d = e ^ (? * log b)
				// log(d) = ? * log b
				// log(d) / log(b) = ?
				//Log should really be an operator
				return [["log",d].setType("∘"), ["log",b].setType("∘")].setType("/");
			}else if(side===R){
				// d = ? ^ b
				// d ^ (1/b) = ?^(b/b)
				// d ^ (1/b) = ?
				if(b===0){
					return false;
				}
				return [d, [1, b].setType("/")].setType("^");
			}else{
				throw(SideError);
			}
		default:
			return;
	}
	
	/*
	//Commutative operators:
	var os={
		"+":"-",
		"*":"/",
		"^":{"L":["^","/"], "R":["log", ]},
		"-":{"L": "-", "R":"+"},
		"/":{"L": "/", "R":"*"},
		"&&":["∨","¬","&&","$0"],
		
		"∘":["∘","/"],//TODO: NEEDS DEBUG CHECK: check this junk
		"matrix multiplication":I
	};
	if(os[o]){
		var c=b.clone();
		var op = os[o];
		if(typeof op==="object" && !op.length){
			if(side===R){
				op = op.R;
			}else if(side===L){
				op = op.L;
			}else{
				throw("Side must be specified for non-commutative operations.");
			}
		}
		if(typeof op==="object"){
			for (var i = op.length - 1; i > 0; i--){
				c=[identity(op[i]),c].setType(op[i]);
				if(!c.valid()){
					return false;
				}
			};	
		}
		c=[undefined,c].setType(os[o]);
		
		if(!c.valid()){
			return false;
		}
		
		return c;
		
		
	}*/
	
}



function identity(o){
	var os={
		"+":0,
		"*":1,
		"^":0,
		
		"/":1, //Implied by inverse?()
		"-":0,
		"&&":true,
		"∨":false,
		
		"%":Infinity, //Bounds of real numbers
		"^":1,
		"matrix multiplication":I
		
		
	};
	if(os[o]!==undefined){
		return os[o];
	}
	return undefined;
}



//Commute?
function commutative(o){
	return ["*","+","="].indexOf(o)!=-1;
}
window.commutative=commutative;
//Is the operator o left-distributive over operator p?
function distributive(o, p){
	var os={
		"*":["+","-",",",/*,"∨" messy*/],
		"/":["+","-"],
		"^":["*"],
		"cross-product":"+",
		"matrix-multiplication":"+",
		"set-union":"intersect",
		"∨":"&&",
		"conjugtion":["disjunction", "exclusive disjunction"],
		"max":"min",
		"gcd":"lcm",
		"D":["+","-",","],
		"+":["max","min",","]
	};
	
	
	//TODO: (if better/faster): use fact (?) that (* distributes over '+' (which distributes over ',')) => (* distributes over ',')
	// This doesn't hold for the binomial theorem.
	if(os[o]){
		if(os[o]===p || (os[o].indexOf && os[o].indexOf(p)!=-1)){
			return true;
		}
	}
	return false;
}




//n-ary operators: Good for factorising?? For converting +(1 +(2 3)) to +(1 2 3)
function associative(o){
	var able=["*","+","=","∘"];
	//Is this a good idea????
	if(able.indexOf(o)!=-1){
		return true;
	}
	return false;
}




Array.prototype.requiresParentheses=function(o){
	return precedence(o)>precedence(this.type) || 
	(o=="^" && this.type==="^");
};
Number.prototype.requiresParentheses=function(o){
	if(o==="^" && Number(this)<0){
		return true;
	}
	return false;
};
String.prototype.requiresParentheses=
Boolean.prototype.requiresParentheses=
_false;// Or should it be true for strings, parens = ", and "
/*
TODO:
 fix:
	' sin(x)' => ∘s∘i∘n∘(x)


*/

var msg={
	"latexParse":"Unable to parse LaTeX string",
	"parenMismatch":"There are mismatched parentheses"
};

var types = {
	"number": 1,
	"operator": 2,
	"paren": 3,
	"variable": 4,
	"function": 5
};

var parse = (function (language) {
	O(1, "parse - build");
	//Begin parse building space.
	//This context will be accessible to parse()
	
	
	var names = ["none","num","op","paren","var"];

	

	//Operator characters
	//TODO: calculate programmatically
	
	var ochars=":>-.+~!^%/*<=&|?,;±∘'∫∑∫√¬_$";
	
	//TODO: Allow 1e+2 format
	var nummustbe="1234567890.";
	var parenmustbe="([{}\"])";
	var varcannotbe=ochars+parenmustbe+nummustbe;
	var match=[0,
		function(e){
			return !isNaN(e);
		},
		function(e){
			if(operators[e]){
				return true;
			}
			return false;
			//return ochars.indexOf(e)!==-1;
		},
		function(e){
			return e && e.length === 1 && parenmustbe.indexOf(e)!=-1;
		},
		function(e){
			//Assumtions: It will only be ONE character ahead of a valid var.
			
			/*
			Not desired, it could get messy. Always use \\varname instead.
			if(M.global[e]!==undefined){
				return true;
			}
			*/
			
			if(e.length === 1 || e[0]==="\\"){
				
				//Given: It will only be ONE character ahead of a valid var.
				
				return varcannotbe.indexOf(e[e.length-1])==-1;
			}
			return false;
		}
	];
	//TODO: rewrite this in a way that can split variables also
	function split_operators(t){
		if(operators[t]){
			return [t];
		}
		for (var i = t.length - 1; i > 0; i--){
			var a = t.substring(0,i);
			if(operators[a]){
				return [a].concat(split_operators(t.substring(i)));
			}
		}
		throw("Expression '"+t+"' did not contain any operator prefix codes.");
	}
	
	//TODO: this should be secondary_unary
	
	//parse:
	return function (s){
		O(1, "parse");
		var current_type=0;
		s=s.trim();//Fixes a bug of parsing " ..."
		var i=0,len=s.length;
		var current_token=s[0];
		current_type=4;
		for(var t=1;t<4;t++){
			if(match[t](current_token)){
				current_type=t;
				break;
			}
		}
		
		//Stack of tokens for the shunting yard algorithm
		var stack=[];
		//Stack of tokens for RPN notation. ('evaluated' to a tree representation)
		var rpn_stack=[];
		
		//The evelauation part of the shunting yard algorithm inside out.
		function next_rpn(token){
			O(1, "next_rpn");
			// While there are input tokens left

			// Read the next token from input.
			//console.log("rpn: ",token);
			// If the token is a value
			if(token.t===types.number || token.t===types.variable){
				// Push it onto the stack.
				//console.log("push: ",token.v, " onto: rpn_stack = ",rpn_stack.clone());
				rpn_stack.push(token.v);
			}
			// Otherwise, 
			else{
				//the token is an operator (operator here includes both operators, and functions).
				// It is known a priori that the operator takes n arguments.
				var n=operators[token.v][2];
				// If there are fewer than n values on the stack
				if(rpn_stack.length<n){
					// (Error) The user has not input sufficient values in the expression.
					throw(new SyntaxError("The "+token.v+" operator requires exactly "+n+" operands, whereas only "+rpn_stack.length+" "+(rpn_stack.length===1?"was":"were")+" supplied."));
				// Else,
				}else{
					// Pop the top n values from the stack.
					var values=rpn_stack.splice(-n,n);
					// Evaluate the operator, with the values as arguments.
					//var evaled=("("+values[0]+token.v+values[1]+")");
					values.type=token.v;
					// Push the returned results, if any, back onto the stack.
					//console.log("values: ",values.clone());
					rpn_stack.push(values);
				}
			}
		}
		
		//Shunting yard algorithm inside out.
		
		//Because the algorithm reads one token at a time, we can just
		//give it the token as soon as we get that token (from the tokenizer/parser), and
		//instead of pushing to a temporary array, just call next_token(token).
		//The same applies to the RPN evaluator (above)
		function next_token(token){
			if (token.t === types.variable) {
				//'Keyword' search: eg. break, if. Stuff like that.
				if (operators[token.v]) {
					token.t = types.operator;
				} else if(token.v==="false"){
					token.v=false;
				} else if(token.v==="true"){
					token.v=true;
				} else if(token.v==="Infinity"){
					token.v=Infinity;
				}
			}
			//console.log("token: ", token.v, names[token.t]);
			//Comments from http://en.wikipedia.org/wiki/Shunting-yard_algorithm
			// Read a token.
			// If the token is a number, then add it to the output queue.
			if(token.t==types.number || token.t==types.variable){
				if(token.t==types.number){
					token.v=Number(token.v);
				}
				next_rpn(token);
			}
			// If the token is a function token, then push it onto the stack.
			if(token.t===types.func){
				stack.push(token);
			}
			
			// If the token is a function argument separator (e.g., a comma):
			if(token.t===types.comma){
				// Until the token at the top of the stack is a left parenthesis,
				while(stack[stack.length-1].v!="("){

					// If no left parentheses are encountered,
					if(!stack.length){
						// either the separator was misplaced or parentheses were mismatched.
						throw("either the separator was misplaced or parentheses were mismatched.")
					}
					// pop operators off the stack onto the output queue.
					next_rpn(stack.pop());
				}

			}
			// If the token is an operator
			if(token.t===types.operator){
				//, o1, then:
				var o1=token;
				var o1precedence=precedence(o1.v);
				//var o1associative=associativity(o1.v);
				var o1associative=operators[o1.v][0];
				// ("o2" is assumed to exist)
				var o2;
				// while
				while(

					//there is an operator token, o2, at the top of the stack
					(stack.length && (o2 = stack[stack.length-1]).t===types.operator)
					//and
					&&
				// either
				 (
					(
						//o1 is left-associative
						o1associative==left
						//and
						&&
						//its precedence is
						o1precedence
						//less than or equal to
						<=
						//that of o2,
						precedence(o2.v)
					)
				//or
				||
					(
						//o1 is right-associative
						o1associative!=left

						//and
						&&

						//its precedence is
						o1precedence

						//less than
						<

						//that of o2
						precedence(o2.v)
						)

					 )

				){
					// pop o2 off the stack, onto the output queue;
					next_rpn(stack.pop());
				}

				// push o1 onto the stack.
				stack.push(o1);
			}
			// If the token is a left parenthesis,
			if(token.v == "("){
				//then push it onto the stack.
				stack.push(token);
			}
			// If the token is a right parenthesis:
			if(token.v == ")"){
				// Until the token at the top of the stack is a left parenthesis,
				while(stack[stack.length-1].v!="("){

					// If the stack runs out without finding a left parenthesis, then
					if(!stack.length){
						//there are mismatched parentheses.
						throw(new SyntaxError(msg.parenMismatch));
					}
					// pop operators off the stack onto the output queue.
					next_rpn(stack.pop());
				}

				// Pop the left parenthesis from the stack, but not onto the output queue.
				if(stack.pop().v!="("){
					throw("Pop the left parenthesis from the stack: Not found!")
				}

				// If the token at the top of the stack is a function token, pop it onto the output queue.
				if(stack.length && stack[stack.length-1].t===types.func){
					next_rpn(stack.pop);
				}
			}

		};
		var op_last=true;
		
		function next_tokens(token) {
			//console.log("lot: ", token.v);
			var tokens=[];
			var v=token.v;
			if(token.t===types.variable){
				v=v.replace(/\\/g,"");
			}
			if(token.t===types.paren){
				v=v.replace(/[ \n\t]+/g, "");
			}
			var _tokens=
			v
			.split((token.t===types.paren)?"":/[ \n\t]+/);
			if(token.t===types.operator){
				_tokens
				.forEach(function(t) {
					if(t.length){
						tokens=tokens.concat(split_operators(t));
					}
				});
			}else{
				tokens=_tokens;
			}
			
			tokens
			.forEach(function (t) {
				if(t.length) {
					if(token.t!=types.paren){
						if(!op_last && token.t!=types.operator){
							next_token({v:"∘",t:types.operator});
							//throw("No operator before "+t);
						}
						if(token.t==types.operator && !postfix(t)){
							if(op_last && op_last!=")" && unary(t)){
								t=unary(t);
							}
							op_last=true;
						}else{
							op_last=false;
						}
					}else{
						if(t=="(" && (op_last==false||op_last==")")){
							next_token({v:"∘",t:types.operator});
							op_last=t;
						}else if(t=="("){
							op_last=t;
						}else if(t==")"){
							
							op_last=t;
						}
					}
					next_token({v:t,t:token.t});
				}
			});
		}
		//Tokenize:
		while(i<len) {
			i++;
			var c;
			if(!(i < len)){
				//Reached the end; use whatever is in the current_token buffer.
				next_tokens({v: current_token, t: current_type});
				current_token = "";
				break;
			}else if ((c=s[i]) === " " || c === "\t" || c === "\n") {
				//whitespace is not removed yet.
				//(It is required for some tokens, e.g. strings, and seperator string tokens)
				current_token += c;
			} else if (match[current_type](current_token + c)) {
				//The next character fits onto the current_token
				current_token += c;
			}else{
				//console.log("change detected at "+s[i]);
				
				//A new token type was reached, push the old one:
				next_tokens({v:current_token,t:current_type});
				
				//move on
				if(current_type === types.operator || current_type === types.paren){
					//console.log("just finished op: ",current_token.s, names[current_type]);
					//console.log("now @ "+c);
					//Just finished an operator.
					//send operator: Wait no, don't send it.
					current_type = 4;
					for(var t = 1; t < 4; t++){
						if(match[t](c)){
							current_type=t;
							break;
						}
					}
					//console.log("just found out that ",c.s," is a "+names[current_type]);


				} else {
					if (match[types.operator](c)) {
					//We've got an operator!

						current_type = types.operator;
						//DO NOT SEND OPERATOR TOKEN YET.

					}else if (match[types.paren](c)) {
						current_type = types.paren;

					} else {
						//Let's assume multiplication
						next_tokens({v:"∘",t:types.operator});
						current_type = types.variable;
						//console.warn("Operator was expected between ", current_token, " and ", c, "( ∘ assumed)");
					}
				}
				current_token=c;
			}
		}
		/*
		if(current_token.length){
			//Unsure what should be happening here.
			console.warn("final token: ",current_token);
		}
		*/


	//Shunting yard algorithm:
	// (The final part that does not read tokens)
	
	// When there are no more tokens to read:

		// While there are still operator tokens in the stack:
		while(stack.length){
			var the_operator;
			// If the operator token on the top of the stack is a parenthesis, then
			if((the_operator=stack.pop()).t===types.paren){
				//there are mismatched parentheses.
				throw("there are mismatched parentheses.");

			}
			//Pop the operator onto the output queue.
			next_rpn(the_operator);

		}
		if(rpn_stack.length!==1){
			console.warn("Stack not the right size! ", rpn_stack);
			//who gives?
			
			return rpn_stack;
		}
		return rpn_stack[0];
		//eturn output.map(function(o){return o.v}).join(" ");
	}

})(language);
//The main javascript-cas object: window.M:
var M = function (expression, context) {
	return p(expression, context);
};
function p(expression, context){
	//TODO?: Apply context?
	return parse(expression);
}
M.Context = function(){
	
};



//BEGIN MATH


Array.prototype.valid=function(){
	if(this.type==="/" && this[1]===0){
		return false;
	}
	return true;
};


Array.prototype.eval=function(){
	return this.simplify();
};
Array.prototype.Function=function(x){
	
	//DANGER!!!!!!!!!!!
	if(x===undefined){
		return new Function("return "+this.toString());
	}
	return new Function(x,"return "+this.toString());
}






M.toString=function(){
	//Yes, this is necessary
	return "function M() {\n    [awesome code]\n}";
};
M.toString.toString=function(){
	return "function toString() {\n    [native code]\n}";
};

M.toString.toString.toString=M.toString.toString;
window.M = M;

M.Context.prototype=Object.create(Math);
M.Context.prototype.D=function(x, wrt){
	wrt=wrt||"x";
	return x.differentiate(wrt,1);
};
M.Context.prototype.D.symbolic=true;

M.Context.prototype.reset=function(){
	for(var i in this){
		if(this.hasOwnProperty(i)){
			delete this[i];
		}
	}
	return this;
};

var exp = Math.exp,
	log = Math.log;

//Riemann zeta function
function zeta(x) {
    if (x === 0) {
        return -0.5;
    } else if (x == 1) {
        return Infinity;
    } else if (x == 2) {
        return pi * pi / 6;
    } else if (x == 4) {
        return pi * pi * pi * pi / 90;
    } else if (x < 1) {
        return Infinity;
    }
    var sum = 4.4 * pow(x, -5.1);
    for (var npw = 1; npw < 10; npw++) {
        sum += pow(npw, -x);
    }
    return sum;
}

function gammln(xx) {
    var j;
    var x,tmp,y,ser;
    var cof=[57.1562356658629235,-59.5979603554754912,14.1360979747417471,-0.491913816097620199,0.339946499848118887e-4,0.465236289270485756e-4,-0.983744753048795646e-4,0.158088703224912494e-3,-0.210264441724104883e-3,0.217439618115212643e-3,-0.164318106536763890e-3,0.844182239838527433e-4,-0.261908384015814087e-4,0.368991826595316234e-5];
    if (xx <= 0){
        throw("bad arg in gammln");
    }
    y=x=xx;
    tmp = x+5.24218750000000000;
    tmp = (x+0.5)*log(tmp)-tmp;
    ser = 0.999999999999997092;
    for (j=0;j<14;j++){
        ser += cof[j]/++y;
    }
    return tmp+log(2.5066282746310005*ser/x);
}
function Gamma(x){
    if(x==0){
        return Infinity;
    }
    if(x<0){
        return -pi/(x*sin(pi*x)*Gamma(-x));
    }
    return exp(gammln(x));
}

function factorial(ff) {
    if (ff === 0 || ff == 1) {
        return 1;
    } else if (ff > 0 && ff == ~~ff && ff < 15) {
        var s = 1;
        for (var nns = 1; nns <= ff; nns++) {
            s *= nns;
        }
        return~~s;
    } else if (ff != (~~ff) || ff < 0) {
        return Gamma(ff + 1);
    }
}


M.Context.prototype.factorial = function(x){
	return factorial(x);
};
//M.Context.prototype.factorial.symbolic = true;


M.Context.prototype.Gamma = function(x){
	return Gamma(x);
}
//M.Context.prototype.Gamma.symbolic = true;

//Like jquery noConflict
M.noConflict = function() {
	window.M=_M;
	return M;
};

M.Context.prototype.Infinity=Infinity;

M.Context.prototype.NaN=NaN;



M.global = new M.Context();

M.__proto__=M.global;function Set(discrete){
	var t = [];
	this.discrete = t;
	if(typeof discrete == "object" && discrete.forEach){
		discrete.forEach(function(b) {
			if(t.indexOf(b)==-1){
				t.push(b);
			}
		});
	}
};
Set.prototype.union=function(x){
	var t=this.discrete;
	x.discrete.forEach(function(b) {
		if(t.indexOf(b)==-1){
			t.push(b);
		}
	});
};
Set.prototype.forEach=function(x){
	this.discrete.forEach(x);
};
var EmptySet=new Set();
String.prototype.root=function(x){
	if(String(this)===x){
		return new Set([0]);
	}
	return EmptySet;
};
Boolean.prototype.root=
Number.prototype.root=function(){
	return EmptySet;
};
function indep(){
	//Linearly independent
	return false;
}
//inverse(o,b,d,side);

Array.prototype.root=function(x){
	if(x===undefined){
		console.warn("Variable not specified (Assume x)");
		x="x";
	}
	var domain = undefined;
	//Danger: assumes field
	if(this.type==="*"){
		var roots=new Set();
		this.forEach(function(f){
			//union
			roots.union(f.root(x));
		});
		return roots;
	}else if(false && this.type==="+" && indep(this[0],this[1])){
		//THIS IS WRONG. I want it to solve x^2 + y^2 = 0 types. (x^2 AND y^2 have to be zero)
		var roots=[];//new Set();
		this.forEach(function(f){
			roots.intersect(f.root(x));
		});
	}
	var lhs = this;
	var rhs = 0;
	var temp = 0;
	
	//FACTORISE!!!
	
	
	
	//OTHERWISE: (?? what condition)
	
	//TODO: this is a really slow algoritm. A tree path for the one and only x should be found first, instead of calculating it every single time!
	if(lhs.vars("x").length===1){
		while(lhs!==x){
			//console.log(lhs.clone(),"=",rhs.clone());
			
			var op = lhs.type;
			if(lhs[0].vars("x").length){
				
				// f(x) . B = k
				// f(x) . B / B= k / B
				//Danger: assumes right associativity
				//Right inverse of B:
				var side = L;
				rhs = inverse(op,lhs[1-side],rhs, side);
				if(rhs===undefined){
					throw("Could not solve");
				}
				lhs=lhs[side];
			}else if(lhs[1].vars("x").length){
				// A . f(x) = k
				// A^-1 . A . f(x) = A^-1 k
				// f(x) = A^-1 k
				//left inverse of A
				//Danger: assumes left associativity
				var side = R;
				rhs = inverse(op,lhs[1-side],rhs, side);
				if(rhs===undefined){
					throw("Could not solve");
				}
				lhs=lhs[side];
			}else{
				throw("The "+x+" variable is missing now!!!!")
			}
			
			
			
			if(temp++>40){
				throw("infinite loop!");
				break;
			}
		}
		return new Set([rhs])/*.simplify()*/; //TODO: may not be one value
	}else{
		throw("I don't know how to solve those");
	}
	
};
Array.prototype.inverse=function(y,x){
	//multivalued (as always)
	return this.apply("-",x).root(y);
};
Array.prototype.solve=function(x){
	function findValueThatIsZeroWhenItIsSatisfied(){
		//TODO: be more careful here!
		//Assumes this.type = "="
		return this[0].apply("-", this[1]);
		
	}
	if(this.type===";"){
		alert("solve set");
	}else if(this.type==="="){
		//make RHS = 0
		return findValueThatIsZeroWhenItIsSatisfied.apply(this).inverse(0);
	}
};M.Context.prototype.learn=function(x){
	if(x===truth){
		alert("Base fact already known.");
	}
	//Should learn(x) assume logical consistency of x and this
	var handle=" vars: x,y,z";
	var vars = new Set(x.vars());
	var self=this;
	vars.forEach(function(v) {
		if(self[v]){
			throw("Already defined! (TODO: intersect it)");
		}else{
			//Should I solve for it now? Or when required?
			self[v]=true;
		}
	});
	return handle;
};
M.Context.prototype.delete=function(var_name_or_handle){
	if(typeof var_name_or_handle === "object"){
		//handle
	}else{
		delete this[var_name_or_handle];
	}
};

Array.prototype.vars = function(x){
	var v = [];
	this.map(function(e) {
		v.push.apply(v,e.vars(x));
	});
	return v;
};
String.prototype.vars=function(x){
	var t = String(this);
	if(x===undefined || x===t){
		return [t];
	}
	return [];
};
Number.prototype.vars=
Boolean.prototype.vars=
function(){
	return [];
};var truth=[1,1].setType("=");
Array.prototype.impliedBy=function(context){
	if(this===truth){
		return true;
	}
	if(this.type===";"){
		for (var i = this.length - 1; i >= 0; i--){
			if(!this[i].impliedBy(context)){
				return false;
			}
		}
		return true;
	}
	
	if(this.type==="="){
		return false;
	}
	//Sub-statements? Too slow?
	
		for (var i = this.length - 1; i >= 0; i--){
			if(!this[i].impliedBy(context)){
				return false;
			}
		}
		return true;
};
//TODO: this is a bit messy. Maybe make it in the global, 
// and that way if it can be determined if it was/is consistent.
M.assumptions=true;
M.getAssumptions=function(){
	var x=M.assumptions;
	M.assumptions=true;
	return x;
	
};

M.assume=function(x){
	M.assumptions=M.assumptions.apply("&&", x);
};M.latex={
	"stringify":function(){},
	"parse":function(s){
		O(1, "Latex.parse");
		// O(n * k), n=string length, k = amount of '\frac's
		//Currently only parses \frac
		var i,l=s.length
		//indexOf is BAD!!! It is fine only when we only have one type of \expr
		while((i = s.indexOf("\\begin"))!=-1){
			var n = s.indexOf("}", i+7);
			
			var type=s.substring(i+7,n);
			
			var end_string="\\end{"+type+"}";
			
			var b = s.indexOf(end_string, n);
			var x = s.substring(n+1,b);
			switch(type){
			case "matrix":
				
				x=x.replace(/\\\:/g, ",").replace(/\\\\/g, ";");
				s=s.split("");
				
				//s.splice(b,b+end_string.length);
				
				s[i]="[";
				s.splice(b, end_string.length-1);
				s[b]="]";
				s.splice(n+1,b-n-1,x);
				s.splice(i+1,n+1-i-1);
				s=s.join("");
				break;
			default:
				throw(new SyntaxError("Latex \\begin{"+type+"} block not understood."))
			}
		}
		while((i = s.indexOf("\\text"))!=-1){
			var n = s.indexOf("}", i+6);
			var text=s.substring(i+6,n);
			
			s=s.split("");
			
			s.splice(i,n-i+1,"\\"+text);
			s=s.join("");
		}
		while((i = s.indexOf("\\frac"))!=-1){
			var n,good=false;
			var deep=0;
			for(n = i+5;n<l;n++){
				if(s[n]=="{"){
					deep++;
				} else if(s[n]=="}"){	
					deep--;
					if(!deep){
						good=true;
						break;
					}
				}
			}
			if(!good){
				throw(new SyntaxError(msg.latexParse));
			}
			good=false;
			
			if(s[n+1]!="{"){
				throw(new SyntaxError("Unexpected '"+s[n+1]+"' between \\frac operands"));
			}
			
			var i2=n+1;
			var n2;
			for(n2 = i2;n2<l ;n2++){
				if(s[n2]=="{"){
					deep++;
				} else if(s[n2]=="}"){
					
					deep--;
					if(!deep){
						good=true;
						break;
					}else{
						
					}
				}
			}
			if(!good){
				throw(new SyntaxError(msg.latexParse));
			}
			s=s.split("");
			
			//TODO: bad idea. maybe fix requiresParen...
			s[i+5]="((";
			s[n]=")";
			s[i2]="(";
			s[n2]="))";
			s.splice(i2,0,"/");
			s.splice(i,5);
			s=s.join("");
			
		}
		var latexexprs = {
			"cdot":"*",
			"vee":"∨",
			"wedge":"&&",
			"neg":"¬",
			"left":"",
			"right":"",
			"pm":"±",
			"circ":"∘",
			"sqrt":"√",
			"div":"/",
			
			'gt':">",
			"left|":"\\abs(",
			"right|":")",
			"times":"*",
			":":"",
			"left(":"(",
			"right)":")",
			"left[":"[",
			"right]":"]",
			'ge':">=",
			'lt':"<",
			'le':"<=",
			"infty":"∞",
			"sim":"~",
			"frac":"",
			"backslash":"\\",
			"alpha":"α",
			"beta":"β",
			'gamma':"γ",
			'delta':"δ",
			'zeta':"ζ",
			'eta':"η",
			'theta':"θ",
			'iota':"ι",
			'kappa':"κ",
			'mu':"μ",
			'nu':"ν",
			'xi':"ξ",
			'omicron':"ο",
			'rho':"ρ",
			'sigma':"σ",
			'tau':"τ",
			'upsilon':"υ",
			'chi':"χ",
			'psi':"ψ",
			'omega':"ω",
			'phi':"ϕ",
			"phiv":"φ",
			"varphi":"φ",
			"epsilon":"ϵ",
			"epsiv":"ε",
			"varepsilon":"ε",
			"sigmaf":"ς",
			"sigmav":"ς",
			"gammad":"ϝ",
			"Gammad":"ϝ",
			"digamma":"ϝ",
			"kappav":"ϰ",
			"varkappa":"ϰ",
			"piv":"ϖ",
			"varpi":"ϖ",
			"rhov":"ϱ",
			"varrho":"ϱ",
			"thetav":"ϑ",
			"vartheta":"ϑ",
			"pi":"π",
			"lambda":"λ",
			'Gamma':"Γ",
			'Delta':"Δ",
			'Theta':"Θ",
			'Lambda':"Λ",
			'Xi':"Ξ",
			'Pi':"Π",
			'Sigma':"Σ",
			'Upsilon':"Υ",
			'Phi':"Φ",
			'Psi':"Ψ",
			'Omega':"Ω",
			"perp":"⊥",
			",":" ",
			"nabla":"∇",
			"forall":"∀",
			"sum":"∑",
			"summation":"∑",
			"prod":"∏",
			"product":"∏",
			"coprod":"∐",
			"coproduct":"∐",
			"int":"∫",
			"integral":"∫"
			
		};
		s=s.replace(/\\([a-z]+)/g,function(u,x){
			var s=latexexprs[x];
			return " "+ ((s!=undefined)?s:("\\"+x));
		});
		
		
		//Naughty:
		s=s.replace(/[\[\{]/g,"(");
		s=s.replace(/[\]\}]/g,")");
		
		return s;
	}
};
//Differentiate a simplified function:
//TODO: make this differentiate any function. At the moment it will only work for simplified ones, due to the fact that
// the "," is still binary, but simplify()s to n-ary.
Array.prototype.differentiate=function(x, n){
	//Nth deriviative with respect to x
	if(n<=-1){
		return this.integrate(x, -n);
	}else if(n==0){
		return this;
	}
	if(n>1){
		return this.differentiate(x, n-1).differentiate(x, n);
	}else{
		if(distributive("D", this.type)){
			return this.map(function(t){
				return t.differentiate(x, n);
			}).setType(this.type).simplify();
		}
		switch(this.type){
			case "*":
				var da=this[0].differentiate(x,n);
				var db=this[1].differentiate(x,n);
				return this[0]
				.apply("*", db)
				.apply("+",
					this[1]
					.apply("*", da)
				);
			case "/":
				var da=this[0].differentiate(x,n);
				var db=this[1].differentiate(x,n);
				return this[1]
				.apply("*", da)
				.apply("-",
					this[0]
					.apply("*", db)
				)
				.apply("/",
					this[1]
					.apply("^",2)
				)
			case "^":
				var da=this[0].differentiate(x,n);
				var db=this[1].differentiate(x,n);
				return this[0]
				.apply("^",
					this[1].apply("-",1)
				)
				.apply("*",
					this[1]
					.apply("*",
						da
					)
					.apply("+",
						this[0]
						.apply("*",
							"log"
							.apply("∘",
								this[0]
							)
						)
						.apply("*",
							db
						)
					)
				);
			case "!":
				return this[0]
				.differentiate(x,n)
				.apply("*",
					"Gamma"
					.apply("∘",
						this[0]
						.apply("+",
							1
						)
					)
				)
				.apply("*",
					"digamma"
					.apply("∘",
						this[0]
						.apply("+",
							1
						)
					)
				);
			case "√":
				return this[0]
				.differentiate(x,n)
				.apply("/",
					this[0]
					.apply("√")
					.apply("*",
						2
					)
				);
			case "@-":
			case "@+":
			case "@±":
				return this[0].differentiate(x,n).apply(this.type);
			case "∘":
				return this[1]
				.differentiate(x,n)
				.apply("*",
					//this[0]
					//.differentiate(x,n)/*TODO: function by name*/
					[this[0]].setType("#").differentiate()
					//"cos"
					.apply("∘",
						this[1]
					)
				);
			default:
				return ["D",this].setType("∘");
				throw("Cannot differeniate expressions using the '"+this.type+"' operator");
				break;
			
		}
	}
};

String.prototype.differentiate=function(x,n){
	if(n<=-1){
		return this.integrate(x, -n);
	}else if(n==0){
		return String(this);
	}
	if(String(this)==x){
		return (n==1)?1:0;
	}
	return 0;
};
Number.prototype.differentiate=function(x,n){
	if(n<=-1){
		return this.integrate(x, -n);
	}else if(n==0){
		return Number(this);
	}
	
	if(this==Infinity || this==-Infinity){
		return undefined;
	}
	return 0;
}
Array.prototype.simplify=function(){
	
	//Rules:
	// simplify ∘ simplify ≠ simpify
	
	// Algorithm:
	// O(2^n???)
	O("?", "simplify");
	if(this.length===1){
		var a = this[0].simplify();
		
		return a.apply(this.type);
	} else if(this.length===2){
		var a = this[0].simplify();
		var b = this[1].simplify();
		//In place?
		return a.apply(this.type, b);
	}
};Array.prototype.sub=function(a,b){
	var c=[].setType(this.type);
	if(this.type==="#" && this[1]!=a){
		//TODO: checl this
		return this.clone();
	}else{
		var i,l=this.length;
		for(i=0;i<l;i++){
			c.push(this[i].sub(a,b));
		}
	}
	//TODO: WARNING - DOES NOT SIMPLIFY.
	return c;
};
String.prototype.sub=function(a,b){
	var t = String(this);
	if(t===a){
		return b;
	}
	return t;
};
Number.prototype.sub=I;

Array.prototype.apply=function(o, x, __commuted__){
	//console.log("Apply ",o,x," to ",this,this.type);
	if(o==="∘" && this.type==="_"){
		//TODO: check if it is symbolic.
		return M.global[this[0]](x, this[1]);
	}
	if(o==="∘" && this.type==="#"){
		return this[0]
		.sub("x", x)
	}
	if(o === "," && this.type === ","){
		return this.concat([x]).setType(this.type);
	} else if(o === ";" && this.type === ";"){
		return this.concat([x]).setType(this.type);
	} else if(o === ";" && this.type === ","){
		
		//TODO: BUG, assumes ; only has two operands.
		M.assume([(x.type==",")?1:0,1].setType("="));
		return [this,x].setType(";");
	}
	if(x!==undefined && identity(o)===x){
		//console.log("identity");
		return this;
	}
	if(x!==undefined && inverse(o,x,NaN,R)===false){
		//console.log("identity - inverse");
		return x;
	}
	//Distributive law:
	if(this.type === "," && x.type === ","){
		// Vector-Vector operations:
		if(o === "*" || o === "+" || o === "-"){
			for (var i = x.length - 1; i >= 0; i--){
				this[i]=this[i].apply(o,x[i]);
			}
		}else{
			throw("Vector-vector operator: "+ o + "not understood");
		}
		if(o === "*"){
			var sum=0;
			for (var i = this.length - 1; i >= 0; i--){
				sum=sum.apply("+",this[i]);
			}
			return sum;
		}
		return this;
	}else if(distributive(o,this.type)){
		
		//console.log("attempting to apply distributve to multiply "+this.toLatex()+" by "+x.toLatex());
		for (var i = this.length - 1; i >= 0; i--){
			
			//console.log(" - multiply ("+o+") the "+this[i].toString()+" factor by "+x);
			this[i]=this[i].apply(o,x);
			//console.log(" X multiply ("+o+") the "+this[i].toString()+" factor by "+x);
			
		}
		return this;
	}
	//DEBUG, the only logical order I can think of
	//is linking numbers, but thats kinda crap.
	if(x!==undefined && typeof x==="number" || typeof x==="boolean"){ //!isNaN(x))
	
	//Associative law:
	if(this.type == o && associative(o)){
		//It can apply itself to ONE and only one
		//of the sub exprs of a.
		var found=false;
		//TODO Which one/order though?
		//TODO: this.length??? OLD CODE??? It should only be 2 except for vectors
		for (var i = this.length - 1; i >= 0; i--){
			if(typeof this[i] == "number" || typeof this[i]=="boolean"){
				this[i]=this[i].apply(o,x);
				found=true;
				break;
			}
		}
		if(found){
			return this;
		}
	}
	}
	
	
	//Somtimes commuting will be useless. It is also annoying!
	if(!__commuted__ && this.type==="*") {
		if(o==="/" && x.type === "/"){
			return x.reverse().apply("*",this);
		}
	}
	if(x===undefined){
		return [this].setType(o);
	}
	return [this,x].setType(o);
};
String.prototype.apply=function(o, b, __commuted__){
	
	var t=String(this);
	if(operators[o][2]==1){
		return [t].setType(o);
	}
	
	/*hack for without doing string conversion*/
	var ident=identity(o);
	if(ident===b){
		return t;
	}else if(ident===true && typeof b==="number" && b){
		return t;
	}else if(ident===false && typeof b==="number" && !b){
		return t;
	}
	
	if(inverse(o,b,NaN,R)===false){
		return b;
	}
	if(!__commuted__ && ((typeof b)!="string") && commutative(o)){
		//console.log("commute "+o, b, t);
		return b.clone().apply(o, t, true);
	}
	//Global functions:
	if(o==="∘" && M.global[t]){
		if(M.global[t].symbolic){
			return M.global[t](b);
		}
		if(typeof b === "number" || typeof b === "boolean"){
			return M.global[t](b);
		}
		
	}
	return [t, b].setType(o);
}


Number.prototype.apply=function(o, b, __commuted__){
	
	if(o==="∘"){
		//∘ commutes with scalars
		if(__commuted__){
			return [b, Number(this)].setType("*");
		}else{
			return b.clone().apply("*", Number(this), true);
		}
	}
	
	
	var a = Number(this);
	//TODO Identity and inverse can be combined if the left operand is included in
	// the calculation?
	if(b){
		var ident=identity(o);
		if(ident===b){
			return a;
		}else if(ident===true && this){
			return b;
		}else if(ident===false && !this){
			return b;
		}
	}
	
	if(b===undefined || (typeof b==="number" || typeof b==="boolean")){ // !isNaN(b)
		switch(o){
			case "+":
				return a+b;
			case "@+":
				return a;
			case "@-":
				return -a;
			case "*":
				return a*b;
			case "/":
				if(b===0){
					throw("Division by zero is not defined.");
				}
				return a/b;
			case "-":
				return a-b;
			case "√":
				//TODO: make sure ^(1/2) and this are equiv.
				if(a<0){
					return Math.pow(-a,0.5).apply("*","i");
				}
				return Math.pow(a, 0.5);
			case "^":
				return Math.pow(a,b);
			case "===":
				return a===b;
			case "==":
				return a==b;
			case "≠":
				return a!=b;
			case ">":
				return a>b;
			case "<":
				return a<b;
			case ">=":
				return a>=b;
			case "<=":
				return a<=b;
			case "&":
				return a&b;
			case "^":
				return a^b;
			case "∨":
				return a||b;
			case "|":
				return a|b;
			case "%":
				return a%b;
			case "&&":
				return a&&b;
			case "∘":
				//assume multiplication
				return a*b;
			case "¬":
				return !a;
			case "~":
				return ~a;
			case "±":
				return [a+b,a-b].setType(",");
			case "@±":
				return [a,-a].setType(",");
			case ";":
			case ",":
				//TODO: fix this
				if(b.type === o){
					return b.push(a);
				}
				return [a,b].setType(o);
			case "!":
				return M.Context.prototype.factorial(a);
			case "=":
				if(a==b){
					return truth;
				}
				window.a=a;
				window.b=b;
				throw(new Error("The statement is always false: "+a+" ≠ "+b))
				throw(new ReferenceError("Left side of assignment is not a reference."))
			default:
				if(b===undefined){
					return [a].setType(o);
				}
				return [a,b].setType(o);
				//TODO: maybe this should be thrown
				throw("Operator '"+o+"' is not yet numerically implemented.");	
		}
	}
	
	if(commutative(o)){
		//console.log(Number(this),"commute "+o, b);
		if(identity(o)==Number(this)){
			return b;
		}
		if(__commuted__){
			return [b, Number(this)].setType(o);
		}else{
			return b.clone().apply(o, Number(this), true);
		}
	}
	//Messy hack: null factor law:
	if(a===0 && o=="/"){
		M.assume([b,0].setType("≠"));
		return 0;
		return [["δ",b].setType("∘")].setType("@±");
	}
	return [Number(this), b].setType(o);
};

Boolean.prototype.apply=Number.prototype.apply;


var glsl={
	"void":1,
	"bool":2,
	"int":3,
	"float":4,
	"vec2":5,
	"vec3":6,
	"vec4":7,
	"mat2":10,
	"mat3":11,
	"mat4":12,
	"function":20
};

var exportLanguages={
	"text/javascript": function (o,a,b){
		function _(x){
			return "("+x+")";
		}
		
		var p = precedence(o);
		function S_(x){
			if(x.p<p){
				return _(x.s);
			}
			return x.s;
		}
		switch(o){
			case "+":
			case "-":
			case "/":
			case "*":
			case "?":
			case ":":
			case ",":
			case "&&":
			case "==":
			case "<":
			case ">":
			case "<=":
			case ">=":
			case "!==":
			case "===":
			case ">>":
			case "<<":
			case "&":
			case "%":
				return {s:S_(a)+o+S_(b), t: types.number, p: p};
			case "_":
				if(a.t === types.variable && (b.t === types.variable || b.t == types.number)){
					return {s:S_(a)+o+S_(b), t: types.variable, p: p};
				}else{
					throw("Operator '_' does not exist in javaScript for those types.");
				}
			case "~":
				return {s:o+S_(a),t:types.number, p: p};
			case "@-":
			case "@+":
				return {s:o.substring(1)+S_(a),t:types.number, p: p};
			case "^":
				return {s:"Math.pow("+a.s+","+b.s+")",t:types.number, p: p};
			case "∘":
				if(a.t===types.function){
					return {s:a.s+"("+b.s+")",t:types.number, p: p};
				}else{
					//this is ugly:
					p=precedence("*");
					return {s:S_(a)+"*"+S_(b),t:types.number, p: p};
				}
			case "#":
				//p=precedence("return ");
				return {s:"function(x){return "+a.s+"}", t:types.function, p: p};
			case "√":
				return {s:"Math.sqrt("+a.s+")",t:types.number, p: p};
			case "!":
				return {s:"factorial("+a.s+")",t:types.number, p: p};
			default:
				throw("Could not translate operator: '"+o+"' into javscript!");
		}
	},
	"x-shader/x-fragment":function(o,a,b){
		//http://www.opengl.org/registry/doc/GLSLangSpec.Full.1.20.8.pdf
		function _(x){
			return "("+x+")";
		}
		var p = precedence(o);
		function S_(x){
			if(x.p<p){
				return _(x.s);
			}
			return x.s;
		}
		switch(o){
			case "&&":
			case "||":
				if(a.t === b.t && b.t === glsl.bool){
					return {s:S_(a)+o+S_(b), t: glsl.bool, p: p};
				}
				throw("Operands must also be boolean values");
			case "==":
			case "<":
			case ">":
			case "<=":
			case ">=":
			case "!=":
				if(a.t !== b.t){
					throw("The equality operators and assignment operator are only allowed if the two operands are same size and type.");
				}
				return {s:S_(a)+o+S_(b), t: glsl.bool, p: p};
			
			case ":":
				if(a.t !== b.t){
					throw("Switching groups must be the same type");
				}
				
				return {s:S_(a)+o+S_(b), t: b.t, p: p};
			case "?":
				if(a.t !== glsl.bool){
					throw("Must be boolean type");
				}
				return {s:S_(a)+o+S_(b), t: b.t, p: p};
				
			case "+":
			case "-":
			case ",":
				if(a.t !== b.t){
					throw("Types don't match: "+a.t+", "+b.t);
				}
				return {s:S_(a)+o+S_(b), t: glsl.float, p: p};
			case "*":
			case "/":
				return {s:S_(a)+o+S_(b), t: glsl.float, p: p};
			case "_":
				/*if(a.t === types.variable && (b.t === types.variable || b.t == types.number)){
					return {s:S_(a)+o+S_(b), t: glsl.float, p: p};
				}else{
					throw("Operator '_' does not exist in javaScript for those types.");
				}*/
				throw("Write this later.");
			case "~":
				return {s:o+S_(a),t:types.number, p: p};
			case "@-":
			case "@+":
				return {s:o.substring(1)+S_(a),t:glsl.float, p: p};
			case "^":
				return {s:"pow("+a.s+","+b.s+")",t:glsl.float, p: p};
			case "∘":
				if(a.t===glsl.function){
					return {s:a.s+"("+b.s+")",t:glsl.float, p: p};
				}else{
					//this is ugly:
					p=precedence("*");
					return {s:S_(a)+"*"+S_(b),t:glsl.float, p: p};
				}
			case "#":
				throw("Anonymous functions not supported.");
			case "√":
				return {s:"sqrt("+a.s+")",t:glsl.float, p: p};
			case "!":
				//requirements....
				return {s:"factorial("+a.s+")",t:glsl.float, p: p};
			case "&":
			case "|":
			case "%":
			case "~":
			case ">>":
			case "<<":
				throw("Reserved");
			default:
				throw("Could not translate operator: '"+o+"' into javscript!");
		}
	},
	"text/latex":function(o,a,b){
		function _(x){
			return "\\left("+x+"\\right)";
		}
		var p = precedence(o);
		function S_(x){
			if(x.p<p){
				return _(x.s);
			}
			return x.s;
		}
		switch(o){
			case "/":
				return {s:"\\frac{"+a.s+"}{"+b.s+"}",t:types.number, p: p};
			case "^":
			case "_":
				return {s:S_(a)+o+"{"+b.s+"}",t:types.variable, p: p};
			case "∘":
				return {s:S_(a)+_(b.s),t:types.number, p: p};
			case "√":
				return {s:"\\sqrt{"+a.s+"}",t:types.number, p: p};
			case "#":
				return {s:o+_(a.s),t:types.function};
		}
		if(o[0]=="@"){
			return {s:o[1]+S_(a),t:types.number, p: p};
		}
		if(postfix(o)){
			return {s:S_(a)+o,t:types.number, t:types.number, p: p};
		}
		var self=this;
		var os={
				"*":"\\cdot ",
				"∨":"\\vee ",
				"&&":"\\wedge ",
				"±":"\\pm ",
				"∘":"\\circ "
		};
		return {
			s: Array.prototype.slice.apply(arguments,[1]).map(
				S_
			).join(os[o] || o),
			t: types.number,
			p: p
		};
		
		/*
		
		var latexFuncs="log|exp|asinh|acosh|atanh|sinh|sech|cosh|coth|tanh|sin|cos|tan|cot|sec|exp|log".split("|");

		function latexExprForOperator(o){
			var os={
				"*":"\\cdot ",
				"∨":"\\vee ",
				"&&":"\\wedge ",
				"±":"\\pm ",
				"∘":"\\circ "
			};
			return os[o]||o;
		}


		Array.prototype.toLatex=function(__matrix__){
			//Infix
			if(this.length>=2){
				if(this.type==="/"){

					return "\\frac{"+this[0].toLatex()+"}{"+this[1].toLatex()+"}";
				} else if(this.type==="^" || this.type ==="_"){

					var a = this[0].toLatex();
					if(this[0].requiresParentheses(this.type)){
						a="\\left("+a+"\\right)";
					}
					return a+this.type+"{"+this[1].toLatex()+"}";
				} else if(this.type==="∘"){
					var a = this[0].toLatex();

					if(latexFuncs.indexOf(a)!==-1){
						a="\\"+a;
					}else if(this[0].requiresParentheses(this.type)){
						a="\\left("+a+"\\right)";
					}

					return a+"\\left("+this[1].toLatex()+"\\right)";
				} else if(this.type==="," && __matrix__){
					var self=this;
					return this.map(function(t){
						var a = t.toLatex();
						if(t.requiresParentheses(self.type)){
							a="\\left("+a+"\\right)";
						}
						return a;
					}).join(latexExprForOperator("\\:"));
				} else if(this.type===";" && false){

					var self=this;
					return "\\begin{matrix}"+this.map(function(t){
						var a = t.toLatex(true);
						if(t.requiresParentheses(self.type)){
							a="\\left("+a+"\\right)";
						}
						return a;
					}).join("\\\\")+"\\end{matrix}";

				} else {
					var self=this;
					return this.map(function(t){
						var a = t.toLatex();
						if(t.requiresParentheses(self.type)){
							a="\\left("+a+"\\right)";
						}
						return a;
					}).join(latexExprForOperator(this.type));
				}
			}
			//Postfix/Prefix Unary operators
			if(this.length==1){
				var a = this[0].toLatex();
				if(this[0].requiresParentheses(this.type)){
					a="\\left("+a+"\\right)";
				}
				if(this.type[0]=="@"){
					//Prefix
					return this.type.substring(1)+a;
				} else if(this.type==="√"){
					return "\\sqrt{"+this[0].toLatex()+"}";
				}
				if(postfix(this.type)){
					return a+this.type;
				}
				return this.type+a;
			}

			//Prefix
			if(false && this.length==2){
				return this[0].toLatex()+this.type+this[1].toLatex();
			}

		};

		*/
		
	}
};


Array.prototype.toTypedExpression=function(language, context){
	return exportLanguages[language].apply(this,
		[this.type].concat(
			this.map(function(x){
				return x.toTypedExpression(language, context);
			})
		)
	);
};
/*
Number.prototype.toLatex=function(){
	if(Number(this)===Infinity){
		return "\\infty";
	}
	return this.toString().replace(/e([\+\-])([\d\.]+)/,"\\cdot 10^{$2}");
};*/
Number.prototype.toTypedExpression=function(language){
	if(language === "text/javascript"){
		if(Number(this) === Infinity){
			return "Infinity";
		}
		//Note: this does work for numbers that result in a string like 3e+12, but it won't work for exporting to latex
		return {s:this.toString(),t:types.number};
	}else if(language==="x-shader/x-fragment"){
		var num=this.toExponential();
		if(num.indexOf(".")===-1){
			num=num.replace("e",".e");
		}
		return {s:num,t:glsl.float};
	}
	
	if(Number(this)===Infinity){
		return "\\infty";
	}
	return {s:this.toString().replace(/e([\+\-])([\d\.]+)/,"\\cdot 10^{$2}"),t:types.number};
};
/*
String.prototype.toLatex=function(){
	var s = String(this);
	if((s.length>1) || (latexVars.indexOf(s)!=-1)){
		return "\\"+s;
	}
	return s;
};

*/

String.prototype.toTypedExpression=function(language){
	var s = String(this);
	var t=types.variable;
	if(language==="text/javascript"){
		if(M.global[s]){
			//and check type of that expression...
		}
		if(Math[s]){
			s="Math."+s;
			t=types.function;
		}
	}else if(language==="x-shader/x-fragment"){
		t=glsl.float;
		if(Math[s]){
			t=glsl.function;
		}
	}else{
		//latex
		if(s.length>1){
			s="\\"+s;
		}
	}
	
	return {s:s,t:t};
};

//TODO: make the following work for latex because it is much neater.
Function.prototype.toExpression=
String.prototype.toExpression=
Array.prototype.toExpression=
Number.prototype.toExpression=
function(language){
	return this.toTypedExpression(language||"text/latex").s;
}



Number.prototype.toStrings=function(){
	return this.toString().replace(/e([\+\-])([\d\.]+)/,"\\cdot 10^{$2}");
};

var _Array_prototype_toString=Array.prototype.toString;
Array.prototype.toStrings=function(){
	if(!this.type){
		return _Array_prototype_toString.apply(this,arguments);
	}
	//Infix
	if(this.length>=2){
		var self=this;
		return this.map(function(t){
			var a = t.toStrings();
			if(t.requiresParentheses(self.type)){
				a="("+a+")";
			}
			return a;
		}).join(this.type);
	}
	//Postfix
	if(this.length==1){
		return this[0].toStrings()+this.type;
	}
	
	//Prefix
	if(false && this.length==2){
		return this[0].toStrings()+this.type+this[1].toStrings();
	}
};

Boolean.prototype.toStrings=Boolean.prototype.toString;
String.prototype.toStrings=String.prototype.toString;

}(
	function(){
		if(typeof window === 'undefined'){
			return exports;
		}
		return window;
	}()
	
));