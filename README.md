Summary
=======
This is a single-page application([SPA](http://en.wikipedia.org/wiki/Single-page_application)) boilerplate built with backbone, requirejs and sass. It's inspired by [dzejkej/modular-backbone](https://github.com/dzejkej/modular-backbone) and features:
- Develop and production environment separation. Easy debugging and auto optimizing
- Modular javascript development with requirejs
- Productive css development with sass and compass
- Simple html templating with [_.template](http://underscorejs.org/#template)
- Separated `vendor.js` and `app.js` after built for better client caching


Work Flow
=========
1. Run `compass watch ./` in a console. This will watch changes in `sass/` and auto compiles to `css/`
2. Edit codes in `js/` and `sass/` from another console
3. Preview page in index.html
4. When everything is ok, run `make` to build
5. Production version will be found in `dist/`, including combined and minified js, compiled css, images and htmls


Develop Dependencies
====================
Node and compass are needed for the building process. Run `gem install compass` to install compass.


Included Libraries
==================
- jquery: 1.9.1
- backbone: 0.9.10
- requirejs: 2.1.4
- underscore: 1.4.4
- bootstrap: 2.3.0
- json2
