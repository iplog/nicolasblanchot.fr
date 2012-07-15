# My personal website
## About
This is a demo project. It's my resume and current [personal website](http://nicolasblanchot.fr).

This project was the opportunity to learn new technologies such as Redis and to use other ones that I'm learning at the moment (nodejs and Backbone).

It's not a very serious project you can easily reuse (sorry for the lack of comments :s). I made it for fun and test new things. Some parts are *"quick and dirty"* code.

Supported browsers are Safari, Chrome, Firefox, Safari Mobile and Android browsers. IE is not supported and I haven't made enough tests on BlackBerry phones yet.

The webapp part could be easily used in a PhoneGap project to ceate a mobile app (have a look to the config.js and app.js files in public/app folder, `deviceready` event is supported).

## Language
The whole project has been written in JavaScript, HTML and CSS.

## Database, frameworks and tools
Database: Redis (for fun)

JavaScript:

- nodejs (v0.6.18)
- Express (v2.5.8)
- Redis-url (v0.1.0)
- Connect-gzip (0.1.5)
- Backbone (v0.9.2)
- Underscore (v1.3.3)
- jQuery (v.1.7.2)
- Mustache (I could have used Hogan or handlebars but I wanted to see how to create a Mustache adapter for express 2.5.x)
- requirejs (v2.0.1) (optimized with r.j and almond.js)
- iScroll4 (v4.1.9)
- add2home (v2.0.1)
- jasmine (1.2.0)
- jasmine-jquery (v1.3.1)
- rosie (no version number, see [https://github.com/bkeepers/rosie](https://github.com/bkeepers/rosie))

CSS and fonts:

- lesscss (v1.3.0)
- Jenna Sue font
- Web Symbols typeface

Hosting: Heroku

## Custom tools
There is a build.sh command line tool and script named less_compiler.js in ./dev/ folder.

The build.sh too helps you to build your app and run optimization script with r.js.

- To create an optimized main-built.js file

        $ ./build.sh

- To create a non minified main-built.js file

        $ ./build.sh -s

- To monitor your files and create a non minified main-built.js file after each saved modification

        $ ./build.sh -w

The less_compiler file allows you to monitor your .less files modifications and compile them in .css file after each saved modification

    $ node less_compiler.js

## What's next
- Finish to test the app with jasmine
- Add some CSS3 animation for page transitions.
- Support for Windows phone
