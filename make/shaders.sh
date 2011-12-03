#!/usr/bin/env bash
mkdir -p ./tmp
mkdir -p ./tmp/shaders
cp ./shaders/*.vertex ./tmp/shaders/
cp ./shaders/*.fragment ./tmp/shaders/

cp ./src/GL/*/*.vertex ./tmp/shaders/
cp ./src/GL/*/*.fragment ./tmp/shaders/
./make/shaders.js > ./shaders/all.js