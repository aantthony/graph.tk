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


Object.prototype.forEach=function(f){
	var self=this;
	return Object.keys(this).forEach(function(x) {
		return f(x,self[x]);
	});
};


function expose(f){
	window[f.name]=f;
	return f;
};
var startupTime = new Date();

window.Float32Array = Float32Array || window.Array;