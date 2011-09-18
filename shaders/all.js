


var shaders =  {"shader-fs.fragment":"#ifdef GL_ES\nprecision highp float;\n#endif\n\nvoid main(void) {\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}\n","shader-vs.vertex":"attribute vec3 aVertexPosition;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}"} ;


