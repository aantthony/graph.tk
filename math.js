/*


    http://graph.tk/
    
    graph.tk[/at/ ]gmail[ /dot/ ]com
    
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
    
    
    
Todo: use a function object array instead of just an array/object model.
Todo: Improve CAS model
Notes: addition/summation and multiplication should be considered an operation that takes 0 or more aguments.
There is no division. 


Subtractional shall be dreplaced with unary negation.
Divion should be dreplaced with multiplication by the reciprocal.
    i.e. x/y = x*y^(-1) , or prod{[x,pow{[y,-1]}]}
 - should it?



TODO: -frac does not work.
    */
var MessageStrings={
    "failinit":"Could not initalize",
    "protected":"Read-Only variable",
    "nonconstantconstant":"Expression not constant",
    "parentheses":"Could not parse parentheses",
    "functionchain":"Function composition is a binary operator",
    "expchain":"^ is a binary operator.",
    "nonvector":"Vector operation attempted on non-vector",
    "unknownderivative":"The derivative of %s is not known",
    "intfail":"Integration failed",
    "inversefail":"Could not find inverse",
    "lonedoperator":"Differential operator alone",
    "loneioperator":"Integral operator alone",
    "fnnamenotstring":"Invalid function name"
    
};
Number.prototype.format=function(digits) {
    var num=Number(this);
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
    } else if(num!=1){
        if (( log(num)   )%1 == 0) {
            var exponent=log(num);
            var exptext="⁰¹²³⁴⁵⁶⁷⁸⁹";
            return "e"+((abs(exponent)<10)?((exponent<0?"⁻":"")+exptext[abs(exponent)]):"^"+exponent);
        }
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
};


function random_hash(){
    var s="";
    for(var i=0;i<20;i++){
        s+=(10+~~(Math.random()*23)).toString(36)
        //s+=(~~(Math.random()*16)).toString(16);
    }
    return s;
}


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


//Basic math functions -> window (global)

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


//Hyperbolic functions

function cosh(x){
    return 0.5*(exp(x)+exp(-x));
}
function sinh(x){
    return 0.5*(exp(x)-exp(-x));
}
function tanh(x){
    return (exp(x)-exp(-x))/(exp(x)+exp(-x));
}
function sech(x){
    return 1/cosh(x);
}
function cosech(x){
    return 1/sech(x);
}
function coth(x){
    return 1/tanh(x);
}

//Inverse hyperbolic functions
function acosh(x){
    return log(x+sqrt(x*x-1));
}
function asinh(x){
    return log(x+sqrt(x*x+1));
}
function atanh(x){
    return 0.5*log((1+x)/(1-x));
}


function ln_n(n,x){return pow(ln(x),n);}

function sin_n(n,x){return pow(sin(x),n);}
function cos_n(n,x){return pow(cos(x),n);}
function tan_n(n,x){return pow(tan(x),n);}
function cot_n(n,x){return pow(cot(x),n);}
function sec_n(n,x){return pow(sec(x),n);}
function csc_n(n,x){return pow(csc(x),n);}
function log_n(n,x){return pow(log(x),n);}

function cosh_n(n,x){return pow(cosh(x),n);}
function sinh_n(n,x){return pow(cosh(x),n);}
function tanh_n(n,x){return pow(cosh(x),n);}
function coth_n(n,x){return pow(coth(x),n);}
function sech_n(n,x){return pow(sech(x),n);}
function csch_n(n,x){return pow(csch(x),n);}

function logb(b, v) {
    return ln(v) / ln(b);
}

function u(x) {
    //unit step function
    return (x>=0)?(x?1:0.5):(0);
}
function u_d(x){
	//discrete unit step function
    return (x>=0)?1:0;
}
function delta(x){
    if(x==0){
        return Infinity;
    }
    return 0;
}

function signum(x){
    return 2*u(x)-1;
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
function sec(x){return 1 / (cos(x));}
function csc(x){return 1 / (sin(x));}
function cot(x){return 1 / (tan(x));}
var ctg = cot;
var ctn = cot;
var cosec=csc;

//Not so basic math

//Bell numbers
var blln = [1,1,2,5,15,52,203,877,4140,21147,115975,678570,4213597,27644437,190899322,1382958545,10480142147,82864869804,682076806159,5832742205057,51724158235372,474869816156751,4506715738447323];

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

function old_gamma_function(x) {
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

function psi(x) {
    return random();
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
function doublefact(x){
    return pow(2,(x/2-1/4*cos(pi*x)+1/4))*pow(pi,(1/4*cos(pi*x)-1/4))*Gamma(x/2+1);
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



// 'lvl'th derivative of g[ia](x) when x = 'x'

var difflevel = 0; //Used to prevent massive stacks in the recursive djkb()

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












var latexchars={
'gt':">",
"left|":"abs:(",
"right|":")",
"cosh":"cosh",
"sinh":"sinh",
"tanh":"tanh",
"coth":"coth",
"sech":"sech",
"csch":"csch",
"cosech":"cosech",
"sin":"sin:",
"cos":"cos:",
"tan":"tan:",
"times":"*",
"sec":"sec:",
"cosec":"cosec:",
"csc":"csc:",
"cotan":"cotan:",
"cot":"cot:",
"ln":"ln:",
"lg":"log:",
"log":"log:",
"det":"det:",
"dim":"dim:",
"max":"max:",
"min":"min:",
"mod":"mod:",
"lcm":"lcm:",
"gcd":"gcd:",
"gcf":"gcf:",
"hcf":"hcf:",
"lim":"lim:",
":":"",
"left(":"(",
"right)":")",
"left[":"[",
"right]":"]",
'ge':">=",
'lt':"<",
'le':"<=",
"infty":"∞",
"cdot":"*",
"text":"",
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
"pm":"±",
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

var obj={};
//TODO: Maybe discretevector should be removed and assumed that all un .type'ed arrays are a discretevector by default.
//		Yes, but we will keep it for now because it would be helpful in finding bugs where the type is not set.
var eqtype={"product":1,"sum":2,"number":3,"discretevector":6,"continuousvector":7,"power":8,"fn":9,"fraction":10,"derivative":11,"integral":12,"equality":13,"pm":14,"operatorfactor":15,"lessthan":16,"greaterthan":17,"range":18};
var __debug_parser=0;
var __debug_mode=1;
function __debug(x,y){
    if(__debug_mode){
        return x;
    }
    return y;
}
var spaces="                     ";
var level=0;
function p(inp){
    if(typeof inp=="number" || !isNaN(inp)){
        return Number(inp);
    }else if(typeof inp=="object"){
        if(!isNaN(inp)){
            app.ui.console.warn("this is returned somewhere instead of Number(this)");
            return Number(inp);
        }
        return inp;
    }
    if(inp=="" || inp===undefined){
        return 0;
    }
//parses brackets recursively and returns an expression
    
    //level++;
    //if(level>15){throw("too recursive for debugging");return;}
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"p: "+inp);
	var eq=[];
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
    if(e.indexOf("=")!=-1){
        var eq=e.replace("==","[equals][equals]").split("=").map(function(e){return e.replace("[equals][equals]","==");});
        if(eq.length==2){
            return [p(eq[0]),p(eq[1])].setType(eqtype.equality);
        }
        throw("Too many '='s");
        return;
    }else if(e.indexOf("<")!=-1){
		var eq=e.split("<");
        if(eq.length==2){
            return [p(eq[0]),p(eq[1])].setType(eqtype.lessthan);
        }
        throw("Too many '<'s");
        return;
    }else if(e.indexOf(">")!=-1){
		var eq=e.split(">");
        if(eq.length==2){
            return [p(eq[0]),p(eq[1])].setType(eqtype.greaterthan);
        }
        throw("Too many '>'s");
        return;
    }
    //---Recursive Parentheses parse
	while((e.indexOf("(")!=-1) && (e.indexOf(")")!=-1)){
        var fail=true;
		e=e.replace(/\([^\(\)]*\)/g,function(n){
            fail=false;
			var h=random_hash();
			obj[h]=p(n.substring(1,n.length-1));
			return "aaaa"+h+"aaaa";
		});
        if(fail){
            throw (MessageStrings.parentheses);
            break;
        }
	}
	var terms=[];
	var last=0;
    //---Sum parse
    var term_op="+-";
    var prod_op="*/";
    
    if(e.indexOf(",")!=-1){
        //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"f>: "+e);
        terms.type=eqtype.discretevector;
        var be=e.split(",");
        be.forEach(function(zz){
            terms.push(p(zz));
        });
    
    }else if((e.indexOf("+")!=-1) || (e.indexOf("-")!=-1)){
    //__debug(!__debug_parser,0) ||app.ui.console.log(spaces.substring(0,level)+"+>: "+e);
        terms.type=eqtype.sum;
        var nextisinverse=false;
        for(var i=0;i<e.length;i++){
            if(term_op.indexOf(e[i])!=-1){
                var s=e.substring(last,i);
                if(nextisinverse){
                    terms.push(p(s).multiply(-1));
                    nextisinverse=false;
                }else{
                    terms.push(p(s));
                }
                if(e[i]=="-"){
                    nextisinverse=true;
                }
                last=i+1;
            }
        }
        if(nextisinverse){
            terms.push(p(e.substring(last,e.length)).multiply(-1));
        }else{
            terms.push(p(e.substring(last,e.length)));
        }
        
        
    }else if((e.indexOf("*")!=-1) || (e.indexOf("/")!=-1)){
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"*>: "+e);
        terms.type=eqtype.product;
        var denom=[];
        denom.type=eqtype.product;
        var nextisinverse=false;
        //check for d/dx
        for(var i=0;i<e.length;i++){
            if(prod_op.indexOf(e[i])!=-1){
                var s=e.substring(last,i);
                if(nextisinverse){
                    denom.push(p(s));
                    nextisinverse=false;
                }else{
                    terms.push(p(s));
                }
                if(e[i]=="/"){
                    nextisinverse=true;
                }
                last=i+1;
            }
        }
        if(nextisinverse){
            denom.push(p(e.substring(last,e.length)));
        }else{
            terms.push(p(e.substring(last,e.length)));
        }
        if(denom.length){
            terms=[terms,denom];
            terms.type=eqtype.fraction;
        }
    }else if(e.indexOf("!")!=-1){
    
        //TODO: Fix this
        //DONE: This was fixed March 16, 2011
        terms.type=eqtype.product;
        var last=0;
        for(var i=0;i<e.length;i++){
            if(e[i]=="!"){
                var s=e.substring(last,i);
                if(s==""){
                    terms[terms.length-1]=["fact",terms[terms.length-1]].setType(eqtype.fn);
                }else{
                    terms.push(["fact",p(s)].setType(eqtype.fn));
                }
                last=i+1;
            }
        }
        var final=e.substring(last,e.length);
        if(final!=""){
            terms.push(p(final));
        }
     
    }else if(e.indexOf("‼")!=-1){
    
        //TODO: Fix this
        //DONE: This was fixed March 16, 2011
        terms.type=eqtype.product;
        var last=0;
        for(var i=0;i<e.length;i++){
            if(e[i]=="‼"){
                var s=e.substring(last,i);
                if(s==""){
                    terms[terms.length-1]=["doublefact",terms[terms.length-1]].setType(eqtype.fn);
                }else{
                    terms.push(["doublefact",p(s)].setType(eqtype.fn));
                }
                last=i+1;
            }
        }
        var final=e.substring(last,e.length);
        if(final!=""){
            terms.push(p(final));
        }
     
    }else if(e.indexOf(":")!=-1){
     //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"f>: "+e);
        terms.type=eqtype.fn;
        var be=e.split(":");
        if(be.length!=2){  
            
            //alert(e);
            throw (MessageStrings.functionchain);
            //return;
        }
        var dmatch=/^([^\']+)(\'+)$/.exec(be[0]);
        if(dmatch){
            //console.log("found");
            terms.type=eqtype.fn;
            var b=[dmatch[1],be[1]].setType(eqtype.fn);
            for(var count=dmatch[2].length;count--;count>0){
                //console.log("diff");
                b=["diff",b].setType(eqtype.fn);
            }
            terms=b;
            
        }else{
            var match=/^log_([\d\.\+\-e]+)$/.exec(be[0]);
            if(match){
                var fn_=["log",p(be[1])].setType(eqtype.fn);
                terms.type=eqtype.fraction;
                terms.push(fn_);
                terms.push(["log", p(match[1])].setType(eqtype.fn));
            }else{
                var fname=p(be[0]);
                if(fname.type==eqtype.power){
                    var basefn=fname[0].simplify();
                    var power=fname[1].simplify();
                    //if trig
                    if(power<0){
                        //find inverse
                        basefn="a"+basefn;
                        power=-power;
                    }
                    
                    if( 1 || is_it_a_trig_function){
                        terms.type=eqtype.power;
                        terms.push([basefn,p(be[1])].setType(eqtype.fn));
                        terms.push(power);
                    }
                    
                    
                    
                    
                }else if(typeof fname!="string"){
                    terms.type=eqtype.product;
                    terms.push(fname);
                    terms.push(p(be[1]));
                }else{
                    terms.push(fname);
                    terms.push(p(be[1]));
                }
            }
        }
    }else if(e.indexOf("^")!=-1){
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"^>: "+e);
        
        var be=e.split("^");
        //NOTE: for now
        //^ is a BINARY operator that goes from right to left.
        //  1^2^3 = 1^(2^(3))
        if(be.length!=2){
            throw (MessageStrings.expchain);
            return;
        }
        var base=p(be[0]);
        terms.type=eqtype.power;
        terms.push(base);
        terms.push(p(be[1]));
        
       
    }else{
        var parsednumber=NaN;
        if(!isNaN(parsednumber=Number(e))){
            return parsednumber;
        }else if(!/^aaaa[a-z\d]{20}aaaa$/.test(e)){
            var match=/^([\d]+(\.[\d])?)([^\d]+)$/.exec(e);
            if(match){
                alert("old code: "+e);
                terms.type=eqtype.product;
                terms.push(p(match[1]));
                terms.push(match[3]);
            }else{
                var vars=e.split(".");
                if(vars.length>1){
                    terms.type=eqtype.product;
                    vars.forEach(function(v){
                        terms.push(p(v));
                    });
                }else{
                    return e;
                }
            }
        }else{
            terms.type=eqtype.variable;
            terms.push(e);
        }
        
    
    }
    
    terms=terms.dreplace(/^aaaa[a-z\d]{20}aaaa$/,function(e){
        var to_ret=obj[e.substring(4,24)];
        delete obj[e.substring(4,24)];
        return to_ret;
    });
    /*
	for(var i=0;i<terms.length;i++){
		if(/^aaaa[a-z\d]{20}aaaa$/.test(terms[i])){
			terms[i]=obj[terms[i].substring(4,24)];
			//terms[i]="e";
		}
	}*/
    //__debug(!__debug_parser,0) || app.ui.console.log(spaces.substring(0,level)+"@>: "+JSON.stringify(terms));
    level--;
    while(typeof terms == "object" && terms.type==eqtype.variable){
        terms=terms[0];
    }
    if(terms.length==2){
        
        //terms=terms.simplify();
        if(terms.length==2 && terms.type==eqtype.fraction && terms[0].simplify()=="d" && terms[1].simplify()=="dx"){
            return ["diff"].setType(eqtype.operatorfactor);
        }
        /*if(terms.length==2 && terms.type==eqtype.fraction && terms[0]=="d" && terms[1]=="dx"){
            return ["diff"].setType(eqtype.operatorfactor);
        }*/
        if(terms[0].length==1 && terms[0]=="d" && terms[1].length==1 && terms[1]=="dx"){
            return ["diff"].setType(eqtype.operatorfactor);
        }
    }
    //console.log(terms.type+": "+terms.getString());
    if(terms.type==eqtype.product){
        var found=[];
        for(var i=0;i<terms.length;i++){
            if(terms[i].type==eqtype.operatorfactor){
                var operation=terms.splice(i,1)[0][0];
                found.push(operation);
                var subject=terms.splice(i).setType(eqtype.product);
                if(terms.length){
                    return [operation,subject].setType(eqtype.fn).multiply(terms);
                }else{
                    return [operation,subject].setType(eqtype.fn);
                }
            }else if(terms[i]=="∫"){
                var operation=terms.splice(i,1)[0];
                found.push(operation="int");
                var subject=terms.splice(i).setType(eqtype.product);
                if(terms.length){
                    return [operation,subject].setType(eqtype.fn).multiply(terms);
                }else{
                    return [operation,subject].setType(eqtype.fn);
                }
            }
        }
    }
	//while(typeof terms=="object" && terms.length==1){
	//	terms=terms[0];
	//}
    return terms;
	
}

/*

Random codes/gibberish to refer to the mathematics that I don't understand and have no-idea what to call.


[finding the inverse of a function, solving a relation]
  Interoperability of the x's:
    #zD-0 - One x
        * Pop off parts from the right, (pushing to the left) until we have the identity on the right, (and the inverse on  the left), or treat the function as a string of operations.
        * Just go backwards
    #zD-1 - x's of only hyper-[1] (+)
        * Collect terms
        * go to #zd-0
    #zD-2 - x's of only hyper-[1,2] (+ *)
        * Factorise, or expand?. or expand then factorise?
        * Use formula for ax+bx^2+cx^3+dx^4
        * Attempt to solve quintics with
           * guessing
           * A 4th/5th/3rd order Newton's method
        * go to #zd-1
    #zD-3 - x's of only hyper-[1,2,3] (+ * ^)
        * Product log   for x*e^x
        * Product log   for x+e^x
        * Something     for x+x*e^x
        * go to #zd-2
    #zD-4 - x's of only hyper-[1,2,3,4] (+ * ^ ....)  (TODO)
        * run away fast!
        * go to #zd-3


Current status: not even #zD-0  - Jan 3 aanthony

*/





//Vectors:
function Vector(fn){
    if((fn!==undefined) && (typeof fn == "function")){
        var self=function(x){return this;};
        self.type=eqtype.continuousvector;
        self.f=fn;
        return self;
    }else{
        var self=[];
        self.type=eqtype.discretevector;
        for(var i=0;i<arguments.length;i++){
            self.push(p(arguments[i]));
        }
        return self;
    }
    
};

Array.prototype.re=function(){

};
Array.prototype.im=function(){

};

Array.prototype.cross=function(o){
    if(o.type!=eqtype.discretevector || this.type!=eqtype.discretevector){
        throw (MessageStrings.nonvector);
    }
};
Array.prototype.dot=function(o){
    if(o.type!=eqtype.discretevector || this.type!=eqtype.discretevector){
        throw (MessageStrings.nonvector);
    }
    var s=[];
    s.type=eqtype.sum;
    var lowest=min(o.length,this.length);
    
    for(var i=0;i<lowest;i++){
        s.add(this[i].multiply(o[i]));
    }
    return s;
};
Array.prototype.mag=function(){
    if(this.type==eqtype.discretevector){
        return this.dot(this.conjg()).pow((0.5));
    }else{
        return this.multiply(this.conjg()).pow((0.5));
    }
};
Array.prototype.conjg=function(){
    return this;
    return this.dreplace(/i/g,p("-i"));
};
Number.prototype.search=function(x){
    return this==x;
};
String.prototype.search=function (x){
    return this==x;
};

String.prototype.dependence=function (x){
    var self=this.toString();
    if(typeof app.variables[self] =="function"){
        return [self];
    }
    return [];
};

Array.prototype.dependence=function(){
    
    var dep=[];
    if(this.type==eqtype.fn || this.type==eqtype.equality){
        if(this.type==eqtype.fn && !window[this[0]]){
            dep.push(this[0]);
        }
        if(this[1].dependence){
        	var n=this[1].dependence();
        	for(var b=0;b<n.length;b++){
            	if(dep.indexOf(n[b])==-1){
                	dep.push(n[b]);
            	}
        	}
        }
        return dep;
        
    }
    for(var i=0;i<this.length;i++){
        if(this[i].dependence){
        	var n=this[i].dependence();
        	for(var b=0;b<n.length;b++){
            	if(dep.indexOf(n[b])==-1){
                	dep.push(n[b]);
            	}
        	}
        }
    }
    return dep;
};
Array.prototype.search=function(x){
    var found=false;
    for(var i=0;i<this.length;i++){
//        if(this[i].search){
            if(this[i].search(x)){
                return true;
            }
//        }
    }
    return false;
};
String.prototype.dreplace=function(a,b){
    if(a.test){
        if(a.test(this.toString())){
            if(typeof b=="function"){
                return(b(this.toString()));
            }else{
                return b;
            }
        }else{
            return this.toString();
        }
    }else{
        if(a==this.toString()){
            return b;
        }
    }
    return this.toString();
};
Number.prototype.dreplace=function(a,b){
    return Number(this);
};
Array.prototype.dreplace=function(a,b){
    var cp=[];
    cp.type=this.type;
    for(var i=0;i<this.length;i++){
        if(typeof this[i]=="string"){
            
            if(a.test){
                if(a.test(this[i])){
                    if(typeof b=="function"){
                        cp.push(b(this[i]));
                    }else{
                        cp.push(b);
                    }
                }else{
                    cp.push(this[i]);
                }
            }else{
                cp.push((a==this[i].toString())?b:this[i]);
            }
        }else if(typeof this[i]=="object"){
            cp.push(this[i].dreplace(a,b));
        }else{
            //console.log(typeof this[i]);
            cp.push(this[i]);
        }
    
    }
    return cp;
    this.forEach(function(i){
        if(typeof i=="string"){
            if(a.test){
                if(a.test(i)){
                    if(typeof b=="function"){
                        cp.push(b(i));
                    }else{
                        cp.push(b.dreplace(a,b));
                    }
                }else{
                    cp.push(i);
                }
            }else{
                if(typeof a=="string"){
                    cp.push(i.dreplace(a,b));
                }
            }
        }else{
            cp.push(i.dreplace(a,b));
        }
    });
    cp.type=this.type;
    return cp;
};

Number.prototype.divide=function(o){
    var product=[Number(this),p(o)];
    product.type=eqtype.fraction;
    return product;
};
String.prototype.divide=function(o){
    var product=[];
    product.type=eqtype.fraction;
    product.push(p(this.toString()));
    product.push(p(o));
    return product;
};
Array.prototype.divide=function(o){
    if(o===1){
        return this;
    }
    if(this.type==eqtype.fraction){
        this[1].multiply(p(o));
        return this;
    }
    var product=[this,p(o)];
    product.type=eqtype.fraction;
    return product;
};

Array.prototype.power=function(o){
    if(this.type==eqtype.power){
        this[1]=this[1].multiply(p(o));
    }
    return [this,p(o)].setType(eqtype.power);
};
String.prototype.power=function(o){
    return [p(this.toString()),p(o)].setType(eqtype.power);
};
Number.prototype.power=function(o){
    return [Number(this),p(o)].setType(eqtype.power);
};
Array.prototype.multiply=function(o){	
    if(this.type==eqtype.fraction){
        this[0]=this[0].multiply(p(o));
        return this;
    }
    var other=p(o);
	var oe=other.eval();
    if(oe===0){
        return 0;
    }
	else if(oe===1){
        return this;
    }
    if(this.type==eqtype.product && other.type==eqtype.product){
        var self=this;
        other.forEach(function(e){self.push(e)});
        return this;
    }else if(this.type==eqtype.discretevector || this.type==eqtype.continuousvector){
        return self.dot(o);
    }
    var sum=[this,o];
    var oldtype=this.type;
    this.push(this.splice(0,this.length));
    this[0].type=oldtype;
    this.push(p(o));
    this.type=eqtype.product;
    return this;
};
String.prototype.forEach=function(e){
    e(this.toString());
};
Number.prototype.forEach=function(e){
    e(Number(this));
};

String.prototype.add=function(o){
    if(o==0){
        return this.toString();
    }
    if(this.toString()=="0"){
        return p(o);
    }
    return [p(this.toString())].setType(eqtype.sum).add(p(o));
};
Number.prototype.add=function(o){
    var po=p(o);
    if(po.eval()==0){
        return Number(this);
    }
    var sum=[p(Number(this)),po];
    sum.type=eqtype.sum;
    return sum;
};
Number.prototype.eval=function(o){
    return Number(this);
};
String.prototype.eval=function(){
    if(this.toString()==="i"){
        return "i";
    }
    if(!isNaN(this.toString())){
        console.log("NUMBER IN HERE: "+this.toString());
        return Number(this.toString());
    }
    var word=dirty(this.toString());
    
    if(window.app && app.variables[word]){
		if(typeof app.variables[word]!="function"){
			return app.variables[word].eval();
		}else{
			return NaN;
		}
    }
    
    if(window[word]!==undefined && typeof window[word]=="number"){
        return window[word];
    }
    
    
    if(window[word]){
		if(typeof window[word]!="function"){
			//return eval(word);
            return window[word];
		}else{
			return NaN;
		}
    }
    return NaN;
};
Array.prototype.eval=function(){
    if(!this.length){
		if(this.type==eqtype.sum){
			return 0;
		}else if(this.type==eqtype.product){
			return 1;
		}else{
			__debug(__debug(0,1)||app.ui.console.warn("Empty! in .eval(): "+this.type),0);
		}
        
    }
    if(this.canEval()){
        return eval(this.getString(1,1));
    }else{
        return NaN;
    }
};
String.prototype.multiply=function(o){
    if(this.toString=="i"){
        return -1;
    }
    if(o==1){
        return p(this.toString());
    }
    if(o==0){
        return 0;
    }
    var sum=[p(this.toString()),p(o)];
    sum.type=eqtype.product;
    return sum;
};
Number.prototype.multiply=function(o){

    if(this==0){
        if(p(o)==Infinity){
            return undefined;
        }
        return 0;
    }
    if(o==1){
        return Number(this);
    }
    if(o==0){
        return 0;
    }
    var sum=[Number(this),p(o)];
    sum.type=eqtype.product;
    return sum;
};

Array.prototype.add=function(o){
    if(this.type==eqtype.sum && o.type==eqtype.sum){
        var self=this;
        p(o).forEach(function(e){self.push(e)});
        return this;
    }
    if(this.type==eqtype.sum){
        this.push(p(o));
        return this;
    }
    var sum=[this,o];
    var oldtype=this.type;
    this.push(this.splice(0,this.length));
    this[0].type=oldtype;
    this.push(p(o));
    this.type=eqtype.sum;
    return this;
};
Array.prototype.size=function(){
    var _size=0;
    for(var i=0;i<this.length;i++){
        if(typeof this[i]=="string"){
            _size+=this[i].length+6;
        }else if(typeof this[i]=="number"){
            _size+=5;
        }else{
            _size+=this[i].size?4+this[i].size():this[i].length;
        }
    }
    return _size;
};

Array.prototype.setType=function(e){
    this.type=e;
    return this;
};
Number.prototype.differentiate=function(){
    if(this==Infinity || this==-Infinity){
        return undefined;
    }
    return 0;
};
Number.prototype.integrate=function(){
    if(this==0){
        return 0;
    }
    return [this,"x"].setType(eqtype.product);
};
String.prototype.differentiate=function(){
    return Number(this.toString()=="x");
};
String.prototype.integrate=function(){
    if(this.toString()=="x"){
        return [0.5,["x",2].setType(eqtype.power)].setType(eqtype.product);
    }else{
        return [this.toString(),"x"].setType(eqtype.product);
    }
};
Array.prototype.differentiate=function(times){
    times=p(times).eval() ||1;//double derivative etc. (1/2th derivative even)
    if(times<0){
        return this.integrate(-times);
    }
    var itg=[];//itg so it's similar to the integrate function
    itg.type=eqtype.sum;
    
    if(this.canEval && this.canEval()){
        //I am not dependant on an independant variable.
        return 0;
    }
    
    if(this.type==eqtype.sum){
        this.forEach(function(e){
            itg.add(e.differentiate());
        });
    }else if(this.type==eqtype.fn){
        //Chain rule!
        var fnd;
        if(fnd=known_derivatives[this[0]]){
            return [fnd.dreplace(/^x$/,this[1]),this[1].differentiate()].setType(eqtype.product).simplify();
        }else if((fnd=known_partial_derivatives[this[0]]) && this[1].type==eqtype.discretevector){
			var a=this[1][0];
			var b=this[1][1]||0;
			var da=a.differentiate();
			var db=b.differentiate();
			return fnd.dreplace("a",a).dreplace("b",b).dreplace("da",da).dreplace("db",db);
		}else{
            if(window && window.app && window.app.variables && window.app.variables[this[0]] && typeof window.app.variables[this[0]]=="function"){
                return [window.app.variables[this[0]].math.differentiate().dreplace(/^x$/,this[1]),this[1].differentiate()].setType(eqtype.product).simplify();
                //throw("chain rule");
            }
            throw(MessageStrings.unknownderivative.replace("%s",this[0]));
        }
        return;
    }else if(this.type==eqtype.fraction){
        var a=this[0];
        var b=this[1];
        
        return (
        [
            [
                [
                    a.differentiate(),
                    b
                ].setType(eqtype.product),
                [
                    -1,
                    b.differentiate(),
                    a
                ].setType(eqtype.product)
            ].setType(eqtype.sum),
            [
                b,
                b
            ].setType(eqtype.product)
        ].setType(eqtype.fraction).simplify()
        );
        //return a.differentiate().multiply(b).add(a.multiply(-1).multiply(b.differentiate())).divide(b.multiply(b));
        
    }else if(this.type==eqtype.power){
        //y=e^(loga . b)
        //dy/dx = 
    
    
        //The errror comes from no power being outputed.
        var a=this[0];
        var b=this[1];
        //itg.add(p("b*(a^(b-1))*d+f*log(b)*(a^b)").dreplace(/a/g,a).dreplace(/b/g,b).dreplace(/d/g,d).dreplace(/f/g,f));
    
        return [[a.differentiate(),[a,[b,-1].setType(eqtype.sum)].setType(eqtype.power),b].setType(eqtype.product),[["log",a].setType(eqtype.fn),b.differentiate(),[a,b].setType(eqtype.power)].setType(eqtype.product)].setType(eqtype.sum).simplify();
        
    }else if(this.type==eqtype.product){
        if(this.length>1){
            var a=this[0];
            var b=this.slice(1).setType(eqtype.product);
            return [[a,b.differentiate()].setType(eqtype.product),[b,a.differentiate()].setType(eqtype.product)].setType(eqtype.sum).simplify();
        }else if(this.length==1){
            return this[0].differentiate();
        }else{
            app.ui.console.warn("empty product!");
            return 0;
        }
    }else{
        throw ("fail: diff: Expression Type: "+this.type);
        return;
    }
    
    return itg.simplify();

};
String.prototype.expand=function(){
    return this.toString();
};
Number.prototype.expand=function(){
    return this.toString();
};
Array.prototype.expand=function(){
    var self=this.simplify().simplify();
    var expanded=[].setType(eqtype.sum);
    if(self.type==eqtype.sum){
        for(var i=0;i<self.length;i++){
            expanded.push(self[i].expand());
        }
    
    }else if(self.type==eqtype.product){
        for(var i=0;i<self.length;i++){
            self[i]=(self[i].expand());
        }
        //this = (a+b+c+d)(e+f+g+h)(i+j+k+l)(m+n+o+p)...
        /*
                 (ae+af+ag+ah  +be+bf+bg+bh   + ce+cf+cg+ch)(i+j+k+l)(n+n+o+p)
        
        
        */
        var first=self[0];
        var second=self[1];
        if(first.type==eqtype.sum){
            if(second.type==eqtype.sum){
                for(var a=0;a<first.length;a++){
                    for(var b=0;b<second.length;b++){
                        expanded.push(first[a].multiply(second[b]));
                    }
                }
            }else{
                for(var a=0;a<first.length;a++){
                    expanded.push(first[a].multiply(second));
                }
            }
        }else if(first.type==eqtype.fraction || first.type==eqtype.product){
            if(second.type==eqtype.sum){
                for(var b=0;b<second.length;b++){
                    expanded.push(first.multiply(second[b]));
                }
            }else{
                expanded.push(first.multiply(second));
            }
        }else{
            expanded.push(first.multiply(second));
        }
        if(self.length>2){
            
            self.splice(0,2);
            self=self.expand();
            return self.concat(expanded).setType(eqtype.product).expand().simplify();
        }
        
    
    }

    return expanded.simplify();

};
String.prototype.divides=function(o){
    if(!isNaN(o.eval())){
        return true;
    }
    if(o==this.toString()){
        return true;
    }
    return false;

};
Number.prototype.divides=function(o){
    if(!isNaN(o.eval())){
        return true;
    }
    return false;

};
Array.prototype.divides=function(o){
    if(!isNaN(o.eval())){
        return true;
    }
    return false;
};
Array.prototype.integrate=function(times){
    times=times||1;//double integral etc. (1/2th integral even)
    if(times<0){
        return this.differentiate(-times);
    }
    if(n=this.eval()){
        return ["x",n].setType(eqtype.product);
    }
    var itg=[];
    itg.type=eqtype.sum;
    if(this.type==eqtype.sum){
        this.forEach(function(e){
            itg.push(e.integrate(times));
        });
    }else if(this.type==eqtype.power){
        this[0]=this[0].simplify();
        if(this[0]=="x" && !isNaN(n=this[1].eval())){
            var _n_plus_one=this[1].add(1).simplify();
            itg.push([["x",_n_plus_one].setType(eqtype.power),_n_plus_one].setType(eqtype.fraction)); 
        }else if(!isNaN(n=this[0].eval())){
           
            // ∫  e^(log(a) * u) du
            //  = e^(log(a) * u)/u
            var bd=this[1].differentiate().simplify();
            if((1).divides(bd)){
                return [["e",[["log",this[0]].setType(eqtype.fn),this[1]].setType(eqtype.product)].setType(eqtype.power),bd].setType(eqtype.fraction);
            }
        }else{
            throw (MessageStrings.intfail);
        }
    }else if(this.type==eqtype.product){
        var _non_constant=0;
        var self=this.simplify();
        //console.log(self);
        if((_dx=self.indexOf("dx"))!=-1){
            self.splice(_dx,1);
        }
        if(self.length==2 && typeof self[1]=="number"){
            itg.push([self[0].integrate(times)].setType(eqtype.product));
        }else if(this.length==1){
            return this[0].integrate();
        }else{
        
            for(var a=0;a<this.length;a++){
                var u=this[a];
                var du=this[a].differentiate();
                for(var b=0;b<this.length;b++){
                    if(this[b].divides(du)){
                        this[b]=this[b].divide(du).simplify();
                        this[a]="u";
                        
                        if(0 && itworked){
                        
                        }
                    
                    }
            
            
                }
            
            
            }
            
            throw (MessageStrings.intfail);
        
        }
    }else if(this.type==eqtype.fn){
        if(window && window.app && window.app.variables && window.app.variables[this[0]]){
            return window.app.variables[this[0]].math.dreplace("x",this[1]).integrate();
        }
    }else{
        throw ("fail: int: type: "+this.type);
    }
   
    return itg.simplify();
};
String.prototype.inverses=function(){
    return this.toString();
};
String.prototype.factorise=function(){
    return this.toString();
};
Number.prototype.factorise=function(){
    return Number(this);
};

Array.prototype.factorise=function(){
    return this;
    
    //partial fractions (in x)
    
    
    
    var right;
    if(this.type!=eqtype.sum){
        alert("?");
        right=[].setType(eqtype.sum).add(right)
    }else{
        right=this;
    }
//expand THEN factorise
    var _n=[];
    var nr=[];
    nr.type=eqtype.sum;
    var _multi=[];
    for(var i=0;i<right.length;i++){
        var fou_c=0;
        var fou_i;
        for(var b=0;b<_n.length;b++){
            if(_n[b].getString()==right[i].getString()){
                fou_i=b;
                fou_c=1;
                break;
            }else if(right[i].type==eqtype.product && right[i].length==2){
                if(right[i][0]==_n[b]){
                    fou_i=b;
                    fou_c=right[i][1];
                    break;
                }else if(right[i][1]==_n[b]){
                    fou_i=b;
                    fou_c=right[i][0];
                    break;
                }
            }
        }
        if(fou_c!==0){
            _multi[fou_i].add(fou_c);
        }else{
            _multi.push([1].setType(eqtype.sum));
            _n.push(right[i]);
        }
    }
    for(var i=0;i<_n.length;i++){
        if(_multi[i]==1){
            nr.add(_n[i]);
        }else{
            nr.add(_n[i].multiply(_multi[i]));
        }
    }
    return nr;
};
String.prototype.roots=function(){
    if(this.toString()=="x"){
        return [0];
    }
    return [];
};
Number.prototype.roots=function(){return [];};
Array.prototype.roots=function(){
    var rt=[].setType(eqtype.discretevector);
    var self=this.factorise();
    if(self.type==eqtype.product){
        //Null factor law
        
        for(var i=0;i<self.length;i++){
            var n=self[i].roots();
            for(var b=0;b<n.length;b++){
                if(rt.indexOf(n[b])==-1){
                    //This doesn't work when one of the factors is infinity
                    //Now check that none of the other factors are infinity, when
                    // x is equal to n[b]
                    var safe=true;
                    for(var c=0;c<self.length;c++){
                        if(c!=i){
                            var rep=self[i].dreplace("x",n[b]).simplify().eval();
                            //console.log(c);
                            //console.log(this[i].getString());
                            //console.log(rep);
                            if(rep==Infinity || rep==-Infinity){
                                safe=false;
                                break;
                            }
                    
                        }
                    }
                    if(safe){
                        rt.push(n[b]);
                    }
                }
            }
        }
        return rt;
    }
    else if(self.type==eqtype.fraction){
        rt=self[0].roots();
        var ort=self[1].singularities();
        for(var i=0;i<ort.length;i++){
            if(rt.indexOf(ort[i])==-1){
                rt.push(ort[i]);
            }
        }
        return rt;
    }
    var inv=self.inverses();
    if(inv && inv.length){
        inv=[inv];
    }else{
        inv=[];
    }
    for(var i=0;i<inv.length;i++){
        var n=inv[i].dreplace("x",0).simplify();
        if(rt.indexOf(n)==-1){
            rt.push(n);
        }
    }
    return rt;
};
Number.prototype.singularities=function(){return [];};
String.prototype.singularities=function(){return [];return [-Infinity,Infinity];};
Array.prototype.singularities=function(){

// ?? (1/f(x)).roots() instead?
    var ret=[]
    if(this.type==eqtype.fraction){
        var r=this[1].roots();
        for(var b=0;b<r.length;b++){
            if(ret.indexOf(r[b])==-1){
                ret.push(r[b]);
            }
        }
        r=this[0].singularities();
        for(var b=0;b<r.length;b++){
            if(ret.indexOf(r[b])==-1){
                ret.push(r[b]);
            }
        }
        
    }else{
        for(var i=0;i<this.length;i++){
            var r=this[i].singularities();
            for(var b=0;b<r.length;b++){
                if(ret.indexOf(r[b])==-1){
                    ret.push(r[b]);
                }
            }
        }
    
    }
    return ret;
};
//American spelling
Array.prototype.factorize=Array.prototype.factorise;
Array.prototype.inverses=function(){
    if(!isNaN(this.eval())){
        return;
    }
    if(!this.search("x")){
        return;
    }
    var right=[];
    if(this.type==eqtype.fraction){
        right.type=eqtype.product;
        right.push(this[0].dreplace(/^x$/,"y"));
        right.push(p(1).divide(this[1].dreplace(/^x$/,"y")));
    }else{
    
        right=this.simplify().dreplace(/^x$/,"y");
    }
    var left=[p("x")];
    left.type=eqtype.sum;
    var __debug_iterations=0;
    while(__debug_iterations<3){
    __debug_iterations++;
    var got_anywhere=false;
    var last_try=false;
    //console.log("d: "+__debug_iterations);
    while(typeof right=="object" && right.length==1){
    //console.log(1);
        if(right=="y"){
            return left;
        }
        right=right[0];
    }
    if(right=="y"){
        return left;
    }
    
    if(right.type==eqtype.product){
        var moved=false;
        for(var i=0;i<right.length;i++){
            if(!right[i].search("y")){
                moved=true;
                left=left.divide(right.splice(i,1).setType(eqtype.product));
                i--;
                got_anywhere=true;
            }
        }
        if(!moved){
            //add powers
            //right=right.expand();
        
        }
    }else if(right.type==eqtype.sum){
        var moved=false;
        for(var i=0;i<right.length;i++){
            if(!right[i].search("y")){
                moved=true;
                left=left.add(right.splice(i,1).setType(eqtype.sum).multiply(-1));
                i--;
                got_anywhere=true;
            }
        }
        if(!moved){
            //factorise!!!!!
            
            //right=right.factorise();
        }
    }else if(right.type==eqtype.fraction){
        
        
        //l = a/b
        if(right[0].search("y")){
            //a has the x
            //l*b = a
            left=left.multiply(right[1]);
            right=right[0];
            got_anywhere=true;
        }else{
            //l=a/b
            //a/l=b
            left=[right[0],left].setType(eqtype.fraction);
            right=right[1];
            got_anywhere=true;
        }
    
    
    }else if(right.type==eqtype.power){
        //l=a^b
        //l^(1/b)=a
        //l=e^(log(a)*b)
        //log(l)=log(a)*b
        //exp(log(l)/b)=(a)
        
        if(right[0].search("y")){
            //a has the x
            left=p("l^(1/b)").dreplace(/l/g,left).dreplace(/b/g,right[1]);
            
            right=right[0];
            got_anywhere=true;
        }else{
            //b has the x
            left=[["log",left].setType(eqtype.fn), ["log", right[0]].setType(eqtype.fn)  ].setType(eqtype.fraction);
            
            //left=left.divide(p("log(x)").dreplace(/^x$/,right[0]));
            right=right[1];
            got_anywhere=true;
        }
    }else if(right.type==eqtype.fn){
        //l=f(a)
        //f^-1(l) = f^-1(f(a))=a
        left=known_inverses[right[0]].dreplace("x",left);
        //MEOW
        right=right[1];
    }else{
        return "right.type is someting else: "+right.type+": "+right;
    }
    
    if(!got_anywhere){
        last_try=true;
    }
    
    if(last_try){
        return;
    }
    if(__debug_iterations>3){
        throw(MessageStrings.inversefail+": "+left.getString()+"="+right.getString());
        return;
    }
    
    
    }
    return left;
    
};
function clean(n){
    // de-latexify a string.
    n=n.replace(/\\?(sin|cos|tan|sec|cosec|csc|cotan|cot)\^([^\{]|\{[^\}]+\})/g,"$1^$2:");
    n=n.replace(/\\?(sin|cos|tan|sec|cosec|csc|cotan|cot)([^\:\^h])/g,"$1:$2");
    n=n.replace(/\\?(log)_([^\{]|\{[^\}]+\})/g,"$1_$2:");
    for(var i in latexchars){
        if(latexchars.hasOwnProperty(i)){
            while(n.indexOf("\\"+i)!=-1){
                n=n.replace("\\"+i,latexchars[i]);
            }
        }
  	}
    return n.replace(/\*\(\)/g,"*(1)").replace(/\{ \}/g,"{1}").replace(/_\{([^\}\{]+)\}/g,"_$1").replace(/\}\{/g,")/(").replace(/\}/g,"))").replace(/\{/g,"((").replace(/\\/g,"");;
}
function utf8_print(n){
    // de-latexify a string.
    return n.replace(/sqrt/g,"√");
}
function dirty(n){
    //un clean()
    for(var i in latexchars){
        if(latexchars.hasOwnProperty(i)){
            if(latexchars[i].length && latexchars[i]!=" " && n.indexOf(latexchars[i])!=-1){
                n=n.replace(latexchars[i],i);
            }
        }
  	}
    return n.replace(/\*\(\)/g,"*(1)").replace(/\{ \}/g,"{1}").replace(/_\{([^\}\{]+)\}/g,"_$1").replace(/\}\{/g,")/(").replace(/\}/g,"))").replace(/\{/g,"((").replace(/\\/g,"");;
}
function p_latex(n){
    return p(clean(n)).simplify();
}
String.prototype.markup=function(){
    var e=document.createElement("div");
    e.appendChild(document.createTextNode(this.toString()));
    return e;
};
Number.prototype.markup=function(){
    var e=document.createElement("div");
    e.appendChild(document.createTextNode(this.toString()));
    return e;
};
Array.prototype.markup=function(){
    var e=document.createElement("div");
    e.appendChild(document.createTextNode(this.getString()));
    return e;

};
String.prototype.canEval=function(){
    if(this.toString()=="e"){
        return 2;
    }
    if(this.toString()=="π"){
        return 2;
    }
    if(window.app){
        if(app.variables[this.toString()]){
            if(typeof app.variables[this.toString()]!="function"){
                return 8;
            }
        }
    }

    if(window[this.toString()]){
        if(typeof window[this.toString()]!="function"){
            return true;
        }
    }
    return false;
};

Number.prototype.canEval=function(){
    return true;
};
Array.prototype.canEval=function(){
//TODO: null factor law.
//TODO: support for surds.
    var max=true;
    if(this.type==eqtype.power){
        
        var reta=this[0].canEval();
        var retb=this[1].canEval();
        if(reta ==false || retb==false){
            return false;
        }
        if(reta==4 || retb==4){
            return 4;
        }
        if(this[1].eval()==0.5){
            return ["sqrt",this[0]].setType(eqtype.fn).canEval();
        }
        if(reta==2 || retb==2){
            return 2;
        }
        return true;
    }
    if(this.type==eqtype.fn && window[this[0]] && typeof window[this[0]] =="function" ){
        //Check if it7 can be represented as an absolute value.
        if(this[0]=="diff"){
            return 4;
        }else if(this[0]=="int"){
            return 4;
        }
        if(this[0]=="log"){
        
            var de=log(this[1].eval());
            if(~~de==de){
                return true;
            }else{
                max=2;
            }
        }
        if(this[0]=="sqrt" && !(this[1]==pow(~~(sqrt(this[1])),2)  ) ){
            max=2;
        }
        var ret= this[1].canEval();
        if(!ret || ret==4){
            return ret;
        }
        return max;
    }
    if(this.type==eqtype.fn && app.variables[this[0]] && typeof app.variables[this[0]] =="function" ){
        //Check if it7 can be represented as an absolute value.
        
        var ret=this[1].canEval();
        if(!ret || ret==4){
            return ret;
        }
        return 2;
    }
   
    for(var i=0;i<this.length;i++){
        if(typeof this[i] == "number"){
        }else if(this[i].canEval){
            var res;
            if(!(res=this[i].canEval())){
                return false;
            }
            if(res==4){
                return 4;
            }
            if(res==2){
                max=2;
                //return 2;
            }
            if(res==8){
                max=8;
                //return 2;
            }
        }
    }
    return max;
};

String.prototype.simplify=function (){
    return this.toString();
};
Number.prototype.simplify=function (){
    return Number(this);
};

Function.prototype.eval=function(){
	return isNaN;
};
Function.prototype.canEval=function(){
	return 2;
};

Array.prototype.takeDenom=function(){
    var ret=1;
    if(this.type==eqtype.sum){
        //factorise
        
        
        
        
        //
        return 1;
    }if(this.type==eqtype.fn){
        return 1;
    }else if(this.type==eqtype.product){
        for(var i=0;i<this.length;i++){
            if(this[i].takeDenom){
                ret=ret.multiply(this[i].takeDenom());
            }
        }
    }else if(this.type==eqtype.fraction){
        var numer=this[0];
        var denom=this[1];
        this.type=this[0].type;
        this.splice(0);
        for(var n=0;n<numer.length;n++){
            this.push(numer[n]);
        }
        if(!this.length){
            this.push(1)
        }
        ret=ret.multiply(denom);
    }else{
        //throw("Unimplemented takeDenom: "+this.type);
    }
    return ret;
};



Array.prototype.simplify=function (onlyeval,___retry,hard){
    //NOTE: this code may be destructive to the array.
    //It should not be destructive to the array, because sometimes
    //simplifying might not be beneficial for all things.
    
    //For the time being, it shall be considered destructive.
 
	if(this.type==eqtype.equality || this.type==eqtype.lessthan || this.type==eqtype.greaterthan){
		for(var i=0;i<this.length;i++){
			this[i]=this[i].simplify();
		}
        return this;
    }
    
    if(this.length==1){
		return this[0].simplify();
	}
    
    if(hard && this.type==eqtype.fn){
        if(window && window.app && window.app.variables && window.app.variables[this[0]] && typeof window.app.variables[this[0]]=="function"){
            
            return window.app.variables[this[0]].math.dreplace(/^x$/,this[1]).simplify();
        }
    }
    
    if((this.type!=eqtype.discretevector) && this.canEval && this.canEval()===true){
        return this.eval();
    }
	for(var i=0;i<this.length;i++){
		while(i<this.length && ((typeof this[i]) == "object") && this[i].length==1){
			this[i]=this[i][0];
		}
        if(this[i].canEval && this[i].canEval()===true){
            this[i]=this[i].eval();
        }else{
			this[i]=this[i].simplify(true,0,hard);
		}
	}
    if(onlyeval){
		return this;
	}
    if(this.type==eqtype.fraction && this[1]===1){
        return this[0];
    }
    
    if(this.type==eqtype.power){
        if(this[1]===1){
            return this[0];
        }else if(this[1]===0){
            return 1;
        }else if(this[0]===1){
            return 1;
        }
    }
    if(this.type==eqtype.fn){
        this[1]=this[1].simplify();
        if(this[0]=="log" && this[1]=="e"){
            //SHOULD BE IN .canEval
            return 1;
        }
        if(this[0]=="diff"){
            if(this.length!=2){
                throw(MessageStrings.lonedoperator);
            }
            return this[1].simplify().differentiate();
        }
        //How can we do both?
        if(this[0]=="int"){
            if(this.length!=2){
                throw(MessageStrings.loneioperator);
            }
            return this[1].simplify().integrate();
        }
        return this;
    }else if(this.type==eqtype.fraction){
        this[1]=this[1].simplify();
        var denomc=this[1].eval();
        
        if(!isNaN(denomc)){
            if(denomc==1){
                return this[0].simplify();
            }else if(denomc==Infinity){
                return 0;
            }else if(denomc==-Infinity){
                return -0;
            }
            if(denomc!=1){
                this[0]=this[0].multiply(1/denomc);
            }
            return this[0].simplify();
        }
        this[0]=this[0].simplify();
        //if(this[1].eval()===1){
        //    return this[0];
        //}
        if(this[0].takeDenom){
            this[1]=this[1].multiply(this[0].takeDenom()).simplify();
    
        }
        if(this[1].takeDenom){
            this[0]=this[0].multiply(this[1].takeDenom()).simplify();
        }
        if(___retry){
            return this;
        }else{
            return this.simplify(0,1);
        }
    }else if(this.type==eqtype.power){
        this[1]=this[1].simplify();
		//already evaled?
        if(this[1].eval()===1){
            return this[0].simplify();
        }
        this[0]=this[0].simplify();
    }else if(this.type==eqtype.product){
		//This is the line that messes up (d/dx)(1/(x^x))
		for(var i=0;i<this.length;i++){
            
            this[i]=this[i].simplify();
            if(this[i]===0){
                return 0;
            }else if(this[i]===1){
                this.splice(i,1);
                i--;
            }
        }
/*
        var replacements_base=[];
        var replacements_exp=[];
        var to_splice=[];//IN ORDER
        for(var i=0;i<this.length;i++){
            var z;
            //search on first element
            if((z=replacements_base.indexOf(this[i]))!=-1 && z!=i){
                replacements_exp[z]=replacements_exp[z].add(1);
                to_splice.push(i);
            }else if((z=this.indexOf(this[i]))!=i){
                replacements_base[z]=this[z];
                replacements_exp[z]=2;
                to_splice.push(i);
            }else if(this[i].type==eqtype.power){
                if((z=replacements_base.indexOf(this[i][0]))!=-1){
                    replacements_exp[z]=replacements_exp[z].add(this[i][1]);
                    to_splice.push(i);
                }else if((z=this.indexOf(this[i][0]))!=i){
                    if(z!=-1){
                        replacements_base[z]=this[z];
                        replacements_exp[z]=this[i][1].add(this[i][1]);
                        to_splice.push(i);
                    }else{
                        replacements_base[i]=this[i][0];
                        replacements_exp[i]=this[i][1];
                    }
                }else{
                    replacements_base[i]=this[i][0];
                    replacements_exp[i]=this[i][1];
                }
            }
        }
        
        var offset=0;
        //console.log(to_splice);
        
        //console.log(replacements_exp);
        for(var i=0;i<to_splice.length;i++){
            //this[to_splice[i]+offset]=1;
            //this.splice(to_splice[i]+offset,1);
            offset--;
        }
        for(var i=0;i<replacements_base.length;i++){
            if(replacements_base[i]){
            //   this[i]=[replacements_base[i],replacements_exp[i]].setType(eqtype.power);
            }
        }
*/

		
        for(var i=0;i<this.length;i++){
            var _prod=1;
			/*while(i<this.length && (typeof (this[i]=this[i].simplify()) =="number")){
				if(this[i]===1){
                    this.splice(i,1);
                }else if(this[i]===0){
                    return 0;
                    alert("Lost data!!!: "+this.splice(i,1));
                }
			}*/
            while(i<this.length && typeof this[i] =="object" && this[i].type==eqtype.product){
				var _n=this.splice(i,1)[0];
                
                for(var n=0;n<_n.length;n++){
                    this.push(_n[n]);
                }
				//this=this.concat(_n);
            }
            if(i<this.length && typeof this[i] =="object" && this[i].type==eqtype.fraction){
				var _fract=this.splice(i,1)[0];
                ///Make me a fraction
                var numer=this.splice(0).setType(this.type);
                if(!numer.length){
                    numer.push(1);
                }
                _fract[0]=_fract[0].multiply(numer);
                this.type=eqtype.fraction;
                this.push(_fract[0]);
                this.push(_fract[1]);
            }
            if(this.type!=eqtype.product){
				//TODO: Is this the right thing to do?
                return this.simplify();
            }
            
        }
        var _prod=1;
        for(var i=0;i<this.length;i++){
            if(typeof this[i] == "number"){
                _prod*=this[i];
                this.splice(i,1);
                i--;
            }
        }
        if(_prod!==1){
            this.push(_prod);
        }
        else if(_prod===0){
            //Null factor law.
            //Check for singularites
            this.push(0);
            return 0;
        }
        
    }else if(this.type==eqtype.sum){
        var _prod=0;
        for(var i=0;i<this.length;i++){
            this[i]=this[i].simplify();
            while(i<this.length && typeof this[i] == "number"){
                _prod+=this[i];
                this.splice(i,1);
            }
            
        }
        if(_prod!==0){
            this.push(_prod);
        }
        if(!this.length){
            this.push(0);
            return 0;
        }
    }
    
    var z=this;
    while(typeof z=="object" && z.length==1){
        z=z[0];
    }
	return z;
};

String.prototype.getLatex=function(){
    return this.toString();
}
Number.prototype.getLatex=function(){
    return Number(this);
}
Array.prototype.getLatex=function(braces){

    var s=braces?"(":"";
    var self=this;
    var _first=true;
    var endchar="";
    var afterme="";
    var second=true;
    //this.forEach(function(e){
    for(var i=0;i<self.length;i++){
        var e=self[i];
        if(!_first){
            second=false;
        }
        if(_first){
            if(self.type==eqtype.fraction){
                s+="\\frac{";
                endchar="}";
            }
            if(self.type==eqtype.discretevector){
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
            s+="\\cdot ";
        }else if(self.type==eqtype.equality){
            s+="=";
        }else if(self.type==eqtype.power){
            s+="^";
        }else if(self.type==eqtype.fraction){
            s+="}{";
        }else if(self.type==eqtype.fn){
            if(second){
                s+=",";
            }
        }else{
            s+=",";
        }
        if(self.type==eqtype.power){
            if(typeof e == "string"){
                var _s=e.getLatex(0);
                if(_s.length>1){
                    s+="{";
                    s+=_s;
                    s+="}";
                }else{
                    s+=_s;
                }
            }else{
                s+="{";
                s+=e.getLatex(0);
                s+="}";
            }
        }else if(e.type==eqtype.fn || e.type==eqtype.fraction || e.type==eqtype.product){
            s+=e.getLatex(0);
        }else{
            s+=e.getLatex(1);
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
function diff(x){
    return p(x).differentiate();
}
function int(x){
    return p(x).integrate();
}
function text(e){return e.toString()}
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


functions="u_d,sin,cos,tan,sec,cot,csc,cosec,acosh,asinh,atanh,cosh,sinh,tanh,cosech,csch,sech,coth,log,exp,pow,Gamma,sinc,sqrt,W,fact,bellb,Zeta,u,doublefact,signum,asin,acos,atan,arcsin,arccos,arctan,tg,ln,abs,floor,round,ceil,atan2,random,min,max,clear,text,shaw,delta,Γ,ψ,diff,int,ζ".split(",");

window._i=33;
var known_derivatives={
    "sqrt":p("1/(2*sqrt(x))"),
    "log":p("1/x"),
    "ln":p("1/x"),
    "sin":p("cos(x)"),
    "cos":p("-sin(x)"),
    "tan":p("1/(cos(x)*cos(x))"),
    "exp":p("exp(x)"),
    "asinh":p("1/sqrt(1-x^2)"),
    "acosh":p("1/sqrt(x^2-1)"),
    "atanh":p("1/(1-x^2)"),
    "cosh":p("sinh(x)"),
    "sinh":p("cosh(x)"),
    "tanh":p("1/cosh^2(x)"),
    "coth":p("-cosech^2(x)"),
    "floor":p("shaw(x)"),
    "u":p("delta(x)"),
    "asin":p("1/sqrt(1-x^2)"),
    "acos":p("-1/sqrt(1-x^2)"),
    "fact":p("Γ(x+1)*ψ(x+1)"),
    "doublefact":p("0.25*x!!*(2*ψ(x/2+1)+pi*log(2/pi)*sin(pi*x)+log(4))"),
    "Gamma":p("Γ(x)*ψ(x)"),
    "Γ":p("Γ(x)*ψ(x)")
};

var known_partial_derivatives={
	/*
	 0≤a-b: H(a-b)=1
	 x=a-b
	x<0: 
	*/
    "max":p("u_d(a-b)*da+(1-u_d(a-b))*db")
};

var known_inverses={
    "sqrt":p("x^2"),
    "log":p("e^x"),
    "sin":p("asin(x)"),
    "cos":p("acos(x)"),
    "tan":p("atan(x)"),
    "exp":p("log(x)"),
    "floor":p("floor(x+1)"),
    "u":p("(2x-1)^Infinity"),
    "asin":p("sin(x)"),
    "acos":p("cos(x)"),
    "atan":p("tan(x)")
};


//p("(random(x)-0.5)");
var _test_debug_simplifer;
if((_test_debug_simplifer=p("(1/(1*x))*(2*1*1*1*2/3*3*0.5)").simplify().getString())!="2/x"){
    alert("Simplifier improvements required: "+_test_debug_simplifer);
}

//"i" can be changed between one and zero to get the real and imaginary part.
//JSON.stringify and parser for lame browsers
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,dreplacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=dreplacer;if(dreplacer&&typeof dreplacer!=='function'&&(typeof dreplacer!=='object'||typeof dreplacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());