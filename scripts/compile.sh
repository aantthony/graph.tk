#bin/bash
#This script will shrink all of the javascript code into min.js
#min.js will be accessed at g_3234234.js where the number is the time, which does not matter to the server.


#packer - main.js
mkdir tmp

VERSION_CODE=$(git rev-parse --short HEAD)

sed s/GIT_VERSION/${VERSION_CODE}/ main.js >./tmp/main_modified.js
cd ./scripts/packer
perl ./jsPacker.pl -i ../../tmp/main_modified.js -e62 -q -s -f -o ../../tmp/main_packed.js
cd ../../

#leave mathquill as is

TIME_CODE=$(echo "<?php echo md5(time()); ?>" | php)
TIME_CODE=${TIME_CODE:0:6}

#combine the two into min.js
#Note: order is important (I think)

cat jquery.js mathquill_modified.js ./tmp/main_packed.js > min/${TIME_CODE}.js
echo "created: min/${TIME_CODE}.js"

cp main.css ./min/${TIME_CODE}.css
echo "created: min/${TIME_CODE}.css"
rm -rf ./tmp

sed s/CSS_FILE/min\\/${TIME_CODE}/ index_template.php | sed s/JS_FILE/min\\/${TIME_CODE}/ >index.php
echo "created: index.php"
sed s/CSS_FILE/min\\/${TIME_CODE}/ manifest_template.php | sed s/JS_FILE/min\\/${TIME_CODE}/ >manifest.php
echo "created: manifest.php"