GL.surface2 = function(g){
	var surface2D_opacity = 1.0;
	var gl = GL.surface2.gl;
	var m;
	if(g.math[0]==="z"){
		m = g.math[1];
	}else{
		m = g.math[0];
	}
	
	var vert = gl.createShader(gl.VERTEX_SHADER);
	var frag = gl.createShader(gl.FRAGMENT_SHADER);
	
	var str_f = shaders["surface2.fragment"];
	var str_v = shaders["surface2.vertex"];
	/*
	n = crossp(D_x (x,y,f(x,y)), D_y (x,y,f(x,y))
	n = (1, 0, d_x f) x (0, 1, d_y f)
	  = |     i		 j		k   |
		|    1		 0	  d_x f |
		|    0       1    d_y f |
		
	  =  (-d_x f, -d_y f, 1)
	*/
	//TODO: vector support in jscas
	var x = m.differentiate("x", 1).apply("*",-1);
	var y = m.differentiate("y", 1).apply("*",-1);
	var z = 1;
	
	var x_expr = x.toTypedExpression("x-shader/x-fragment");
	var y_expr = y.toTypedExpression("x-shader/x-fragment");
	var z_expr = z.toTypedExpression("x-shader/x-fragment");
	
	var f_expr = m.toTypedExpression("x-shader/x-fragment");
	//console.log(f_expr.s);
	var vec3_n_s = "vec3 n(float x, float y){return vec3("+[x_expr.s,y_expr.s,z_expr.s].join(",")+");}";
	var float_f_s = "float f(float x, float y){return "+f_expr.s+";}";
	str_f = gl.import(str_f, "");
	str_v = gl.import(str_v, float_f_s+vec3_n_s);

	console.log(str_v);
	console.log(str_f);
	
	gl.shaderSource(vert, str_v);
	gl.shaderSource(frag, str_f);
	gl.compileShader(frag);
	gl.compileShader(vert);
	
	if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS)) {
		throw(gl.getShaderInfoLog(vert));
	}
	
	if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS)) {
		throw(gl.getShaderInfoLog(frag));
	}
		console.log("compiled");
	
	//TODO: support fast changes of color without complete recompile
	this.color = new Float32Array(g.color.rgb.concat([surface2D_opacity]));
	this.visible = g.visible;
	this.shader = gl.createProgram();
	
	
	gl.attachShader(this.shader, vert);
	gl.attachShader(this.shader, frag);
	gl.linkProgram(this.shader);
	
	gl.useProgram(this.shader);

	this.shader.vertexPositionAttribute = gl.getAttribLocation(this.shader, "aVertexPosition");

	this.shader.pMatrixUniform = gl.getUniformLocation(this.shader, "uPMatrix");
	this.shader.mvMatrixUniform = gl.getUniformLocation(this.shader, "uMVMatrix");
	this.shader.sMatrixUniform = gl.getUniformLocation(this.shader, "uSMatrix");
	this.shader.nMatrixUniform = gl.getUniformLocation(this.shader, "uNMatrix");
	this.shader.colorUniform = gl.getUniformLocation(this.shader, "uColor");
	this.shader.tUniform = gl.getUniformLocation(this.shader, "t");
	
	this.shader.pointLightingLocationUniform = gl.getUniformLocation(this.shader, "uPointLightingLocation");

};
GL.surface2.match = function(g){
	return g.math.type==="=" && g.math[0]==="z";
};
GL.surface2.init = function(gl){
	GL.surface2.gl = gl;
	
	var surfaceVertexPositionBuffer = GL.surface2.surfaceVertexPositionBuffer = gl.createBuffer();
	var verts = [];
	var xi,yi;
	var r=1.0;
	var N = 128;
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
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tverts), gl.STATIC_DRAW);
	surfaceVertexPositionBuffer.itemSize = 2;
	surfaceVertexPositionBuffer.numItems = tverts.length/2;
	
};
GL.surface2.prototype = {
	"draw": function(gl, t){
		gl.depthMask(true);
		gl.useProgram(this.shader);
		
		gl.enableVertexAttribArray(this.shader.vertexPositionAttribute);
		
        gl.uniformMatrix4fv(this.shader.pMatrixUniform, false, gl.pMatrix);
        gl.uniformMatrix4fv(this.shader.mvMatrixUniform, false, gl.mvMatrix);
		gl.uniformMatrix4fv(this.shader.sMatrixUniform, false, gl.sMatrix);
		gl.uniformMatrix3fv(this.shader.nMatrixUniform, false, gl.nMatrix);
		
		window.x=this;
		gl.uniform4fv(this.shader.colorUniform, this.color);
		gl.uniform3f(this.shader.pointLightingLocationUniform, 0,0,10.0);
		
		gl.uniform1f(this.shader.tUniform, t);

		gl.bindBuffer(gl.ARRAY_BUFFER, GL.surface2.surfaceVertexPositionBuffer);
		gl.vertexAttribPointer(this.shader.vertexPositionAttribute, GL.surface2.surfaceVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLE_STRIP,0,GL.surface2.surfaceVertexPositionBuffer.numItems);
		
		gl.disableVertexAttribArray(this.shader.vertexPositionAttribute);
		
	},
	"d":3
};