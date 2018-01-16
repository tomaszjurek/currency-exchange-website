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
eval("\n\n$(function () {\n\n  var nbpApi = \"http://api.nbp.pl/api/exchangerates/tables/c/?format=json\";\n  var sumResult = 0,\n      alert = $(\"div.alert\");\n\n  // Inject table with currencies\n  var insertCurrency = function insertCurrency(currency) {\n    var tableInsert = $(\"table#currency\").find(\"tbody\"),\n        dateInsert = $(\"table#currency\").find(\"th\").first();\n    dateInsert.text(currency.effectiveDate);\n    for (var i = 0; i < currency.rates.length; i++) {\n      var tr = $(\"<tr class='active'></tr>\"),\n          code = $(\"<td>\").text(currency.rates[i].code),\n          bid = $(\"<td>\").text(currency.rates[i].bid),\n          ask = $(\"<td>\").text(currency.rates[i].ask);\n      tableInsert.append(tr);\n      tr.append(code);\n      tr.append(bid);\n      tr.append(ask);\n    };\n  };\n\n  // inject options to select\n  var insertExchange = function insertExchange(currency) {\n    var currencyInsert = $(\"form#calculatorForm select#currencySelect\");\n    for (var i = 0; i < currency.length; i++) {\n      var option = $(\"<option></option>\").val(currency[i].code).text(currency[i].code).attr(\"data-id\", [i]).attr(\"data-bid\", currency[i].bid).attr(\"data-ask\", currency[i].ask);\n      currencyInsert.append(option);\n    };\n  };\n\n  // Ajax\n  var loadCurrency = function loadCurrency() {\n    $.ajax({\n      url: nbpApi\n    }).done(function (response) {\n      insertCurrency(response[0]);\n      insertExchange(response[0].rates);\n    }).fail(function (error) {\n      console.log(error);\n    });\n  };\n  loadCurrency();\n\n  // Validation for calculator form\n  $(\"button#check\").on(\"click\", function (event) {\n    event.preventDefault();\n    var optionSelected = $(\"select#currencySelect\").find(\":selected\"),\n        checkboxValue = $('input[name=bidAsk]:checked', '#calculatorForm').val(),\n        calculator = $(\"div#calculator\").next(),\n        choosenCurrency = $(\"div#calculator\").find(\"div.inserted-currency\");\n\n    if (checkboxValue === \"bid\") {\n      choosenCurrency.text(optionSelected.val() + \" \" + optionSelected.attr(\"data-bid\"));\n      calculator.append(choosenCurrency);\n    } else if (checkboxValue === \"ask\") {\n      choosenCurrency.text(optionSelected.val() + \" \" + optionSelected.attr(\"data-ask\"));\n      calculator.append(choosenCurrency);\n    } else if (checkboxValue === undefined) {\n      alert.find(\"strong\").text(\"Please choose between bid or ask\");\n      alert.css(\"display\", \"block\");\n      calculator.append(choosenCurrency);\n    }\n  });\n\n  // Calculator\n  $(\"button#exchange\").on(\"click\", function (event) {\n    event.preventDefault();\n    var result = void 0,\n        amountInput = $(\"input[name=amount]\").val(),\n        amountInputNumber = parseFloat(amountInput),\n        currency = $(\"div#calculator p\").last().text().substring(4),\n        currencyNumber = parseFloat(currency);\n\n    if (amountInput !== \"\" & parseFloat(amountInput) > 0) {\n      result = amountInput * currency;\n      // sumResult = sumResult + result;\n      result = \"\";\n      // console.log($('input[name=bidAsk]:checked', '#calculatorForm').val());\n      // WSTAWIANIE DO LISTY KUPIONYCH RZECZY z przyciskami do usuniecia\n      // Podzial na kupione i sprzedane\n      // na koniec suma wszystkiego\n    } else {\n      alert.find(\"strong\").text(\"Please enter Your amount or choose bid/ask\");\n      alert.css(\"display\", \"block\");\n    }\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanN4P2M2YjEiXSwibmFtZXMiOlsiJCIsIm5icEFwaSIsInN1bVJlc3VsdCIsImFsZXJ0IiwiaW5zZXJ0Q3VycmVuY3kiLCJjdXJyZW5jeSIsInRhYmxlSW5zZXJ0IiwiZmluZCIsImRhdGVJbnNlcnQiLCJmaXJzdCIsInRleHQiLCJlZmZlY3RpdmVEYXRlIiwiaSIsInJhdGVzIiwibGVuZ3RoIiwidHIiLCJjb2RlIiwiYmlkIiwiYXNrIiwiYXBwZW5kIiwiaW5zZXJ0RXhjaGFuZ2UiLCJjdXJyZW5jeUluc2VydCIsIm9wdGlvbiIsInZhbCIsImF0dHIiLCJsb2FkQ3VycmVuY3kiLCJhamF4IiwidXJsIiwiZG9uZSIsInJlc3BvbnNlIiwiZmFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvblNlbGVjdGVkIiwiY2hlY2tib3hWYWx1ZSIsImNhbGN1bGF0b3IiLCJuZXh0IiwiY2hvb3NlbkN1cnJlbmN5IiwidW5kZWZpbmVkIiwiY3NzIiwicmVzdWx0IiwiYW1vdW50SW5wdXQiLCJhbW91bnRJbnB1dE51bWJlciIsInBhcnNlRmxvYXQiLCJsYXN0Iiwic3Vic3RyaW5nIiwiY3VycmVuY3lOdW1iZXIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEVBQUUsWUFBWTs7QUFFWixNQUFNQyxTQUFVLDJEQUFoQjtBQUNBLE1BQUlDLFlBQVksQ0FBaEI7QUFBQSxNQUNJQyxRQUFRSCxFQUFFLFdBQUYsQ0FEWjs7QUFHRjtBQUNFLE1BQUlJLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDLFFBQUlDLGNBQWNOLEVBQUUsZ0JBQUYsRUFBb0JPLElBQXBCLENBQXlCLE9BQXpCLENBQWxCO0FBQUEsUUFDSUMsYUFBYVIsRUFBRSxnQkFBRixFQUFvQk8sSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JFLEtBQS9CLEVBRGpCO0FBRUFELGVBQVdFLElBQVgsQ0FBZ0JMLFNBQVNNLGFBQXpCO0FBQ0EsU0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZ0JBLElBQUlQLFNBQVNRLEtBQVQsQ0FBZUMsTUFBbkMsRUFBMkNGLEdBQTNDLEVBQWdEO0FBQzVDLFVBQUlHLEtBQUtmLEVBQUUsMEJBQUYsQ0FBVDtBQUFBLFVBQ0lnQixPQUFPaEIsRUFBRSxNQUFGLEVBQVVVLElBQVYsQ0FBZUwsU0FBU1EsS0FBVCxDQUFlRCxDQUFmLEVBQWtCSSxJQUFqQyxDQURYO0FBQUEsVUFFSUMsTUFBTWpCLEVBQUUsTUFBRixFQUFVVSxJQUFWLENBQWVMLFNBQVNRLEtBQVQsQ0FBZUQsQ0FBZixFQUFrQkssR0FBakMsQ0FGVjtBQUFBLFVBR0lDLE1BQU1sQixFQUFFLE1BQUYsRUFBVVUsSUFBVixDQUFlTCxTQUFTUSxLQUFULENBQWVELENBQWYsRUFBa0JNLEdBQWpDLENBSFY7QUFJQVosa0JBQVlhLE1BQVosQ0FBbUJKLEVBQW5CO0FBQ0FBLFNBQUdJLE1BQUgsQ0FBVUgsSUFBVjtBQUNBRCxTQUFHSSxNQUFILENBQVVGLEdBQVY7QUFDQUYsU0FBR0ksTUFBSCxDQUFVRCxHQUFWO0FBQ0g7QUFDRixHQWREOztBQWdCRjtBQUNFLE1BQUlFLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ2YsUUFBRCxFQUFjO0FBQ2pDLFFBQUlnQixpQkFBaUJyQixFQUFFLDJDQUFGLENBQXJCO0FBQ0EsU0FBSSxJQUFJWSxJQUFJLENBQVosRUFBZ0JBLElBQUlQLFNBQVNTLE1BQTdCLEVBQXFDRixHQUFyQyxFQUEwQztBQUN0QyxVQUFJVSxTQUFTdEIsRUFBRSxtQkFBRixFQUF1QnVCLEdBQXZCLENBQTJCbEIsU0FBU08sQ0FBVCxFQUFZSSxJQUF2QyxFQUE2Q04sSUFBN0MsQ0FBa0RMLFNBQVNPLENBQVQsRUFBWUksSUFBOUQsRUFBb0VRLElBQXBFLENBQXlFLFNBQXpFLEVBQW9GLENBQUNaLENBQUQsQ0FBcEYsRUFBeUZZLElBQXpGLENBQThGLFVBQTlGLEVBQXlHbkIsU0FBU08sQ0FBVCxFQUFZSyxHQUFySCxFQUEwSE8sSUFBMUgsQ0FBK0gsVUFBL0gsRUFBMEluQixTQUFTTyxDQUFULEVBQVlNLEdBQXRKLENBQWI7QUFDQUcscUJBQWVGLE1BQWYsQ0FBc0JHLE1BQXRCO0FBQ0g7QUFDRixHQU5EOztBQVFGO0FBQ0UsTUFBSUcsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDdkJ6QixNQUFFMEIsSUFBRixDQUFPO0FBQ0xDLFdBQUsxQjtBQURBLEtBQVAsRUFFRzJCLElBRkgsQ0FFUSxVQUFTQyxRQUFULEVBQWtCO0FBQ3hCekIscUJBQWV5QixTQUFTLENBQVQsQ0FBZjtBQUNBVCxxQkFBZVMsU0FBUyxDQUFULEVBQVloQixLQUEzQjtBQUNELEtBTEQsRUFLR2lCLElBTEgsQ0FLUSxVQUFTQyxLQUFULEVBQWdCO0FBQ3JCQyxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDRixLQVBEO0FBU0QsR0FWRDtBQVdBTjs7QUFFRjtBQUNFekIsSUFBRSxjQUFGLEVBQWtCa0MsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBU0MsS0FBVCxFQUFnQjtBQUM1Q0EsVUFBTUMsY0FBTjtBQUNBLFFBQUlDLGlCQUFpQnJDLEVBQUUsdUJBQUYsRUFBMkJPLElBQTNCLENBQWdDLFdBQWhDLENBQXJCO0FBQUEsUUFDSStCLGdCQUFnQnRDLEVBQUUsNEJBQUYsRUFBZ0MsaUJBQWhDLEVBQW1EdUIsR0FBbkQsRUFEcEI7QUFBQSxRQUVJZ0IsYUFBYXZDLEVBQUUsZ0JBQUYsRUFBb0J3QyxJQUFwQixFQUZqQjtBQUFBLFFBR0lDLGtCQUFrQnpDLEVBQUUsZ0JBQUYsRUFBb0JPLElBQXBCLENBQXlCLHVCQUF6QixDQUh0Qjs7QUFLQSxRQUFJK0Isa0JBQWtCLEtBQXRCLEVBQTZCO0FBQzNCRyxzQkFBZ0IvQixJQUFoQixDQUFxQjJCLGVBQWVkLEdBQWYsS0FBdUIsR0FBdkIsR0FBNkJjLGVBQWViLElBQWYsQ0FBb0IsVUFBcEIsQ0FBbEQ7QUFDQWUsaUJBQVdwQixNQUFYLENBQWtCc0IsZUFBbEI7QUFDRCxLQUhELE1BR08sSUFBSUgsa0JBQWtCLEtBQXRCLEVBQTZCO0FBQ2xDRyxzQkFBZ0IvQixJQUFoQixDQUFxQjJCLGVBQWVkLEdBQWYsS0FBdUIsR0FBdkIsR0FBNkJjLGVBQWViLElBQWYsQ0FBb0IsVUFBcEIsQ0FBbEQ7QUFDQWUsaUJBQVdwQixNQUFYLENBQWtCc0IsZUFBbEI7QUFDRCxLQUhNLE1BR0EsSUFBSUgsa0JBQWtCSSxTQUF0QixFQUFpQztBQUN0Q3ZDLFlBQU1JLElBQU4sQ0FBVyxRQUFYLEVBQXFCRyxJQUFyQixDQUEwQixrQ0FBMUI7QUFDQVAsWUFBTXdDLEdBQU4sQ0FBVSxTQUFWLEVBQW9CLE9BQXBCO0FBQ0FKLGlCQUFXcEIsTUFBWCxDQUFrQnNCLGVBQWxCO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkY7QUFDRXpDLElBQUUsaUJBQUYsRUFBcUJrQyxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxVQUFTQyxLQUFULEVBQWdCO0FBQy9DQSxVQUFNQyxjQUFOO0FBQ0EsUUFBSVEsZUFBSjtBQUFBLFFBQ0lDLGNBQWM3QyxFQUFFLG9CQUFGLEVBQXdCdUIsR0FBeEIsRUFEbEI7QUFBQSxRQUVJdUIsb0JBQW9CQyxXQUFXRixXQUFYLENBRnhCO0FBQUEsUUFHSXhDLFdBQVdMLEVBQUUsa0JBQUYsRUFBc0JnRCxJQUF0QixHQUE2QnRDLElBQTdCLEdBQW9DdUMsU0FBcEMsQ0FBOEMsQ0FBOUMsQ0FIZjtBQUFBLFFBSUlDLGlCQUFpQkgsV0FBVzFDLFFBQVgsQ0FKckI7O0FBTUEsUUFBSXdDLGdCQUFnQixFQUFoQixHQUFxQkUsV0FBV0YsV0FBWCxJQUEwQixDQUFuRCxFQUFzRDtBQUNwREQsZUFBU0MsY0FBY3hDLFFBQXZCO0FBQ0E7QUFDQXVDLGVBQVMsRUFBVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsS0FSRCxNQVFPO0FBQ0x6QyxZQUFNSSxJQUFOLENBQVcsUUFBWCxFQUFxQkcsSUFBckIsQ0FBMEIsNENBQTFCO0FBQ0FQLFlBQU13QyxHQUFOLENBQVUsU0FBVixFQUFvQixPQUFwQjtBQUNEO0FBQ0YsR0FwQkQ7QUFxQkQsQ0F6RkQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IG5icEFwaSAgPSBcImh0dHA6Ly9hcGkubmJwLnBsL2FwaS9leGNoYW5nZXJhdGVzL3RhYmxlcy9jLz9mb3JtYXQ9anNvblwiO1xuICBsZXQgc3VtUmVzdWx0ID0gMCxcbiAgICAgIGFsZXJ0ID0gJChcImRpdi5hbGVydFwiKTtcblxuLy8gSW5qZWN0IHRhYmxlIHdpdGggY3VycmVuY2llc1xuICBsZXQgaW5zZXJ0Q3VycmVuY3kgPSAoY3VycmVuY3kpID0+IHtcbiAgICBsZXQgdGFibGVJbnNlcnQgPSAkKFwidGFibGUjY3VycmVuY3lcIikuZmluZChcInRib2R5XCIpLFxuICAgICAgICBkYXRlSW5zZXJ0ID0gJChcInRhYmxlI2N1cnJlbmN5XCIpLmZpbmQoXCJ0aFwiKS5maXJzdCgpO1xuICAgIGRhdGVJbnNlcnQudGV4dChjdXJyZW5jeS5lZmZlY3RpdmVEYXRlKTtcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGN1cnJlbmN5LnJhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ciA9ICQoXCI8dHIgY2xhc3M9J2FjdGl2ZSc+PC90cj5cIiksXG4gICAgICAgICAgICBjb2RlID0gJChcIjx0ZD5cIikudGV4dChjdXJyZW5jeS5yYXRlc1tpXS5jb2RlKSxcbiAgICAgICAgICAgIGJpZCA9ICQoXCI8dGQ+XCIpLnRleHQoY3VycmVuY3kucmF0ZXNbaV0uYmlkKSxcbiAgICAgICAgICAgIGFzayA9ICQoXCI8dGQ+XCIpLnRleHQoY3VycmVuY3kucmF0ZXNbaV0uYXNrKTtcbiAgICAgICAgdGFibGVJbnNlcnQuYXBwZW5kKHRyKTtcbiAgICAgICAgdHIuYXBwZW5kKGNvZGUpO1xuICAgICAgICB0ci5hcHBlbmQoYmlkKTtcbiAgICAgICAgdHIuYXBwZW5kKGFzayk7XG4gICAgfTtcbiAgfVxuXG4vLyBpbmplY3Qgb3B0aW9ucyB0byBzZWxlY3RcbiAgbGV0IGluc2VydEV4Y2hhbmdlID0gKGN1cnJlbmN5KSA9PiB7XG4gICAgbGV0IGN1cnJlbmN5SW5zZXJ0ID0gJChcImZvcm0jY2FsY3VsYXRvckZvcm0gc2VsZWN0I2N1cnJlbmN5U2VsZWN0XCIpO1xuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgY3VycmVuY3kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKS52YWwoY3VycmVuY3lbaV0uY29kZSkudGV4dChjdXJyZW5jeVtpXS5jb2RlKS5hdHRyKFwiZGF0YS1pZFwiLCBbaV0pLmF0dHIoXCJkYXRhLWJpZFwiLGN1cnJlbmN5W2ldLmJpZCkuYXR0cihcImRhdGEtYXNrXCIsY3VycmVuY3lbaV0uYXNrKTtcbiAgICAgICAgY3VycmVuY3lJbnNlcnQuYXBwZW5kKG9wdGlvbik7XG4gICAgfTtcbiAgfTtcblxuLy8gQWpheFxuICBsZXQgbG9hZEN1cnJlbmN5ID0gKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IG5icEFwaVxuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgaW5zZXJ0Q3VycmVuY3kocmVzcG9uc2VbMF0pO1xuICAgICAgaW5zZXJ0RXhjaGFuZ2UocmVzcG9uc2VbMF0ucmF0ZXMpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcblxuICB9O1xuICBsb2FkQ3VycmVuY3koKTtcblxuLy8gVmFsaWRhdGlvbiBmb3IgY2FsY3VsYXRvciBmb3JtXG4gICQoXCJidXR0b24jY2hlY2tcIikub24oXCJjbGlja1wiLFx0ZnVuY3Rpb24oZXZlbnQpXHR7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgb3B0aW9uU2VsZWN0ZWQgPSAkKFwic2VsZWN0I2N1cnJlbmN5U2VsZWN0XCIpLmZpbmQoXCI6c2VsZWN0ZWRcIiksXG4gICAgICAgIGNoZWNrYm94VmFsdWUgPSAkKCdpbnB1dFtuYW1lPWJpZEFza106Y2hlY2tlZCcsICcjY2FsY3VsYXRvckZvcm0nKS52YWwoKSxcbiAgICAgICAgY2FsY3VsYXRvciA9ICQoXCJkaXYjY2FsY3VsYXRvclwiKS5uZXh0KCksXG4gICAgICAgIGNob29zZW5DdXJyZW5jeSA9ICQoXCJkaXYjY2FsY3VsYXRvclwiKS5maW5kKFwiZGl2Lmluc2VydGVkLWN1cnJlbmN5XCIpO1xuXG4gICAgaWYgKGNoZWNrYm94VmFsdWUgPT09IFwiYmlkXCIpIHtcbiAgICAgIGNob29zZW5DdXJyZW5jeS50ZXh0KG9wdGlvblNlbGVjdGVkLnZhbCgpICsgXCIgXCIgKyBvcHRpb25TZWxlY3RlZC5hdHRyKFwiZGF0YS1iaWRcIikpO1xuICAgICAgY2FsY3VsYXRvci5hcHBlbmQoY2hvb3NlbkN1cnJlbmN5KTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrYm94VmFsdWUgPT09IFwiYXNrXCIpIHtcbiAgICAgIGNob29zZW5DdXJyZW5jeS50ZXh0KG9wdGlvblNlbGVjdGVkLnZhbCgpICsgXCIgXCIgKyBvcHRpb25TZWxlY3RlZC5hdHRyKFwiZGF0YS1hc2tcIikpO1xuICAgICAgY2FsY3VsYXRvci5hcHBlbmQoY2hvb3NlbkN1cnJlbmN5KTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrYm94VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxlcnQuZmluZChcInN0cm9uZ1wiKS50ZXh0KFwiUGxlYXNlIGNob29zZSBiZXR3ZWVuIGJpZCBvciBhc2tcIik7XG4gICAgICBhbGVydC5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcbiAgICAgIGNhbGN1bGF0b3IuYXBwZW5kKGNob29zZW5DdXJyZW5jeSk7XG4gICAgfVxuICB9KTtcblxuLy8gQ2FsY3VsYXRvclxuICAkKFwiYnV0dG9uI2V4Y2hhbmdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpXHR7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcmVzdWx0LFxuICAgICAgICBhbW91bnRJbnB1dCA9ICQoXCJpbnB1dFtuYW1lPWFtb3VudF1cIikudmFsKCksXG4gICAgICAgIGFtb3VudElucHV0TnVtYmVyID0gcGFyc2VGbG9hdChhbW91bnRJbnB1dCksXG4gICAgICAgIGN1cnJlbmN5ID0gJChcImRpdiNjYWxjdWxhdG9yIHBcIikubGFzdCgpLnRleHQoKS5zdWJzdHJpbmcoNCksXG4gICAgICAgIGN1cnJlbmN5TnVtYmVyID0gcGFyc2VGbG9hdChjdXJyZW5jeSk7XG5cbiAgICBpZiAoYW1vdW50SW5wdXQgIT09IFwiXCIgJiBwYXJzZUZsb2F0KGFtb3VudElucHV0KSA+IDApIHtcbiAgICAgIHJlc3VsdCA9IGFtb3VudElucHV0ICogY3VycmVuY3k7XG4gICAgICAvLyBzdW1SZXN1bHQgPSBzdW1SZXN1bHQgKyByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBcIlwiO1xuICAgICAgLy8gY29uc29sZS5sb2coJCgnaW5wdXRbbmFtZT1iaWRBc2tdOmNoZWNrZWQnLCAnI2NhbGN1bGF0b3JGb3JtJykudmFsKCkpO1xuICAgICAgLy8gV1NUQVdJQU5JRSBETyBMSVNUWSBLVVBJT05ZQ0ggUlpFQ1pZIHogcHJ6eWNpc2thbWkgZG8gdXN1bmllY2lhXG4gICAgICAvLyBQb2R6aWFsIG5hIGt1cGlvbmUgaSBzcHJ6ZWRhbmVcbiAgICAgIC8vIG5hIGtvbmllYyBzdW1hIHdzenlzdGtpZWdvXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0LmZpbmQoXCJzdHJvbmdcIikudGV4dChcIlBsZWFzZSBlbnRlciBZb3VyIGFtb3VudCBvciBjaG9vc2UgYmlkL2Fza1wiKTtcbiAgICAgIGFsZXJ0LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qc3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);