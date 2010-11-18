#bin/bash
#This script will shrink all of the javascript code into f.js
#f.js will be accessed at g_3234234.js where the number is the time, which does not matter to the server.


#packer - main.js
mkdir temp_compile_packed_7327432

VERSION_CODE=$(git rev-parse --short HEAD)

sed s/GIT_VERSION/${VERSION_CODE}/ main.js >./temp_compile_packed_7327432/main_modified.js
cd lib
perl ./jsPacker.pl -i ../temp_compile_packed_7327432/main_modified.js -e62 -q -s -f -o ../temp_compile_packed_7327432/main_packed.js
cd ..

#leave mathquill as is

#combine the two into f.js
#Note: order is important (I think)
cat jquery.js mathquill_modified.js ./temp_compile_packed_7327432/main_packed.js > f.js
echo "created: f.js"

#Now make server.php (index.php on release installs)

TIME_CODE=$(echo "<?php echo md5(time()); ?>" | php)
TIME_CODE=${TIME_CODE:0:6}
#css file
cp main.css ./css/${TIME_CODE}.css
rm -rf ./temp_compile_packed_7327432

sed s/CSS_FILE/css\\/${TIME_CODE}/ index_template.php >index.php
echo "created: index.php"
sed s/CSS_FILE/css\\/${TIME_CODE}/ manifest_template.php >manifest.php
echo "created: manifest.php"