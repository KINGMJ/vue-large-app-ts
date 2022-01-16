#!/bin/sh
cd $(dirname "$0")
pwd
cd src
# 删除当前目录下所有的js文件
find . -name "*.js" | xargs rm -f
find . -name "*.map" | xargs rm -f

cd ../tests
# 删除当前目录下所有的js文件
find . -name "*.js" | xargs rm -f
find . -name "*.map" | xargs rm -f
