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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/identicon.ts":
/*!**************************!*\
  !*** ./src/identicon.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar md5_1 = __webpack_require__(/*! ./md5 */ \"./src/md5.ts\");\n\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\nvar Identicon;\n\n(function (Identicon) {\n  function Generate(usrId, patternSize, size, pixel, frame, bgColor) {\n    var usrMd5 = new md5_1.Md5(usrId);\n    var md5Str = usrMd5.output; // console.log(md5Str)\n\n    var patArray = utils_1.Utils.MD5ToPattern(md5Str, patternSize);\n    var hsl = utils_1.Utils.MD5ToHSL(md5Str);\n    var rgb = utils_1.Utils.HSL2RGB(hsl); // console.log(rgb)\n\n    var iconImageBuf = utils_1.Utils.CreateIconImgBuf(patternSize, size, pixel, frame, bgColor, rgb, patArray);\n    return iconImageBuf;\n  }\n\n  Identicon.Generate = Generate;\n\n  function Write2Canvas(context, imageBuf, size) {\n    var canvasImage = context.getImageData(0, 0, size, size);\n\n    for (var i = 0; i < size; i++) {\n      for (var j = 0; j < size; j++) {\n        var idx = (i * size + j) * 4;\n        canvasImage.data[idx + 0] = imageBuf[(i * size + j) * 3 + 0];\n        canvasImage.data[idx + 1] = imageBuf[(i * size + j) * 3 + 1];\n        canvasImage.data[idx + 2] = imageBuf[(i * size + j) * 3 + 2];\n        canvasImage.data[idx + 3] = 255;\n      }\n    }\n\n    context.putImageData(canvasImage, 0, 0);\n  }\n\n  Identicon.Write2Canvas = Write2Canvas;\n})(Identicon = exports.Identicon || (exports.Identicon = {}));\n\n//# sourceURL=webpack:///./src/identicon.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar identicon_1 = __webpack_require__(/*! ./identicon */ \"./src/identicon.ts\"); // config\n\n\nvar size = 420;\nvar pixel = 70;\nvar frame = 35;\nvar patternSize = 5;\nvar bgColor = 240; // const usrId: string = 'raymondmcguire'\n\nvar canvas = document.getElementById('canvas');\ncanvas.height = size;\ncanvas.width = size;\nvar context = canvas.getContext('2d');\nvar usrId = document.getElementById('usrid');\nGenerateIdenticon(usrId.value);\nusrId.addEventListener('change', function () {\n  GenerateIdenticon(usrId.value);\n});\nvar exportBtn = document.getElementById('export');\nexportBtn.addEventListener('click', function () {\n  ExportIdenticon();\n});\n\nfunction GenerateIdenticon(usrId) {\n  var imageBuf = identicon_1.Identicon.Generate(usrId, patternSize, size, pixel, frame, bgColor);\n  identicon_1.Identicon.Write2Canvas(context, imageBuf, size);\n}\n\nfunction ExportIdenticon() {\n  var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');\n  var link = document.createElement('a');\n  link.href = image;\n  link.download = 'identicon.png';\n  link.click();\n}\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/md5.ts":
/*!********************!*\
  !*** ./src/md5.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\r\n * md5\r\n * a typescript version of md5\r\n * based on https://github.com/blueimp/JavaScript-MD5 (MIT License)\r\n */\n\nvar Md5 =\n/** @class */\nfunction () {\n  function Md5(input) {\n    this._input = input;\n    this.output = this.hexMD5(this.str2UTF8(this._input));\n  }\n  /*\r\n   * Add integers, wrapping at 2^32. This uses 16-bit operations internally\r\n   * to work around bugs in some JS interpreters.\r\n   */\n\n\n  Md5.prototype.safeAdd = function (x, y) {\n    var lsw = (x & 0xffff) + (y & 0xffff);\n    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n    return msw << 16 | lsw & 0xffff;\n  };\n  /*\r\n   * Bitwise rotate a 32-bit number to the left.\r\n   */\n\n\n  Md5.prototype.bitRotateLeft = function (num, cnt) {\n    return num << cnt | num >>> 32 - cnt;\n  };\n  /*\r\n   * These functions implement the four basic operations the algorithm uses.\r\n   */\n\n\n  Md5.prototype.md5cmn = function (q, a, b, x, s, t) {\n    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);\n  };\n\n  Md5.prototype.md5ff = function (a, b, c, d, x, s, t) {\n    return this.md5cmn(b & c | ~b & d, a, b, x, s, t);\n  };\n\n  Md5.prototype.md5gg = function (a, b, c, d, x, s, t) {\n    return this.md5cmn(b & d | c & ~d, a, b, x, s, t);\n  };\n\n  Md5.prototype.md5hh = function (a, b, c, d, x, s, t) {\n    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);\n  };\n\n  Md5.prototype.md5ii = function (a, b, c, d, x, s, t) {\n    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);\n  };\n  /*\r\n   * Calculate the MD5 of an array of little-endian words, and a bit length.\r\n   */\n\n\n  Md5.prototype.binlMD5 = function (x, len) {\n    /* append padding */\n    x[len >> 5] |= 0x80 << len % 32;\n    x[(len + 64 >>> 9 << 4) + 14] = len;\n    var i;\n    var olda;\n    var oldb;\n    var oldc;\n    var oldd;\n    var a = 1732584193;\n    var b = -271733879;\n    var c = -1732584194;\n    var d = 271733878;\n\n    for (i = 0; i < x.length; i += 16) {\n      olda = a;\n      oldb = b;\n      oldc = c;\n      oldd = d;\n      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);\n      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);\n      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);\n      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);\n      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);\n      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);\n      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n      a = this.safeAdd(a, olda);\n      b = this.safeAdd(b, oldb);\n      c = this.safeAdd(c, oldc);\n      d = this.safeAdd(d, oldd);\n    }\n\n    return [a, b, c, d];\n  };\n\n  Md5.prototype.str2UTF8 = function (input) {\n    return unescape(encodeURIComponent(input));\n  };\n\n  Md5.prototype.str2Binl = function (input) {\n    var output = new Array(input.length >> 2);\n\n    for (var i = 0; i < output.length; i += 1) {\n      output[i] = 0;\n    }\n\n    var length8 = input.length * 8;\n\n    for (var i = 0; i < length8; i += 8) {\n      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;\n    }\n\n    return output;\n  };\n  /*\r\n   * Convert an array of little-endian words to a string\r\n   */\n\n\n  Md5.prototype.binl2Str = function (input) {\n    var output = '';\n    var length32 = input.length * 32;\n\n    for (var i = 0; i < length32; i += 8) {\n      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);\n    }\n\n    return output;\n  };\n  /*\r\n   * Convert a raw string to a hex string\r\n   */\n\n\n  Md5.prototype.str2Hex = function (input) {\n    var hexTab = '0123456789abcdef';\n    var output = '';\n\n    for (var i = 0; i < input.length; i += 1) {\n      var x = input.charCodeAt(i);\n      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);\n    }\n\n    return output;\n  };\n\n  Md5.prototype.strMD5 = function (input) {\n    return this.binl2Str(this.binlMD5(this.str2Binl(input), input.length * 8));\n  };\n\n  Md5.prototype.hexMD5 = function (input) {\n    return this.str2Hex(this.strMD5(input));\n  };\n\n  return Md5;\n}();\n\nexports.Md5 = Md5;\n\n//# sourceURL=webpack:///./src/md5.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Utils;\n\n(function (Utils) {\n  function CreateIconImgBuf(patternSize, size, pixel, frame, bgColor, frontColor, patternArray) {\n    var image = new Array(size * size * 3);\n\n    for (var idx = 0; idx < image.length; idx++) {\n      image[idx] = bgColor;\n    }\n\n    for (var i = 0; i < patternSize; i++) {\n      for (var j = 0; j < patternSize; j++) {\n        for (var k = 0; k < pixel; k++) {\n          for (var l = 0; l < pixel; l++) {\n            if (patternArray[i * patternSize + j]) {\n              image[((frame + i * pixel + k) * size + (frame + j * pixel + l)) * 3 + 0] = frontColor[0];\n              image[((frame + i * pixel + k) * size + (frame + j * pixel + l)) * 3 + 1] = frontColor[1];\n              image[((frame + i * pixel + k) * size + (frame + j * pixel + l)) * 3 + 2] = frontColor[2];\n            }\n          }\n        }\n      }\n    }\n\n    return image;\n  }\n\n  Utils.CreateIconImgBuf = CreateIconImgBuf;\n\n  function MD5ToHSL(md5Value) {\n    var hueStr = '';\n\n    for (var i = 0; i < 3; i++) {\n      hueStr += md5Value[25 + i];\n    }\n\n    var hue = parseInt(hueStr, 16) / 4095 * 360;\n    var satStr = '';\n\n    for (var i = 0; i < 2; i++) {\n      satStr += md5Value[28 + i];\n    }\n\n    var sat = 65 - parseInt(satStr, 16) / 255 * 20;\n    var lumStr = '';\n\n    for (var i = 0; i < 2; i++) {\n      lumStr += md5Value[30 + i];\n    }\n\n    var lum = 75 - parseInt(lumStr, 16) / 255 * 20; // console.log('hue =', hue, 'lum =', lum, 'sat =', sat)\n\n    return [hue, sat, lum];\n  }\n\n  Utils.MD5ToHSL = MD5ToHSL;\n\n  function HSL2RGB(hsl) {\n    var hue = hsl[0];\n    var sat = hsl[1];\n    var lum = hsl[2];\n    var max = 0;\n    var min = 0;\n\n    if (lum < 50) {\n      max = 2.55 * (lum + lum * (sat / 100));\n      min = 2.55 * (lum - lum * (sat / 100));\n    } else if (lum >= 50) {\n      max = 2.55 * (lum + (100 - lum) * (sat / 100));\n      min = 2.55 * (lum - (100 - lum) * (sat / 100));\n    }\n\n    var red = 0;\n    var blue = 0;\n    var green = 0;\n\n    if (hue >= 0 && hue < 60) {\n      red = max;\n      green = hue / 60 * (max - min) + min;\n      blue = min;\n    } else if (hue >= 60 && hue < 120) {\n      red = (120 - hue) / 60 * (max - min) + min;\n      green = max;\n      blue = min;\n    } else if (hue >= 120 && hue < 180) {\n      red = min;\n      green = max;\n      blue = (hue - 120) / 60 * (max - min) + min;\n    } else if (hue >= 180 && hue < 240) {\n      red = min;\n      green = (240 - hue) / 60 * (max - min) + min;\n      blue = max;\n    } else if (hue >= 240 && hue < 300) {\n      red = (hue - 240) / 60 * (max - min) + min;\n      green = min;\n      blue = max;\n    } else if (hue >= 300 && hue <= 360) {\n      red = max;\n      green = min;\n      blue = (360 - hue) / 60 * (max - min) + min;\n    }\n\n    return [red, green, blue];\n  }\n\n  Utils.HSL2RGB = HSL2RGB;\n\n  function MD5ToPattern(md5Value, patternSize, printB) {\n    if (printB === void 0) {\n      printB = false;\n    }\n\n    var patternTotalSize = patternSize * patternSize;\n    var centerCol = Math.ceil(patternSize / 2);\n    var calculateSize = centerCol * patternSize;\n    var patArray = new Array(patternTotalSize);\n\n    for (var i = 0; i < calculateSize; i++) {\n      var bDraw = !(parseInt(md5Value[i], 16) % 2);\n      var row = i % patternSize;\n      var colR = centerCol - 1 + Math.floor(i / patternSize);\n      var colL = centerCol - 1 - Math.floor(i / patternSize);\n\n      if (colR !== colL) {\n        patArray[row * patternSize + colR] = bDraw;\n        patArray[row * patternSize + colL] = bDraw;\n      } else {\n        patArray[row * patternSize + colR] = bDraw;\n      }\n    }\n\n    if (printB) {\n      for (var i = 0; i < patternSize; i++) {\n        var str = '';\n\n        for (var j = 0; j < patternSize; j++) {\n          var element = patArray[i * patternSize + j];\n          str += element + ',';\n        }\n\n        console.log(str);\n      }\n    }\n\n    return patArray;\n  }\n\n  Utils.MD5ToPattern = MD5ToPattern;\n})(Utils = exports.Utils || (exports.Utils = {}));\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });