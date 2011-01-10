#!/bin/bash
make
git stash
mkdir -p ./build
cp about/*.html ./build/about/
cp about/resources ./build/about/
cp index.html ./build/
cp *.png ./build/
cp *.ico ./build/
cp *.gif ./build/
cp manifest.manifest ./build/
cp -r ./graph.tk/min ./build/

branch=`git branch | grep '\*' | sed 's/\* *//'`
git checkout gh-pages
rm index.html
mv ./build/release.html ./index.html
cp ./build/* ./
git add index.html
git add *.png
git add about/
git add *.ico
git add manifest.manifest
git add *.gif
echo "added files"
git commit -a -m "publish new version"
git push
git checkout $branch
git stash pop