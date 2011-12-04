GL.line2 = function(g){
	var line2D_opacity = 0.2;
	var gl = GL.line2.gl;
	var m = g.math;
	m=[m[1], m[0]].setType("-");
	var expr = m.toTypedExpression("x-shader/x-fragment");
	//console.log("s: ",expr.s);
	var frag = gl.createShader(gl.FRAGMENT_SHADER);
	var str = shaders["line2.fragment"];
	str = gl.import(str, "float f(float x, float y){return "+expr.s+";}");
	//console.log(str);
	gl.shaderSource(frag, str);
	gl.compileShader(frag);
	
	if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS)) {
		throw(gl.getShaderInfoLog(frag));
	}
	
	//TODO: support fast changes of color without complete recompile
	this.color = new Float32Array(g.color.rgb.concat([line2D_opacity]));
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

		
	
	
};
GL.line2.match = function(g){
	return ["="].indexOf(g.math.type) != -1;
};
GL.line2.init = function(gl){
	GL.line2.gl = gl;
	var vert = GL.line2.prototype.vert = gl.createShader(gl.VERTEX_SHADER);
	
	gl.shaderSource(vert, shaders["line2.vertex"]);
	gl.compileShader(vert);
	if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS)) {
		throw(gl.getShaderInfoLog(vert));
	}
};
GL.line2.prototype = {
	"draw": function(gl){
		gl.useProgram(this.shader);
		
		gl.enableVertexAttribArray(this.shader.vertexPositionAttribute);
		
        gl.uniformMatrix4fv(this.shader.pMatrixUniform, false, gl.pMatrix);
        gl.uniformMatrix4fv(this.shader.mvMatrixUniform, false, gl.mvMatrix);
		gl.uniformMatrix4fv(this.shader.sMatrixUniform, false, gl.sMatrix);

		gl.uniform4fv(this.shader.colorUniform, this.color);
		
		gl.uniform2f(this.shader.sizeUniform, gl.worldLineWidth, gl.worldLineWidth);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, gl.squareVertexPositionBuffer);
		gl.vertexAttribPointer(this.shader.vertexPositionAttribute, gl.squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLE_STRIP,0,gl.squareVertexPositionBuffer.numItems);
		
		gl.disableVertexAttribArray(this.shader.vertexPositionAttribute);
		
	}
};