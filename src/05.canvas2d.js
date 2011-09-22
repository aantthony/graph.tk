renderers.push(function() {
	var renderer={
		update: function() {
			
		}
	};
	
	function initCanvas(canvas){
		canvas.pMatrix = [];
	}
	
	
	renderer.start = function (canvas) {
		if(!initCanvas(canvas)){
			return false;
		}
		
		return true;
	}
	
	return renderer;
});