
var graphs=[];
function getlatexpart(match, submatch)
{
  if(submatch == ",")
	return "";
  if(latexchars[submatch] !== undefined)
	return latexchars[submatch];
  return submatch;
}


function track(event) {
	if (window.pageTracker) {
		setTimeout(function () {
			pageTracker._trackEvent("Graph", event)
		}, 20)
	}
};




function safeeval(z) {
	//use safeeval instead of eval()
	var naughty = "eval,document,window,location,cookie,alert,comfirm,prompt,this,parent,child,xml,xmlhttp,clip,draw,getfunction,get2dfunction,extrafunc,calcnextframe,nextframe,canvas".split(",");
	for (var nau_g = 0; nau_g < naughty.length; nau_g++) {
		if (z.indexOf(naughty[nau_g]) != -1) {
			throw ("Unsafe Code: " + naughty[nau_g]);
			return;
		}
	}
	return eval(z);
}



randfuncs = "x^2	f'\\left(x\\right)-1	2e^{-x}	2x+3	\\lambda=3	e^{-\\lambda*x}	\\left(0.5,0.5\\right)	\\sum_{n=1}^{\\infinity}\\frac{\\sin\\left(nx\\right)}n	\\prod_{1}^{4}x-n	m:H_2SO_4	\\left|x^2-4\\right|+2	\\frac1x	x^{-2}	x!	\\ln x	\\sum_{n=1}^{\\infinity}\\frac{x^n}{n}	\\sin x	e^x:\\left[−2,2\\right]	\\tan\\left(x\\right)	\\left(x+2\\right)\\left(x-3\\right)^2	diff\\left(0,2,2x\\right)	\\left(x-2\\right)^2	\\sum_{n=1}^{\\infinity}\\frac{\\sin\\left(\\left(2n−1\\right)x\\right)}{2n−1}	\\prod_{n=1}^5\\left(x-n\\right)	\\sum_{n=0}^5n	x^x	\\Gamma\\left(x\\right)	\\frac{x!}{3!-x}	x%3	\\left(x>3\\right)?2x:-3	\\fact\\left(x\\right)	\\frac\\phi x	\\left(x>=0\\right)?m_e*G/\\left(r_e+100000x\\right)^2:undefined	g\\left[0\\right]'\\left(2x\\right)	g\\left[0\\right]\\left(x\\right)+1	\\sqrt x".split("	"); //1 tab - maybe it should be four spaces?

var randfunc_index = 0;

//Not actually random.
function randfunc() {
	return randfuncs[(randfunc_index++) % randfuncs.length];
}








//function management


function delfunc(delete_button_node){
	this_node=delete_button_node.parentNode;
	index=0;

	other_node=flist.firstChild;
	while(other_node!=null){
		if(other_node==this_node){
			break;
			index++;
		}
		other_node=other_node.nextSibling;
	}
	
	g.splice(index,1);

	colorss.push(colors_in_use.splice(index,1)[0]);
	
	flist.removeChild(this_node);
	save();
};

function random_hash(){
    var s="";
    for(var i=0;i<20;i++){
        s+=(~~(Math.random()*16)).toString(16);
    }
    return s;
}
var graph=function(n){
	var latex=n || randfunc();
	var t=compile(latex);
	t.equation=latex;
	t.gid=random_hash();
	t.color=app.ui.colors.free.pop();
	t.node=app.ui.add(t);
	return t;
};

app.version="GIT_VERSION";
app.add=function(n){
	graphs.push(new graph(n));
}
app.init=function (){
	app.ui.init();
	app.add();
	if (window.location.hash != "") {
		//index.html#y=x^2+2
		window.shouldload = false;
		if (window.location.hash[2] == "=") {
			window.jsonfunc = window.location.hash.substring(3);
		}else{
			window.jsondata = unescape(window.location.hash.substring(6));
		}
	}
};

app.init();