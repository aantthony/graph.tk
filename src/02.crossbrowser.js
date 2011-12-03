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

//hack for now
Math.e=Math.E;
Math.pi=Math.PI;
window.Float32Array = Float32Array || window.Array;

var startupTime = new Date();

var d=document;

//debug:
window.debug = {};