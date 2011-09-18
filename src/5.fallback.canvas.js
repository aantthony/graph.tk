renderers.push(function() {
	var renderer={
		update: function() {
			
		}
	};
	
	
	
	renderer.start = function (canvas) {
		if(!initGL(canvas)){
			return false;
		}
		initShaders();
		initBuffers();

		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.enable(gl.DEPTH_TEST);

		drawScene();
		return true;
	}
	
	return renderer;
});