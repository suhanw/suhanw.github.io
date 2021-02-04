webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ \"./components/layout/index.js\");\n/* harmony import */ var components_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/intro */ \"./components/intro/index.js\");\n/* harmony import */ var components_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/about */ \"./components/about/index.js\");\n/* harmony import */ var components_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/blog */ \"./components/blog/index.js\");\n/* harmony import */ var components_projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/projects */ \"./components/projects/index.js\");\n/* harmony import */ var components_technologies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/technologies */ \"./components/technologies/index.js\");\n/* harmony import */ var components_contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/contact */ \"./components/contact/index.js\");\n/* harmony import */ var components_credits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/credits */ \"./components/credits/index.js\");\n\n\nvar _jsxFileName = \"/Users/suhanwijaya/Desktop/digital-garden/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var pinnedPosts = _ref.pinnedPosts;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var handleHashChange = function handleHashChange(url, options) {\n      if (typeof document === 'undefined' || false) return;\n      var sectionId = \"\".concat(url.substring(2), \"-section\");\n      var section = document.getElementById(sectionId);\n\n      if (section) {\n        var scrollDistance = section.offsetTop;\n        window.scrollTo({\n          top: scrollDistance,\n          behavior: 'smooth'\n        });\n      }\n    };\n\n    handleHashChange(router === null || router === void 0 ? void 0 : router.asPath);\n\n    if (true) {\n      console.log({\n        router: router\n      }); // window.history.replaceState(null, null, router?.pathname)\n\n      router.replace('/');\n    }\n\n    router.events.on('hashChangeComplete', handleHashChange);\n    return function () {\n      router.events.off('hashChangeComplete', handleHashChange);\n    };\n  }, []);\n  var metaTitle = 'Suhan Wijaya';\n  var metaDescription = 'Right-brained techie who builds apps with JavaScript, React, Redux, Node.js, Hapi, Express, NoSQL, SQL, REST, GraphQL.';\n  var metaImage = 'https://www.suhanwijaya.com/images/digital-garden-social.png';\n  var metaUrl = 'https://www.suhanwijaya.com/index.html';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"title\",\n        content: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: metaDescription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: metaUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: metaDescription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: metaImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: metaTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: metaDescription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image\",\n        content: metaImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_about__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_blog__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      pinnedPosts: pinnedPosts\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_projects__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_contact__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_technologies__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_credits__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicGlubmVkUG9zdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVIYXNoQ2hhbmdlIiwidXJsIiwib3B0aW9ucyIsImRvY3VtZW50Iiwic2VjdGlvbklkIiwic3Vic3RyaW5nIiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsRGlzdGFuY2UiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYXNQYXRoIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJldmVudHMiLCJvbiIsIm9mZiIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsIm1ldGFJbWFnZSIsIm1ldGFVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDMUMsVUFBSSxPQUFPQyxRQUFQLEtBQW9CLFdBQXBCLFNBQUosRUFBc0U7QUFFdEUsVUFBTUMsU0FBUyxhQUFNSCxHQUFHLENBQUNJLFNBQUosQ0FBYyxDQUFkLENBQU4sYUFBZjtBQUNBLFVBQU1DLE9BQU8sR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCSCxTQUF4QixDQUFoQjs7QUFFQSxVQUFJRSxPQUFKLEVBQWE7QUFDWixZQUFNRSxjQUFjLEdBQUdGLE9BQU8sQ0FB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QyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJELGVBMEJDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkQsZUEyQkMscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQStCQSxDQW5FRDs7R0FBTUQsSTtVQUNVRyxxRDs7O0tBRFZILEk7O0FBcUVTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEludHJvIGZyb20gJ2NvbXBvbmVudHMvaW50cm8nO1xuaW1wb3J0IEFib3V0IGZyb20gJ2NvbXBvbmVudHMvYWJvdXQnO1xuaW1wb3J0IEJsb2cgZnJvbSAnY29tcG9uZW50cy9ibG9nJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICdjb21wb25lbnRzL3Byb2plY3RzJztcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnY29tcG9uZW50cy90ZWNobm9sb2dpZXMnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnY29tcG9uZW50cy9jb250YWN0JztcbmltcG9ydCBDcmVkaXRzIGZyb20gJ2NvbXBvbmVudHMvY3JlZGl0cyc7XG5pbXBvcnQgeyBnZXRQaW5uZWRQb3N0cyB9IGZyb20gJ2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBpbm5lZFBvc3RzID0gZ2V0UGlubmVkUG9zdHMoKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cGlubmVkUG9zdHMsXG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IEhvbWUgPSAoeyBwaW5uZWRQb3N0cyB9KSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlSGFzaENoYW5nZSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHNlY3Rpb25JZCA9IGAke3VybC5zdWJzdHJpbmcoMil9LXNlY3Rpb25gO1xuXHRcdFx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG5cdFx0XHRcblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdGNvbnN0IHNjcm9sbERpc3RhbmNlID0gc2VjdGlvbi5vZmZzZXRUb3A7XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsRGlzdGFuY2UsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aGFuZGxlSGFzaENoYW5nZShyb3V0ZXI/LmFzUGF0aCk7XG5cblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUubG9nKHtyb3V0ZXJ9KVxuXHRcdFx0Ly8gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHJvdXRlcj8ucGF0aG5hbWUpXG5cdFx0XHRyb3V0ZXIucmVwbGFjZSgnLycpO1xuXHRcdH1cblxuXHRcdHJvdXRlci5ldmVudHMub24oJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJvdXRlci5ldmVudHMub2ZmKCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVIYXNoQ2hhbmdlKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgbWV0YVRpdGxlID0gJ1N1aGFuIFdpamF5YSc7XG5cdGNvbnN0IG1ldGFEZXNjcmlwdGlvbiA9ICdSaWdodC1icmFpbmVkIHRlY2hpZSB3aG8gYnVpbGRzIGFwcHMgd2l0aCBKYXZhU2NyaXB0LCBSZWFjdCwgUmVkdXgsIE5vZGUuanMsIEhhcGksIEV4cHJlc3MsIE5vU1FMLCBTUUwsIFJFU1QsIEdyYXBoUUwuJztcblx0Y29uc3QgbWV0YUltYWdlID0gJ2h0dHBzOi8vd3d3LnN1aGFud2lqYXlhLmNvbS9pbWFnZXMvZGlnaXRhbC1nYXJkZW4tc29jaWFsLnBuZyc7XG5cdGNvbnN0IG1ldGFVcmwgPSAnaHR0cHM6Ly93d3cuc3VoYW53aWpheWEuY29tL2luZGV4Lmh0bWwnO1xuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHR7LyogUHJpbWFyeSBNZXRhIFRhZ3MgKi99XG5cdFx0XHRcdDx0aXRsZT57bWV0YVRpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD17bWV0YVRpdGxlfSAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhRGVzY3JpcHRpb259IC8+XG5cblx0XHRcdFx0ey8qIE9wZW4gR3JhcGggLyBGYWNlYm9vayAqL31cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuXHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e21ldGFVcmx9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhVGl0bGV9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhRGVzY3JpcHRpb259IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXttZXRhSW1hZ2V9IC8+XG5cblx0XHRcdFx0ey8qIFR3aXR0ZXIgKi99XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17bWV0YVRpdGxlfSAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGFEZXNjcmlwdGlvbn0gLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXttZXRhSW1hZ2V9IC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8SW50cm8gLz5cblx0XHRcdDxBYm91dCAvPlxuXHRcdFx0PEJsb2cgcGlubmVkUG9zdHM9e3Bpbm5lZFBvc3RzfSAvPlxuXHRcdFx0PFByb2plY3RzIC8+XG5cdFx0XHQ8Q29udGFjdCAvPlxuXHRcdFx0PFRlY2hub2xvZ2llcyAvPlxuXHRcdFx0PENyZWRpdHMgLz5cblx0XHQ8L0xheW91dD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})