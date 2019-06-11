/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handlers/health.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/handlers/health.js":
/*!********************************!*\
  !*** ./src/handlers/health.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const config = __webpack_require__(/*! ../middleware/config */ \"./src/middleware/config.js\");\r\nconst app = __webpack_require__(/*! ../middleware/app */ \"./src/middleware/app.js\")(config());\r\n\r\nmodule.exports.handler = app.use(arguments, async (req, res) => {\r\n    res.body = \"OK\";\r\n});\n\n//# sourceURL=webpack:///./src/handlers/health.js?");

/***/ }),

/***/ "./src/middleware/app.js":
/*!*******************************!*\
  !*** ./src/middleware/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createRequest = __webpack_require__(/*! ./cloudRequest */ \"./src/middleware/cloudRequest.js\");\r\nconst createResponse = __webpack_require__(/*! ./cloudResponse */ \"./src/middleware/cloudResponse.js\");\r\n\r\nclass App {\r\n  constructor(middlewares) {\r\n    this.middlewares = middlewares;\r\n    this.use = this.use.bind(this);\r\n  }\r\n\r\n  use(args, handler) {\r\n    var req = createRequest(args);\r\n    var res = createResponse(args);\r\n\r\n    const next = (err) => {\r\n      const middleware = this.middlewares.pop();\r\n      if (middleware) {\r\n        middleware(err, req, res, next);\r\n      }\r\n    }\r\n\r\n    next(null);\r\n    handler(req, res);\r\n\r\n    return res.result();\r\n  }\r\n}\r\n\r\nmodule.exports = (middlewares) => new App(middlewares);\n\n//# sourceURL=webpack:///./src/middleware/app.js?");

/***/ }),

/***/ "./src/middleware/aws/awsRequest.js":
/*!******************************************!*\
  !*** ./src/middleware/aws/awsRequest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AwsRequest {\r\n  constructor() {\r\n\r\n  }\r\n}\r\n\r\nmodule.exports = AwsRequest;\n\n//# sourceURL=webpack:///./src/middleware/aws/awsRequest.js?");

/***/ }),

/***/ "./src/middleware/aws/awsResponse.js":
/*!*******************************************!*\
  !*** ./src/middleware/aws/awsResponse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AwsResponse {\r\n  constructor() {\r\n\r\n  }\r\n}\r\n\r\nmodule.exports = AwsResponse;\n\n//# sourceURL=webpack:///./src/middleware/aws/awsResponse.js?");

/***/ }),

/***/ "./src/middleware/azure/azureRequest.js":
/*!**********************************************!*\
  !*** ./src/middleware/azure/azureRequest.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AzureRequest {\r\n  constructor(args) {\r\n    Object.assign(this, args[1]);\r\n  }\r\n}\r\n\r\nmodule.exports = AzureRequest;\n\n//# sourceURL=webpack:///./src/middleware/azure/azureRequest.js?");

/***/ }),

/***/ "./src/middleware/azure/azureResponse.js":
/*!***********************************************!*\
  !*** ./src/middleware/azure/azureResponse.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AzureResponse {\r\n  constructor(args) {\r\n    Object.assign(this, args[0].res);\r\n  }\r\n}\r\n\r\nmodule.exports = AzureResponse;\n\n//# sourceURL=webpack:///./src/middleware/azure/azureResponse.js?");

/***/ }),

/***/ "./src/middleware/cloudRequest.js":
/*!****************************************!*\
  !*** ./src/middleware/cloudRequest.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const AzureRequest = __webpack_require__(/*! ./azure/azureRequest */ \"./src/middleware/azure/azureRequest.js\");\r\nconst AwsRequest = __webpack_require__(/*! ./aws/awsRequest */ \"./src/middleware/aws/awsRequest.js\");\r\n\r\nmodule.exports = (args) => {\r\n  return args.length === 2 ? new AzureRequest(args) : new AwsRequest(args);\r\n}\n\n//# sourceURL=webpack:///./src/middleware/cloudRequest.js?");

/***/ }),

/***/ "./src/middleware/cloudResponse.js":
/*!*****************************************!*\
  !*** ./src/middleware/cloudResponse.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const AzureResponse = __webpack_require__(/*! ./azure/azureResponse */ \"./src/middleware/azure/azureResponse.js\");\r\nconst AwsResponse = __webpack_require__(/*! ./aws/awsResponse */ \"./src/middleware/aws/awsResponse.js\");\r\n\r\nmodule.exports = (args) => {\r\n  return args.length === 2 ? new AzureResponse(args) : new AwsResponse(args);\r\n}\n\n//# sourceURL=webpack:///./src/middleware/cloudResponse.js?");

/***/ }),

/***/ "./src/middleware/config.js":
/*!**********************************!*\
  !*** ./src/middleware/config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const logging = __webpack_require__(/*! ./logging */ \"./src/middleware/logging.js\");\r\nconst exceptionHandling = __webpack_require__(/*! ./exceptionHandling */ \"./src/middleware/exceptionHandling.js\");\r\n\r\nconst middlewares = [logging(), exceptionHandling()]\r\n\r\nmodule.exports = (options) => middlewares;\n\n//# sourceURL=webpack:///./src/middleware/config.js?");

/***/ }),

/***/ "./src/middleware/exceptionHandling.js":
/*!*********************************************!*\
  !*** ./src/middleware/exceptionHandling.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (options) => (err, req, res, next) => {\r\n  try {\r\n    next();\r\n  } catch (e) {\r\n    console.log(\"Exception handled\");\r\n    console.log(e);\r\n    next(e);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/middleware/exceptionHandling.js?");

/***/ }),

/***/ "./src/middleware/logging.js":
/*!***********************************!*\
  !*** ./src/middleware/logging.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (options) => (err, req, res, next) => {\r\n  console.log(\"Started request\");\r\n  next(err);\r\n  console.log(\"Finished request\");\r\n};\n\n//# sourceURL=webpack:///./src/middleware/logging.js?");

/***/ })

/******/ });