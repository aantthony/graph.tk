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
 * Copyright 2010 Jay and Han (laughinghan@gmail.com)
 * License, Usage and Readme at http://mathquill.com
 */
 /****************************
 * Important opening stuff.
 ***************************/

(function($){ //takes in the jQuery function as an argument

//Note: if the following is no longer on line 12 of build/mathquill.js, please modify publish.sh accordingly
/*$('head').prepend('<link rel="stylesheet" type="text/css" href="http://laughinghan.github.com/mathquill/mathquill.css">');*/

function todo(){ alert('BLAM!\n\nAHHHHHH!\n\n"Oh god, oh god, I\'ve never seen so much blood!"\n\nYeah, that doesn\'t fully work yet.'); };

/*************************************************
 * Abstract base classes of blocks and commands.
 ************************************************/

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
function MathCommand(cmd, html_template, replacedFragment)
{
  if(!arguments.length)
    return;

  this.cmd = cmd;
  if(html_template)
    this.html_template = html_template;

  this.jQ = $(this.html_template[0]).data('[[mathquill internal data]]', {cmd: this});
  this.initBlocks(replacedFragment);
}
MathCommand.prototype = $.extend(new MathElement, {
  initBlocks: function(replacedFragment)
  {
    //single-block commands
    if(this.html_template.length === 1)
    {
      this.firstChild = this.lastChild =
        this.jQ.data('[[mathquill internal data]]').block =
          (replacedFragment && replacedFragment.blockify()) || new MathBlock;
      this.firstChild.parent = this;
      this.firstChild.jQ = this.jQ.append(this.firstChild.jQ);
      return;
    }
    //otherwise, the succeeding elements of html_template should be child blocks
    var newBlock, prev, num_blocks = this.html_template.length;
    this.firstChild = newBlock = prev =
      (replacedFragment && replacedFragment.blockify()) || new MathBlock;
    newBlock.parent = this;
    newBlock.jQ = $(this.html_template[1]).data('[[mathquill internal data]]',
      {block: newBlock}).append(newBlock.jQ).appendTo(this.jQ);
    newBlock.setEmpty();
    for(var i = 2; i < num_blocks; i += 1)
    {
      newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.prev = prev;
      prev.next = newBlock;
      prev = newBlock;

      newBlock.jQ = $(this.html_template[i]).data('[[mathquill internal data]]',
        {block: newBlock}).appendTo(this.jQ);
      newBlock.setEmpty();
    }
    this.lastChild = newBlock;
  },
  latex: function()
  {
    return this.cmd + this.reduceChildren(function(initVal){
      return initVal + '{' + (this.latex() || ' ') + '}';
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
    cursor.appendTo(this.reduceChildren(function(prev){
      return prev.isEmpty() ? prev : this;
    }, this.firstChild));
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
    this.jQ.removeClass('hasCursor');
    if(this.isEmpty())
      this.jQ.addClass('empty');
    return this;
  },
  removeEmpty:function(cursorJQ)
  {
    this.jQ.addClass('hasCursor');
    if(this.isEmpty())
    {
      this.jQ.removeClass('empty').append(cursorJQ);
      return false;
    }
    return true;
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
/***************************
 * Commands and Operators.
 **************************/

var CharCmds = {}, LatexCmds = {}; //single character commands, LaTeX commands

function proto(parent, child) //shorthand for prototyping
{
  child.prototype = parent.prototype;
  return child;
}

function SupSub(cmd, html, replacedFragment)
{
  MathCommand.call(this, cmd, [ html ], replacedFragment);
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
  return this.cmd + '{' + (latex || ' ') + '}';
};
SupSub.prototype.respace = function()
{
  if(this.prev && (this.prev.cmd === '\\int '
    || (this.prev instanceof SupSub && this.prev.cmd != this.cmd
      && this.prev.prev && this.prev.prev.cmd === '\\int ')))
  {
    if(!this.limit)
    {
      this.limit = true;
      this.jQ.addClass('limit');
    }
  }
  else
  {
    if(this.limit)
    {
      this.limit = false;
      this.jQ.removeClass('limit');
    }
  }
  if(this.respaced = this.prev instanceof SupSub && this.prev.cmd != this.cmd && !this.prev.respaced)
    if(this.limit && this.cmd === '_')
      this.jQ.css({
        left: -.25-this.prev.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2)+'em',
        marginRight: .1-Math.min(this.jQ.outerWidth(), this.prev.jQ.outerWidth())/+this.jQ.css('fontSize').slice(0,-2)+'em' //1px adjustment very important!
      });
    else
      this.jQ.css({
        left: -this.prev.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2)+'em',
        marginRight: .1-Math.min(this.jQ.outerWidth(), this.prev.jQ.outerWidth())/+this.jQ.css('fontSize').slice(0,-2)+'em' //1px adjustment very important!
      });
  else if(this.limit && this.cmd === '_')
    this.jQ.css({
      left: '-.25em',
      marginRight: ''
    });
  else if(this.cmd === '^' && this.next && this.next.cmd === '\\sqrt')
    this.jQ.css({
      left: '',
      marginRight: Math.max(-.3, .1-this.jQ.outerWidth()/+this.jQ.css('fontSize').slice(0,-2))+'em'
    }).addClass('limit');
  else
    this.jQ.css({
      left: '',
      marginRight: ''
    });
  return this;
};

LatexCmds.subscript = LatexCmds._ = proto(SupSub, function(replacedFragment)
{
  SupSub.call(this, '_', '<sub></sub>', replacedFragment);
});
LatexCmds.superscript = LatexCmds.supscript = LatexCmds['^'] =
  proto(SupSub, function(replacedFragment)
{
  SupSub.call(this, '^', '<sup></sup>', replacedFragment);
});

function Fraction(replacedFragment)
{
  MathCommand.call(this, '\\frac', undefined, replacedFragment);
  this.jQ.append('<span style="width:0">&nbsp;</span>');
}
Fraction.prototype = new MathCommand;
Fraction.prototype.html_template = [
  '<span class="fraction"></span>',
  '<span class="numerator"></span>',
  '<span class="denominator"></span>'
];

LatexCmds.frac = LatexCmds.fraction = Fraction;

function LiveFraction()
{
  Fraction.apply(this, arguments);
}
LiveFraction.prototype = new Fraction;
LiveFraction.prototype.placeCursor = function(cursor)
{
  if(this.firstChild.isEmpty())
  {
    var prev = this.prev;
    while(prev && !(prev instanceof BinaryOperator || prev instanceof TextBlock
        || prev instanceof BigSymbol)) //lookbehind for operator
      prev = prev.prev;
    if(prev instanceof BigSymbol)
      if(prev.next instanceof SupSub)
      {
        prev = prev.next;
        if(prev.next instanceof SupSub && prev.next.cmd != prev.cmd)
          prev = prev.next;
      }
    if(prev !== this.prev)
    {
      var newBlock = new MathFragment(this.parent, prev, this).blockify();
      newBlock.jQ = this.firstChild.jQ.empty().removeClass('empty').append(newBlock.jQ).data('[[mathquill internal data]]', { block: newBlock });
      newBlock.next = this.lastChild;
      newBlock.parent = this;
      this.firstChild = this.lastChild.prev = newBlock;
    }
  }
  cursor.appendTo(this.lastChild);
};

CharCmds['/'] = LiveFraction;

function SquareRoot(replacedFragment)
{
  MathCommand.call(this, '\\sqrt', undefined, replacedFragment);
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
SquareRoot.prototype.html_template = [
  '<span><span class="sqrt-prefix">&radic;</span></span>',
  '<span class="sqrt-stem"></span>'
];

LatexCmds.sqrt = SquareRoot;

// Round/Square/Curly/Angle Brackets (aka Parens/Brackets/Braces)
function Bracket(open, close, cmd, end, replacedFragment)
{
  MathCommand.call(this, '\\left'+cmd,
    ['<span><span class="paren">'+open+'</span><span></span><span class="paren">'+close+'</span></span>'],
    replacedFragment);
  this.end = '\\right'+end;
  this.firstChild.jQ.change(function()
  {
    var block = $(this);
    block.prev().add(block.next()).css('fontSize', block.height()/(+block.css('fontSize').slice(0,-2)*1.02)+'em');
  });
}
Bracket.prototype = new MathCommand;
Bracket.prototype.initBlocks = function(replacedFragment)
{
  this.firstChild = this.lastChild =
    (replacedFragment && replacedFragment.blockify()) || new MathBlock;
  this.firstChild.parent = this;
  this.firstChild.jQ = this.jQ.children(':eq(1)')
    .data('[[mathquill internal data]]', {block: this.firstChild})
    .append(this.firstChild.jQ);
};
Bracket.prototype.latex = function()
{
  return this.cmd + this.firstChild.latex() + this.end;
};

LatexCmds.lbrace = CharCmds['{'] = proto(Bracket, function(replacedFragment)
{
  Bracket.call(this, '{', '}', '\\{', '\\}', replacedFragment);
});
LatexCmds.langle = LatexCmds.lang = proto(Bracket, function(replacedFragment)
{
  Bracket.call(this,'&lang;','&rang;','\\langle ','\\rangle ',replacedFragment);
});

// Closing bracket matching opening bracket above
function CloseBracket(open, close, cmd, end, replacedFragment)
{
  Bracket.apply(this, arguments);
}
CloseBracket.prototype = new Bracket;
CloseBracket.prototype.placeCursor = function(cursor)
{
  //if I'm at the end of my parent who is a matching open-paren, and I was not passed
  //  a selection fragment, get rid of me and put cursor after my parent
  if(!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
    this.firstChild.setEmpty().jQ.change();
};

LatexCmds.rbrace = CharCmds['}'] = proto(CloseBracket, function(replacedFragment)
{
  CloseBracket.call(this, '{','}','\\{','\\}',replacedFragment);
});
LatexCmds.rangle = LatexCmds.rang = proto(CloseBracket, function(replacedFragment)
{
  CloseBracket.call(this,'&lang;','&rang;','\\langle ','\\rangle ',replacedFragment);
});

function Paren(open, close, replacedFragment)
{
  Bracket.call(this, open, close, open, close, replacedFragment);
}
Paren.prototype = Bracket.prototype;

LatexCmds.lparen = CharCmds['('] = proto(Paren, function(replacedFragment)
{
  Paren.call(this, '(', ')', replacedFragment);
});
LatexCmds.lbrack = LatexCmds.lbracket = CharCmds['['] = proto(Paren, function(replacedFragment)
{
  Paren.call(this, '[', ']', replacedFragment);
});

function CloseParen(open, close, replacedFragment)
{
  CloseBracket.call(this, open, close, open, close, replacedFragment);
}
CloseParen.prototype = CloseBracket.prototype;

LatexCmds.rparen = CharCmds[')'] = proto(CloseParen, function(replacedFragment)
{
  CloseParen.call(this, '(', ')', replacedFragment);
});
LatexCmds.rbrack = LatexCmds.rbracket = CharCmds[']'] = proto(CloseParen, function(replacedFragment)
{
  CloseParen.call(this, '[', ']', replacedFragment);
});

function Pipes(replacedFragment)
{
  Paren.call(this, '|', '|', replacedFragment);
}
Pipes.prototype = new Paren;
Pipes.prototype.placeCursor = function(cursor)
{
  if(!this.next && this.parent.parent && this.parent.parent.end === this.end && this.firstChild.isEmpty())
    cursor.backspace().insertAfter(this.parent.parent);
  else
    cursor.appendTo(this.firstChild);
};

LatexCmds.lpipe = LatexCmds.rpipe = CharCmds['|'] = Pipes;

function TextBlock(replacedText)
{
  if(replacedText instanceof MathFragment)
    this.replacedText = replacedText.remove().jQ.text();
  else if(typeof replacedText === 'string')
    this.replacedText = replacedText;
  MathCommand.call(this, '\\text');
}
TextBlock.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="text"></span>'],
  initBlocks: function()
  {
    this.firstChild = this.lastChild =
      this.jQ.data('[[mathquill internal data]]').block = new InnerTextBlock;
    this.firstChild.parent = this;
    this.firstChild.jQ = this.jQ.append(this.firstChild.jQ);
  },
  placeCursor: function(cursor)
  {
    (this.cursor = cursor).appendTo(this.firstChild);
    if(this.replacedText)
      for(var i = 0; i < this.replacedText.length; i += 1)
        this.write(this.replacedText.charAt(i));
  },
  write: function(ch)
  {
    this.cursor.insertNew(new VanillaSymbol(ch));
  },
  keydown: function(e)
  {
    //backspace and delete and ends of block don't unwrap
    if(!this.cursor.selection &&
      ((e.which === 8 && !this.cursor.prev) ||
      (e.which === 46 && !this.cursor.next)))
    {
      if(this.isEmpty())
        this.cursor.insertAfter(this);
      return false;
    }
    return this.parent.keydown(e);
  },
  keypress: function(e)
  {
    this.cursor.deleteSelection();
    var ch = String.fromCharCode(e.which);
    if(ch === '$')
      if(this.isEmpty())
        this.cursor.insertAfter(this).backspace().insertNew(new VanillaSymbol('\\$','$'));
      else if(!this.cursor.next)
        this.cursor.insertAfter(this);
      else if(!this.cursor.prev)
        this.cursor.insertBefore(this);
      else //split apart
      {
        var next = new TextBlock(new MathFragment(this.firstChild, this.cursor.prev));
        next.placeCursor = function(cursor) // ********** REMOVEME HACK **********
        {
          this.prev = null;
          delete this.placeCursor;
          this.placeCursor(cursor);
        };
        next.firstChild.removeEmpty = function(){ return this; };
        this.cursor.insertAfter(this).insertNew(next);
        next.prev = this;
        this.cursor.insertBefore(next);
        delete next.firstChild.removeEmpty;
      }
    else
      this.write(ch);
    return false;
  }
});
function InnerTextBlock(){}
InnerTextBlock.prototype = $.extend(new MathBlock, {
  setEmpty: function(cursor)
  {
    this.jQ.removeClass('hasCursor');
    if(this.isEmpty())
    {
      var textblock = this.parent, cursor = textblock.cursor;
      if(cursor.parent === this)
        this.jQ.addClass('empty');
      else
      {
        cursor.hide();
        textblock.remove();
        if(cursor.next === textblock)
          cursor.next = textblock.next;
        else if(cursor.prev === textblock)
          cursor.prev = textblock.prev;
        cursor.show().jQ.change();
      }
    }
    return this;
  },
  removeEmpty: function()
  {
    this.jQ.addClass('hasCursor');
    if(this.isEmpty())
      this.jQ.removeClass('empty');
    var textblock = this.parent;
    if(textblock.next instanceof TextBlock)
    {
      var innerblock = this, cursor = textblock.cursor,
        next = textblock.next.firstChild;
      next.eachChild(function(){
        this.parent = innerblock;
        this.jQ.appendTo(innerblock.jQ);
      });
      next.firstChild.prev = this.lastChild;
      if(this.lastChild)
        this.lastChild.next = next.firstChild;
      else
        this.firstChild = next.firstChild;
      this.lastChild = next.lastChild;
      next.parent.remove();
      if(cursor.prev)
        cursor.insertAfter(cursor.prev);
      else
        cursor.prependTo(this);
      this.jQ.change();
      return false;
    }
    else if(textblock.prev instanceof TextBlock)
    {
      var cursor = textblock.cursor;
      if(cursor.prev)
        textblock.prev.firstChild.removeEmpty();
      else
        cursor.appendTo(textblock.prev.firstChild);
      return false;
    }

    return true;
  }
});

LatexCmds.text = CharCmds.$ = TextBlock;

// input box to type a variety of LaTeX commands beginning with a backslash
function LatexCommandInput(replacedFragment)
{
  MathCommand.call(this, '\\');
  if(replacedFragment)
  {
    this.replacedFragment = replacedFragment.detach();
    this.isEmpty = function(){ return false; };
  }
}
LatexCommandInput.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="latex-command-input"></span>'],
  placeCursor: function(cursor)
  {
    this.cursor = cursor.appendTo(this.firstChild);
    if(this.replacedFragment)
      this.jQ = this.jQ.add(this.replacedFragment.jQ.addClass('blur').insertBefore(this.jQ));
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
    var ch = String.fromCharCode(e.which);
    if(ch.match(/[a-z]/i))
    {
      this.cursor.deleteSelection();
      this.cursor.insertNew(new VanillaSymbol(ch));
      return false;
    }
    this.renderCommand();
    if(ch === ' ' || (ch === '\\' && this.firstChild.isEmpty()))
      return false;
    return this.cursor.parent.keypress(e);
  },
  renderCommand: function()
  {
    this.jQ = this.jQ.last();
    this.remove();
    if(this.next)
      this.cursor.insertBefore(this.next);
    else
      this.cursor.appendTo(this.parent);
    var latex = this.firstChild.latex(), cmd;
    if(latex)
      if(cmd = LatexCmds[latex])
        cmd = new cmd(this.replacedFragment, latex);
      else
      {
        cmd = new TextBlock(latex);
        cmd.firstChild.removeEmpty = function(){ delete this.removeEmpty; return true; };
        this.cursor.insertNew(cmd).insertAfter(cmd);
        if(this.replacedFragment)
          this.replacedFragment.remove();
        return;
      }
    else
      cmd = new VanillaSymbol('\\backslash ','\\');
    this.cursor.insertNew(cmd);
    if(cmd instanceof Symbol && this.replacedFragment)
      this.replacedFragment.remove();
  }
});

CharCmds['\\'] = LatexCommandInput;
  
function Binomial(replacedFragment)
{
  MathCommand.call(this, '\\binom', undefined, replacedFragment);
  this.jQ.wrapInner('<span class="array"></span>').prepend('<span class="paren">(</span>').append('<span class="paren">)</span>');
  this.firstChild.jQ.parent().change(function()
  {
    var block = $(this);
    block.prev().add(block.next()).css('fontSize', block.height()/(+block.css('fontSize').slice(0,-2)*.9+2)+'em');
  });
}
Binomial.prototype = new MathCommand;
Binomial.prototype.html_template =
  ['<span></span>', '<span></span>', '<span></span>'];

LatexCmds.binom = LatexCmds.binomial = Binomial;

function Choose()
{
  Binomial.apply(this, arguments);
}
Choose.prototype = new Binomial;
Choose.prototype.placeCursor = LiveFraction.prototype.placeCursor;

LatexCmds.choose = Choose;

function Vector(replacedFragment)
{
  MathCommand.call(this, '\\vector', undefined, replacedFragment);
}
Vector.prototype = new MathCommand;
Vector.prototype.html_template =
  ['<span class="array"></span>', '<span></span>'];
Vector.prototype.latex = function()
{
  return '\\begin{matrix}' + this.reduceChildren(function(initValue){
    initValue.push(this.latex());
    return initValue;
  }, []).join('\\\\') + '\\end{matrix}';
};
Vector.prototype.placeCursor = function(cursor)
{
  this.cursor = cursor.appendTo(this.firstChild);
};
Vector.prototype.keydown = function(e)
{
  var currentBlock = this.cursor.parent;
  if(currentBlock.parent === this)
    if(e.which === 13) //enter
    {
      var newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.jQ = $('<span></span>').data('[[mathquill internal data]]', {block: newBlock}).insertAfter(currentBlock.jQ);
      if(currentBlock.next)
        currentBlock.next.prev = newBlock;
      else
        this.lastChild = newBlock;
      newBlock.next = currentBlock.next;
      currentBlock.next = newBlock;
      newBlock.prev = currentBlock;
      this.cursor.appendTo(newBlock);
      this.jQ.change();
      return false;
    }
    else if(e.which === 9 && !e.shiftKey && !currentBlock.next) //tab
    {
      if(currentBlock.isEmpty())
        if(currentBlock.prev)
        {
          this.cursor.insertAfter(this);
          delete currentBlock.prev.next;
          this.lastChild = currentBlock.prev;
          currentBlock.jQ.remove();
          this.jQ.change();
          return false;
        }
        else
          return this.parent.keydown(e);

      var newBlock = new MathBlock;
      newBlock.parent = this;
      newBlock.jQ = $('<span></span>').data('[[mathquill internal data]]', {block: newBlock}).appendTo(this.jQ);
      this.lastChild = newBlock;
      currentBlock.next = newBlock;
      newBlock.prev = currentBlock;
      this.cursor.appendTo(newBlock);
      this.jQ.change();
      return false;
    }
    else if(e.which === 8) //backspace
      if(currentBlock.isEmpty())
      {
        if(currentBlock.prev)
        {
          this.cursor.appendTo(currentBlock.prev)
          currentBlock.prev.next = currentBlock.next;
        }
        else
        {
          this.cursor.insertBefore(this);
          this.firstChild = currentBlock.next;
        }
        if(currentBlock.next)
          currentBlock.next.prev = currentBlock.prev;
        else
          this.lastChild = currentBlock.prev;
        currentBlock.jQ.remove();
        if(this.isEmpty())
          this.cursor.deleteForward();
        else
          this.jQ.change();
        return false;
      }
      else if(!this.cursor.prev)
        return false;
  return this.parent.keydown(e);
};

LatexCmds.vector = Vector;
/**********************************
 * Symbols and Special Characters
 *********************************/

function bind(cons) //shorthand for binding arguments to constructor
{
  var args = Array.prototype.slice.call(arguments, 1);

  return proto(cons, function()
  {
    cons.apply(this, args);
  });
}

LatexCmds.f = bind(Symbol, 'f', '<var class="florin">&fnof;</var>');

function Variable(ch, html)
{
  Symbol.call(this, ch, '<var>'+(html || ch)+'</var>');
}
Variable.prototype = Symbol.prototype;

function VanillaSymbol(ch, html)
{
  Symbol.call(this, ch, '<span>'+(html || ch)+'</span>');
}
VanillaSymbol.prototype = Symbol.prototype;

CharCmds[' '] = bind(VanillaSymbol, '\\:', ' ');

LatexCmds.prime = CharCmds["'"] = bind(VanillaSymbol, "'", '&prime;');

function NonSymbolaSymbol(ch, html) //does not use Symbola font
{
  Symbol.call(this, ch, '<span class="nonSymbola">'+(html || ch)+'</span>');
}
NonSymbolaSymbol.prototype = Symbol.prototype;

LatexCmds['@'] = NonSymbolaSymbol;
LatexCmds['&'] = bind(NonSymbolaSymbol, '\\&', '&');
LatexCmds['%'] = bind(NonSymbolaSymbol, '\\%', '%');

//the following are all Greek to me, but this helped a lot: http://www.ams.org/STIX/ion/stixsig03.html

//lowercase Greek letter variables
LatexCmds.alpha =
LatexCmds.beta =
LatexCmds.gamma =
LatexCmds.delta =
LatexCmds.zeta =
LatexCmds.eta =
LatexCmds.theta =
LatexCmds.iota =
LatexCmds.kappa =
LatexCmds.mu =
LatexCmds.nu =
LatexCmds.xi =
LatexCmds.rho =
LatexCmds.sigma =
LatexCmds.tau =
LatexCmds.chi =
LatexCmds.psi =
LatexCmds.omega = proto(Symbol, function(replacedFragment, latex)
{
  Variable.call(this,'\\'+latex+' ','&'+latex+';');
});

//why can't anybody FUCKING agree on these
LatexCmds.phi = //W3C or Unicode?
  bind(Variable,'\\phi ','&#981;');

LatexCmds.phiv = //Elsevier and 9573-13
LatexCmds.varphi = //AMS and LaTeX
  bind(Variable,'\\varphi ','&phi;');

LatexCmds.epsilon = //W3C or Unicode?
  bind(Variable,'\\epsilon ','&#1013;');

LatexCmds.epsiv = //Elsevier and 9573-13
LatexCmds.varepsilon = //AMS and LaTeX
  bind(Variable,'\\varepsilon ','&epsilon;');

LatexCmds.sigmaf = //W3C/Unicode
LatexCmds.sigmav = //Elsevier
LatexCmds.varsigma = //LaTeX
  bind(Variable,'\\varsigma ','&sigmaf;');

LatexCmds.upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.upsi = //Elsevier and 9573-13
  bind(Variable,'\\upsilon ','&upsilon;');

//these aren't even mentioned in the HTML character entity references
LatexCmds.gammad = //Elsevier
LatexCmds.Gammad = //9573-13 -- WTF, right? I dunno if this was a typo in the reference (see above)
LatexCmds.digamma = //LaTeX
  bind(Variable,'\\digamma ','&#989;');

LatexCmds.kappav = //Elsevier
LatexCmds.varkappa = //AMS and LaTeX
  bind(Variable,'\\varkappa ','&#1008;');

LatexCmds.piv = //Elsevier and 9573-13
LatexCmds.varpi = //AMS and LaTeX
  bind(Variable,'\\varpi ','&#982;');

LatexCmds.rhov = //Elsevier and 9573-13
LatexCmds.varrho = //AMS and LaTeX
  bind(Variable,'\\varrho ','&#1009;');

LatexCmds.thetav = //Elsevier and 9573-13
LatexCmds.vartheta = //AMS and LaTeX
  bind(Variable,'\\vartheta ','&#977;');

//Greek constants, look best in un-italicised Times New Roman
LatexCmds.pi = bind(NonSymbolaSymbol,'\\pi ','&pi;');
LatexCmds.lambda = bind(NonSymbolaSymbol,'\\lambda ','&lambda;');

//uppercase greek letters

LatexCmds.Upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.Upsi = //Elsevier and 9573-13
  bind(Variable,'\\Upsilon ','&Upsilon;');

LatexCmds.Gamma =
LatexCmds.Delta =
LatexCmds.Theta =
LatexCmds.Lambda =
LatexCmds.Xi =
LatexCmds.Pi =
LatexCmds.Sigma =
LatexCmds.Phi =
LatexCmds.Psi =
LatexCmds.Omega =

//other symbols with the same LaTeX command and HTML character entity reference
LatexCmds.forall = proto(Symbol, function(replacedFragment, latex)
{
  VanillaSymbol.call(this,'\\'+latex+' ','&'+latex+';');
});

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

LatexCmds['+'] = bind(PlusMinus, '+');
LatexCmds['-'] = bind(PlusMinus, '-', '&minus;');
LatexCmds.pm = LatexCmds.plusmn = LatexCmds.plusminus =
  bind(PlusMinus,'\\pm ','&plusmn;');
LatexCmds.mp = LatexCmds.mnplus = LatexCmds.minusplus =
  bind(PlusMinus,'\\mp ','&#8723;');

CharCmds['*'] = LatexCmds.sdot = LatexCmds.cdot =
  bind(BinaryOperator, '\\cdot ', '&middot;');
//semantically should be &sdot;, but &middot; looks better

LatexCmds['='] = bind(BinaryOperator, '=', '=');
LatexCmds['<'] = bind(BinaryOperator, '<', '&lt;');
LatexCmds['>'] = bind(BinaryOperator, '>', '&gt;');

LatexCmds.notin =
LatexCmds.sim =
LatexCmds.cong =
LatexCmds.equiv =
LatexCmds.times =
LatexCmds.oplus =
LatexCmds.otimes = proto(BinaryOperator, function(replacedFragment, latex)
{
  BinaryOperator.call(this,'\\'+latex+' ','&'+latex+';');
});

LatexCmds.div = LatexCmds.divide = LatexCmds.divides =
  bind(BinaryOperator,'\\div ','&divide;');

LatexCmds.ne = LatexCmds.neq = bind(BinaryOperator,'\\ne ','&ne;');

LatexCmds.ast = LatexCmds.star = LatexCmds.loast = LatexCmds.lowast =
  bind(BinaryOperator,'\\ast ','&lowast;');
  //case 'there4 = // a special exception for this one, perhaps?
LatexCmds.therefor = LatexCmds.therefore =
  bind(BinaryOperator,'\\therefore ','&there4;');

LatexCmds.cuz = // l33t
LatexCmds.because = bind(BinaryOperator,'\\because ','&#8757;');

LatexCmds.prop = LatexCmds.propto = bind(BinaryOperator,'\\propto ','&prop;');

LatexCmds.asymp = LatexCmds.approx = bind(BinaryOperator,'\\approx ','&asymp;');

LatexCmds.lt = bind(BinaryOperator,'<','&lt;');

LatexCmds.gt = bind(BinaryOperator,'<','&gt;');

LatexCmds.le = LatexCmds.leq = bind(BinaryOperator,'\\le ','&le;');

LatexCmds.ge = LatexCmds.geq = bind(BinaryOperator,'\\ge ','&ge;');

LatexCmds.isin = LatexCmds['in'] = bind(BinaryOperator,'\\in ','&isin;');

LatexCmds.ni = LatexCmds.contains = bind(BinaryOperator,'\\ni ','&ni;');

LatexCmds.notni = LatexCmds.niton = LatexCmds.notcontains = LatexCmds.doesnotcontain =
  bind(BinaryOperator,'\\not\\ni ','&#8716;');

LatexCmds.sub = LatexCmds.subset = bind(BinaryOperator,'\\subset ','&sub;');

LatexCmds.sup = LatexCmds.supset = LatexCmds.superset =
  bind(BinaryOperator,'\\supset ','&sup;');

LatexCmds.nsub = LatexCmds.notsub =
LatexCmds.nsubset = LatexCmds.notsubset =
  bind(BinaryOperator,'\\not\\subset ','&#8836;');

LatexCmds.nsup = LatexCmds.notsup =
LatexCmds.nsupset = LatexCmds.notsupset =
LatexCmds.nsuperset = LatexCmds.notsuperset =
  bind(BinaryOperator,'\\not\\supset ','&#8837;');

LatexCmds.sube = LatexCmds.subeq = LatexCmds.subsete = LatexCmds.subseteq =
  bind(BinaryOperator,'\\subseteq ','&sube;');

LatexCmds.supe = LatexCmds.supeq =
LatexCmds.supsete = LatexCmds.supseteq =
LatexCmds.supersete = LatexCmds.superseteq =
  bind(BinaryOperator,'\\supseteq ','&supe;');

LatexCmds.nsube = LatexCmds.nsubeq =
LatexCmds.notsube = LatexCmds.notsubeq =
LatexCmds.nsubsete = LatexCmds.nsubseteq =
LatexCmds.notsubsete = LatexCmds.notsubseteq =
  bind(BinaryOperator,'\\not\\subseteq ','&#8840;');

LatexCmds.nsupe = LatexCmds.nsupeq =
LatexCmds.notsupe = LatexCmds.notsupeq =
LatexCmds.nsupsete = LatexCmds.nsupseteq =
LatexCmds.notsupsete = LatexCmds.notsupseteq =
LatexCmds.nsupersete = LatexCmds.nsuperseteq =
LatexCmds.notsupersete = LatexCmds.notsuperseteq =
  bind(BinaryOperator,'\\not\\supseteq ','&#8841;');


//sum, product, coproduct, integral
function BigSymbol(ch, html)
{
  Symbol.call(this, ch, '<big>'+html+'</big>');
}
BigSymbol.prototype = new Symbol; //so instanceof will work

LatexCmds.sum = LatexCmds.summation = bind(BigSymbol,'\\sum ','&sum;');
LatexCmds.prod = LatexCmds.product = bind(BigSymbol,'\\prod ','&prod;');
LatexCmds.coprod = LatexCmds.coproduct = bind(BigSymbol,'\\coprod ','&#8720;');
LatexCmds.int = LatexCmds.integral = bind(BigSymbol,'\\int ','&int;');



//the canonical sets of numbers
LatexCmds.N = LatexCmds.naturals = LatexCmds.Naturals =
  bind(VanillaSymbol,'\\mathbb{N}','&#8469;');

LatexCmds.P =
LatexCmds.primes = LatexCmds.Primes =
LatexCmds.projective = LatexCmds.Projective =
LatexCmds.probability = LatexCmds.Probability =
  bind(VanillaSymbol,'\\mathbb{P}','&#8473;');

LatexCmds.Z = LatexCmds.integers = LatexCmds.Integers =
  bind(VanillaSymbol,'\\mathbb{Z}','&#8484;');

LatexCmds.Q = LatexCmds.rationals = LatexCmds.Rationals =
  bind(VanillaSymbol,'\\mathbb{Q}','&#8474;');

LatexCmds.R = LatexCmds.reals = LatexCmds.Reals =
  bind(VanillaSymbol,'\\mathbb{R}','&#8477;');

LatexCmds.C =
LatexCmds.complex = LatexCmds.Complex =
LatexCmds.complexes = LatexCmds.Complexes =
LatexCmds.complexplane = LatexCmds.Complexplane = LatexCmds.ComplexPlane =
  bind(VanillaSymbol,'\\mathbb{C}','&#8450;');

LatexCmds.H = LatexCmds.Hamiltonian = LatexCmds.quaternions = LatexCmds.Quaternions =
  bind(VanillaSymbol,'\\mathbb{H}','&#8461;');

//spacing
LatexCmds.quad = LatexCmds.emsp = bind(VanillaSymbol,'\\quad ','    ');
LatexCmds.qquad = bind(VanillaSymbol,'\\qquad ','        ');
/* spacing special characters, gonna have to implement this in LatexCommandInput.prototype.keypress somehow
case ',':
  return new VanillaSymbol('\\, ',' ');
case ':':
  return new VanillaSymbol('\\: ','  ');
case ';':
  return new VanillaSymbol('\\; ','   ');
case '!':
  return new Symbol('\\! ','<span style="margin-right:-.2em"></span>');
*/

//various symbols

LatexCmds.caret = bind(VanillaSymbol,'\\caret ','^');
LatexCmds.underscore = bind(VanillaSymbol,'\\underscore ','_');
LatexCmds.backslash = bind(VanillaSymbol,'\\backslash ','\\');
LatexCmds.vert = bind(VanillaSymbol,'|');
LatexCmds.perp = LatexCmds.perpendicular = bind(VanillaSymbol,'\\perp ','&perp;');
LatexCmds.nabla = LatexCmds.del = bind(VanillaSymbol,'\\nabla ','&nabla;');
LatexCmds.hbar = bind(VanillaSymbol,'\\hbar ','&#8463;');

LatexCmds.AA = LatexCmds.Angstrom = LatexCmds.angstrom =
  bind(VanillaSymbol,'\\text\\AA ','&#8491;');

LatexCmds.ring = LatexCmds.circ = LatexCmds.circle =
  bind(VanillaSymbol,'\\circ ','&#8728;');

LatexCmds.bull = LatexCmds.bullet = bind(VanillaSymbol,'\\bullet ','&bull;');

LatexCmds.setminus = LatexCmds.smallsetminus =
  bind(VanillaSymbol,'\\setminus ','&#8726;');

LatexCmds.not = //bind(Symbol,'\\not ','<span class="not">/</span>');
LatexCmds.neg = bind(VanillaSymbol,'\\neg ','&not;');

LatexCmds.dots = LatexCmds.ellip = LatexCmds.hellip =
LatexCmds.ellipsis = LatexCmds.hellipsis =
  bind(VanillaSymbol,'\\dots ','&hellip;');

LatexCmds.converges =
LatexCmds.darr = LatexCmds.dnarr = LatexCmds.dnarrow = LatexCmds.downarrow =
  bind(VanillaSymbol,'\\downarrow ','&darr;');

LatexCmds.dArr = LatexCmds.dnArr = LatexCmds.dnArrow = LatexCmds.Downarrow =
  bind(VanillaSymbol,'\\Downarrow ','&dArr;');

LatexCmds.diverges = LatexCmds.uarr = LatexCmds.uparrow =
  bind(VanillaSymbol,'\\uparrow ','&uarr;');

LatexCmds.uArr = LatexCmds.Uparrow = bind(VanillaSymbol,'\\Uparrow ','&uArr;');

LatexCmds.to = bind(BinaryOperator,'\\to ','&rarr;');

LatexCmds.rarr = LatexCmds.rightarrow = bind(VanillaSymbol,'\\rightarrow ','&rarr;');

LatexCmds.implies = bind(BinaryOperator,'\\Rightarrow ','&rArr;');

LatexCmds.rArr = LatexCmds.Rightarrow = bind(VanillaSymbol,'\\Rightarrow ','&rArr;');

LatexCmds.gets = bind(BinaryOperator,'\\gets ','&larr;');

LatexCmds.larr = LatexCmds.leftarrow = bind(VanillaSymbol,'\\leftarrow ','&larr;');

LatexCmds.impliedby = bind(BinaryOperator,'\\Leftarrow ','&lArr;');

LatexCmds.lArr = LatexCmds.Leftarrow = bind(VanillaSymbol,'\\Leftarrow ','&lArr;');

LatexCmds.harr = LatexCmds.lrarr = LatexCmds.leftrightarrow =
  bind(VanillaSymbol,'\\leftrightarrow ','&harr;');

LatexCmds.iff = bind(BinaryOperator,'\\Leftrightarrow ','&hArr;');

LatexCmds.hArr = LatexCmds.lrArr = LatexCmds.Leftrightarrow =
  bind(VanillaSymbol,'\\Leftrightarrow ','&hArr;');

LatexCmds.Re = LatexCmds.Real = LatexCmds.real = bind(VanillaSymbol,'\\Re ','&real;');

LatexCmds.Im = LatexCmds.imag =
LatexCmds.image = LatexCmds.imagin = LatexCmds.imaginary = LatexCmds.Imaginary =
  bind(VanillaSymbol,'\\Im ','&image;');

LatexCmds.part = LatexCmds.partial = bind(VanillaSymbol,'\\partial ','&part;');

LatexCmds.inf = LatexCmds.infin = LatexCmds.infty = LatexCmds.infinity =
  bind(VanillaSymbol,'\\infty ','&infin;');

LatexCmds.alef = LatexCmds.alefsym = LatexCmds.aleph = LatexCmds.alephsym =
  bind(VanillaSymbol,'\\aleph ','&alefsym;');

LatexCmds.xist = //LOL
LatexCmds.xists = LatexCmds.exist = LatexCmds.exists =
  bind(VanillaSymbol,'\\exists ','&exist;');

LatexCmds.and = LatexCmds.land = LatexCmds.wedge =
  bind(VanillaSymbol,'\\wedge ','&and;');

LatexCmds.or = LatexCmds.lor = LatexCmds.vee = bind(VanillaSymbol,'\\vee ','&or;');

LatexCmds.o = LatexCmds.O =
LatexCmds.empty = LatexCmds.emptyset =
LatexCmds.oslash = LatexCmds.Oslash =
LatexCmds.nothing = LatexCmds.varnothing =
  bind(BinaryOperator,'\\varnothing ','&empty;');

LatexCmds.cup = LatexCmds.union = bind(VanillaSymbol,'\\cup ','&cup;');

LatexCmds.cap = LatexCmds.intersect = LatexCmds.intersection =
  bind(VanillaSymbol,'\\cap ','&cap;');

LatexCmds.deg = LatexCmds.degree = bind(VanillaSymbol,'^\\circ ','&deg;');

LatexCmds.ang = LatexCmds.angle = bind(VanillaSymbol,'\\angle ','&ang;');


function NonItalicizedFunction(replacedFragment, fn)
{
  Symbol.call(this, '\\'+fn+' ', '<span>'+fn+'</span>');
}
NonItalicizedFunction.prototype = new Symbol;
NonItalicizedFunction.prototype.respace = function()
{
  this.jQ[0].className =
    (this.next instanceof SupSub || this.next instanceof Bracket) ?
    '' : 'non-italicized-function';
};

LatexCmds.ln =
LatexCmds.lg =
LatexCmds.log =
LatexCmds.span =
LatexCmds.proj =
LatexCmds.det =
LatexCmds.dim =
LatexCmds.min =
LatexCmds.max =
LatexCmds.mod =
LatexCmds.lcm =
LatexCmds.gcd =
LatexCmds.gcf =
LatexCmds.hcf =
LatexCmds.lim = NonItalicizedFunction;

(function()
{
  var trig = ['sin', 'cos', 'tan', 'sec', 'cosec', 'csc', 'cotan', 'cot'];
  for(var i in trig)
    LatexCmds[trig[i]] =
    LatexCmds[trig[i]+'h'] =
    LatexCmds['a'+trig[i]] = LatexCmds['arc'+trig[i]] =
    LatexCmds['a'+trig[i]+'h'] = LatexCmds['arc'+trig[i]+'h'] =
      NonItalicizedFunction;
}());
/********************************************
 * Cursor and Selection "singleton" classes
 *******************************************/

/* The main thing that manipulates the Math DOM. Makes sure to manipulate the
HTML DOM to match. */

/* Sort of singletons, since there should only be one per editable math
textbox, but any one HTML document can contain many such textboxes, so any one
JS environment could actually contain many instances. */

//A fake cursor in the fake textbox that the math is rendered in.
function Cursor(root)
{
  this.parent = root;
  var jQ = this.jQ = this._jQ = $('<span class="cursor"></span>');

  //API for the blinking cursor
  function blink(){ jQ.toggleClass('blink'); }
  var intervalId;
  this.show = function()
  {
    this.jQ = this._jQ.removeClass('blink');
    if(intervalId)
      clearInterval(intervalId);
    else if(this.parent.removeEmpty(this.jQ))
      if(this.next)
        if(this.selection && this.selection.prev === this.prev)
          this.jQ.insertBefore(this.selection.jQ);
        else
          this.jQ.insertBefore(this.next.jQ);
      else
        this.jQ.appendTo(this.parent.jQ);
    intervalId = setInterval(blink, 500);
    return this;
  };
  this.hide = function()
  {
    if(intervalId)
      clearInterval(intervalId);
    intervalId = undefined;
    this.jQ.detach();
    this.jQ = $();
    return this;
  };
}
Cursor.prototype = {
  prev: null,
  next: null,
  parent: null,
  insertAt: function(parent, next, prev)
  {
    var p = this.parent;
    this.parent = parent;
    this.next = next;
    this.prev = prev;
    p.setEmpty(); //p.setEmpty may want to know where the cursor is going
  },
  insertBefore: function(el)
  {
    this.insertAt(el.parent, el, el.prev)
    this.parent.jQ.addClass('hasCursor');
    this.jQ.insertBefore(el.jQ.first());
    return this;
  },
  insertAfter: function(el)
  {
    this.insertAt(el.parent, el.next, el);
    this.parent.jQ.addClass('hasCursor');
    this.jQ.insertAfter(el.jQ.last());
    return this;
  },
  prependTo: function(el)
  {
    this.insertAt(el, el.firstChild, null);
    if(el.removeEmpty(this.jQ))
      if(el.parent)
        this.jQ.prependTo(el.jQ);
      else //only root has no parent
        this.jQ.insertAfter(el.textarea);
    return this;
  },
  appendTo: function(el)
  {
    this.insertAt(el, null, el.lastChild);
    if(el.removeEmpty(this.jQ))
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
    return this.show();
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
    return this.show();
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
      //gotta do this before this.selection is mutated by 'new cmd(this.selection)'
      this.prev = this.selection.prev;
      this.next = this.selection.next;
    }

    var cmd;
    if(ch.match(/^[a-eg-zA-Z]$/)) //exclude f because want florin
      cmd = new Variable(ch);
    else if(cmd = CharCmds[ch] || LatexCmds[ch])
      cmd = new cmd(this.selection, ch);
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
    var gramp = this.parent.parent, greatgramp = gramp.parent,
      cursor = this, prev = gramp.prev;

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
    if(prev)
    {
      prev.next = gramp.next;
      if(prev.next)
        prev.next.prev = prev;
      else
        greatgramp.lastChild = prev;
    }
    else
    {
      greatgramp.firstChild = gramp.next;
      if(gramp.next)
        gramp.next.prev = prev;
      else
        greatgramp.lastChild = prev;
    }

    if(!this.next)
      if(this.prev)
        this.next = this.prev.next;
      else
        while(!this.next)
          if(this.parent = this.parent.next)
            this.next = this.parent.lastChild;
          else
          {
            this.next = gramp.next;
            this.parent = greatgramp;
            break;
          }

    if(this.next)
      this.insertBefore(this.next);
    else
      this.appendTo(greatgramp);

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
          this.hopLeft().next.jQ.prependTo(this.selection.jQ);
          this.selection.prev = this.prev;
        }
        else if(this.parent.parent) //else level up if possible
          this.insertBefore(this.parent.parent).selection.levelUp();
      }
      else //else cursor is at right edge of selection, retract left
      {
        this.prev.jQ.insertAfter(this.selection.jQ);
        this.hopLeft().selection.next = this.next;
        if(this.selection.prev === this.prev)
          this.deleteSelection();
      }
    else
      if(this.prev)
        this.hide().hopLeft().selection = new Selection(this.parent, this.prev, this.next.next);
      else //end of a block
        if(this.parent.parent)
          this.hide().insertBefore(this.parent.parent).selection = new Selection(this.parent, this.prev, this.next.next);
  },
  selectRight: function()
  {
    if(this.selection)
      if(this.selection.next === this.next) //if cursor is at right edge of selection,
      {
        if(this.next) //then extend right if possible
        {
          this.hopRight().prev.jQ.appendTo(this.selection.jQ);
          this.selection.next = this.next;
        }
        else if(this.parent.parent) //else level up if possible
          this.insertAfter(this.parent.parent).selection.levelUp();
      }
      else //else cursor is at left edge of selection, retract right
      {
        this.next.jQ.insertBefore(this.selection.jQ);
        this.hopRight().selection.prev = this.prev;
        if(this.selection.next === this.next)
          this.deleteSelection();
      }
    else
      if(this.next)
        this.hide().hopRight().selection = new Selection(this.parent, this.prev.prev, this.next);
      else //end of a block
        if(this.parent.parent)
          this.hide().insertAfter(this.parent.parent).selection = new Selection(this.parent, this.prev.prev, this.next);
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
    this.clear().jQinit(this.parent.parent.jQ);

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
    this.jQ.replaceWith(this.jQ = this.jQ.children());
    return MathFragment.prototype.blockify.call(this);
  },
  detach: function()
  {
    var block = MathFragment.prototype.blockify.call(this);
    this.blockify = function()
    {
      this.jQ.replaceWith(block.jQ = this.jQ = this.jQ.children());
      return block;
    };
    return this;
  }
});
/*********************************************
 * Root math elements with event delegation.
 ********************************************/

function createRoot(type)
{
  var textbox = type === 'textbox', editable = textbox || type === 'editable';
  return this.each(function()
  {
    var jQ = $(this), contents = jQ.contents().detach(),
      root = new (textbox ? RootTextBlock : RootMathBlock);
    if(!textbox)
      jQ.addClass('mathquill-rendered-math');
    root.jQ = jQ.data('[[mathquill internal data]]', {
      block: root,
      revert: function()
      {
        jQ.empty().unbind('.mathquill')
          .removeClass('mathquill-rendered-math mathquill-editable mathquill-textbox')
          .append(contents);
      }
    });

    var cursor = root.cursor = new Cursor(root);

    root.renderLatex(contents.text());

    if(!editable)
      return;

    var textarea = root.textarea =
      $('<span class="textarea"><textarea></textarea></span>')
        .prependTo(jQ.addClass('mathquill-editable')).children();
    if(textbox)
      jQ.addClass('mathquill-textbox');

    textarea.focus(function(e)
    {
      if(!cursor.parent)
        cursor.appendTo(root);
      cursor.parent.jQ.addClass('hasCursor');
      if(cursor.selection)
        cursor.selection.jQ.removeClass('blur');
      else
        cursor.show();
      e.stopPropagation();
    }
    ).blur(function(e)
    {
      cursor.hide().parent.setEmpty();
      if(cursor.selection)
        cursor.selection.jQ.addClass('blur');
      e.stopPropagation();
    });

    var lastKeydnEvt; //see Wiki page "Keyboard Events"
    jQ.bind('keydown.mathquill',function(e) //see Wiki page "Keyboard Events"
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
    }
    ).bind('click.mathquill',function(e)
    {
      var clicked = $(e.target);
      if(clicked.hasClass('empty'))
      {
        cursor.clearSelection().prependTo(clicked.data('[[mathquill internal data]]').block);
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
    ).bind('click.mathquill',function()
    {
      textarea.focus();
    }
    ).bind('focus.mathquill blur.mathquill',function(e)
    {
      textarea.trigger(e);
    }
    ).blur();
  });
}

function RootMathBlock(){}
RootMathBlock.prototype = $.extend(new MathBlock, {
  latex: function()
  {
    return MathBlock.prototype.latex.call(this).replace(/(\\[a-z]+) (?![a-z])/ig,'$1');
  },
  renderLatex: function(latex)
  {
    latex = latex.match(/\\[a-z]*|[^\s]/ig);
    this.jQ.children(':not(.textarea)').remove();
    this.firstChild = this.lastChild = null;
    this.cursor.show().appendTo(this);
    if(latex)
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
          else if(/^\\[a-z]+$/i.test(token))
          {
            token = token.slice(1);
            var cmd = LatexCmds[token];
            if(cmd)
              cursor.insertNew(cmd = new cmd(undefined, token));
            else
            {
              cmd = new TextBlock(token);
              cursor.insertNew(cmd).insertAfter(cmd);
              continue;
            }
          }
          else
          {
            if(token.match(/[a-eg-zA-Z]/)) //exclude f because want florin
              cmd = new Variable(token);
            else if(cmd = LatexCmds[token])
              cmd = new cmd;
            else
              cmd = new VanillaSymbol(token);
            cursor.insertNew(cmd);
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
    this.setEmpty();
  },
  keydown: function(e)
  {
    this.skipKeypress = false;
    e.ctrlKey = e.ctrlKey || e.metaKey;
    switch((e.originalEvent && e.originalEvent.keyIdentifier) || e.which)
    {
    case 8: //backspace
    case 'Backspace':
    case 'U+0008':
      if(e.ctrlKey)
        while(this.cursor.prev)
          this.cursor.backspace();
      else
        this.cursor.backspace();
      return false;
    case 27: //esc does something weird in keypress, may as well be the same as tab
             //  until we figure out what to do with it
    case 'Esc':
    case 'U+001B':
    case 9: //tab
    case 'Tab':
    case 'U+0009':
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
    case 'Enter':
      e.preventDefault();
      return this.skipKeypress = true;
    case 35: //end
    case 'End':
      if(e.shiftKey)
        while(this.cursor.next || (e.ctrlKey && this.cursor.parent.parent))
          this.cursor.selectRight();
      else //move to the end of the root block or the current block.
        this.cursor.clearSelection().appendTo(e.ctrlKey ? this : this.cursor.parent);
      return false;
    case 36: //home
    case 'Home':
      if(e.shiftKey)
        while(this.cursor.prev || (e.ctrlKey && this.cursor.parent.parent))
          this.cursor.selectLeft();
      else //move to the start of the root block or the current block.
        this.cursor.clearSelection().prependTo(e.ctrlKey ? this : this.cursor.parent);
      return false;
    case 37: //left
    case 'Left':
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        this.cursor.selectLeft();
      else
        this.cursor.moveLeft();
      return false;
    case 38: //up
    case 'Up':
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
    case 'Right':
      if(e.ctrlKey)
        return true;
      if(e.shiftKey)
        this.cursor.selectRight();
      else
        this.cursor.moveRight();
      return false;
    case 40: //down
    case 'Down':
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
    case 'Del':
    case 'U+007F':
      if(e.ctrlKey)
        while(this.cursor.next)
          this.cursor.deleteForward();
      else
        this.cursor.deleteForward();
      return false;
    case 65: //'a' character, as in Select All
    case 'A':
    case 'U+0041':
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
      return true;
    this.cursor.show().write(String.fromCharCode(e.which));
    return false;
  }
});

function RootMathCommand(cursor)
{
  MathCommand.call(this, '$');
  this.firstChild.cursor = cursor;
  this.firstChild.keypress = function(e)
  {
    if(this.skipKeypress)
      return true;
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
        cursor.show().write(ch);
      return false;
    }
    cursor.show().write(ch);
    return false;
  };
}
RootMathCommand.prototype = $.extend(new MathCommand, {
  html_template: ['<span class="mathquill-rendered-math"></span>'],
  initBlocks: function()
  {
    this.firstChild = this.lastChild =
      this.jQ.data('[[mathquill internal data]]').block = new RootMathBlock;
    this.firstChild.parent = this;
    this.firstChild.jQ = this.jQ;
  }
});

function RootTextBlock(){}
RootTextBlock.prototype = $.extend(new MathBlock, {
  renderLatex: $.noop,
  keydown: RootMathBlock.prototype.keydown,
  keypress: function(e)
  {
    if(this.skipKeypress)
      return true;
    this.cursor.deleteSelection();
    var ch = String.fromCharCode(e.which);
    if(ch === '$')
      this.cursor.insertNew(new RootMathCommand(this.cursor));
    else
      this.cursor.insertNew(new VanillaSymbol(ch));
    return false;
  }
});
/*********************************************************
 * The actual jQuery plugin and document ready handlers.
 ********************************************************/

//The publicy exposed method of jQuery.prototype, available (and meant to be
//called) on jQuery-wrapped HTML DOM elements.
$.fn.mathquill = function(cmd, latex)
{
  switch(cmd)
  {
  case 'redraw':
    this.find(':not(:has(:first))').change();
    return this;
  case 'revert':
    return this.each(function()
    {
      var mathObj = $(this).data('[[mathquill internal data]]');
      if(mathObj && mathObj.revert)
        mathObj.revert();
    });
  case 'latex':
    if(arguments.length > 1)
      return this.each(function()
      {
        var mathObj = $(this).data('[[mathquill internal data]]');
        if(mathObj && mathObj.block && mathObj.block.renderLatex)
          mathObj.block.renderLatex(latex);
      });
    var mathObj = this.data('[[mathquill internal data]]');
    return mathObj && mathObj.block && mathObj.block.latex();
  case 'html':
    return this.html().replace(/<span class="?cursor( blink)?"?><\/span>|<span class="?textarea"?><textarea><\/textarea><\/span>/ig, '');
  case 'write':
    latex = latex.charAt(0) === '\\' ? latex.slice(1) : latex;
    if(arguments.length > 1)
      return this.each(function()
      {
        var mathObj = $(this).data('[[mathquill internal data]]'),
          block = mathObj && mathObj.block, cursor = block && block.cursor;
        if(cursor)
        {
          cursor.show().write(latex);
          block.textarea.triggerHandler('blur');
        }
      });
  default:
    return createRoot.call(this, cmd);
  }
};
/*
//on document ready, mathquill-ify all `<tag class="mathquill-*">latex</tag>`
//elements according to their CSS class.
$(function()
{
  $('.mathquill-embedded-latex').mathquill();
  $('.mathquill-editable').mathquill('editable');
  $('.mathquill-textbox').mathquill('textbox');
});
*/
}(jQuery));
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

function psi(x) {
    return random();
}
Γ=Gamma;
ψ=psi;
π=pi;
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
"left|":"abs:(",
"right|":")",
"sin":"sin:",
"cos":"cos:",
"tan":"tan:",
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
var eqtype={"product":1,"sum":2,"number":3,"discretevector":6,"continuousvector":7,"power":8,"fn":9,"fraction":10,"derivative":11,"integral":12,"equality":13,"pm":14,"operatorfactor":15};
var __debug_parser=0;
var __debug_mode=0;
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
    e=e.replace(/([\d]+(\.[\d]+)?)([^\+\-\*\/\^\:\(\)\d\=\.])/g,"$1*$3");
    
	e=e.replace(/\^([\d]+)\(/g,"^$1:(");
    e=e.replace(/([xe\d∫])\(/g,"$1*(");
    e=e.replace(/∫([^\*])/g,"∫*$1");
    e=e.replace(/([pixe\d\.])∫/g,"$1*∫");
	e=e.replace(/([^\+\-\*\/\^\:\(\)\d\=])\(/g,"$1:(");
    
	e=e.replace(/\)([^\+\-\*\/\^\:\(\)\=])/g,")*$1");
    
    //multiplicative identity
    e=e.replace(/\*([\)\=]|$)/g,"$1");
    if(e.indexOf("=")!=-1){
        var eq=e.replace("==","[equals][equals]").split("=").map(function(e){return e.replace("[equals][equals]","==");});
        if(eq.length==2){
            return [p(eq[0]),p(eq[1])].setType(eqtype.equality);
        }
        throw("Too many '='s");
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
            var match=/^log_([\d\.\+\-e]+)$/(be[0]);
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
            throw (messages.expchain);
            return;
        }
        var base=p(be[0]);
        terms.type=eqtype.power;
        terms.push(base);
        terms.push(p(be[1]));
        
    }else if(e.indexOf("!")!=-1){
    
        //TODO: Fix this
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
    if(this.toString()=="i"){
        return "i";
    }
    if(!isNaN(this.toString())){
        return Number(this.toString());
    }
    if(window.app){
    if(app.variables[this.toString()]){
		if(typeof app.variables[this.toString()]!="function"){
			return app.variables[this.toString()].eval();
		}else{
			return NaN;
		}
    }
    }
    if(window[this.toString()]){
		if(typeof window[this.toString()]!="function"){
			return eval(this.toString());
		}else{
			return NaN;
		}
    }
    return NaN;
};
Array.prototype.eval=function(){
    if(!this.length){
        __debug(__debug(0,1)||app.ui.console.warn("Empty! in .eval(): "+this.type),0);
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
    n=n.replace(/\\?(sin|cos|tan|sec|cosec|csc|cotan|cot)([^\:\^])/g,"$1:$2");
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
    if(this.type==eqtype.equality){
        this[0]=this[0].simplify();
        this[1]=this[1].simplify();
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
    
    if(this.canEval && this.canEval()===true){
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
        for(var i=0;i<this.length;i++){
            
            this[i]=this[i].simplify();
            if(this[i]===0){
                return 0;
            }else if(this[i]===1){
                this.splice(i,1);
                i--;
            }
        }
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
String.prototype.getString=function(__ignore,javascript){
    if(javascript && window.app){
        var self=this.toString()
        if(self=="x"){
            return self;
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
                    throw(messages.fnnamenotstring);
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
    return (s.replace(/(\-\-)+/g,"+").replace(/\+\++/g,"+").replace(/\-\+/g,"-").replace(/\+\-/g,"-"));
};


functions="sin,cos,tan,sec,cot,csc,cosec,log,exp,pow,Gamma,sinc,sqrt,W,fact,bellb,Zeta,u,signum,asin,acos,atan,arcsin,arccos,arctan,tg,ln,abs,floor,round,ceil,atan2,random,min,max,clear,text,shaw,delta,Γ,ψ,diff,int".split(",");

window._i=33;
var known_derivatives={
    "sqrt":p("1/(2*sqrt(x))"),
    "log":p("1/x"),
    "sin":p("cos(x)"),
    "cos":p("-sin(x)"),
    "tan":p("1/(cos(x)*cos(x))"),
    "exp":p("exp(x)"),
    "floor":p("shaw(x)"),
    "u":p("delta(x)"),
    "asin":p("1/sqrt(1-x^2)"),
    "acos":p("-1/sqrt(1-x^2)"),
    "fact":p("Γ(x+1)*ψ(x+1)"),
    "Gamma":p("Γ(x)*ψ(x)"),
    "Γ":p("Γ(x)*ψ(x)")
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
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,dreplacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=dreplacer;if(dreplacer&&typeof dreplacer!=='function'&&(typeof dreplacer!=='object'||typeof dreplacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}());Array.prototype.remove = function(elem) {  
	var index=this.indexOf(elem);
	if(index!==-1){this.splice(index,1)}
};

String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1);};

var app={};

	//Visible region on screen: (Global so things eval'ed in compile() can access)
    //Maybe all things should be in one object to avoid stuff like this.
var boundleft = -10;
var boundright = 10;
var boundtop = 10;
var boundbottom = -10;
var overleft,overtop,overbottom,overright;
var width,height;
var test=1;

var messages={
    "standalone":"To run this app in fullscreen mode, add it to your home screen.",
    "excanvasfail":"Explorer Canvas failed: quitting.",
    "badbrowser":"Browser not supported",
    "example":"Example",
    "version":"version",
    "type":"Type",
    "add":"Add a new equation/graph",
    "console":"Show Console",
    "help":"Help Page",
    "png":"Take Screenshot Image",
    "showhide":"Show/Hide Graph"

};

app.config={
    "lineWidth":1.5,
    "pt":true
};
app.ui=(function(){
	var allowdrag=true;//Set using block: and unblock: in the postMessage API.
	var webkit=/[Ww]eb[kK]it/.test(navigator.userAgent);
    if(/(iPhone)/i.test(navigator.userAgent)){
        if(!navigator.standalone){
           alert(messages.standalone);
        }
    }
	var draw;
	var ctx;
	var ptd,con,proto,conin,logt,ul;
    /*
        ptd: (0,0)
        con: Console div
        proto: prototype function li.
        conin: Mathquill input span for console.
        logt: console results div.
    
    */
	function resize(){
	    width=window.innerWidth  || document.body.clientWidth;
	    height=window.innerHeight|| document.body.clientHeight || 120;//120 for iframe default
        logt.style.maxHeight=~~(height-85)+"px";
	    canvas.width = width;
	    canvas.height= height;
	    ctx && draw();
	}
	//Current Mouse coordinates
	var mx = 400;
	var my = 300;

	//Last mouse coordinates
	var lmx=mx;
	var lmy=my;

	var drag;

	var scalex = 64;
	var scaley = scalex;//not always
    var scalez = scalex;//not always


	var gridsize;

	//Location of canvas on screen. While dragging this changes.
	var _cx = 0;
	var _cy = 0;
	
	//Camera position
	var cx = (window.innerWidth || document.body.clientWidth  || 640)/-3;
	var cy = (window.innerHeight|| document.body.clientHeight || 120)*2/3;
	var cz = 10000;


	function draw(){
        //they can be accidentially changed
	    e = Math.E;
	    pi = Math.PI;

	    if (!ctx) {
	        return;
	    }
	    ctx.lineCap = "butt";
        ctx.strokeStyle = ctx.fillStyle = "black";
	    ctx.clearRect(0, 0, width, height);
	    //try{

	    boundleft = cx / scalex;
	    boundright = (width + cx) / scalex;
	    boundbottom = -(height - cy) / scaley;
	    boundtop = cy / scaley;


	    gridsize = pow(2, 6 - Math.round(log(scalex) / log(2)));
	    overleft = gridsize * ~~ (boundleft / gridsize) - gridsize;
	    overright = gridsize * ~~ (boundright / gridsize) + gridsize;
	    overtop = gridsize * ~~ (boundtop / gridsize) + gridsize;
	    overbottom = gridsize * ~~ (boundbottom / gridsize) - gridsize;

	    //Draw grid lines
	
		
        ctx.font="12px sans-serif";
        
	    ctx.strokeStyle = "#888";
        ctx.fillStyle="#888";
	    ctx.lineWidth = 0.1;
        var n=0;
	    for (var x = overleft; x <= overright; x += gridsize / 4) {
	        ctx.beginPath();
	        ctx.move(x, overbottom);
	        ctx.line(x, overtop);
	        ctx.stroke();
	    }
	    for (var y = overbottom; y <= overtop; y += gridsize / 4) {
	        ctx.beginPath();
	        ctx.move(overleft, y);
	        ctx.line(overright, y);
	        ctx.stroke();
	    }
        /*ctx.shadowColor = "rgba(255,255,255,1.0)";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0
        ctx.shadowBlur = 4;*/
        //Like overleft, but in units of 4*gridsize
        var dblleft=gridsize*4 * ~~ (boundleft / (4*gridsize)) - 4*gridsize;
        var dblleft=gridsize*4 * ~~ (boundbottom / (4*gridsize)) - 4*gridsize;
        for(var x=dblleft; x<=overright; x+=gridsize*4){
            if(x!=0){
            ctx.beginPath();
            ctx.arc(scalex*x-cx,cy-scaley*0,2,0,Math.PI*2,true);
            ctx.fill();
            ctx.fillText(x.toFixed(3).replace(/\.?0+$/,""),scalex*x-cx,14+cy-scaley*0);
            }
            
        }
        for(var y=dblleft; y<=overright; y+=gridsize*4){
            if(y!=0){
            ctx.beginPath();
            ctx.arc(-cx,cy-scaley*y,2,0,Math.PI*2,true);
            ctx.fill();
            ctx.fillText(y.toFixed(3).replace(/\.?0+$/,""),10-cx,4+cy-scaley*y);
            }
            
        }
        

        ctx.lineWidth = 0.4;
		for (var x = overleft; x <= overright; x += gridsize) {
			ctx.beginPath();
			ctx.move(x, overbottom);
			ctx.line(x, overtop);
			ctx.stroke();
		}

	    for (var y = overbottom; y <= overtop; y += gridsize) {
			ctx.beginPath();
			ctx.move(overleft, y);
			ctx.line(overright, y);
			ctx.stroke();
		}
        
		ctx.lineWidth=2;
	
		
		ctx.strokeStyle="black";
					
	    ctx.beginPath();
	    ctx.move(overleft,0);
	    ctx.line(overright,0);
	    ctx.stroke();

	    ctx.beginPath();
	    ctx.move(0,overbottom);
	    ctx.line(0,overtop);
	    ctx.stroke();

        

        ctx.lineWidth=app.config.lineWidth;
        graphs.forEach(function(e){
            if(!e.disabled){
                ctx.strokeStyle=ctx.fillStyle=e.color;
                e.plot(ctx);
                if(app.config.fillText && app.config.pt && e.pt){
                    //TODO: duplicate point checking
                    e.pt.forEach(function(pt){
                        ctx.beginPath();
                        var _nx=pt[0].eval();
                        var _ny=pt[1].eval();
                        
                        //Stupid Firefox!
                        if(!isNaN(_nx) && !isNaN(_ny) && _ny<overtop && _ny>overbottom && _nx<overright && _nx>overleft){
                            try{
                                ctx.arc(scalex*_nx-cx,cy-scaley*_ny,app.config.lineWidth*2,0,Math.PI*2,true);
                                ctx.fill();
                                ctx.fillText(utf8_print(pt.simplify(0,0,1).getString(0)),12+scalex*_nx-cx,cy-scaley*_ny);
                            }catch(ex){
                                app.ui.console.warn("Could not plot dot: ("+_nx+","+_ny+")");
                            }
                        }
                    });
                }
            }
        });
	    //}catch(ex){}



	}









	var drawwhiledrag_c=0;
	function mousedown(e) {
        if(!allowdrag){return;}
	    lmx=mx=e.x || e.pageX;
	    lmy=my=e.y || e.pageY;
	    drag = true;
	    canvas.style.cursor = "url(grabbing.gif), grabbing";
	    if (!drawwhiledrag_c) {
	        setTimeout(drawwhiledrag, 1000);
	        drawwhiledrag_c++;
	    }
	};

	function mousemove(e) {
        if(!allowdrag){return;}
	    e = e || window.event;
	    if (e.x !== undefined) {
	        mx = e.x;
	        my = e.y;
	    } else {
	        mx = e.pageX;
	        my = e.pageY;
	    }
	    if(drag){
	        _cx += mx - lmx;
	        _cy += my - lmy;
			if(webkit){
				canvas.style["-webkit-transform"]="translate("+_cx+"px,"+_cy+"px)";
			}else{
				canvas.style.left = _cx + "px";
				canvas.style.top = _cy + "px";
			}
	
	    }
        
        //Last mouse position
	    lmx = mx;
	    lmy = my;
	};
	var scaleconst = 0.001;
	if (/AppleWebKit/.test(navigator.userAgent)) {
	    scaleconst = 0.0001;
	}
    if (/Chrome/.test(navigator.userAgent)) {
	    scaleconst = 0.005;
	}
	if (/Firefox/.test(navigator.userAgent)) {
	    scaleconst = 0.012;
	}
	if (/Opera/.test(navigator.userAgent)) {
	    scaleconst = 0.03
	}
	if (!/Mac OS X/.test(navigator.userAgent)) {
	    scaleconst = 0.1
	}
	function mousewheel(e){
        
        if(!allowdrag){return;}
		e = e || window.event;
	    if (e.x !== undefined) {
	        mx = e.x;
	        my = e.y;
	    } else {
	        mx = e.pageX;
	        my = e.pageY;
	    }
        
        var delta=(e.wheelDeltaY!=undefined)?e.wheelDeltaY:-e.detail;
		var ex=Math.exp(delta*scaleconst);
	    scalex*=ex;
	    scaley*=ex;
		/*
		
			nscalex/scalex=exp
			mx =  scalex*px - cx
		
			(mx + cx)/scalex=px
			∆cx =  nscalex*(mx + cx)/scalex - cx - mx
			∆cx =  ex*(mx + cx) - cx - mx
			
			(cy-my)/scaley = py
			
			my +ex*(cy-my) - cy= ∆cy
			
			mx =  - cx
			
		*/
		var dx=mx+cx;
		var dy=my-cy;
		if((dx*dx+dy*dy)>1000){
            //Move camera towards the point if
            //the squared distance to the origin is more than 1000.
			cx=ex*(mx+cx)-mx;
			cy+=my+ex*(cy-my)-cy;
		}
	    draw();
        
        //Prevent browser from scrolling page
        e.preventDefault();
        return false;
	}
	function perform_translation(){
	    cx-=_cx;
	    cy+=_cy;
	    _cx=_cy=0;
		if(webkit){
			canvas.style["-webkit-transform"]="translate(0px,0px)";
		}else{
		    canvas.style.left = _cx + "px";
		    canvas.style.top = _cy + "px";
		}
	}

	function drawwhiledrag() {
	    if (drag) {
	        perform_translation();
	        draw();
	        setTimeout(drawwhiledrag, 1000);
	    }else{
	        drawwhiledrag_c--;
	    }
	}






	function generateJSON(obj){
			var w=document.createElement("ul");
			w.className="json";
			var mode=typeof obj;
			if(obj===null){
				mode="undefined";
			}
			if(mode=="function" && obj.length!=undefined && obj[0]!=undefined){
				mode="object";
			}
			mode=mode.toString();
			switch(mode){
				case "number":

					var fn=document.createElement("span");
					fn.appendChild(document.createTextNode(obj));
					w.appendChild(fn);
					return w;

					break;
				case "string":
					var fn=document.createElement("strong");
					fn.appendChild(document.createTextNode("\""+obj+"\""));
					w.appendChild(fn);
					return w;

				break;
				case "boolean":
					w.appendChild(document.createTextNode(obj));
					return w;

				break;
				case "undefined":
				case "function":
					var fn=document.createElement("i");
					if(obj===undefined){

						fn.appendChild(document.createTextNode("undefined"));
					}else if(obj===null){

						fn.appendChild(document.createTextNode("null"));
					}else{

						fn.appendChild(document.createTextNode(obj.toString()));
					}
					w.appendChild(fn);
					return w;
				break;

				case "object":
				var found=false;

	function do_loop(i){

		var li=document.createElement("li");

		var m2=typeof obj[i];
		if(obj[i]===null || obj[i]===undefined){
			m2="undefined";
		}

		switch(m2){

			case "function":
			case "object":

				var b=document.createElement("b");

				b.appendChild(document.createTextNode(i+": "));

				var div=document.createElement("div");

				div.appendChild(b);
				div.appendChild(document.createTextNode((typeof(obj[i])).capitalize()));
				li.appendChild(div);
				li.obj=obj[i];

				var children=document.createElement("div");
				children.className="child";
				li.appendChild(children);
				li.done=false;
				li.className="hide";

				li.addEventListener("click",function(e){
					e.stopPropagation();
					if(this.className=="show"){
						this.className="hide";
						return;
					}

					this.className="show";
					if(!this.done){
						this.getElementsByClassName("child")[0].appendChild(generateJSON(this.obj));
						this.done=true;
					}

					return false;
				},false);

				break;
			default:

				var b=document.createElement("b");
				li.className="end";
				b.appendChild(document.createTextNode(i+": "));

				li.appendChild(b);
				var str=obj[i];
				if(m2=="undefined"){
					var strong=document.createElement("i");
					strong.appendChild(document.createTextNode(str));
					li.appendChild(strong);
				}else if(m2=="boolean"){
					li.appendChild(document.createTextNode(str));
				}else if(m2=="string"){
					var strong=document.createElement("strong");
					strong.appendChild(document.createTextNode("\""+str+"\""));
					li.appendChild(strong);
				}else if(m2=="number"){
					var strong=document.createElement("span");
					strong.appendChild(document.createTextNode(str));
					li.appendChild(strong);
				}else {
					li.appendChild(document.createTextNode(str));
				}



		}
		w.appendChild(li);
	}
        if(obj.__proto__!=Array.prototype){
            for(i in obj){
                found=true;
                do_loop(i);
            }
        }
	    if(!found){
	        if(obj.length!==undefined){
	            for(var i=0;i<obj.length;i++){
	                found=true;
	                do_loop(i);
	            }
	            if(!found){
	                w.appendChild(document.createTextNode(obj));
	                return w;
	            }
	        }else{
	            w.appendChild(document.createTextNode(obj));
	            return w;
	        }
	    }
	    break;
	    default:


	    }
	return w;

	}
	
	var ui={
    "remove":function(n){
        if(!ul){
			ul=document.getElementById("graphs");
		}
        ul.removeChild(n);
    },"png":function(){
        window.location=canvas.toDataURL("image/png");
    },"add":function(n){
		var li=proto.cloneNode(true);
		li.id="eq-"+n.gid;
		if(!ul){
			ul=document.getElementById("graphs");
		}
		ul.appendChild(li);
		var inputbox = li.getElementsByClassName("matheditor")[0];
        var warn_ = li.getElementsByTagName("aside")[0];
        var b_=li.firstChild;
        var check_=li.firstChild.firstChild;
        var delete_=li.getElementsByClassName("delete")[0];
		inputbox.appendChild(document.createTextNode(n.equation||""));
        check_.addEventListener("change",function(e){
            for(var i=0;i<graphs.length;i++){
                if(graphs[i].gid==n.gid){
                    graphs[i].disabled=!check_.checked;
                    draw();
                    break;
                }
            }
        },false);
		inputbox.addEventListener("mouseup",function(e){e.stopPropagation();},false);
		b_.style.backgroundColor=n.color;
        b_.addEventListener("mouseup",function(e){e.stopPropagation();},false);
        delete_.addEventListener("mouseup",function(e){app.remove(li);e.stopPropagation();},false);
        li.addEventListener("mouseup",function(e){
			$(inputbox).trigger({ type: "keydown", ctrlKey: true, which: 65 });
			$(inputbox).trigger({ type: "keydown", which: 39 });
            $(inputbox).focus();
		},false);
        
		$(inputbox).mathquill("editable");
		$(inputbox).mathquill("redraw");
        inputbox.onchange=function(){
            for(var i=0;i<graphs.length;i++){
                if(graphs[i].gid==n.gid){
                    
                    
                    
        
                   
        
                    var l__=$(inputbox).mathquill("latex");
					
                    graphs[i].equation=l__;
                    try{
                        var c=compile(l__);
                    }catch(ex){
                         
                        warn_.firstChild.nodeValue=messages.error+": "+JSON.stringify(ex).toString();
                        warn_.style.display="block";
                        return;
                    }
                    warn_.firstChild.nodeValue="";
                    warn_.style.display="none";
                    for(k in c){
                        if(c.hasOwnProperty(k)){
                            graphs[i][k]=c[k];
                        }
                    }
                    /*
                    graphs[i].f=c.f;
                    graphs[i].plot=c.plot;
                    graphs[i].math=c.math;
                    graphs[i].xc=c.xc;
                    graphs[i].yc=c.yc;
                    graphs[i].xs=c.xs;
                    graphs[i].ys=c.ys;
                    */
                    draw();
                    break;
                }
            }
        };
		if(!n.auto){
            $(inputbox).trigger({ type: "keydown", ctrlKey: true, which: 65 });
			$(inputbox).focus();
        }
		
        warn_.firstChild.nodeValue="";
        warn_.style.display="none";
		return li;
	},
	"colors":{
		"free":("#f08,#8f0,#80f,#f08,#880,#088,#808,#0ff,#f80,#f0f,#04f,#0a0,#f00,#07c".split(",")),
	},
	"refresh":function(){
        if(draw){
            draw();
        }
    },"block":function(block_it){
        allowdrag=block_it?false:true;
    },"scale":function(x,y,z){
        scalex*=x||1;
        scaley*=y||x||1;
        scalez*=y||x||1;
        draw();
    },"translate":function(x,y,z){
        cx+=x||0;
        cy+=y||0;
        cz+=z||0;
        draw();
    },"center":function(x,y,z){
    
        cx=scalex*(x||0)-width/2;
        cy=scaley*(y||0)+height/2;
        cz=scalez*(z||0)-width/2;
        draw();
    
    },"init":function(fullscreen){
		(new Image()).src="grabbing.gif";
		canvas=document.createElement("canvas");
		if(fullscreen){
			canvas.width=window.innerWidth;
			canvas.height=window.innerHeight;
		}
		document.body.appendChild(canvas);
		if(canvas.getContext){
			ctx=canvas.getContext("2d");
		}else{
			if(!ctx && G_vmlCanvasManager){
                //Explorer canvas. Currently doesn't work because
                //the parser is too much for ie. But we will
                //try to fix that in a parser rewrite.
                G_vmlCanvasManager.initElement(el);
                if(canvas.getContext){
                    ctx = canvas.getContext("2d");
                }else{
                    alert(messages.excanvasfail);
                }
            }else if(!ctx){
                alert(messages.badbrowser);
                return;
            }
		}
		if(!app.config.fillText){
            app.config.fillText=ctx.fillText?true:false;
        }
		canvas.style.background="white";
		canvas.style.cursor = "default";
		canvas.style.position="fixed";
		
		ptd=document.createElement("div");
        ptd.id="ptd";
		ptd.className="monospace";
		ptd.appendChild(document.createTextNode("(0,0)"));
		document.body.appendChild(ptd);
        if(!fullscreen){
            ptd.style.display="none";
        }
		
		con=document.createElement("div");
		con.id="con";
		con.className="overlay";
		con.style.display="none";
        
        logt=document.createElement("div");
        logt.id="logt";
        logt.className="monospace";
        con.appendChild(logt);
        
        var conin_=document.createElement("span");
        conin_.id="conin";
        con.appendChild(conin_);
        
        
		document.body.appendChild(con);
        
		conin=document.getElementById("conin");
        $(conin).mathquill("editable");
		$(conin).mathquill("redraw");
        
		conin.addEventListener("keydown",function(event){
			if(event.which==13){
                try{
                var needsredraw=false;
                conin.last=$(conin).mathquill("latex");
                var out=p_latex(conin.last).simplify();
                if(out.type==eqtype.equality){
                    if(typeof out[0]=="string"){
                        if(out[0]=="e" || out[0]=="pi"){
                            throw(MessageStrings.protected);
                            return;
                        }
                        app.variables[out[0]]=out[1].eval();
                        needsredraw=true;
                    }
                }
                var can_eval_code=out.canEval();
                if(can_eval_code==false || can_eval_code==2){
                    app.ui.console.log(((out.getString().markup())));
                }else{
                    app.ui.console.log(generateJSON(usr.eval(out.getString(0,1))));
                }
                $(conin).mathquill("latex","");
                if(needsredraw){
                    draw();
                }
                }catch(ex){
                    app.ui.console.warn(ex.toString());
                }
			}
			else if(event.which==38 && event.shiftKey){
                if(!/\\[a-z]*|[^\s]/ig.test(conin.last)){
                    conin.last=" ";
                }
                $(conin).mathquill("latex",conin.last);
			}
		},false);

		var funcs=document.createElement("div");
		funcs.className="overlay";
		funcs.id="funcs";
        if(!fullscreen){
            funcs.style.display="none";
        }
		var _ul=document.createElement("ul");
		_ul.id="graphs";
		funcs.appendChild(_ul);
		
		var _proto=document.createElement("li");
		var _proto_div=document.createElement("div");
        var _proto_warn=document.createElement("aside");
        _proto_warn.appendChild(document.createTextNode("fail"));
        
		_proto_div.className="b";
		_proto_div.style.backgroundColor="#07c";
		var _proto_input=document.createElement("input");
		_proto_input.type="checkbox";
		_proto_input.checked="checked";
        _proto_input.title=messages.showhide;
		_proto_div.appendChild(_proto_input);
		
		
		var _proto_math=document.createElement("span");
		_proto_math.className="matheditor";
		var _proto_del=document.createElement("span");
		_proto_del.className="delete";
        _proto.appendChild(_proto_div);
		_proto.appendChild(_proto_math);
		_proto.appendChild(_proto_del);
		_proto.appendChild(_proto_warn);
		var buttons=document.createElement("div");
		buttons.className="buttons";
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value="+";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.add;
        newfuncbtn.onclick=function(){app.add()};
        buttons.appendChild(newfuncbtn);
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value=">_";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.console;
        newfuncbtn.onclick=function(){app.console()};
        buttons.appendChild(newfuncbtn);
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value=".png";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.png;
        newfuncbtn.onclick=function(){app.png()};
        buttons.appendChild(newfuncbtn);
        
        var alink=document.createElement("a");
        alink.href="/about/";
        alink.target="_blank";
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value="";
        newfuncbtn.style.textDecoration="none";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.help;
        
        alink.appendChild(newfuncbtn);
        buttons.appendChild(alink);
        
        funcs.appendChild(buttons);
		document.body.appendChild(funcs);
		proto = _proto.cloneNode(true);
		proto.removeAttribute("id");

		canvas.onmousedown=mousedown;
		
		document.body.addEventListener("mouseup",function(){if(!allowdrag){return;}drag=false;perform_translation();canvas.style.cursor = "default";draw()},false);
		document.body.addEventListener("mousemove",mousemove,false);
		   	   window.addEventListener("mousewheel",mousewheel,false);
               window.addEventListener("DOMMouseScroll",mousewheel,false);
               window.addEventListener("resize",resize,false);
        con.addEventListener("mousewheel",function(e){e.stopPropagation();},false);
		document.body.removeChild(document.body.firstChild);
		//we may have to implement scaling if browsers don't work properly
        if(webkit){
		ctx.move=function(px,py,pz){
			return ctx.moveTo(scalex*px-cx,cy-scaley*py);
		};
        
		ctx.line=function(px,py,pz){
			return ctx.lineTo(scalex*px-cx,cy-scaley*py);
		};
        }else{
            ctx.move=function(px,py,pz){
            if(isNaN(px) || isNaN(py)){
                return;
            }
            if(px>overright){
                px=overright;
            }
            if(px<overleft){
                px=overleft;
            }
            if(py>overtop){
                py=overtop;
            }
            if(py<overbottom){
                py=overbottom;
            }
			return ctx.moveTo(scalex*px-cx,cy-scaley*py);
			return;
			if (!isNaN(py)) {
				if (py > boundtop*4) {
					ctx.moveTo(scalex*(px-cx), scaley*(cy-boundtop*4));
					return;
				} else if (py < boundbottom*4) {
					ctx.moveTo(scalex*(px-cx), scaley*(cy-boundbottom*4));
					return;
				}
				ctx.moveTo(scalex*(px+cx), scaley*(-cy-py));
			}
		};
        
		ctx.line=function(px,py,pz){
            if(isNaN(px) || isNaN(py)){
                return;
            }
            if(px>overright){
                px=overright;
            }
            if(px<overleft){
                px=overleft;
            }
            if(py>overtop){
                py=overtop;
            }
            if(py<overbottom){
                py=overbottom;
            }
			return ctx.lineTo(scalex*px-cx,cy-scaley*py);
			ctx.lineTo(scalex*px-cx, cy-scaley*py);
			return;
			if (!isNaN(py)) {
				if (py > boundtop *4) {
					ctx.lineTo(scalex*(px-cx), scaley*(cy-boundtop*4));
					return;
				} else if (py < boundbottom *4) {
					ctx.lineTo(scalex*(px-cx), scaley*(cy-boundbottom*4));
					return;
				}
				ctx.lineTo(scalex*(px-cx), scaley*(cy-py));
			}
		};
        
        
        
        }
		resize();
	}//end init();
	};//end ui
	

	//Is console visible:
	var _console=false;
    
	ui.console={"show":function(){
        con.style.display="block";
        _console=true;
    },"clear":function(){
        while(logt.firstChild){
            logt.removeChild(logt.firstChild);
        }
        return "Cleared";
	},"hide":function(){
        con.style.display="none";
        _console=false;
	},"toggle":function(){
        if(!_console){
            app.ui.console.show();
            conin.getElementsByTagName("textarea")[0].focus();
            return;
		}
        app.ui.console.hide();
    },"warn":function(x,noshow){
        var div=document.createElement("div");
        var warn=document.createElement("div");
        warn.className="warn";
        div.appendChild(warn);
        div.style.minHeight="23px";
        if(typeof x !="object"){
            div.appendChild(document.createTextNode(x));
        }else{
            div.appendChild(x);
		}
        logt.appendChild(div);
        if(!noshow && !_console){
			app.ui.console.show();
		}
        logt.scrollTop=1e8;    
    },"log":function(x,noshow){
        if(typeof x !="object"){
            var div=document.createElement("div");
            div.appendChild(document.createTextNode(x));
            logt.appendChild(div);
        }else{
            logt.appendChild(x);
		}
        if(!noshow && !_console){
			app.ui.console.show();
		}
        logt.scrollTop=1e8;

	}};
	
	return ui;
})();

function clear(){
    return app.ui.console.clear();
}var usr=(function(){
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



randfuncs = "y=x^2@y^2=1-x^2@2e^{-x}@2x+3@\\lambda=3@e^{-\\lambda*x}@\\left|x^2-4\\right|+2@\\frac1x@x^{-2}@x!@\\ln x@\\sum_{n=1}^{\\infinity}\\frac{x^n}{n}@\\sin x@e^x:\\left[−2,2\\right]@\\tan\\left(x\\right)@\\left(x+2\\right)\\left(x-3\\right)^2	diff\\left(0,2,2x\\right)@\\left(x-2\\right)^2@\\sum_{n=1}^{\\infinity}\\frac{\\sin\\left(\\left(2n−1\\right)x\\right)}{2n−1}@\\prod_{n=1}^5\\left(x-n\\right)@\\sum_{n=0}^5n@x^x@\\Gamma\\left(x\\right)@\\frac{x!}{3!-x}@x%3@\\left(x>3\\right)?2x:-3@\\fact\\left(x\\right)@\\frac\\phi x@\\left(x>=0\\right)?m_e*G/\\left(r_e+100000x\\right)^2:undefined@g\\left[0\\right]'\\left(2x\\right)@g\\left[0\\right]\\left(x\\right)+1@\\sqrt x".split("@");

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
                var varname=eq[0];
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
                throw(ex);
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
app.version="0039993";
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
