#!/bin/bash

# Change this if you change the output folder in config.yml
BUILD_DIR="site"

DIR=$(dirname "$0")
cd $DIR/..

# if [[ $(git status -s) ]]
# then
#     echo "The working directory is dirty. Please commit any pending changes."
#     exit 1;
# fi

echo "Deleting old publication"
rm -rf $BUILD_DIR
mkdir $BUILD_DIR

echo "Generating site"
# hugo --config=config.yml,config/environments/github.yml
quire site --env=github

echo "Updating gh-pages branch"
git add -f $BUILD_DIR && git commit -m "Automated deploy at $(date)."

# this creates an error: Updates were rejected because a pushed branch tip is behind its remote
# one solution is to delete ghg-pages first
git subtree push --prefix $BUILD_DIR origin gh-pages

# solution to error from here: https://stackoverflow.com/questions/13756055/why-cant-i-push-this-up-to-date-git-subtree
#git push origin `git subtree split --prefix $BUILD_DIR --onto master`:gh-pages --force