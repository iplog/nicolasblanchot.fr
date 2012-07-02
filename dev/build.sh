#!/bin/bash

# Process command line options
watch=no
minify=yes

while getopts "whs" opt; do
    case $opt in
    (w) watch=yes;;
    (s) minify=no;;
    (h) echo "Usage: ./install.sh. With no parameters, will build your app for release. Use the -w option to watch js file and build in real time with no minification (Usefull for development). You can use -s to avoid minification (not necessary when watching for files)"; exit 1;;

    \?) echo "Use -h for help" >&2; exit 1 ;;
    (*)  break;;
    esac
    shift
done

if [ $watch == "no" ]; then
  cd ../public/app

  if [ $minify == "yes" ]; then
    # compile js files
    node ../../dev/r.js -o baseUrl=. name=../js/requirejs/almond include=main out=main-built.js wrap=true paths.text=../js/requirejs/text paths.domReady=../js/requirejs/domReady
  else
    node ../../dev/r.js -o build_conf_dev.js
  fi

  cd ../../dev

  echo -e "\033[1;32mYour app has been built."
  echo -e "\033[1;31m[WARNING]\033[0;35m DO NOT FORGET TO MODIFY YOUR INDEX.HTML FILE"
  echo ""

else
  # launch watcher
  echo "Start watching files."
  node watch.js
fi
