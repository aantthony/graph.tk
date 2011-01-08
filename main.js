var usr=(function(){
var usr={"eval":function(_____d){
    return eval(_____d);
},"clear":function(){return app.ui.console.clear();}};

return usr;
})();

var graphs=[];


function track(event) {
	if (window.pageTracker) {
		setTimeout(function () {
			pageTracker._trackEvent("Graph", event)
		}, 20)
	}
};



randfuncs = "x^2@3x@2e^{-x}@2x+3@\\lambda=3@e^{-\\lambda*x}@\\left(0.5,0.5\\right)@\\sum_{n=1}^{\\infinity}\\frac{\\sin\\left(nx\\right)}n@\\prod_{1}^{4}x-n	m:H_2SO_4@\\left|x^2-4\\right|+2@\\frac1x@x^{-2}@x!@\\ln x@\\sum_{n=1}^{\\infinity}\\frac{x^n}{n}@\\sin x@e^x:\\left[−2,2\\right]@\\tan\\left(x\\right)@\\left(x+2\\right)\\left(x-3\\right)^2	diff\\left(0,2,2x\\right)@\\left(x-2\\right)^2@\\sum_{n=1}^{\\infinity}\\frac{\\sin\\left(\\left(2n−1\\right)x\\right)}{2n−1}@\\prod_{n=1}^5\\left(x-n\\right)@\\sum_{n=0}^5n@x^x@\\Gamma\\left(x\\right)@\\frac{x!}{3!-x}@x%3@\\left(x>3\\right)?2x:-3@\\fact\\left(x\\right)@\\frac\\phi x@\\left(x>=0\\right)?m_e*G/\\left(r_e+100000x\\right)^2:undefined@g\\left[0\\right]'\\left(2x\\right)@g\\left[0\\right]\\left(x\\right)+1@\\sqrt x".split("@");

var randfunc_index = 0;

//Not actually random.
function randfunc() {
	return randfuncs[(randfunc_index++) % randfuncs.length];
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
    /*t.f=c.f;
    t.xc=c.xc;
    t.yc=c.yc;
    t.xs=c.xs;
    t.ys=c.ys;
    t.math=c.math;
    t.plot=c.plot;*/
    
	t.equation=latex;
	t.gid=random_hash();
	t.color=app.ui.colors.free.pop();
	t.auto=auto;
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