
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
function p_internal(s){
	var types={
		number:1,
		operator:2,
		paren:3,
		variable:4
	};
	var names=["none","num","op","paren","var"];
	var current_type=0;
	var i=0,len=s.length;
	
	var regex=[0,/[\d\.]/,
	/[\!\~\^\&\*\-\+\=\/]/,/[\(\)\[\]]/,
   /[^\!\~\^\&\*\-\+\=\/\d\.\(\)\[\]]/
	];
	var current_token=s[0];
	current_type=4;
	for(var t=1;t<4;t++){
		if(regex[t].test(current_token)){
			current_type=t;
			break;
		}
	}
	var output=[];
	var stack=[];
	function precedence(v){
		var p=[
			["::"],
			["++","++","()","[]",".","->"],
			["!","~"],
			["*","/","%"],
			["+","-"],
			[">>","<<"],
			["==","!=","!==","==="],
			["&"],
			["^"],
			["|"],
			["&&"],
			["||"],
			["?:"],
			["=","+=","-=","*=","/=","%=","&=","^=","|="],
			["throw"],
			[","]
			
		];
		for(var i=0,len=p.length;i<len;i++){
			if(p[i].indexOf(v)!=-1){
				return i;
			}
		}
		throw("Precedence not known!");
	}
	
	var left=0;
	var right=1;
	function associativity(v){
		return left;
	}
	function next_token(token){
		console.log(token.v.s, names[token.t]);
		// Read a token.
		// If the token is a number, then add it to the output queue.
		if(token.t==types.number){
			output.push(token);
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
				output.push(stack.pop());
			}
			
			
		}
		// If the token is an operator
		if(token.t===types.operator){
			//, o1, then:
			var o1=token;
			
			var o1associative=associativity(o1.v);
			var o1precedence=precedence(o1.v);
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
				precedence(o2.v)
				)
				
			 )
			
			){
				// pop o2 off the stack, onto the output queue;
				output.push(stack.pop());
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
				output.push(stack.pop());
			}
			
			// Pop the left parenthesis from the stack, but not onto the output queue.
			if(stack.pop().v!="("){
				throw("Pop the left parenthesis from the stack: Not found!")
			}
			
			// If the token at the top of the stack is a function token, pop it onto the output queue.
			if(stack[stack.length-1].t===types.func){
				output.push(stack.pop);
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
		}else if(regex[current_type].test(c=s[i])){
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
					if(regex[t].test(c)){
						current_type=t;
						break;
					}
				}
				//console.log("just found out that ",c.s," is a "+names[current_type]);
				
					
			}else{

				if(regex[types.operator].test(c)){
					//We've got an operator!
					
					current_type=types.operator;
					//DO NOT SEND OPERATOR TOKEN YET.
					
				}else if(regex[types.paren].test(c)){
					
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
		output.push(the_operator);
		
	}
	return output;
}


function check(n){
	return [(p(n).getString(0,1)),(n)];
}
