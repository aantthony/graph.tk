#!/bin/bash
#based on
#https://github.com/laughinghan/mathquill/blob/d7581a4b9c173876db40daaaef8673ccefb32ab6/publish.sh
#Thank you :)
cp index.html debug.html
make
VERSION_CODE=$(git rev-parse --short HEAD)
git stash
rm -rf build
mkdir -p ./build/
mkdir -p ./build/min
mkdir -p ./build/langs
mkdir -p ./build/about
mkdir -p ./build/about/resources
cp langs/*.js ./build/langs/
cp about/*.html ./build/about/
cp about/resources/* ./build/about/resources/
cp release.html ./build/index.html

cp min/* ./build/min/
cp *.png ./build/
cp *.ico ./build/
cp *.gif ./build/
cp manifest.manifest ./build/
cp -r ./min ./build/

branch=`git branch | grep '\*' | sed 's/\* *//'`
git checkout gh-pages
rm index.html
cp -r ./build/ ./
git add -f index.html
git add -f *.png
git add -f about/
git add -f *.ico
git add -f manifest.manifest
git add -f *.gif
git add -f min
git add -f langs
echo "graph.tk" > ./CNAME
git add CNAME
echo "added files"
git commit -m "publish ${VERSION_CODE}"
git push
git checkout $branch
git stash pop
mv debug.html index.html