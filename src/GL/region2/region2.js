GL.region2 = function(g){
	var region2D_opacity = 0.2;
	var gl = GL.region2.gl;
	var m = g.math;
	var expr = g.math.toTypedExpression("x-shader/x-fragment");
	var frag = gl.createShader(gl.FRAGMENT_SHADER);
	var str = shaders["region2.fragment"];
	str = gl.import(str, "bool f(float x, float y){return "+expr.s+";}");
	console.log(str);
	gl.shaderSource(frag, str);
	gl.compileShader(frag);
	
	if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS)) {
		throw(gl.getShaderInfoLog(frag));
	}
	
	//TODO: support fast changes of color without complete recompile
	this.color = new Float32Array(g.color.rgb.concat([region2D_opacity]));
	this.visible = g.visible;
	this.shader = gl.createProgram();
	gl.attachShader(this.shader, this.vert);
	gl.attachShader(this.shader, frag);
	gl.linkProgram(this.shader);
	
	gl.useProgram(this.shader);

	this.shader.vertexPositionAttribute = gl.getAttribLocation(this.shader, "aVertexPosition");

	this.shader.pMatrixUniform = gl.getUniformLocation(this.shader, "uPMatrix");
	this.shader.mvMatrixUniform = gl.getUniformLocation(this.shader, "uMVMatrix");
	this.shader.sMatrixUniform = gl.getUniformLocation(this.shader, "uSMatrix");
	this.shader.colorUniform = gl.getUniformLocation(this.shader, "uColor");
	this.shader.sizeUniform = gl.getUniformLocation(this.shader, "uSize");
	this.shader.tUniform = gl.getUniformLocation(this.shader, "t");
	
	
};
GL.region2.match = function(g){
	return ["<=","<",">=",">"].indexOf(g.math.type) != -1;
};
GL.region2.init = function(gl){
	GL.region2.gl = gl;
	var vert = GL.region2.prototype.vert = gl.createShader(gl.VERTEX_SHADER);
	
	gl.shaderSource(vert, shaders["region2.vertex"]);
	gl.compileShader(vert);
	if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS)) {
		throw(gl.getShaderInfoLog(vert));
	}
};
GL.region2.prototype = {
	"draw": function(gl, t){
		gl.useProgram(this.shader);
		
		gl.enableVertexAttribArray(this.shader.vertexPositionAttribute);
		
        gl.uniformMatrix4fv(this.shader.pMatrixUniform, false, gl.pMatrix);
        gl.uniformMatrix4fv(this.shader.mvMatrixUniform, false, gl.mvMatrix);
		gl.uniformMatrix4fv(this.shader.sMatrixUniform, false, gl.sMatrix);

		gl.uniform4fv(this.shader.colorUniform, this.color);
		gl.uniform1f(this.shader.tUniform, t);
		gl.uniform2f(this.shader.sizeUniform, gl.worldLineWidth, gl.worldLineWidth);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, gl.squareVertexPositionBuffer);
		gl.vertexAttribPointer(this.shader.vertexPositionAttribute, gl.squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLE_STRIP,0,gl.squareVertexPositionBuffer.numItems);
		
		gl.disableVertexAttribArray(this.shader.vertexPositionAttribute);
		
	}
};