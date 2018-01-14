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
eval("\n\n$(function () {\n\n  var nbpApi = 'http://api.nbp.pl/api/exchangerates/tables/c/?format=json';\n  var tableInsert = $('table#currency').find('tbody');\n\n  function insertCurrency(currency) {\n    for (var i = 0; i < currency.length; i++) {\n      var tr = $('<tr><tr>');\n      var code = $('<td>').text(currency[i].code);\n      var bid = $('<td>').text(currency[i].bid);\n      var ask = $('<td>').text(currency[i].ask);\n      tr.append(code);\n      tr.append(bid);\n      tr.append(ask);\n      tableInsert.append(tr);\n    };\n  }\n\n  var loadCurrency = function loadCurrency() {\n    $.ajax({\n      url: nbpApi\n    }).done(function (response) {\n      console.log(response[0]);\n      insertCurrency(response[0].rates);\n    }).fail(function (error) {\n      console.log(error);\n    });\n  };\n  loadCurrency();\n});\n\n// var movieLists = $('.repertuar');\n// //variables for url\n// var movieUrl = 'https://swapi.co/api/films/';\n//\n//\n// /* Insert Movies to DOM  */\n// function insertContent(movies) {\n//   for(var i = 0 ; i < movies.length; i++) {\n//       var li = $('<li>', {class: \"movie\"});\n//       var h3 = $('<h3>').text(movies[i].title);\n//       li.append(h3);\n//       movieLists.append(li);\n//   };\n// }\n//\n// /* Load movies and insert them into the DOM\n// */\n// function loadMovies() {\n//       $.ajax({\n//           url: movieUrl\n//       }).done(function(response){\n//       insertContent(response.results);\n//      }).fail(function(error) {\n//          console.log(error);\n//      })\n// }\n//\n// loadMovies();\n//\n// });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanN4P2M2YjEiXSwibmFtZXMiOlsiJCIsIm5icEFwaSIsInRhYmxlSW5zZXJ0IiwiZmluZCIsImluc2VydEN1cnJlbmN5IiwiY3VycmVuY3kiLCJpIiwibGVuZ3RoIiwidHIiLCJjb2RlIiwidGV4dCIsImJpZCIsImFzayIsImFwcGVuZCIsImxvYWRDdXJyZW5jeSIsImFqYXgiLCJ1cmwiLCJkb25lIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicmF0ZXMiLCJmYWlsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEVBQUUsWUFBWTs7QUFFWixNQUFNQyxTQUFVLDJEQUFoQjtBQUNBLE1BQUlDLGNBQWNGLEVBQUUsZ0JBQUYsRUFBb0JHLElBQXBCLENBQXlCLE9BQXpCLENBQWxCOztBQUVBLFdBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDLFNBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWdCQSxJQUFJRCxTQUFTRSxNQUE3QixFQUFxQ0QsR0FBckMsRUFBMEM7QUFDdEMsVUFBSUUsS0FBS1IsRUFBRSxVQUFGLENBQVQ7QUFDQSxVQUFJUyxPQUFPVCxFQUFFLE1BQUYsRUFBVVUsSUFBVixDQUFlTCxTQUFTQyxDQUFULEVBQVlHLElBQTNCLENBQVg7QUFDQSxVQUFJRSxNQUFNWCxFQUFFLE1BQUYsRUFBVVUsSUFBVixDQUFlTCxTQUFTQyxDQUFULEVBQVlLLEdBQTNCLENBQVY7QUFDQSxVQUFJQyxNQUFNWixFQUFFLE1BQUYsRUFBVVUsSUFBVixDQUFlTCxTQUFTQyxDQUFULEVBQVlNLEdBQTNCLENBQVY7QUFDQUosU0FBR0ssTUFBSCxDQUFVSixJQUFWO0FBQ0FELFNBQUdLLE1BQUgsQ0FBVUYsR0FBVjtBQUNBSCxTQUFHSyxNQUFILENBQVVELEdBQVY7QUFDQVYsa0JBQVlXLE1BQVosQ0FBbUJMLEVBQW5CO0FBQ0g7QUFDRjs7QUFRRCxNQUFJTSxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN2QmQsTUFBRWUsSUFBRixDQUFPO0FBQ0xDLFdBQUtmO0FBREEsS0FBUCxFQUVHZ0IsSUFGSCxDQUVRLFVBQVNDLFFBQVQsRUFBa0I7QUFDeEJDLGNBQVFDLEdBQVIsQ0FBWUYsU0FBUyxDQUFULENBQVo7QUFDQWQscUJBQWVjLFNBQVMsQ0FBVCxFQUFZRyxLQUEzQjtBQUNELEtBTEQsRUFLR0MsSUFMSCxDQUtRLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckJKLGNBQVFDLEdBQVIsQ0FBWUcsS0FBWjtBQUNGLEtBUEQ7QUFRRCxHQVREO0FBVUFUO0FBWUQsQ0E5Q0Q7O0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgbmJwQXBpICA9ICdodHRwOi8vYXBpLm5icC5wbC9hcGkvZXhjaGFuZ2VyYXRlcy90YWJsZXMvYy8/Zm9ybWF0PWpzb24nO1xuICBsZXQgdGFibGVJbnNlcnQgPSAkKCd0YWJsZSNjdXJyZW5jeScpLmZpbmQoJ3Rib2R5Jyk7XG5cbiAgZnVuY3Rpb24gaW5zZXJ0Q3VycmVuY3koY3VycmVuY3kpIHtcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGN1cnJlbmN5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ciA9ICQoJzx0cj48dHI+Jyk7XG4gICAgICAgIGxldCBjb2RlID0gJCgnPHRkPicpLnRleHQoY3VycmVuY3lbaV0uY29kZSk7XG4gICAgICAgIGxldCBiaWQgPSAkKCc8dGQ+JykudGV4dChjdXJyZW5jeVtpXS5iaWQpO1xuICAgICAgICBsZXQgYXNrID0gJCgnPHRkPicpLnRleHQoY3VycmVuY3lbaV0uYXNrKTtcbiAgICAgICAgdHIuYXBwZW5kKGNvZGUpO1xuICAgICAgICB0ci5hcHBlbmQoYmlkKTtcbiAgICAgICAgdHIuYXBwZW5kKGFzayk7XG4gICAgICAgIHRhYmxlSW5zZXJ0LmFwcGVuZCh0cilcbiAgICB9O1xuICB9XG5cblxuXG5cblxuXG5cbiAgbGV0IGxvYWRDdXJyZW5jeSA9ICgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBuYnBBcGlcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlWzBdKTtcbiAgICAgIGluc2VydEN1cnJlbmN5KHJlc3BvbnNlWzBdLnJhdGVzKVxuICAgIH0pLmZhaWwoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbiAgfTtcbiAgbG9hZEN1cnJlbmN5KCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxufSk7XG5cbi8vIHZhciBtb3ZpZUxpc3RzID0gJCgnLnJlcGVydHVhcicpO1xuLy8gLy92YXJpYWJsZXMgZm9yIHVybFxuLy8gdmFyIG1vdmllVXJsID0gJ2h0dHBzOi8vc3dhcGkuY28vYXBpL2ZpbG1zLyc7XG4vL1xuLy9cbi8vIC8qIEluc2VydCBNb3ZpZXMgdG8gRE9NICAqL1xuLy8gZnVuY3Rpb24gaW5zZXJ0Q29udGVudChtb3ZpZXMpIHtcbi8vICAgZm9yKHZhciBpID0gMCA7IGkgPCBtb3ZpZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHZhciBsaSA9ICQoJzxsaT4nLCB7Y2xhc3M6IFwibW92aWVcIn0pO1xuLy8gICAgICAgdmFyIGgzID0gJCgnPGgzPicpLnRleHQobW92aWVzW2ldLnRpdGxlKTtcbi8vICAgICAgIGxpLmFwcGVuZChoMyk7XG4vLyAgICAgICBtb3ZpZUxpc3RzLmFwcGVuZChsaSk7XG4vLyAgIH07XG4vLyB9XG4vL1xuLy8gLyogTG9hZCBtb3ZpZXMgYW5kIGluc2VydCB0aGVtIGludG8gdGhlIERPTVxuLy8gKi9cbi8vIGZ1bmN0aW9uIGxvYWRNb3ZpZXMoKSB7XG4vLyAgICAgICAkLmFqYXgoe1xuLy8gICAgICAgICAgIHVybDogbW92aWVVcmxcbi8vICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2Upe1xuLy8gICAgICAgaW5zZXJ0Q29udGVudChyZXNwb25zZS5yZXN1bHRzKTtcbi8vICAgICAgfSkuZmFpbChmdW5jdGlvbihlcnJvcikge1xuLy8gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgICB9KVxuLy8gfVxuLy9cbi8vIGxvYWRNb3ZpZXMoKTtcbi8vXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qc3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);