#!/bin/sh

ROOT_DIR=/usr/share/nginx/html
#ROOT_DIR=$(pwd)
#echo"current dir: $ROOT_DIR"
echo "Replacing env variables in Vue from Docker..."
for file in $ROOT_DIR/js/app.*.js $ROOT_DIR/js/app.*.js* $ROOT_DIR/index.html;
do
  echo "Replacing "${VUE_APP_API_ENDPOINT}" in $file ...";
  sed -i 's|VUE_APP_API_ENDPOINT|'${VUE_APP_API_ENDPOINT}'|g' $file
done
exec "$@"
