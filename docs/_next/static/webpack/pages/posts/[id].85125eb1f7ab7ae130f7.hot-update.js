webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./pages/posts/style.less\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/date */ \"./components/date/index.js\");\n/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout */ \"./components/layout/index.js\");\n\n\nvar _jsxFileName = \"/Users/suhanwijaya/Desktop/digital-garden/pages/posts/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var postData = _ref.postData;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var metaTitle = \"\".concat(postData === null || postData === void 0 ? void 0 : postData.title, \" by Suhan Wijaya\");\n  var metaDescription = postData === null || postData === void 0 ? void 0 : postData.description;\n  var metaImage = postData === null || postData === void 0 ? void 0 : postData.image;\n  var metaUrl = \"https://www.suhanwijaya.com\".concat(router === null || router === void 0 ? void 0 : router.asPath);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    topMenu: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"title\",\n        content: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: metaDescription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: metaUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: metaDescription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: metaImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: metaDescription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image\",\n        content: metaImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, _this), (postData === null || postData === void 0 ? void 0 : postData.canonical_url) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"canonical\",\n        href: postData.canonical_url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 33\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: postData === null || postData === void 0 ? void 0 : postData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.description,\n        children: postData === null || postData === void 0 ? void 0 : postData.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_date__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          dateString: postData.date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SocialIcons, {\n          url: metaUrl,\n          title: metaTitle,\n          description: metaDescription\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n        dangerouslySetInnerHTML: {\n          __html: postData.contentHtml\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SocialIcons, {\n          url: metaUrl,\n          title: metaTitle,\n          description: metaDescription\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Post;\n\nvar SocialIcons = function SocialIcons(_ref2) {\n  var url = _ref2.url,\n      title = _ref2.title,\n      description = _ref2.description;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.socialIcons,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"https://www.linkedin.com/sharing/share-offsite/?url=\".concat(url),\n      target: '_blank',\n      \"aria-label\": 'Share this article on LinkedIn',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: '/images/linkedin-share.png'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 4\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"https://twitter.com/intent/tweet?text=\".concat(title, \"%20@suhanw%20\").concat(url),\n      target: '_blank',\n      \"aria-label\": 'Share this article on Twitter',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: '/images/twitter-share.png'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 4\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 2\n  }, _this);\n};\n\n_c2 = SocialIcons;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Post\");\n$RefreshReg$(_c2, \"SocialIcons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLmpzP2M4NmYiXSwibmFtZXMiOlsiUG9zdCIsInBvc3REYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibWV0YVRpdGxlIiwidGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIm1ldGFJbWFnZSIsImltYWdlIiwibWV0YVVybCIsImFzUGF0aCIsImNhbm9uaWNhbF91cmwiLCJzdHlsZSIsImNvbnRlbnRXcmFwcGVyIiwiZGF0ZSIsImNvbnRlbnQiLCJfX2h0bWwiLCJjb250ZW50SHRtbCIsImZvb3RlciIsIlNvY2lhbEljb25zIiwidXJsIiwic29jaWFsSWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBbUJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxTQUFTLGFBQU1ILFFBQU4sYUFBTUEsUUFBTix1QkFBTUEsUUFBUSxDQUFFSSxLQUFoQixxQkFBZjtBQUNBLE1BQU1DLGVBQWUsR0FBR0wsUUFBSCxhQUFHQSxRQUFILHVCQUFHQSxRQUFRLENBQUVNLFdBQWxDO0FBQ0EsTUFBTUMsU0FBUyxHQUFHUCxRQUFILGFBQUdBLFFBQUgsdUJBQUdBLFFBQVEsQ0FBRVEsS0FBNUI7QUFDQSxNQUFNQyxPQUFPLHdDQUFpQ1IsTUFBakMsYUFBaUNBLE1BQWpDLHVCQUFpQ0EsTUFBTSxDQUFFUyxNQUF6QyxDQUFiO0FBRUEsc0JBQ0MscUVBQUMseURBQUQ7QUFBUSxXQUFPLE1BQWY7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQUEsa0JBQVFQO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFz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QUEyQixlQUFLLEVBQUVOLFNBQWxDO0FBQTZDLHFCQUFXLEVBQUVFO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBdUNBLENBL0NEOztHQUFNTixJO1VBQ1VHLHFEOzs7S0FEVkgsSTs7QUFpRE4sSUFBTW9CLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsTUFBUWhCLEtBQVIsU0FBUUEsS0FBUjtBQUFBLE1BQWVFLFdBQWYsU0FBZUEsV0FBZjtBQUFBLHNCQUNuQjtBQUFNLGFBQVMsRUFBRU0sNkNBQUssQ0FBQ1MsV0FBdkI7QUFBQSw0QkFDQztBQUFHLFVBQUksZ0VBQXlERCxHQUF6RCxDQUFQO0FBQXVFLFlBQU0sRUFBRSxRQUEvRTtBQUF5RixvQkFBWSxnQ0FBckc7QUFBQSw2QkFDQztBQUFLLFdBQUcsRUFBRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFHLFVBQUksa0RBQTJDaEIsS0FBM0MsMEJBQWdFZ0IsR0FBaEUsQ0FBUDtBQUE4RSxZQUFNLEVBQUUsUUFBdEY7QUFBZ0csb0JBQVksK0JBQTVHO0FBQUEsNkJBQ0M7QUFBSyxXQUFHLEVBQUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURtQjtBQUFBLENBQXBCOztNQUFNRCxXOztBQVdTcEIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSAnZGF0YSc7XG5pbXBvcnQgRGF0ZSBmcm9tICdjb21wb25lbnRzL2RhdGUnO1xuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0SWRzKCk7XG5cdHJldHVybiB7XG5cdFx0cGF0aHMsXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcblx0Y29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRwb3N0RGF0YSxcblx0XHR9LFxuXHR9O1xufTtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3REYXRhIH0pID0+IHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgbWV0YVRpdGxlID0gYCR7cG9zdERhdGE/LnRpdGxlfSBieSBTdWhhbiBXaWpheWFgO1xuXHRjb25zdCBtZXRhRGVzY3JpcHRpb24gPSBwb3N0RGF0YT8uZGVzY3JpcHRpb247XG5cdGNvbnN0IG1ldGFJbWFnZSA9IHBvc3REYXRhPy5pbWFnZTtcblx0Y29uc3QgbWV0YVVybCA9IGBodHRwczovL3d3dy5zdWhhbndpamF5YS5jb20ke3JvdXRlcj8uYXNQYXRofWA7XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQgdG9wTWVudT5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+e21ldGFUaXRsZX08L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD17bWV0YVRpdGxlfSAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhRGVzY3JpcHRpb259IC8+XG5cblx0XHRcdFx0ey8qIE9wZW4gR3JhcGggLyBGYWNlYm9vayAqL31cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuXHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e21ldGFVcmx9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhVGl0bGV9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhRGVzY3JpcHRpb259IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXttZXRhSW1hZ2V9IC8+XG5cblx0XHRcdFx0ey8qIFR3aXR0ZXIgKi99XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17bWV0YVRpdGxlfSAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGFEZXNjcmlwdGlvbn0gLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXttZXRhSW1hZ2V9IC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG5cdFx0XHRcdFxuXHRcdFx0XHR7cG9zdERhdGE/LmNhbm9uaWNhbF91cmwgJiYgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17cG9zdERhdGEuY2Fub25pY2FsX3VybH0gLz59XG5cdFx0XHRcdFxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50V3JhcHBlcn0+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9e3N0eWxlLnRpdGxlfT57cG9zdERhdGE/LnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kZXNjcmlwdGlvbn0+e3Bvc3REYXRhPy5kZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLmRhdGV9PlxuXHRcdFx0XHRcdDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3REYXRhLmRhdGV9IC8+XG5cdFx0XHRcdFx0PFNvY2lhbEljb25zIHVybD17bWV0YVVybH0gdGl0bGU9e21ldGFUaXRsZX0gZGVzY3JpcHRpb249e21ldGFEZXNjcmlwdGlvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mb290ZXJ9PlxuXHRcdFx0XHRcdDxTb2NpYWxJY29ucyB1cmw9e21ldGFVcmx9IHRpdGxlPXttZXRhVGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hcnRpY2xlPlxuXHRcdDwvTGF5b3V0PlxuXHQpO1xufTtcblxuY29uc3QgU29jaWFsSWNvbnMgPSAoeyB1cmwsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG5cdDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuc29jaWFsSWNvbnN9PlxuXHRcdDxhIGhyZWY9e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmluZy9zaGFyZS1vZmZzaXRlLz91cmw9JHt1cmx9YH0gdGFyZ2V0PXsnX2JsYW5rJ30gYXJpYS1sYWJlbD17J1NoYXJlIHRoaXMgYXJ0aWNsZSBvbiBMaW5rZWRJbid9PlxuXHRcdFx0PGltZyBzcmM9eycvaW1hZ2VzL2xpbmtlZGluLXNoYXJlLnBuZyd9IC8+XG5cdFx0PC9hPlxuXHRcdDxhIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7dGl0bGV9JTIwQHN1aGFudyUyMCR7dXJsfWB9IHRhcmdldD17J19ibGFuayd9IGFyaWEtbGFiZWw9eydTaGFyZSB0aGlzIGFydGljbGUgb24gVHdpdHRlcid9PlxuXHRcdFx0PGltZyBzcmM9eycvaW1hZ2VzL3R3aXR0ZXItc2hhcmUucG5nJ30gLz5cblx0XHQ8L2E+XG5cdDwvc3Bhbj5cbik7IFxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

})