var usr=(function(){
var usr={"eval":function(_____d){
    return eval(_____d);
},"clear":function(){return app.ui.console.clear();}};

return usr;
})();

var graphs=[];

function track(event) {
    //Google Analytics. If anyone wants access to the
    //data, I can give your google account permssion.
	if (window.pageTracker) {
		setTimeout(function () {
			pageTracker._trackEvent("Graph", event)
		}, 20)
	}
};



randfuncs = "y=x^2@y^2=1-x^2@2e^{-x}@2x+3@\\frac{d}{dx}\\left(\\frac{1}{x}\\right)@\\int x.dx@\\frac{d}{dx}\\left(sin\\left(x\\right)\\right)@\\lambda=3@e^{-\\lambda\\cdot x}@\\left|x^2-4\\right|+2@\\frac1x@x^{-2}@x!@\\ln x@\\sum_{n=1}^{\\infinity}\\frac{x^n}{n}@\\sin x@\\tan\\left(x\\right)@\\left(x-2\\right)^2@\\Gamma\\left(x\\right)@\\sqrt x".split("@");

var randfunc_index = 0;

//Not actually random.
function randfunc() {
	return randfuncs[(randfunc_index++) % randfuncs.length];
}


function compile(n){
    var eq;
    if(typeof n=="string"){
        n=clean(n);
    }
    eq=p(n);
    
    var dependence=eq.dependence?eq.dependence():[];
    eq=eq.simplify();
    var funcs=[];
    var yfuncs=[];
    var funcdefs={};
    var vars={};
    var changed=[];
    if(eq.type==eqtype.equality){
        if(typeof eq[0]=="string"){
            if(eq[0]=="y"){
                funcs.push(eq[1]);
            }else if(eq[0]=="x"){
                yfuncs.push(eq[1]);
            }else if(eq[0]!=""){
                var varname=dirty(eq[0]);
                vars[varname]=eq[1].eval();
                if(isNaN(vars[varname])){
                    throw(MessageStrings.nonconstantconstant);
                }
                changed.push(varname);
            }
        }else if(eq[0].length==2 && eq[0].type==eqtype.fn && typeof eq[0][0]=="string" && typeof eq[0][1]=="string"){
            var mm=eq[1].dreplace(eq[0][1],"x").simplify();
            var jsc=mm.getString(0,true);
            funcdefs[eq[0][0]]=eval("("+"function(x){return "+jsc+";})");
            funcdefs[eq[0][0]].math=mm;
            changed.push(eq[0][0]);
            
        }else if(eq[0].search("y")){
            try{
                funcs.push(eq[0].dreplace(/^y$/g,"x").simplify().inverses().simplify().dreplace(/x/g,eq[1].simplify()));
            }catch(ex){
                throw("CAS: "+ex);
            }
        }else{
            throw("CAS: Failure");
        }
    }else{
        if(eq.simplify){
            eq=eq.simplify();
        }
        funcs.push(eq);
    }
	//compile
	var ret={"f":function(){throw("Not a function");}};
    //If fun is an array of inverses
    var builder="(function(ctx){";
    ret.pt=[].setType(eqtype.discretevector);
    
    //Singularites
    
    //Singularites arise from:
    // Division by zero
    //   * Logs
    // ->± Infinity
    var first=true;
    if(funcs.length){
        for(var i=0;i<funcs.length;i++){
            
            var fn=funcs[i].simplify();
            var jsc=fn.getString(0,true);
            if(first){
                ret.f=eval("("+"function(x){return "+jsc+";})");
                first=false;
            }
            
            
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    throw(ex);
                }
                //doesn't really matter
            }
            builder+="ctx.beginPath();var x=boundleft;ctx.move(x,"+jsc+");";
            if(0 && singularities.length){
                
            
            }else{
                builder+="for(var x=boundleft;x<boundright;x+=(boundright-boundleft)/width){"+"ctx.line(x,"+jsc+");}ctx.stroke();";
            }
            
            
            try{
                var rts=fn.differentiate().simplify().roots();
                for(var r=0;r<rts.length;r++){
                    var array=[0,0].setType(eqtype.discretevector);
                    //console.log(fn.getString());
                    
                    array[0]=rts[r];
                    array[1]=fn.dreplace("x",array[0]).simplify();
                    
                    ret.pt.push(array);
                }
            }catch(ex){
                if(__debug(0 && 1,0)){
                    throw(ex);
                }
            }
            
            try{
                var array=[0,0].setType(eqtype.discretevector);
                //console.log(fn.getString());
                array_math=fn.dreplace(/^x$/,0);
                array[1]=array_math.simplify();
                //.getString(0,1,1);
                
                ret.pt.push(array);
                
                try{
                var rts=fn.roots();
                for(var rid=0;rid<rts.length;rid++){
                    var array=[0,0].setType(eqtype.discretevector);
                    array[0]=rts[rid].simplify();;
                    //.getString(0,1,1);
                    ret.pt.push(array);
                }
                }catch(ex){
                    //could not find roots using cas.
                    
                    //Use newtons method:
                
                }
                
                //console.log("ok");
                //ret.xc.push(funcs[i].inverse().dreplace(/^x$/,0).simplify().simplify());
            }catch(ex){
                //alert(ex);
            }
    
        }
    }
    
    if(window && window.app && window.app.variables){
        for(i in vars){
            if(vars.hasOwnProperty(i)){
                if(i=="e" || i=="pi"){
                    throw(MessageStrings.protected);
                    return;
                }
                window.app.variables[i]=vars[i];
            }
        }
        for(i in funcdefs){
            if(funcdefs.hasOwnProperty(i)){
                if(functions.indexOf(i)!=-1){
                    throw(MessageStrings.protected);
                    return;
                }
                window.app.variables[i]=funcdefs[i];
            }
        }
    }
    builder+="})";
    ret.math=funcs;
    ret.funcdefs=funcdefs;
    ret.vars=vars;
    ret.dependence=dependence;
	ret.plot=eval(builder);
    if(window && window.app && window.app.refresh){
        window.app.refresh(changed);
    }
	return ret;
	
}




//function management


var graph=function(n){
	var latex=n;
	var auto=0;
	if(n){
		auto=true;
	}else{
		latex=randfunc();
	}
	var t={};
    var c=compile(latex);
    for(i in c){
        if(c.hasOwnProperty(i)){
            t[i]=c[i];
        }
    }
    
	t.equation=latex;
    
	t.gid=random_hash();
	t.color=app.ui.colors.free.pop();
	if(auto){t.auto=true;}
	t.node=app.ui.add(t);
	return t;
};

app.variables={};
app.version="GIT_VERSION";
app.add=function(n){
	graphs.push(new graph(n));
    app.ui.refresh();
};
app.png=function(){
    app.ui.png();
};
app.console=function(){
    app.ui.console.toggle();
};
app.refresh=function(changes){
    var redraw=false;
    for(var i=0;i<graphs.length;i++){
        for(var d=0;d<graphs[i].dependence.length;d++){
            if(changes.indexOf(graphs[i].dependence[d])!=-1){
                //app.ui.console.log("auto-update");
                var c=compile(graphs[i].equation);
    for(_k in c){
        if(c.hasOwnProperty(_k)){
            graphs[i][_k]=c[_k];
        }
    }
                redraw=true;
            }
        }
    
    }
    if(redraw){
        app.ui.refresh();
    }
};
app.remove=function(n){
    if(typeof n !="string"){
        var id = n.id.substring(3);
        app.ui.remove(n);
        n=id;
    }
    for(var i=0;i<graphs.length;i++){
        if(graphs[i].gid==n){
            app.ui.colors.free.push(graphs[i].color);
            graphs.splice(i,1);
            break;
        }
    }
    app.ui.refresh();
};
app.empty=function(n){
    for(var i=0;i<graphs.length;i++){
        app.ui.colors.free.push(graphs[i].color);
        graphs.splice(i,1);
    }
    var ul=document.getElementById("graphs");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    app.ui.refresh();
};

function message(m){
    var s=m.data.split(/[:,]/);
    switch(s[0]){
        case "add":
            app.add(s[1]);
            break;
        case "block":
            app.ui.block(1);
            break;
        case "unblock":
            app.ui.block(0);
            break;
        case "translate":
            app.ui.translate(s[1],s[2],s[3]);
            break;
        case "empty":
            app.empty();
            break;
        case "scale":
            app.ui.scale(s[1],s[2],s[3]);
            break;
        case "center":
            app.ui.center(s[1],s[2],s[3]);
            break;
    }
}
if(window.addEventListener){
    window.addEventListener("message", message, false);
}else{  
    window.attachEvent("onmessage", message);
}
window.addEventListener("hashchange", function(){
    app.empty();
    app.add(location.hash.substring(1));
}, false);
app.translate=function(x,y,z){
    app.ui.translate(Number(x),Number(y),Number(z));
};
app.scale=function(x,y,z){
    app.ui.scale(Number(x),Number(y),Number(z));
};
app.init=function (div){
    
    var fullscreen=!window.parent.length;
	app.ui.init(fullscreen);
    
    if(location.hash!="" && location.hash!="#"){
            app.add(location.hash.substring(1));
    }else if(fullscreen){
        var preferences;
        if(window.localStorage){
            preferences=localStorage.getItem("graph.tk");
            if(preferences){
                try{
                    preferences=JSON.parse(preferences);
                }catch(ex){}
            }
        }
        app.add("\\frac{d}{dx}\\left(sin\\left(x\\right)+log\\left(x+1\\right)\\right)");
    }
    var div=document.createElement("div");
    var logo=new Image();
    logo.src="favicon.ico";
    logo.style.float="left";
    div.appendChild(logo);
    
    div.appendChild(document.createTextNode("graph.tk - "+messages.version+" "+app.version));
    //div.style.height="4em";
    var span=document.createElement("span");
    span.className="mathquill-rendered-math mathquill-editable";
    span.innerHTML='<br />'+messages.example+': '+messages.type+' <span class="textarea"><textarea></textarea></span><span class="fraction"><span class="numerator"><var>d</var></span><span class="denominator"><var>d</var><var>x</var></span><span style="width:0">&nbsp;</span></span><span><span class="paren" style="font-size: 1.89542em; ">(</span><span class=""><span class="fraction"><span class="numerator"><span>1</span></span><span class="denominator"><var>x</var></span><span style="width:0">&nbsp;</span></span></span><span class="paren" style="font-size: 1.89542em; ">)</span></span>';
    div.appendChild(span);
    app.ui.console.log(div,true);
    
    //app.ui.console.log("Example: Type d/dx (1/x)",true);
    
    //app.add("x^2");
};

app.init();