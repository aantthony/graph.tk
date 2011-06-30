
function p_internal(s){
	console.log("parse: "+s);
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
		/[\~\!\^\&\*\-\+\=\<\>\/]/,
		/[0-9\.]/,
		/[^0-9\~\!\^\&\*\-\+\=\<\>\/]/
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
		if(current && test[current].test(s[i])){
			console.log("contin: "+s[i]+" is still of t"+current+" @"+i);
		}else{
			if(current===type.number){
				eq.push(Number(s.substring(start,i)));
				console.log("num: "+s.substring(start,i));
			}else if(current===type.variable){
				eq.push(String(s.substring(start,i)));
				console.log("var: "+s.substring(start,i));
			}else if(current===type.operator){
				eq.push(s.substring(start,i));
				console.log("ope: "+s.substring(start,i));
			}
			start=i;
			current=3;
			for(var n=1;n<3;n++){
				if(test[n].test(s[i])){
					current=n;
					break;
				}
			}
			console.log("detect now on: t"+current+" @"+i);
		}
	}
	if(start!=sl){
		if(current===type.number){
			eq.push(Number(s.substring(start)));
			console.log("enum: "+s.substring(start,i));
		}else if(current===type.variable){
			eq.push(String(s.substring(start)));
			console.log("evar: "+start+", "+i+": "+s.substring(start,i));
		}else{
			throw("Error: Expression ended in operator: "+s.substring(start))
		}	
	}
	
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
