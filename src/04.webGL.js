var renderers=[]; //Adds webgl renderer to array.




renderers.push(function(canvas) {
	var renderer={
		cam_lat: 0.0,
		cam_long:0.0,
		cam_dist: 10.0,
		update: function(){
			drawScene();
		},
		
		//Updates from app.js
		createGraph:function(id, g, f){
			surfaces[id]=new Surface(f||function(x,y){return x+y});
			drawScene();
		},
		updateGraph:function(id, g){
			//surfaces[id].animateTo();
			surfaces[id].destroy();
			surfaces[id]=new Surface(new Function("x,y","return "+g.math.toExpression("text/javascript")));
			drawScene();
		},
		destroyGraph:function(id){
			
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


	function getShader(gl, id, data) {
		
		var str=shaders[id];
			
		var shader;
		if (/\.fragment$/.test(id)) {
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		}else if (/\.vertex$/.test(id)) {
			shader = gl.createShader(gl.VERTEX_SHADER);
		}else {
			throw("Unkown filetype");
			return null;
		}
		if(data!==undefined){
			str=str.replace("#import javascript\n",data);
		}
		gl.shaderSource(shader, str);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			alert(gl.getShaderInfoLog(shader));
			return null;
		}
		
		return shader;
	}


	var shaderProgram={};
	var surfaceProgram={};
	function initShaders() {
		check("start");
		shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, getShader(gl, "shader-vs.vertex"));
		gl.attachShader(shaderProgram, getShader(gl, "shader-fs.fragment"));
		gl.linkProgram(shaderProgram);
		
		
		check("shaders 2");
		

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			alert("Could not initialise shaders");
		}
		
		gl.useProgram(shaderProgram);
		
		shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
		
		shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
		shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
		shaderProgram.colorUniform = gl.getUniformLocation(shaderProgram, "uColor");




		surfaceProgram = gl.createProgram();
		gl.attachShader(surfaceProgram, getShader(gl, "g-surface.vertex"));
		gl.attachShader(surfaceProgram, getShader(gl, "g-surface.fragment"));
		gl.linkProgram(surfaceProgram);
		
		if (!gl.getProgramParameter(surfaceProgram, gl.LINK_STATUS)) {
			alert("Could not initialise surface shader.");
		}
		
		surfaceProgram.vertexPositionAttribute = gl.getAttribLocation(surfaceProgram, "aVertexPosition");

		surfaceProgram.vertexNormalAttribute = gl.getAttribLocation(surfaceProgram, "aVertexNormal");

		surfaceProgram.heightAttribute = gl.getAttribLocation(surfaceProgram, "aHeight");
		
		surfaceProgram.pMatrixUniform = gl.getUniformLocation(surfaceProgram, "uPMatrix");
		surfaceProgram.mvMatrixUniform = gl.getUniformLocation(surfaceProgram, "uMVMatrix");
        surfaceProgram.nMatrixUniform = gl.getUniformLocation(surfaceProgram, "uNMatrix");
		surfaceProgram.colorUniform = gl.getUniformLocation(surfaceProgram, "uColor");
		
		surfaceProgram.pointLightingLocationUniform = gl.getUniformLocation(surfaceProgram, "uPointLightingLocation");
		//TODO: clear this:
		//shaders=null;
		
		
		check("Init Shaders");
	}


	var mvMatrix = mat4.create();
	var pMatrix = mat4.create();
	
	var cam_lat_now=0.0;
	var cam_long_now=0.0;
	var cam_dist_now=10.0;
	
	var animating=false;
	
	var surfaces = {};
	var regionsXY = {};
	
	
	var majorGridVertexPositionBuffer;
	var axesVertexPositionBuffer;
	var minorGridVertexPositionBuffer;
	var surfaceVertexPositionBuffer;
	
	var N=250;
	var triangle_strip_plane;
	function createSurfaceVertexPositionBuffer(){
		surfaceVertexPositionBuffer = gl.createBuffer();
		var verts = [];
		var xi,yi;
		var r=5.0;
		var rN=2.0*r/N;
		var xf0 = -r;
		var yf0 = -r;
		
		for(xi=0;xi<N;xi++){
			for(yi=0;yi<N;yi++){
				var xf=xi*rN+xf0;
				var yf=yi*rN+yf0;
				verts.push(xf,yf);
			}
		}
		
		
		var tverts=[verts[0],verts[1]];
		for(xi=0;xi<N-1;xi++){
			
			
				var vb = 2*((xi+1)*N);
				tverts.push(verts[vb],verts[vb+1]);
				
			for(yi=1;yi<N;yi++){
				var va = 2*(xi*N+yi);
				var vb = 2*((xi+1)*N+yi);
				tverts.push(verts[va],verts[va+1]);
				tverts.push(verts[vb],verts[vb+1]);
			}
				xi++;
				if(xi+1>=N){
					break;
				}
				var vb = 2*((xi+1)*N+N-1);
				tverts.push(verts[vb],verts[vb+1]);
				
			for(yi=N-2;yi>=0;yi--){
				var va = 2*(xi*N+yi);
				var vb = 2*((xi+1)*N+yi);
				tverts.push(verts[va],verts[va+1]);
				tverts.push(verts[vb],verts[vb+1]);
			}
			
		}
		gl.bindBuffer(gl.ARRAY_BUFFER, surfaceVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, triangle_strip_plane = new Float32Array(tverts), gl.STATIC_DRAW);
		surfaceVertexPositionBuffer.itemSize = 2;
		surfaceVertexPositionBuffer.numItems = triangle_strip_plane.numItems = tverts.length/2;
	}
	
	function createRegionXY(str){
		//f=f||function(x,y){return x*x*+y*y<4.0;};
		str=str||"x*x+y*y<4.0";
		var region = {};
		var p;
		region.program = p = gl.createProgram();
		gl.attachShader(p, getShader(gl, "g-region-xy.vertex"));
		gl.attachShader(p, getShader(gl, "g-region-xy.fragment", "bool f(float x,float y){return "+str+";}"));
		gl.linkProgram(p);
		
		if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
			alert("Could not initialise shaders");
		}
		gl.useProgram(p);

		p.vertexPositionAttribute = gl.getAttribLocation(p, "aVertexPosition");

		p.pMatrixUniform = gl.getUniformLocation(p, "uPMatrix");
		p.mvMatrixUniform = gl.getUniformLocation(p, "uMVMatrix");
		p.colorUniform = gl.getUniformLocation(p, "uColor");

		
		
		region.color = new Float32Array([126/256,179/256,217/256,0.2]);
		
		region.surfaceVertexPositionBuffer=gl.createBuffer();
		
		gl.bindBuffer(gl.ARRAY_BUFFER, region.surfaceVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, triangle_strip_plane, gl.STATIC_DRAW);
		region.surfaceVertexPositionBuffer.itemSize = 2;
		region.surfaceVertexPositionBuffer.numItems = triangle_strip_plane.numItems;
		check("create region");
		
		return region;
		
	}
	
	function Surface(f){
		
		this.heightBuffer = gl.createBuffer();
		this.vertexNormalBuffer = gl.createBuffer();
		
		var verts = [];
		var xi,yi;
		var r=5.0;
		var rN=2.0*r/N;
		var xf0 = -r;
		var yf0 = -r;
		f=f||function (x,y){
			//return 0.1;
			return Math.sin(x+y);
		};
		for(xi=0;xi<N;xi++){
			for(yi=0;yi<N;yi++){
				var xf=xi*rN+xf0;
				var yf=yi*rN+yf0;
				verts.push(f(xf,yf));
			}
		}
		var norms = [];
		function cross(a,b){
			return [
				a[1]*b[2]-a[2]*b[1],
				a[2]*b[0]-a[0]*b[2],
				a[0]*b[1]-a[1]*b[0]
			];
		}
		function normal(x0,y0,dx1,dy1,dx2,dy2,swap){
			
			var hm = (x0*N+y0);
			var vm = 3*hm;
			var ha = ((x0+dx1)*N+y0+dy1);
			var hb = ((x0+dx2)*N+y0+dy2);
			var va = 3*ha;
			var vb = 3*hb;
			var M=[x0*rN,y0*rN,verts[hm]];
			var MA=[dx1*rN,dy1*rN,verts[ha]-verts[hm]];
			var MB=[dx2*rN,dy2*rN,verts[hb]-verts[hm]];
			var c=cross(MA, MB);
			if(swap){
				norms.push(c[0],c[1],c[2]);
			}else{
				norms.push(-c[0],-c[1],-c[2]);
			}
		}
		
		
		for(xi=0,yi=0;yi<N-1;yi++){
			normal(xi,yi, 1,0, 0,1,true);
		}
		normal(xi,yi, 1,0, 0,-1);
		for(xi=1;xi<N-1;xi++){
			yi=0;
			normal(xi,yi, -1,0, 0,1);
			
			for(yi=1;yi<N-1;yi++){
				normal(xi,yi, -1,0, 0,1);
			}
			normal(xi,yi, -1,0, 0,-1,true);
		}
		for(yi=0;yi<N-1;yi++){
			normal(xi,yi, -1,0, 0,1);
		}
		normal(xi,yi, -1,0, 0,-1,true);
		
		var tverts=[verts[0]];
		var tnorms=[norms[0],norms[1],norms[2]];
		for(xi=0;xi<N-1;xi++){
			
				var hb = ((xi+1)*N);
				var vb = 3*hb;
				tverts.push(verts[hb]);
				tnorms.push(norms[vb],norms[vb+1],norms[vb+2]);
				
			for(yi=1;yi<N;yi++){
				var ha = (xi*N+yi);
				var hb = ((xi+1)*N+yi);
				var va = 3*ha;
				var vb = 3*hb;
				tverts.push(verts[ha]);
				tverts.push(verts[hb]);
				tnorms.push(norms[va],norms[va+1],norms[va+2]);
				tnorms.push(norms[vb],norms[vb+1],norms[vb+2]);
			}
				xi++;
				if(xi+1>=N){
					break;
				}
				var hb = ((xi+1)*N+N-1);
				var vb = 3*hb;
				tverts.push(verts[hb]);
				tnorms.push(norms[vb],norms[vb+1],norms[vb+2]);
				
			for(yi=N-2;yi>=0;yi--){
				var ha=(xi*N+yi);
				var hb=((xi+1)*N+yi);
				var va = 3*ha;
				var vb = 3*hb;
				tverts.push(verts[ha]);
				tverts.push(verts[hb]);
				tnorms.push(norms[va],norms[va+1],norms[va+2]);
				tnorms.push(norms[vb],norms[vb+1],norms[vb+2]);
			}
			
		}
		
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.heightBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tverts), gl.STATIC_DRAW);
		this.heightBuffer.itemSize = 1;
		this.heightBuffer.numItems = tverts.length;
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tnorms), gl.STATIC_DRAW);
		this.vertexNormalBuffer.itemSize = 3;
		this.vertexNormalBuffer.numItems = tnorms.length/3;
		if(false){
			var dnorms = [];
			var i;
			var l = verts.length*3;
			for(i=0;i<l;i+=3){
				dnorms.push(verts[i]/*fix this!*/,verts[i+1],verts[i+2]);
				var nx=norms[i],
					ny=norms[i+1],
					nz=norms[i+2];
				var m = 4.0*Math.sqrt(nx*nx+ny*ny+nz*nz);
				dnorms.push(verts[i]+nx/m,verts[i+1]+ny/m,verts[i+2]+nz/m);
			}
		
			this.vertexNormalDisplayBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalDisplayBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dnorms), gl.STATIC_DRAW);
			this.vertexNormalDisplayBuffer.itemSize = 3;
			this.vertexNormalDisplayBuffer.numItems = dnorms.length/3;
		}
		
		//surface.color=new Float32Array([214/256,148/256,32/256,1.0]);
		this.color=new Float32Array([Math.random(),Math.random(),Math.random(),1.0]);
	}
	Surface.prototype.destroy=function(){
		//clean up memory?
	};
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
		createSurfaceVertexPositionBuffer();
		check("init shared surface buffer");
		//regionsXY.test = createRegionXY();
		check("init surface buffer");
	}
	function go(f){
		gl.getError();
		//surfaces[Math.random()] = ne Surface(f);
		regionsXY[Math.random()] = createRegionXY(f);
		drawScene();
	}
	expose(go);
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
		
			
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		gl.disable(gl.BLEND);
		gl.enable(gl.DEPTH_TEST);
		gl.depthMask(true)

		//gl.disable(gl.BLEND);
		//gl.enable(gl.DEPTH_TEST);

		
		
        mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.01, 100.0, pMatrix);
		mat4.identity(mvMatrix);
		cam_lat_now = renderer.cam_lat;
		cam_long_now = renderer.cam_long;
		cam_dist_now = renderer.cam_dist;
		mat4.translate(mvMatrix, [0, 0, -cam_dist_now]);
		mat4.rotate(mvMatrix, cam_lat_now, [-1, 0, 0]);
		mat4.rotate(mvMatrix, cam_long_now, [0, 0, 1]);
		
		gl.useProgram(p=surfaceProgram);
		gl.enableVertexAttribArray(surfaceProgram.vertexPositionAttribute);
		gl.enableVertexAttribArray(surfaceProgram.vertexNormalAttribute);
		gl.enableVertexAttribArray(surfaceProgram.heightAttribute);
		
		
        gl.uniformMatrix4fv(p.pMatrixUniform, false, pMatrix);
        gl.uniformMatrix4fv(p.mvMatrixUniform, false, mvMatrix);


        var normalMatrix = mat3.create();
        mat4.toInverseMat3(mvMatrix, normalMatrix);
        mat3.transpose(normalMatrix);
		
		check("before a");
        gl.uniformMatrix3fv(p.nMatrixUniform, false, normalMatrix);
		
		
		gl.uniform3f(p.pointLightingLocationUniform, 0,0,10.0);
		
		foreach(surfaces,function(name, surface) {
			
			gl.uniform4fv(p.colorUniform, surface.color);

	        gl.bindBuffer(gl.ARRAY_BUFFER, surfaceVertexPositionBuffer);
			gl.vertexAttribPointer(p.vertexPositionAttribute, surfaceVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			
			
	        gl.bindBuffer(gl.ARRAY_BUFFER, surface.heightBuffer);
			gl.vertexAttribPointer(p.heightAttribute, surface.heightBuffer.itemSize, gl.FLOAT, false, 0, 0);

	        gl.bindBuffer(gl.ARRAY_BUFFER, surface.vertexNormalBuffer);
			gl.vertexAttribPointer(p.vertexNormalAttribute, surface.vertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
			
			gl.drawArrays(gl.TRIANGLE_STRIP,0,surfaceVertexPositionBuffer.numItems);

		});
		gl.disableVertexAttribArray(surfaceProgram.vertexPositionAttribute);
		gl.disableVertexAttribArray(surfaceProgram.vertexNormalAttribute);
		gl.disableVertexAttribArray(surfaceProgram.heightAttribute);
		gl.enable(gl.BLEND);
		
		gl.depthMask(false)
		foreach(regionsXY,function(name, region) {
			
			gl.useProgram(p=region.program);
			gl.uniform4fv(p.colorUniform, region.color);
			
			gl.enableVertexAttribArray(p.vertexPositionAttribute);
			
	        gl.uniformMatrix4fv(p.pMatrixUniform, false, pMatrix);
	        gl.uniformMatrix4fv(p.mvMatrixUniform, false, mvMatrix);

			
	        gl.bindBuffer(gl.ARRAY_BUFFER, region.surfaceVertexPositionBuffer);
			gl.vertexAttribPointer(p.vertexPositionAttribute, region.surfaceVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

			gl.drawArrays(gl.TRIANGLE_STRIP,0,region.surfaceVertexPositionBuffer.numItems);
			
			gl.disableVertexAttribArray(p.vertexPositionAttribute);
			
		});
		
	
	
			gl.useProgram(p=shaderProgram);
			gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

	        gl.uniformMatrix4fv(p.pMatrixUniform, false, pMatrix);
	        gl.uniformMatrix4fv(p.mvMatrixUniform, false, mvMatrix);

			gl.uniform4f(p.colorUniform, 0.0,0.0,0.0, 1.0);

			gl.bindBuffer(gl.ARRAY_BUFFER, axesVertexPositionBuffer);
			gl.vertexAttribPointer(p.vertexPositionAttribute, axesVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			gl.drawArrays(gl.TRIANGLE_STRIP,0,axesVertexPositionBuffer.numItems);

			gl.uniform4f(p.colorUniform, 0.0,0.0,0.0, 0.7);

	        gl.bindBuffer(gl.ARRAY_BUFFER, minorGridVertexPositionBuffer);
			gl.vertexAttribPointer(p.vertexPositionAttribute, minorGridVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			gl.drawArrays(gl.LINES,0,minorGridVertexPositionBuffer.numItems);

			gl.uniform4f(p.colorUniform, 0.0,0.0,0.0, 0.5);

	        gl.bindBuffer(gl.ARRAY_BUFFER, majorGridVertexPositionBuffer);
			gl.vertexAttribPointer(p.vertexPositionAttribute, majorGridVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			gl.drawArrays(gl.LINES,0,majorGridVertexPositionBuffer.numItems);



			foreach(surfaces,function(name, surface) {
				//normal
					if(surface.vertexNormalDisplayBuffer){
						gl.uniform4f(p.colorUniform, 1-surface.color[0],1-surface.color[1],1-surface.color[2],1.0);
				   		gl.bindBuffer(gl.ARRAY_BUFFER, surface.vertexNormalDisplayBuffer);
						gl.vertexAttribPointer(p.vertexPositionAttribute, surface.vertexNormalDisplayBuffer.itemSize, gl.FLOAT, false, 0, 0);
						gl.drawArrays(gl.LINES,0,surface.vertexNormalDisplayBuffer.numItems);
					}
			});


			gl.disableVertexAttribArray(shaderProgram.vertexPositionAttribute);
		
			gl.disable(gl.BLEND);


		stats.update();
	}
	expose(check);
	expose(drawScene);
	
	function tick(){
		requestAnimFrame(tick);
		drawScene();
	}
	
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
		gl.depthFunc(gl.LEQUAL);
	
			check("start x");
		drawScene();
		return renderer;
	}
	return renderer.start(canvas);
});