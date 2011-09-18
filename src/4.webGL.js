var renderers=[]; //Adds webgl renderer to array.




renderers.push(function() {
	var renderer={
		cam_lat: 0.0,
		cam_long:0.0,
		update: function(){
			drawScene();
		}
	};
	var stats;
	if(window.Stats){
	
		stats = new Stats();
		
		// Align top-left
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';

		document.body.appendChild( stats.domElement );

	}else{
		stats={
			update: function() {
			
			}
		};
	}

	var gl;
	function initGL(canvas) {
		try {
			gl = canvas.getContext("webgl", {antialias: true});
			if (gl === null) {
				gl = canvas.getContext('experimental-webgl', {antialias: true});
			}
			if (gl === null) {
				throw("Fail");
			}
			gl.viewportWidth = canvas.width;
			gl.viewportHeight = canvas.height;
		} catch (e) {
			alert(e);
		}
		window.gl=gl; // DEBUG
		return !!gl;
	}


	function getShader(gl, id) {
		
		var str=shaders[id];
			
		var shader;
		if (/\.fragment$/.test(id)) {
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		}else if (/\.vertex$/.test(id)) {
			shader = gl.createShader(gl.VERTEX_SHADER);
		}else {
		
			console.log(id);
			return null;
		}
		gl.shaderSource(shader, str);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			alert(gl.getShaderInfoLog(shader));
			return null;
		}
		
		return shader;
	}


	var shaderProgram;

	function initShaders() {
		var fragmentShader = getShader(gl, "shader-fs.fragment");
		var vertexShader = getShader(gl, "shader-vs.vertex");
		
		
		shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, vertexShader);
		gl.attachShader(shaderProgram, fragmentShader);
		
		gl.attachShader(shaderProgram, getShader(gl, "g-surface.vertex"));
		gl.attachShader(shaderProgram, getShader(gl, "g-surface.fragment"));
		
		gl.linkProgram(shaderProgram);
		
		shaders=null;
		

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			alert("Could not initialise shaders");
		}

		gl.useProgram(shaderProgram);

		shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
		gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

		shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
		shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
		shaderProgram.colorUniform = gl.getUniformLocation(shaderProgram, "uColor");
	}


	var mvMatrix = mat4.create();
	var pMatrix = mat4.create();

	function setMatrixUniforms() {
		gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
		gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
	}
	function color(r,g,b,a){
		gl.uniform4f(shaderProgram.colorUniform, r,g,b,a);
	}


	var majorGridVertexPositionBuffer;
	var squareVertexPositionBuffer;
	var minorGridVertexPositionBuffer;
	function initBuffers() {
		majorGridVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, majorGridVertexPositionBuffer);
		var lt =0.01;
		var vertices = [
			-5.0, -lt,  0.0,
			-5.0,  lt,  0.0,
			+5.0, -lt,  0.0,
			+5.0,  lt,  0.0,
			
			+5.0, +lt*15.0,  0.0,
			+5.3, +0.0,  0.0,
			+5.0, -lt*15.0,  0.0,
			
			
			+5.0, -lt*15.0,  0.0,
			-lt,  -5.0,  0.0,
			
			-lt,  -5.0,  0.0,
			+lt, -5.0,  0.0,
			-lt,  5.0,  0.0,
			+lt, 5.0,  0.0,
		      
			+lt*15.0, 5.0,  0.0,
			+0.0, 5.3,  0.0,
			-lt*15.0, 5.0,  0.0,
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		majorGridVertexPositionBuffer.itemSize = 3;
		majorGridVertexPositionBuffer.numItems = vertices.length/3;

		squareVertexPositionBuffer = gl.createBuffer();
		minorGridVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
		vertices = [];
		var minorGrid = [];
		var x;
		var i = 0.25;
		var limt = 5.0/i;
		for(x=-limt;x<=limt;x++){
			if(x==0.0){
			} else if(x%4==0){
				vertices.push(-5,x*i,0);
				vertices.push(+5,x*i,0);
			}else{
				minorGrid.push(-5,x*i,0);
				minorGrid.push(+5,x*i,0);
			}
		}
		for(x=-limt;x<=limt;x++){
			if(x==0.0){
			}else if(x%4==0){
				vertices.push(x*i,-5,0);
				vertices.push(x*i,+5,0);
			}else{
				minorGrid.push(x*i,-5,0);
				minorGrid.push(x*i,+5,0);
			}
		}
			
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		squareVertexPositionBuffer.itemSize = 3;
		squareVertexPositionBuffer.numItems = vertices.length/3;
	
		gl.bindBuffer(gl.ARRAY_BUFFER, minorGridVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(minorGrid), gl.STATIC_DRAW);
		minorGridVertexPositionBuffer.itemSize = 3;
		minorGridVertexPositionBuffer.numItems = minorGrid.length/3;
}
	function printMatrix(x){
		var len = ~~Math.sqrt(x.length);
		var str=[];
		var i;
		for(i=0;i<x.length;i++){
			if(i%len==0){
				str.push("\n");
			}
			if(x[i]>=0){
				str.push(" ");
			}
			str.push(" "+x[i].toFixed(4));
			
		}
		return str.join("");
	}

	var cam_lat_now=0.0;
	var cam_long_now=0.0;
	
	var animating=false;
	
	function drawScene() {
		
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	
		mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
		mat4.identity(mvMatrix);
		mat4.translate(mvMatrix, [0, 0.0, -10.0]);
		
		if(animating){
			cam_lat_now+=0.3*(renderer.cam_lat-t);
			cam_long_now+=0.3*(renderer.cam_lat-t);
		}else{
			cam_lat_now=renderer.cam_lat;
			cam_long_now=renderer.cam_long;
		}
		mat4.rotate(mvMatrix, cam_lat_now, [-1.0, 0.0, 0.0]);
		mat4.rotate(mvMatrix, cam_long_now, [0.0, 0.0, 1.0]);
		
		
		gl.bindBuffer(gl.ARRAY_BUFFER, majorGridVertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, majorGridVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		color(0.0,0.0,0.0,1.0);
		setMatrixUniforms();
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, majorGridVertexPositionBuffer.numItems);
		
		
		
		gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		color(0.6,0.6,0.6,1.0);
		setMatrixUniforms();
		gl.drawArrays(gl.LINES, 0, squareVertexPositionBuffer.numItems);


			
		gl.bindBuffer(gl.ARRAY_BUFFER, minorGridVertexPositionBuffer);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, minorGridVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		color(0.85,0.85,0.85,1.0);
		setMatrixUniforms();
		gl.drawArrays(gl.LINES, 0, minorGridVertexPositionBuffer.numItems);
		
		stats.update();

	}
	function tick(){
		requestAnimFrame(tick);
		drawScene();
	}

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
}());