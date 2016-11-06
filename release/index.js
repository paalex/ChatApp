module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _express = __webpack_require__(/*! express */ 3);

var _express2 = _interopRequireDefault(_express);

var _engine = __webpack_require__(/*! engine.io */ 2);

var _engine2 = _interopRequireDefault(_engine);

var _http = __webpack_require__(/*! http */ 4);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.chdir(__dirname); /**
                           * Server Entry File
                           */

(0, _express2.default)().use(_express2.default.static('./static')).use(_express2.default.static('../static')).get('*', function (req, res) {
    res.type('html').end(template('Loading...'));
}).listen(8888, function () {
    return console.log('App is listening on http://localhost:8888/');
});

// io.attach(http.createServer().listen(8888)).on('connection',function(socket){
//   socket.on('message',function(data){})
//   socket.on('close',function(){})
// });

var server = new _engine2.default.Server();
server.on('connection', function (socket) {
    socket.send('hi!');
});
// httpServer.on('upgrade', function(req, socket, head){
//   server.handleUpgrade(req, socket, head);
// });
// httpServer.on('request', function(req, res){
//   server.handleRequest(req, res);
// });


function template() {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return '\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Fullstack Challenge</title>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link href="/normalize.css" rel="stylesheet">\n</head>\n<body>\n</body>\n    <div id=\'app\'>' + body + '</div>\n    <script src="/client.js"></script>\n    </html>\n';
}

/***/ },
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** external "engine.io" ***!
  \****************************/
/***/ function(module, exports) {

module.exports = require("engine.io");

/***/ },
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!*******************!*\
  !*** multi index ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */1);
module.exports = __webpack_require__(/*! server/index.js */0);


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map