	var gl;

	window.requestAnimFrame = (function() {
	  return window.requestAnimationFrame ||
	         window.webkitRequestAnimationFrame ||
	         window.mozRequestAnimationFrame ||
	         window.oRequestAnimationFrame ||
	         window.msRequestAnimationFrame ||
	         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
	           window.setTimeout(callback, 1000/60);
	         };
	})();
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
	        }
	        if (!gl) {
	            alert("Could not initialise WebGL, sorry :-(");
	        }
	    }


	    function getShader(gl, id) {
		
			var str=shaders[id];
			
	        var shader;
	        if (/\.fragment$/.test(id)) {
	            shader = gl.createShader(gl.FRAGMENT_SHADER);
	        } else if (/\.vertex$/.test(id)) {
	            shader = gl.createShader(gl.VERTEX_SHADER);
	        } else {
		
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
			shaders=null;
	        shaderProgram = gl.createProgram();
	        gl.attachShader(shaderProgram, vertexShader);
	        gl.attachShader(shaderProgram, fragmentShader);
	        gl.linkProgram(shaderProgram);

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


	    var triangleVertexPositionBuffer;
	    var squareVertexPositionBuffer;
		var minorGridVertexPositionBuffer;
	    function initBuffers() {
	        triangleVertexPositionBuffer = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
			var lt =0.01;
	        var vertices = [
	             -5.0, -lt,  0.0,
		         -5.0,  lt,  0.0,
		          5.0, -lt,  0.0,
				  5.0,  lt,  0.0,
				
				  5.0, lt*15.0,  0.0,
				  5.3, 0.0,  0.0,
				 5.0, -lt*15.0,  0.0,
				
				
				 5.0, -lt*15.0,  0.0,
				 -lt,  -5.0,  0.0,
				
				 -lt,  -5.0,  0.0,
			      lt, -5.0,  0.0,
			     -lt,  5.0,  0.0,
			      lt, 5.0,  0.0,
			      
				  lt*15.0, 5.0,  0.0,
				  0.0, 5.3,  0.0,
				 -lt*15.0, 5.0,  0.0,
			

	        ];
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	        triangleVertexPositionBuffer.itemSize = 3;
	        triangleVertexPositionBuffer.numItems = vertices.length/3;

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
				}else if(x%4==0){
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
				cam_lat_now+=0.3*(cam_lat-t);
				cam_long_now+=0.3*(cam_lat-t);
			}else{
				cam_lat_now=cam_lat;
				cam_long_now=cam_long;
			}
	        mat4.rotate(mvMatrix, cam_lat, [-1.0, 0.0, 0.0]);
	        mat4.rotate(mvMatrix, cam_long, [0.0, 0.0, 1.0]);
	
	
			gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
			gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			color(0.0,0.0,0.0,1.0);
			setMatrixUniforms();
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, triangleVertexPositionBuffer.numItems);


			
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


	
			

	    }
		function tick(){
			requestAnimFrame(tick);
	        drawScene();
		}
	
	    function webGLStart(canvas) {
	        initGL(canvas);
	        initShaders();
	        initBuffers();

	        gl.clearColor(1.0, 1.0, 1.0, 1.0);
	        gl.enable(gl.DEPTH_TEST);

			drawScene();
	    }
		
	var cam_lat=0;	
	var cam_long=0;
	