"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/supabaseClient */ \"./services/supabaseClient.ts\");\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"./node_modules/@supabase/auth-ui-react/dist/esm/src/index.js\");\n\n\n\nfunction Login() {\n    const signInWithGoogle = async ()=>{\n        await _services_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.signInWithOAuth({\n            provider: \"google\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signInWithGoogle,\n                children: \"Sign in with google\"\n            }, void 0, false, {\n                fileName: \"/home/erik/prog/web/delfins/pages/login.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_2__.Auth, {\n                supabaseClient: _services_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase,\n                providers: [\n                    \"google\"\n                ]\n            }, void 0, false, {\n                fileName: \"/home/erik/prog/web/delfins/pages/login.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/erik/prog/web/delfins/pages/login.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNJO0FBRTNDLFNBQVNFLFFBQVE7SUFDOUIsTUFBTUMsbUJBQW1CLFVBQVk7UUFDbkMsTUFBTUgsbUZBQTZCLENBQUM7WUFDbENNLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsV0FBVztRQUNiOzswQkFFQSw4REFBQ0M7Z0JBQU9DLFNBQVNYOzBCQUFrQjs7Ozs7OzBCQUNuQyw4REFBQ0YseURBQUlBO2dCQUFDYyxnQkFBZ0JmLDhEQUFRQTtnQkFBRWdCLFdBQVc7b0JBQUM7aUJBQVM7Ozs7Ozs7Ozs7OztBQUczRCxDQUFDO0tBbkJ1QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3VwYWJhc2VDbGllbnRcIjtcbmltcG9ydCB7IEF1dGgsIFRoZW1lU3VwYSB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC11aS1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25JbldpdGhPQXV0aCh7XG4gICAgICBwcm92aWRlcjogXCJnb29nbGVcIixcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25JbldpdGhHb29nbGV9PlNpZ24gaW4gd2l0aCBnb29nbGU8L2J1dHRvbj5cbiAgICAgIDxBdXRoIHN1cGFiYXNlQ2xpZW50PXtzdXBhYmFzZX0gcHJvdmlkZXJzPXtbXCJnb29nbGVcIl19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJBdXRoIiwiTG9naW4iLCJzaWduSW5XaXRoR29vZ2xlIiwiYXV0aCIsInNpZ25JbldpdGhPQXV0aCIsInByb3ZpZGVyIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWluSGVpZ2h0IiwiYnV0dG9uIiwib25DbGljayIsInN1cGFiYXNlQ2xpZW50IiwicHJvdmlkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});