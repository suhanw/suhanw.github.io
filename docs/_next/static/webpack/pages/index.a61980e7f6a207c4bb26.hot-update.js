webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects/index.js":
/*!**************************************!*\
  !*** ./components/projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/projects/style.less\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/utils */ \"./styles/utils.less\");\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ \"./utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/suhanwijaya/Desktop/digital-garden/components/projects/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Projects = function Projects() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    id: 'projects-section',\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.projects, styles_utils__WEBPACK_IMPORTED_MODULE_4___default.a.homeSection),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n      children: \"projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.masonry,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/tmnt',\n          imageSrc: '/images/tmnt.png',\n          description: 'React & Redux',\n          stack: ['react.png', 'redux.png', 'html5.png', 'css3.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/auteur',\n          imageSrc: '/images/auteur.png',\n          description: 'Node.js, React, & Redux',\n          stack: ['react.png', 'redux.png', 'nodejs.png', 'express.png', 'mongoose.jpg', 'mongodb.png', 'passport.png', 'socketio.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/mapmycruise',\n          imageSrc: '/images/mapmycruise.png',\n          description: 'Rails, React, & Redux',\n          stack: ['react.png', 'redux.png', 'ruby.png', 'rails.png', 'active-record.png', 'postgresql.png', 'pusher.png' // 'socketio.png',\n          ]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 5\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 2\n  }, _this);\n};\n\n_c = Projects;\n\nvar ProjectThumbnail = function ProjectThumbnail(_ref) {\n  _s();\n\n  var href = _ref.href,\n      imageSrc = _ref.imageSrc,\n      description = _ref.description,\n      stack = _ref.stack;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showOverlay = _useState[0],\n      setShowOverlay = _useState[1];\n\n  var handleMouseEvent = function handleMouseEvent(e) {\n    if (Object(utils__WEBPACK_IMPORTED_MODULE_5__[\"isTouchDevice\"])()) {\n      return;\n    }\n\n    if (showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseleave') {\n      setShowOverlay(false);\n    } else if (!showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseenter') {\n      setShowOverlay(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.cell, showOverlay ? _style__WEBPACK_IMPORTED_MODULE_3___default.a.show : null),\n    href: href,\n    target: \"_blank\",\n    onMouseEnter: handleMouseEvent,\n    onMouseLeave: handleMouseEvent,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlayContent,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.iconWrapper,\n        children: (stack === null || stack === void 0 ? void 0 : stack.length) > 0 && stack.map(function (filename) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.techIcon,\n            src: \"/tech-icons/\".concat(filename)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 31\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: imageSrc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(ProjectThumbnail, \"WfvaWF0rDew9qZQCcSVbkDBNxPA=\");\n\n_c2 = ProjectThumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"ProjectThumbnail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC5qcz80OTAxIl0sIm5hbWVzIjpbIlByb2plY3RzIiwiY24iLCJzdHlsZSIsInByb2plY3RzIiwidXRpbFN0eWxlIiwiaG9tZVNlY3Rpb24iLCJ0aXRsZSIsIm1hc29ucnkiLCJjb2x1bW4iLCJQcm9qZWN0VGh1bWJuYWlsIiwiaHJlZiIsImltYWdlU3JjIiwiZGVzY3JpcHRpb24iLCJzdGFjayIsInVzZVN0YXRlIiwic2hvd092ZXJsYXkiLCJzZXRTaG93T3ZlcmxheSIsImhhbmRsZU1vdXNlRXZlbnQiLCJlIiwiaXNUb3VjaERldmljZSIsInR5cGUiLCJjZWxsIiwic2hvdyIsIm92ZXJsYXkiLCJvdmVybGF5Q29udGVudCIsImljb25XcmFwcGVyIiwibGVuZ3RoIiwibWFwIiwiZmlsZW5hbWUiLCJ0ZWNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNoQjtBQUFTLE1BQUUsRUFBRSxrQkFBYjtBQUFpQyxhQUFTLEVBQUVDLGlEQUFFLENBQUNDLDZDQUFLLENBQUNDLFFBQVAsRUFBaUJDLG1EQUFTLENBQUNDLFdBQTNCLENBQTlDO0FBQUEsNEJBQ0M7QUFBSSxlQUFTLEVBQUVILDZDQUFLLENBQUNJLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQztBQUFLLGVBQVMsRUFBRUosNkNBQUssQ0FBQ0ssT0FBdEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVMLDZDQUFLLENBQUNNLE1BQXRCO0FBQUEsZ0NBQ0MscUVBQUMsZ0JBQUQ7QUFDQyxjQUFJLEVBQUUsT0FEUDtBQUVDLGtCQUFRLEVBQUUsa0JBRlg7QUFHQyxxQkFBVyxFQUFFLGVBSGQ7QUFJQyxlQUFLLEVBQUUsQ0FBQyxXQUFELEVBQWMsV0FBZCxF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QkQsUUFBakI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZDtBQUFBLFNBQVY7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBY0M7QUFBSyxTQUFHLEVBQUVqQjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWtCQSxDQWpDRDs7R0FBTUYsZ0I7O01BQUFBLGdCO0FBbUNTVCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvamVjdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB1dGlsU3R5bGUgZnJvbSAnc3R5bGVzL3V0aWxzJztcbmltcG9ydCB7IGlzVG91Y2hEZXZpY2UgfSBmcm9tICd1dGlscyc7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuXHQ8c2VjdGlvbiBpZD17J3Byb2plY3RzLXNlY3Rpb24nfSBjbGFzc05hbWU9e2NuKHN0eWxlLnByb2plY3RzLCB1dGlsU3R5bGUuaG9tZVNlY3Rpb24pfT5cblx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+cHJvamVjdHM8L2gyPlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYXNvbnJ5fT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxuXHRcdFx0XHQ8UHJvamVjdFRodW1ibmFpbFxuXHRcdFx0XHRcdGhyZWY9eycvdG1udCd9XG5cdFx0XHRcdFx0aW1hZ2VTcmM9eycvaW1hZ2VzL3RtbnQucG5nJ31cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17J1JlYWN0ICYgUmVkdXgnfVxuXHRcdFx0XHRcdHN0YWNrPXtbJ3JlYWN0LnBuZycsICdyZWR1eC5wbmcnLCAnaHRtbDUucG5nJywgJ2NzczMucG5nJ119XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxQcm9qZWN0VGh1bWJuYWlsXG5cdFx0XHRcdFx0aHJlZj17Jy9hdXRldXInfVxuXHRcdFx0XHRcdGltYWdlU3JjPXsnL2ltYWdlcy9hdXRldXIucG5nJ31cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17J05vZGUuanMsIFJlYWN0LCAmIFJlZHV4J31cblx0XHRcdFx0XHRzdGFjaz17W1xuXHRcdFx0XHRcdFx0J3JlYWN0LnBuZycsXG5cdFx0XHRcdFx0XHQncmVkdXgucG5nJyxcblx0XHRcdFx0XHRcdCdub2RlanMucG5nJyxcblx0XHRcdFx0XHRcdCdleHByZXNzLnBuZycsXG5cdFx0XHRcdFx0XHQnbW9uZ29vc2UuanBnJyxcblx0XHRcdFx0XHRcdCdtb25nb2RiLnBuZycsXG5cdFx0XHRcdFx0XHQncGFzc3BvcnQucG5nJyxcblx0XHRcdFx0XHRcdCdzb2NrZXRpby5wbmcnLFxuXHRcdFx0XHRcdF19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxuXHRcdFx0XHQ8UHJvamVjdFRodW1ibmFpbFxuXHRcdFx0XHRcdGhyZWY9eycvbWFwbXljcnVpc2UnfVxuXHRcdFx0XHRcdGltYWdlU3JjPXsnL2ltYWdlcy9tYXBteWNydWlzZS5wbmcnfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXsnUmFpbHMsIFJlYWN0LCAmIFJlZHV4J31cblx0XHRcdFx0XHRzdGFjaz17W1xuXHRcdFx0XHRcdFx0J3JlYWN0LnBuZycsXG5cdFx0XHRcdFx0XHQncmVkdXgucG5nJyxcblx0XHRcdFx0XHRcdCdydWJ5LnBuZycsXG5cdFx0XHRcdFx0XHQncmFpbHMucG5nJyxcblx0XHRcdFx0XHRcdCdhY3RpdmUtcmVjb3JkLnBuZycsXG5cdFx0XHRcdFx0XHQncG9zdGdyZXNxbC5wbmcnLFxuXHRcdFx0XHRcdFx0J3B1c2hlci5wbmcnLFxuXHRcdFx0XHRcdFx0Ly8gJ3NvY2tldGlvLnBuZycsXG5cdFx0XHRcdFx0XX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBQcm9qZWN0VGh1bWJuYWlsID0gKHsgaHJlZiwgaW1hZ2VTcmMsIGRlc2NyaXB0aW9uLCBzdGFjayB9KSA9PiB7XG5cdGNvbnN0IFtzaG93T3ZlcmxheSwgc2V0U2hvd092ZXJsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IGhhbmRsZU1vdXNlRXZlbnQgPSAoZSkgPT4ge1xuXHRcdGlmIChpc1RvdWNoRGV2aWNlKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoc2hvd092ZXJsYXkgJiYgZT8udHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG5cdFx0XHRzZXRTaG93T3ZlcmxheShmYWxzZSk7XG5cdFx0fSBlbHNlIGlmICghc2hvd092ZXJsYXkgJiYgZT8udHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG5cdFx0XHRzZXRTaG93T3ZlcmxheSh0cnVlKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YVxuXHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZS5jZWxsLCBzaG93T3ZlcmxheSA/IHN0eWxlLnNob3cgOiBudWxsKX1cblx0XHRcdGhyZWY9e2hyZWZ9XG5cdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0b25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUV2ZW50fVxuXHRcdFx0b25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUV2ZW50fT5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGUub3ZlcmxheX0+PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5vdmVybGF5Q29udGVudH0+XG5cdFx0XHRcdHsvKiA8c3Bhbj57ZGVzY3JpcHRpb259PC9zcGFuPiAqL31cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5pY29uV3JhcHBlcn0+XG5cdFx0XHRcdFx0e3N0YWNrPy5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0XHRzdGFjay5tYXAoKGZpbGVuYW1lKSA9PiA8aW1nIGNsYXNzTmFtZT17c3R5bGUudGVjaEljb259IHNyYz17YC90ZWNoLWljb25zLyR7ZmlsZW5hbWV9YH0gLz4pfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8aW1nIHNyYz17aW1hZ2VTcmN9IC8+XG5cdFx0PC9hPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/index.js\n");

/***/ })

})