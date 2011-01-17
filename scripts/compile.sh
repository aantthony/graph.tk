#!/usr/bin/env bash
#This script will shrink all of the javascript code into min.js
#min.js will be accessed at g_3234234.js where the number is the time, which does not matter to the server.

./scripts/clean.sh
#packer - main.js
mkdir -p tmp
mkdir -p min

VERSION_CODE=$(git rev-parse --short HEAD)

cat math.js ui.js main.js | sed s/__debug_mode\=1/__debug_mode\=0/ |sed s/GIT_VERSION/${VERSION_CODE}/ >./tmp/main_modified.js
cd ./scripts/packer
#perl ./jsPacker.pl -i ../../tmp/main_modified.js -e62 -q -s -f -o ../../tmp/main_packed.js
echo "DANGER: PACKER DISABLED!!!!"
cp ../../tmp/main_modified.js ../../tmp/main_packed.js
cd ../../

#leave mathquill as is

TIME_CODE=$(echo "<?php echo md5(time()); ?>" | php)
TIME_CODE=${TIME_CODE:0:6}
TIME_CODE=${VERSION_CODE}
#combine the two into min.js
#Note: order is important (I think)

cat jquery.js mathquill_modified.js ./tmp/main_packed.js > min/${TIME_CODE}.js
echo "created: min/${TIME_CODE}.js"

#cp main.css ./min/${TIME_CODE}.css

#fixes /delete.png or css_dir/delete.png problem, by making all delete.png references go to /delete.png now
cat mathquill.css main.css | sed s/buttons\.png/\\/buttons\.png/ | sed s/sw\.png/\\/sw\.png/ >./min/${TIME_CODE}.css
echo "created: min/${TIME_CODE}.css"
rm -rf ./tmp

sed s/CSS_FILE/min\\/${TIME_CODE}.css/ release.template.html | sed s/JS_FILE/min\\/${TIME_CODE}.js/ >release.html
echo "created: release.html"
sed s/CSS_FILE/min\\/${TIME_CODE}.css/ manifest.template.manifest | sed s/JS_FILE/min\\/${TIME_CODE}.js/ >manifest.manifest
echo "created: manifest.manifest"

