#!/usr/bin/env bash
mkdir -p tmp
touch tmp/debug.template.js.html
JS_FILES=$(for i in src/*.*.js ; do printf "<script src='%s'></script>\n" "$i" ; done | grep -v intro | grep -v outro | sort -n)
echo $JS_FILES > tmp/debug.template.js.html
cat \
	debug.template.html \
	tmp/debug.template.js.html \
	> debug.html