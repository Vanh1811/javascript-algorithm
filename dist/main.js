/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mergeSort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSort.js */ \"./src/mergeSort.js\");\n/* harmony import */ var _recursion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recursion.js */ \"./src/recursion.js\");\n\n\n\n\nlet answer = (0,_recursion_js__WEBPACK_IMPORTED_MODULE_1__.fibsRec) (10);\nconsole.log(answer)\n\n\nlet ans = (0,_recursion_js__WEBPACK_IMPORTED_MODULE_1__.fibs)(10);\nconsole.log(ans);\n\nconst arr1 = [3, 2, 1, 13, 8, 5, 0, 1];\nconst arr2 = [105, 79, 100, 110];\n\nconst sortedArr1 = (0,_mergeSort_js__WEBPACK_IMPORTED_MODULE_0__.mergeSort)(arr1);\nconst sortedArr2 = (0,_mergeSort_js__WEBPACK_IMPORTED_MODULE_0__.mergeSort)(arr2);\n\nconsole.log(\"Sorted array 1:\", sortedArr1);\nconsole.log(\"Sorted array 2:\", sortedArr2);\n\n//# sourceURL=webpack://recursion/./src/index.js?");

/***/ }),

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mergeSort: () => (/* binding */ mergeSort)\n/* harmony export */ });\nfunction mergeSort (arr){\n    if(arr.length <= 1){\n        return arr;\n    }\n\n    const middle = Math.floor(arr.length/2);\n    const left = arr.slice(0, middle);\n    const right = arr.slice(middle);\n\n    const leftSorted = mergeSort(left);\n    const rightSorted = mergeSort(right);\n\n    return merge(leftSorted, rightSorted);\n}\n\nfunction merge(left, right){\n    let result = [];\n    let leftIndex = 0;\n    let rightIndex = 0;\n\n    while(leftIndex < left.length && rightIndex < right.length){\n        if(left[leftIndex] < right[rightIndex]){\n            result.push(left[leftIndex]);\n            leftIndex++;\n        }else{\n            result.push(right[rightIndex]);\n            rightIndex++;\n        }\n    }\n\n    return result.concat(left.slice(leftIndex), right.slice(rightIndex))\n}\n\n\n//# sourceURL=webpack://recursion/./src/mergeSort.js?");

/***/ }),

/***/ "./src/recursion.js":
/*!**************************!*\
  !*** ./src/recursion.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fibs: () => (/* binding */ fibs),\n/* harmony export */   fibsRec: () => (/* binding */ fibsRec)\n/* harmony export */ });\nfunction fibs (n){\n    let arr =[];\n    let first = 0;\n    let second = 1;\n    for(let i = 0; i < n; i++){\n        let result = first + second;\n        arr.push(first);\n        first = second;\n        second = result;\n    }\n    return arr;\n}\n\nfunction fibsRec (n){\n    if(n < 1){\n        return [];\n    }\n    if(n == 1){\n        return [0]\n    }\n    else if(n == 2){\n        return [0, 1]\n    }else{\n        let arr = fibsRec(n - 1);\n        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);\n        return arr;\n    }\n}\n\n//# sourceURL=webpack://recursion/./src/recursion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;