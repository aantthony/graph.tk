


var shaders =  {"g-surface.fragment":"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec4 uColor;\nvoid main(void) {\n    gl_FragColor = vec4(0.7, 0.7, 0.7, 1.0);\n}\n","g-surface.vertex":"void main() {\n  gl_Position = gl_Position*0.3;\n}","shader-fs.fragment":"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec4 uColor;\nvoid main(void) {\n    gl_FragColor = vec4(0.7, 0.7, 0.7, 1.0);\n\tgl_FragColor = uColor;\n}\n","shader-vs.vertex":"attribute vec3 aVertexPosition;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}"} ;


