/*


    Copyright (c) Anthony, Graph.tk and its Collaborators 2010
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

Notes: addition/summation and multiplication should be considered an operation that takes 0 or more aguments.
There is no division. 

Subtractional shall be replaced with unary negation.
Divion should be replaced with multiplication by the reciprocal.
    i.e. x/y = x*y^(-1) , or prod{[x,pow{[y,-1]}]}
 - should it?


    */

function format(num, digits) {
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

function u(x) {
    //unit step function
    return (x>=0)?(x?1:0.5):(0);
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
"left(":"(",
"right)":")",
'ge':">=",
'lt':"<",
'le':"<=",
"infty":"∞",
"cdot":"*",
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

//Compile: returns an object with a function of ctx that plots the graph to ctx.
var obj={};
function simplify(e){
	var terms=[];
	for(var i=0;i<e.length;i++){
		if(((typeof e[i]) == "object") && e[i].length==1){
			(__debug(1,0) || alert("this code shouldn't be reached I think"));
			e[i]=e[i][0];
		}
		if(e[i]=="+" || e[i]=="-"){
			
		}
		
	}
	return e;
}
var eqtype={"product":1,"sum":2,"number":3,"constant":4,"variable":5,"discretevector":6,"continuousvector":7,"power":8};
var __debug_parser=0;
function __debug(x){
    if(app.version.length!=11){
        alert("Using debug code in release build: "+x.toString());
    }
    return x;
}
var spaces="                     ";
var level=0;
function p(inp){
    if(typeof inp=="number"){
        return Num(inp);
    }else if(typeof inp=="object"){
        return inp;
    }
//parses brackets recursively and returns a sum of terms.
    
    level++;
    __debug(!__debug_parser,0) || console.log(spaces.substring(0,level)+"p: "+inp);
	var eq=[];
	var e=inp.replace(/\s/g,"");
	e=e.replace(/([a-zA-Z])\(/g,"$1:(");
    
    //---Recursive Parentheses parse
	while((e.indexOf("(")!=-1) && (e.indexOf(")")!=-1)){
        var fail=true;
		e=e.replace(/\([\d\:\-\+\/\*\^a-zA-Z]+\)/g,function(n){
            fail=false;
			var h=random_hash();
			obj[h]=p(n.substring(1,n.length-1));
			return "hash"+h+"hash";
		});
        if(fail){
            throw ("Could not parse parentheses");
            break;
        }
	}
	var terms=[];
	var last=0;
    //---Sum parse
    var term_op="+-";
    var prod_op="*/";
    
    if((e.indexOf("+")!=-1) || (e.indexOf("-")!=-1)){
    __debug(!__debug_parser,0) ||console.log(spaces.substring(0,level)+"+>: "+e);
        terms.type=eqtype.sum;
        for(var i=0;i<e.length;i++){
            if(term_op.indexOf(e[i])!=-1){
                var s;
                if(e[i]=="-"){
                    //Turn subtraction into a unary option.
                    //TODO, this should change the FOLLOWING term
                    s=(("-"+e.substring(last,i)).replace(/(\-\-)+/g,"+").replace(/\+\++/g,"+"));
                }else{
                    s=(e.substring(last,i));
                }
                terms.push(p(s));
                last=i+1;
            }
        }
        terms.push(p(e.substring(last,e.length)));
        
    }else if((e.indexOf("*")!=-1) || (e.indexOf("/")!=-1)){
    __debug(!__debug_parser,0) || console.log(spaces.substring(0,level)+"*>: "+e);
        terms.type=eqtype.product;
        for(var i=0;i<e.length;i++){
            if(prod_op.indexOf(e[i])!=-1){
                var s;
                if(e[i]=="/"){
                    //Turn division into a unary option.
                    //TODO, this should change the FOLLOWING term
                    s=e.substring(last,i);
                }else{
                    s=e.substring(last,i);
                }
                terms.push(p(s));
                last=i+1;
            }
        }
        terms.push(p(e.substring(last,e.length)));
    }else if((e.indexOf("^")!=-1)){
    __debug(!__debug_parser,0) || console.log(spaces.substring(0,level)+"^>: "+e);
        terms.type=eqtype.power;
        var be=e.split("^");
        //^ is an operator that goes from right to left.
        // i.e., 1^2^3 = 1^(2^(3))
        /*if(be.length!=2){
            throw ("^ is a binary operator");
            return;
        }*/
        terms.push(p(be[0]));
        terms.push(p(be[1]));
    }else{
        var parsednumber=NaN;
        if(!isNaN(parsednumber=Number(e))){
            terms.type=eqtype.number;
            terms.push(parsednumber);
        }else if(0){
            terms.type=eqtype.constant;
            terms.push(e);
        }else{
            terms.type=eqtype.variable;
            terms.push(e);
        }
        
    
    }
    terms=terms.replace(/^hash[a-z\d]{20}hash$/,function(e){
        return obj[e.substring(4,24)];
    });
    /*
	for(var i=0;i<terms.length;i++){
		if(/^hash[a-z\d]{20}hash$/.test(terms[i])){
			terms[i]=obj[terms[i].substring(4,24)];
			//terms[i]="e";
		}
	}*/
    __debug(!__debug_parser,0) || console.log(spaces.substring(0,level)+"@>: "+JSON.stringify(terms));
    level--;
	if(terms.length==1 && __debug(0,1)){
		//it's too simple. It could (and most likely is), the argument to a function.
		return terms[0];
	}else{
		return __debug(terms,simplify(terms));
	}
	
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
        throw ("I or it is not a vector!");
    }
}
Array.prototype.dot=function(o){
    if(o.type!=eqtype.discretevector || this.type!=eqtype.discretevector){
        throw ("I or it is not a vector!");
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
        return this.dot(this.conjg()).pow(Num(0.5));
    }else{
        return this.multiply(this.conjg()).pow(Num(0.5));
    }
}
Array.prototype.conjg=function(){
    return this;
    return this.replace(/i/g,p("-i"));
};
Number.prototype.search=function(x){
    return this==x;
};
String.prototype.search=function (x){
    return this==x;
}
Array.prototype.search=function (x){
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
Number.prototype.replace=function(a,b){
    if(this===a){
        return b;
    }
    return this;
};
Array.prototype.replace=function(a,b){
    var cp=[];
    this.forEach(function(i){
        if(typeof i=="string"){
            if(a.test){
                if(a.test(i)){
                    if(typeof b=="function"){
                        cp.push(b(i));
                    }else{
                        cp.push(b.replace(a,b));
                    }
                }else{
                    cp.push(i);
                }
            }else{
                if(typeof a=="string"){
                    cp.push(i.replace(a,b));
                }
            }
        }else{
            cp.push(i.replace(a,b));
        }
    });
    cp.type=this.type;
    return cp;
};
Array.prototype.divide=function(o){
    var product=[this,o];
    product.type=eqtype.product;
    this=product;
    return this;
}
Array.prototype.multiply=function(o){
    if(this.type==eqtype.product){
        var self=this;
        p(o).forEach(function(e){self.push(e)});
        return this;
    }else if(this.type==eqtype.discretevector || this.type==eqtype.continuousvector){
        return self.dot(o);//or cross
    }
    var sum=[this,o];
    var oldtype=this.type;
    this.push(this.splice(0,this.length))
    this[0].type=oldtype;
    this.push(p(o));
    this.type=eqtype.product;
    return this;
};
String.prototype.forEach=function(e){
    e(this);
};
Number.prototype.forEach=function(e){
    e(this);
};
Number.prototype.add=function(o){
    var sum=[p(this),p(o)];
    sum.type=eqtype.sum;
    return sum;
}
Number.prototype.multiply=String.prototype.multiply=function(o){
    var sum=[p(this),p(o)];
    sum.type=eqtype.product;
    return sum;
};

Array.prototype._push=function(o){
    //Adds extras to the operation, whatever it is.
    var oe=p(o);
    oe.type=oe.type || this.type;
    if(oe.type==this.type){
        var self=this;
        oe.forEach(function(e){self.push(e)});
        return this;
    }else{
        throw("Operations do not match: "+this.type+" and "+oe.type);
    }
}
Array.prototype.add=function(o){
    if(this.type==eqtype.sum){
        var self=this;
        p(o).forEach(function(e){self.push(e)});
        return this;
    }
    var sum=[this,o];
    var oldtype=this.type;
    this.push(this.splice(0,this.length))
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
function Num(x){
    return x;
    var ar=[x];
    ar.type=eqtype.number;
    return ar;
}
String.prototype.invert=function(operation){
    if(operation==eqtype.sum){
        return "-"+this;
    }else if(operation==eqtype.sum){
        return Num(1).divide(this);
    }else if(operation===undefined){
        throw ("Operation not specified");
    }
};
Array.prototype.invert=function(operation){
    var inv=[];
    var _commute=false;
    inv.type=this.type || eqtype.sum;
    if(operation==eqtype.sum){
        if(inv.type==eqtype.sum){
            _commute=true;
        }else if(inv.type==eqtype.product){
            _commute-false;
        }
    }
    var first=true;
    this.forEach(function(e){
        if(_commute || first){
            inv.push(e.invert(operation));
            first=false;
        }else{
            inv.push(operation);
        }
    });
    return inv;
};
Number.prototype.invert=function(operation){
    //unary opertation inversion
    if(operation==eqtype.sum){
        return -this;
    }else if(operation==eqtype.product){
        return 1/this;
    }else{
        throw ("Unknown Operation: "+operation);
    }
};
Array.prototype.setType=function(e){
    this.type=e;
    return this;

};

var __debug_iterations=0;
Array.prototype.differentiate=function(times){
    times=times||1;//double derivative etc. (1/2th derivative even)
    if(times<0){
        return this.integrate(-times);
    }
    var itg=[];//itf so it's similar to the integrate function
    itg.type=sum;
    var m;
    if(this.type!=eqtype.sum){
        m=[];
        m.type=eqtype.sum;
        m.add(this);
    }else if(this.type==eqtype.sum){
        m=this;
    }else{
        throw ("Invalid Expression Type: "+this.type);
    }
    m.forEach(function(e){
        m.push(e.integrate(times));
    });
    return m;

}
Array.prototype.integrate=function(times){
    times=times||1;//double integral etc. (1/2th integral even)
    if(times<0){
        return this.differentiate(-times);
    }
    var itg=[];
    itg.type=sum;
    var m;
    if(this.type!=eqtype.sum){
        m=p(0);
        m.type=eqtype.sum;
        m.add(this);
    }else if(this.type==eqtype.sum){
        m=this;
    }else{
        throw ("Invalid Expression Type: "+this.type);
    }
    m.forEach(function(e){
        m.push(e.integrate(times));
    });
    return m;
}
Array.prototype.inverse=function(){
    __debug_iterations++;
    if(this.type==eqtype.constant || this.type==eqtype.number){
        __debug_iterations--;
        return;
    }
    else if(this.type==eqtype.variable){
        //a variable is its own inverse with respect to itself.
        __debug_iterations--;
        return this;
    }
    if(!this.search("x")){throw("No 'x' found!");return;}
    var right=this.replace(/x/g,"y");
    
    var left=[p("x")];
    left.type=right.type;
    if(right.type==eqtype.product || right.type==eqtype.sum){
        for(var i=0;i<right.length;i++){
            if(!right[i].search("y")){
                left._push(right.splice(i,1).setType(right.type).invert(right.type));
                i--;
            }
        }
    }else{
        __debug_iterations--;
        return "right.type is someting else: "+right.type;
    }
    if(right.length==1 && right[0]=="y"){
        __debug_iterations--;
        return left;
    }
    if(__debug_iterations>2){
        throw ("Could not solve. Got as far as "+left.toString()+"="+right.toString());
    }
    window.r=right;
    console.log(left.toString()+"="+right.toString());
    right_i=right.inverse();
    console.log(right_i);
    console.log(left.toString()+"="+right_i.toString());
    return left;
    
}
function clean(n){
    for(var i in latexchars){
        while(i.length>1 && n.indexOf("\\"+i)!=-1){
            n=n.replace("\\"+i,latexchars[i]);
        }
  	}
    return n.replace(/\}\{/g,")/(").replace(/\}/g,")").replace(/\{/g,"(").replace(/\\/g,"");;
}
function p_latex(n){
    return p(clean(n));
}
function compile(n){
    n=clean(n);
	obj={};
	/*
	
	operator precedence:
	 ()
	 ^
	 * /
	 + -
	  
	
	*/
	//parse
	var eq=n.replace("==","[equals][equals]").split("=").map(function(e){return e.replace("[equals][equals]","==");});
	
	if(eq.length>2){
		throw("Invalid. '=' can only be used once per equation.");
		return;
	}
	var lhs,rhs;
	if(eq.length==2){
		lhs=p(eq[0]);
		rhs=p(eq[1]);
	}else{
		lhs=p("y"); //This behaviour should be discouraged implicitly.
		rhs=p(eq[0]);
	}
	//compile
	var ret={"f":function(){throw("Not a function");}};
    
	//if it is a function
	ret.f=eval("("+"function(x){return "+eq[0]+";})");
	ret.plot=eval("(function(ctx){ctx.beginPath();var x=boundleft;ctx.move(x,"+eq[0]+");for(var x=boundleft;x<boundright;x+=(boundright-boundleft)/width){"+"ctx.line(x,"+eq[0]+");}ctx.stroke();})");
	return ret;
	
	
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
    e.appendChild(document.createTextNode(this.toString()));
    return e;

};
Array.prototype.toString=function(braces){
    var s=braces?"(":"";
    var self=this;
    var _first=true;
    this.forEach(function(e){
        if(_first){
            _first=false;
        }else if(self.type==eqtype.sum){
            s+="+";
        }else if(self.type==eqtype.product){
            s+="*";
        }else if(self.type==eqtype.power){
            s+="^";
        }else{
            s+="@";
        }
        s+=e.toString(10);
    });
    if(braces){
        s+=")";
    }
    return (s.replace(/(\-\-)+/g,"+").replace(/\+\++/g,"+").replace(/\-\+/g,"-").replace(/\+\-/g,"-"));
};


if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());


