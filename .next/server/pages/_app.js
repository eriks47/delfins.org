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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/DolphinContext.tsx":
/*!************************************!*\
  !*** ./context/DolphinContext.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DolphinContext\": () => (/* binding */ DolphinContext),\n/* harmony export */   \"DolphinProvider\": () => (/* binding */ DolphinProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/supabaseClient */ \"./services/supabaseClient.ts\");\n\n\n\nconst DolphinContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction DolphinProvider({ children  }) {\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _services_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.getUser().then((res)=>{\n            setCurrentUser(res.data.user);\n        });\n        _services_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange((_event, authSession)=>{\n            if (authSession) setCurrentUser(authSession.user);\n            else setCurrentUser(null);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DolphinContext.Provider, {\n        value: {\n            currentUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/erik/prog/web/delfins/context/DolphinContext.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0RvbHBoaW5Db250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFDTDtBQUUvQyxNQUFNSSwrQkFBaUJKLG9EQUFhQSxDQUFDLElBQUksRUFBRTtBQUUzQyxTQUFTSyxnQkFBZ0IsRUFBRUMsU0FBUSxFQUFFLEVBQUU7SUFDNUMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFFbkRDLGdEQUFTQSxDQUFDLElBQU07UUFDZEMsMkVBQXFCLEdBQUdRLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ3BDSixlQUFlSSxJQUFJQyxJQUFJLENBQUNDLElBQUk7UUFDOUI7UUFDQVgscUZBQStCLENBQUMsQ0FBQ2EsUUFBUUMsY0FBZ0I7WUFDdkQsSUFBSUEsYUFBYVQsZUFBZVMsWUFBWUgsSUFBSTtpQkFDM0NOLGVBQWUsSUFBSTtRQUMxQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSixlQUFlYyxRQUFRO1FBQUNDLE9BQU87WUFBRVo7UUFBWTtrQkFDM0NEOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmF2ZXJhcy8uL2NvbnRleHQvRG9scGhpbkNvbnRleHQudHN4Pzc5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3VwYWJhc2VDbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IERvbHBoaW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIERvbHBoaW5Qcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Q3VycmVudFVzZXIocmVzLmRhdGEudXNlcik7XG4gICAgfSk7XG4gICAgc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZSgoX2V2ZW50LCBhdXRoU2Vzc2lvbikgPT4ge1xuICAgICAgaWYgKGF1dGhTZXNzaW9uKSBzZXRDdXJyZW50VXNlcihhdXRoU2Vzc2lvbi51c2VyKTtcbiAgICAgIGVsc2Ugc2V0Q3VycmVudFVzZXIobnVsbCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxEb2xwaGluQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50VXNlciB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0RvbHBoaW5Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1cGFiYXNlIiwiRG9scGhpbkNvbnRleHQiLCJEb2xwaGluUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJhdXRoIiwiZ2V0VXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlciIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50IiwiYXV0aFNlc3Npb24iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/DolphinContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_DolphinContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/DolphinContext */ \"./context/DolphinContext.tsx\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_DolphinContext__WEBPACK_IMPORTED_MODULE_2__.DolphinProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/erik/prog/web/delfins/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/erik/prog/web/delfins/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUM2QjtBQUU1RCxTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILG9FQUFlQTtrQkFDZCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUNBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmF2ZXJhcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBEb2xwaGluUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9Eb2xwaGluQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPERvbHBoaW5Qcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0RvbHBoaW5Qcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJEb2xwaGluUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/supabaseClient.ts":
/*!************************************!*\
  !*** ./services/supabaseClient.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://hhwbmzxdsuitcruiqapj.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhod2Jtenhkc3VpdGNydWlxYXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjczMTgxNjEsImV4cCI6MTk4Mjg5NDE2MX0.OhzMarawiRAnMlY2B3nWsC0xxs7-HIwyfyqpEvqTzIo\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zdXBhYmFzZUNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRTFELE1BQU1LLFdBQVdQLG1FQUFZQSxDQUFDQyxhQUFjSSxpQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YXZlcmFzLy4vc2VydmljZXMvc3VwYWJhc2VDbGllbnQudHM/OTczYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCEsIHN1cGFiYXNlQW5vbktleSEpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/supabaseClient.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();