var renderers=[]; //Adds webgl renderer to array.




renderers.push(function() {
	var renderer={
		cam_lat: 0.0,
		cam_long:0.0,
		update: function(){
			drawScene();
		},
		add: function(name, eqn){
			createSurface(name, eqn);
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


	shaderProgram={};
	surfaceProgram={};
	function initShaders() {
		check("start");
		shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, getShader(gl, "shader-vs.vertex"));
		gl.attachShader(shaderProgram, getShader(gl, "shader-fs.fragment"));
		gl.linkProgram(shaderProgram);
		
		
		surfaceProgram = gl.createProgram();
		gl.attachShader(surfaceProgram, getShader(gl, "g-surface.vertex"));
		gl.attachShader(surfaceProgram, getShader(gl, "g-surface.fragment"));
		gl.linkProgram(surfaceProgram);
		check("shaders 2");
		
		shaders=null;
		

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			alert("Could not initialise shaders");
		}
		
		if (!gl.getProgramParameter(surfaceProgram, gl.LINK_STATUS)) {
			alert("Could not initialise surface shader.");
		}


		shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
		gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

		shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
		shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
		shaderProgram.colorUniform = gl.getUniformLocation(shaderProgram, "uColor");
		
		surfaceProgram.vertexPositionAttribute = gl.getAttribLocation(surfaceProgram, "aVertexPosition");
		gl.enableVertexAttribArray(surfaceProgram.vertexPositionAttribute);
		
		surfaceProgram.vertexNormalAttribute = gl.getAttribLocation(surfaceProgram, "aVertexNormal");
		gl.enableVertexAttribArray(surfaceProgram.vertexNormalAttribute);

		surfaceProgram.pMatrixUniform = gl.getUniformLocation(surfaceProgram, "uPMatrix");
		surfaceProgram.mvMatrixUniform = gl.getUniformLocation(surfaceProgram, "uMVMatrix");
		surfaceProgram.colorUniform = gl.getUniformLocation(surfaceProgram, "uColor");
		
		
		check("Init Shaders");
	}


	var mvMatrix = mat4.create();
	var pMatrix = mat4.create();




	var cam_lat_now=0.0;
	var cam_long_now=0.0;
	
	var animating=false;
	
	var surfaces = {};
	
	
	var majorGridVertexPositionBuffer;
	var axesVertexPositionBuffer;
	var minorGridVertexPositionBuffer;
	function createSurface(){
		var surface = {};
		surface.vertexPositionBuffer = gl.createBuffer();
		surface.vertexNormalBuffer = gl.createBuffer();
		
		var verts = [];
		var xi,yi;
		var N=20;
		var r=5.0;
		var rN=r/N;
		function f(x,y){
			return Math.sin(x+y);
		}
		for(xi=0;xi<N;xi++){
			for(yi=0;yi<N;yi++){
				var xf=xi*rN;
				var yf=yi*rN;
				verts.push(xf,yf,f(xf,yf));
			}
		}
		var tverts=[verts[0],verts[1],verts[2]];
		for(xi=0;xi<N;xi++){
			
			
				var vb = 3*((xi+1)*N);
				tverts.push(verts[vb],verts[vb+1],verts[vb+2]);
				
			for(yi=1;yi<N;yi++){
				var va = 3*(xi*N+yi);
				var vb = 3*((xi+1)*N+yi);
				tverts.push(verts[va],verts[va+1],verts[va+2]);
				tverts.push(verts[vb],verts[vb+1],verts[vb+2]);
			}
			xi++;
			
				var vb = 3*((xi+1)*N+N-1);
				tverts.push(verts[vb],verts[vb+1],verts[vb+2]);
				
			for(yi=N-2;yi>=0;yi--){
				var va = 3*(xi*N+yi);
				var vb = 3*((xi+1)*N+yi);
				tverts.push(verts[va],verts[va+1],verts[va+2]);
				tverts.push(verts[vb],verts[vb+1],verts[vb+2]);
			}
			
		}
		
		
		gl.bindBuffer(gl.ARRAY_BUFFER, surface.vertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tverts), gl.STATIC_DRAW);
		surface.vertexPositionBuffer.itemSize = 3;
		surface.vertexPositionBuffer.numItems = tverts.length/3;
		
		var normals = [];
		var l = tverts.length/3;
		for(var i=0;i<l;i++){
			normals.push(0,0,1);
		}
		gl.bindBuffer(gl.ARRAY_BUFFER, surface.vertexNormalBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
		surface.vertexNormalBuffer.itemSize = 3;
		surface.vertexNormalBuffer.numItems = tverts.length/3;
		
		check("create_surface");
		return surface;
		
	}
	function initBuffers() {
		axesVertexPositionBuffer = gl.createBuffer();
		majorGridVertexPositionBuffer = gl.createBuffer();
		minorGridVertexPositionBuffer = gl.createBuffer();
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
		
		gl.bindBuffer(gl.ARRAY_BUFFER, axesVertexPositionBuffer);
		console.log("axesVertexPositionBuffer", vertices);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		axesVertexPositionBuffer.itemSize = 3;
		axesVertexPositionBuffer.numItems = vertices.length/3;

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
		
		gl.bindBuffer(gl.ARRAY_BUFFER, majorGridVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		majorGridVertexPositionBuffer.itemSize = 3;
		majorGridVertexPositionBuffer.numItems = vertices.length/3;
	
		gl.bindBuffer(gl.ARRAY_BUFFER, minorGridVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(minorGrid), gl.STATIC_DRAW);
		minorGridVertexPositionBuffer.itemSize = 3;
		minorGridVertexPositionBuffer.numItems = minorGrid.length/3;
		check("init buffers");
		surfaces.test = createSurface();
	}
	
	function check(n){
		var x;
		while(x=gl.getError()){
			var str="";
			for(i in gl){if(gl[i]==1281){str=i;}}
			console.log(n+": "+x+": "+str);
		}
	}
	function drawScene() {
		
		var p;
		
		gl.getError();
		check(0);
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		
        mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
		mat4.identity(mvMatrix);
		mat4.translate(mvMatrix, [0, 0, -10]);
		cam_lat_now = renderer.cam_lat;
		cam_long_now = renderer.cam_long;
		mat4.rotate(mvMatrix, cam_lat_now, [-1, 0, 0]);
		mat4.rotate(mvMatrix, cam_long_now, [0, 0, 1]);
		
		gl.useProgram(p=shaderProgram);
		
        gl.uniformMatrix4fv(p.pMatrixUniform, false, pMatrix);
        gl.uniformMatrix4fv(p.mvMatrixUniform, false, mvMatrix);

		
		gl.uniform4f(shaderProgram.colorUniform, 0.0,0.0,0.0, 1.0);

		gl.bindBuffer(gl.ARRAY_BUFFER, axesVertexPositionBuffer);
		gl.vertexAttribPointer(p.vertexPositionAttribute, axesVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLE_STRIP,0,axesVertexPositionBuffer.numItems);
		
		gl.uniform4f(p.colorUniform, 0.7,0.7,0.7, 1.0);

        gl.bindBuffer(gl.ARRAY_BUFFER, minorGridVertexPositionBuffer);
		gl.vertexAttribPointer(p.vertexPositionAttribute, minorGridVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.LINES,0,minorGridVertexPositionBuffer.numItems);
	
		gl.uniform4f(p.colorUniform, 0.5,0.5,0.5, 1.0);
		
        gl.bindBuffer(gl.ARRAY_BUFFER, majorGridVertexPositionBuffer);
		gl.vertexAttribPointer(p.vertexPositionAttribute, majorGridVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.LINES,0,majorGridVertexPositionBuffer.numItems);

		gl.useProgram(p=surfaceProgram);
		
        gl.uniformMatrix4fv(p.pMatrixUniform, false, pMatrix);
        gl.uniformMatrix4fv(p.mvMatrixUniform, false, mvMatrix);

		
		
		var surface = surfaces.test;
			gl.uniform4f(p.colorUniform, 0.0,0.5,1.0, 1.0);

	        gl.bindBuffer(gl.ARRAY_BUFFER, surface.vertexPositionBuffer);
			gl.vertexAttribPointer(p.vertexPositionAttribute, surface.vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			
	        gl.bindBuffer(gl.ARRAY_BUFFER, surface.vertexNormalBuffer);
			gl.vertexAttribPointer(p.vertexNormalAttribute, surface.vertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
			
			gl.drawArrays(gl.LINE_STRIP,0,surface.vertexPositionBuffer.numItems);
		
		check("draw");
		//stats.update();
	}
	expose(check);
	expose(drawScene);
	
	/*function tick(){
		requestAnimFrame(tick);
		drawScene();
	}
	*/

	renderer.start = function (canvas) {
		if(!initGL(canvas)){
			return false;
		}
		
			check("before even start");
		initShaders();
				check("initshaders");
		initBuffers();

		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.enable(gl.DEPTH_TEST);
		
			check("start");
		drawScene();
		return true;
	}
	return renderer;
}());