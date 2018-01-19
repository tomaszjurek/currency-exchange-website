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
/***/ (function(module, exports) {

eval("$(function () {\n\n  const nbpApi  = \"https://api.nbp.pl/api/exchangerates/tables/c/?format=json\";\n  let tabResultBid = [],\n      tabResultAsk = [],\n      totalAsk,\n      totalBid,\n      index = 0,\n      alert = $(\"div.alert\"),\n      bidTable = $(\"table#bidTable\"),\n      askTable = $(\"table#askTable\"),\n      divRow = $(\"div.row.secondrow\");\n\n// Inject table with currencies\n  let insertCurrency = (currency) => {\n    let tableInsert = $(\"table#currency\").find(\"tbody\"),\n        dateInsert = $(\"table#currency\").find(\"th\").first();\n    dateInsert.text(currency.effectiveDate);\n    for(let i = 0 ; i < currency.rates.length; i++) {\n        let tr = $(\"<tr class='active'></tr>\"),\n            code = $(\"<td>\").text(currency.rates[i].code),\n            bid = $(\"<td>\").text(currency.rates[i].bid),\n            ask = $(\"<td>\").text(currency.rates[i].ask);\n        tableInsert.append(tr);\n        tr.append(code);\n        tr.append(bid);\n        tr.append(ask);\n    };\n  }\n\n// Inject options to select\n  let insertExchange = (currency) => {\n    let currencyInsert = $(\"form#calculatorForm select#currencySelect\");\n    for(let i = 0 ; i < currency.length; i++) {\n        let option = $(\"<option></option>\").val(currency[i].code).text(currency[i].code).attr(\"data-id\", [i]).attr(\"data-bid\",currency[i].bid).attr(\"data-ask\",currency[i].ask);\n        currencyInsert.append(option);\n    };\n  };\n\n// Ajax\n  let loadCurrency = () => {\n    $.ajax({\n      url: nbpApi\n    }).done(function(response){\n      insertCurrency(response[0]);\n      insertExchange(response[0].rates);\n    }).fail(function(error) {\n       console.log(error);\n    })\n\n  };\n  loadCurrency();\n\n// Validation for calculator form\n  $(\"button#check\").on(\"click\",\tfunction(event)\t{\n    event.preventDefault();\n    let optionSelected = $(\"select#currencySelect\").find(\":selected\"),\n        checkboxValue = $('input[name=bidAsk]:checked', '#calculatorForm').val(),\n        calculator = $(\"div#calculator\").next(),\n        choosenCurrency = $(\"div#calculator\").find(\"div.inserted-currency\");\n\n    if (checkboxValue === \"bid\") {\n      choosenCurrency.text(optionSelected.val() + \" \" + optionSelected.attr(\"data-bid\"));\n      calculator.append(choosenCurrency);\n    } else if (checkboxValue === \"ask\") {\n      choosenCurrency.text(optionSelected.val() + \" \" + optionSelected.attr(\"data-ask\"));\n      calculator.append(choosenCurrency);\n    } else if (checkboxValue === undefined) {\n      alert.find(\"strong\").text(\"Please choose bid or ask\");\n      alert.css(\"display\",\"block\");\n      calculator.append(choosenCurrency);\n    }\n  });\n\n// Calculator\n  $(\"button#exchange\").on(\"click\", function(event)\t{\n    event.preventDefault();\n    let resultBid,\n        resultAsk,\n        amountInput = $(\"input[name=amount]\").val(),\n        amountInputNumber = parseFloat(amountInput),\n        currency = $(\"div.inserted-currency\").text().substring(4),\n        currencyNumber = parseFloat(currency),\n        checkboxValue = $(\"input[name=bidAsk]:checked\", \"#calculatorForm\").val(),\n        bidList = $(\"div.secondrow\").find(\"table#bidTable\").find(\"tbody\"),\n        askList = $(\"div.secondrow\").find(\"table#askTable\").find(\"tbody\");\n\n\n    if (amountInput !== \"\" & amountInputNumber >= 0) {\n      if (checkboxValue === \"bid\") {\n        bidTable.css(\"display\",\"table\");\n        divRow.css(\"display\",\"block\");\n        resultBid = amountInputNumber * currencyNumber;\n        resultBid = resultBid.toFixed(2);\n        tabResultBid.push(resultBid);\n        let currencyCodeBid = $(\"div.inserted-currency\").text().substring(0,4),\n            tr = $(\"<tr class='active'></tr>\"),\n            currencyTd = $(\"<td>\").text(currencyCodeBid),\n            amountTd = $(\"<td>\").text(amountInputNumber),\n            plnTd = $(\"<td>\").text(resultBid),\n            btnDelete = $(\"<button class='btn delete'>\").text(\"Delete\");\n\n        bidList.append(tr);\n        tr.append(currencyTd);\n        tr.append(amountTd);\n        tr.append(plnTd);\n        tr.append(btnDelete);\n        resultBid = 0;\n        amountInput = $(\"input[name=amount]\").val(\"\");\n\n        totalBid = tabResultBid.reduce(function(prev, curr) {\n          return (Number(prev) + Number(curr)).toFixed(2);\n        });\n\n      } else if (checkboxValue === \"ask\") {\n        askTable.css(\"display\",\"table\");\n        divRow.css(\"display\",\"block\");\n        resultAsk = amountInputNumber * currencyNumber;\n        resultAsk = resultAsk.toFixed(2);\n        tabResultAsk.push(resultAsk);\n        let currencyCode = $(\"div.inserted-currency\").text().substring(0,4),\n            tr = $(\"<tr class='active'></tr>\"),\n            currencyTd = $(\"<td>\").text(currencyCode),\n            amountTd = $(\"<td>\").text(amountInputNumber),\n            plnTd = $(\"<td>\").text(resultAsk),\n            btnDelete = $(\"<button class='btn delete'>\").text(\"Delete\");\n\n        askList.append(tr);\n        tr.append(currencyTd);\n        tr.append(amountTd);\n        tr.append(plnTd);\n        tr.append(btnDelete);\n        resultBid = 0;\n        amountInput = $(\"input[name=amount]\").val(\"\");\n\n        totalAsk = tabResultAsk.reduce(function(prev, curr) {\n          return (Number(prev) + Number(curr)).toFixed(2);\n        });\n        // DODAĆ UJEMNĄ WARTOŚĆ DLA KUPNA WALUTY\n\n      }\n\n    } else {\n      alert.find(\"strong\").text(\"Please enter Your amount or choose bid/ask\");\n      alert.css(\"display\",\"block\");\n    }\n  });\n\n// Button delete bid tr and update sum\n  $(\"table#bidTable\").on(\"click\", \".delete\", function(){\n    tabResultBid.splice(tabResultBid.indexOf($(this).prev().text()), 1);\n\n    if (tabResultBid.length > 0) {\n      totalBid = tabResultBid.reduce(function(prev, curr) {\n        return (Number(prev) + Number(curr)).toFixed(2);\n      });\n    } else {\n      totalBid = 0;\n      bidTable.css(\"display\",\"none\");\n    }\n    $(this).parent().remove();\n  });\n\n// Button delete ask tr and update sum\n  $(\"table#askTable\").on(\"click\", \".delete\", function(){\n    tabResultAsk.splice(tabResultAsk.indexOf($(this).prev().text()), 1);\n\n    if (tabResultAsk.length > 0) {\n      totalAsk = tabResultAsk.reduce(function(prev, curr) {\n        return (Number(prev) + Number(curr)).toFixed(2);\n    });\n  } else {\n    totalAsk = 0;\n    askTable.css(\"display\",\"none\");\n  }\n    $(this).parent().remove();\n  });\n\n});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILENBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IG5icEFwaSAgPSBcImh0dHBzOi8vYXBpLm5icC5wbC9hcGkvZXhjaGFuZ2VyYXRlcy90YWJsZXMvYy8/Zm9ybWF0PWpzb25cIjtcbiAgbGV0IHRhYlJlc3VsdEJpZCA9IFtdLFxuICAgICAgdGFiUmVzdWx0QXNrID0gW10sXG4gICAgICB0b3RhbEFzayxcbiAgICAgIHRvdGFsQmlkLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgYWxlcnQgPSAkKFwiZGl2LmFsZXJ0XCIpLFxuICAgICAgYmlkVGFibGUgPSAkKFwidGFibGUjYmlkVGFibGVcIiksXG4gICAgICBhc2tUYWJsZSA9ICQoXCJ0YWJsZSNhc2tUYWJsZVwiKSxcbiAgICAgIGRpdlJvdyA9ICQoXCJkaXYucm93LnNlY29uZHJvd1wiKTtcblxuLy8gSW5qZWN0IHRhYmxlIHdpdGggY3VycmVuY2llc1xuICBsZXQgaW5zZXJ0Q3VycmVuY3kgPSAoY3VycmVuY3kpID0+IHtcbiAgICBsZXQgdGFibGVJbnNlcnQgPSAkKFwidGFibGUjY3VycmVuY3lcIikuZmluZChcInRib2R5XCIpLFxuICAgICAgICBkYXRlSW5zZXJ0ID0gJChcInRhYmxlI2N1cnJlbmN5XCIpLmZpbmQoXCJ0aFwiKS5maXJzdCgpO1xuICAgIGRhdGVJbnNlcnQudGV4dChjdXJyZW5jeS5lZmZlY3RpdmVEYXRlKTtcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGN1cnJlbmN5LnJhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ciA9ICQoXCI8dHIgY2xhc3M9J2FjdGl2ZSc+PC90cj5cIiksXG4gICAgICAgICAgICBjb2RlID0gJChcIjx0ZD5cIikudGV4dChjdXJyZW5jeS5yYXRlc1tpXS5jb2RlKSxcbiAgICAgICAgICAgIGJpZCA9ICQoXCI8dGQ+XCIpLnRleHQoY3VycmVuY3kucmF0ZXNbaV0uYmlkKSxcbiAgICAgICAgICAgIGFzayA9ICQoXCI8dGQ+XCIpLnRleHQoY3VycmVuY3kucmF0ZXNbaV0uYXNrKTtcbiAgICAgICAgdGFibGVJbnNlcnQuYXBwZW5kKHRyKTtcbiAgICAgICAgdHIuYXBwZW5kKGNvZGUpO1xuICAgICAgICB0ci5hcHBlbmQoYmlkKTtcbiAgICAgICAgdHIuYXBwZW5kKGFzayk7XG4gICAgfTtcbiAgfVxuXG4vLyBJbmplY3Qgb3B0aW9ucyB0byBzZWxlY3RcbiAgbGV0IGluc2VydEV4Y2hhbmdlID0gKGN1cnJlbmN5KSA9PiB7XG4gICAgbGV0IGN1cnJlbmN5SW5zZXJ0ID0gJChcImZvcm0jY2FsY3VsYXRvckZvcm0gc2VsZWN0I2N1cnJlbmN5U2VsZWN0XCIpO1xuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgY3VycmVuY3kubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKS52YWwoY3VycmVuY3lbaV0uY29kZSkudGV4dChjdXJyZW5jeVtpXS5jb2RlKS5hdHRyKFwiZGF0YS1pZFwiLCBbaV0pLmF0dHIoXCJkYXRhLWJpZFwiLGN1cnJlbmN5W2ldLmJpZCkuYXR0cihcImRhdGEtYXNrXCIsY3VycmVuY3lbaV0uYXNrKTtcbiAgICAgICAgY3VycmVuY3lJbnNlcnQuYXBwZW5kKG9wdGlvbik7XG4gICAgfTtcbiAgfTtcblxuLy8gQWpheFxuICBsZXQgbG9hZEN1cnJlbmN5ID0gKCkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IG5icEFwaVxuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgaW5zZXJ0Q3VycmVuY3kocmVzcG9uc2VbMF0pO1xuICAgICAgaW5zZXJ0RXhjaGFuZ2UocmVzcG9uc2VbMF0ucmF0ZXMpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcblxuICB9O1xuICBsb2FkQ3VycmVuY3koKTtcblxuLy8gVmFsaWRhdGlvbiBmb3IgY2FsY3VsYXRvciBmb3JtXG4gICQoXCJidXR0b24jY2hlY2tcIikub24oXCJjbGlja1wiLFx0ZnVuY3Rpb24oZXZlbnQpXHR7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgb3B0aW9uU2VsZWN0ZWQgPSAkKFwic2VsZWN0I2N1cnJlbmN5U2VsZWN0XCIpLmZpbmQoXCI6c2VsZWN0ZWRcIiksXG4gICAgICAgIGNoZWNrYm94VmFsdWUgPSAkKCdpbnB1dFtuYW1lPWJpZEFza106Y2hlY2tlZCcsICcjY2FsY3VsYXRvckZvcm0nKS52YWwoKSxcbiAgICAgICAgY2FsY3VsYXRvciA9ICQoXCJkaXYjY2FsY3VsYXRvclwiKS5uZXh0KCksXG4gICAgICAgIGNob29zZW5DdXJyZW5jeSA9ICQoXCJkaXYjY2FsY3VsYXRvclwiKS5maW5kKFwiZGl2Lmluc2VydGVkLWN1cnJlbmN5XCIpO1xuXG4gICAgaWYgKGNoZWNrYm94VmFsdWUgPT09IFwiYmlkXCIpIHtcbiAgICAgIGNob29zZW5DdXJyZW5jeS50ZXh0KG9wdGlvblNlbGVjdGVkLnZhbCgpICsgXCIgXCIgKyBvcHRpb25TZWxlY3RlZC5hdHRyKFwiZGF0YS1iaWRcIikpO1xuICAgICAgY2FsY3VsYXRvci5hcHBlbmQoY2hvb3NlbkN1cnJlbmN5KTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrYm94VmFsdWUgPT09IFwiYXNrXCIpIHtcbiAgICAgIGNob29zZW5DdXJyZW5jeS50ZXh0KG9wdGlvblNlbGVjdGVkLnZhbCgpICsgXCIgXCIgKyBvcHRpb25TZWxlY3RlZC5hdHRyKFwiZGF0YS1hc2tcIikpO1xuICAgICAgY2FsY3VsYXRvci5hcHBlbmQoY2hvb3NlbkN1cnJlbmN5KTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrYm94VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxlcnQuZmluZChcInN0cm9uZ1wiKS50ZXh0KFwiUGxlYXNlIGNob29zZSBiaWQgb3IgYXNrXCIpO1xuICAgICAgYWxlcnQuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG4gICAgICBjYWxjdWxhdG9yLmFwcGVuZChjaG9vc2VuQ3VycmVuY3kpO1xuICAgIH1cbiAgfSk7XG5cbi8vIENhbGN1bGF0b3JcbiAgJChcImJ1dHRvbiNleGNoYW5nZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KVx0e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHJlc3VsdEJpZCxcbiAgICAgICAgcmVzdWx0QXNrLFxuICAgICAgICBhbW91bnRJbnB1dCA9ICQoXCJpbnB1dFtuYW1lPWFtb3VudF1cIikudmFsKCksXG4gICAgICAgIGFtb3VudElucHV0TnVtYmVyID0gcGFyc2VGbG9hdChhbW91bnRJbnB1dCksXG4gICAgICAgIGN1cnJlbmN5ID0gJChcImRpdi5pbnNlcnRlZC1jdXJyZW5jeVwiKS50ZXh0KCkuc3Vic3RyaW5nKDQpLFxuICAgICAgICBjdXJyZW5jeU51bWJlciA9IHBhcnNlRmxvYXQoY3VycmVuY3kpLFxuICAgICAgICBjaGVja2JveFZhbHVlID0gJChcImlucHV0W25hbWU9YmlkQXNrXTpjaGVja2VkXCIsIFwiI2NhbGN1bGF0b3JGb3JtXCIpLnZhbCgpLFxuICAgICAgICBiaWRMaXN0ID0gJChcImRpdi5zZWNvbmRyb3dcIikuZmluZChcInRhYmxlI2JpZFRhYmxlXCIpLmZpbmQoXCJ0Ym9keVwiKSxcbiAgICAgICAgYXNrTGlzdCA9ICQoXCJkaXYuc2Vjb25kcm93XCIpLmZpbmQoXCJ0YWJsZSNhc2tUYWJsZVwiKS5maW5kKFwidGJvZHlcIik7XG5cblxuICAgIGlmIChhbW91bnRJbnB1dCAhPT0gXCJcIiAmIGFtb3VudElucHV0TnVtYmVyID49IDApIHtcbiAgICAgIGlmIChjaGVja2JveFZhbHVlID09PSBcImJpZFwiKSB7XG4gICAgICAgIGJpZFRhYmxlLmNzcyhcImRpc3BsYXlcIixcInRhYmxlXCIpO1xuICAgICAgICBkaXZSb3cuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG4gICAgICAgIHJlc3VsdEJpZCA9IGFtb3VudElucHV0TnVtYmVyICogY3VycmVuY3lOdW1iZXI7XG4gICAgICAgIHJlc3VsdEJpZCA9IHJlc3VsdEJpZC50b0ZpeGVkKDIpO1xuICAgICAgICB0YWJSZXN1bHRCaWQucHVzaChyZXN1bHRCaWQpO1xuICAgICAgICBsZXQgY3VycmVuY3lDb2RlQmlkID0gJChcImRpdi5pbnNlcnRlZC1jdXJyZW5jeVwiKS50ZXh0KCkuc3Vic3RyaW5nKDAsNCksXG4gICAgICAgICAgICB0ciA9ICQoXCI8dHIgY2xhc3M9J2FjdGl2ZSc+PC90cj5cIiksXG4gICAgICAgICAgICBjdXJyZW5jeVRkID0gJChcIjx0ZD5cIikudGV4dChjdXJyZW5jeUNvZGVCaWQpLFxuICAgICAgICAgICAgYW1vdW50VGQgPSAkKFwiPHRkPlwiKS50ZXh0KGFtb3VudElucHV0TnVtYmVyKSxcbiAgICAgICAgICAgIHBsblRkID0gJChcIjx0ZD5cIikudGV4dChyZXN1bHRCaWQpLFxuICAgICAgICAgICAgYnRuRGVsZXRlID0gJChcIjxidXR0b24gY2xhc3M9J2J0biBkZWxldGUnPlwiKS50ZXh0KFwiRGVsZXRlXCIpO1xuXG4gICAgICAgIGJpZExpc3QuYXBwZW5kKHRyKTtcbiAgICAgICAgdHIuYXBwZW5kKGN1cnJlbmN5VGQpO1xuICAgICAgICB0ci5hcHBlbmQoYW1vdW50VGQpO1xuICAgICAgICB0ci5hcHBlbmQocGxuVGQpO1xuICAgICAgICB0ci5hcHBlbmQoYnRuRGVsZXRlKTtcbiAgICAgICAgcmVzdWx0QmlkID0gMDtcbiAgICAgICAgYW1vdW50SW5wdXQgPSAkKFwiaW5wdXRbbmFtZT1hbW91bnRdXCIpLnZhbChcIlwiKTtcblxuICAgICAgICB0b3RhbEJpZCA9IHRhYlJlc3VsdEJpZC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xuICAgICAgICAgIHJldHVybiAoTnVtYmVyKHByZXYpICsgTnVtYmVyKGN1cnIpKS50b0ZpeGVkKDIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmIChjaGVja2JveFZhbHVlID09PSBcImFza1wiKSB7XG4gICAgICAgIGFza1RhYmxlLmNzcyhcImRpc3BsYXlcIixcInRhYmxlXCIpO1xuICAgICAgICBkaXZSb3cuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG4gICAgICAgIHJlc3VsdEFzayA9IGFtb3VudElucHV0TnVtYmVyICogY3VycmVuY3lOdW1iZXI7XG4gICAgICAgIHJlc3VsdEFzayA9IHJlc3VsdEFzay50b0ZpeGVkKDIpO1xuICAgICAgICB0YWJSZXN1bHRBc2sucHVzaChyZXN1bHRBc2spO1xuICAgICAgICBsZXQgY3VycmVuY3lDb2RlID0gJChcImRpdi5pbnNlcnRlZC1jdXJyZW5jeVwiKS50ZXh0KCkuc3Vic3RyaW5nKDAsNCksXG4gICAgICAgICAgICB0ciA9ICQoXCI8dHIgY2xhc3M9J2FjdGl2ZSc+PC90cj5cIiksXG4gICAgICAgICAgICBjdXJyZW5jeVRkID0gJChcIjx0ZD5cIikudGV4dChjdXJyZW5jeUNvZGUpLFxuICAgICAgICAgICAgYW1vdW50VGQgPSAkKFwiPHRkPlwiKS50ZXh0KGFtb3VudElucHV0TnVtYmVyKSxcbiAgICAgICAgICAgIHBsblRkID0gJChcIjx0ZD5cIikudGV4dChyZXN1bHRBc2spLFxuICAgICAgICAgICAgYnRuRGVsZXRlID0gJChcIjxidXR0b24gY2xhc3M9J2J0biBkZWxldGUnPlwiKS50ZXh0KFwiRGVsZXRlXCIpO1xuXG4gICAgICAgIGFza0xpc3QuYXBwZW5kKHRyKTtcbiAgICAgICAgdHIuYXBwZW5kKGN1cnJlbmN5VGQpO1xuICAgICAgICB0ci5hcHBlbmQoYW1vdW50VGQpO1xuICAgICAgICB0ci5hcHBlbmQocGxuVGQpO1xuICAgICAgICB0ci5hcHBlbmQoYnRuRGVsZXRlKTtcbiAgICAgICAgcmVzdWx0QmlkID0gMDtcbiAgICAgICAgYW1vdW50SW5wdXQgPSAkKFwiaW5wdXRbbmFtZT1hbW91bnRdXCIpLnZhbChcIlwiKTtcblxuICAgICAgICB0b3RhbEFzayA9IHRhYlJlc3VsdEFzay5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xuICAgICAgICAgIHJldHVybiAoTnVtYmVyKHByZXYpICsgTnVtYmVyKGN1cnIpKS50b0ZpeGVkKDIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRE9EQcSGIFVKRU1OxIQgV0FSVE/FmsSGIERMQSBLVVBOQSBXQUxVVFlcblxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0LmZpbmQoXCJzdHJvbmdcIikudGV4dChcIlBsZWFzZSBlbnRlciBZb3VyIGFtb3VudCBvciBjaG9vc2UgYmlkL2Fza1wiKTtcbiAgICAgIGFsZXJ0LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuICAgIH1cbiAgfSk7XG5cbi8vIEJ1dHRvbiBkZWxldGUgYmlkIHRyIGFuZCB1cGRhdGUgc3VtXG4gICQoXCJ0YWJsZSNiaWRUYWJsZVwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZVwiLCBmdW5jdGlvbigpe1xuICAgIHRhYlJlc3VsdEJpZC5zcGxpY2UodGFiUmVzdWx0QmlkLmluZGV4T2YoJCh0aGlzKS5wcmV2KCkudGV4dCgpKSwgMSk7XG5cbiAgICBpZiAodGFiUmVzdWx0QmlkLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvdGFsQmlkID0gdGFiUmVzdWx0QmlkLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKSB7XG4gICAgICAgIHJldHVybiAoTnVtYmVyKHByZXYpICsgTnVtYmVyKGN1cnIpKS50b0ZpeGVkKDIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsQmlkID0gMDtcbiAgICAgIGJpZFRhYmxlLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgfVxuICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gIH0pO1xuXG4vLyBCdXR0b24gZGVsZXRlIGFzayB0ciBhbmQgdXBkYXRlIHN1bVxuICAkKFwidGFibGUjYXNrVGFibGVcIikub24oXCJjbGlja1wiLCBcIi5kZWxldGVcIiwgZnVuY3Rpb24oKXtcbiAgICB0YWJSZXN1bHRBc2suc3BsaWNlKHRhYlJlc3VsdEFzay5pbmRleE9mKCQodGhpcykucHJldigpLnRleHQoKSksIDEpO1xuXG4gICAgaWYgKHRhYlJlc3VsdEFzay5sZW5ndGggPiAwKSB7XG4gICAgICB0b3RhbEFzayA9IHRhYlJlc3VsdEFzay5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xuICAgICAgICByZXR1cm4gKE51bWJlcihwcmV2KSArIE51bWJlcihjdXJyKSkudG9GaXhlZCgyKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0b3RhbEFzayA9IDA7XG4gICAgYXNrVGFibGUuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgfVxuICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gIH0pO1xuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);