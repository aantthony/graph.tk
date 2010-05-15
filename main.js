

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
//additions for mathquill
//jquery added
//change this to a real file for parralell downloading?


//load jQuery
/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);









//load mathquill

/**
* Usage:
* $(thing).mathquill();
* turns thing into a live editable math thingy.
* AMAZORZ.
*
* Note: turning into a live editable math thingmajiggie works, but
* any LaTeX math in it won't be rendered.
*
*/

jQuery.fn.mathquill = (function($){ //takes in the jQuery function as an argument

//Note: if the following is no longer on line 15, please modify publish.sh accordingly
//$('head').append('<link rel="stylesheet" type="text/css" href="http://laughinghan.github.com/mathquill/mathquill.css">');

var todo = function(){ alert('BLAM!\n\nAHHHHHH!\n\n"Oh god, oh god, I\'ve never seen so much blood!"\n\nYeah, that doesn\'t fully work yet.'); };

/**********************************************************
 * Back-end code: Core abstract classes and architecture.
 *********************************************************/

var $ = jQuery, todo = function(){ alert('BLAM!\n\nAHHHHHH!\n\n"Oh god, oh god, I\'ve never seen so much blood!"\n\nYeah, that doesn\'t fully work yet.'); };

/**
 * MathElement is the core Math DOM tree node prototype.
 * Both MathBlock's and MathCommand's descend from it.
 */
function MathElement(){}
MathElement.prototype = {
  prev: null,
  next: null,
  parent: null,
  firstChild: null,
  lastChild: null,
  eachChild: function(fn)
  {
    for(var child = this.firstChild; child !== null; child = child.next)
      if(fn.call(child) === false)
        break;
    return this;
  },
  reduceChildren: function(fn, initVal)
  {
    this.eachChild(function(){
      initVal = fn.call(this, initVal);
    });
    return initVal;
  },
  keydown: function(e)
  {
    return this.parent.keydown(e);
  },
  keypress: function(e)
  {
    return this.parent.keypress(e);
  }
};

/**
 * Commands and operators, like subscripts, exponents, or fractions.
 * Descendant commands are organized into blocks.
 * May be passed a MathFragment that's being replaced.
 */
function MathCommand(cmd, html_template, replacedBlock)
{
  if(!arguments.length)
    return;

  this.cmd = cmd;
  if(html_template)
    this.html_template = html_template;

  this.jQ = $(this.html_template[0]);
  try{ this.jQ.data('[[mathquill internal data]]', {cmd: this}); }
  catch(e)
  {
    //IE throws an error if you try to add an expando to a text node, which $.fn.data() does,
    //but it's ok because only event handlers (which only have immediate access to the
    //HTML DOM elements and jQuery objects thereof) use $.fn.data() and we can't assign
    //event handlers to text nodes anyway.
    //We just need to catch the error here to so execution of the script isn't halted
  }
  this.initBlocks(replacedBlock);
}
MathCommand.prototype = $.extend(new MathElement, {
  initBlocks: function(replacedBlock)
  {
    //single-block commands
    if(this.html_template.length === 1)
    {
      this.firstChild = this.lastChild = this.jQ.data('[[mathquill internal data]]').block =
        replacedBlock || new MathBlock;
      this.firstChild.parent = this;
      this.firstChild.jQ = this.jQ.prepend(this.firstChild.jQ);
      return;
    }
    //otherwise, the succeeding elements of html_template should be child blocks
    var newBlock, prev, num_blocks = this.html_template.length;
    this.firstChild = newBlock = prev = replacedBlock || new MathBlock;
    newBlock.parent = this;
    newBlock.jQ = $(this.html_template[1]).data('[[mathquill internal data]]', {block: newBlock}).appendTo(this.jQ).prepend(newBlock.jQ);
    newBlock.setEmpty();
    for(var i = 2; i < num_blocks; i += 1)
    {
      newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.prev = prev;
      prev.next = newBlock;
      prev = newBlock;

      newBlock.jQ = $(this.html_template[i]).data('[[mathquill internal data]]', {block: newBlock}).appendTo(this.jQ);
      newBlock.setEmpty();
    }
    this.lastChild = newBlock;
  },
  latex: function()
  {
    return this.cmd + this.reduceChildren(function(initVal){
      return initVal + '{' + this.latex() + '}';
    }, '');
  },
  remove: function()
  {
    if(this.prev)
      this.prev.next = this.next;
    else
      this.parent.firstChild = this.next;

    if(this.next)
      this.next.prev = this.prev;
    else
      this.parent.lastChild = this.prev;

    this.jQ.remove();

    return this;
  },
  //placeholder for context-sensitive spacing.
  respace: $.noop,
  placeCursor: function(cursor)
  {
    cursor.prependTo(this.firstChild);
  },
  isEmpty: function()
  {
    return this.reduceChildren(function(initVal){
      return initVal && this.isEmpty();
    }, true);
  }
});

/**
 * Lightweight command without blocks or children.
 */
function Symbol(cmd, html)
{
  MathCommand.call(this, cmd, [ html ]);
}
Symbol.prototype = $.extend(new MathCommand, {
  initBlocks: $.noop,
  latex: function()
  {
    return this.cmd;
  },
  placeCursor: $.noop,
  isEmpty: function(){ return true; }
});

/**
 * Children and parent of MathCommand's. Basically partitions all the
 * symbols and operators that descend (in the Math DOM tree) from
 * ancestor operators.
 */
function MathBlock(){}
MathBlock.prototype = $.extend(new MathElement, {
  latex: function()
  {
    return this.reduceChildren(function(initVal){
      return initVal + this.latex();
    }, '');
  },
  isEmpty: function()
  {
    return this.firstChild === null && this.lastChild === null;
  },
  setEmpty: function()
  {
    if(this.isEmpty())
    {
      this.jQ.addClass('empty');
      if(this.parent)
        this.jQ.html('&empty;');
    }
    return this;
  },
  removeEmpty:function()
  {
    if(this.jQ.hasClass('empty'))
      this.jQ.html('').removeClass('empty');
    return this;
  }
});

/**
 * An entity outside the Math DOM tree with one-way pointers (so it's only
 * a "view" of part of the tree, not an actual node/entity in the tree)
 * that delimit a list of symbols and operators.
 */
function MathFragment(parent, prev, next)
{
  if(!arguments.length)
    return;

  this.parent = parent;
  this.prev = prev || null; //so you can do 'new MathFragment(block)' without
  this.next = next || null; //ending up with this.prev or this.next === undefined

  this.jQinit(this.reduce(function(initVal){ return this.jQ.add(initVal); }, $()));
}
MathFragment.prototype = {
  remove: MathCommand.prototype.remove,
  jQinit: function(children)
  {
    return this.jQ = children;
  },
  each: function(fn)
  {
    for(var el = (this.prev ? this.prev.next : this.parent.firstChild); el !== this.next; el = el.next)
      if(fn.call(el) === false)
        break;
    return this;
  },
  reduce: function(fn, initVal)
  {
    this.each(function()
    {
      initVal = fn.call(this, initVal);
    });
    return initVal;
  },
  blockify: function()
  {
    var newBlock = new MathBlock;
    if(this.prev)
    {
      newBlock.firstChild = this.prev.next;
      this.prev.next = this.next;
    }
    else
    {
      newBlock.firstChild = this.parent.firstChild;
      this.parent.firstChild = this.next;
    }

    if(this.next)
    {
      newBlock.lastChild = this.next.prev;
      this.next.prev = this.prev;
    }
    else
    {
      newBlock.lastChild = this.parent.lastChild;
      this.parent.lastChild = this.prev;
    }

    newBlock.firstChild.prev = this.prev = null;
    newBlock.lastChild.next = this.next = null;

    this.parent = newBlock;
    this.each(function(){ this.parent = newBlock; });

    newBlock.jQ = this.jQ;

    return newBlock;
  }
};

/********************************************
 * All the symbols, operators and commands.
 *******************************************/

function VanillaSymbol(ch, html)
{
  Symbol.call(this, ch, '<span>'+(html || ch)+'</span>');
}
VanillaSymbol.prototype = Symbol.prototype;

function NonSymbolaSymbol(ch, html) //does not use Symbola font
{
  Symbol.call(this, ch, '<span class="nonSymbola">'+(html || ch)+'</span>');
}
NonSymbolaSymbol.prototype = Symbol.prototype;

function BigSymbol(ch, html)
{
  Symbol.call(this, ch, '<big>'+(html || ch)+'</big>');
}
BigSymbol.prototype = Symbol.prototype;

function Variable(ch, html)
{
  Symbol.call(this, ch, '<var>'+(html || ch)+'</var>');
}
Variable.prototype = Symbol.prototype;

function BinaryOperator(cmd, html)
{
  Symbol.call(this, cmd, '<span class="binary-operator">'+html+'</span>');
}
BinaryOperator.prototype = new Symbol; //so instanceof will work

function PlusMinus(cmd, html)
{
  VanillaSymbol.apply(this, arguments);
}
PlusMinus.prototype = new BinaryOperator; //so instanceof will work
PlusMinus.prototype.respace = function()
{
  if(!this.prev)
    this.jQ[0].className = '';
  else if(this.prev instanceof BinaryOperator && this.next && !(this.next instanceof BinaryOperator))
    this.jQ[0].className = 'unary-operator';
  else
    this.jQ[0].className = 'binary-operator';
  return this;
};

function SupSub(cmd, html, replacedBlock)
{
  MathCommand.call(this, cmd, [ html ], replacedBlock);
  var me = this;
  this.jQ.change(function()
  {
    me.respace();
    if(me.next)
      me.next.respace();
    if(me.prev)
      me.prev.respace();
  });
}
SupSub.prototype = new MathCommand;
SupSub.prototype.latex = function()
{
  var latex = this.firstChild.latex();
  if(latex.length === 1)
    return this.cmd + latex;
  return this.cmd + '{' + latex + '}';
};
SupSub.prototype.respace = function()
{
  if(this.respaced = this.prev instanceof SupSub && this.prev.cmd != this.cmd && !this.prev.respaced)
    this.jQ.css({
      left: -this.prev.jQ.innerWidth(),
      marginRight: 1-Math.min(this.jQ.innerWidth(), this.prev.jQ.innerWidth()) //1px adjustment very important!
    });
  else if(this.cmd === '_' && this.prev && this.prev.cmd === '\\int ')
    this.jQ.css({
      left: '-.1em',
      marginRight: ''
    });
  else
    this.jQ.css({
      left: '',
      marginRight: ''
    });
  return this;
};

function Fraction(replacedBlock)
{
  MathCommand.call(this, '\\frac', undefined, replacedBlock);
  this.jQ.append('<span style="width:0">&nbsp;</span>');
  if($.browser.mozilla && +$.browser.version.slice(0,3) < 1.9) //Firefox 2 and below
    this.jQ.css('display','-moz-groupbox');
}
Fraction.prototype = new MathCommand;
Fraction.prototype.html_template = ['<span class="fraction"></span>', '<span class="numerator"></span>', '<span class="denominator"></span>'];
function LiveFraction(replacedBlock)
{
  Fraction.apply(this, arguments);
}
LiveFraction.prototype = new Fraction;
LiveFraction.prototype.placeCursor = function(cursor)
{
  if(this.firstChild.isEmpty())
  {
    var prev = this.prev;
    while(prev && !(prev instanceof BinaryOperator)) //lookbehind for operator
      prev = prev.prev;
    if(prev !== this.prev)
    {
      var newBlock = new MathFragment(this.parent, prev, this).blockify();
      newBlock.jQ = this.firstChild.removeEmpty().jQ.prepend(newBlock.jQ);
      newBlock.next = this.lastChild;
      newBlock.parent = this;
      this.firstChild = this.lastChild.prev = newBlock;
    }
  }
  cursor.appendTo(this.lastChild);
};

// Parens/Brackets/Braces etc
function Paren(open, close, replacedBlock)
{
  MathCommand.call(this, '\\left'+open,
    ['<span><span class="paren">'+open+'</span><span></span><span class="paren">'+close+'</span></span>'],
    replacedBlock);
  this.end = '\\right'+close;
  this.firstChild.jQ.change(function()
  {
    var block = $(this);
    block.prev().add(block.next()).css('fontSize', block.height()/(+block.css('fontSize').slice(0,-2)*.8+3)+'em');
  });
}
Paren.prototype = $.extend(new MathCommand, {
  initBlocks: function(replacedBlock)
  {
    this.firstChild = this.lastChild = replacedBlock || new MathBlock;
    this.firstChild.parent = this;
    this.firstChild.jQ = this.firstChild.jQ ? this.jQ.children().eq(1).prepend(this.firstChild.jQ) : this.jQ.children().eq(1);
  },
  latex: function()
  {
    return this.cmd + this.firstChild.latex() + this.end;
  }
});
// Closing parens/brackets/braces matching Parens/Brackets/Braces above
function CloseParen(open, close, replacedBlock)
{
  Paren.call(this, open, close, replacedBlock);
}
CloseParen.prototype = new Paren;
CloseParen.prototype.placeCursor = function(cursor)
{
  //if I'm at the end of my parent who is a matching open-paren, and I was not passed
  //  a selection fragment, get rid of me and put cursor after my parent
  if(!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
  {
    cursor.insertAfter(this);
    this.firstChild.setEmpty().jQ.change();
  }
};
function Brace(replacedBlock)
{
  Paren.call(this, '{', '}', replacedBlock);
}
Brace.prototype = new Paren;
Brace.prototype.latex = function()
{
  return '\\left\\{' + this.firstChild.latex() + '\\right\\}';
};
function CloseBrace(replacedBlock)
{
  CloseParen.call(this, '{', '}', replacedBlock);
}
CloseBrace.prototype = new CloseParen;
CloseBrace.prototype.latex = Brace.prototype.latex;
function Pipes(replacedBlock)
{
  Paren.call(this, '|', '|', replacedBlock);
}
Pipes.prototype = new Paren;
Pipes.prototype.placeCursor = function(cursor)
{
  if(!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
    cursor.prependTo(this.firstChild);
};

//only give individual characters their own TextNode, but not <span>'s, inside
//TextBlocks, in order to preserver word-wrapping.
function TextNode(ch)
{
  Symbol.call(this, ch, [ document.createTextNode(ch) ]);
}
TextNode.prototype = Symbol.prototype;
function MagicBlock(){}
MagicBlock.prototype = $.extend(new MathBlock, {
  setEmpty: function()
  {
    if(this.isEmpty())
    {
      var textblock = this.parent;
      setTimeout(function() //defer execution until after completion of this thread
                            //not the wrong way to do things, merely poorly named
      {
        if(textblock.cursor.prev === textblock)
          textblock.cursor.backspace();
        else if(textblock.cursor.next === textblock)
          textblock.cursor.deleteForward();
        //else must be blur, don't remove textblock
      },0);
    };
    return this;
  },
  removeEmpty: function()
  {
    if(this.parent.prev instanceof TextBlock)
    {
      var me = this, textblock = this.parent, prev = textblock.prev.firstChild;
      setTimeout(function() //defer
      {
        prev.eachChild(function(){
          this.parent = me;
          this.jQ.insertBefore(me.firstChild.jQ);
        });
        prev.lastChild.next = me.firstChild;
        me.firstChild.prev = prev.lastChild;
        me.firstChild = prev.firstChild;
        textblock.prev.remove();
        if(textblock.cursor.next)
          textblock.cursor.insertBefore(textblock.cursor.next);
        else
          textblock.cursor.appendTo(me);
        me.jQ.change();
      },0);
    }
    else if(this.parent.next instanceof TextBlock)
      if(this.parent.cursor.next)
        this.parent.next.firstChild.removeEmpty();
      else
        this.parent.cursor.prependTo(this.parent.next.firstChild);

    return this;
  }
});
function TextBlock(replacedBlock)
{
  MathCommand.call(this, '\\text', undefined, new MagicBlock);
  if(replacedBlock instanceof MathBlock)
  {
    this.replacedText = replacedBlock.jQ.text();
    replacedBlock.jQ.remove();
  }
  else
    this.replacedText = replacedBlock;
}
TextBlock.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="text"></span>'],
  placeCursor: function(cursor)
  {
    this.cursor = cursor.prependTo(this.firstChild);
    if(this.replacedText)
      for(var i = 0; i < this.replacedText.length; i += 1)
        this.write(this.replacedText.charAt(i));
  },
  write: function(ch)
  {
    this.cursor.insertNew(new TextNode(ch)).show();
  },
  keydown: function(e)
  {
    //backspace and delete and ends of block don't unwrap
    if(!this.isEmpty() &&
        ((e.which === 8 && !this.cursor.prev && !this.cursor.selection) ||
          (e.which === 46 && !this.cursor.next)))
      return false;
    return this.parent.keydown(e);
  },
  keypress: function(e)
  {
    var ch = String.fromCharCode(e.which);
    if(ch === '$')
      if(this.isEmpty())
        this.cursor.insertAfter(this).backspace().insertNew(new VanillaSymbol('\\$','$')).show();
      else if(!this.cursor.next)
        this.cursor.insertAfter(this);
      else if(!this.cursor.prev)
        this.cursor.insertBefore(this);
      else //split apart
      {
        var next = new TextBlock(new MathFragment(this.firstChild, this.cursor.prev).blockify());
        next.firstChild.removeEmpty = function(){ return this; };
        this.cursor.insertAfter(this).insertNew(next).insertBefore(next);
        delete next.firstChild.removeEmpty;
      }
    else
      this.write(ch);
    return false;
  }
});

// input box to type a variety of LaTeX commands beginning with a backslash
function LatexCommandInput(replacedBlock, replacedFragment)
{
  MathCommand.call(this, '\\');
  this.firstChild.setEmpty = function()
  {
    if(this.isEmpty())
    {
      this.jQ.addClass('empty');
      if(this.parent)
        this.jQ.html('<span>&nbsp;</span>');
    }
    return this;
  };
  if(replacedBlock)
  {
    replacedBlock.jQ.detach();
    this.replacedBlock = replacedBlock;
    this.replacedFragment = replacedFragment;
    this.isEmpty = function(){ return false; };
  }
}
LatexCommandInput.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="latex-command-input"></span>'],
  placeCursor: function(cursor)
  {
    this.cursor = cursor.prependTo(this.firstChild);
    if(this.replacedFragment)
      this.jQ = this.jQ.add(this.replacedFragment.jQ.addClass('blur').insertAfter(this.jQ));
  },
  latex: function()
  {
    return '\\' + this.firstChild.latex() + ' ';
  },
  keydown: function(e)
  {
    if(e.which === 9 || e.which === 13) //tab or enter
    {
      this.renderCommand();
      return false;
    }
    return this.parent.keydown(e);
  },
  keypress: function(e)
  {
    var char = String.fromCharCode(e.which);
    if(char.match(/[a-z]/i))
    {
      this.cursor.insertNew(new VanillaSymbol(char)).show();
      return false;
    }
    this.renderCommand();
    if(char === ' ' || (char === '\\' && this.firstChild.isEmpty()))
      return false;
    return this.parent.keypress(e);
  },
  renderCommand: function()
  {
    this.jQ = this.jQ.first();
    this.remove();
    if(this.prev)
      this.cursor.insertAfter(this.prev);
    else
      this.cursor.prependTo(this.parent);
    this.cursor.insertNew(this.firstChild.isEmpty() ?
      new VanillaSymbol('\\\\','\\') : createLatexCommand(this.firstChild.latex(), this.replacedBlock));
  }
});

function SquareRoot(replacedBlock)
{
  MathCommand.call(this, '\\sqrt', undefined, replacedBlock);
  this.firstChild.jQ.change(function()
  {
    var block = $(this), height = block.height();
    block.css({
      borderTopWidth: height/30+1 // NOTE: Formula will need to change if our font isn't Symbola
    }).prev().css({
      fontSize: height/+block.css('fontSize').slice(0,-2)+'em'
    });
  });
}
SquareRoot.prototype = new MathCommand;
SquareRoot.prototype.html_template = ['<span><span class="sqrt-prefix">&radic;</span></span>','<span class="sqrt-stem"></span>'];

function NonItalicizedFunction(fn)
{
  Symbol.call(this, '\\'+fn+' ', '<span class="non-italicized-function">'+fn+'</span>');
}
NonItalicizedFunction.prototype = Symbol.prototype;

var SingleCharacterCommands = {
  //Symbols:
  ' ': function(){ return new VanillaSymbol('\\,', '&nbsp;'); },
  "'": function(){ return new VanillaSymbol("'", '&prime;'); },
  'f': function(){ return new Symbol('f', '<var class="florin">&fnof;</var>'); },
  '@': function(){ return new NonSymbolaSymbol('@'); },
  '&': function(){ return new NonSymbolaSymbol('\\&', '&'); },
  '%': function(){ return new NonSymbolaSymbol('\\%', '%'); },
  '*': function(){ return new BinaryOperator('\\cdot ', '&middot;'); },
    //semantically should be &sdot;, but &middot; looks better in both Symbola and Times New Roman
  '=': function(){ return new BinaryOperator('=', '='); },
  '<': function(){ return new BinaryOperator('<', '&lt;'); },
  '>': function(){ return new BinaryOperator('>', '&gt;'); },
  '+': function(){ return new PlusMinus('+'); },
  '-': function(){ return new PlusMinus('-', '&minus;'); },
  //Commands and Operators:
  '^': function(replacedBlock){ return new SupSub('^', '<sup></sup>', replacedBlock); },
  '_': function(replacedBlock){ return new SupSub('_', '<sub></sub>', replacedBlock); },
  '/': function(replacedBlock){ return new LiveFraction(replacedBlock); },
  '(': function(replacedBlock){ return new Paren('(', ')', replacedBlock); },
  '[': function(replacedBlock){ return new Paren('[', ']', replacedBlock); },
  '{': function(replacedBlock){ return new Brace(replacedBlock); },
  ')': function(replacedBlock){ return new CloseParen('(', ')', replacedBlock); },
  ']': function(replacedBlock){ return new CloseParen('[', ']', replacedBlock); },
  '}': function(replacedBlock){ return new CloseBrace(replacedBlock); },
  '|': function(replacedBlock){ return new Pipes(replacedBlock); },
  '$': function(replacedBlock){ return new TextBlock(replacedBlock); },
  '\\': function(replacedBlock, replacedFragment){
    return new LatexCommandInput(replacedBlock, replacedFragment);
  }
};
function createLatexCommand(latex, replacedBlock)
{
  if(latex.match(/^(a|arc)?(sin|cos|tan)h?$/))
    return new NonItalicizedFunction(latex);

  switch(latex)
  {
  //"real" commands
  case 'sqrt':
    return new SquareRoot(replacedBlock);
  case 'frac':
    return new Fraction(replacedBlock);
  case 'text':
    return new TextBlock(replacedBlock);

  //non-italicized functions
  case 'ln':
  case 'lg':
  case 'log':
  case 'span':
  case 'proj':
  case 'det':
  case 'dim':
  case 'min':
  case 'max':
  case 'mod':
  case 'lcm':
  case 'gcd':
  case 'lim':
    return new NonItalicizedFunction(latex);

  /*** Symbols and Special Characters ***/

  //the following are all greek to me, but this helped a lot: http://www.ams.org/STIX/ion/stixsig03.html

  //lowercase greek letter variables
  case 'alpha':
  case 'beta':
  case 'gamma':
  case 'delta':
  case 'zeta':
  case 'eta':
  case 'theta':
  case 'iota':
  case 'kappa':
  case 'mu':
  case 'nu':
  case 'xi':
  case 'omicron':
  case 'rho':
  case 'sigma':
  case 'tau':
  case 'upsilon':
  case 'chi':
  case 'psi':
  case 'omega':
    return new Variable('\\'+latex+' ','&'+latex+';');

  //why can't anybody FUCKING agree on these
  case 'phi': //W3C or Unicode?
    return new Variable('\\phi ','&#981;');
  case 'phiv': //Elsevier and 9573-13
  case 'varphi': //AMS and LaTeX
    return new Variable('\\varphi ','&phi;');
  case 'epsilon': //W3C or Unicode?
    return new Variable('\\epsilon ','&#1013;');
  case 'epsiv': //Elsevier and 9573-13
  case 'varepsilon': //AMS and LaTeX
    return new Variable('\\varepsilon ','&epsilon;');
  case 'sigmaf': //W3C/Unicode
  case 'sigmav': //Elsevier
  case 'varsigma': //LaTeX
    return new Variable('\\varsigma ','&sigmaf;');

  //these aren't even mentioned in the HTML character entity references
  case 'gammad': //Elsevier
  case 'Gammad': //9573-13 -- WTF, right? I dunno if this was a typo in the reference (see above)
  case 'digamma': //LaTeX
    return new Variable('\\digamma ','&#989;');
  case 'kappav': //Elsevier
  case 'varkappa': //AMS and LaTeX
    return new Variable('\\varkappa ','&#1008;');
  case 'piv': //Elsevier and 9573-13
  case 'varpi': //AMS and LaTeX
    return new Variable('\\varpi ','&#982;');
  case 'rhov': //Elsevier and 9573-13
  case 'varrho': //AMS and LaTeX
    return new Variable('\\varrho ','&#1009;');
  case 'thetav': //Elsevier and 9573-13
  case 'vartheta': //AMS and LaTeX
    return new Variable('\\vartheta ','&#977;');

  //greek constants, look best in un-italicised Times New Roman
  case 'pi':
  case 'lambda':
    return new NonSymbolaSymbol('\\'+latex+' ','&'+latex+';');

  //uppercase greek letters
  case 'Gamma':
  case 'Delta':
  case 'Theta':
  case 'Lambda':
  case 'Xi':
  case 'Pi':
  case 'Sigma':
  case 'Upsilon':
  case 'Phi':
  case 'Psi':
  case 'Omega':

  //other symbols with the same LaTeX command and HTML character entity reference
  case 'perp':
  case 'nabla':
  case 'forall':
    return new VanillaSymbol('\\'+latex+' ','&'+latex+';');

  //sum, product, coproduct, integral
  case 'sum':
  case 'summation':
    return new BigSymbol('\\sum ','&sum;');
  case 'prod':
  case 'product':
    return new BigSymbol('\\prod ','&prod;');
  case 'coprod':
  case 'coproduct':
    return new BigSymbol('\\coprod ','&#8720;');
  case 'int':
  case 'integral':
    return new BigSymbol('\\int ','&int;');

  //the canonical sets of numbers
  case 'N':
  case 'naturals':
  case 'Naturals':
    return new VanillaSymbol('\\mathbb{N}','&#8469;');
  case 'P':
  case 'primes':
  case 'Primes':
  case 'projective':
  case 'Projective':
  case 'probability':
  case 'Probability':
    return new VanillaSymbol('\\mathbb{P}','&#8473;');
  case 'Z':
  case 'integers':
  case 'Integers':
    return new VanillaSymbol('\\mathbb{Z}','&#8484;');
  case 'Q':
  case 'rationals':
  case 'Rationals':
    return new VanillaSymbol('\\mathbb{Q}','&#8474;');
  case 'R':
  case 'reals':
  case 'Reals':
    return new VanillaSymbol('\\mathbb{R}','&#8477;');
  case 'C':
  case 'complex':
  case 'Complex':
  case 'complexes':
  case 'Complexes':
  case 'complexplane':
  case 'Complexplane':
  case 'ComplexPlane':
    return new VanillaSymbol('\\mathbb{C}','&#8450;');
  case 'H':
  case 'Hamiltonian':
  case 'quaternions':
  case 'Quaternions':
    return new VanillaSymbol('\\mathbb{H}','&#8461;');

  //spacing
  case 'quad':
  case 'emsp':
    return new VanillaSymbol('\\quad ','&nbsp;&nbsp;&nbsp;&nbsp;');
  case 'qquad':
    return new VanillaSymbol('\\qquad ','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  /* spacing special characters, gonna have to implement this in LatexCommandInput.prototype.keypress somehow
  case ',':
    return new VanillaSymbol('\\, ','&nbsp;');
  case':':
    return new VanillaSymbol('\\: ','&nbsp;&nbsp;');
  case ';':
    return new VanillaSymbol('\\; ','&nbsp;&nbsp;&nbsp;');
  case '!':
    return new Symbol('\\! ','<span style="margin-right:-.2em"></span>');
  */

  //various symbols
  case 'AA':
  case 'Angstrom':
  case 'angstrom':
    return new VanillaSymbol('\\text{\\AA}','&#8491;');
  case 'ring':
  case 'circ':
  case 'circle':
    return new VanillaSymbol('\\circ ','&#8728;');
  case 'bull':
  case 'bullet':
    return new VanillaSymbol('\\bullet ','&bull;');
  case 'setminus':
  case 'smallsetminus':
    return new VanillaSymbol('\\setminus ','&#8726;');
  case 'not':
    //return new Symbol('\\not ','<span class="not">/</span>');
  case 'neg':
    return new VanillaSymbol('\\neg ','&not;');
  case 'dots':
  case 'ellip':
  case 'hellip':
  case 'ellipsis':
  case 'hellipsis':
    return new VanillaSymbol('\\dots ','&hellip;');
  case 'converges':
  case 'darr':
  case 'dnarr':
  case 'dnarrow':
  case 'downarrow':
    return new VanillaSymbol('\\downarrow ','&darr;');
  case 'dArr':
  case 'dnArr':
  case 'dnArrow':
  case 'Downarrow':
    return new VanillaSymbol('\\Downarrow ','&dArr;');
  case 'diverges':
  case 'uarr':
  case 'uparrow':
    return new VanillaSymbol('\\uparrow ','&uarr;');
  case 'uArr':
  case 'Uparrow':
    return new VanillaSymbol('\\Uparrow ','&uArr;');
  case 'to':
    return new BinaryOperator('\\to ','&rarr;');
  case 'rarr':
  case 'rightarrow':
    return new VanillaSymbol('\\rightarrow ','&rarr;');
  case 'implies':
    return new BinaryOperator('\\Rightarrow ','&rArr;');
  case 'rArr':
  case 'Rightarrow':
    return new VanillaSymbol('\\Rightarrow ','&rArr;');
  case 'gets':
    return new BinaryOperator('\\gets ','&larr;');
  case 'larr':
  case 'leftarrow':
    return new VanillaSymbol('\\leftarrow ','&larr;');
  case 'impliedby':
    return new BinaryOperator('\\Leftarrow ','&lArr;');
  case 'lArr':
  case 'Leftarrow':
    return new VanillaSymbol('\\Leftarrow ','&lArr;');
  case 'harr':
  case 'lrarr':
  case 'leftrightarrow':
    return new VanillaSymbol('\\leftrightarrow ','&harr;');
  case 'iff':
    return new BinaryOperator('\\Leftrightarrow ','&hArr;');
  case 'hArr':
  case 'lrArr':
  case '\Leftrightarrow':
    return new VanillaSymbol('\\Leftrightarrow ','&hArr;');
  case 'Re':
  case 'Real':
  case 'real':
    return new VanillaSymbol('\\Re ','&real;');
  case 'Im':
  case 'imag':
  case 'image':
  case 'imagin':
  case 'imaginary':
  case 'Imaginary':
    return new VanillaSymbol('\\Im ','&image;');
  case 'part':
  case 'partial':
    return new VanillaSymbol('\\partial ','&part;');
  case 'inf':
  case 'infin':
  case 'infty':
  case 'infinity':
    return new VanillaSymbol('\\infty ','&infin;');
  case 'alef':
  case 'alefsym':
  case 'aleph':
  case 'alephsym':
    return new VanillaSymbol('\\aleph ','&alefsym;');
  case 'xist': //LOL
  case 'xists':
  case 'exist':
  case 'exists':
    return new VanillaSymbol('\\exists ','&exist;');
  case 'and':
  case 'land':
  case 'wedge':
    return new VanillaSymbol('\\wedge ','&and;');
  case 'or':
  case 'lor':
  case 'vee':
    return new VanillaSymbol('\\vee ','&or;');
  case 'o':
  case 'O':
  case 'empty':
  case 'emptyset':
  case 'oslash':
  case 'Oslash':
  case 'nothing':
  case 'varnothing':
    return new BinaryOperator('\\varnothing ','&empty;');
  case 'cup':
  case 'union':
    return new VanillaSymbol('\\cup ','&cup;');
  case 'cap':
  case 'intersect':
  case 'intersection':
    return new VanillaSymbol('\\cap ','&cap;');
  case 'deg':
  case 'degree':
    return new VanillaSymbol('^\\circ ','&deg;');
  case 'ang':
  case 'angle':
    return new VanillaSymbol('\\angle ','&ang;');
  case 'prime':
    return new VanillaSymbol('\'','&prime;');
  case 'sdot':
  case 'cdot':
    return new VanillaSymbol('\\cdot ', '&sdot;');

  //Binary Operators
  case 'notin':
  case 'sim':
  case 'equiv':
  case 'times':
  case 'oplus':
  case 'otimes':
    return new BinaryOperator('\\'+latex+' ','&'+latex+';');
  case 'pm':
  case 'plusmn':
  case 'plusminus':
    return new PlusMinus('\\pm ','&plusmn;');
  case 'mp':
  case 'mnplus':
  case 'minusplus':
    return new PlusMinus('\\mp ','&#8723;');
  case 'div':
  case 'divide':
  case 'divides':
    return new BinaryOperator('\\div ','&divide;');
  case 'ne':
  case 'neq':
    return new BinaryOperator('\\'+latex+' ','&ne;');
  case 'ast':
  case 'star':
  case 'loast':
  case 'lowast':
    return new BinaryOperator('\\ast ','&lowast;');
  //case 'there4': // a special exception for this one, perhaps?
  case 'therefor':
  case 'therefore':
    return new BinaryOperator('\\therefore ','&there4;');
  case 'cuz': // l33t
  case 'because':
    return new BinaryOperator('\\because ','&#8757;');
  case 'prop':
  case 'propto':
    return new BinaryOperator('\\propto ','&prop;');
  case 'asymp':
  case 'approx':
    return new BinaryOperator('\\approx ','&asymp;');
  case 'lt':
    return new BinaryOperator('<','&lt;');
  case 'gt':
    return new BinaryOperator('<','&gt;');
  case 'le':
  case 'leq':
    return new BinaryOperator('\\'+latex+' ','&le;');
  case 'ge':
  case 'geq':
    return new BinaryOperator('\\'+latex+' ','&ge;');
  case 'in':
  case 'isin':
    return new BinaryOperator('\\in ','&isin;');
  case 'ni':
  case 'contains':
    return new BinaryOperator('\\ni ','&ni;');
  case 'notni':
  case 'niton':
  case 'notcontains':
  case 'doesnotcontain':
    return new BinaryOperator('\\not\\ni ','&#8716;');
  case 'sub':
  case 'subset':
    return new BinaryOperator('\\subset ','&sub;');
  case 'nsub':
  case 'notsub':
  case 'nsubset':
  case 'notsubset':
    return new BinaryOperator('\\not\\subset ','&#8836;');
  case 'sup':
  case 'supset':
  case 'superset':
    return new BinaryOperator('\\supset ','&sup;');
  case 'nsup':
  case 'notsup':
  case 'nsupset':
  case 'notsupset':
  case 'nsuperset':
  case 'notsuperset':
    return new BinaryOperator('\\not\\supset ','&#8837;');
  case 'sube':
  case 'subeq':
  case 'subsete':
  case 'subseteq':
    return new BinaryOperator('\\subseteq ','&sube;');
  case 'nsube':
  case 'nsubeq':
  case 'notsube':
  case 'notsubeq':
  case 'nsubsete':
  case 'nsubseteq':
  case 'notsubsete':
  case 'notsubseteq':
    return new BinaryOperator('\\not\\subseteq ','&#8840;');
  case 'supe':
  case 'supeq':
  case 'supsete':
  case 'supseteq':
    return new BinaryOperator('\\supseteq ','&supe;');
  case 'nsupe':
  case 'nsupeq':
  case 'notsupe':
  case 'notsupeq':
  case 'nsupsete':
  case 'nsupseteq':
  case 'notsupsete':
  case 'notsupseteq':
  case 'nsupersete':
  case 'nsuperseteq':
  case 'notsupersete':
  case 'notsuperseteq':
    return new BinaryOperator('\\not\\supseteq ','&#8841;');
  default:
    return new TextBlock(latex);
  }
}

/**********************************************************************
 * Front-end code: Event-handling, HTML DOM manipulation (via jQuery)
 *********************************************************************/

//A fake cursor in the fake textbox that the math is rendered in.
function Cursor(block)
{
  //API for the blinking cursor
  var intervalId;
  this.show = function()
  {
    if(intervalId)
      clearInterval(intervalId);
    this.jQ.removeClass('blink');
    var cursor = this;
    intervalId = setInterval(function(){
      cursor.jQ.toggleClass('blink');
    }, 500);
    return this;
  };
  this.hide = function()
  {
    if(intervalId)
      clearInterval(intervalId);
    intervalId = undefined;
    this.jQ.addClass('blink');
    return this;
  };

  this.jQ = $('<span class="cursor"></span>');
  if(block)
    this.appendTo(block);
}
Cursor.prototype = {
  prev: null,
  next: null,
  parent: null,
  setParentEmpty: function()
  {
    if(this.parent)
      this.parent.setEmpty().jQ.removeClass('hasCursor').change();
    return this;
  },
  insertBefore: function(el)
  {
    this.setParentEmpty();
    this.next = el;
    this.prev = el.prev;
    this.parent = el.parent;
    this.parent.jQ.addClass('hasCursor');
    this.jQ.insertBefore(el.jQ.first());
    return this;
  },
  insertAfter: function(el)
  {
    this.setParentEmpty();
    this.prev = el;
    this.next = el.next
    this.parent = el.parent;
    this.parent.jQ.addClass('hasCursor');
    this.jQ.insertAfter(el.jQ.last());
    return this;
  },
  prependTo: function(el)
  {
    this.setParentEmpty();
    this.next = el.firstChild;
    this.prev = null;
    this.parent = el;
    this.parent.removeEmpty().jQ.addClass('hasCursor');
    this.jQ.prependTo(el.jQ);
    return this;
  },
  appendTo: function(el)
  {
    this.setParentEmpty();
    this.prev = el.lastChild;
    this.next = null;
    this.parent = el;
    this.parent.removeEmpty().jQ.addClass('hasCursor');
    this.jQ.appendTo(el.jQ);
    return this;
  },
  moveLeft: function()
  {
    if(this.selection)
      this.insertBefore(this.selection.prev ? this.selection.prev.next : this.parent.firstChild).clearSelection();
    else
      if(this.prev)
        if(this.prev.lastChild)
          this.appendTo(this.prev.lastChild)
        else
          this.hopLeft();
      else //we're at the beginning of a block
        if(this.parent.prev)
          this.appendTo(this.parent.prev);
        else if(this.parent.parent)
          this.insertBefore(this.parent.parent);
    //otherwise we're at the beginning of the root, so do nothing.
    return this.show().jQ.change();
  },
  moveRight: function()
  {
    if(this.selection)
      this.insertAfter(this.selection.next ? this.selection.next.prev : this.parent.lastChild).clearSelection();
    else
      if(this.next)
        if(this.next.firstChild)
          this.prependTo(this.next.firstChild)
        else
          this.hopRight();
      else //we're at the end of a block
        if(this.parent.next)
          this.prependTo(this.parent.next);
        else if(this.parent.parent)
          this.insertAfter(this.parent.parent);
    //otherwise we're at the end of the root, so do nothing.
    return this.show().jQ.change();
  },
  hopLeft: function()
  {
    this.jQ.insertBefore(this.prev.jQ.first());
    this.next = this.prev;
    this.prev = this.prev.prev;
    return this;
  },
  hopRight: function()
  {
    this.jQ.insertAfter(this.next.jQ.last());
    this.prev = this.next;
    this.next = this.next.next;
    return this;
  },
  write: function(ch)
  {
    if(this.selection)
    {
      this.prev = this.selection.prev;
      this.next = this.selection.next;
    }

    var cmd;
    if(ch.match(/[a-eg-z,]/i)) //exclude f because want florin in SingleCharacterCommands
      cmd = new Variable(ch);
    else if(cmd = SingleCharacterCommands[ch])
      if(this.selection)
        cmd = cmd(this.selection.blockify(), this.selection);
      else
        cmd = cmd();
    else
      cmd = new VanillaSymbol(ch);

    if(this.selection)
    {
      if(cmd instanceof Symbol)
        this.selection.remove();
      delete this.selection;
    }

    return this.insertNew(cmd);
  },
  insertNew: function(cmd)
  {
    cmd.parent = this.parent;
    cmd.next = this.next;
    cmd.prev = this.prev;
    if(this.prev)
      this.prev.next = cmd;
    else
      this.parent.firstChild = cmd;
    if(this.next)
      this.next.prev = cmd;
    else
      this.parent.lastChild = cmd;
    cmd.jQ.insertBefore(this.jQ);

    //adjust context-sensitive spacing
    cmd.respace();
    if(this.next)
      this.next.respace();
    if(this.prev)
      this.prev.respace();

    this.prev = cmd;

    cmd.placeCursor(this);

    this.jQ.change();

    return this;
  },
  unwrapParent: function()
  {
    var gramp = this.parent.parent, greatgramp = gramp.parent, cursor = this, prev = gramp.prev;
    gramp.eachChild(function()
    {
      if(this.isEmpty())
        return;

      this.eachChild(function()
      {
        this.parent = greatgramp;
        this.jQ.insertBefore(gramp.jQ);
      });
      this.firstChild.prev = prev;
      if(prev)
        prev.next = this.firstChild;
      else
        this.firstChild.parent.firstChild = this.firstChild;

      prev = this.lastChild;
    });
    prev.next = gramp.next;
    if(prev.next)
      prev.next.prev = prev;
    else
      greatgramp.lastChild = prev;

    if(!this.prev)
      if(this.next)
        this.prev = this.next.prev;
      else
        while(!this.prev)
          if(this.parent = this.parent.prev)
            this.prev = this.parent.lastChild;
          else
          {
            this.prev = gramp.prev;
            break;
          }
    if(this.prev)
      this.insertAfter(this.prev);
    else
      this.insertBefore(greatgramp.firstChild);

    gramp.jQ.remove();

    if(gramp.prev)
      gramp.prev.respace();
    if(gramp.next)
      gramp.next.respace();
  },
  backspace: function()
  {
    if(this.deleteSelection());
    else if(this.prev)
      if(this.prev.isEmpty())
        this.prev = this.prev.remove().prev;
      else
        this.selectLeft();
    else if(this.parent.parent)
      if(this.parent.parent.isEmpty())
        return this.insertAfter(this.parent.parent).backspace();
      else
        this.unwrapParent();

    if(this.prev)
      this.prev.respace();
    if(this.next)
      this.next.respace();
    this.jQ.change();

    return this;
  },
  deleteForward: function()
  {
    if(this.deleteSelection());
    else if(this.next)
      if(this.next.isEmpty())
        this.next = this.next.remove().next;
      else
        this.selectRight();
    else if(this.parent.parent)
      if(this.parent.parent.isEmpty())
        return this.insertBefore(this.parent.parent).deleteForward();
      else
        this.unwrapParent();

    if(this.prev)
      this.prev.respace();
    if(this.next)
      this.next.respace();
    this.jQ.change();

    return this;
  },
  selectLeft: function()
  {
    if(this.selection)
      if(this.selection.prev === this.prev) //if cursor is at left edge of selection,
      {
        if(this.prev) //then extend left if possible
        {
          this.hopLeft(); //we want to insertBefore(prev.jQ) before we do prependTo so this.jQ will be outside selection.jQ
          this.next.jQ.prependTo(this.selection.jQ);
          this.selection.prev = this.prev;
        }
        else if(this.parent.parent) //else level up if possible
          this.insertBefore(this.parent.parent).selection.levelUp();
      }
      else //else cursor is at right edge of selection, retract left
      {
        this.prev.jQ.insertAfter(this.selection.jQ);
        this.hopLeft();
        this.selection.next = this.next;
        if(this.selection.prev === this.prev)
          this.deleteSelection();
      }
    else
      if(this.prev)
        this.hopLeft().hide().selection = new Selection(this.parent, this.prev, this.next.next);
      else //end of a block
        if(this.parent.parent)
          this.insertBefore(this.parent.parent).hide().selection = new Selection(this.parent, this.prev, this.next.next);
  },
  selectRight: function()
  {
    if(this.selection)
      if(this.selection.next === this.next) //if cursor is at right edge of selection,
      {
        if(this.next) //then extend right if possible
        {
          this.hopRight();
          this.prev.jQ.appendTo(this.selection.jQ);
          this.selection.next = this.next;
        }
        else if(this.parent.parent) //else level up if possible
          this.insertAfter(this.parent.parent).selection.levelUp();
      }
      else //else cursor is at left edge of selection, retract right
      {
        this.next.jQ.insertBefore(this.selection.jQ);
        this.hopRight();
        this.selection.prev = this.prev;
        if(this.selection.next === this.next)
          this.deleteSelection();
      }
    else
      if(this.next)
        this.hopRight().hide().selection = new Selection(this.parent, this.prev.prev, this.next);
      else //end of a block
        if(this.parent.parent)
          this.insertAfter(this.parent.parent).hide().selection = new Selection(this.parent, this.prev.prev, this.next);
  },
  clearSelection: function()
  {
    if(this.show().selection)
    {
      this.selection.clear();
      delete this.selection;
    }
    return this;
  },
  deleteSelection: function()
  {
    if(this.show().selection)
    {
      this.jQ.insertBefore(this.selection.jQ);
      this.prev = this.selection.prev;
      this.next = this.selection.next;
      this.selection.remove();
      delete this.selection;
      return true;
    }
    else
      return false;
  }
}

function Selection(parent, prev, next)
{
  MathFragment.apply(this, arguments);
}
Selection.prototype = $.extend(new MathFragment, {
  jQinit: function(children)
  {
    return this.jQ = children.wrapAll('<span class="selection"></span>').parent();
      //wrapAll clones, so can't do .wrapAll(this.jQ = $(...));
  },
  levelUp: function()
  {
    this.jQ.children().unwrap();
    this.jQinit(this.parent.parent.jQ);

    this.prev = this.parent.parent.prev;
    this.next = this.parent.parent.next;
    this.parent = this.parent.parent.parent;

    return this;
  },
  clear: function()
  {
    this.jQ.replaceWith(this.jQ.children());
    return this;
  },
  blockify: function()
  {
    var selectedJQ = this.jQ.children();
    this.jQ.replaceWith(selectedJQ);
    this.jQ = selectedJQ;
    return MathFragment.prototype.blockify.call(this);
  }
});

function RootMathBlock(){}
RootMathBlock.prototype = $.extend(new MathBlock, {
  latex: function()
  {
    return MathBlock.prototype.latex.call(this).replace(/(\\[a-z]+) (?![a-z])/ig,'$1');
  },
  renderLatex: function(latex)
  {
    latex = latex.match(/\\[a-z]+|[^\s]/ig);
    this.jQ.empty();
    this.firstChild = this.lastChild = null;
    this.cursor.appendTo(this);
    if(!latex)
      return;
    (function recurse(cursor)
    {
      while(latex.length)
      {
        var token = latex.shift(); //pop first item
        if(!token)
          return false;
        if(token === '}')
        {
          if(cursor.parent.parent)
            cursor.insertAfter(cursor.parent.parent);
          return;
        }
        var cmd;
        if(/^\\[a-z]+$/.test(token))
        {
          cmd = createLatexCommand(token.slice(1));
          cursor.insertNew(cmd);
        }
        else
        {
          cursor.write(token);
          cmd = cursor.prev || cursor.parent.parent;
        }
        cmd.eachChild(function()
        {
          cursor.appendTo(this);
          var token = latex.shift();
          if(!token)
            return false;
          if(token === '{')
            recurse(cursor);
          else
            cursor.write(token);
        });
        cursor.insertAfter(cmd);
      }
    }(this.cursor));
    this.cursor.hide();
    this.jQ.removeClass('hasCursor');
  },
  skipKeypress: false,
  keydown: function(e)
  {
    e.ctrlKey = e.ctrlKey || e.metaKey;
    switch(e.which)
    {
    case 8: //backspace
      if(e.ctrlKey)
        while(this.cursor.prev)
          this.cursor.backspace();
      else
        this.cursor.backspace();
      return false;
    case 27: //esc does something weird in keypress, may as well be the same as tab
             //  until we figure out what to do with it
    case 9: //tab
      if(e.ctrlKey)
        return true;
      var parent = this.cursor.parent, gramp = parent.parent;
      if(e.shiftKey) //shift+Tab = go one block left if it exists, else escape left.
      {
        if(!gramp) //cursor is in the root, continue default
          return this.skipKeypress = true;
        else if(parent.prev) //go one block left
          this.cursor.appendTo(parent.prev);
        else //get out of the block
          this.cursor.insertBefore(gramp);
      }
      else //plain Tab = go one block right if it exists, else escape right.
      {
        if(!gramp) //cursor is in the root, continue default
          return this.skipKeypress = true;
        else if(parent.next) //go one block right
          this.cursor.prependTo(parent.next);
        else //get out of the block
          this.cursor.insertAfter(gramp);
      }
      this.cursor.clearSelection();
      return false;
    case 13: //enter
      return this.skipKeypress = true;
    case 35: //end
      if(e.shiftKey)
        while(this.cursor.next || (e.ctrlKey && this.cursor.parent.parent))
          this.cursor.selectRight();
      else //move to the end of the root block or the current block.
        this.cursor.clearSelection().appendTo(e.ctrlKey ? this : this.cursor.parent);
      return false;
    case 36: //home
      if(e.shiftKey)
        while(this.cursor.prev || (e.ctrlKey && this.cursor.parent.parent))
          this.cursor.selectLeft();
      else //move to the start of the root block or the current block.
        this.cursor.clearSelection().prependTo(e.ctrlKey ? this : this.cursor.parent);
      return false;
    case 37: //left
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        this.cursor.selectLeft();
      else
        this.cursor.moveLeft();
      return false;
    case 38: //up
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        if(this.cursor.prev)
          while(this.cursor.prev)
            this.cursor.selectLeft();
        else
          this.cursor.selectLeft();
      else if(this.cursor.parent.prev)
        this.cursor.clearSelection().appendTo(this.cursor.parent.prev);
      else if(this.cursor.prev)
        this.cursor.clearSelection().prependTo(this.cursor.parent);
      else if(this.cursor.parent.parent)
        this.cursor.clearSelection().insertBefore(this.cursor.parent.parent);
      return false;
    case 39: //right
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        this.cursor.selectRight();
      else
        this.cursor.moveRight();
      return false;
    case 40: //down
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        if(this.cursor.next)
          while(this.cursor.next)
            this.cursor.selectRight();
        else
          this.cursor.selectRight();
      else if(this.cursor.parent.next)
        this.cursor.clearSelection().prependTo(this.cursor.parent.next);
      else if(this.cursor.next)
        this.cursor.clearSelection().appendTo(this.cursor.parent);
      else if(this.cursor.parent.parent)
        this.cursor.clearSelection().insertAfter(this.cursor.parent.parent);
      return false;
    case 46: //delete
      if(e.ctrlKey)
        while(this.cursor.next)
          this.cursor.deleteForward();
      else
        this.cursor.deleteForward();
      return false;
    default:
      return true;
    }
  },
  keypress: function(e)
  {
    if(this.skipKeypress)
    {
      this.skipKeypress = false;
      return true;
    }
    this.cursor.write(String.fromCharCode(e.which)).show();
    return false;
  }
});

function RootMathCommand(cursor)
{
  MathCommand.call(this, '$', undefined, new RootMathBlock);
  this.firstChild.cursor = cursor;
  this.firstChild.keypress = function(e)
  {
    if(this.skipKeypress)
    {
      this.skipKeypress = false;
      return true;
    }
    var ch = String.fromCharCode(e.which);
    if(ch === '$')
    {
      if(this.isEmpty())
        this.cursor.insertAfter(this.parent).backspace().insertNew(new VanillaSymbol('\\$','$')).show();
      else if(!this.cursor.next)
        this.cursor.insertAfter(this.parent);
      else if(!this.cursor.prev)
        this.cursor.insertBefore(this.parent);
      else
        this.cursor.write(ch).show();
      return false;
    }
    this.cursor.write(ch).show();
    return false;
  };
}
RootMathCommand.prototype = new MathCommand;
RootMathCommand.prototype.html_template = ['<span></span>'];

function RootTextBlock(){}
RootTextBlock.prototype = $.extend(new MathBlock, {
  renderLatex: $.noop,
  skipKeypress: false,
  keydown: RootMathBlock.prototype.keydown,
  keypress: function(e)
  {
    if(this.skipKeypress)
    {
      this.skipKeypress = false;
      return true;
    }
    var ch = String.fromCharCode(e.which);
    if(ch === '$')
      this.cursor.insertNew(new RootMathCommand(this.cursor)).show();
    else
      this.cursor.insertNew(new TextNode(ch)).show();
    return false;
  }
});

//The actual, publicly exposed method of jQuery.prototype, available
//(and meant to be called) on jQuery-wrapped HTML DOM elements.
function mathquill()
{
  if(arguments[0] === 'latex')
  {
    if(arguments.length > 1)
    {
      var latex = arguments[1];
      return this.each(function()
      {
        var mathObj = $(this).data('[[mathquill internal data]]');
        if(mathObj && mathObj.block && mathObj.block.renderLatex)
          mathObj.block.renderLatex(latex);
      });
    }
    var mathObj = this.data('[[mathquill internal data]]');
    if(mathObj && mathObj.block)
      return mathObj.block.latex();
    return;
  }

  if(arguments[0] === 'revert')
    return this.each(function()
    {
      var mathObj = $(this).data('[[mathquill internal data]]');
      if(mathObj && mathObj.revert)
        mathObj.revert();
    });

  var textbox = arguments[0] === 'textbox', editable = textbox || arguments[0] === 'editable';
  this.each(function()
  {
    var jQ = $(this), children = jQ.wrapInner('<span>').children().detach(), root = new (textbox?RootTextBlock:RootMathBlock);
    root.jQ = jQ.addClass('mathquill-rendered-math').data('[[mathquill internal data]]', {
      block: root,
      revert: function()
      {
        children.appendTo(jQ.empty().unbind('.mathquill')
          .removeClass('mathquill-rendered-math mathquill-editable mathquill-textbox'))
        .children().unwrap();
      }
    });

    var cursor = root.cursor = new Cursor(root);

    root.renderLatex(children.text());

    if(!editable)
      return;

    root.jQ.addClass(textbox?'mathquill-textbox':'mathquill-editable').attr('tabindex', 0);

    var lastKeydnEvt; //see Wiki page "Keyboard Events"
    root.jQ.bind('focus.mathquill',function()
    {
      if(cursor.parent)
      {
        if(cursor.parent.isEmpty())
          cursor.jQ.appendTo(cursor.parent.removeEmpty().jQ).change();
      }
      else
        cursor.appendTo(root);
      cursor.parent.jQ.addClass('hasCursor');
      if(cursor.selection)
        cursor.selection.jQ.removeClass('blur');
      else
        cursor.show();
    }
    ).bind('blur.mathquill',function(e)
    {
      cursor.setParentEmpty().hide();
      if(cursor.selection)
        cursor.selection.jQ.addClass('blur');
    }
    ).bind('click.mathquill',function(e)
    {
      var clicked = $(e.target);
      if(clicked.hasClass('empty'))
      {
        cursor.clearSelection().prependTo(clicked.data('[[mathquill internal data]]').block).jQ.change();
        return false;
      }
      var cmd = clicked.data('[[mathquill internal data]]');
      //all clickables not MathCommands are either LatexBlocks or like sqrt radicals or parens,
      //both of whose immediate parents are LatexCommands
      if(!cmd && (clicked = clicked.parent()) && !(cmd = clicked.data('[[mathquill internal data]]')))
          return;
      cursor.clearSelection();
      if((e.pageX - clicked.offset().left)*2 < clicked.outerWidth())
      {
        if(cmd.cmd)
          cursor.insertBefore(cmd.cmd);
        else
          cursor.prependTo(cmd.block);
        var prevPrevDist, prevDist, dist = e.pageX - cursor.jQ.offset().left;
        do
        {
          cursor.moveRight();
          prevPrevDist = prevDist;
          prevDist = dist;
          dist = Math.abs(e.pageX - cursor.jQ.offset().left);
        }
        while(dist <= prevDist && dist != prevPrevDist);
        if(dist != prevPrevDist)
          cursor.moveLeft();
      }
      else
      {
        if(cmd.cmd)
          cursor.insertAfter(cmd.cmd);
        else
          cursor.appendTo(cmd.block);
        var prevPrevDist, prevDist, dist = cursor.jQ.offset().left - e.pageX;
        do
        {
          cursor.moveLeft();
          prevPrevDist = prevDist;
          prevDist = dist;
          dist = Math.abs(cursor.jQ.offset().left - e.pageX);
        }
        while(dist <= prevDist && dist != prevPrevDist);
        if(dist != prevPrevDist)
          cursor.moveRight();
      }
      return false;
    }
    ).bind('keydown.mathquill',function(e) //see Wiki page "Keyboard Events"
    {
      lastKeydnEvt = e;
      e.happened = true;
      return e.returnValue = cursor.parent.keydown(e);
    }
    ).bind('keypress.mathquill',function(e)
    {
      //on auto-repeated mkey events, keypress may get triggered but not keydown
      //  (see Wiki page "Keyboard Events")
      if(lastKeydnEvt.happened)
        lastKeydnEvt.happened = false;
      else
        lastKeydnEvt.returnValue = cursor.parent.keydown(lastKeydnEvt);
      //only call keypress if keydown returned true
      return lastKeydnEvt.returnValue && (e.ctrlKey || e.metaKey || e.which < 32 || cursor.parent.keypress(e));
    }).blur();
  });

  return this;
};

//on document ready, transmogrify all <tag class="mathquill-editable"></tag> and
//  <tag class="mathquill-embedded-latex"></tag> elements to mathquill elements.
$(function(){
    //Anthony: this code runs mathquill over my starting code.
  //$('.mathquill-embedded-latex').mathquill();
  //$('.mathquill-editable').mathquill('editable');
  //$('.mathquill-textbox').mathquill('textbox');
});

return mathquill;
}(jQuery));







function getstr(obj) {
    return $(obj).mathquill("latex").replace(/}{/g, ",").replace(/{/g, "(").replace(/}/g, ")").replace(/\\/g, "");
}

function frac(x, y) {
    return x / y;
}

var showp = 0;
var loaded = false;
var ctx;
var iphone = /iPhone/.test(window.navigator.userAgent);
var c = 299792458;
var G = 6.67300e-11;
var m_e = 5.9742e24;
var m_m = 7.36e22;
var m_s = 1.98892e30;
var settings = {
    "special": true
};
var r_e = 6378100;
var h = 6.626068e-34;
var difflevel = 0;
var phi = (1 + Math.sqrt(5)) / 2;
var epsilon_0 = 8.85418782e-12;
var ready = false;
var g = [];
var E = function (x, y, dx, dy) {
    return g[0](x);
};
var fofy = 0;
var xint = false;
var drag = false;
var boundleft = -10;
var boundright = 10;
var boundtop = 10;
var boundbottom = -10;

function _ga_track_event(n) {
    if (window.pageTracker) {
        setTimeout(function () {
            pageTracker._trackEvent("Graph", n)
        }, 20)
    }
};

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
    dotprod = "∙";
}
function safeeval(z) {
    var naughty = "eval,document,window,location,cookie,alert,comfirm,prompt,this,parent,child,xml,xmlhttp,clip,draw,getfunction,get2dfunction,extrafunc,calcnextframe,nextframe,canvas".split(",");
    for (var nau_g = 0; nau_g < naughty.length; nau_g++) {
        if (z.indexOf(naughty[nau_g]) != -1) {
            throw ("Unsafe Code: " + naughty[nau_g])
        }
    }
    return eval(z);
}
var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var tg = Math.tan;
var exp = Math.exp;
var log = Math.log;
var ln = Math.log;

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
var e = Math.E;
var pi = Math.PI;

function sinc(x) {
    if (x === 0) {
        return 1;
    }
    return sin(pi * x) / (pi * x);
}
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

function sec(x) {
    return 1 / (cos(x));
}
function csc(x) {
    return 1 / (sin(x));
}
function cosec(x) {
    return 1 / (sin(x));
}
function cot(x) {
    return 1 / (tan(x));
}
var ctg = cot;
var ctn = cot;
var randfuncs = "x^2~f'(x)-1~2e^-x~2x+3~{λ:λ=3}~e^(-λ*x)~(0.5,0.5)~∑[1...∞,sin(nx)/n]~m:H_2SO_4~|x^2-4|+2~1/x~x^-2~x!~lnx~∑[1,infinity,(x^n)/n!]~sinx~e^x:[−2,2]~tan(x)~(x+2)(x-3)^2~diff(0,2,2x)~(x-2)^2~∑[1,∞,sin((2n−1)x)/(2n−1)]~~∏[1,5,(x-n)]~∑[0,5,n]~x^x~gamma(x)~(x!)/(3!-x)~x%3~(x>3)?2x:-3~fact(x)~phi/x~(x>=0)?m_e*G/(r_e+100000x)^2:undefined~g[0]'(2x)~g[0](x)+1~sqrt(x)".split("~");
randfuncs = "x^2~f'(x)-1~2e^(-x)~2x+3~e^(-\lambda*x)~(0.5,0.5)~∑[1...∞,sin(nx)/n]~m:H_2SO_4~|x^2-4|+2~1/x~x^-2~x!~lnx~∑[1,infinity,(x^n)/n!]~sinx~e^x:[−2,2]~tan(x)~(x+2)(x-3)^2~diff(0,2,2x)~(x-2)^2~∑[1,∞,sin((2n−1)x)/(2n−1)]~~∏[1,5,(x-n)]~∑[0,5,n]~x^x~\Gamma(x)~(x!)/(3!-x)~x%3~(x>3)?2x:-3~fact(x)~phi/x~(x>=0)?m_e*G/(r_e+100000x)^2:undefined~g[0]'(2x)~g[0](x)+1~sqrt(x)".split("~");

var ranfagidn = 0;

function randfunc() {
    return randfuncs[(ranfagidn++) % randfuncs.length];
}
function pt(vx, vy) {
    if (vy === undefined) {
        return vx;
    }
    return {
        "x": vx,
        "y": vy
    };
}
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
var difg = [djkb];
var blln = [1, 1, 2, 5, 15, 52, 203, 877, 4140, 21147, 115975, 678570, 4213597, 27644437, 190899322, 1382958545, 10480142147, 82864869804, 682076806159, 5832742205057, 51724158235372, 474869816156751, 4506715738447323];

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
var log2pi = 1.8378770664093453;

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
if (window.location.hash != "") {
    window.shouldload = false;
    if (window.location.hash[2] == "=") {
        window.jsonfunc = window.location.hash.substring(3);
    } else {
        window.jsondata = unescape(window.location.hash.substring(6));
    }
}
var all = document.getElementById("all");
all.innerHTML = "<img style=\"display:none\" src=\"grabbing.gif\" height=\"16\" width=\"16\"><canvas id=\"canvas\" width=\"800\" height=\"600\"><div style=\"margin:16px;font-family:sans-serif\"><h1>Error</h1>Your internet browser is way too old for this!. <a href=\"about\">About this page.</a><br />Download google chrome, firefox or safari<br><br>Choose one of these browsers, or find another one.<br><br><a href=\"http://www.google.com/chrome/\"><img id=\"i_chrome\" alt=\"Google Chrome\"></a>&nbsp;<a href=\"http://www.google.com/chrome/\">Get Google Chrome</a><br><a href=\"http://www.mozilla.com/firefox\"><img id=\"i_firefox\" alt=\"Firefox\"></a>&nbsp;<a href=\"http://www.mozilla.com/firefox\">Get Firefox</a><br><a href=\"http://www.apple.com/safari\"><img id=\"i_safari\" alt=\"Safari\"></a>&nbsp;<a href=\"http://www.apple.com/safari\">Get Safari</a><br><a href=\"http://www.opera.com/download/\"><img align=\"middle\" id=\"i_opera\" alt=\"Opera\"></a>&nbsp;<a href=\"http://www.opera.com/download/\">Get Opera</a><br></div></canvas><div id=\"ptd\" style=\"position:fixed;z-Index:80000;color:black;opacity:0.6;left:8px;bottom:8px;border:none;background:white;-webkit-transition:opacity 0.5s ease-in-out;-moz-transition:opacity 0.5s ease-in-out;-o-transition:opacity 0.5s ease-in-out;transition: opacity 0.5s ease-in-out;font:10pt 'Menlo','Andale Mono','Consolas','DejaVu Sans Mono',Droid Sans Mono','Lucida Console','Monaco','monofur',monospace\">(0,0)</div><div id=\"con\" style=\"display:none\" class=\"overlay\"><div id=\"logt\"><div>graph.tk v1.1 &copy; 2010 Anthony - NO WARRANTY<br>Notes:<br>Sometimes x^n will not be x to the power of n, but x XOR n, which is the normal javascript meaning. I have made modifications that allow some easier equations. A dot after the expression means it was evaluated in a non-javascript-standard way. Use size() to change size.<br><br>Some cool things to type:<br> Fe (iron mass), g(0), g[1](0), en[26], M[26], symbol[26]</div></div><br><input type=\"text\" style=\"width:100%\" id=\"conin\" onkeydown=\"if(event.which==13){consoleex(this)};if(event.which==38){this.value=last}\"></div><div id=\"funcs\" class=\"overlay\"><ul class=\"f\" id=\"flist\"><li id=\"prototype\"><div class=\"b\" style=\"background:#07c\"></div></li></ul><input type=\"button\" value=\"+\" id=\"pb\" onclick=\"newfunc();_ga_track_event('New')\"><a href=\"javascript:void(showcon())\" style=\"font-size:small;margin:8px\" id=\"shc\">Console</a><a href=\"javascript:void(tdiff())\" style=\"font-size:small;margin:8px\" id=\"sde\">Diff Eq</a><a href=\"javascript:void(scren())\" style=\"font-size:small;margin:8px\" id=\"tss\">Screenshot</a><small id=\"nosave\"></small><a href=\"about\" target=\"_blank\">\t<div id=\"quest\">?</div></a></div><div id=\"overlay\" style=\"display:none;bottom:0;right:0\" class=\"overlay\"><table><tbody><tr><td style=\"width:100px\"><input type=\"button\" value=\"f ' (x)\" onclick=\"if(this.value=='f \\' (x)'){this.value='f \\' \\' (x)';second=true;}else{this.value='f \\' (x)';second=false;}\"> = </td><td><input type=\"text\" id=\"nnn\" value=\"g(x)\" onchange=\"this.onkeydown()\" onkeydown=\"getg(this)\" onkeyup=\"this.onkeydown()\"></td></tr><tr><td>x<sub>0</sub> = </td><td><input type=\"text\" value=\"0\" id=\"x0\" onchange=\"this.onkeydown()\" onkeydown=\"valiad(this)\" onkeyup=\"this.onkeydown()\"></td></tr><tr><td>y<sub>0</sub> = </td><td><input type=\"text\" value=\"1\" id=\"y0\" onchange=\"this.onkeydown()\" onkeydown=\"valiad(this)\" onkeyup=\"this.onkeydown()\"></td></tr><tr><td>&nbsp;</td><td><input type=\"button\" value=\"Solve\" id=\"stopper\" onclick=\"if(solving){solving=false;}else{dosolve(document.getElementById('x0').value,document.getElementById('y0').value)}\"></td></tr></tbody></table></div>";
var canvas = document.getElementById("canvas");
var stopper = document.getElementById("stopper");
var overlay = document.getElementById("overlay");
var width, height, draw;
var mx = 400;
var t = 0;
var scalex = 1;
var scaley = scalex;
var panx = 0;
var pany = 0;
var ix = 1;
var iy = 1;
var sx = 1;
var sy = 1;
var lx = 1;
var ly = 1;
var dx = 0;
var dy = 0;
var infd = 0;
var cx = 0;
var cy = 0;
var solving = false;
var step = 0.001;
var my = 300;
var ctx;
var con = document.getElementById("con");
var proto = document.getElementById("prototype").cloneNode(true);
proto.removeAttribute("id");

if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());

var en = ["Massless void", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "aluminium", "Silicon", "Phosphorus", "Sulphur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirkonium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Hydrargyrum", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Ununnilium", "Unununium"];
var M = [0.0, 1.00794, 4.002602, 6.941, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9994, 20.1797, 22.98976928, 24.305, 26.9815386, 28.0855, 30.973762, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938045, 55.845, 58.933195, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.90585, 91.224, 92.90638, 95.96, 98, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.9054519, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145, 150.36, 151.964, 157.25, 158.92535, 162.5001, 164.93032, 167.259, 168.93421, 173.054, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 192.084, 196.966569, 200.59, 204.3833, 207.2, 208.980401, 210, 210, 220, 223, 226, 227, 232.03806, 231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 261, 262, 266, 264, 277, 268, 271, 272];
var symbol = ["Zero", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Te", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg"];
var colorss = "#07c,#f00,#0a0,#04f,#f0f,#f80,#0ff,#808,#088,#880,#f08,#80f,#8f0,#f08".split(",");

function col(n) {
    return colorss[n % (colorss.length)];
}
var flist = document.getElementById("flist");
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

function getlatexpart(x) {
if(x==","){return "";}
    if(!(latexchars[x]===undefined)) {
        return latexchars[x];
    }
    return x;
}
function getstr(obj,latex){
if(latex){return $(obj).mathquill("latex");}
return $(obj).mathquill("latex").replace(/}{/g,")/(").replace(/\\([a-zA-Z\.\,]+)/g,function(a,b){return getlatexpart(b);}).replace(/{/g,"(").replace(/}/g,")").replace(/\\/g,""); }

function setstr(obj,val) {
$(obj).mathquill("latex",val.replace(/\\left\(/g,"){").replace(/\\right\)/g,"}"))

}
function setonchange(obj,val)
{
obj.onchange=eval("(function(){"+val+"})");
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
for (var index = 0; index < symbol.length; index++) {
    window[symbol[index]] = M[index];
}
function newfunc(funcval) {

    var newone = proto.cloneNode(true);
    var inputbox=document.createElement("span");
    newone.appendChild(inputbox);
    
    if (funcval !== null && funcval !== undefined) {
        inputbox.appendChild(document.createTextNode(funcval.replace(/\\left\(/g,"){").replace(/\\right\)/g,"}")));
        //setstr(inputbox,funcval);
    } else {
        inputbox.appendChild(document.createTextNode(randfunc().replace(/\\left\(/g,"){").replace(/\\right\)/g,"}")));
        //setstr(inputbox,randfunc());
    }
    $(inputbox).mathquill("editable");
    
    
    
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
    if (loaded) {
        
        inputbox.focus();
        //inputbox.select();
        inputbox.onchange();
        save();
        draw();
    }
}
var big = false;

function size() {
    big = !big;
    logt.style.width = big ? "500px" : "331px";
    logt.style.height = big ? "500px" : "117px";
    return "OK";
}
var second = false;

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
  	string = string.replace(/(sin|cos|tan|sec|csc|cot|log|ln)\^([\daex])\(/g, "$1_n($2,");
  	string = string.replace(/(sin|cos|tan|sec|csc|cot|log|ln)\^([\daex])([^\(])/g, "$1_n($2,$3)");
  	string = string.replace(/log_([\daex])\(/g, "logb($1,");
  	string = string.replace(/log_([\daex])([^\(])/g, "logb($1,$2)");
  	for(i in latexchars)
  	{
  		string=string.replace(i,latexchars[i]);
  	}
    string = string.replace(/[÷∕⁄]/g, "/").replace(/−/g, "-").replace(/′/g, "'").replace(/sum/g, "∑").replace(/⁻ⁱ/g, "^-1").replace(/ⁿ/g, "^n").replace(/⁻²/g, "^-2").replace(/⁻?⁰/g, "^0").replace(/⁻³/g, "^-3").replace(/⁻⁴/g, "^-4").replace(/⁻⁵/g, "^-5").replace(/⁻⁶/g, "^-6").replace(/¼/g, "0.25").replace(/½/g, "0.5").replace(/¾/g, "0.75").replace(/⅓/g, "(1/3)").replace(/⅔/g, "(2/3)").replace(/⅕/g, "0.2").replace(/⅖/g, "0.4").replace(/⅗/g, "0.6").replace(/⅘/g, "0.8").replace(/⅙/g, "(1/6)").replace(/⅚/g, "(5/6)").replace(/⅛/g, "0.125").replace(/⅜/g, "0.375").replace(/⅝/g, "0.625").replace(/⅞/g, "0.875").replace(/nx/g, "n*x").replace(/diff\(/g, "djkb(").replace(/⁻⁷/g, "^-7").replace(/⁻⁸/g, "^-8").replace(/⁻⁹/g, "^-9");
    if (jjq !== null && jjq !== undefined) {
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
    string = string.replace(/≥/g, ">=").replace(/≤/g, "<=").replace(/\+\+/g, "+").replace(/\-\-/g, "+").replace(/Γ/g, "γ").replace(/γ\(/g, "fact(-1+").replace(/²/g, "^2").replace(/³/g, "^3").replace(/⁴/g, "^4").replace(/⁵/g, "^5").replace(/⁶/g, "^6").replace(/⁷/g, "^7").replace(/⁸/g, "^8").replace(/⁹/g, "^9").replace(/xxx/g, "x*x*x").replace(/(xx)/g, "x*x").replace(/(xx)/g, "x*x").replace(/([\d\.]+|[a-zπ])\!/g, "fact($1)").replace(/\(([^\(^\)]+)\)\!/g, "fact($1)").replace(/([^o^t^a-z^A-Z])g\(/g, "$1g[0](").replace(/^g\(/, "g[0](").replace(/\|([^\|]+)\|/g, "abs($1)").replace(/f\(x\)/g, "y").replace(/x\(/g, "x*(").replace(/x\^-1/g, "(1/x)").replace(/e\^(-[\d\.xy])/g, "exp($1)").replace(/e\^\(/g, "exp(").replace(/([^\(\)\^\]\[\,\.])\^\(/g,"Math.pow($1,").replace(/\(([^\)\(\[\]\.\^\,]+)\)\^\(/g,"Math.pow($1,").replace(/₀/g, "_0").replace(/₁/g, "_1").replace(/₂/g, "_2").replace(/₃/g, "_3").replace(/₄/g, "_4").replace(/₅/g, "_5").replace(/₆/g, "_6").replace(/₇/g, "_7").replace(/₈/g, "_8").replace(/₉/g, "_9").replace(/ₐ/g, "_a").replace(/ₑ/g, "_e").replace(/ₓ/g, "_x");
    
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
        string = string.replace(/∑\[([^,]+),∞,([^n^\]]+)\/fact\(n\)\]/g, "((e*$2)-∑[0,$1-1,$2/fact(n)])");
        string = string.replace(/∑\[([^,]+),∞,pow\(([\d]+|[^\(^\)]),n\)\/fact\(n\)\]/g, "(exp($2)-∑[0,$1-1,pow($2,n)])");
        string = string.replace(/∑\[([^,]+),∞,pow\(([\d]+),n\)\/\(fact\(n\)\)\]/g, "(exp($2)-∑[0,$1-1,pow($2,n)])");
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
    string=string.replace(/α/g,"alpha").replace(/β/g,"beta").replace(/γ/g,"gamma").replace(/δ/g,"delta").replace(/ζ/g,"zeta").replace(/η/g,"eta").replace(/θ/g,"theta").replace(/ι/g,"iota").replace(/κ/g,"kappa").replace(/μ/g,"mu").replace(/ν/ν,"nu").replace(/ξ/g,"xi").replace(/ο/g,"omicron").replace(/ρ/g,"rho").replace(/σ/g,"sigma").replace(/τ/g,"tau").replace(/υ/g,"upsilon").replace(/χ/g,"chi").replace(/ψ/g,"psi").replace(/ω/g,"omega").replace(/ϕ/g,"phi").replace(/φ/g,"phiv").replace(/ϵ/g,"epsilon").replace(/ε/g,"epsiv").replace(/ς/g,"sigmaf").replace(/ϝ/g,"gammad").replace(/ϰ/g,"kappav").replace(/ϖ/g,"piv").replace(/ϱ/g,"rhov").replace(/ϑ/g,"thetav").replace(/π/g,"pi").replace(/λ/g,"lambda").replace(/Γ/g,"Gamma").replace(/Δ/g,"Delta").replace(/Θ/g,"Theta").replace(/Λ/g,"Lambda").replace(/Ξ/g,"Xi").replace(/Π/g,"Pi").replace(/Σ/g,"Sigma").replace(/Υ/g,"Upsilon").replace(/Φ/g,"Phi").replace(/Ψ/g,"Psi").replace(/Ω/g,"Omega").replace(/⊥/g,"perp").replace(/∇/g,"nabla").replace(/∀/g,"forall").replace(/∐/g,"coprod").replace(/∫/g,"int");
    string=string.replace(/\)Math/g,")*Math");
    return string;
}
function showcon() {
    con.style.display = (con.style.display == 'none' ? 'block' : 'none');
    document.getElementById("conin").focus();
    _ga_track_event("Console " + con.style.display)
}
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
function get2dfunction(string) {
    try {
        var func = safeeval("(function(x,y,dx,dy){ with(Math) { return " + extrafunc(string) + ";} } )");
        func(2.4324234215123);
        return func;
    } catch (ex) {
        return false;
    }
}
function valiad(obj) {
    try {
        safeeval(extrafunc(obj.value));
        obj.style.background = "white";
    } catch (ex) {
        obj.style.background = "red";
    }
}
function consolelog(vla, question) {
    if (window.JSON) {
        vla = JSON.stringify(vla);
    }
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
function delfunc() {
    if (flist.childNodes.length > 1) {
        g.pop();
        flist.removeChild(flist.lastChild);
        flist.lastChild.getElementsByTagName("span")[0].focus();
        save();
    }
}
function getf(obj, idd, force) {

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
    
    
    try {
    if(false){
        if ((force) || (obj.focused == 0) || ((obj.selectionStart == obj.selectionEnd) && (obj.selectionEnd == obj.value.length))) {
            var ovj = obj.value;
            ovj = ovj.replace(/Gamma/g, "Γ");
            ovj = ovj.replace(/<\=/g, "≤");
            ovj = ovj.replace(/>\=/g, "≥");
            ovj = ovj.replace(/pi/g, "π");
            ovj = ovj.replace(/sigma/g, "σ");
            ovj = ovj.replace(/sum/g, "∑");
            ovj = ovj.replace(/\*/g, dotprod);
            var sups = ("⁰,ⁱ,²,³,⁴,⁵,⁶,⁷,⁸,⁹").split(",");
            ovj = ovj.replace(/\^[\-−]([\d])/g, function (d, x) {
                return "⁻" + sups[x]
            });
            ovj = ovj.replace(/\^([\d])/g, function (d, x) {
                return sups[x]
            });
            ovj = ovj.replace("^n", "ⁿ");
            ovj = ovj.replace("phi", "φ");
            ovj = ovj.replace("product", "∏");
            ovj = ovj.replace(/zeta/g, "ζ");
            ovj = ovj.replace(/sqrt/g, "√");
            ovj = ovj.replace(/[Ii]nfinity/g, "∞");
            ovj = ovj.replace(/phi/g, "φ");
            ovj = ovj.replace(/alpha/g, "α");
            ovj = ovj.replace(/beta/g, "β");
            ovj = ovj.replace(/sigma/g, "σ");
            ovj = ovj.replace(/delta/g, "∆");
            ovj = ovj.replace(/_0/g, "₀");
            ovj = ovj.replace(/_1/g, "₁");
            ovj = ovj.replace(/_2/g, "₂");
            ovj = ovj.replace(/_3/g, "₃");
            ovj = ovj.replace(/_4/g, "₄");
            ovj = ovj.replace(/_5/g, "₅");
            ovj = ovj.replace(/_6/g, "₆");
            ovj = ovj.replace(/_7/g, "₇");
            ovj = ovj.replace(/_8/g, "₈");
            ovj = ovj.replace(/_9/g, "₉");
            ovj = ovj.replace(/_a/g, "ₐ");
            ovj = ovj.replace(/\-/g, "−");
            ovj = ovj.replace(/_e/g, "ₑ");
            ovj = ovj.replace(/_x/g, "ₓ");
            ovj = ovj.replace(/\//g, "/");
            ovj = ovj.replace(/'/g, "′");
            ovj = ovj.replace(/\(1[\/∕]4\)/g, "¼");
            ovj = ovj.replace(/\(1[\/∕]2\)/g, "½");
            ovj = ovj.replace(/\(3[\/∕]4\)/g, "¾");
            ovj = ovj.replace(/\(1[\/∕]3\)/g, "⅓");
            ovj = ovj.replace(/\(2[\/∕]3\)/g, "⅔");
            ovj = ovj.replace(/\(1[\/∕]5\)/g, "⅕");
            ovj = ovj.replace(/\(2[\/∕]5\)/g, "⅖");
            ovj = ovj.replace(/\(3[\/∕]5\)/g, "⅗");
            ovj = ovj.replace(/\(4[\/∕]5\)/g, "⅘");
            ovj = ovj.replace(/\(1[\/∕]6\)/g, "⅙");
            ovj = ovj.replace(/\(5[\/∕]6\)/g, "⅚");
            ovj = ovj.replace(/\(1[\/∕]8\)/g, "⅛");
            ovj = ovj.replace(/\(3[\/∕]8\)/g, "⅜");
            ovj = ovj.replace(/\(5[\/∕]8\)/g, "⅝");
            ovj = ovj.replace(/\(7[\/∕]8\)/g, "⅞");
            ovj = ovj.replace(/theta/g, "θ");
            ovj = ovj.replace(/lambda/g, "λ");
            ovj = ovj.replace("!=", "≠");
            ovj = ovj.replace(/rho/g, "ρ");
            ovj = ovj.replace(/eps/g, "ε");
            ovj = ovj.replace(/tau/g, "τ");
            ovj = ovj.replace(/psi/g, "ψ");
            ovj = ovj.replace(/omega/g, "ω");
            obj.value = ovj;
        }
        }//if(false)
    } catch (ex) {}
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
function piecewise(cond, val, other) {
    if (cond) {
        return val;
    }
    return other;
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
    e = Math.E;
    pi = Math.PI;
    if (!ctx) {
        return
    }
    ctx.lineCap = "butt";
    pany += cy;
    panx += cx;
    cy = cx = 0;
    canvas.style.top = cy + "px";
    canvas.style.left = cx + "px";
    stopper.value = solving ? "Stop" : "Solve";
    t += 0.1;
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
                xint = false;
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
var lmx;
var lmy;
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
            if (window.JSON) {
                try {
                    data = JSON.parse(data);
                    loadd(data);
                } catch (ex) {}
            } else {
                try {
                    data = safeeval("(" + data + ")");
                    loadd(data);
                } catch (ex) {}
            }
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
if (window.parent.length > 0) {
    document.getElementById("funcs").style.display = "none"
}
if (!iphone && g.length == 1 && getstr(flist.childNodes[0].getElementsByTagName("span")[0]) == "e^x") {
    newfunc("\\frac{1}{8}*x");
    //newfunc("f'[1](x)");
    //newfunc("sum[1,15,sin(n*(x+pi))/n]");
    showp = 1;
}

draw();
document.getElementById("ldall").style.display = "none";
document.getElementById("all").style.display = "block";
var lsd = 0;

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
loaded = true;