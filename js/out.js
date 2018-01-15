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
eval("\n\n$(function () {\n\n  var nbpApi = \"http://api.nbp.pl/api/exchangerates/tables/c/?format=json\";\n\n  var insertCurrency = function insertCurrency(currency) {\n    var tableInsert = $(\"table#currency\").find(\"tbody\");\n    var dateInsert = $(\"table#currency\").find(\"th\").first();\n    dateInsert.text(currency.effectiveDate);\n    for (var i = 0; i < currency.rates.length; i++) {\n      var tr = $(\"<tr class='active'></tr>\");\n      var code = $(\"<td>\").text(currency.rates[i].code);\n      var bid = $(\"<td>\").text(currency.rates[i].bid);\n      var ask = $(\"<td>\").text(currency.rates[i].ask);\n      tableInsert.append(tr);\n      tr.append(code);\n      tr.append(bid);\n      tr.append(ask);\n    };\n  };\n\n  var insertExchange = function insertExchange(currency) {\n    var currencyInsert = $(\"form#calculatorForm select#currencySelect\");\n    for (var i = 0; i < currency.length; i++) {\n      var option = $(\"<option></option>\").val(currency[i].code).text(currency[i].code).attr(\"data-id\", [i]).attr(\"data-bid\", currency[i].bid).attr(\"data-ask\", currency[i].ask);\n      currencyInsert.append(option);\n    };\n  };\n\n  var loadCurrency = function loadCurrency() {\n    $.ajax({\n      url: nbpApi\n    }).done(function (response) {\n      insertCurrency(response[0]);\n      insertExchange(response[0].rates);\n    }).fail(function (error) {\n      console.log(error);\n    });\n  };\n  loadCurrency();\n\n  $(\"button.btn\").on(\"click\", function (event) {\n    event.preventDefault();\n    var optionSelected = $(\"select#currencySelect\").find(\":selected\");\n    var checkboxValue = $('input[name=bidAsk]:checked', '#calculatorForm').val();\n    var calculator = $(\"div#calculator\");\n    var choosenCurrency = $(\"div#calculator p\").last();\n\n    if (checkboxValue === \"bid\") {\n      choosenCurrency.text(\"You have chosen\" + \" \" + optionSelected.val() + \" \" + optionSelected.attr(\"data-bid\"));\n      calculator.append(choosenCurrency);\n      console.log(optionSelected.attr(\"data-bid\"));\n    } else if (checkboxValue === \"ask\") {\n      choosenCurrency.text(\"You have chosen\" + \" \" + optionSelected.val() + \" \" + optionSelected.attr(\"data-ask\"));\n      calculator.append(choosenCurrency);\n      console.log(optionSelected.attr(\"data-ask\"));\n    } else if (checkboxValue === undefined) {\n      choosenCurrency.text(\"You need to choose bid or ask\");\n      calculator.append(choosenCurrency);\n    }\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanN4P2M2YjEiXSwibmFtZXMiOlsiJCIsIm5icEFwaSIsImluc2VydEN1cnJlbmN5IiwiY3VycmVuY3kiLCJ0YWJsZUluc2VydCIsImZpbmQiLCJkYXRlSW5zZXJ0IiwiZmlyc3QiLCJ0ZXh0IiwiZWZmZWN0aXZlRGF0ZSIsImkiLCJyYXRlcyIsImxlbmd0aCIsInRyIiwiY29kZSIsImJpZCIsImFzayIsImFwcGVuZCIsImluc2VydEV4Y2hhbmdlIiwiY3VycmVuY3lJbnNlcnQiLCJvcHRpb24iLCJ2YWwiLCJhdHRyIiwibG9hZEN1cnJlbmN5IiwiYWpheCIsInVybCIsImRvbmUiLCJyZXNwb25zZSIsImZhaWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvcHRpb25TZWxlY3RlZCIsImNoZWNrYm94VmFsdWUiLCJjYWxjdWxhdG9yIiwiY2hvb3NlbkN1cnJlbmN5IiwibGFzdCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsRUFBRSxZQUFZOztBQUVaLE1BQU1DLFNBQVUsMkRBQWhCOztBQUVBLE1BQUlDLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDLFFBQUlDLGNBQWNKLEVBQUUsZ0JBQUYsRUFBb0JLLElBQXBCLENBQXlCLE9BQXpCLENBQWxCO0FBQ0EsUUFBSUMsYUFBYU4sRUFBRSxnQkFBRixFQUFvQkssSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JFLEtBQS9CLEVBQWpCO0FBQ0FELGVBQVdFLElBQVgsQ0FBZ0JMLFNBQVNNLGFBQXpCO0FBQ0EsU0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZ0JBLElBQUlQLFNBQVNRLEtBQVQsQ0FBZUMsTUFBbkMsRUFBMkNGLEdBQTNDLEVBQWdEO0FBQzVDLFVBQUlHLEtBQUtiLEVBQUUsMEJBQUYsQ0FBVDtBQUNBLFVBQUljLE9BQU9kLEVBQUUsTUFBRixFQUFVUSxJQUFWLENBQWVM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QVdwQixNQUFYLENBQWtCcUIsZUFBbEI7QUFDQVIsY0FBUUMsR0FBUixDQUFZSSxlQUFlYixJQUFmLENBQW9CLFVBQXBCLENBQVo7QUFDRCxLQUpNLE1BSUEsSUFBSWMsa0JBQWtCSSxTQUF0QixFQUFpQztBQUN0Q0Ysc0JBQWdCOUIsSUFBaEIsQ0FBcUIsK0JBQXJCO0FBQ0E2QixpQkFBV3BCLE1BQVgsQ0FBa0JxQixlQUFsQjtBQUNEO0FBQ0osR0FuQkM7QUF5QkgsQ0FuRUQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IG5icEFwaSAgPSBcImh0dHA6Ly9hcGkubmJwLnBsL2FwaS9leGNoYW5nZXJhdGVzL3RhYmxlcy9jLz9mb3JtYXQ9anNvblwiO1xuXG4gIGxldCBpbnNlcnRDdXJyZW5jeSA9IChjdXJyZW5jeSkgPT4ge1xuICAgIGxldCB0YWJsZUluc2VydCA9ICQoXCJ0YWJsZSNjdXJyZW5jeVwiKS5maW5kKFwidGJvZHlcIik7XG4gICAgbGV0IGRhdGVJbnNlcnQgPSAkKFwidGFibGUjY3VycmVuY3lcIikuZmluZChcInRoXCIpLmZpcnN0KCk7XG4gICAgZGF0ZUluc2VydC50ZXh0KGN1cnJlbmN5LmVmZmVjdGl2ZURhdGUpO1xuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgY3VycmVuY3kucmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyID0gJChcIjx0ciBjbGFzcz0nYWN0aXZlJz48L3RyPlwiKTtcbiAgICAgICAgbGV0IGNvZGUgPSAkKFwiPHRkPlwiKS50ZXh0KGN1cnJlbmN5LnJhdGVzW2ldLmNvZGUpO1xuICAgICAgICBsZXQgYmlkID0gJChcIjx0ZD5cIikudGV4dChjdXJyZW5jeS5yYXRlc1tpXS5iaWQpO1xuICAgICAgICBsZXQgYXNrID0gJChcIjx0ZD5cIikudGV4dChjdXJyZW5jeS5yYXRlc1tpXS5hc2spO1xuICAgICAgICB0YWJsZUluc2VydC5hcHBlbmQodHIpO1xuICAgICAgICB0ci5hcHBlbmQoY29kZSk7XG4gICAgICAgIHRyLmFwcGVuZChiaWQpO1xuICAgICAgICB0ci5hcHBlbmQoYXNrKTtcbiAgICB9O1xuICB9XG5cbiAgbGV0IGluc2VydEV4Y2hhbmdlID0gKGN1cnJlbmN5KSA9PiB7XG4gICAgbGV0IGN1cnJlbmN5SW5zZXJ0ID0gJChcImZvcm0jY2FsY3VsYXRvckZvcm0gc2VsZWN0I2N1cnJlbmN5U2VsZWN0XCIpO1xuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgY3VycmVuY3kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKS52YWwoY3VycmVuY3lbaV0uY29kZSkudGV4dChjdXJyZW5jeVtpXS5jb2RlKS5hdHRyKFwiZGF0YS1pZFwiLCBbaV0pLmF0dHIoXCJkYXRhLWJpZFwiLGN1cnJlbmN5W2ldLmJpZCkuYXR0cihcImRhdGEtYXNrXCIsY3VycmVuY3lbaV0uYXNrKTtcbiAgICAgICAgY3VycmVuY3lJbnNlcnQuYXBwZW5kKG9wdGlvbik7XG4gICAgfTtcbiAgfTtcblxuICBsZXQgbG9hZEN1cnJlbmN5ID0gKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IG5icEFwaVxuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgaW5zZXJ0Q3VycmVuY3kocmVzcG9uc2VbMF0pO1xuICAgICAgaW5zZXJ0RXhjaGFuZ2UocmVzcG9uc2VbMF0ucmF0ZXMpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcblxuICB9O1xuICBsb2FkQ3VycmVuY3koKTtcblxuXG4gICAgJChcImJ1dHRvbi5idG5cIikub24oXCJjbGlja1wiLFx0ZnVuY3Rpb24oZXZlbnQpXHR7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IG9wdGlvblNlbGVjdGVkID0gJChcInNlbGVjdCNjdXJyZW5jeVNlbGVjdFwiKS5maW5kKFwiOnNlbGVjdGVkXCIpO1xuICAgICAgbGV0IGNoZWNrYm94VmFsdWUgPSAkKCdpbnB1dFtuYW1lPWJpZEFza106Y2hlY2tlZCcsICcjY2FsY3VsYXRvckZvcm0nKS52YWwoKVxuICAgICAgbGV0IGNhbGN1bGF0b3IgPSAkKFwiZGl2I2NhbGN1bGF0b3JcIik7XG4gICAgICBsZXQgY2hvb3NlbkN1cnJlbmN5ID0gJChcImRpdiNjYWxjdWxhdG9yIHBcIikubGFzdCgpO1xuXG4gICAgICBpZiAoY2hlY2tib3hWYWx1ZSA9PT0gXCJiaWRcIikge1xuICAgICAgICBjaG9vc2VuQ3VycmVuY3kudGV4dChcIllvdSBoYXZlIGNob3NlblwiICsgXCIgXCIgKyBvcHRpb25TZWxlY3RlZC52YWwoKSArIFwiIFwiICsgb3B0aW9uU2VsZWN0ZWQuYXR0cihcImRhdGEtYmlkXCIpKTtcbiAgICAgICAgY2FsY3VsYXRvci5hcHBlbmQoY2hvb3NlbkN1cnJlbmN5KTtcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uU2VsZWN0ZWQuYXR0cihcImRhdGEtYmlkXCIpKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tib3hWYWx1ZSA9PT0gXCJhc2tcIikge1xuICAgICAgICBjaG9vc2VuQ3VycmVuY3kudGV4dChcIllvdSBoYXZlIGNob3NlblwiICsgXCIgXCIgKyBvcHRpb25TZWxlY3RlZC52YWwoKSArIFwiIFwiICsgb3B0aW9uU2VsZWN0ZWQuYXR0cihcImRhdGEtYXNrXCIpKTtcbiAgICAgICAgY2FsY3VsYXRvci5hcHBlbmQoY2hvb3NlbkN1cnJlbmN5KTtcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uU2VsZWN0ZWQuYXR0cihcImRhdGEtYXNrXCIpKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2tib3hWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNob29zZW5DdXJyZW5jeS50ZXh0KFwiWW91IG5lZWQgdG8gY2hvb3NlIGJpZCBvciBhc2tcIik7XG4gICAgICAgIGNhbGN1bGF0b3IuYXBwZW5kKGNob29zZW5DdXJyZW5jeSk7XG4gICAgICB9XG4gIH0pO1xuXG5cblxuXG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);