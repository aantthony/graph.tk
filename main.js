//jquery and mathquill must be available first before including this script.

/*

    Copyright © Anthony 2010
    http://graph.tk/
    
    nospamant[/at/ ]gmail[ /dot/ ]com
    
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
    */

var showp = 0;//index for newtonian solver at the bottom left.
var loaded = false;
var ctx;//canvas context (2d)
var iphone = /iPhone/.test(window.navigator.userAgent);
//iphone ui is dumbed down. however this code does not support iPhones. iPhones will continue to use the old graph.tk

//Physical Constants
var c = 299792458;
var G = 6.67300e-11;
var m_e = 5.9742e24;
var m_m = 7.36e22;
var m_s = 1.98892e30;
var R_E = 6378100;
var r_e = 6378100;
var h = 6.626068e-34;
var log2pi = 1.8378770664093453;
var e = Math.E;
var pi = Math.PI;
var phi = (1 + Math.sqrt(5)) / 2;
var epsilon_0 = 8.85418782e-12;

var en = ["Massless void", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "aluminium", "Silicon", "Phosphorus", "Sulphur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirkonium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Hydrargyrum", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Ununnilium", "Unununium"];
var M = [0.0, 1.00794, 4.002602, 6.941, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9994, 20.1797, 22.98976928, 24.305, 26.9815386, 28.0855, 30.973762, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938045, 55.845, 58.933195, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.90585, 91.224, 92.90638, 95.96, 98, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.9054519, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145, 150.36, 151.964, 157.25, 158.92535, 162.5001, 164.93032, 167.259, 168.93421, 173.054, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 192.084, 196.966569, 200.59, 204.3833, 207.2, 208.980401, 210, 210, 220, 223, 226, 227, 232.03806, 231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 261, 262, 266, 264, 277, 268, 271, 272];
var symbol = ["Zero", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Te", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg"];


//Make the periodic table global
for (var index = 0; index < symbol.length; index++) {
    window[symbol[index]] = M[index];
}


var settings = {
    "special": true
};
var difflevel = 0; //Used to prevent massive stacks in the recursive djkb()

var ready = false;
var g = [];
//E is the function that returns dy/dx for the differential equation

var E = function (x, y, dx, dy) {
    return g[0](x);
};
var fofy = 0; //Current y in solving of diffeq
var drag = false;//Are you dragging the graph

//Visible region on screen
var boundleft = -10;
var boundright = 10;
var boundtop = 10;
var boundbottom = -10;


//for google analytics tracking of events
function _ga_track_event(n) {
    if (window.pageTracker) {
        setTimeout(function () {
            pageTracker._trackEvent("Graph", n)
        }, 20)
    }
};

//begin plotting from an (x,y) point
function plotf(px, py) {
    if (!isNaN(py)) {
        if (py > boundtop + 2) {
            ctx.moveTo(px, -boundtop - 2);
            return;
        } else if (py < boundbottom - 2) {
            ctx.moveTo(px, -boundbottom + 2);
            return;
        }
        ctx.moveTo(px, -py);
    }
}

//plot an (x,y) point
function plot(px, py) {
    if (!isNaN(py)) {
        if (py > boundtop + 2) {
            ctx.lineTo(px, -boundtop - 2);
            return;
        } else if (py < boundbottom - 2) {
            ctx.lineTo(px, -boundbottom + 2);
            return;
        }
        ctx.lineTo(px, -py);
    }
}
var dotprod = "⋅";
if (/Windows/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent)) {
	//Safari leaves a massive gap on windows for the other one
    dotprod = "∙";
}
function safeeval(z) {
	//use safeeval instead of eval()
    var naughty = "eval,document,window,location,cookie,alert,comfirm,prompt,this,parent,child,xml,xmlhttp,clip,draw,getfunction,get2dfunction,extrafunc,calcnextframe,nextframe,canvas".split(",");
    for (var nau_g = 0; nau_g < naughty.length; nau_g++) {
        if (z.indexOf(naughty[nau_g]) != -1) {
            throw ("Unsafe Code: " + naughty[nau_g])
        }
    }
    return eval(z);
}

//Basic math functions
var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var tg = Math.tan;
var exp = Math.exp;
var log = Math.log;
var ln = Math.log;
var abs = Math.abs;
var acos = Math.acos;
var asin = Math.asin;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var floor = Math.floor;
var max = Math.max;
var min = Math.min;
var random = Math.random;
var round = Math.round;
var sqrt = Math.sqrt;
var pow = Math.pow;


//sin^n (x)
function sin_n(n,x){return pow(sin(x),n);}
function cos_n(n,x){return pow(cos(x),n);}
function tan_n(n,x){return pow(tan(x),n);}
function cot_n(n,x){return pow(cot(x),n);}
function sec_n(n,x){return pow(sec(x),n);}
function csc_n(n,x){return pow(csc(x),n);}
function log_n(n,x){return pow(log(x),n);}
function ln_n(n,x){return pow(ln(x),n);}

function logb(b, v) {
    return ln(v) / ln(b);
}

function piecewise(cond, val, other) {
    if (cond) {
        return val;
    }
    return other;
}
function sinc(x) {
    if (x === 0) {
        return 1;
    }
    return sin(pi * x) / (pi * x);
}
function sec(x) {return 1 / (cos(x));}
function csc(x) {return 1 / (sin(x));}
function cosec(x) {return 1 / (sin(x));}
function cot(x) {return 1 / (tan(x));}
var ctg = cot;
var ctn = cot;

//Not so basic math

//Bell numbers
var blln = [1, 1, 2, 5, 15, 52, 203, 877, 4140, 21147, 115975, 678570, 4213597, 27644437, 190899322, 1382958545, 10480142147, 82864869804, 682076806159, 5832742205057, 51724158235372, 474869816156751, 4506715738447323];

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

function Gamma(x) {
    if (x > 1.0) {
        return (exp(x * (ln(x) - 1) + 0.5 * (-ln(x) + log2pi) + 1 / (12 * x) - 1 / (360 * (x * x * x)) + 1 / (1260 * pow(x, 5)) - 1 / (1680 * pow(x, 7))));
    }
    if (x > -0.5) {
        return (1.0 + 0.150917639897307 * x + 0.24425221666910216 * pow(x, 2)) / (x + 0.7281333047988399 * pow(x, 2) - 0.3245138289924575 * pow(x, 3));
    }
    if (x < 0) {
        if (x == ~~x) {
            return;
        } else {
            return Math.PI / (Math.sin(Math.PI * x) * Gamma((1 - x)));
        }
    } else {
        return pow(x - 1, x - 1) * Math.sqrt(2 * Math.PI * (x - 1)) * exp(1 - x + 1 / (12 * (x - 1) + 2 / (5 * (x - 1) + 53 / (42 * (x - 1)))));
    }
}
function fact(ff) {
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
function bellb(x) {
    if (x == ~~x && x < blln.length) {
        return blln[x];
    } else {
        var sum = 0;
        for (var inj = 0; inj < 5; inj++) {
            sum += pow(inj, x) / fact(inj);
        }
        return sum / e;
    }
}



var randfuncs = "x^2~f'(x)-1~2e^-x~2x+3~{λ:λ=3}~e^(-λ*x)~(0.5,0.5)~∑[1...∞,sin(nx)/n]~m:H_2SO_4~|x^2-4|+2~1/x~x^-2~x!~lnx~∑[1,infinity,(x^n)/n!]~sinx~e^x:[−2,2]~tan(x)~(x+2)(x-3)^2~diff(0,2,2x)~(x-2)^2~∑[1,∞,sin((2n−1)x)/(2n−1)]~~∏[1,5,(x-n)]~∑[0,5,n]~x^x~gamma(x)~(x!)/(3!-x)~x%3~(x>3)?2x:-3~fact(x)~phi/x~(x>=0)?m_e*G/(r_e+100000x)^2:undefined~g[0]'(2x)~g[0](x)+1~sqrt(x)".split("~");


//Latex versions of randfuncs
randfuncs = "x^2    f'\\left(x\\right)-1    2e^{-x}    2x+3    \\lambda=3    e^{-\\lambda*x}    \\left(0.5,0.5\\right)    \\sum_{n=1}^{\\infinity}\\frac{\\sin\\left(nx\\right)}n    \\prod_{1}^{4}x-n    m:H_2SO_4    \\left|x^2-4\\right|+2    \\frac1x    x^{-2}    x!    \\ln x    \\sum_{n=1}^{\\infinity}\\frac{x^n}{n}    \\sin x    e^x:\\left[−2,2\\right]    \\tan\\left(x\\right)    \\left(x+2\\right)\\left(x-3\\right)^2    diff\\left(0,2,2x\\right)    \\left(x-2\\right)^2    \\sum_{n=1}^{\\infinity}\\frac{\\sin\\left(\\left(2n−1\\right)x\\right)}{2n−1}    \\prod_{n=1}^5\\left(x-n\\right)    \\sum_{n=0}^5n    x^x    \\Gamma\\left(x\\right)    \\frac{x!}{3!-x}    x%3    \\left(x>3\\right)?2x:-3    \\fact\\left(x\\right)    \\frac\\phi x    \\left(x>=0\\right)?m_e*G/\\left(r_e+100000x\\right)^2:undefined    g\\left[0\\right]'\\left(2x\\right)    g\\left[0\\right]\\left(x\\right)+1    \\sqrt x".split("    "); //four spaces

var randomfi = 0;

//Not actually random.
function randfunc() {
    return randfuncs[(randomfi++) % randfuncs.length];
}

//Draw a dot instead of a line.
function pt(vx, vy) {
    if (vy === undefined) {
        return vx;
    }
    return {
        "x": vx,
        "y": vy
    };
}

// 'lvl'th derivative of g[ia](x) when x = 'x'
function djkb(ia, lvl, x) {
    difflevel++;
    var res;
    if (difflevel > 8) {
        difflevel -= 1;
        return 0;
    }
    var h = 0.0001;
    if (lvl > 0) {
        res = (djkb(ia, lvl - 1, x + h) - djkb(ia, lvl - 1, x - h)) / (2 * h);
        difflevel -= 1;
        return res;
    }
    res = g[ia](x);
    difflevel -= 1;
    return res;
}


if (window.location.hash != "") {
	//index.html#y=x^2+2
    window.shouldload = false;
    if (window.location.hash[2] == "=") {
        window.jsonfunc = window.location.hash.substring(3);
    } else {
        window.jsondata = unescape(window.location.hash.substring(6));
    }
}


var all = document.getElementById("all");

//It is much faster to cache the entire page in a javascript.
//It is also insane.

all.innerHTML = "<img style=\"display:none\" src=\"grabbing.gif\" height=\"16\" width=\"16\"><canvas id=\"canvas\" width=\"800\" height=\"600\"><div style=\"margin:16px;font-family:sans-serif\"><h1>Error</h1>Your internet browser is way too old for this!. <a href=\"about\">About this page.</a><br />Download google chrome, firefox or safari<br><br>Choose one of these browsers, or find another one.<br><br><a href=\"http://www.google.com/chrome/\"><img id=\"i_chrome\" alt=\"Google Chrome\"></a>&nbsp;<a href=\"http://www.google.com/chrome/\">Get Google Chrome</a><br><a href=\"http://www.mozilla.com/firefox\"><img id=\"i_firefox\" alt=\"Firefox\"></a>&nbsp;<a href=\"http://www.mozilla.com/firefox\">Get Firefox</a><br><a href=\"http://www.apple.com/safari\"><img id=\"i_safari\" alt=\"Safari\"></a>&nbsp;<a href=\"http://www.apple.com/safari\">Get Safari</a><br><a href=\"http://www.opera.com/download/\"><img align=\"middle\" id=\"i_opera\" alt=\"Opera\"></a>&nbsp;<a href=\"http://www.opera.com/download/\">Get Opera</a><br></div></canvas><div id=\"ptd\" style=\"position:fixed;z-Index:80000;color:black;opacity:0.6;left:8px;bottom:8px;border:none;background:white;-webkit-transition:opacity 0.5s ease-in-out;-moz-transition:opacity 0.5s ease-in-out;-o-transition:opacity 0.5s ease-in-out;transition: opacity 0.5s ease-in-out;font:10pt 'Menlo','Andale Mono','Consolas','DejaVu Sans Mono',Droid Sans Mono','Lucida Console','Monaco','monofur',monospace\">(0,0)</div><div id=\"con\" style=\"display:none\" class=\"overlay\"><div id=\"logt\"><div>graph.tk v1.1 &copy; 2010 Anthony - NO WARRANTY<br>Notes:<br>Sometimes x^n will not be x to the power of n, but x XOR n, which is the normal javascript meaning. I have made modifications that allow some easier equations. A dot after the expression means it was evaluated in a non-javascript-standard way. Use size() to change size.<br><br>Some cool things to type:<br> Fe (iron mass), g(0), g[1](0), en[26], M[26], symbol[26]</div></div><br><input type=\"text\" style=\"width:100%\" id=\"conin\" onkeydown=\"if(event.which==13){consoleex(this)};if(event.which==38){this.value=last}\"></div><div id=\"funcs\" class=\"overlay\"><ul class=\"f\" id=\"flist\"><li id=\"prototype\"><div class=\"b\" style=\"background:#07c\"></div></li></ul><input type=\"button\" value=\"+\" id=\"pb\" onclick=\"newfunc();_ga_track_event('New')\"><a href=\"javascript:void(showcon())\" style=\"font-size:small;margin:8px\" id=\"shc\">Console</a><a href=\"javascript:void(tdiff())\" style=\"font-size:small;margin:8px\" id=\"sde\">Diff Eq</a><a href=\"javascript:void(scren())\" style=\"font-size:small;margin:8px\" id=\"tss\">Screenshot</a><small id=\"nosave\"></small><a href=\"about\" target=\"_blank\">\t<div id=\"quest\">?</div></a></div><div id=\"overlay\" style=\"display:none;bottom:0;right:0\" class=\"overlay\"><table><tbody><tr><td style=\"width:100px\"><input type=\"button\" value=\"f ' (x)\" onclick=\"if(this.value=='f \\' (x)'){this.value='f \\' \\' (x)';second=true;}else{this.value='f \\' (x)';second=false;}\"> = </td><td><input type=\"text\" id=\"nnn\" value=\"g(x)\" onchange=\"this.onkeydown()\" onkeydown=\"getg(this)\" onkeyup=\"this.onkeydown()\"></td></tr><tr><td>x<sub>0</sub> = </td><td><input type=\"text\" value=\"0\" id=\"x0\" onchange=\"this.onkeydown()\" onkeydown=\"valiad(this)\" onkeyup=\"this.onkeydown()\"></td></tr><tr><td>y<sub>0</sub> = </td><td><input type=\"text\" value=\"1\" id=\"y0\" onchange=\"this.onkeydown()\" onkeydown=\"valiad(this)\" onkeyup=\"this.onkeydown()\"></td></tr><tr><td>&nbsp;</td><td><input type=\"button\" value=\"Solve\" id=\"stopper\" onclick=\"if(solving){solving=false;}else{dosolve(document.getElementById('x0').value,document.getElementById('y0').value)}\"></td></tr></tbody></table></div>";
var canvas = document.getElementById("canvas");
var stopper = document.getElementById("stopper");//The solve diffeq button.
var overlay = document.getElementById("overlay");//the diffeq overlay

var width, height, draw;

//Mouse coordinates
var mx = 400;
var my = 300;

//Last mouse coordinates
var lmx;
var lmy;

var scalex = 1;
var scaley = scalex; //this always holds
var panx = 0;
var pany = 0;

//initial conditions
var ix = 1;
var iy = 1;

//Current conditions
var sx = 1;
var sy = 1;
var dx = 0;
var dy = 0;

//Last conditions
var lx = 1;
var ly = 1;

//Location of canvas on screen. While dragging this changes.
var cx = 0;
var cy = 0;

//Solving a diffeq?
var solving = false;
//diffeq step size
var step = 0.001;
var con = document.getElementById("con");
var proto = document.getElementById("prototype").cloneNode(true);
proto.removeAttribute("id");

//JSON parse/stringify
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());

var colorss = "#07c,#f00,#0a0,#04f,#f0f,#f80,#0ff,#808,#088,#880,#f08,#80f,#8f0,#f08".split(",");

function col(n) {
    return colorss[n % (colorss.length)];
}
//function list ul
var flist = document.getElementById("flist");

//log textbox
var logt = document.getElementById("logt");

var latexchars={
'gt':">",
'ge':">=",
'lt':"<",
'le':"<=",
"infty":"∞",
"left":"",
"right":"",
"cdot":"*",
"frac":"",
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

function getlatexpart(match, submatch)
{
  if(submatch == ",")
    return "";
  if(latexchars[submatch] !== undefined)
    return latexchars[submatch];
  return submatch;
}


//gets the value of a mathquill textbox (HTMLElement obj)
function getstr(obj, latex)
{
  if(latex)
    return $(obj).mathquill("latex");
  return (
    $(obj).mathquill("latex")
      .replace(/}{/g, ")/(") //so far only fractions have >1 MathBlock's
      .replace(/\\([a-zA-Z\.\,]+)/g, getlatexpart) //LaTeX symbols => special characters
      .replace(/{/g, "(") //LaTeX blocks {} usually correspond to () in text
      .replace(/}/g, ")")
      .replace(/\\/g, "") //leftover backslashes
    );
}


//sets the value of a mathquill textbox. This is only a temporary solution.
function setstr(obj, val) {
  $(obj).mathquill("latex", val)
}

function setonchange(obj, val){
  obj.onchange = eval("(function(){"+val+"})");
}


function save() {
    if (!ready) {
        return;
    }
    if (window.localStorage) {
        var od = {
            "status": "ok",
            g: []
        };
        for (var n = 0; n < flist.childNodes.length; n++) {
            //od.g.push(flist.childNodes[n].getElementsByTagName("input")[0].value);
            od.g.push(getstr(flist.childNodes[n].getElementsByTagName("span")[0],true));
        }
        var out = JSON.stringify(od);
        window.localStorage.setItem("fn", out);
    }
}


function newfunc(funcval) {
    var newone = proto.cloneNode(true);
    var inputbox=document.createElement("span");
    newone.appendChild(inputbox);
    
    inputbox.appendChild(document.createTextNode(funcval || randfunc()));
    $(inputbox).mathquill('editable');
    
    g.push(function (x) {
        return 0;
    });
    //inputbox.setAttribute("onchange", "getf(this," + flist.childNodes.length + ")");
    setonchange(inputbox,"getf(undefined," + flist.childNodes.length + ")");
    
    getf(inputbox, flist.childNodes.length, true);
    if (newone.getElementsByClassName) {
        var bs = newone.getElementsByClassName("b");
        if (bs.length > 0) {
            bs[0].style.background = col(flist.childNodes.length);
        }
    }
    flist.appendChild(newone);
    $(inputbox).mathquill("redraw");
    if(!funcval){
        $(inputbox).trigger({ type: "keydown", ctrlKey: true, which: 65 });
    }
    if (loaded) {
        
        inputbox.focus();
        //inputbox.select();
        inputbox.onchange();
        save();
        draw();
    }
}

function delfunc() {
    if (flist.childNodes.length > 1) {
        g.pop();
        flist.removeChild(flist.lastChild);
        flist.lastChild.getElementsByTagName("span")[0].focus();
        save();
    }
}


var second = false;//is diffeq a second derivative?


//The function parser
function extrafunc(string, jjq) {
    if (!settings.special) {
        return string;
    }
    string = string.replace(/\^\(\)/g,"");
    string = string.replace(/X/g, "x");
    string = string.replace(/ /g, "");
    string = string.replace(/√/g, "sqrt");
    string = string.replace(/[•⋅∙]/g, "*");
    string = string.replace(/[Ii]nfinity/g, "∞");
    string = string.replace(/[Ii]nf/g, "∞");
    string = string.replace(/⁻ⁱ/g, "^-1").replace(/ⁿ/g, "^n").replace(/⁻²/g, "^-2").replace(/⁻?⁰/g, "^0").replace(/⁻³/g, "^-3").replace(/⁻⁴/g, "^-4").replace(/⁻⁵/g, "^-5").replace(/⁻⁶/g, "^-6").replace(/⁻⁷/g, "^-7").replace(/⁻⁸/g, "^-8").replace(/⁻⁹/g, "^-9");
    string = string.replace(/(sin|cos|tan)\^\(\-1\)/g, "a$1"); //inverse trig functions written as sin^(-1)(x)
  	string = string.replace(/(sin|cos|tan|sec|csc|cot|log|ln)\^([\daex])\(/g, "$1_n($2,");
  	string = string.replace(/(sin|cos|tan|sec|csc|cot|log|ln)\^([\daex])([^\(])/g, "$1_n($2,$3)");
  	string = string.replace(/log_([\daex])\(/g, "logb($1,");
  	string = string.replace(/log_([\daex])([^\(])/g, "logb($1,$2)");
    
  	for(i in latexchars){
        if(i.length>1){//don't replace "," with space
  		string=string.replace(i,latexchars[i]);
        }
  	}
    string = string.replace(/(∑|∏)_\(([^\)]+)\)\^\(([^\)]+)\)(.+)$/,"$1[$2,$3,$4]");
    string = string.replace(/(∑|∏)_([\d]+)\^([\d]+)(.+)$/,"$1[$2,$3,$4]");
    string = string.replace(/(∑|∏)_\(([^\)]+)\)\^([\d]+)(.+)$/,"$1[$2,$3,$4]");
    string = string.replace(/(∑|∏)_([\d]+)\^\(([^\)]+)\)(.+)$/,"$1[$2,$3,$4]");
    
    string = string.replace(/[÷∕⁄]/g, "/").replace(/−/g, "-").replace(/′/g, "'").replace(/sum/g, "∑").replace(/¼/g, "0.25").replace(/½/g, "0.5").replace(/¾/g, "0.75").replace(/⅓/g, "(1/3)").replace(/⅔/g, "(2/3)").replace(/⅕/g, "0.2").replace(/⅖/g, "0.4").replace(/⅗/g, "0.6").replace(/⅘/g, "0.8").replace(/⅙/g, "(1/6)").replace(/⅚/g, "(5/6)").replace(/⅛/g, "0.125").replace(/⅜/g, "0.375").replace(/⅝/g, "0.625").replace(/⅞/g, "0.875").replace(/nx/g, "n*x").replace(/diff\(/g, "djkb(");
    if (jjq===true) {
        string = string.replace(/[gfy]'\[([\d]+)\]\(/g, "djkb($1,1,");
        string = string.replace(/[gfy]\[([\d]+)\]'\(/g, "djkb($1,1,");
        string = string.replace(/[gfy]'\(/g, "djkb(0,1,");
        string = string.replace(/[gfy](''|")\[([\d]+)\]\(/g, "djkb($2,2,");
        string = string.replace(/[gfy]\[([\d]+)\](''|")\(/g, "djkb($1,2,");
        string = string.replace(/[gfy](''|")\(/g, "djkb(0,2,");
        string = string.replace(/[gfy]'''\[([\d]+)\]\(/g, "djkb($1,3,");
        string = string.replace(/[gfy]\[([\d]+)\]'''\(/g, "djkb($1,3,");
        string = string.replace(/[gfy]'''\(/g, "djkb(0,3,");
        string = string.replace(/[gfy]''''\[([\d]+)\]\(/g, "djkb($1,4,");
        string = string.replace(/[gfy]\[([\d]+)\]''''\(/g, "djkb($1,4,");
        string = string.replace(/[gfy]''''\(/g, "djkb(0,4,");
        string = string.replace(/f\(/g, "g(");
    } else {
        string = string.replace(/[gy]'\[([\d]+)\]\(/g, "djkb($1,1,");
        string = string.replace(/[gy]\[([\d]+)\]'\(/g, "djkb($1,1,");
        string = string.replace(/[gy]'\(/g, "djkb(0,1,");
        string = string.replace(/[gy](''|")\[([\d]+)\]\(/g, "djkb($2,2,");
        string = string.replace(/[gy]\[([\d]+)\](''|")\(/g, "djkb($1,2,");
        string = string.replace(/[gy](''|")\(/g, "djkb(0,2,");
        string = string.replace(/[gy]'''\[([\d]+)\]\(/g, "djkb($1,3,");
        string = string.replace(/[gy]\[([\d]+)\]'''\(/g, "djkb($1,3,");
        string = string.replace(/[gy]'''\(/g, "djkb(0,3,");
        string = string.replace(/[gy]''''\[([\d]+)\]\(/g, "djkb($1,4,");
        string = string.replace(/[gy]\[([\d]+)\]''''\(/g, "djkb($1,4,");
        string = string.replace(/[gy]''''\(/g, "djkb(0,4,");
        string = string.replace(/f'\(x\)/g, "dy");
        string = string.replace(/f'x/g, "dy");
        string = string.replace(/fx/g, "y");
        string = string.replace(/dx/g, "1");
    }
    var sargs, ext, enn, iad;
    string = string.replace(/≥/g, ">=").replace(/≤/g, "<=").replace(/\++/g, "+").replace(/(\-\-)+/g, "+").replace(/\-(\-\-)+/,"-").replace(/Γ/g, "γ").replace(/γ\(/g, "fact(-1+").replace(/²/g, "^2").replace(/³/g, "^3").replace(/⁴/g, "^4").replace(/⁵/g, "^5").replace(/⁶/g, "^6").replace(/⁷/g, "^7").replace(/⁸/g, "^8").replace(/⁹/g, "^9").replace(/xxx/g, "x*x*x").replace(/(xx)/g, "x*x").replace(/(xx)/g, "x*x").replace(/([\d\.]+|[a-zπ])\!/g, "fact($1)").replace(/\(([^\(^\)]+)\)\!/g, "fact($1)").replace(/([^o^t^a-z^A-Z])g\(/g, "$1g[0](").replace(/^g\(/, "g[0](").replace(/\|([^\|]+)\|/g, "abs($1)").replace(/f\(x\)/g, "y").replace(/x\(/g, "x*(").replace(/x\^-1/g, "(1/x)").replace(/e\^(-[\d\.xy])/g, "exp($1)").replace(/e\^\(/g, "exp(").replace(/([^\(\)\^\]\[\,\.])\^\(/g,"Math.pow($1,").replace(/\(([^\)\(\[\]\.\^\,]+)\)\^\(/g,"Math.pow($1,").replace(/₀/g, "_0").replace(/₁/g, "_1").replace(/₂/g, "_2").replace(/₃/g, "_3").replace(/₄/g, "_4").replace(/₅/g, "_5").replace(/₆/g, "_6").replace(/₇/g, "_7").replace(/₈/g, "_8").replace(/₉/g, "_9").replace(/ₐ/g, "_a").replace(/ₑ/g, "_e").replace(/ₓ/g, "_x");
    
    if (string.indexOf("_") != -1 && /(mass|m\:)/.test(string)) {
        string = string.replace(/([a-zA-Z])_([\d])/g, "$1*$2+");
        string = string.replace(/([A-Z])([A-Z])/g, "$1+$2");
        string = string.replace(/^(mass\:|m\:)/, "");
    }
    if(!jjq){string=string.replace(/θ/g, "theta").replace(/theta/g, "(atan(y/x))")};
    string = string.replace(/([^\)]|[\d]+|[\d]+\.[\d]+)\^([\d]|[^\(^-])/g, "pow($1,$2)").replace(/([^\)]|[\d]+|[\d]+\.[\d]+)\^-([\d]+|[^\(^-])/g, "pow($1,-$2)").replace(/([a-z])\^\(([^\)]+)\)/g, "pow($1,$2)").replace(/\(([^\(^\)]+)\)\^\(([^\(^\)]+)\)/g, "pow($1,$2)").replace(/\(([^\(^\)]+)\)\^([^\(^\)])/g, "pow($1,$2)").replace(/ r /g, "(sqrt(x*x+y*y))").replace(/([\d]+)([^\+^%^\-^\*^\/^\d^\.^\}^\)^\:^>^<^\[^\]^\(^\{^\,])/g, "$1*$2").replace(/([^_^a-z^0-9][\d]+)\(/g, "$1*(").replace(/^([\d]+)\(/, "$1*(").replace(/\)pow/g, ")*pow").replace("γ(n+1)", "n!").replace("1/(n*n)", "n^-2").replace(/\)\(/g, ")*(").replace(/\(\+?pow\(([a-z]),([a-z])\)\)/g, "pow($1,$2)");
    var hassum = string.indexOf("∑") != -1;
    string = string.replace(/([ail])n/g, "$1é");
    if (hassum) {
        string = string.replace(/([∑∏])\[n=/g, "$1[");
        string = string.replace(/([∑∏])\[([^,]+)\.\.\./g, "$1[$2,");
        for (var nnnd = 0; nnnd < 6; nnnd++) {
            string = string.replace(/∑\[([^,]+),([^,]+),([^\]^\+^\-^n^\(]+)\*([^\]^\+^\-]+)\]/g, "($3)*∑[$1,$2,$4]");
            string = string.replace(/∑\[([^,]+),([^,]+),([^\]^\+^\-]+)\*([^\]^\+^\-^n^\)]+)\]/g, "($4)*∑[$1,$2,$3]");
            string = string.replace(/∑\[([^,]+),([^,]+),([^\]^\+^\-^n^\(]+\([^\]^\+^\-^n^\(]+\)[^\]^\+^\-^n^\(]+)\*([^\]^\+^\-]+)\]/g, "($3)*∑[$1,$2,$4]");
            string = string.replace(/∑\[([^,]+),([^,]+),([^\]^\+^\-]+)\*([^\]^\+^\-^n^\(]+\([^\]^\+^\-^n^\(]+\)[^\]^\+^\-^n^\(]+)\]/g, "($4)*∑[$1,$2,$3]");
        }
        string = string.replace(/∑\[([^,]+),∞,([^n^\]]+)\/(fact\(n\)|\(fact\(n\)\))\]/g, "((e*$2)-∑[0,$1-1,$2/fact(n)])");
        string = string.replace(/∑\[([^,]+),∞,pow\(([\d]+|[^\(^\)]),n\)\/(fact\(n\)|\(fact\(n\)\))\]/g, "(exp($2)-∑[0,$1-1,pow($2,n)])");
        string = string.replace(/∑\[([^,]+),∞,pow\(([\d]+),n\)\/(fact\(n\)|\(fact\(n\)\))\]/g, "(exp($2)-∑[0,$1-1,pow($2,n)])");
        string = string.replace(/1\/pow\(([^\)^,]+),([^\(^\))]+)\)/g, "pow($1,-$2)");
        var args = /∑\[([^,]+),∞,pow\(n,([^\)]+)\)\]/.exec(string);
        if (args != null) {
            if (/0+/.test(args[1])) {
                string = string.replace(args[0], "∞");
            } else {
                var reparg;
                if (!/x/.test(args[2])) {
                    reparg = zeta(-args[2]);
                } else {
                    reparg = "zeta(-" + args[2] + ")";
                }
                string = string.replace(args[0], "((" + reparg + ")-∑[1," + args[1] + "-1,pow(n," + args[2] + ")])");
            }
        }
        string = string.replace(/∑\[([^,]+),([^,]+),n\]/g, "(-0.5*(-1+($1)-($2))*(($1)+($2)))").replace(/∑\[0*[01],∞,pow\(n,([^n^\(^\)]+)\)\/\(?fact\(n\)\)?\]/g, "(e*bellb($1))").replace(/∑\[0*2,∞,pow\(n,([^n^\(^\)]+)\)\/\(?fact\(n\)\)?\]/g, "(e*bellb($1)-1)").replace(/∑\[0*3,∞,pow\(n,([^n^\(^\)]+)\)\/\(?fact\(n\)\)?\]/g, "(e*bellb($1)-1-pow(2,(-1+$1)))").replace(/∑\[0*[01],∞,n\/fact\(n\)\]/g, "(e)").replace(/∑\[0*2,∞,n\/fact\(n\)\]/g, "(e-1)").replace(/∑\[0*3,∞,n\/fact\(n\)\]/g, "(e-2)").replace(/∑\[0*4,∞,n\/fact\(n\)\]/g, "(0.5*(2*e-5))").replace(/∑\[0*5,∞,n\/fact\(n\)\]/g, "((1/3)*(3*e-8))").replace(/∑\[([^,]+),∞,pow\(([^\,]+),-n\)\]/g, "((pow($2,1-$1))/(-1+($2)))").replace(/∑\[([^,]+),([^,]+),pow\(([^\,]+),-n\)\]/g, "(-((pow($3,-$1-$2))*(pow($3,$1)-pow($3,1+$2)))/(-1+($3)))").replace(/∑\[([^,]+),∞,pow\(([^\,]+),n\)\]/g, "((abs($2)<1)?pow($2,$1)/(1-$2):undefined)").replace(/∏\[0,x,n\]/g, "(0)");
        string=string.replace(/∑\[([\d\*\+\-a-wyz]+),([\d\*\+\-a-wyz]+|∞),([^\]]+)\]/,function(all,a,b,c){
            if (c.indexOf("n") == -1) {
                return "((" + c + ")*(1+(" + b + ")-(" + a + ")))";
            } else {
                ext = "";
                if (b == "∞") {
                    enn = 20;
                } else {
                    enn = safeeval(b);
                }
                for (iad = safeeval(a); iad <= enn; iad++) {
                    ext += "+" + c.replace(/n/g, iad);
                }
                return "(" + ext + ")";
            }
       
        
        });
    }
    string=string.replace(/ζ\(([\d\.]+)\)/g,function(x,z){return zeta(z);});
    string = string.replace(/ζ/g, "zeta").replace(/≠/g, "!=").replace(/∏\[[12],([^,]+),n\]/g, "fact($1)").replace(/∏\[([\d\*\+\-a-wyz]+),([\d\*\+\-a-wyz]+),n\]/, "(fact($2)/fact(($1)-1))");
    sargs = /∏\[([\d\*\+\-a-wyz]+),([\d\*\+\-a-wyz]+|∞),([^\]]+)\]/.exec(string);
    if (sargs != null) {
        if (sargs[3].indexOf("n") == -1) {
            string = string.replace(sargs[0], "pow(" + sargs[3] + ",1+(" + sargs[2] + ")-(" + sargs[1] + "))");
        } else {
            ext = "1";
            if (sargs[2] == "∞") {
                enn = 20;
            } else {
                enn = safeeval(sargs[2]);
            }
            for (iad = safeeval(sargs[1]); iad <= enn; iad++) {
                ext += "*(" + sargs[3].replace(/n/g, iad) + ")";
            }
            string = string.replace(sargs[0], "(" + ext + ")");
        }
    }
    if (string[0] == "(" && string.indexOf(",") != -1) {
        string = "pt" + string;
    }
    string = string.replace(/^pow\(x,2\)\+pow\(y,2\)=(.+)/, "sqrt(($1)-x*x)").replace(/^pow\(x,2\)\+([\d\/e\*]+)\*pow\(y,2\)=(.+)$/, "sqrt(($2-x*x)/($1))").replace(/^([0-9e\/\*\+\-\(\)]+)\*pow\(x,2\)\+pow\(y,2\)=(.+)$/, "sqrt(($2-($1*x*x)))").replace(/^([0-9e\/\*\+\-\(\)]+)\*pow\(x,2\)\+([0-9e\/\*\+\-\(\)]+)\*pow\(y,2\)=(.+)$/, "sqrt(($3-($1*x*x))/($2))").replace(/^[yfg]=/, "").replace(/^([\da-z\.\*\/]+)\*[yfg]=(.+)$/, "($2)/($1)").replace(/∞/g, "Infinity").replace(/¯/g, ",").replace(/pow\((.),4\)/g, "($1*$1*$1*$1)").replace(/pow\((.),3\)/g, "($1*$1*$1)").replace(/pow\((.),2\)/g, "($1*$1)").replace(/pow\((.),1\)/g, "($1)").replace(/pow\((.),0\)/g, "(1)").replace(/pow\(e,([^\)^\(]+)\)/g, "exp($1)").replace(/\(\)/g, "(0)").replace(/\)([a-z])/g, ")*$1");
    if (jjq != null) {
        string = string.replace(/fx/g, "(g[0](x))");
    }
    string = string.replace(/é/g, "n");
    string = string.replace(/(sin|cos|tan|ln|log|abs|floor|ceil|sec|csc|tg|cot|exp)\*?x/g, "$1(x)");
    string = string.replace(/pow\(([\d\.]+),([\d\.]+)\)/, function (d, x, y) {
        return pow(x, y);
    });
    string = string.replace(/pow\(([\d\.^,]+),([\d\.^,\+\-]+)\)/, function (d, x, y) {
        return pow(x, safeeval(y));
    });
    string = "(" + string + ")";
    string = string.replace(/([\+\*\/\-])\(0\)/g, "$10");
    string = string.replace(/\)\-0\)/g, "))");
    string = string.replace(/é/g, "n");
    string = string.replace(/(sin|cos|tan|ln|log|abs|floor|ceil|sec|csc|tg|cot|exp)x/g, "$1(x)");
    string = string.replace(/\(\(([\d\.]+)\)\)/g, "($1)");
    string = string.replace(/\(\(([\d\.]+)\)\)/g, "($1)");
    string = string.replace(/\(\(([\d\.]+)\)\)/g, "($1)");
    string = string.replace(/\(\(([\d\.]+)\)\)/g, "($1)");
    string = string.replace(/([\+\*\/\-])\(([\d\.]+)\)/g, "$1$2");
    string = string.replace(/\(([\d]+[\*\+\-\/][\d]+)\)/, function (d, x, y) {
        return safeeval(x);
    });
    string = string.replace(/\+\)/g, ")");
    if (string == "()") {
        string = ""
    }
    string = string.replace(/\)([\d])/g, ")*$1");
    if (string[0] == "(" && string[string.length - 1] == ")") {
        string = string.substring(1, string.length - 1);
    }
    string = string.replace(/^(.+)[\|\:]\[([\d\-\.\+]+),([\d\-\.\+]+)\]$/, "((x>($2))&&(x<($3)))?($1):undefined");
    string=string.replace(/α/g,"alpha").replace(/β/g,"beta").replace(/γ/g,"gamma").replace(/δ/g,"delta").replace(/ζ/g,"zeta").replace(/η/g,"eta").replace(/θ/g,"theta").replace(/ι/g,"iota").replace(/κ/g,"kappa").replace(/μ/g,"mu").replace(/ν/g,"nu").replace(/ξ/g,"xi").replace(/ο/g,"omicron").replace(/ρ/g,"rho").replace(/σ/g,"sigma").replace(/τ/g,"tau").replace(/υ/g,"upsilon").replace(/χ/g,"chi").replace(/ψ/g,"psi").replace(/ω/g,"omega").replace(/ϕ/g,"phi").replace(/φ/g,"phiv").replace(/ϵ/g,"epsilon").replace(/ε/g,"epsiv").replace(/ς/g,"sigmaf").replace(/ϝ/g,"gammad").replace(/ϰ/g,"kappav").replace(/ϖ/g,"piv").replace(/ϱ/g,"rhov").replace(/ϑ/g,"thetav").replace(/π/g,"pi").replace(/λ/g,"lambda").replace(/Γ/g,"Gamma").replace(/Δ/g,"Delta").replace(/Θ/g,"Theta").replace(/Λ/g,"Lambda").replace(/Ξ/g,"Xi").replace(/Π/g,"Pi").replace(/Σ/g,"Sigma").replace(/Υ/g,"Upsilon").replace(/Φ/g,"Phi").replace(/Ψ/g,"Psi").replace(/Ω/g,"Omega").replace(/⊥/g,"perp").replace(/∇/g,"nabla").replace(/∀/g,"forall").replace(/∐/g,"coprod").replace(/∫/g,"int");
    string=string.replace(/\)Math/g,")*Math");
   
    //there should be no "^"s
    if(/\^/.test(string)){
        throw("xor");
    
    }
    
    
    return string;
}

//function compiler
function getfunction(string) {
    try {
        var dddd = extrafunc(string, true);
        var func = safeeval("(function (x) { with(Math){ return " + dddd + ";}})");
        func(2.4324234215125);
        return func;
    } catch (ex) {
        return false;
    }
}
function scren() {
    window.location = canvas.toDataURL("image/png");
}

//diffeq function compiler
function get2dfunction(string) {
    try {
        var func = safeeval("(function(x,y,dx,dy){ with(Math) { return " + extrafunc(string) + ";} } )");
        func(2.4324234215123);
        return func;
    } catch (ex) {
        return false;
    }
}

//validate
function valiad(obj) {
    try {
        safeeval(extrafunc(obj.value));
        obj.style.background = "white";
    } catch (ex) {
        obj.style.background = "red";
    }
}



//Console methods
var big = false;
function size() {
    big = !big;
    logt.style.width = big ? "500px" : "331px";
    logt.style.height = big ? "500px" : "117px";
    return "OK";
}

function showcon() {
    con.style.display = (con.style.display == 'none' ? 'block' : 'none');
    document.getElementById("conin").focus();
    _ga_track_event("Console " + con.style.display)
}

function consolelog(vla, question) {
    vla = JSON.stringify(vla);
    var right = document.createElement("div");
    var left = document.createElement("b");
    left.style.textAlign = "left";
    right.style.textAlign = "right";
    right.style.borderBottom = "1px solid #444";
    var rtext = document.createTextNode(vla.toString());
    right.appendChild(rtext);
    var ltext = document.createTextNode(question);
    left.appendChild(ltext);
    var item = document.createElement("div");
    item.appendChild(left);
    item.appendChild(right);
    logt.appendChild(item);
    logt.scrollTop = logt.scrollHeight
}
var ans = null;
var last = "";

function consoleex(val) {
    last = val.value;
    if (val.value == "") {
        return;
    }
    if (/^[\*\+\/]/.test(val.value)) {
        val.value = "ans" + val.value
    }
    var obj;
    try {
        var done = false;
        obj = safeeval("(" + (val.value) + ")");
        ans = obj;
        consolelog(obj, val.value);
        done = true;
    } catch (ex) {
        try {
            var ddsddd = extrafunc(val.value);
            obj = safeeval("(" + ddsddd + ")");
            ans = obj;
            consolelog(obj, val.value + "=" + ddsddd + " .");
        } catch (xbb) {
            consolelog(xbb, "!" + val.value);
        }
    }
    val.value = "";
}
function clear() {
    logt.innerHTML = "";
    return "Log Cleared";
}
function getf(obj, idd, force) {
//a function has been modified. get new one.
if(obj===undefined)
{
    obj=flist.childNodes[idd].getElementsByTagName("span")[0];
}

    if (idd > (g.length - 1)) {
        draw();
        return;
    }
    var strdata=getstr(obj);
    if ((idd != 0) && (idd == (flist.childNodes.length - 1)) && (strdata == "")) {
        delfunc();
        draw();
        return;
    }
    
    var func = getfunction(getstr(obj));
    if (func) {
        obj.style.background = "white";
        g[idd] = func;
        draw();
    } else {
        obj.style.background = "red";
    }
    save();
}
var good = false;

function getg(obj) {
    if (obj.value == "") {
        good = false;
        obj.style.background = "white";
        return draw();
    }
    var func = get2dfunction(obj.value);
    if (func) {
        obj.style.background = "white";
        E = func;
        good = true;
    } else {
        good = false;
        obj.style.background = "red";
    }
    draw();
}


window.onresize = function () {
    if (window.innerWidth) {
        width = window.innerWidth;
        height = window.innerHeight;
    }
    if (!width) {
        width = document.body.clientWidth;
    }
    if (!height) {
        height = document.body.clientHeight;
    }
    if (!height) {
        height = 120;
    }
    canvas.width = width;
    canvas.height = height;
    if (draw && ctx) {
        draw()
    };
};

function calcnextframe() {
    fofy = sy;
    var df = E(sx, sy, dx, dy);
    if (df == Infinity) {
        fofy = sy + 0.001;
        df = E(sx + 0.001, fofy, dx + 0.001, dy + 0.001);
    }
    if (second) {
        dx = 1;
        dy += step * df;
    } else {
        var mag = Math.sqrt(1 + df * df);
        dx = 1 / mag;
        dy = df / mag;
    }
    sx += step * dx;
    sy += step * dy;
    if (second) {
        sx -= step * step / 2;
        sy -= step * step * df / 2;
    }
}
function nextframe() {
    stopper.value = solving ? "Stop" : "Solve";
    ctx.save();
    var scale = scalex * height / 15;
    ctx.translate(panx, pany);
    ctx.scale(scale, scale);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2 / scale;
    ctx.beginPath();
    var z;
    for (z = 0; z < 30; z++) {
        calcnextframe();
    }
    plotf(lx, ly);
    plot(sx, sy);
    lx = sx;
    ly = sy;
    ctx.stroke();
    ctx.restore();
    if (sx < boundright && solving) {
        if (sx > boundleft) {
            if (sy < boundtop) {
                if (sy > boundbottom) {
                    setTimeout(nextframe, 0);
                    return;
                }
            }
        }
    }
    if (!solving) {
        draw();
    }
    solving = false;
    stopper.value = solving ? "Stop" : "Solve";
}



//Format number
function forms(num, digits) {
    e = Math.E;
    pi = Math.PI;
    if (!num) {
        return "0";
    } else if (num == pi) {
        return "π";
    } else if (num == e) {
        return "e";
    } else if (num % (pi / 4) == 0) {
        return (num / pi) + "π";
    } else if (num % (1 / 3) == 0) {
        return (num * 3) + "/3";
    } else if (num % (e / 4) == 0) {
        return (num / e) + "e";
    }
    if (digits === undefined) {
        return num.toString()
    }
    if (num.toPrecision) {
        if (Math.abs(num) < 0.0000001) {
            return "0.0000000";
        }
        return num.toPrecision(digits);
    }
    return num;
}
function dosolve(x, y) {
    stopper.value = solving ? "Stop" : "Solve";
    try {
        safeeval(extrafunc(x));
        safeeval(extrafunc(y));
        safeeval("numsolve(" + extrafunc(x) + "," + extrafunc(y) + ")");
    } catch (ex) {
        alert("error: invalid starting values: " + ex);
    }
}
document.body.onmouseup = function (event) {
    drag = false;
    canvas.style.cursor = "default";
    draw();
};

function numsolve(initx, inity) {
    ix = initx;
    iy = inity;
    sx = ix;
    sy = iy;
    dx = 1;
    dy = 0;
    lx = sx;
    ly = sy;
    solving = true;
    stopper.value = solving ? "Stop" : "Solve";
    nextframe();
}
function f(n) {
    return fofy;
}
g.push(function (x) {
    return x * x + x - 2;
});

function drawwhiledrag() {
    if (drag) {
        draw();
        setTimeout(drawwhiledrag, 1000);
    }
}
if (!/(gra[p]h\.[t]k|an[t]scape)/.test(window.location.href)) { /*while(!loaded){window.loction++}*/
}
function draw() {
    e = Math.E;//they can be accidentially changed
    pi = Math.PI;
    if (!ctx) {
        return;
    }
    ctx.lineCap = "butt";
    pany += cy;
    panx += cx;
    cy = cx = 0;
    canvas.style.top = cy + "px";
    canvas.style.left = cx + "px";
    stopper.value = solving ? "Stop" : "Solve";
   
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    var scale = scalex * height / 20;
    scale = scalex * height / 15;
    ctx.translate(panx, pany);
    ctx.scale(scale, scale);
    boundleft = (-panx) / scale;
    boundright = (width - panx) / scale;
    boundbottom = -(height - pany) / scale;
    boundtop = pany / scale;
    var gridsize = pow(2, 6 - ~~ (log(scale) / log(2)));
    var overleft = gridsize * ~~ (boundleft / gridsize) - gridsize;
    var overright = gridsize * ~~ (boundright / gridsize) + gridsize;
    var overtop = gridsize * ~~ (boundtop / gridsize) + gridsize;
    var overbottom = gridsize * ~~ (boundbottom / gridsize) - gridsize;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2 / scale;
    ctx.beginPath();
    plotf(overleft, 0);
    plot(overright, 0);
    ctx.stroke();
    ctx.beginPath();
    plotf(0, overbottom);
    var gy;
    plot(0, overtop);
    ctx.stroke();
    ctx.lineWidth = 2 / scale;
    for (var gid = 0; gid < g.length; gid++) {
        var dsd = g[gid](pi / (0.3329 * e));
        ctx.strokeStyle = col(gid);
        ctx.fillStyle = "white";
        if (dsd == null && (g[gid](301.2101) == null) && (g[gid](0.1) == null)) {
            ctx.fillStyle = "black";
            ctx.strokeStyle = "black";
            ctx.font = "8pt sans-serif";
        } else if (typeof dsd == "object") {
            ctx.beginPath();
            if (dsd.x != undefined && dsd.x < boundright && dsd.x > boundleft && dsd.y != undefined && dsd.y < boundtop && dsd.y > boundbottom) {
                ctx.arc(dsd.x, -dsd.y, 3 / scale, 0, Math.PI * 2, true);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "black";
            ctx.strokeStyle = "black";
            ctx.font = "8pt sans-serif";
        } else {
            ctx.beginPath();
            var stepx = (overright - overleft) * (g.length > 10 ? 4 : 1) / width;
            var state = 0;
            var xintercepts = [];
            var lasty = null;
            for (var x = overleft; x <= overright; x += stepx) {
                gy = g[gid](x);
                var jmp = abs(gy - lasty) > 1000 / scale;
                if (!isNaN(gy) && (gy != Infinity) && (gy != -Infinity)) {
                    if (lasty == null || jmp) {
                        if (jmp && (lasty != null)) {
                            ctx.stroke();
                            ctx.beginPath();
                            if (lasty < boundtop && lasty > boundbottom) {
                                ctx.arc(x, -lasty, 3 / scale, 0, Math.PI * 2, true);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();
                        }
                        ctx.beginPath();
                        if (gy < boundtop && gy > boundbottom) {
                            ctx.arc(x, -gy, 3 / scale, 0, Math.PI * 2, true);
                        }
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();
                        ctx.beginPath();
                        plotf(x, gy);
                    } else {
                        plot(x, gy)
                    }
                    if (gy > 0) {
                        if (state == 2) {
                            xintercepts.push(x);
                        }
                        state = 1;
                    } else if (gy < 0) {
                        if (state == 1) {
                            xintercepts.push(x);
                        }
                        state = 2;
                    }
                } else if (lasty != null) {
                    ctx.stroke();
                    ctx.beginPath();
                    if (lasty > boundbottom && lasty < boundtop) {
                        ctx.arc(x, -lasty, 3 / scale, 0, Math.PI * 2, true);
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                }
                lasty = null;
                if (!isNaN(gy) && (gy != Infinity) && (gy != -Infinity)) {
                    lasty = gy;
                }
            }
            ctx.stroke();
            ctx.fillStyle = "black";
            ctx.strokeStyle = "black";
            ctx.font = "8pt sans-serif";
            if (xintercepts.length > 0) {
                for (var z = 0; z < xintercepts.length; z++) {
                    var exact = false;
                    if (g[gid](round(xintercepts[z] * 30) / 30) == 0) {
                        xintercepts[z] = round(30 * xintercepts[z]) / 30;
                        exact = true;
                    } else if (g[gid](round(xintercepts[z] * 40) / 40) == 0) {
                        xintercepts[z] = round(40 * xintercepts[z]) / 40;
                        exact = true;
                    } else if (g[gid](round(xintercepts[z] * 50) / 50) == 0) {
                        xintercepts[z] = round(50 * xintercepts[z]) / 50;
                        exact = true;
                    }
                    if (exact && (xintercepts[z] % gridsize != 0)) {
                        ctx.translate(xintercepts[z], 0);
                        ctx.scale(1 / scale, 1 / scale);
                        ctx.translate(0, -20);
                        if (ctx.fillText) {
                            ctx.fillText(forms(xintercepts[z]), -2, 2);
                        }
                        ctx.translate(0, 20);
                        ctx.scale(scale, scale);
                        ctx.translate(-xintercepts[z], 0);
                        ctx.beginPath();
                        plot(-30 / scale, 0);
                        plot(30 / scale, 0);
                        ctx.stroke();
                    }
                }
            }
            x = 0;
            if (0 > overleft && 0 < overright) {
                gy = g[gid](x);
                if (!isNaN(gy) && gy > boundbottom && gy < boundtop && gy != Infinity && gy != -Infinity && (Math.abs(gy * scale) > 15)) {
                    var ty = gy;
                    x = 0;
                    ctx.translate(x, -ty);
                    ctx.scale(1 / scale, 1 / scale);
                    ctx.translate(20, 0);
                    if (ctx.fillText) {
                        ctx.fillText(forms(gy), -2, 2);
                    }
                    ctx.translate(-20, 0);
                    ctx.scale(scale, scale);
                    ctx.translate(-x, ty);
                    ctx.beginPath();
                    plot(-3 / scale, gy);
                    plot(3 / scale, gy);
                    ctx.stroke();
                }
            }
        }
    }
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 0.4 / scale;
    for (var x = overleft; x <= overright; x += gridsize) {
        ctx.beginPath();
        plotf(x, overbottom);
        plot(x, overtop);
        ctx.stroke();
    }
    for (var y = overbottom; y <= overtop; y += gridsize) {
        ctx.beginPath();
        plotf(overleft, y);
        plot(overright, y);
        ctx.stroke();
    }
    ctx.lineWidth = 0.1 / scale;
    for (var x = overleft; x <= overright; x += gridsize / 4) {
        ctx.beginPath();
        plotf(x, overbottom);
        plot(x, overtop);
        ctx.stroke();
    }
    for (var y = overbottom; y <= overtop; y += gridsize / 4) {
        ctx.beginPath();
        plotf(overleft, y);
        plot(overright, y);
        ctx.stroke();
    }
    ctx.lineWidth = 2 / scale;
    ctx.strokeStyle = "black";
    for (var x = overleft; x <= overright; x += gridsize) {
        ctx.beginPath();
        plotf(x, -3 / scale);
        plot(x, 3 / scale);
        ctx.stroke();
        var ty = 0;
        if (0 > boundtop) {
            ty = -boundtop;
        }
        if (0 < boundbottom) {
            ty = -boundbottom - 0.5 / scalex
        }
        ctx.translate(x, ty);
        ctx.scale(1 / scale, 1 / scale);
        ctx.translate(3, 12);
        if (ctx.fillText) {
            ctx.fillText(forms(x), -2, 2)
        }
        ctx.translate(-3, -12);
        ctx.scale(scale, scale);
        ctx.translate(-x, -ty);
    }
    for (var y = overbottom; y <= overtop && 0; y += gridsize) {
        ctx.beginPath();
        plotf(-3 / scale, y);
        plot(3 / scale, y);
        ctx.stroke();
        var tx = 0;
        ctx.translate(tx, y);
        ctx.scale(1 / scale, 1 / scale);
        if (ctx.fillText) {
            ctx.fillText(forms(y), -2, -2)
        }
        ctx.fillRect(0, 0, 10, 10);
        ctx.scale(scale, scale);
        ctx.translate(-tx, -y);
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.4 / scale;
    if (good) {
        for (var x = overleft; x < boundright; x += gridsize / 4) {
            for (var y = overbottom; y < boundtop; y += gridsize / 4) {
                ctx.beginPath();
                fofy = y;
                var Ef = E(x, y, 0, 0);
                if (Ef == Infinity || isNaN(Ef)) {
                    fofy = y + 0.001;
                    Ef = E(x + 0.001, fofy, 0, 0);
                }
                var mag = Math.sqrt(1 + Ef * Ef);
                var nEx = gridsize / 10 * 1 / (mag);
                var nEy = gridsize / 10 * Ef / (mag);
                plotf(x - nEx, y - nEy);
                plot(x + nEx, y + nEy);
                ctx.stroke();
            }
        }
    }
    ctx.restore();
}

canvas.style.cursor = "default";
canvas.onmousedown = function (e) {
    if (e.x) {
        mx = e.x;
        my = e.y;
    } else {
        mx = e.pageX;
        my = e.pageY;
    }
    lmx = mx;
    lmy = my;
    drag = true;
    canvas.style.cursor = "url(grabbing.gif), grabbing";
    if (!iphone) {
        setTimeout(drawwhiledrag, 1000);
    }
};
document.body.onmousemove = function (e) {
    if (!e) {
        e = window.event;
        if (!e) {
            return;
        }
    }
    if (e.x !== undefined) {
        mx = e.x;
        my = e.y;
    } else {
        mx = e.pageX;
        my = e.pageY;
    }
    if (!drag) {
        var scale = scalex * height / 15;
        if (showp > g.length) {
            showp = 0;
        }
        if (showp == g.length) {
            ptd.style.opacity = 0;
        } else {
            ptd.style.opacity = 0.6;
        }
        if (showp < g.length) {
            var stra = ((mx - panx) / scale);
            var strb = ((pany - my) / scale);
            var strc = newton(showp, 27, (mx - panx) / scale);
            if (abs(g[showp](strc)) > 0.001) {
                strc = "?"
            }
            stra = forms(stra, 4);
            strb = forms(strb, 4);
            strc = forms(strc, 7);
            stra = "(" + stra + "," + strb + ")";
            while (stra.length < 18) {
                stra += " ";
            }
            stra += " g[" + showp + "] root: " + strc;
            ptd.childNodes[0].nodeValue = stra;
        }
        return;
    }
    cx += mx - lmx;
    cy += my - lmy;
    canvas.style.left = cx + "px";
    canvas.style.top = cy + "px";
    lmx = mx;
    lmy = my;
};

function scrl(n) {
    var ls = log(scalex);
    ls += n * 0.001;
    scalex = exp(ls);
    var scale = scalex * height / 20;
    draw();
}
function cancelEvent(e) {
    e = e ? e : window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.cancelBubble = true;
    e.cancel = true;
    e.returnValue = false;
    return false;
}

//Scale const for scrolling zoom
var scaleconst = 0.001;
if (/Firefox/.test(navigator.userAgent)) {
    scaleconst = 0.01;
}
if (/Opera/.test(navigator.userAgent)) {
    scaleconst = 0.03
}
if (!/Mac OS X/.test(navigator.userAgent)) {
    scaleconst = 0.1
}
function hookEvent(element, eventName, callback) {
    if (typeof(element) == "string") {
        element = document.getElementById(element);
    }
    if (element == null) {
        return;
    }
    if (element.addEventListener) {
        if (eventName == 'mousewheel') {
            element.addEventListener('DOMMouseScroll', callback, false);
        }
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    }
}
hookEvent(canvas, 'mousewheel', function (e) {
    var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;
    var ls = log(scalex);
    ls += wheelData * scaleconst;
    scalex = exp(ls);
    var scale = scalex * height / 20;
    draw();
    cy = 0;
    canvas.style.top = cy + "px";
    try {
        document.body.onmousemove(e);
    } catch (ex) {}
    cancelEvent(e);
});
width = window.innerWidth;
height = window.innerHeight;
canvas.width = width;
canvas.height = height;
scalex = 2;
window.onresize();
pany = 2 * height / 3;
panx = width / 3;
if (canvas.getContext) {
    ctx = canvas.getContext("2d");
} else {
//to prevent people from downloading the images if it is never visible anyway
    document.getElementById("i_firefox").src = "firefox.png";
    document.getElementById("i_safari").src = "safari.png";
    document.getElementById("i_opera").src = "opera.png";
    document.getElementById("i_chrome").src = "chrome.png";
    canvas.onmousedown = function () {};
    canvas.onmouseup = function () {};
}
//flist.childNodes[0].getElementsByTagName("span")[0].value = jsonfunc;
//flist.childNodes[0].getElementsByTagName("span")[0].onchange();

flist.removeChild(flist.firstChild);
g=[];
newfunc(jsonfunc);
canvas.style.cursor = "default";
var sdiff = false;

function tdiff() {
    sdiff = !sdiff;
    document.getElementById("overlay").style.display = sdiff ? "block" : "none";
}
function loadd(d) {
    if (d.status == "ok") {
        if (d.g.length > 10) {
            if (!confirm("You are about to load " + d.g.length + " graphs. Are you sure you want these graphs?")) {
                localStorage.setItem("fn", null);
                return
            }
        }
        if (d.df) {
            document.getElementById("nnn").onchange();
            tdiff();
        }
        for (var n = 0; n < d.g.length; n++) {
            if (d.g[n] != "") {
                if (n > 0) {
                    newfunc(d.g[n])
                } else {
                    //flist.childNodes[n].getElementsByTagName("input")[0].value = d.g[n];
                    setstr(flist.childNodes[n].getElementsByTagName("span")[0],d.g[n]);
                    //flist.childNodes[n].getElementsByTagName("span")[0].onchange()
                }
            }
        }
    } else {
        alert("Warning - tried to load corrupted data.");
    }
}
var ready = false;
if (shouldload) {
   if (window.localStorage) {
        var data = localStorage.getItem("fn");
        if (data != null) {
            try {
                data = JSON.parse(data);
                loadd(data);
            } catch (ex)  {}
        }
    }
    ready = true;
} else if (jsondata != null) {
    var data = jsondata;
    if (window.JSON) {
        try {
            data = JSON.parse(data);
            loadd(data);
        } catch (ex) {}
    } else {
        data = safeeval("(" + data + ")");
        loadd(data);
    }
}
if (window.parent.length) {
    //in an iframe
    document.getElementById("funcs").style.display = "none"
}
if (!iphone && g.length == 1 && getstr(flist.childNodes[0].getElementsByTagName("span")[0]) == "e^x") {
    //set up default functions
    loadd({"status":"ok","g":["e^x","\\frac{1}{8}\\left(x+2\\right)\\left(x-4\\right)^2","f'\\left[1\\right]\\left(x\\right)","\\sum_{n=1}^{\\infty}\\frac{\\sin\\left(nx\\right)}{n}"]});
    //the sum is a little slow. (the last one in defaultGraphs)
    showp = 1;
}

draw();
document.getElementById("ldall").style.display = "none";
document.getElementById("all").style.display = "block";
$('#flist').mathquill("redraw");
var lsd = 0;


//iPhone code
function tmove(event) {
    event.preventDefault();
    var tk = event.changedTouches;
    if (tk.length == 1) {
        document.body.onmousemove({
            x: tk[0].pageX,
            y: tk[0].pageY
        });
    } else if (tk.length == 2) {
        var dx = tk[1].pageX - tk[0].pageX;
        var dy = tk[1].pageY - tk[0].pageY;
        var ndst = Math.sqrt((dx * dx) + (dy * dy));
        if (lsd != 0) {
            scrl(ndst - lsd);
        }
        lsd = ndst;
    }
}
function tstart(event) {
    lsd = 0;
    var tk = event.changedTouches;
    if (tk.length > 0) {
        canvas.onmousedown({
            x: tk[0].pageX,
            y: tk[0].pageY
        });
        event.preventDefault();
    }
}
if (iphone) {
    document.getElementById("shc").style.display = "none";
    document.getElementById("quest").style.display = "none";
    document.getElementById("sde").style.display = "none";
    document.getElementById("pb").style.display = "none";
    document.getElementById("prototype").getElementsByClassName("b")[0].style.display = "none";
    document.getElementById("tss").style.display = "none";
    document.body.addEventListener("touchstart", tstart, false);
    document.body.addEventListener("touchend", draw, false);
    document.body.addEventListener("touchmove", tmove, false);
}
if (!ready) {
    document.getElementById("nosave").innerHTML = "nosave"
};

function newton(gid, itterations, start) {
    var _x = start;
    for (var it = 0; it < itterations; it++) {
        var m = djkb(gid, 1, _x);
        var y_1 = g[gid](_x);
        _x -= y_1 / m;
        if (m === 0) {
            break;
        }
    }
    if (isNaN(_x) || _x == Infinity || _x == -Infinity) {
        return Infinity;
    }
    return _x;
}
var ptd = document.getElementById("ptd");
if (iphone || window.parent.length > 0) {
    ptd.style.display = "none";
} else {
    ptd.onclick = function () {
        showp++;
        if (showp > g.length) {
            showp = 0;
        }
        if (showp == g.length) {
            ptd.style.opacity = 0;
        } else {
            ptd.style.opacity = 0.6;
            ptd.childNodes[0].nodeValue = "Set to function number " + showp
        }
    }
}
if (window.applicationCache) {
    window.applicationCache.addEventListener('updateready', function () {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            try {
                window.applicationCache.update();
                window.applicationCache.swapCache();
            } catch (ex) {}
        }
    }, false);
}

//Keyboard shortcuts
document.body.onkeydown=function(e){
    if(e.shiftKey&&e.which===13){newfunc();}
    
};


loaded = true;
