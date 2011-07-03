//TODO: Stop using ^ for power, if we want the parser to parse a superset of JS

var eqtype={"product":1,"sum":2,"number":3,"discretevector":6,"continuousvector":7,"power":8,"fn":9,"fraction":10,"derivative":11,"integral":12,"equality":13,"pm":14,"operatorfactor":15,"lessthan":16,"greaterthan":17,"range":18};




String.prototype.getString=function(__ignore,javascript){
    if(javascript && window.app){
        var self=dirty(this.toString());
        if(self=="x"||self=="y"){
            return self;
        }
        if(app.variables[self]){
            return "app.variables["+JSON.stringify(self)+"]";
        }
        if(window[self]){
            return self;
        }
        return "app.variables["+JSON.stringify(self)+"]";
    }
    return this.toString();
};
Number.prototype.getString=function(){
    return this.toString();
};

Array.prototype.getString=function(braces,javascript){
    var s=braces?"(":"";
    var self=this;
    var _first=true;
    var endchar="";
    var afterme="";
    var second=true;
    //this.forEach(function(e){
    for(var i=0;i<this.length;i++){
        var e=this[i];
        if(!_first){
            second=false;
        }
        if(_first){
            if(javascript && self.type==eqtype.power){
                s+="pow(";
                endchar=")";
            }
            if(!javascript && self.type==eqtype.pm){
                s+="±";
            }
            else if(braces && self.type==eqtype.discretevector){
                s+="[";
                endchar="]";
            }
            else if(self.type==eqtype.fn){
                if(typeof e !="string" && typeof e!="function"){
                    throw(MessageStrings.fnnamenotstring);
                    return "ERROR";
                }
                if(functions.indexOf(e)==-1){
                    var _found=false;
                    if(window && window.app && window.app.variables && window.app.variables[e] && typeof window.app.variables[e]=="function"){
                        _found=true;
                    }
                    if(!_found){
                        throw("Unknown function: "+e);
                        return "ERROR";
                    }
                }
                afterme="(";
                endchar=")";
            }
            _first=false;
        }else if(self.type==eqtype.sum){
            s+="+";
        }else if(self.type==eqtype.product){
            s+="*";
        }else if(javascript && self.type==eqtype.power){
            s+=",";
        }else if(self.type==eqtype.equality){
            s+="=";
		}else if(self.type==eqtype.lessthan){
			s+="<";
	    }else if(self.type==eqtype.greaterthan){
			s+=">";
		}else if(self.type==eqtype.power){
            s+="^";
        }else if(self.type==eqtype.fraction){
            s+="/";
        }else if(self.type==eqtype.fn){
            if(second){
                s+=",";
            }
        }else{
            s+=",";
        }
        if(e.type==eqtype.discretevector){
            s+=e.getString(0,javascript);
        }else{
            s+=e.getString(10,javascript);
        }
        
        s+=afterme;
        afterme="";
    }
    s+=endchar;
    endchar="";
    if(braces){
        s+=")";
    }
    return s;
};
String.prototype.__defineGetter__("s",function(){return JSON.stringify(String(this));});


var p_internal=(function (){
	var types={
		number:1,
		operator:2,
		paren:3,
		variable:4
	};
	var names=["none","num","op","paren","var"];


	var left=0;
	var right=1;

//	var operators=		[[","],		["=","+=","-=","*=","/=","%=","&=","^=","|="],	["?:"],	["||"],	["&&"],	["|"],	["\u22BB"],	["&"],	["==","!=","!==","==="],[">>","<<"],["+","-"],	["*","/","%"],["^"],		["!","~"],	["++","++",".","->"],["::"]];
//	var operators_assoc=[0,			1,												1,		0,		0,		0,		0,		0,			0,		0,						0,			0,			1,			 ,1/* TODO*/,	0,			0				    ,0];
//	var operators_args=	[2,			2,	]
	var operators={};
	var op_precedence=0;
	function op(v,assoc,arg_c){
		var memsave=[assoc,op_precedence++,arg_c];
		if(typeof v==="object"){
			for(var i=0;i<v.length;i++){
				operators[v[i]]=memsave;
			}
		}else{
			operators[v]=memsave;
		}
	}
	var L=left;
	var R=right;
	[
[","],
[["=","+=","-=","*=","/=","%=","&=","^=","|="],R],
[["||"]],
[["&&"]],
[["|"]],
[["\u22BB"]],
[["&"]],
[["==","!=","!==","==="]],
[[">>","<<"]],
[["+","-"]],
[["*","/","%"]],
[["^"]],
[["!","~"],R,1],
[["++","++",".","->"],L,1],
[["::"]]	
	].forEach(function(o){
		op(o[0],o[1]||L,o[2]||2);
	});
	/*
	var _ochars = operators.map(function(e){return e.join("")}).join("");
	var ochars="";
	for(var ochar_i=_ochars.length-1;ochar_i>=0;ochar_i--){
		
		if(ochars.indexOf(_ochars[ochar_i])==-1){
			ochars+=_ochars[ochar_i];
		}
	}
	_ochars=undefined;
	*/
	ochars=":>-.+~!^%/*<=&⊻|?,";
	/*var regex=[0,/[\d\.]/,
		/[\!\~\^\&\*\-\+\=\/]/,/[\(\)\[\]]/,
	   /[^\!\~\^\&\*\-\+\=\/\d\.\(\)\[\]]/
		];
		*/
	var nummustbe="1234567890.";
	var parenmustbe="(['\"])";
	var varcannotbe=ochars+parenmustbe+nummustbe;
	var regex=[0,
	function(e){return nummustbe.indexOf(e)!==-1;},
	function(e){return ochars.indexOf(e)!==-1;},
	function(e){return parenmustbe.indexOf(e)!=-1;},
	function(e){return varcannotbe.indexOf(e)==-1;}
	];
	
	function precedence(v){
		if(!operators[v]){
			throw("Precedence of "+v+" not known!");
		}
		return operators[v][1];
	}

	
	return function (s){
		
		var current_type=0;
		var i=0,len=s.length;

		var current_token=s[0];
		current_type=4;
		for(var t=1;t<4;t++){
			if(regex[t](current_token)){
				current_type=t;
				break;
			}
		}
		var output=[];
		var stack=[];
		var rpn_stack=[];
		function next_rpn(token){
			// While there are input tokens left
			
			
			// Read the next token from input.
			
			
			// If the token is a value
			
			if(token.t===types.number || token.t===types.variable){
				
				// Push it onto the stack.
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
					throw("The user has not input sufficient values in the expression")
					
				// Else,
				}else{
					// Pop the top n values from the stack.
					
					var values=rpn_stack.splice(-n);
					// Evaluate the operator, with the values as arguments.
					//var evaled=("("+values[0]+token.v+values[1]+")");
					values.type=token.v;
					// Push the returned results, if any, back onto the stack.
					rpn_stack.push(values);
				}
			}
			// 			
			output.push(token);
		}
		
		function next_token(token){
			//console.log(token.v.s, names[token.t]);
			// Read a token.
			// If the token is a number, then add it to the output queue.
			if(token.t==types.number || token.t==types.variable){
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
			if(token.v=="("){
				//then push it onto the stack.
				stack.push(token);
			}
			// If the token is a right parenthesis:
			if(token.v==")"){
				// Until the token at the top of the stack is a left parenthesis,
				while(stack[stack.length-1].v!="("){

					// If the stack runs out without finding a left parenthesis, then
					if(!stack.length){
						//there are mismatched parentheses.
						throw("there are mismatched parentheses");
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

		while(i<len){
			i++;
			var c;
			if(!(i<len)){
				next_token({v:current_token,t:current_type});
				//send it
				current_token="";
				break;
			}else if(regex[current_type](c=s[i])){
				current_token+=c;
			}else{
				//console.log("change detected at "+s[i]);
				//We've got a token!

				//send it
				next_token({v:current_token,t:current_type});

				//move on
				if(current_type===types.operator || current_type===types.paren){

					//console.log("just finished op: ",current_token.s, names[current_type]);
					//console.log("now @ "+c);
					//Just finished an operator.

					//send operator: Wait no, don't send it.

					current_type=4;
					for(var t=1;t<4;t++){
						if(regex[t](c)){
							current_type=t;
							break;
						}
					}
					//console.log("just found out that ",c.s," is a "+names[current_type]);


				}else{

					if(regex[types.operator](c)){
						//We've got an operator!

						current_type=types.operator;
						//DO NOT SEND OPERATOR TOKEN YET.

					}else if(regex[types.paren](c)){

						current_type=types.paren;

					}else{
						//Let's assume multiplication

						console.error("Operator was expected between ",current_token.s," and ",c.s);
					}



				}
				current_token=c;

			}

		}
		if(current_token.length){

			console.warn("final token: ",current_token);
		}


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
			throw("Stack not the right size!")
		}
		return rpn_stack[0];
		return output.map(function(o){return o.v}).join(" ");
	}
	
	
	
})();


function p(x){
	return p_internal(x);
}

function check(n){
	return [(p(n).getString(0,1)),(n)];
}
function test(){
	
	var tests=["x^2+3*(x+3)","1+((((((((((((((3)))))))))))*3/32)))"]

	var start=new Date();
	for(var i=0;i<10000;i++){
		tests.forEach(function(e){
			p(e);
		});
	}

	var end=new Date();
	console.log("Test performed in "+(end-start)+"ms");


}