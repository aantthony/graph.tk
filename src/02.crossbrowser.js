window.requestAnimFrame = window.requestAnimFrame || (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           window.setTimeout(callback, 1000/60);
	};
})();

function foreach(t,f){
	return Object.keys(t).forEach(function(x) {
		return f(x,t[x]);
	});
}


function expose(f){
	window[f.name]=f;
	return f;
};
var startupTime = new Date();


//hack for now
window.__proto__.__proto__=Math;
Math.e=Math.E;
Math.pi=Math.PI;
window.Float32Array = Float32Array || window.Array;