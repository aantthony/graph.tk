#!/bin/bash
git stash
webbranch="test"
branch=`git branch | grep '\*' | sed 's/\* *//'`
git checkout $webbranch
git merge $branch
git push
git checkout $branch
git stash pop