/*
function p_internal(s){
	var eq=[];
	var sl=s.length;
	var type={
		unknown:0,
		operator:1,
		number:2,
		variable:3
	};
	var current=type.unkown;
	var test=[undefined,
		"~!^&*-+=<>/",
		"1234567890."
	];
	var start=0;
	for(var i=0;i<sl;i++){
		if(s[i]=="(" || s[i]=="["){
			var other_end_match=s.lastIndexOf(s[i]=="["?"]":")");
			var parenthesis=p_internal(s.substring(i+1,other_end_match));
			eq.push(parenthesis);
			i=other_end_match+1;
			start=i;
			current=undefined;
		}
		if(!(current && test[current].indexOf(s[i])!=-1)){
			if(current===type.number){
				eq.push(Number(s.substring(start,i)));
			}else if(current===type.variable){
				eq.push(String(s.substring(start,i)));
			}else if(current===type.operator){
				eq.push(s.substring(start,i));
			}
			start=i;
			current=3;
			for(var n=1;n<3;n++){
				if(test[n].indexOf(s[i])!=-1){
					current=n;
					break;
				}
			}
		}
	}
	if(start!=sl){
		if(current===type.number){
			eq.push(Number(s.substring(start)));
		}else if(current===type.variable){
			eq.push(String(s.substring(start)));
		}else{
			throw("Error: Expression ended in operator: "+s.substring(start))
		}
	}
	//Parse operators:
	//sum first:
	
	return eq;
}

function p(inp){
	if(typeof inp==="number" || !isNaN(inp)){
		return Number(inp);
	}else if(typeof inp==="object"){
		return inp;
	}else if(inp==="" || inp===undefined){
		return undefined;
	}
	
	//cleanup routines:
	var e=inp.replace(/\s/g,"").replace(/\]/g,")").replace(/\[/g,"(").replace(/\)\(/g,")*(");
    
    //TODO: known functions only, otherwise make it a product
    //TODO: allow things like 2x
    
    while(e.indexOf("xx")!=-1){
        e=e.replace(/xx/g,"x*x");
    }
    
    //TODO: -- -> +
    e=e.replace(/∞/g,"Infinity");
    e=e.replace(/\.([^\d]|$)/g,"*$1");
    e=e.replace(/([\d]+(\.[\d]+)?)([^\+\-\*\/\^\:\(\)\d\=\<\>\.!])/g,"$1*$3");
    
    //TODO: Following line is a bit hacky. Specifications need be made to clear things up.
    e=e.replace(/([xyzπϕ])([exyzπϕ])/g,"$1*$2");

	e=e.replace(/\^([\d]+)\(/g,"^$1:(");
    
    e=e.replace(/max\(/g,"(max)(");
    
    e=e.replace(/([xyzπϕ\d∫])\(/g,"$1*(");
    e=e.replace(/\(max\)/g,"max");
    
    e=e.replace(/∫([^\*])/g,"∫*$1");
    e=e.replace(/([xyzπϕ\d\.])∫/g,"$1*∫");
	e=e.replace(/([^\+\-\*\/\^\:\(\)\d\=\<\>])\(/g,"$1:(");
    
	e=e.replace(/\)([^\+\-\*\/\^\:\(\)\=\<\>!])/g,")*$1");
    //multiplicative identity
    e=e.replace(/\*([\)\=]|$)/g,"$1");
    //Double factorial
    e=e.replace(/!!/g,"‼");


	return p_internal(e);
}


console.log(p("1+2"));
*/

var eqtype={"product":1,"sum":2,"number":3,"discretevector":6,"continuousvector":7,"power":8,"fn":9,"fraction":10,"derivative":11,"integral":12,"equality":13,"pm":14,"operatorfactor":15,"lessthan":16,"greaterthan":17,"range":18};



function p_internal(s){
	if(!isNaN(s)){
		return Number(s);
	}else if(s===""){
		return undefined;
	}
	
	var terms=[];
	terms.type=eqtype.sum;
	var sl=s.length;
	var type={
		unknown:0,
		operator:1,
		number:2,
		variable:3
	};
	var current=type.unknown;
	var test=[undefined,
		"~!^&*-+=<>/",
		"1234567890."
	];
	var start=0;
	var term=undefined;
	var last=undefined;
	var o   =undefined;
	for(var i=0;i<sl;i++){
		if(s[i]=="(" || s[i]=="["){
			var other_end_match=s.lastIndexOf(s[i]=="["?"]":")");
			var parenthesis=p_internal(s.substring(i+1,other_end_match));
			last=(parenthesis);
			i=other_end_match+1;
			start=i;
			current=undefined;
		}
		if(!(current && test[current].indexOf(s[i])!=-1)){
			if(current===type.number){
				last=(Number(s.substring(start,i)));
			}else if(current===type.variable){
				last=(String(s.substring(start,i)));
			}else if(current===type.operator){
				var no=s.substring(start,i);
				console.log("reached *, term=["+last);
				// lastlast^last*
				if(o=="^"){
					last=[term.pop(),last];
					last.type=eqtype.power;
				}else{
					
				}
				
				if(typeof term==="object"){
					term.push(last)
				}else{
					term=[last];
					term.type=eqtype.product;
				}
				
				if(no=="+"){
					while(term.length===1){
						term=term[0];
					}
					terms.push(term);
					term=undefined;
				}else if(no=="*"){
					
				}else if(no=="^"){
					
				}
				o=no;
			}
			start=i;
			if(i<s.length){
				current=3;
				for(var n=1;n<3;n++){
					if(test[n].indexOf(s[i])!=-1){
						current=n;
						break;
					}
				}
				console.log(current,s[i])
			}
		}
	}
	if(start!=sl || 1){
		console.log("more!",s,current);
		if(current===type.number){
			last=(Number(s.substring(start)));
		}else if(current===type.variable){
			last=(String(s.substring(start)));
		}else if(current===undefined){
			
		}else{
			throw("Error: Expression ended in operator: "+s.substring(start))
		}
		
		
		if(o=="^"){
			last=[term.pop(),last];
			last.type=eqtype.power;
		}
		
		if(typeof term==="object"){
			term.push(last)
		}else{
			term=[last];
			term.type=eqtype.product;
		}
		
		while(term.length===1){
				term=term[0];
		}
		terms.push(term);
		
	}
	//Parse operators:
	//sum first:
	console.log(["parse",s,terms.getString()]);
	return terms;
}

function p(inp){
	if(typeof inp==="number" || !isNaN(inp)){
		return Number(inp);
	}else if(typeof inp==="object"){
		return inp;
	}else if(inp==="" || inp===undefined){
		return undefined;
	}
	
	//cleanup routines:
	var e=inp.replace(/\s/g,"").replace(/\]/g,")").replace(/\[/g,"(").replace(/\)\(/g,")*(");
    
    //TODO: known functions only, otherwise make it a product
    //TODO: allow things like 2x
    
    while(e.indexOf("xx")!=-1){
        e=e.replace(/xx/g,"x*x");
    }
    
    //TODO: -- -> +
    e=e.replace(/∞/g,"Infinity");
    e=e.replace(/\.([^\d]|$)/g,"*$1");
    e=e.replace(/([\d]+(\.[\d]+)?)([^\+\-\*\/\^\:\(\)\d\=\<\>\.!])/g,"$1*$3");
    
    //TODO: Following line is a bit hacky. Specifications need be made to clear things up.
    e=e.replace(/([xyzπϕ])([exyzπϕ])/g,"$1*$2");

	e=e.replace(/\^([\d]+)\(/g,"^$1:(");
    
    e=e.replace(/max\(/g,"(max)(");
    
    e=e.replace(/([xyzπϕ\d∫])\(/g,"$1*(");
    e=e.replace(/\(max\)/g,"max");
    
    e=e.replace(/∫([^\*])/g,"∫*$1");
    e=e.replace(/([xyzπϕ\d\.])∫/g,"$1*∫");
	e=e.replace(/([^\+\-\*\/\^\:\(\)\d\=\<\>])\(/g,"$1:(");
    
	e=e.replace(/\)([^\+\-\*\/\^\:\(\)\=\<\>!])/g,")*$1");
    //multiplicative identity
    e=e.replace(/\*([\)\=]|$)/g,"$1");
    //Double factorial
    e=e.replace(/!!/g,"‼");


	return p_internal(e);
}


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

console.log(p("1+2*3+1+1"));

function check(n){
	return [(p(n).getString(0,1)),(n)];
}