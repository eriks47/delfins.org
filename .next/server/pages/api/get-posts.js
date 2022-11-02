"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-posts";
exports.ids = ["pages/api/get-posts"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "(api)/./pages/api/get-posts.ts":
/*!********************************!*\
  !*** ./pages/api/get-posts.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/supabaseClient */ \"(api)/./services/supabaseClient.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { data , error , status  } = await _services_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"feed\").select(\"*\");\n    res.status(200).json({\n        data: data\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXBvc3RzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlEO0FBRXpELGlFQUFlLE9BQU9DLEtBQVVDLE1BQWE7SUFDM0MsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFLEdBQUcsTUFBTUwsbUVBQWEsQ0FBQyxRQUFRTyxNQUFNLENBQUM7SUFDbkVMLElBQUlHLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7UUFBRUwsTUFBTUE7SUFBSztBQUNwQyxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmF2ZXJhcy8uL3BhZ2VzL2FwaS9nZXQtcG9zdHMudHM/ZTgxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdXBhYmFzZUNsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIHN0YXR1cyB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImZlZWRcIikuc2VsZWN0KFwiKlwiKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBkYXRhIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsInJlcSIsInJlcyIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsImZyb20iLCJzZWxlY3QiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-posts.ts\n");

/***/ }),

/***/ "(api)/./services/supabaseClient.ts":
/*!************************************!*\
  !*** ./services/supabaseClient.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://hhwbmzxdsuitcruiqapj.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhod2Jtenhkc3VpdGNydWlxYXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjczMTgxNjEsImV4cCI6MTk4Mjg5NDE2MX0.OhzMarawiRAnMlY2B3nWsC0xxs7-HIwyfyqpEvqTzIo\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9zdXBhYmFzZUNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRTFELE1BQU1LLFdBQVdQLG1FQUFZQSxDQUFDQyxhQUFjSSxpQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YXZlcmFzLy4vc2VydmljZXMvc3VwYWJhc2VDbGllbnQudHM/OTczYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCEsIHN1cGFiYXNlQW5vbktleSEpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/supabaseClient.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-posts.ts"));
module.exports = __webpack_exports__;

})();