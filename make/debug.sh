#!/usr/bin/env bash
mkdir -p tmp
touch tmp/debug.template.js.html
JS_FILES=$(for i in src/*.*.js ; do printf "<script src='%s'></script>\n" "$i" ; done | grep -v intro | grep -v outro | sort -n)
GL_FILES=$(for i in src/GL/*/*.js ; do printf "<script src='%s'></script>\n" "$i" ; done)
BOOT="<script>boot({debug: true});</script>"
echo $JS_FILES > tmp/debug.template.js.html
echo $GL_FILES > tmp/debug.template.js_gl.html
echo $BOOT > tmp/debug.template.js_boot.html

cat \
	debug.template.html \
	tmp/debug.template.js.html \
	tmp/debug.template.js_gl.html \
	tmp/debug.template.js_boot.html \
	> debug.html