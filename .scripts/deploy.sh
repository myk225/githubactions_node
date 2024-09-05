#!/bin/bash
set -e

echo "deployment started"

#pull the latest version of the git

git pull origin main
echo "updated copied locally"

echo "installing dependencies..."
npm install --yes

echo "deployment finished"


