#!/usr/bin/env bash
#This script will shrink all of the javascript code into one minified js file

#packer - main.js
mkdir -p tmp
mkdir -p min

VERSION_CODE=$(git rev-parse --short HEAD)

TIME_CODE=$(echo "<?php echo md5(time()); ?>" | php)
TIME_CODE=${TIME_CODE:0:6}
TIME_CODE=${VERSION_CODE}


cat \
	shaders/all.js \
	$(for i in src/*.*.js ; do printf "%s\n" "$i" ; done | sort -n) \
	> tmp/graph_src.js
cat \
	tmp/graph_src.js \
	| sed s/__debug_mode\=1/__debug_mode\=0/ |sed s/GIT_VERSION/${VERSION_CODE}/ \
	>./tmp/graph.js
#cd ./make/packer
#perl ./jsPacker.pl -i ../../tmp/graph.js -e62 -q -s -f -o ../../tmp/graph_packed.js
#cd ../../
cp tmp/graph.js tmp/graph_packed.js
#uglifyjs tmp/graph.js > tmp/graph_packed.js
#combine the two into min.js
#Note: order is important (I think)

cat \
	lib/jquery.js \
	lib/math.js \
	lib/glMatrix-0.9.5.min.js \
	lib/mathquill.min.js \
	./tmp/graph_packed.js \
	| uglifyjs --no-copyright --unsafe \
	> min/${TIME_CODE}.js
echo "created: min/${TIME_CODE}.js"

#fixes /delete.png or css_dir/delete.png problem, by making all delete.png references go to /delete.png now
cat \
	css/*.css \
	| sed s/buttons\.png/\\/css\\/buttons\.png/ \
	| sed s/sw\.png/\\/css\\/sw\.png/ \
	> ./min/${TIME_CODE}.css
echo "created: min/${TIME_CODE}.css"
rm -rf ./tmp

sed s/CSS_FILE/min\\/${TIME_CODE}.css/ \
	index.template.html \
	| sed s/JS_FILE/min\\/${TIME_CODE}.js/ \
	> index.html
echo "created: index.html"
sed s/CSS_FILE/min\\/${TIME_CODE}.css/ \
	manifest.template.manifest \
	| sed s/JS_FILE/min\\/${TIME_CODE}.js/ \
	> manifest.manifest
echo "created: manifest.manifest"

