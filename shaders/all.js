


var shaders =  {"g-surface.fragment":"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec4 uColor;\nvoid main(void) {\n\tgl_FragColor = uColor;\n}\n","g-surface.vertex":"attribute vec3 aVertexPosition;\nattribute vec3 aVertexNormal;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main(void) {\n\tvec3 _dump = aVertexNormal;\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n","shader-fs.fragment":"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec4 uColor;\nvoid main(void) {\n\tgl_FragColor = uColor;\n}\n","shader-vs.vertex":"attribute vec3 aVertexPosition;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n"} ;


