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
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);/**
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

  this.jQ = $(this.html_template[0]).data('[[mathquill internal data]]', {cmd: this});
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

function TextBlock(replacedBlock)
{
  MathCommand.call(this, '\\text', undefined, new InnerTextBlock);
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
    this.cursor.insertNew(new VanillaSymbol(ch)).show();
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
function InnerTextBlock(){}
InnerTextBlock.prototype = $.extend(new MathBlock, {
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
    latex = latex.match(/\\[a-z]*|[^\s]/ig);
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
        if(!token || token === '}')
          return;
        var cmd;
        if(token === '\\text')
        {
          var text = latex.shift();
          if(text === '{')
          {
            text = token = latex.shift();
            while(token !== '}')
            {
              if(token === '\\') //skip tokens immediately following backslash
                text += token = latex.shift();
              text += token = latex.shift();
            }
            text = text.slice(0,-1); //cut trailing '}'
          }
          cmd = new TextBlock(text);
          cursor.insertNew(cmd).insertAfter(cmd);
          continue;
        }
        else if(token === '\\left' || token === '\\right') //REMOVEME HACK for parens
        {
          token = latex.shift();
          if(token === '\\')
            token = latex.shift();
          cursor.write(token);
          cmd = cursor.prev || cursor.parent.parent;
          if(cursor.prev)
            return;
          else
            latex.unshift('{');
        }
        else if(/^\\[a-z]+$/.test(token))
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
    case 65: //'a' character, as in Select All
      if(!e.ctrlKey || e.shiftKey || e.altKey)
        return true;
      if(this.parent) //so not stopPropagation'd at RootMathCommand
        return this.parent.keydown(e);
      this.cursor.clearSelection().appendTo(this);
      while(this.cursor.prev)
        this.cursor.selectLeft();
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
    if(ch === '$' && cursor.parent == this)
    {
      if(this.isEmpty())
        cursor.insertAfter(this.parent).backspace().insertNew(new VanillaSymbol('\\$','$')).show();
      else if(!cursor.next)
        cursor.insertAfter(this.parent);
      else if(!cursor.prev)
        cursor.insertBefore(this.parent);
      else
        cursor.write(ch).show();
      return false;
    }
    cursor.write(ch).show();
    return false;
  };
}
RootMathCommand.prototype = new MathCommand;
RootMathCommand.prototype.html_template = ['<span class="mathquill-rendered-math"></span>'];

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
      this.cursor.insertNew(new VanillaSymbol(ch)).show();
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

  if(arguments[0] === 'redraw')
    return this.find('*').change().end();

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

    jQ.addClass('mathquill-editable').attr('tabindex', 0);
    if(textbox)
      jQ.addClass('mathquill-textbox');

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
      if(cmd)
      {
        if(cmd.cmd && !cmd.block)
        {
          cursor.clearSelection();
          if(clicked.outerWidth() > 2*(e.pageX - clicked.offset().left))
            cursor.insertBefore(cmd.cmd);
          else
            cursor.insertAfter(cmd.cmd);
          return false;
        }
      }
      else if(!(cmd = (clicked = clicked.parent()).data('[[mathquill internal data]]')))
          return;

      cursor.clearSelection();
      if(cmd.cmd)
        cursor.insertAfter(cmd.cmd);
      else
        cursor.appendTo(cmd.block);
      //move cursor to position closest to click
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

      return false;
    }
    ).bind('keydown.mathquill',function(e) //see Wiki page "Keyboard Events"
    {
      lastKeydnEvt = e;
      e.happened = true;
      return e.returnValue = cursor.parent.keydown(e) ||
        (e.stopImmediatePropagation(), false);
    }
    ).bind('keypress.mathquill',function(e)
    {
      //on auto-repeated key events, keypress may get triggered but not keydown
      //  (see Wiki page "Keyboard Events")
      if(lastKeydnEvt.happened)
        lastKeydnEvt.happened = false;
      else
        lastKeydnEvt.returnValue = cursor.parent.keydown(lastKeydnEvt);
      //only call keypress if keydown returned true
      return lastKeydnEvt.returnValue && (e.ctrlKey || e.metaKey || e.which < 32 ||
        cursor.parent.keypress(e) || (e.stopImmediatePropagation(), false));
    }).blur();
  });

  return this;
};

//on document ready, transmogrify all <tag class="mathquill-editable"></tag> and
//  <tag class="mathquill-embedded-latex"></tag> elements to mathquill elements.
/*$(function()
{
  $('.mathquill-embedded-latex').mathquill();
  $('.mathquill-editable').mathquill('editable');
  $('.mathquill-textbox').mathquill('textbox');
});*/

return mathquill;
}(jQuery));eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('w 7p="ma";w g=[];w E=L(x,y,dx,dy){J g[0](x)};w 4l=1k;w 4w=1k;w c=m9;w G=6.m8-11;w 7u=5.m7;w m6=7.m5;w m4=1.m3;w m2=b6;w 7t=b6;w h=6.m1-34;w aO=1.m0;w e=1d.E;w 1F=1d.2K;w 4L=(1+1d.1S(5))/2;w lZ=8.lY-12;w en=["lX 61","lW","lV","lU","lT","lS","lR","lQ","lP","lO","lN","lM","lL","lK","lJ","lI","lH","lG","lF","lE","lD","lC","lB","lA","lz","lw","lv","lu","lr","lq","lp","lo","lm","ll","lk","lj","lh","lg","lf","ld","lc","lb","la","l9","l8","l7","l6","l5","l4","l3","l2","l1","l0","kZ","kY","kX","kW","kV","kU","kT","kS","kR","kQ","kP","kO","kN","kM","kL","kK","kJ","kI","kH","kG","kF","kE","kD","kC","kB","kA","kz","ky","kx","kw","kv","ku","kt","ks","kr","kq","kp","ko","kn","km","kl","kk","kj","ki","kh","kg","kf","ke","kd","kc","kb","ka","k9","k8","k7","k6","k5","k4","k3"];w M=[0.0,1.k2,4.k1,6.k0,9.jZ,10.jY,12.jX,14.jW,15.b5,18.b5,20.jV,22.jU,24.jT,26.jS,28.jR,30.jQ,32.jP,35.jO,39.jN,39.jM,40.jL,44.jK,47.jJ,50.jI,51.jH,54.jG,55.jF,58.jE,58.jD,63.jC,65.38,69.jB,72.64,74.jA,78.96,79.jz,83.jy,85.jx,87.62,88.jw,91.jv,92.ju,95.96,98,jt.js,jr.jq,jp.42,jo.jn,jm.jl,jk.jj,ji.71,jh.76,jg.6,jf.je,jd.jc,jb.ja,j9.j8,j7.j6,b4.j5,b4.j4,j3.j2,j1,j0.36,iZ.iY,iX.25,iW.iV,iU.iT,iS.iR,iQ.aZ,iP.iO,iN.iM,iL.iK,iJ.49,iI.iH,iG.84,iF.b2,iE.23,b3.iD,b3.iC,iB.iA,iz.59,iw.iv,b2.2,iu.ir,b1,b1,iq,ip,io,im,il.ik,ij.ii,ih.ig,ie,ic,ib,b0,b0,i9,i8,i7,i6,aZ,aY,i5,aY,i4,i3,i2,i1,i0,hZ];w 66=["hY","H","hX","hW","hV","B","C","N","O","F","hU","hT","hS","hR","hQ","P","S","hP","hO","K","hN","hM","hL","V","hK","hJ","aq","hI","hH","hG","hF","hE","hD","hC","hB","hA","hz","hy","hx","Y","hw","hv","hu","aX","ht","hs","hr","hq","hp","ho","hn","hm","aX","I","hl","hk","hj","hi","hh","hg","hf","he","hd","hc","hb","ha","h9","h8","h7","h6","h5","h4","h3","h2","W","h0","gZ","gY","gX","gW","gV","gU","gT","gS","gR","gQ","gP","gO","gN","gM","gL","gK","U","gJ","gI","gH","gG","gF","gE","gD","gC","gB","gA","gz","gx","gw","gv","gu","gs","gr","gq","gp"];1j(w 3a=0;3a<66.1c;3a++){1h[66[3a]]=M[3a]}w 1A=1d.1A;w 33=1d.33;w 2m=1d.2m;w 6X=1d.2m;w 2a=1d.2a;w 1X=1d.1X;w ln=1d.1X;w 2h=1d.2h;w aW=1d.aW;w aV=1d.aV;w 6Z=1d.6Z;w aU=1d.aU;w 5K=1d.5K;w 5L=1d.5L;w aT=1d.aT;w aS=1d.aS;w aR=1d.aR;w 3l=1d.3l;w 1S=1d.1S;w Q=1d.Q;L go(n,x){J Q(1A(x),n)}L gn(n,x){J Q(33(x),n)}L gm(n,x){J Q(2m(x),n)}L gl(n,x){J Q(3p(x),n)}L gk(n,x){J Q(46(x),n)}L gj(n,x){J Q(45(x),n)}L gi(n,x){J Q(1X(x),n)}L gh(n,x){J Q(ln(x),n)}L 73(b,v){J ln(v)/ln(b)}L u(x){J(x>=0)?(x?1:0.5):(0)}L gg(x){J 2*u(x)-1}L gf(aQ,1H,aP){if(aQ){J 1H}J aP}L gd(x){if(x===0){J 1}J 1A(1F*x)/(1F*x)}L 46(x){J 1/(33(x))}L 45(x){J 1/(1A(x))}L gc(x){J 1/(1A(x))}L 3p(x){J 1/(2m(x))}w gb=3p;w ga=3p;w 7z=[1,1,2,5,15,52,g9,g8,g7,g6,g5,g4,g3,g2,g1,g0,fZ,fY,fX,fW,fV,fU,fT];L 3K(x){if(x===0){J-0.5}19 if(x==1){J 1V}19 if(x==2){J 1F*1F/6}19 if(x==4){J 1F*1F*1F*1F/90}19 if(x<1){J 1V}w 3r=4.4*Q(x,-5.1);1j(w 6i=1;6i<10;6i++){3r+=Q(6i,-x)}J 3r}L 43(x){if(x>1.0){J(2a(x*(ln(x)-1)+0.5*(-ln(x)+aO)+1/ (12 * x) - 1 /(fS*(x*x*x))+1/ (fR * Q(x, 5)) - 1 /(fQ*Q(x,7))))}if(x>-0.5){J(1.0+0.fP*x+0.fO*Q(x,2))/(x+0.fN*Q(x,2)-0.fM*Q(x,3))}if(x<0){if(x==~~x){J}19{J 1d.2K/(1d.1A(1d.2K*x)*43((1-x)))}}19{J Q(x-1,x-1)*1d.1S(2*1d.2K*(x-1))*2a(1-x+1/ (12 * (x - 1) + 2 /(5*(x-1)+53/(42*(x-1)))))}}L 1p(ff){if(ff===0||ff==1){J 1}19 if(ff>0&&ff==~~ff&&ff<15){w s=1;1j(w 6h=1;6h<=ff;6h++){s*=6h}J~~s}19 if(ff!=(~~ff)||ff<0){J 43(ff+1)}}L 5N(x){if(x==~~x&&x<7z.1c){J 7z[x]}19{w 3r=0;1j(w 5b=0;5b<5;5b++){3r+=Q(5b,x)/1p(5b)}J 3r/e}}L 9A(7y,7x){if(7x===2b){J 7y}J{"x":7y,"y":7x}}L 1l(ia,6g,x){4h++;w 5a;if(4h>8){4h-=1;J 0}w h=0.fL;if(6g>0){5a=(1l(ia,6g-1,x+h)-1l(ia,6g-1,x-h))/(2*h);4h-=1;J 5a}5a=g[ia](x);4h-=1;J 5a}w 4h=0;w 6j=1k;w 3h=0;w 1U=0;w D;w 3Q=/fK/.1K(1h.3C.3B);w 1Q="2s";if(1h.5c.1c){1Q="2P"}if(3Q){1Q="2P"}w 4C=-10;w 3W=10;w 1M=10;w 1T=-10;L 6S(n){if(1h.aN){5v(L(){aN.fJ("fI",n)},20)}};L 2i(29,2R){if(!3x(2R)){if(2R>1M+2){D.7w(29,-1M-2);J}19 if(2R<1T-2){D.7w(29,-1T+2);J}D.7w(29,-2R)}}L 1L(29,2R){if(!3x(2R)){if(2R>1M+2){D.7v(29,-1M-2);J}19 if(2R<1T-2){D.7v(29,-1T+2);J}D.7v(29,-2R)}}w aM="⋅";if(/fH/.1K(3C.3B)&&/7r/.1K(3C.3B)){aM="∙"}L 1J(z){w 6f="7h,1b,1h,3I,fG,6s,fF,fE,1m,5c,fD,fC,fB,fz,1z,6N,6M,2L,6L,5A,1o".5S(",");1j(w 57=0;57<6f.1c;57++){if(z.48(6f[57])!=-1){5H("fy fw: "+6f[57])}}J 7h(z)}w 6d="x^2~f\'(x)-1~2e^-x~2x+3~{λ:λ=3}~e^(-λ*x)~(0.5,0.5)~∑[1...∞,1A(5g)/n]~m:aL~|x^2-4|+2~1/x~x^-2~x!~fv~∑[1,6e,(x^n)/n!]~fu~e^x:[−2,2]~2m(x)~(x+2)(x-3)^2~70(0,2,2x)~(x-2)^2~∑[1,∞,1A((2n−1)x)/(2n−1)]~~∏[1,5,(x-n)]~∑[0,5,n]~x^x~6V(x)~(x!)/(3!-x)~x%3~(x>3)?2x:-3~1p(x)~4L/x~(x>=0)?7u*G/(7t+aJ)^2:2b~g[0]\'(2x)~g[0](x)+1~1S(x)".5S("~");if(1Q=="2s"){6d="x^2    f\'\\\\1f(x\\\\1e)-1    2e^{-x}    2x+3    \\\\5I=3    e^{-\\\\5I*x}    \\\\1f(0.5,0.5\\\\1e)    \\\\4o{n=1}^{\\\\6e}\\\\3d{\\\\1A\\\\1f(5g\\\\1e)}n    \\\\aK{1}^{4}x-n    m:aL    \\\\1f|x^2-4\\\\1e|+2    \\\\ft    x^{-2}    x!    \\\\ln x    \\\\4o{n=1}^{\\\\6e}\\\\3d{x^n}{n}    \\\\1A x    e^x:\\\\1f[−2,2\\\\1e]    \\\\2m\\\\1f(x\\\\1e)    \\\\1f(x+2\\\\1e)\\\\1f(x-3\\\\1e)^2    70\\\\1f(0,2,2x\\\\1e)    \\\\1f(x-2\\\\1e)^2    \\\\4o{n=1}^{\\\\6e}\\\\3d{\\\\1A\\\\1f(\\\\1f(2n−1\\\\1e)x\\\\1e)}{2n−1}    \\\\aK{n=1}^5\\\\1f(x-n\\\\1e)    \\\\4o{n=0}^5n    x^x    \\\\43\\\\1f(x\\\\1e)    \\\\3d{x!}{3!-x}    x%3    \\\\1f(x>3\\\\1e)?2x:-3    \\\\1p\\\\1f(x\\\\1e)    \\\\3d\\\\4L x    \\\\1f(x>=0\\\\1e)?7u*G/\\\\1f(7t+aJ\\\\1e)^2:2b    g\\\\1f[0\\\\1e]\'\\\\1f(2x\\\\1e)    g\\\\1f[0\\\\1e]\\\\1f(x\\\\1e)+1    \\\\1S x".5S("    ");}w aI=0;L 7a(){J 6d[(aI++)%6d.1c]}if(1h.3I.6c!=""){1h.7R=1k;if(1h.3I.6c[2]=="="){1h.7Z=1h.3I.6c.6W(3)}19{1h.6r=fs(1h.3I.6c.6W(6))}}w 4n=1b.1n("4n");4n.6l="<56 1a=\\"1I:1P\\" 4v=\\"6E.8m\\" 1t=\\"16\\" 1B=\\"16\\"><1o id=\\"1o\\" 1B=\\"fr\\" 1t=\\"fq\\"><1u 1a=\\"60:fp;2J-ay:4A-4z\\"><h1>7d</h1>fo fm fl is ar fk fj 1j 1m!. <a 1G=\\"5h\\">fi 1m fh.</a><br />fg 7s 5k, 5m 7o 5l<br><br>fe aH 7l 7X fd, 7o fc fb aH.<br><br><a 1G=\\"2r://3c.7s.2Q/5k/\\"><56 id=\\"81\\" 6b=\\"aG aF\\"></a>&4X;<a 1G=\\"2r://3c.7s.2Q/5k/\\">6a aG aF</a><br><a 1G=\\"2r://3c.aE.2Q/5m\\"><56 id=\\"89\\" 6b=\\"6B\\"></a>&4X;<a 1G=\\"2r://3c.aE.2Q/5m\\">6a 6B</a><br><a 1G=\\"2r://3c.aD.2Q/5l\\"><56 id=\\"86\\" 6b=\\"7r\\"></a>&4X;<a 1G=\\"2r://3c.aD.2Q/5l\\">6a 7r</a><br><a 1G=\\"2r://3c.6x.2Q/aC/\\"><56 fa=\\"f9\\" id=\\"82\\" 6b=\\"6A\\"></a>&4X;<a 1G=\\"2r://3c.6x.2Q/aC/\\">6a 6A</a><br></1u></1o><1u id=\\"2u\\" 1a=\\"f8:f7;z-f6:f5;f4:2H;2S:0.6;1f:4Y;ao:4Y;f3:1P;2M:3X;-f2-68:2S 0.5s 67-in-4b;-f1-68:2S 0.5s 67-in-4b;-o-68:2S 0.5s 67-in-4b;68: 2S 0.5s 67-in-4b;2J:f0 \'eZ\',\'eY 7q\',\'eX\',\'eW aB 7q\',\'eV aB 7q\',\'eU 6R\',\'eT\',\'eS\',eR\\">(0,0)</1u><1u id=\\"41\\" 1a=\\"1I:1P\\" 3s=\\"3A\\"><1u id=\\"31\\"><1u>4e.1w eQ.2 (<a 1G=\\"eP://aA.2Q/az/4e.1w/eO/"+7p+"\\">"+7p+"</a>) &eN; eM eL<br /><br />7m: <a 1G=\\"2r://3c.eK.eJ/eI/eH.eG\\" eF=\\"7n ax aw av 7m\\" 7k=\\"7j\\">7n eD</a><br />eC eB: <a 1G=\\"2r://aA.2Q/az/4e.1w\\" 7k=\\"7j\\">4e.1w 8i eA</a><br /><1u 1a=\\"2J-ay:4A-4z;2J-3J:x-4f\\">ez ey is ew in 4g ev as it au be eu, at et es er; eq ep 4g eo em 7l el 7o ek ej A ei eh. eg 4g 7n ax aw av 7m 1j ef ee.<br /><br>ed:<br>ec x^n au 9Q be x 3P 4g eb 7l n, at x ea n, 4j is 4g e9 4Z e8. I e7 e6 e5 as e4 e3 e2 e1. A e0 dZ 4g dY dX it dW dV in a dU-4Z-dT ar. dS 3J() 3P dR 3J.<br></1u><br>dQ dP dO 3P 2O:<br> aq, m:dN, g(0), g[1](0), en[26], M[26], 66[26]</1u></1u><br><2P 2O=\\"2q\\" 1a=\\"1B:dM%\\" id=\\"8G\\" 2g=\\"if(2v.4j==13){8B(1m)};if(2v.4j==38){1m.R=6P}\\"></1u><1u id=\\"7A\\" 3s=\\"3A\\"><ap 3s=\\"f\\" id=\\"1v\\"><li id=\\"3u\\"><1u 3s=\\"b\\" 1a=\\"2M:#9S\\"></1u><2s 3s=\\"2U\\"></2s><2s 3s=\\"9Y\\" 6w=\\"5C(1m);\\"></2s></li></ap><2P 2O=\\"5Y\\" R=\\"+\\" id=\\"7K\\" 4k=\\"4i();6S(\'dL\')\\"><a 1G=\\"4Z:61(8H())\\" 1a=\\"2J-3J:4f;60:4Y\\" id=\\"7M\\">6R</a><a 1G=\\"4Z:61(6t())\\" 1a=\\"2J-3J:4f;60:4Y\\" id=\\"7L\\">dK dJ</a><a 1G=\\"4Z:61(8K())\\" 1a=\\"2J-3J:4f;60:4Y\\" id=\\"7J\\">dI</a><4f id=\\"6k\\"></4f><1u 1a=\\"dH:1e\\"><a 1G=\\"2r://4e.1w/5h\\" 7k=\\"7j\\"><2P 2O=\\"5Y\\" R=\\"dG\\" 4k=\\"dF=\'2r://4e.1w/5h\'\\"></a></1u></1u><1u id=\\"3A\\" 1a=\\"1I:1P;ao:0;1e:0\\" 3s=\\"3A\\"><aj><ak><3v><1O 1a=\\"1B:dE\\"><2P 2O=\\"5Y\\" R=\\"f \' (x)\\" 4k=\\"if(1m.R==\'f \\\\\' (x)\'){1m.R=\'f \\\\\' \\\\\' (x)\';4H=1r;}19{1m.R=\'f \\\\\' (x)\';4H=1k;}\\"> = </1O><1O><2P 2O=\\"2q\\" id=\\"7U\\" R=\\"g(x)\\" 3z=\\"1m.2g()\\" 2g=\\"8w(1m)\\" 5R=\\"1m.2g()\\"></1O></3v><3v><1O>x<5Z>0</5Z> = </1O><1O><2P 2O=\\"2q\\" R=\\"0\\" id=\\"am\\" 3z=\\"1m.2g()\\" 2g=\\"6U(1m)\\" 5R=\\"1m.2g()\\"></1O></3v><3v><1O>y<5Z>0</5Z> = </1O><1O><2P 2O=\\"2q\\" R=\\"1\\" id=\\"al\\" 3z=\\"1m.2g()\\" 2g=\\"6U(1m)\\" 5R=\\"1m.2g()\\"></1O></3v><3v><1O>&4X;</1O><1O><2P 2O=\\"5Y\\" R=\\"3Y\\" id=\\"3m\\" 4k=\\"if(2j){2j=1k;}19{8t(1b.1n(\'am\').R,1b.1n(\'al\').R)}\\"></1O></3v></ak></aj></1u>";w 2u=1b.1n("2u");w 1o=1b.1n("1o");w 3m=1b.1n("3m");w 3A=1b.1n("3A");w 1B,1t,1z;w 2G=dD;w 2W=dC;w 5t;w 5r;w 1W=1;w dB=1W;w 2V=0;w 3f=0;w ix=1;w iy=1;w 2z=1;w 2k=1;w dx=0;w dy=0;w lx=1;w ly=1;w cx=0;w cy=0;w 2j=1k;w 3n=0.2F;w 41=1b.1n("41");w 7b=1b.1n("3u").9O(1r);7b.dA("id");if(!1m.21){1m.21={}}(L(){L f(n){J n<10?\'0\'+n:n}if(1x ai.3u.3N!==\'L\'){ai.3u.3N=L(3b){J a0(1m.ah())?1m.dz()+\'-\'+f(1m.dw()+1)+\'-\'+f(1m.dv())+\'T\'+f(1m.du())+\':\'+f(1m.dt())+\':\'+f(1m.ds())+\'Z\':1s};5T.3u.3N=dr.3u.3N=dq.3u.3N=L(3b){J 1m.ah()}}w cx=/[\\dp\\ag\\af-\\ae\\ad\\ac\\ab\\aa-\\a9\\a8-\\a7\\a6-\\a5\\a4\\a3-\\a2]/g,5X=/[\\\\\\"\\do-\\dn\\dm-\\dl\\ag\\af-\\ae\\ad\\ac\\ab\\aa-\\a9\\a8-\\a7\\a6-\\a5\\a4\\a3-\\a2]/g,1Y,4U,a1={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'},3t;L 5W(q){5X.9X=0;J 5X.1K(q)?\'"\'+q.l(5X,L(a){w c=a1[a];J 1x c===\'q\'?c:\'\\\\u\'+(\'9W\'+a.9V(0).4F(16)).9U(-4)})+\'"\':\'"\'+q+\'"\'}L 4S(3b,4c){w i,k,v,1c,4V=1Y,2A,R=4c[3b];if(R&&1x R===\'3G\'&&1x R.3N===\'L\'){R=R.3N(3b)}if(1x 3t===\'L\'){R=3t.5U(4c,3b,R)}dk(1x R){4W\'q\':J 5W(R);4W\'5e\':J a0(R)?5T(R):\'1s\';4W\'dj\':4W\'1s\':J 5T(R);4W\'3G\':if(!R){J\'1s\'}1Y+=4U;2A=[];if(7i.3u.4F.di(R)===\'[3G 9R]\'){1c=R.1c;1j(i=0;i<1c;i+=1){2A[i]=4S(i,R)||\'1s\'}v=2A.1c===0?\'[]\':1Y?\'[\\n\'+1Y+2A.5V(\',\\n\'+1Y)+\'\\n\'+4V+\']\':\'[\'+2A.5V(\',\')+\']\';1Y=4V;J v}if(3t&&1x 3t===\'3G\'){1c=3t.1c;1j(i=0;i<1c;i+=1){k=3t[i];if(1x k===\'q\'){v=4S(k,R);if(v){2A.2Z(5W(k)+(1Y?\': \':\':\')+v)}}}}19{1j(k in R){if(7i.9Z.5U(R,k)){v=4S(k,R);if(v){2A.2Z(5W(k)+(1Y?\': \':\':\')+v)}}}}v=2A.1c===0?\'{}\':1Y?\'{\\n\'+1Y+2A.5V(\',\\n\'+1Y)+\'\\n\'+4V+\'}\':\'{\'+2A.5V(\',\')+\'}\';1Y=4V;J v}}if(1x 21.4J!==\'L\'){21.4J=L(R,4d,4T){w i;1Y=\'\';4U=\'\';if(1x 4T===\'5e\'){1j(i=0;i<4T;i+=1){4U+=\' \'}}19 if(1x 4T===\'q\'){4U=4T}3t=4d;if(4d&&1x 4d!==\'L\'&&(1x 4d!==\'3G\'||1x 4d.1c!==\'5e\')){5H 7e 7d(\'21.4J\')}J 4S(\'\',{\'\':R})}}if(1x 21.4s!==\'L\'){21.4s=L(2q,7g){w j;L 7f(4c,3b){w k,v,R=4c[3b];if(R&&1x R===\'3G\'){1j(k in R){if(7i.9Z.5U(R,k)){v=7f(R,k);if(v!==2b){R[k]=v}19{9Y R[k]}}}}J 7g.5U(4c,3b,R)}2q=5T(2q);cx.9X=0;if(cx.1K(2q)){2q=2q.l(cx,L(a){J\'\\\\u\'+(\'9W\'+a.9V(0).4F(16)).9U(-4)})}if(/^[\\],:{}\\s]*$/.1K(2q.l(/\\\\(?:["\\\\\\/dh]|u[0-9a-fA-F]{4})/g,\'@\').l(/"[^"\\\\\\n\\r]*"|1r|1k|1s|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,\']\').l(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=7h(\'(\'+2q+\')\');J 1x 7g===\'L\'?7f({\'\':j},\'\'):j}5H 7e dg(\'21.4s\')}}}());w 4N="#9T,#de,#dd,#9T,#dc,#db,#d9,#d8,#d7,#d6,#d5,#d4,#d3,#9S".5S(",");w 4D=7e 9R(0);L d2(n){J 4N[n%(4N.1c)]}w 1v=1b.1n("1v");w 31=1b.1n("31");w 4M={\'gt\':">","1f":"","1e":"",\'ge\':">=",\'lt\':"<",\'le\':"<=","7Q":"∞","d1":"*","3d":"","9y":"α","9x":"β",\'6V\':"γ",\'9w\':"δ",\'3K\':"ζ",\'9v\':"η",\'5J\':"θ",\'9u\':"ι",\'9t\':"κ",\'9s\':"μ",\'9r\':"ν",\'9q\':"ξ",\'9p\':"ο",\'9o\':"ρ",\'9n\':"σ",\'9m\':"τ",\'9l\':"υ",\'9k\':"χ",\'9j\':"ψ",\'9i\':"ω",\'4L\':"ϕ","9h":"φ","d0":"φ","9g":"ϵ","9f":"ε","cZ":"ε","9d":"ς","cY":"ς","9c":"ϝ","cX":"ϝ","cW":"ϝ","9b":"ϰ","cV":"ϰ","99":"ϖ","cU":"ϖ","97":"ϱ","cT":"ϱ","94":"ϑ","cS":"ϑ","1F":"π","5I":"λ",\'43\':"Γ",\'93\':"Δ",\'8Z\':"Θ",\'8Y\':"Λ",\'8X\':"Ξ",\'8W\':"Π",\'8V\':"Σ",\'8U\':"Υ",\'8T\':"Φ",\'8S\':"Ψ",\'8R\':"Ω","8Q":"⊥",",":" ","8P":"∇","8O":"∀","3r":"∑","cR":"∑","cQ":"∏","cP":"∏","8N":"∐","cO":"∐","8M":"∫","cN":"∫"};L 9P(cM,4R){if(4R==",")J"";if(4M[4R]!==2b)J 4M[4R];J 4R}L 4r(1i,4Q){if(1i.cL("3s")=="2U"){4I("7d: 2U is 9Q a 3y","8s")}if(1Q=="2s"){if(4Q)J $(1i).3y("4Q");J($(1i).3y("4Q").l(/}{/g,")/(").l(/\\\\([a-9E-Z\\.\\,]+)/g,9P).l(/{/g,"(").l(/}/g,")").l(/\\\\/g,""))}19{J 1i.R}}L 7T(1i,1H){if(1Q=="2s"){$(1i).3y("4Q",1H)}19{1i.R=1H}}L 3H(){if(!4l){J}if(1h.4t){w 7c={"5d":"6q",g:[]};1j(w n=0;n<1v.2t.1c;n++){7c.g.2Z(4r(1v.2t[n].3e("2U")[0].4q(1Q)[0],1r))}w 4b=21.4J(7c);1h.4t.7V("fn",4b)}}L 4i(5Q){w 4P=7b.9O(1r);w 2p=1b.5F(1Q);w 9N=4P.3e("2U")[0];9N.3o(2p);if(1Q=="2s"){2p.3o(1b.6Q(5Q||7a()));$(2p).3y(\'cK\')}19{2p.R=5Q||7a();2p.2g=2p.5R=L(){1m.3z()}}g.2Z(L(x){J 0});w 9M=1v.2t.1c;2p.3z=L(){8y(2b,9M)};if(4P.3e){w bs=4P.3e("b");4D.2Z(4N.9L());if(bs.1c>0){bs[0].1a.2M=4D[1v.2t.1c]}}1v.3o(4P);if(1Q=="2s"){$(2p).3y("7P");if(!5Q){$(2p).cJ({2O:"cI",cH:1r,4j:65})}}19{2p.3z()}if(6j){2p.6T();3H();1z()}}L 5C(){if(1v.2t.1c>1){g.9L();1v.6v(1v.9K);1v.9K.3e("2U")[0].4q(1Q)[0].6T();3H()}}L 5C(9J){77=9J.cG;3a=0;4O=1v.80;8l(4O!=1s){if(4O==77){7C;3a++}4O=4O.cF}g.9I(3a,1);4N.2Z(4D.9I(3a,1)[0]);1v.6v(77);3H()};w 4H=1k;L 2L(q,5M){q=q.l(/\\^\\(\\)/g,"");q=q.l(/X/g,"x");q=q.l(/ /g,"");q=q.l(/√/g,"1S");q=q.l(/[•⋅∙]/g,"*");q=q.l(/[9H]cE/g,"∞");q=q.l(/[9H]cD/g,"∞");q=q.l(/⁻ⁱ/g,"^-1").l(/ⁿ/g,"^n").l(/⁻²/g,"^-2").l(/⁻?⁰/g,"^0").l(/⁻³/g,"^-3").l(/⁻⁴/g,"^-4").l(/⁻⁵/g,"^-5").l(/⁻⁶/g,"^-6").l(/⁻⁷/g,"^-7").l(/⁻⁸/g,"^-8").l(/⁻⁹/g,"^-9");q=q.l(/(1A|33|2m)\\^\\(\\-1\\)/g,"a$1");q=q.l(/(1A|33|2m|46|45|3p|1X|ln)\\^([\\5P])\\(/g,"$9G($2,");q=q.l(/(1A|33|2m|46|45|3p|1X|ln)\\^([\\5P])([^\\(])/g,"$9G($2,$3)");q=q.l(/9F([\\5P])\\(/g,"73($1,");q=q.l(/9F([\\5P])([^\\(])/g,"73($1,$2)");1j(i in 4M){if(i.1c>1){q=q.l(i,4M[i])}}q=q.l(/(∑|∏)([^\\[^\\3q^\\^^\\{][^\\[]*)$/,"$1[1,∞,$2]");q=q.l(/(∑|∏)3q\\(([^\\)]+)\\)\\^\\(([^\\)]+)\\)(.+)$/,"$1[$2,$3,$4]");q=q.l(/(∑|∏)3q([\\d]+|.)\\^([\\d]+|.)(.+)$/,"$1[$2,$3,$4]");q=q.l(/(∑|∏)3q\\(([^\\)]+)\\)\\^([\\d]+|.)(.+)$/,"$1[$2,$3,$4]");q=q.l(/(∑|∏)3q([\\d]+|.)\\^\\(([^\\)]+)\\)(.+)$/,"$1[$2,$3,$4]");q=q.l(/[÷∕⁄]/g,"/").l(/−/g,"-").l(/′/g,"\'").l(/3r/g,"∑").l(/¼/g,"0.25").l(/½/g,"0.5").l(/¾/g,"0.75").l(/⅓/g,"(1/3)").l(/⅔/g,"(2/3)").l(/⅕/g,"0.2").l(/⅖/g,"0.4").l(/⅗/g,"0.6").l(/⅘/g,"0.8").l(/⅙/g,"(1/6)").l(/⅚/g,"(5/6)").l(/⅛/g,"0.cC").l(/⅜/g,"0.cB").l(/⅝/g,"0.cA").l(/⅞/g,"0.cz").l(/5g/g,"n*x").l(/70\\(/g,"1l(");if(5M===1r){q=q.l(/[2o]\'\\[([\\d]+)\\]\\(/g,"1l($1,1,");q=q.l(/[2o]\\[([\\d]+)\\]\'\\(/g,"1l($1,1,");q=q.l(/[2o]\'\\(/g,"1l(0,1,");q=q.l(/[2o](\'\'|")\\[([\\d]+)\\]\\(/g,"1l($2,2,");q=q.l(/[2o]\\[([\\d]+)\\](\'\'|")\\(/g,"1l($1,2,");q=q.l(/[2o](\'\'|")\\(/g,"1l(0,2,");q=q.l(/[2o]\'\'\'\\[([\\d]+)\\]\\(/g,"1l($1,3,");q=q.l(/[2o]\\[([\\d]+)\\]\'\'\'\\(/g,"1l($1,3,");q=q.l(/[2o]\'\'\'\\(/g,"1l(0,3,");q=q.l(/[2o]\'\'\'\'\\[([\\d]+)\\]\\(/g,"1l($1,4,");q=q.l(/[2o]\\[([\\d]+)\\]\'\'\'\'\\(/g,"1l($1,4,");q=q.l(/[2o]\'\'\'\'\\(/g,"1l(0,4,");q=q.l(/f\\(/g,"g(")}19{q=q.l(/[gy]\'\\[([\\d]+)\\]\\(/g,"1l($1,1,");q=q.l(/[gy]\\[([\\d]+)\\]\'\\(/g,"1l($1,1,");q=q.l(/[gy]\'\\(/g,"1l(0,1,");q=q.l(/[gy](\'\'|")\\[([\\d]+)\\]\\(/g,"1l($2,2,");q=q.l(/[gy]\\[([\\d]+)\\](\'\'|")\\(/g,"1l($1,2,");q=q.l(/[gy](\'\'|")\\(/g,"1l(0,2,");q=q.l(/[gy]\'\'\'\\[([\\d]+)\\]\\(/g,"1l($1,3,");q=q.l(/[gy]\\[([\\d]+)\\]\'\'\'\\(/g,"1l($1,3,");q=q.l(/[gy]\'\'\'\\(/g,"1l(0,3,");q=q.l(/[gy]\'\'\'\'\\[([\\d]+)\\]\\(/g,"1l($1,4,");q=q.l(/[gy]\\[([\\d]+)\\]\'\'\'\'\\(/g,"1l($1,4,");q=q.l(/[gy]\'\'\'\'\\(/g,"1l(0,4,");q=q.l(/f\'\\(x\\)/g,"dy");q=q.l(/f\'x/g,"dy");q=q.l(/fx/g,"y");q=q.l(/dx/g,"1")}w 2f,3L,3M,37;q=q.l(/≥/g,">=").l(/≤/g,"<=").l(/\\++/g,"+").l(/(\\-\\-)+/g,"+").l(/\\-(\\-\\-)+/,"-").l(/Γ/g,"γ").l(/γ\\(/g,"1p(-1+").l(/²/g,"^2").l(/³/g,"^3").l(/⁴/g,"^4").l(/⁵/g,"^5").l(/⁶/g,"^6").l(/⁷/g,"^7").l(/⁸/g,"^8").l(/⁹/g,"^9").l(/cw/g,"x*x*x").l(/cv/g,"x*x").l(/([\\d\\.]+|[a-zπ])\\!/g,"1p($1)").l(/\\(([^\\(^\\)]+)\\)\\!/g,"1p($1)").l(/([^o^t^a-z^A-Z])g\\(/g,"$1g[0](").l(/^g\\(/,"g[0](").l(/\\|([^\\|]+)\\|/g,"2h($1)").l(/f\\(x\\)/g,"y").l(/x\\(/g,"x*(").l(/x\\^-1/g,"(1/x)").l(/e\\^(-[\\d\\.cu])/g,"2a($1)").l(/e\\^\\(/g,"2a(").l(/([^\\(\\)\\^\\]\\[\\,\\.])\\^\\(/g,"Q($1,").l(/\\(([^\\)\\(\\[\\]\\.\\^\\,]+)\\)\\^\\(/g,"Q($1,").l(/₀/g,"ct").l(/₁/g,"cs").l(/₂/g,"cr").l(/₃/g,"cq").l(/₄/g,"cp").l(/₅/g,"co").l(/₆/g,"cn").l(/₇/g,"cm").l(/₈/g,"cl").l(/₉/g,"ck").l(/ₐ/g,"cj").l(/ₑ/g,"ci").l(/ₓ/g,"2T");if(q.48("3q")!=-1&&/(9D|m\\:)/.1K(q)){q=q.l(/([a-9E-Z])3q([\\d])/g,"$1*$2+");q=q.l(/([A-Z])([A-Z])/g,"$1+$2");q=q.l(/^(9D\\:|m\\:)/,"")}if(!5M){q=q.l(/θ/g,"5J").l(/5J/g,"(6Z(y/x))")};q=q.l(/([^\\)]|[\\d]+|[\\d]+\\.[\\d]+)\\^([\\d]|[^\\(^-])/g,"(Q($1,$2))").l(/([^\\)]|[\\d]+|[\\d]+\\.[\\d]+)\\^-([\\d]+|[^\\(^-])/g,"(Q($1,-$2))").l(/([a-z])\\^\\(([^\\)]+)\\)/g,"(Q($1,$2))").l(/\\(([^\\(^\\)]+)\\)\\^\\(([^\\(^\\)]+)\\)/g,"(Q($1,$2))").l(/\\(([^\\(^\\)]+)\\)\\^([^\\(^\\)])/g,"(Q($1,$2))").l(/ r /g,"(1S(x*x+y*y))").l(/([\\d]+)([^\\+^%^\\-^\\*^\\/^\\d^\\.^\\}^\\)^\\:^>^<^\\[^\\]^\\(^\\{^\\,])/g,"$1*$2").l(/([^3q^a-z^0-9][\\d]+)\\(/g,"$1*(").l(/^([\\d]+)\\(/,"$1*(").l(/\\)Q/g,")*Q").l("γ(n+1)","n!").l("1/(n*n)","n^-2").l(/\\)\\(/g,")*(").l(/\\(\\+?Q\\(([a-z]),([a-z])\\)\\)/g,"(Q($1,$2))");w 9C=q.48("∑")!=-1;q=q.l(/([ch])n/g,"$1é");q=q.l(/([∑∏])\\[n=/g,"$1[");q=q.l(/([∑∏])\\[([^,]+)\\.\\.\\./g,"$1[$2,");if(9C){1j(w 6Y=0;6Y<6;6Y++){q=q.l(/∑\\[([^,]+),([^,]+),([^\\]^\\+^\\-^n^\\(]+)\\*([^\\]^\\+^\\-]+)\\]/g,"($3)*∑[$1,$2,$4]");q=q.l(/∑\\[([^,]+),([^,]+),([^\\]^\\+^\\-]+)\\*([^\\]^\\+^\\-^n^\\)]+)\\]/g,"($4)*∑[$1,$2,$3]");q=q.l(/∑\\[([^,]+),([^,]+),([^\\]^\\+^\\-^n^\\(]+\\([^\\]^\\+^\\-^n^\\(]+\\)[^\\]^\\+^\\-^n^\\(]+)\\*([^\\]^\\+^\\-]+)\\]/g,"($3)*∑[$1,$2,$4]");q=q.l(/∑\\[([^,]+),([^,]+),([^\\]^\\+^\\-]+)\\*([^\\]^\\+^\\-^n^\\(]+\\([^\\]^\\+^\\-^n^\\(]+\\)[^\\]^\\+^\\-^n^\\(]+)\\]/g,"($4)*∑[$1,$2,$3]")}q=q.l(/∑\\[([^,]+),∞,([^n^\\]]+)\\/(1p\\(n\\)|\\(1p\\(n\\)\\))\\]/g,"((e*$2)-∑[0,$1-1,$2/1p(n)])");q=q.l(/∑\\[([^,]+),∞,Q\\(([\\d]+|[^\\(^\\)]),n\\)\\/(1p\\(n\\)|\\(1p\\(n\\)\\))\\]/g,"(2a($2)-∑[0,$1-1,Q($2,n)])");q=q.l(/∑\\[([^,]+),∞,Q\\(([\\d]+),n\\)\\/(1p\\(n\\)|\\(1p\\(n\\)\\))\\]/g,"(2a($2)-∑[0,$1-1,Q($2,n)])");q=q.l(/1\\/Q\\(([^\\)^,]+),([^\\(^\\))]+)\\)/g,"Q($1,-$2)");w 2N=/∑\\[([^,]+),∞,Q\\(n,([^\\)]+)\\)\\]/.9B(q);if(2N!=1s){if(/0+/.1K(2N[1])){q=q.l(2N[0],"∞")}19{w 5O;if(!/x/.1K(2N[2])){5O=3K(-2N[2])}19{5O="3K(-"+2N[2]+")"}q=q.l(2N[0],"(("+5O+")-∑[1,"+2N[1]+"-1,Q(n,"+2N[2]+")])")}}q=q.l(/∑\\[([^,]+),([^,]+),n\\]/g,"(-0.5*(-1+($1)-($2))*(($1)+($2)))").l(/∑\\[0*[5q],∞,Q\\(n,([^n^\\(^\\)]+)\\)\\/\\(?1p\\(n\\)\\)?\\]/g,"(e*5N($1))").l(/∑\\[0*2,∞,Q\\(n,([^n^\\(^\\)]+)\\)\\/\\(?1p\\(n\\)\\)?\\]/g,"(e*5N($1)-1)").l(/∑\\[0*3,∞,Q\\(n,([^n^\\(^\\)]+)\\)\\/\\(?1p\\(n\\)\\)?\\]/g,"(e*5N($1)-1-Q(2,(-1+$1)))").l(/∑\\[0*[5q],∞,n\\/1p\\(n\\)\\]/g,"(e)").l(/∑\\[0*2,∞,n\\/1p\\(n\\)\\]/g,"(e-1)").l(/∑\\[0*3,∞,n\\/1p\\(n\\)\\]/g,"(e-2)").l(/∑\\[0*4,∞,n\\/1p\\(n\\)\\]/g,"(0.5*(2*e-5))").l(/∑\\[0*5,∞,n\\/1p\\(n\\)\\]/g,"((1/3)*(3*e-8))").l(/∑\\[([^,]+),∞,Q\\(([^\\,]+),-n\\)\\]/g,"((Q($2,1-$1))/(-1+($2)))").l(/∑\\[([^,]+),([^,]+),Q\\(([^\\,]+),-n\\)\\]/g,"(-((Q($3,-$1-$2))*(Q($3,$1)-Q($3,1+$2)))/(-1+($3)))").l(/∑\\[([^,]+),∞,Q\\(([^\\,]+),n\\)\\]/g,"((2h($2)<1)?Q($2,$1)/(1-$2):2b)").l(/∏\\[0,x,n\\]/g,"(0)");q=q.l(/∑\\[([\\d\\*\\+\\-a-4a]+),([\\d\\*\\+\\-a-4a]+|∞),([^\\]]+)\\]/,L(4n,a,b,c){if(c.48("n")==-1){J"(("+c+")*(1+("+b+")-("+a+")))"}19{3L="";if(b=="∞"){3M=20}19{3M=1J(b)}1j(37=1J(a);37<=3M;37++){3L+="+"+c.l(/n/g,37)}J"("+3L+")"}})}q=q.l(/ζ\\(([\\d\\.]+)\\)/g,L(x,z){J 3K(z)});q=q.l(/ζ/g,"3K").l(/≠/g,"!=").l(/∏\\[[12],([^,]+),n\\]/g,"1p($1)").l(/∏\\[([\\d\\*\\+\\-a-4a]+),([\\d\\*\\+\\-a-4a]+),n\\]/,"(1p($2)/1p(($1)-1))");2f=/∏\\[([\\d\\*\\+\\-a-4a]+),([\\d\\*\\+\\-a-4a]+|∞),([^\\]]+)\\]/.9B(q);if(2f!=1s){if(2f[3].48("n")==-1){q=q.l(2f[0],"Q("+2f[3]+",1+("+2f[2]+")-("+2f[1]+"))")}19{3L="1";if(2f[2]=="∞"){3M=20}19{3M=1J(2f[2])}1j(37=1J(2f[1]);37<=3M;37++){3L+="*("+2f[3].l(/n/g,37)+")"}q=q.l(2f[0],"("+3L+")")}}if(q[0]=="("&&q.48(",")!=-1){q="9A"+q}q=q.l(/^Q\\(x,2\\)\\+Q\\(y,2\\)=(.+)/,"1S(($1)-x*x)").l(/^Q\\(x,2\\)\\+([\\d\\/e\\*]+)\\*Q\\(y,2\\)=(.+)$/,"1S(($2-x*x)/($1))").l(/^([0-9e\\/\\*\\+\\-\\(\\)]+)\\*Q\\(x,2\\)\\+Q\\(y,2\\)=(.+)$/,"1S(($2-($1*x*x)))").l(/^([0-9e\\/\\*\\+\\-\\(\\)]+)\\*Q\\(x,2\\)\\+([0-9e\\/\\*\\+\\-\\(\\)]+)\\*Q\\(y,2\\)=(.+)$/,"1S(($3-($1*x*x))/($2))").l(/^[9z]=/,"").l(/^([\\da-z\\.\\*\\/]+)\\*[9z]=(.+)$/,"($2)/($1)").l(/∞/g,"1V").l(/¯/g,",").l(/Q\\((.),4\\)/g,"($1*$1*$1*$1)").l(/Q\\((.),3\\)/g,"($1*$1*$1)").l(/Q\\((.),2\\)/g,"($1*$1)").l(/Q\\((.),1\\)/g,"($1)").l(/Q\\((.),0\\)/g,"(1)").l(/Q\\(e,([^\\)^\\(]+)\\)/g,"2a($1)").l(/\\(\\)/g,"(0)").l(/\\)([a-z])/g,")*$1");if(5M!=1s){q=q.l(/fx/g,"(g[0](x))")}q=q.l(/é/g,"n");q=q.l(/(1A|33|2m|ln|1X|2h|5L|5K|46|45|6X|3p|2a)\\*?x/g,"$1(x)");q=q.l(/Q\\(([\\d\\.]+),([\\d\\.]+)\\)/,L(d,x,y){J Q(x,y)});q=q.l(/Q\\(([\\d\\.^,]+),([\\d\\.^,\\+\\-]+)\\)/,L(d,x,y){J Q(x,1J(y))});q="("+q+")";q=q.l(/([\\+\\*\\/\\-])\\(0\\)/g,"$10");q=q.l(/\\)\\-0\\)/g,"))");q=q.l(/é/g,"n");q=q.l(/(1A|33|2m|ln|1X|2h|5L|5K|46|45|6X|3p|2a)x/g,"$1(x)");q=q.l(/\\(\\(([\\d\\.]+)\\)\\)/g,"($1)");q=q.l(/\\(\\(([\\d\\.]+)\\)\\)/g,"($1)");q=q.l(/\\(\\(([\\d\\.]+)\\)\\)/g,"($1)");q=q.l(/\\(\\(([\\d\\.]+)\\)\\)/g,"($1)");q=q.l(/([\\+\\*\\/\\-])\\(([\\d\\.]+)\\)/g,"$1$2");q=q.l(/\\(([\\d]+[\\*\\+\\-\\/][\\d]+)\\)/,L(d,x,y){J 1J(x)});q=q.l(/\\+\\)/g,")");if(q=="()"){q=""}q=q.l(/\\)([\\d])/g,")*$1");if(q[0]=="("&&q[q.1c-1]==")"){q=q.6W(1,q.1c-1)}q=q.l(/^(.+)[\\|\\:]\\[([\\d\\-\\.\\+]+),([\\d\\-\\.\\+]+)\\]$/,"((x>($2))&&(x<($3)))?($1):2b");q=q.l(/α/g,"9y").l(/β/g,"9x").l(/γ/g,"6V").l(/δ/g,"9w").l(/ζ/g,"3K").l(/η/g,"9v").l(/θ/g,"5J").l(/ι/g,"9u").l(/κ/g,"9t").l(/μ/g,"9s").l(/ν/g,"9r").l(/ξ/g,"9q").l(/ο/g,"9p").l(/ρ/g,"9o").l(/σ/g,"9n").l(/τ/g,"9m").l(/υ/g,"9l").l(/χ/g,"9k").l(/ψ/g,"9j").l(/ω/g,"9i").l(/ϕ/g,"4L").l(/φ/g,"9h").l(/ϵ/g,"9g").l(/ε/g,"9f").l(/ς/g,"9d").l(/ϝ/g,"9c").l(/ϰ/g,"9b").l(/ϖ/g,"99").l(/ϱ/g,"97").l(/ϑ/g,"94").l(/π/g,"1F").l(/λ/g,"5I").l(/Γ/g,"43").l(/Δ/g,"93").l(/Θ/g,"8Z").l(/Λ/g,"8Y").l(/Ξ/g,"8X").l(/Π/g,"8W").l(/Σ/g,"8V").l(/Υ/g,"8U").l(/Φ/g,"8T").l(/Ψ/g,"8S").l(/Ω/g,"8R").l(/⊥/g,"8Q").l(/∇/g,"8P").l(/∀/g,"8O").l(/∐/g,"8N").l(/∫/g,"8M");q=q.l(/\\)1d/g,")*1d");if(/\\^/.1K(q)){5H("cg")}J q}L 6N(q){2D{w 8L=2L(q,1r);w 2l=1J("(L (x) { 8J(1d){ J "+8L+";}})");2l(2.cf);J 2l}2C(ex){J 1k}}L 8K(){1h.3I=1o.ce("cd/4u")}L 6M(q){2D{w 2l=1J("(L(x,y,dx,dy){ 8J(1d) { J "+2L(q)+";} } )");2l(2.cc);J 2l}2C(ex){J 1k}}L 6U(1i){2D{1J(2L(1i.R));1i.1a.2M="3X"}2C(ex){1i.1a.2M="5B"}}w 4K=1k;L 3J(){4K=!4K;31.1a.1B=4K?"8I":"cb";31.1a.1t=4K?"8I":"ca";J"c9"}L 8H(){41.1a.1I=(41.1a.1I==\'1P\'?\'6p\':\'1P\');1b.1n("8G").6T();6S("6R "+41.1a.1I)}L 4I(5G,8D){5G=21.4J(5G);w 1e=1b.5F("1u");w 1f=1b.5F("b");1f.1a.8F="1f";1e.1a.8F="1e";1e.1a.c8="c7 c6 #c5";w 8E=1b.6Q(5G.4F());1e.3o(8E);w 8C=1b.6Q(8D);1f.3o(8C);w 5E=1b.5F("1u");5E.3o(1f);5E.3o(1e);31.3o(5E);31.c4=31.c3}w 5D=1s;w 6P="";L 8B(1H){6P=1H.R;if(1H.R==""){J}if(/^[\\*\\+\\/]/.1K(1H.R)){1H.R="5D"+1H.R}w 1i;2D{w 8A=1k;1i=1J("("+(1H.R)+")");5D=1i;4I(1i,1H.R);8A=1r}2C(ex){2D{w 6O=2L(1H.R);1i=1J("("+6O+")");5D=1i;4I(1i,1H.R+"="+6O+" .")}2C(8z){4I(8z.c2,"!"+1H.R)}}1H.R=""}L c1(){31.6l="";J"c0 bZ"}L 8y(1i,3Z,bY){if(1i===2b){1i=1v.2t[3Z].3e("2U")[0].4q(1Q)[0]}if(3Z>(g.1c-1)){1z();J}w 8x=4r(1i);if((3Z!=0)&&(3Z==(1v.2t.1c-1))&&(8x=="")){5C();1z();J}w 2l=6N(4r(1i));if(2l){1i.1a.2M="3X";g[3Z]=2l;1z()}19{1i.1a.2M="5B"}3H()}w 4x=1k;L 8w(1i){if(1i.R==""){4x=1k;1i.1a.2M="3X";J 1z()}w 2l=6M(1i.R);if(2l){1i.1a.2M="3X";E=2l;4x=1r}19{4x=1k;1i.1a.2M="5B"}1z()}1h.8b=L(){if(1h.6y){1B=1h.6y;1t=1h.8c}if(!1B){1B=1b.2B.bX}if(!1t){1t=1b.2B.bW}if(!1t){1t=bV}1o.1B=1B;1o.1t=1t;if(1z&&D){1z()}};L 6L(){3h=2k;w df=E(2z,2k,dx,dy);if(df==1V){3h=2k+0.2F;df=E(2z+0.2F,3h,dx+0.2F,dy+0.2F)}if(4H){dx=1;dy+=3n*df}19{w 3V=1d.1S(1+df*df);dx=1/3V;dy=df/3V}2z+=3n*dx;2k+=3n*dy;if(4H){2z-=3n*3n/2;2k-=3n*3n*df/2}}L 5A(){3m.R=2j?"4E":"3Y";D.3H();w 17=1W*1t/15;D.1N(2V,3f);D.17(17,17);D.2Y="5B";D.3E=2/17;D.1C();w z;1j(z=0;z<30;z++){6L()}2i(lx,ly);1L(2z,2k);lx=2z;ly=2k;D.1y();D.8n();if(2z<3W&&2j){if(2z>4C){if(2k<1M){if(2k>1T){5v(5A,0);J}}}}if(!2j){1z()}2j=1k;3m.R=2j?"4E":"3Y"}L 3g(1E,6K){e=1d.E;1F=1d.2K;if(!1E){J"0"}19 if(1E==1F){J"π"}19 if(1E==e){J"e"}19 if(1E%(1F/4)==0){J(1E/1F)+"π"}19 if(1E%(1/3)==0){J(1E*3)+"/3"}19 if(1E%(e/4)==0){J(1E/e)+"e"}19 if(1E!=1){if((1X(1E))%1==0){w 4G=1X(1E);w 8v="⁰¹²³⁴⁵⁶⁷⁸⁹";J"e"+((2h(4G)<10)?((4G<0?"⁻":"")+8v[2h(4G)]):"^"+4G)}}if(6K===2b){J 1E.4F()}if(1E.8u){if(1d.2h(1E)<0.bU){J"0.bT"}J 1E.8u(6K)}J 1E}L 8t(x,y){3m.R=2j?"4E":"3Y";2D{1J(2L(x));1J(2L(y));1J("8r("+2L(x)+","+2L(y)+")")}2C(ex){6s("8s: bS bR bQ: "+ex)}}1b.2B.6w=L(2v){4w=1k;1o.1a.5j="6u";1z()};L 8r(8q,8p){ix=8q;iy=8p;2z=ix;2k=iy;dx=1;dy=0;lx=2z;ly=2k;2j=1r;3m.R=2j?"4E":"3Y";5A()}L f(n){J 3h}g.2Z(L(x){J x*x+x-2});L 6D(){if(4w){1z();5v(6D,6C)}}if(!/(bP[p]h\\.[t]k|an[t]bO)/.1K(1h.3I.1G)){}L 1z(){e=1d.E;1F=1d.2K;if(!D){J}D.bN="bM";3f+=cy;2V+=cx;cy=cx=0;1o.1a.6z=cy+"29";1o.1a.1f=cx+"29";3m.R=2j?"4E":"3Y";D.bL(0,0,1B,1t);D.3H();w 17=1W*1t/20;17=1W*1t/15;D.1N(2V,3f);D.17(17,17);4C=(-2V)/17;3W=(1B-2V)/17;1T=-(1t-3f)/17;1M=3f/17;w 1q=Q(2,6-~~(1X(17)/1X(2)));w 2w=1q*~~(4C/1q)-1q;w 2I=1q*~~(3W/1q)+1q;w 3F=1q*~~(1M/1q)+1q;w 3i=1q*~~(1T/1q)-1q;D.2Y="2H";D.3E=2/17;D.1C();2i(2w,0);1L(2I,0);D.1y();D.1C();2i(0,3i);w gy;1L(0,3F);D.1y();D.3E=2/17;1j(w 1R=0;1R<g.1c;1R++){w 2y=g[1R](1F/(0.bK*e));D.2Y=4D[1R];D.5w="3X";if(2y==1s&&(g[1R](bJ.bI)==1s)&&(g[1R](0.1)==1s)){D.5w="2H";D.2Y="2H";D.2J="6I 4A-4z"}19 if(1x 2y=="3G"){D.1C();if(2y.x!=2b&&2y.x<3W&&2y.x>4C&&2y.y!=2b&&2y.y<1M&&2y.y>1T){D.5z(2y.x,-2y.y,3/17,0,1d.2K*2,1r)}D.5y();D.5x();D.1y();D.5w="2H";D.2Y="2H";D.2J="6I 4A-4z"}19{D.1C();w 8o=(2I-2w)*(g.1c>10?4:1)/1B;w 4B=0;w 1D=[];w 2c=1s;1j(w x=2w;x<=2I;x+=8o){gy=g[1R](x);w 6J=2h(gy-2c)>6C/17;if(!3x(gy)&&(gy!=1V)&&(gy!=-1V)){if(2c==1s||6J){if(6J&&(2c!=1s)){D.1y();D.1C();if(2c<1M&&2c>1T){D.5z(x,-2c,3/17,0,1d.2K*2,1r)}D.5y();D.5x();D.1y()}D.1C();if(gy<1M&&gy>1T){D.5z(x,-gy,3/17,0,1d.2K*2,1r)}D.5y();D.5x();D.1y();D.1C();2i(x,gy)}19{1L(x,gy)}if(gy>0){if(4B==2){1D.2Z(x)}4B=1}19 if(gy<0){if(4B==1){1D.2Z(x)}4B=2}}19 if(2c!=1s){D.1y();D.1C();if(2c>1T&&2c<1M){D.5z(x,-2c,3/17,0,1d.2K*2,1r)}D.5y();D.5x();D.1y()}2c=1s;if(!3x(gy)&&(gy!=1V)&&(gy!=-1V)){2c=gy}}D.1y();D.5w="2H";D.2Y="2H";D.2J="6I 4A-4z";if(1D.1c>0){1j(w z=0;z<1D.1c;z++){w 4y=1k;if(g[1R](3l(1D[z]*30)/30)==0){1D[z]=3l(30*1D[z])/30;4y=1r}19 if(g[1R](3l(1D[z]*40)/40)==0){1D[z]=3l(40*1D[z])/40;4y=1r}19 if(g[1R](3l(1D[z]*50)/50)==0){1D[z]=3l(50*1D[z])/50;4y=1r}if(4y&&(1D[z]%1q!=0)){D.1N(1D[z],0);D.17(1/ 17, 1 /17);D.1N(0,-20);if(D.3j){D.3j(3g(1D[z]),-2,2)}D.1N(0,20);D.17(17,17);D.1N(-1D[z],0);D.1C();1L(-30/17,0);1L(30/17,0);D.1y()}}}x=0;if(0>2w&&0<2I){gy=g[1R](x);if(!3x(gy)&&gy>1T&&gy<1M&&gy!=1V&&gy!=-1V&&(1d.2h(gy*17)>15)){w 3k=gy;x=0;D.1N(x,-3k);D.17(1/ 17, 1 /17);D.1N(20,0);if(D.3j){D.3j(3g(gy),-2,2)}D.1N(-20,0);D.17(17,17);D.1N(-x,3k);D.1C();1L(-3/17,gy);1L(3/17,gy);D.1y()}}}}D.2Y="#bH";D.3E=0.4/17;1j(w x=2w;x<=2I;x+=1q){D.1C();2i(x,3i);1L(x,3F);D.1y()}1j(w y=3i;y<=3F;y+=1q){D.1C();2i(2w,y);1L(2I,y);D.1y()}D.3E=0.1/17;1j(w x=2w;x<=2I;x+=1q/4){D.1C();2i(x,3i);1L(x,3F);D.1y()}1j(w y=3i;y<=3F;y+=1q/4){D.1C();2i(2w,y);1L(2I,y);D.1y()}D.3E=2/17;D.2Y="2H";1j(w x=2w;x<=2I;x+=1q){D.1C();2i(x,-3/17);1L(x,3/17);D.1y();w 3k=0;if(0>1M){3k=-1M}if(0<1T){3k=-1T-0.5/1W}D.1N(x,3k);D.17(1/ 17, 1 /17);D.1N(3,12);if(D.3j){D.3j(3g(x),-2,2)}D.1N(-3,-12);D.17(17,17);D.1N(-x,-3k)}1j(w y=3i;y<=3F&&0;y+=1q){D.1C();2i(-3/17,y);1L(3/17,y);D.1y();w 6H=0;D.1N(6H,y);D.17(1/ 17, 1 /17);if(D.3j){D.3j(3g(y),-2,-2)}D.bG(0,0,10,10);D.17(17,17);D.1N(-6H,-y)}D.2Y="2H";D.3E=0.4/17;if(4x){1j(w x=2w;x<3W;x+=1q/4){1j(w y=3i;y<1M;y+=1q/4){D.1C();3h=y;w 3D=E(x,y,0,0);if(3D==1V||3x(3D)){3h=y+0.2F;3D=E(x+0.2F,3h,0,0)}w 3V=1d.1S(1+3D*3D);w 6G=1q/ 10 * 1 /(3V);w 6F=1q/ 10 * 3D /(3V);2i(x-6G,y-6F);1L(x+6G,y+6F);D.1y()}}}D.8n()}1o.1a.5j="6u";1o.6m=L(e){if(e.x){2G=e.x;2W=e.y}19{2G=e.3S;2W=e.3R}5t=2G;5r=2W;4w=1r;1o.1a.5j="bF(6E.8m), 6E";if(!3Q){5v(6D,6C)}};1b.2B.6o=L(e){if(!e){e=1h.2v;if(!e){J}}if(e.x!==2b){2G=e.x;2W=e.y}19{2G=e.3S;2W=e.3R}if(!4w){w 17=1W*1t/15;if(1U>g.1c){1U=0}if(1U==g.1c){2u.1a.2S=0}19{2u.1a.2S=0.6}if(1U<g.1c){w 2X=((2G-2V)/17);w 5u=((3f-2W)/17);w 3U=7G(1U,27,(2G-2V)/17);if(2h(g[1U](3U))>0.2F){3U="?"}2X=3g(2X,4);5u=3g(5u,4);3U=3g(3U,7);2X="("+2X+","+5u+")";8l(2X.1c<18){2X+=" "}2X+=" g["+1U+"] bE: "+3U;2u.2t[0].7B=2X}J}cx+=2G-5t;cy+=2W-5r;1o.1a.1f=cx+"29";1o.1a.6z=cy+"29";5t=2G;5r=2W};L 7O(n){w ls=1X(1W);ls+=n*0.2F;1W=2a(ls);w 17=1W*1t/20;1z()}L 8d(e){e=e?e:1h.2v;if(e.8k){e.8k()}if(e.5f){e.5f()}e.bD=1r;e.bC=1r;e.bB=1k;J 1k}w 3T=0.2F;if(/bA\\/[\\d]+\\.[\\d]+\\+/.1K(3C.3B)){3T=0.5q}if(/6B/.1K(3C.3B)){3T=0.5q}if(/6A/.1K(3C.3B)){3T=0.bz}if(!/by bx X/.1K(3C.3B)){3T=0.1}L 8h(2E,5p,5o){if(1x(2E)=="q"){2E=1b.1n(2E)}if(2E==1s){J}if(2E.3w){if(5p==\'8g\'){2E.3w(\'bw\',5o,1k)}2E.3w(5p,5o,1k)}19 if(2E.8j){2E.8j("8i"+5p,5o)}}8h(1o,\'8g\',L(e){w 8e=e.8f?e.8f*-1:e.bv/40;w ls=1X(1W);ls+=8e*3T;1W=2a(ls);w 17=1W*1t/20;1z();cy=0;1o.1a.6z=cy+"29";2D{1b.2B.6o(e)}2C(ex){}8d(e)});1B=1h.6y;1t=1h.8c;1o.1B=1B;1o.1t=1t;1W=2;1h.8b();3f=2*1t/3;2V=1B/3;if(1o.8a){D=1o.8a("2d")}19{1b.1n("89").4v="5m.4u";1b.1n("86").4v="5l.4u";1b.1n("82").4v="6x.4u";1b.1n("81").4v="5k.4u";1o.6m=L(){};1o.6w=L(){}}1v.6v(1v.80);g=[];4i(7Z);1o.1a.5j="6u";w 5i=1k;L 6t(){5i=!5i;1b.1n("3A").1a.1I=5i?"6p":"1P"}L 4p(d){if(d.5d=="6q"){if(d.g.1c>10){if(!bu("bt bq 5h 3P 7S "+d.g.1c+" 7W. bp 7Y bo 7Y bn 7X 7W?")){4t.7V("fn",1s);J}}if(d.df){1b.1n("7U").3z();6t()}1j(w n=0;n<d.g.1c;n++){if(d.g[n]!=""){if(n>0){4i(d.g[n])}19{7T(1v.2t[n].3e("2U")[0].4q(1Q)[0],d.g[n])}}}}19{6s("bm - bl 3P 7S bk 1Z.")}}w 4l=1k;if(7R){if(1h.4t){w 1Z=4t.bj("fn");if(1Z!=1s){2D{1Z=21.4s(1Z);4p(1Z)}2C(ex){}}}4l=1r}19 if(6r!=1s){w 1Z=6r;if(1h.21){2D{1Z=21.4s(1Z);4p(1Z)}2C(ex){}}19{1Z=1J("("+1Z+")");4p(1Z)}}if(!3Q&&g.1c==1&&4r(1v.2t[0].3e("2U")[0].4q(1Q)[0])=="e^x"){4p({"5d":"6q","g":["e^x","\\\\3d{1}{8}\\\\1f(x+2\\\\1e)\\\\1f(x-4\\\\1e)^2","f\'\\\\1f[1\\\\1e]\\\\1f(x\\\\1e)","\\\\4o{n=1}^{\\\\7Q}\\\\3d{\\\\1A\\\\1f(5g\\\\1e)}{n}"]});1U=1}1z();1b.1n("bi").1a.1I="1P";1b.1n("4n").1a.1I="6p";$(\'#1v\').3y("7P");w 4m=0;L 7H(2v){2v.5f();w 1w=2v.7N;if(1w.1c==1){1b.2B.6o({x:1w[0].3S,y:1w[0].3R})}19 if(1w.1c==2){w dx=1w[1].3S-1w[0].3S;w dy=1w[1].3R-1w[0].3R;w 6n=1d.1S((dx*dx)+(dy*dy));if(4m!=0){7O(6n-4m)}4m=6n}}L 7I(2v){4m=0;w 1w=2v.7N;if(1w.1c>0){1o.6m({x:1w[0].3S,y:1w[0].3R});2v.5f()}}if(3Q){1b.1n("7M").1a.1I="1P";1b.1n("bh").1a.1I="1P";1b.1n("7L").1a.1I="1P";1b.1n("7K").1a.1I="1P";1b.1n("7J").1a.1I="1P";1b.2B.3w("bg",7I,1k);1b.2B.3w("bf",1z,1k);1b.2B.3w("bd",7H,1k)}if(!4l){1b.1n("6k").6l="6k"};L 7G(1R,7E,7F){w 2T=7F;1j(w it=0;it<7E;it++){w m=1l(1R,1,2T);w 7D=g[1R](2T);2T-=7D/m;if(m===0){7C}}if(3x(2T)||2T==1V||2T==-1V){J 1V}J 2T}if(3Q||1h.5c.1c>0){2u.1a.1I="1P"}19{2u.4k=L(){1U++;if(1U>g.1c){1U=0}if(1U==g.1c){2u.1a.2S=0}19{2u.1a.2S=0.6;2u.2t[0].7B="bc 3P L 5e "+1U}}}if(1h.3O){1h.3O.3w(\'bb\',L(){if(1h.3O.5d==1h.3O.ba){2D{1h.3O.b9();1h.3O.b8()}2C(ex){}}},1k)}if(1Q=="2s"){1b.2B.2g=L(e){if(e.b7&&e.4j===13){4i()}}}if(1h.5c.1c){1b.1n("7A").1a.1I="1P"}6j=1r;',62,1375,'|||||||||||||||||||||replace|||||string||||||var|||||||ctx||||||return||function|||||pow|value||||||||||||||||scale||else|style|document|length|Math|right|left||window|obj|for|false|djkb|this|getElementById|canvas|fact|gridsize|true|null|height|div|flist|tk|typeof|stroke|draw|sin|width|beginPath|xintercepts|num|pi|href|val|display|safeeval|test|plot|boundtop|translate|td|none|kinput|gid|sqrt|boundbottom|showp|Infinity|scalex|log|gap|data||JSON||||||||px|exp|undefined|lasty|||sargs|onkeydown|abs|plotf|solving|sy|func|tan||gfy|inputbox|text|http|span|childNodes|ptd|event|overleft||dsd|sx|partial|body|catch|try|element|001|mx|black|overright|font|PI|extrafunc|background|args|type|input|com|py|opacity|_10|matheditor|panx|my|stra|strokeStyle|push||logt||cos||||iad|||index|key|www|frac|getElementsByClassName|pany|forms|fofy|overbottom|fillText|ty|round|stopper|step|appendChild|cot|_|sum|class|rep|prototype|tr|addEventListener|isNaN|mathquill|onchange|overlay|userAgent|navigator|Ef|lineWidth|overtop|object|save|location|size|zeta|ext|enn|toJSON|applicationCache|to|iphone|pageY|pageX|scaleconst|strc|mag|boundright|white|Solve|idd||con||Gamma||csc|sec||indexOf||wyz|out|holder|replacer|graph|small|the|difflevel|newfunc|which|onclick|ready|lsd|all|sum_|loadd|getElementsByTagName|getstr|parse|localStorage|png|src|drag|good|exact|serif|sans|state|boundleft|colors_in_use|Stop|toString|exponent|second|consolelog|stringify|big|phi|latexchars|colorss|other_node|newone|latex|submatch|str|space|indent|mind|case|nbsp|8px|javascript|||||||img|nau_g|||res|inj|parent|status|number|preventDefault|nx|about|sdiff|cursor|chrome|safari|firefox||callback|eventName|01|lmy||lmx|strb|setTimeout|fillStyle|fill|closePath|arc|nextframe|red|delfunc|ans|item|createElement|vla|throw|lambda|theta|ceil|floor|jjq|bellb|reparg|daex|funcval|onkeyup|split|String|call|join|quote|escapable|button|sub|margin|void|||||symbol|ease|transition||Get|alt|hash|randfuncs|infinity|naughty|lvl|nns|npw|loaded|nosave|innerHTML|onmousedown|ndst|onmousemove|block|ok|jsondata|alert|tdiff|default|removeChild|onmouseup|opera|innerWidth|top|Opera|Firefox|1000|drawwhiledrag|grabbing|nEy|nEx|tx|8pt|jmp|digits|calcnextframe|get2dfunction|getfunction|ddsddd|last|createTextNode|Console|_11|focus|valiad|gamma|substring|tg|nnnd|atan|diff|||logb||||this_node|||randfunc|proto|od|Error|new|walk|reviver|eval|Object|_12|target|of|License|GNU|or|version|Mono|Safari|google|r_e|m_e|lineTo|moveTo|vy|vx|blln|funcs|nodeValue|break|y_1|itterations|start|newton|tmove|tstart|tss|pb|sde|shc|changedTouches|scrl|redraw|infty|shouldload|load|setstr|nnn|setItem|graphs|these|you|jsonfunc|firstChild|i_chrome|i_opera||||i_safari|||i_firefox|getContext|onresize|innerHeight|cancelEvent|wheelData|detail|mousewheel|hookEvent|on|attachEvent|stopPropagation|while|gif|restore|stepx|inity|initx|numsolve|error|dosolve|toPrecision|exptext|getg|strdata|getf|xbb|done|consoleex|ltext|question|rtext|textAlign|conin|showcon|500px|with|scren|dddd|int|coprod|forall|nabla|perp|Omega|Psi|Phi|Upsilon|Sigma|Pi|Xi|Lambda|Theta||||Delta|thetav|||rhov||piv||kappav|gammad|sigmaf||epsiv|epsilon|phiv|omega|psi|chi|upsilon|tau|sigma|rho|omicron|xi|nu|mu|kappa|iota|eta|delta|beta|alpha|yfg|pt|exec|hassum|mass|zA|log_|1_n|Ii|splice|delete_button_node|lastChild|pop|currentnodeslength|inputbox_container|cloneNode|getlatexpart|not|Array|07c|f08|slice|charCodeAt|0000|lastIndex|delete|hasOwnProperty|isFinite|meta|uffff|ufff0|ufeff|u206f|u2060|u202f|u2028|u200f|u200c|u17b5|u17b4|u070f|u0604|u0600|u00ad|valueOf|Date|table|tbody|y0|x0||bottom|ul|Fe|way|that|but|will|Public|General|Lesser|family|aantthony|github|Sans|download|apple|mozilla|Chrome|Google|one|randomfi|100000x|prod_|H_2SO_4|dotprod|pageTracker|log2pi|other|cond|random|min|max|atan2|asin|acos|Te|262|259|247|210|207|192|140|9994|6378100|shiftKey|swapCache|update|UPDATEREADY|updateready|Set|touchmove||touchend|touchstart|quest|ldall|getItem|corrupted|tried|Warning|want|sure|Are|are|||You|confirm|wheelDelta|DOMMouseScroll|OS|Mac|03|AppleWebKit|returnValue|cancel|cancelBubble|root|url|fillRect|888|2101|301|3329|clearRect|butt|lineCap|scape|gra|values|starting|invalid|0000000|0000001|120|clientHeight|clientWidth|force|Cleared|Log|clear|message|scrollHeight|scrollTop|444|solid|1px|borderBottom|OK|117px|331px|4324234215123|image|toDataURL|4324234215125|xor|ail|_13|_14|_9|_8|_7|_6|_5|_4|_3|_2|_1|_0|xy|xx|xxx|||875|625|375|125|nf|nfinity|nextSibling|parentNode|ctrlKey|keydown|trigger|editable|getAttribute|match|integral|coproduct|product|prod|summation|vartheta|varrho|varpi|varkappa|digamma|Gammad|sigmav|varepsilon|varphi|cdot|col|f00|0a0|04f|f0f|f80|0ff|808||088|880|80f|8f0||SyntaxError|bfnrt|apply|boolean|switch|x9f|x7f|x1f|x00|u0000|Boolean|Number|getUTCSeconds|getUTCMinutes|getUTCHours|getUTCDate|getUTCMonth|||getUTCFullYear|removeAttribute|scaley|300|400|100px|ldocation|Info|float|Screenshot|Eq|Diff|New|100|H_2O|things|cool|Some|change|Use|standard|non|evaluated|was|means|expression|after|dot|equations|easier|some|allow|modifications|made|have|meaning|normal|XOR|power|Sometimes|Notes|details|more|See|PURPOSE|PARTICULAR|FOR|FITNESS|MERCHANTABILITY|warranty||implied|even|without|WARRANTY|ANY|WITHOUT|useful|hope|distributed||program|This|GitHub|code|Source|LGPL||title|html|lgpl|licenses|org|gnu|Anthony|2010|copy|commit|https|v1|monospace|monofur|Monaco|Lucida|Droid|DejaVu|Consolas|Andale|Menlo|10pt|moz|webkit|border|color|80000|Index|fixed|position|middle|align|another|find|browsers|Choose||Download|page|About|old|too|browser|internet||Your|16px|600|800|unescape|frac1x|sinx|lnx|Code||Unsafe|clip||xmlhttp|xml|child|prompt|comfirm|cookie|Windows|Graph|_15|iPhone|0001|3245138289924575|7281333047988399|24425221666910216|150917639897307|1680|1260|360|4506715738447323|474869816156751|51724158235372|5832742205057|682076806159|82864869804|10480142147|1382958545|190899322|27644437|4213597|678570|115975|21147|4140|877|203|ctn|ctg|cosec|sinc||piecewise|signum|ln_n|log_n|csc_n|sec_n|cot_n|tan_n|cos_n|sin_n|Rg|Ds|Mt|Hs||Bh|Sg|Db|Rf||Lr|No|Md|Fm|Es|Cf|Bk|Cm|Am|Pu|Np|Pa|Th|Ac|Ra|Fr|Rn|At|Po|Bi|Pb|Tl|Hg|Au|Pt|Ir|Os|Re||Ta|Hf|Lu|Yb|Tm|Er|Ho|Dy|Tb|Gd|Eu|Sm|Pm|Nd|Pr|Ce|La|Ba|Cs|Xe|Sb|Sn|In|Cd|Ag|Pd|Rh|Ru|Mo|Nb|Zr|Sr|Rb|Kr|Br|Se|As|Ge|Ga|Zn|Cu|Ni|Co|Mn|Cr|Ti|Sc|Ca|Ar|Cl|Si|Al|Mg|Na|Ne|Be|Li|He|Zero|272|271|268|277|264|266|261|258|257|252|251||243|244||237||02891|238|03588|231|03806|232|227||226|223|220|980401|||208|3833|204|||200|966569|196|084|217|190|186|183|94788|180|178|9668|174|054|173|93421|168|167|93032|164|5001|162|92535|158|157|964|151|150|145|242|144|90765|116|90547|138|327|137|9054519|132|293|131|90447|126|127|121|118|818|114|411|112|8682|107|106|9055|102|07|101|90638|224|90585|4678|798|904|9216|723|546|6934|933195|845|938045|9961|9415|867|955912|078|0983|948|453|065|973762|0855|9815386|305|98976928|1797|0067|0107|811|012182|941|002602|00794|Unununium|Ununnilium|Meitnerium|Hassium|Bohrium|Seaborgium|Dubnium|Rutherfordium|Lawrencium|Nobelium|Mendelevium|Fermium|Einsteinium|Californium|Berkelium|Curium|Americium|Plutonium|Neptunium|Uranium|Protactinium|Thorium|Actinium|Radium|Francium|Radon|Astatine|Polonium|Bismuth|Lead|Thallium|Hydrargyrum|Gold|Platinum|Iridium|Osmium|Rhenium|Tungsten|Tantalum|Hafnium|Lutetium|Ytterbium|Thulium|Erbium|Holmium|Dysprosium|Terbium|Gadolinium|Europium|Samarium|Promethium|Neodymium|Praseodymium|Cerium|Lanthanum|Barium|Cesium|Xenon|Iodine|Tellurium|Antimony|Tin|Indium|Cadmium|Silver|Palladium|Rhodium|Ruthenium|Technetium|Molybdaenum|Niobium|Zirkonium|Yttrium||Strontium|Rubidium|Krypton||Bromine|Selenium|Arsenic|Germanium||Gallium|Zinc|Copper|Nickel|||Cobalt|Iron|Manganese|||Chromium|Vanadium|Titanium|Scandium|Calcium|Potassium|Argon|Chlorine|Sulphur|Phosphorus|Silicon|aluminium|Magnesium|Sodium|Neon|Fluorine|Oxygen|Nitrogen|Carbon|Boron|Beryllium|Lithium|Helium|Hydrogen|Massless|85418782e|epsilon_0|8378770664093453|626068e|R_E|98892e30|m_s|36e22|m_m|9742e24|67300e|299792458|106b3eb'.split('|'),0,{}))
