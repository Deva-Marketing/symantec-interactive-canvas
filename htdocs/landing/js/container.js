!function e(n,r,t){function i(a,d){if(!r[a]){if(!n[a]){var u="function"==typeof require&&require;if(!d&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[a]={exports:{}};n[a][0].call(f.exports,function(e){var r=n[a][1][e];return i(r?r:e)},f,f.exports,e,n,r,t)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<t.length;a++)i(t[a]);return i}({1:[function(e,n,r){"use strict";function t(){window.matchMedia("screen and (max-width: 650px)").matches||window.matchMedia("screen and (min-width: 651px) and (max-width: 1100px)").matches?i.setMedia(!0):i.setMedia(!1)}var i=window.frames[0];window.videoLoaded=function(){t()},window.addEventListener("resize",t)},{}]},{},[1]);
//# sourceMappingURL=container.js.map
