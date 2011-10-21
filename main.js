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

randfuncs = "y=x^2@y^2=1-x^2@y<2e^{-x}@\\theta=r@2x+3@\\frac{d}{dx}\\left(\\frac{1}{x}\\right)@r<\\sin\\left(4\\theta\\right)@\\int x.dx@\\frac{d}{dx}\\left(sin\\left(x\\right)\\right)@\\lambda=3@e^{-\\lambda\\cdot x}@\\left|x^2-4\\right|+2@\\frac1x@x^{-2}@x!@\\ln x@\\sum_{n=1}^{\\infinity}\\frac{x^n}{n}@\\sin x@\\tan\\left(x\\right)@\\left(x-2\\right)^2@\\Gamma\\left(x\\right)@\\sqrt x".split("@");

var randfunc_index = 0;

//Not actually random.
function randfunc() {
  return randfuncs[(randfunc_index++) % randfuncs.length];
}


function compile(n){
    //eq is the equation (CAS)
    var eq;
    if(typeof n=="string"){
        //n is latex. Make it not.
        n=clean(n);
    }
    eq=p(n);
    //dependence is an array of variables that eq should be updated on changes.
    var dependence=eq.dependence?eq.dependence():[];
    eq=eq.simplify();
    
    //Functions of x
    var funcs=[];

    //Functions of y
    var yfuncs=[];
  
    //Functions of theta
    var tfuncs=[];

    //Functions of r
    var rfuncs=[];
    
    //Defenitions of functions defined by the graph. i.e. "f(x)=x" will defined funcdefs.f
    var funcdefs={};
    
    //Variables defined. Similar to above funcdefs.
    var vars={};
    
    //Variables changed in the process of this compile()
    var changed=[];
  if(eq===undefined){
    
  }else if(eq.type==eqtype.equality || eq.type==eqtype.lessthan || eq.type==eqtype.greaterthan){
    if(eq.type==eqtype.lessthan || eq.type==eqtype.greaterthan){
      eq[1]=[eq[1]].setType(eq.type);
    }
    
        if(typeof eq[0]=="string"){
            if(eq[0]=="y"){
                //y=f(x)
                
                //TODO: check the f(y) does not depend on y.
                funcs.push(eq[1]);
            }else if(eq[0]=="x"){
                //x=f(y)
                
                //TODO: check the f(y) does not depend on x.
                yfuncs.push(eq[1]);
            }else if(dirty(eq[0])=="theta"){
                rfuncs.push(eq[1]);
            }else if(dirty(eq[0])=="r"){
        tfuncs.push(eq[1]);
      }else if(eq[0]!=""){
                //a *variable* is defined by this graph. Add it to vars.
                var varname=dirty(eq[0]);
                vars[varname]=eq[1].eval();
                if(isNaN(vars[varname])){
                    throw(MessageStrings.nonconstantconstant);
                }
                changed.push(varname);
            }
        }else if(eq[0].length==2 && eq[0].type==eqtype.fn && typeof eq[0][0]=="string" && typeof eq[0][1]=="string"){
            //name(x)=...
            //Add it to funcdefs.
            var mm=eq[1].dreplace(eq[0][1],"x").simplify();
            var jsc=mm.getString(0,true);
            funcdefs[eq[0][0]]=new Function("x","return "+jsc);
            //funcdefs[eq[0][0]]=eval("("+"function(x){return "+jsc+";})");
            funcdefs[eq[0][0]].math=mm;
            
            //Trigger changes soon.
            changed.push(eq[0][0]);
            
        }else if(eq[0].search("y")){
            //If LHS has a y
            
            try{
                //Rearrange so that LHS=y, then push RHS to funcs.
                funcs.push(eq[0].dreplace(/^y$/g,"x").simplify().inverses().simplify().dreplace(/x/g,eq[1].simplify()));
            }catch(ex){
                //Could not rearrange.
                //TODO: try wolfram alpha API maybe.
                //TODO: otherwise, use a discrete/trial-and-error method.
                throw("CAS: "+ex);
            }
        }else{
            //No y on lhs.
            //TODO: search for an x on the LHS, and do something similar to above, 
            //      but for yfuncs.
            
            throw("CAS: Failure");
        }
    }else{
        if(eq.simplify){
            eq=eq.simplify();
        }
        funcs.push(eq);
    }
    
  var ret={"f":function(){throw("Not a function");}};
    
    var builder="";//Javascript code (body) for the plot() function.
    
    //Create an empty vector which will contain vectors as components.
    //TODO: just use an array of vectors. Simpler.
    ret.pt=[].setType(eqtype.discretevector);
    
    //Singularites
    
    //Singularites arise from:
    // Division by zero
    //   * Logs
    // ->± Infinity
    // What else?
    var first=true;
    if(funcs.length){
        for(var i=0;i<funcs.length;i++){
            
            var fn=funcs[i].simplify();
            
            //Get javascript expression.
      if(fn.type==eqtype.lessthan || fn.type==eqtype.greaterthan){
        var jsc=fn[0].getString(0,true);
      }else{
              var jsc=fn.getString(0,true);
      }
            if(first){
                ret.f=new Function("x","return "+jsc);
                first=false;
            }
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                
                //We don't care about singularites way out there:
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    //when debugging we want to see the error
                    throw(ex);
                }
            }
            
            //begin the path. Colour (fill and stroke) is already done for us in ui.js
            builder+="ctx.beginPath();var x=boundleft;ctx.move(x,"+jsc+");";
            if(0 && singularities.length){
                //Better plot logic.
                //For example, this would allow us to plot y=sqrt(1-x^2) from [-1,1] exactly with no abrupt endings.
            
            }else{
                //The loop is within the function because calling a function is too slow in javascript (last time I checked)
                //Plot each point: (jsc is the expression generated by CAS)
                builder+="for(var x=boundleft;x<boundright;x+=(boundright-boundleft)/width){"+"ctx.line(x,"+jsc+");}ctx.stroke();";
              if(fn.type==eqtype.greaterthan){
          builder+="ctx.line(boundright+2,boundtop+2);ctx.line(boundleft-2,boundtop+2);";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }else if(fn.type==eqtype.lessthan){
          builder+="ctx.line(boundright+2,boundbottom-2);ctx.line(boundleft-2,boundbottom-2);";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }
        
        builder+="ctx.stroke();";
      }
            
            try{
                //Find stationary points:
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
                //Find y intercept(s). I.e. f(0), or just work for multi-valued functions.
                array_math=fn.dreplace(/^x$/,0);
                array[1]=array_math.simplify();
                //.getString(0,1,1);
                
                ret.pt.push(array);
                
                try{
                //Find x-intercepts.
                var rts=fn.roots();
                for(var rid=0;rid<rts.length;rid++){
                    var array=[0,0].setType(eqtype.discretevector);
                    array[0]=rts[rid].simplify();;
                    //.getString(0,1,1);
                    ret.pt.push(array);
                }
                }catch(ex){
                    //could not find roots using cas.
                    
                    //Use wolfram alpha? (needs to be async)
                    //Use newtons method:
                
                }
                
                //console.log("ok");
                //ret.xc.push(funcs[i].inverse().dreplace(/^x$/,0).simplify().simplify());
            }catch(ex){
                //alert(ex);
            }
    
        }
    }
    
    if(yfuncs.length){
        for(var i=0;i<yfuncs.length;i++){
            
            var fn=yfuncs[i].simplify();
            
            //Get javascript expression.
            if(fn.type==eqtype.lessthan || fn.type==eqtype.greaterthan){
        var jsc=fn[0].getString(0,true);
      }else{
              var jsc=fn.getString(0,true);
      }
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                
                //We don't care about singularites way out there:
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    //when debugging we want to see the error
                    throw(ex);
                }
            }
            
            //begin the path. Colour (fill and stroke) is already done for us in ui.js
            builder+="ctx.beginPath();var y=boundbottom;ctx.move("+jsc+",y);";
            if(0 && singularities.length){
                //Better plot logic.
                //For example, this would allow us to plot y=sqrt(1-x^2) from [-1,1] exactly with no abrupt endings.
            
            }else{
                //The loop is within the function because calling a function is too slow in javascript (last time I checked)
                //Plot each point: (jsc is the expression generated by CAS)
                builder+="for(var y=boundbottom;y<boundtop;y+=(boundtop-boundbottom)/height){"+"ctx.line("+jsc+",y);}";
              if(fn.type==eqtype.greaterthan){
          builder+="ctx.line(boundright+2,boundtop+2);ctx.line(boundright+2,boundbottom-2);";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }else if(fn.type==eqtype.lessthan){
          builder+="ctx.line(boundleft-2,boundtop+2);ctx.line(boundleft-2,boundbottom-2);";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }
        builder+="ctx.stroke();";

      }
            
            try{
                //Find stationary points:
                var rts=fn.dreplace("y","x").differentiate().simplify().roots();
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
                //Find y intercept(s). I.e. f(0), or just work for multi-valued functions.
                array_math=fn.dreplace(/^y$/,0);
                array[0]=array_math.simplify();
                //.getString(0,1,1);
                
                ret.pt.push(array);
                
                try{
                //Find x-intercepts.
                var rts=fn.roots();
                for(var rid=0;rid<rts.length;rid++){
                    var array=[0,0].setType(eqtype.discretevector);
                    array[0]=rts[rid].simplify();;
                    //.getString(0,1,1);
                    ret.pt.push(array);
                }
                }catch(ex){
                    //could not find roots using cas.
                    
                    //Use wolfram alpha? (needs to be async)
                    //Use newtons method:
                
                }
                
                //console.log("ok");
                //ret.xc.push(funcs[i].inverse().dreplace(/^x$/,0).simplify().simplify());
            }catch(ex){
                //alert(ex);
            }
    
        }
    }
    
    
    if(rfuncs.length){
        for(var i=0;i<rfuncs.length;i++){
            
            var fn=rfuncs[i].simplify();
            
            //Get javascript expression.
            if(fn.type==eqtype.lessthan || fn.type==eqtype.greaterthan){
        var jsc=fn[0].getString(0,true);
      }else{
              var jsc=fn.getString(0,true);
      }
            jsc=jsc.replace(/app\.variables\[\"(x|y|z|r|theta)\"\]/g,"$1");
            if(first){
                //ret.f=eval("("+"function(x){return "+jsc+";})");
                //The first value of a multi-valued function shall be its
                //primary value.
                
                ret.f=new Function("r","return "+jsc);
                first=false;
            }
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                
                //We don't care about singularites way out there:
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    //when debugging we want to see the error
                    throw(ex);
                }
            }
            
            //begin the path. Colour (fill and stroke) is already done for us in ui.js
            builder+="ctx.beginPath();var r=0;ctx.move(0,0);";
            if(0 && singularities.length){
                //Better plot logic.
                //For example, this would allow us to plot y=sqrt(1-x^2) from [-1,1] exactly with no abrupt endings.
            
            }else{
                //The loop is within the function because calling a function is too slow in javascript (last time I checked)
                //Plot each point: (jsc is the expression generated by CAS)
                /*
                  We want to plot all points (x,y) ∈ ([boundleft,boundright],[boundbottom,boundtop])
                  r*(sin(x),cos(y)) ∈ (r*cos[boundleft,boundright],r*sin[boundbottom,boundtop])
                
                  x=r.cos(f(r)), y=r.sin(f(r))
                  
                  
                  f(r)=acos(x/r)
                  y=r.sin(acos(x/r))
                  r=atan(y/x)
                
                  y=r.sin(f(atan(y/x)))
                  asin(y/r)=f(atan(y/x))
                */
                builder+="var rinc=(rmax-rmin)/width;for(var r=rmin;r<rmax;r+=rinc){var thtmp=("+jsc+");ctx.line(r*cos(thtmp),r*sin(thtmp));}";
        if(fn.type==eqtype.greaterthan){
          builder+="ctx.line(boundright+2,boundtop+2);ctx.line(boundright+2,boundbottom-2);";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }else if(fn.type==eqtype.lessthan){
          builder+="var thtmp=("+jsc+")%(2*pi);if(thtmp>7*pi/4){ctx.line(boundright+2,boundbottom-2);}if(thtmp>5*pi/4){ctx.line(boundleft-2,boundbottom-2);}if(thtmp>pi/4){ctx.line(boundleft-2,boundtop+2);ctx.line(boundright+2,boundtop+2);}ctx.line(boundright+2,0);ctx.line(0,0);";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }
        builder+="ctx.stroke();";
            }
            
        }
    
    }

  if(tfuncs.length){
        for(var i=0;i<tfuncs.length;i++){
            
            var fn=tfuncs[i].simplify();
            
            //Get javascript expression.
            if(fn.type==eqtype.lessthan || fn.type==eqtype.greaterthan){
        var jsc=fn[0].getString(0,true);
      }else{
              var jsc=fn.getString(0,true);
      }
      //A little messy:
            jsc=jsc.replace(/app\.variables\[\"(x|y|z|r|theta)\"\]/g,"$1");

            if(first){
                //The first value of a multi-valued function shall be its
                //primary value.
                
                ret.f=new Function("theta","return "+jsc);
                first=false;
            }
            
            
            var singularities=[];
            try{
                var singularities=fn.singularities();
                
                //We don't care about singularites way out there:
                singularities.remove(Infinity);
                singularities.remove(-Infinity);
            }catch(ex){
                if(__debug(1,0)){
                    //when debugging we want to see the error
                    throw(ex);
                }
            }
            
            //begin the path. Colour (fill and stroke) is already done for us in ui.js
            builder+="ctx.beginPath();var theta=0;ctx.move("+jsc+"*cos(theta),"+jsc+"*sin(theta));";
            if(0 && singularities.length){
                //Better plot logic.
                //For example, this would allow us to plot y=sqrt(1-x^2) from [-1,1] exactly with no abrupt endings.
            
            }else{
                //The loop is within the function because calling a function is too slow in javascript (last time I checked)
                //Plot each point: (jsc is the expression generated by CAS)
                /*
          tinc: reciprcal of pixels along max *circle* (ellipse to complicated) around screen area?
          
                */
                builder+="var tinc=1/max(width,height);for(var theta=0;theta<(2*pi);theta+=tinc){var rtmp=("+jsc+");ctx.line(rtmp*cos(theta),rtmp*sin(theta));}ctx.line("+jsc+",0);";
              
        if(fn.type==eqtype.greaterthan){
          builder+="ctx.line(boundright+2,0);ctx.line(boundright+2,boundbottom-2);ctx.line(boundleft-2,boundbottom-2);ctx.line(boundleft-2,boundtop+2);ctx.line(boundright+2,boundtop+2);ctx.line(boundright+2,0);";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }else if(fn.type==eqtype.lessthan){
          builder+="var theta=0;ctx.line("+jsc+"*cos(theta),"+jsc+"*sin(theta));";
          builder+="ctx.globalAlpha=0.2;ctx.fill();ctx.globalAlpha=1.0;";
        }
        builder+="ctx.stroke()";
      }
            
        }
    
    }

    //Add our vars and funcdefs to the global CAS variables (app.variables)
    //TODO: should not be app, but cas.variables. (javascript-cas will support variables natively someday)
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
    
    //Give out this stuff. It probably won't be used anyway.
    ret.math=funcs;
    ret.funcdefs=funcdefs;
    ret.vars=vars;
    
    //This will be searched on window.app.refresh()
    ret.dependence=dependence;
    
    //This will be called from ui.js. Currently, all graphs share a context. I think this is sufficent, but it may not be.
  ret.plot=new Function("ctx",builder);
    
    //Trigger all changes
    if(window && window.app && window.app.refresh){
        window.app.refresh(changed);
    }
  return ret;
  
}




//function management


var Graph=function(n,disabled){
  var latex=n;
  var auto=0;
  if(n){
    auto=true;
  }else{
        //Sample function
    latex=randfunc();
  }
  var t={};
    var c=compile(latex);
    
    //Copy properties (we will extend the object)
    //TODO: why don't we just use t=c? lol
    for(i in c){
        if(c.hasOwnProperty(i)){
            t[i]=c[i];
        }
    }
    //For debugging purposes. I think.
  t.equation=latex;
    //Graph id: random
  t.gid=random_hash();
  t.disabled=disabled;
  t.color=app.ui.colors.free.pop();
    if(t.color==undefined){
        //We ran out of colours!
        t.color="#000";
    }
  if(auto){t.auto=true;}
    
    //Create html <li> node.
  t.node=app.ui.add(t);
    
  return t;
};
//CAS variables.
//TODO: use cas.variables in javascript-cas.
app.variables={};

//Updated automatically by shell script.
app.version="GIT_VERSION";
app.add=function(n,disabled){
    var graph = new Graph(n,disabled);
    graph.disabled = disabled;
  graphs.push(graph);
    track("New");
    app.ui.refresh();
};
app.png=function(){
    app.ui.png();
};
app.console=function(){
    app.ui.console.toggle();
};
app.get_state=function() {
  var res = {};
  res.graphs = {};
  $.each(graphs, function() {
    res.graphs[this.equation] = !this.disabled ? 1 : 0;
  });

  res.scale = $.map(app.ui.get_scale(), function(i) { return parseInt(i); });
  res.camera = $.map(app.ui.get_camera(), function(i) { return parseInt(i); });
  res.legend = app.ui.legend() ? 1 : 0;
  res.block = app.ui.block() ? 1 : 0;
  return res;
}

//TODO: a name like mathDidChange would be much more appropriate
app.refresh=function(changes){
    var redraw=false;
    for(var i=0;i<graphs.length;i++){
        for(var d=0;d<graphs[i].dependence.length;d++){
            if(changes.indexOf(graphs[i].dependence[d])!=-1){
                //app.ui.console.log("auto-update");
                var c=compile(graphs[i].equation);
                //Copy properties from c to graphs[i]
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
        //This is an actual refresh, see above TODO.
        app.ui.refresh();
    }
};
app.remove=function(n){
    if(typeof n !="string"){
        //Remove a function by html node id.
        var id = n.id.substring(3);
        app.ui.remove(n);
        n=id;
    }
    //Now n is a gid.
    for(var i=0;i<graphs.length;i++){
        if(graphs[i].gid==n){
            //Give colour back to system.
            app.ui.colors.free.push(graphs[i].color);
            graphs.splice(i,1);
            break;
        }
    }
    app.ui.refresh();
};
app.empty=function(n){
    //Remove all graphs.
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
    //For postMessage API. ANY WEBSITE CAN CALL THIS!
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
        case "locale":
            app.locale = s[1];
            app.locale_updated();
        case "empty":
            app.empty();
            break;
    case "bounds":
      app.ui.bounds(s[1],s[2],s[3],s[4]);
      break;
        case "scale":
            app.ui.scale(s[1],s[2],s[3]);
            break;
        case "center":
            app.ui.center(s[1],s[2],s[3]);
            break;
    }
}
if(!window.addEventListener){
    //TODO: CHECK THIS. I.E. doesn't work anyway atm. (stack overflow)
    window.addEventListener=function(eventname,fn,mode){
        return window.attachEvent("on"+eventname, fn,mode);
    };
}
if(window.addEventListener){
    window.addEventListener("message", message, false);
}else{
    window.attachEvent("onmessage", message);
}

function hashDidChange(){
    app.empty();
    if((location.hash || location.search).match(/^#json=/)) {
        data = JSON.parse(decodeURIComponent((location.hash || location.search).substring(6)));
        for(var idx in data.graphs) {
          if(data.graphs.hasOwnProperty(idx)){
                app.add(idx, !data.graphs[idx]);
          }
        }
        if(data.locale) {
          app.locale = data.locale;
        }
        if(data.scale) {
            app.ui.set_scale.apply(this, data.scale);
        }
        if(data.camera) {
            app.ui.set_camera.apply(this, data.camera);
        }
        if(data.block != undefined) {
            app.ui.block(!!data.block);
        }
        if(data.console != undefined) {
            app.ui.button('>_', data.console);
        }
        if(data.reload != undefined) {
            app.ui.button('reload', data.reload);
        }
        if(data.legend != undefined) {
            app.ui.legend(!!data.legend);
        }
    } else {
        app.add(decodeURIComponent((location.hash || location.search).substring(1)));
    }

}
window.addEventListener("hashchange", hashDidChange, false);
app.translate=function(x,y,z){
    app.ui.translate(Number(x),Number(y),Number(z));
};
app.scale=function(x,y,z){
    app.ui.scale(Number(x),Number(y),Number(z));
};
app.locale_updated = function(locale) {
  if(locale) { app.locale = locale; }
  if(!app.locale) { return; };
  var script = document.createElement('script');
  script.src = 'langs/' + app.locale.toLowerCase() + '.js';
  document.getElementsByTagName('head')[0].appendChild(script);
};
app.init=function (){
    var fullscreen=!window.parent.length;
    
    if(window && window.parent != window) {
	//this causes an error when in an iframe: SYNTAX_ERR: DOM Exception 12: An invalid or illegal string was specified.
      //window.parent.postMessage('locale check');
    }
    app.locale = $.map(['language', 'browserLanguage', 'systemLanguage', 'userLanguage'], function(key) { return window.navigator && window.navigator[key] })[0];
    
    app.view_configured = (location.hash || location.search).match(/^#json=/);
    app.ui.init(fullscreen);
    app.locale_updated();
    
    if((location.hash || location.search).length>1){
        hashDidChange();
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
    
    var elem = document.createElement('span');
    elem.innerHTML = "graph.tk - <span id='version_text'>"+app.ui.messages.version+"</span> "+app.version;
    div.appendChild(elem);
    //div.style.height="4em";
    var span=document.createElement("span");
    span.className="mathquill-rendered-math mathquill-editable";
    span.innerHTML='<br /><span id="example_text">'+app.ui.messages.example+'</span>: <span id="type_text">'+app.ui.messages.type+'</span> <span class="textarea"><textarea></textarea></span><span class="fraction"><span class="numerator"><var>d</var></span><span class="denominator"><var>d</var><var>x</var></span><span style="width:0">&nbsp;</span></span><span><span class="paren" style="font-size: 1.89542em; ">(</span><span class=""><span class="fraction"><span class="numerator"><span>1</span></span><span class="denominator"><var>x</var></span><span style="width:0">&nbsp;</span></span></span><span class="paren" style="font-size: 1.89542em; ">)</span></span>';
    div.appendChild(span);
    app.ui.console.log(div,true);
    
    //app.ui.console.log("Example: Type d/dx (1/x)",true);
    
    //app.add("x^2");
};
if(!/noboot$/.test(location.search)){
    app.init();
}
