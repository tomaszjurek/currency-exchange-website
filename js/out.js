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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n\n  var nbpApi = 'http://api.nbp.pl/api/exchangerates/tables/c/?format=json';\n\n  function insertCurrency(currency) {\n    var tableInsert = $('table#currency').find('tbody');\n    var dateInsert = $('table#currency').find('th').first();\n    dateInsert.text(currency.effectiveDate);\n    for (var i = 0; i < currency.rates.length; i++) {\n      var tr = $('<tr class=\"active\"></tr>');\n      var code = $('<td>').text(currency.rates[i].code);\n      var bid = $('<td>').text(currency.rates[i].bid);\n      var ask = $('<td>').text(currency.rates[i].ask);\n      tableInsert.append(tr);\n      tr.append(code);\n      tr.append(bid);\n      tr.append(ask);\n    };\n  }\n\n  var loadCurrency = function loadCurrency() {\n    $.ajax({\n      url: nbpApi\n    }).done(function (response) {\n      console.log(response[0]);\n      insertCurrency(response[0]);\n    }).fail(function (error) {\n      console.log(error);\n    });\n  };\n  loadCurrency();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanN4P2M2YjEiXSwibmFtZXMiOlsiJCIsIm5icEFwaSIsImluc2VydEN1cnJlbmN5IiwiY3VycmVuY3kiLCJ0YWJsZUluc2VydCIsImZpbmQiLCJkYXRlSW5zZXJ0IiwiZmlyc3QiLCJ0ZXh0IiwiZWZmZWN0aXZlRGF0ZSIsImkiLCJyYXRlcyIsImxlbmd0aCIsInRyIiwiY29kZSIsImJpZCIsImFzayIsImFwcGVuZCIsImxvYWRDdXJyZW5jeSIsImFqYXgiLCJ1cmwiLCJkb25lIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVk7O0FBRVosTUFBTUMsU0FBVSwyREFBaEI7O0FBRUEsV0FBU0MsY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0M7QUFDaEMsUUFBSUMsY0FBY0osRUFBRSxnQkFBRixFQUFvQkssSUFBcEIsQ0FBeUIsT0FBekIsQ0FBbEI7QUFDQSxRQUFJQyxhQUFhTixFQUFFLGdCQUFGLEVBQW9CSyxJQUFwQixDQUF5QixJQUF6QixFQUErQkUsS0FBL0IsRUFBakI7QUFDQUQsZUFBV0UsSUFBWCxDQUFnQkwsU0FBU00sYUFBekI7QUFDQSxTQUFJLElBQUlDLElBQUksQ0FBWixFQUFnQkEsSUFBSVAsU0FBU1EsS0FBVCxDQUFlQyxNQUFuQyxFQUEyQ0YsR0FBM0MsRUFBZ0Q7QUFDNUMsVUFBSUcsS0FBS2IsRUFBRSwwQkFBRixDQUFUO0FBQ0EsVUFBSWMsT0FBT2QsRUFBRSxNQUFGLEVBQVVRLElBQVYsQ0FBZUwsU0FBU1EsS0FBVCxDQUFlRCxDQUFmLEVBQWtCSSxJQUFqQyxDQUFYO0FBQ0EsVUFBSUMsTUFBTWYsRUFBRSxNQUFGLEVBQVVRLElBQVYsQ0FBZUwsU0FBU1EsS0FBVCxDQUFlRCxDQUFmLEVBQWtCSyxHQUFqQyxDQUFWO0FBQ0EsVUFBSUMsTUFBTWhCLEVBQUUsTUFBRixFQUFVUSxJQUFWLENBQWVMLFNBQVNRLEtBQVQsQ0FBZUQsQ0FBZixFQUFrQk0sR0FBakMsQ0FBVjtBQUNBWixrQkFBWWEsTUFBWixDQUFtQkosRUFBbkI7QUFDQUEsU0FBR0ksTUFBSCxDQUFVSCxJQUFWO0FBQ0FELFNBQUdJLE1BQUgsQ0FBVUYsR0FBVjtBQUNBRixTQUFHSSxNQUFILENBQVVELEdBQVY7QUFDSDtBQUNGOztBQUVELE1BQUlFLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCbEIsTUFBRW1CLElBQUYsQ0FBTztBQUNMQyxXQUFLbkI7QUFEQSxLQUFQLEVBRUdvQixJQUZILENBRVEsVUFBU0MsUUFBVCxFQUFrQjtBQUN4QkMsY0FBUUMsR0FBUixDQUFZRixTQUFTLENBQVQsQ0FBWjtBQUNBcEIscUJBQWVvQixTQUFTLENBQVQsQ0FBZjtBQUNELEtBTEQsRUFLR0csSUFMSCxDQUtRLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckJILGNBQVFDLEdBQVIsQ0FBWUUsS0FBWjtBQUNGLEtBUEQ7QUFRRCxHQVREO0FBVUFSO0FBWUQsQ0ExQ0QiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IG5icEFwaSAgPSAnaHR0cDovL2FwaS5uYnAucGwvYXBpL2V4Y2hhbmdlcmF0ZXMvdGFibGVzL2MvP2Zvcm1hdD1qc29uJztcblxuICBmdW5jdGlvbiBpbnNlcnRDdXJyZW5jeShjdXJyZW5jeSkge1xuICAgIGxldCB0YWJsZUluc2VydCA9ICQoJ3RhYmxlI2N1cnJlbmN5JykuZmluZCgndGJvZHknKTtcbiAgICBsZXQgZGF0ZUluc2VydCA9ICQoJ3RhYmxlI2N1cnJlbmN5JykuZmluZCgndGgnKS5maXJzdCgpO1xuICAgIGRhdGVJbnNlcnQudGV4dChjdXJyZW5jeS5lZmZlY3RpdmVEYXRlKTtcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGN1cnJlbmN5LnJhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ciA9ICQoJzx0ciBjbGFzcz1cImFjdGl2ZVwiPjwvdHI+Jyk7XG4gICAgICAgIGxldCBjb2RlID0gJCgnPHRkPicpLnRleHQoY3VycmVuY3kucmF0ZXNbaV0uY29kZSk7XG4gICAgICAgIGxldCBiaWQgPSAkKCc8dGQ+JykudGV4dChjdXJyZW5jeS5yYXRlc1tpXS5iaWQpO1xuICAgICAgICBsZXQgYXNrID0gJCgnPHRkPicpLnRleHQoY3VycmVuY3kucmF0ZXNbaV0uYXNrKTtcbiAgICAgICAgdGFibGVJbnNlcnQuYXBwZW5kKHRyKTtcbiAgICAgICAgdHIuYXBwZW5kKGNvZGUpO1xuICAgICAgICB0ci5hcHBlbmQoYmlkKTtcbiAgICAgICAgdHIuYXBwZW5kKGFzayk7XG4gICAgfTtcbiAgfVxuXG4gIGxldCBsb2FkQ3VycmVuY3kgPSAoKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogbmJwQXBpXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVswXSk7XG4gICAgICBpbnNlcnRDdXJyZW5jeShyZXNwb25zZVswXSlcbiAgICB9KS5mYWlsKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG4gIH07XG4gIGxvYWRDdXJyZW5jeSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);