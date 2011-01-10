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
git add -f index.html
git add -f *.png
git add -f about/
git add -f *.ico
git add -f manifest.manifest
git add -f *.gif
echo "added files"
git commit -a -m "publish new version"
git push
git checkout $branch
git stash pop