# My personal website
## About
This is a demo project. It's my resume and current [personal website](http://nicolasbalnchot.fr).

This project was the opportunity to learn new technologies such as Redis and to use other ones that I'm learning at the moment (nodejs and Backbone).

It's not a very serious project you can easily reuse (Sorry for the lack of comment :s). I made it for fun and test new things. Some parts are *"quick and dirty"* code.

Supported browsers are Safari, Chrome, Firefox, Safari Mobile and Android borwsers. IE is not supported and I haven't made enough tests on BlackBerry phones.

The webapp part could be easily used in a PhoneGap project to ceate a mobile app (have a look to the config.js and app.js files in public/app folder).

## Language
The whole project is written in JavaScript, HTML and CSS.

## Frameworks and tools
JavaScript:

- nodejs (v0.6.18)
- Express (v2.5.8)
- Redis-url (v0.1.0)
- Connect-gzip (0.1.5)
- Backbone (v0.9.2)
- Undersocre (v1.3.3)
- jQuery (v.1.7.2)
- mustache (I could have used Hogan or handlebars but I wanted to see how to create a mustache adapter for express 2.5.x)
- requirejs (v2.0.1) (optimized with r.j and almond.js)
- iscroll4 (v4.1.9)
- add2home (v2.0.1)

CSS and fonts:

- lesscss (v1.3.0)
- Jenna Sue font
- Web Symbols typeface

## Custom tools
There is a build.sh command line tool and script named less_compiler.js in ./dev/ folder.

The build.sh too helps you to build your app and run optimization script with r.js.

- To create an optimized main-built.js file

        $ ./build.sh

- To create a non minified main-built.js file

        $ ./build.sh -s

- To monitor your files and create a non minified main-built.js file after each saved modification

        $ ./build.sh -w

The less_compiler file allows you to monitor your .less files modification and compile them in .css file after each saved modification

    $ node less_compiler.js

## What's next
I'd like to add some Unit test using Jasmine or Mocha and some CSS3 animation for page transitions.

