webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects/index.js":
/*!**************************************!*\
  !*** ./components/projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/projects/style.less\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/utils */ \"./styles/utils.less\");\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ \"./utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/suhanwijaya/Desktop/digital-garden/components/projects/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Projects = function Projects() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    id: 'projects-section',\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.projects, styles_utils__WEBPACK_IMPORTED_MODULE_4___default.a.homeSection),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n      children: \"projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.masonry,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/tmnt',\n          imageSrc: '/images/tmnt.png',\n          description: 'React & Redux',\n          stack: ['react.png', 'redux.png', 'html5.png', 'css3.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/auteur',\n          imageSrc: '/images/auteur.png',\n          description: 'Node.js, React, & Redux',\n          stack: ['react.png', 'redux.png', 'nodejs.png', 'mongodb.png', 'mongoose.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/mapmycruise',\n          imageSrc: '/images/mapmycruise.png',\n          description: 'Rails, React, & Redux'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 5\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 2\n  }, _this);\n};\n\n_c = Projects;\n\nvar ProjectThumbnail = function ProjectThumbnail(_ref) {\n  _s();\n\n  var href = _ref.href,\n      imageSrc = _ref.imageSrc,\n      description = _ref.description,\n      stack = _ref.stack;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showOverlay = _useState[0],\n      setShowOverlay = _useState[1];\n\n  var handleMouseEvent = function handleMouseEvent(e) {\n    if (Object(utils__WEBPACK_IMPORTED_MODULE_5__[\"isTouchDevice\"])()) {\n      return;\n    }\n\n    if (showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseleave') {\n      setShowOverlay(false);\n    } else if (!showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseenter') {\n      setShowOverlay(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.cell, showOverlay ? _style__WEBPACK_IMPORTED_MODULE_3___default.a.show : null),\n    href: href,\n    target: \"_blank\",\n    onMouseEnter: handleMouseEvent,\n    onMouseLeave: handleMouseEvent,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlayContent,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.iconWrapper,\n        children: (stack === null || stack === void 0 ? void 0 : stack.length) > 0 && stack.map(function (filename) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.techIcon,\n            src: \"/tech-icons/\".concat(filename)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 7\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: imageSrc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(ProjectThumbnail, \"Ep4ShHOPLX+HIrij0Qe2ji+gLEk=\");\n\n_c2 = ProjectThumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"ProjectThumbnail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC5qcz80OTAxIl0sIm5hbWVzIjpbIlByb2plY3RzIiwiY24iLCJzdHlsZSIsInByb2plY3RzIiwidXRpbFN0eWxlIiwiaG9tZVNlY3Rpb24iLCJ0aXRsZSIsIm1hc29ucnkiLCJjb2x1bW4iLCJQcm9qZWN0VGh1bWJuYWlsIiwiaHJlZiIsImltYWdlU3JjIiwiZGVzY3JpcHRpb24iLCJzdGFjayIsInVzZVN0YXRlIiwic2hvd092ZXJsYXkiLCJzZXRTaG93T3ZlcmxheSIsImhhbmRsZU1vdXNlRXZlbnQiLCJlIiwiaXNUb3VjaERldmljZSIsInR5cGUiLCJjZWxsIiwic2hvdyIsIm92ZXJsYXkiLCJvdmVybGF5Q29udGVudCIsImljb25XcmFwcGVyIiwibGVuZ3RoIiwibWFwIiwiZmlsZW5hbWUiLCJ0ZWNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNoQjtBQUFTLE1BQUUsRUFBRSxrQkFBYjtBQUFpQyxhQUFTLEVBQUVDLGlEQUFFLENBQUNDLDZDQUFLLENBQUNDLFFBQVAsRUFBaUJDLG1EQUFTLENBQUNDLFdBQTNCLENBQTlDO0FBQUEsNEJBQ0M7QUFBSSxlQUFTLEVBQUVILDZDQUFLLENBQUNJLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQztBQUFLLGVBQVMsRUFBRUosNkNBQUssQ0FBQ0ssT0FBdEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVMLDZDQUFLLENBQUNNLE1BQXRCO0FBQUEsZ0NBQ0MscUVBQUMsZ0JBQUQ7QUFBa0IsY0FBSSxFQUFFLE9BQXhCO0FBQWlDLGtCQUFRLEVBQUUsa0JBQTNDO0FBQStELHFCQUFXLEVBQUUsZUFBNUU7QUFBNkYsZUFBSyxFQUFFLENBQUMsV0FBRCxFQUFj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QTtBQUFBLGFBRkQsZUFVQztBQUFLLFNBQUcsRUFBRWpCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBY0EsQ0EzQkQ7O0dBQU1GLGdCOztNQUFBQSxnQjtBQTZCU1QsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgdXRpbFN0eWxlIGZyb20gJ3N0eWxlcy91dGlscyc7XG5pbXBvcnQgeyBpc1RvdWNoRGV2aWNlIH0gZnJvbSAndXRpbHMnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcblx0PHNlY3Rpb24gaWQ9eydwcm9qZWN0cy1zZWN0aW9uJ30gY2xhc3NOYW1lPXtjbihzdHlsZS5wcm9qZWN0cywgdXRpbFN0eWxlLmhvbWVTZWN0aW9uKX0+XG5cdFx0PGgyIGNsYXNzTmFtZT17c3R5bGUudGl0bGV9PnByb2plY3RzPC9oMj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFzb25yeX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29sdW1ufT5cblx0XHRcdFx0PFByb2plY3RUaHVtYm5haWwgaHJlZj17Jy90bW50J30gaW1hZ2VTcmM9eycvaW1hZ2VzL3RtbnQucG5nJ30gZGVzY3JpcHRpb249eydSZWFjdCAmIFJlZHV4J30gc3RhY2s9e1sncmVhY3QucG5nJywgJ3JlZHV4LnBuZycsICdodG1sNS5wbmcnLCAnY3NzMy5wbmcnXX0gLz5cblx0XHRcdFx0PFByb2plY3RUaHVtYm5haWwgaHJlZj17Jy9hdXRldXInfSBpbWFnZVNyYz17Jy9pbWFnZXMvYXV0ZXVyLnBuZyd9IGRlc2NyaXB0aW9uPXsnTm9kZS5qcywgUmVhY3QsICYgUmVkdXgnfSBzdGFjaz17WydyZWFjdC5wbmcnLCAncmVkdXgucG5nJywgJ25vZGVqcy5wbmcnLCAnbW9uZ29kYi5wbmcnLCAnbW9uZ29vc2UucG5nJ119IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb2x1bW59PlxuXHRcdFx0XHQ8UHJvamVjdFRodW1ibmFpbCBocmVmPXsnL21hcG15Y3J1aXNlJ30gaW1hZ2VTcmM9eycvaW1hZ2VzL21hcG15Y3J1aXNlLnBuZyd9IGRlc2NyaXB0aW9uPXsnUmFpbHMsIFJlYWN0LCAmIFJlZHV4J30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBQcm9qZWN0VGh1bWJuYWlsID0gKHsgaHJlZiwgaW1hZ2VTcmMsIGRlc2NyaXB0aW9uLCBzdGFjayB9KSA9PiB7XG5cdGNvbnN0IFsgc2hvd092ZXJsYXksIHNldFNob3dPdmVybGF5IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFxuXHRjb25zdCBoYW5kbGVNb3VzZUV2ZW50ID0gKGUpID0+IHtcblx0XHRpZiAoaXNUb3VjaERldmljZSgpKSB7IHJldHVybjsgfVxuXG5cdFx0aWYgKHNob3dPdmVybGF5ICYmIGU/LnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuXHRcdFx0c2V0U2hvd092ZXJsYXkoZmFsc2UpO1xuXHRcdH0gZWxzZSBpZiAoIXNob3dPdmVybGF5ICYmIGU/LnR5cGUgPT09ICdtb3VzZWVudGVyJykge1xuXHRcdFx0c2V0U2hvd092ZXJsYXkodHJ1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGEgY2xhc3NOYW1lPXtjbihzdHlsZS5jZWxsLCBzaG93T3ZlcmxheSA/IHN0eWxlLnNob3cgOiBudWxsKX0gaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUV2ZW50fSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlRXZlbnR9PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5vdmVybGF5fT48L3NwYW4+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm92ZXJsYXlDb250ZW50fT5cblx0XHRcdFx0ey8qIDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+ICovfVxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmljb25XcmFwcGVyfT5cblx0XHRcdFx0XHR7c3RhY2s/Lmxlbmd0aCA+IDAgJiYgc3RhY2subWFwKGZpbGVuYW1lID0+IChcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtzdHlsZS50ZWNoSWNvbn0gc3JjPXtgL3RlY2gtaWNvbnMvJHtmaWxlbmFtZX1gfSAvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8aW1nIHNyYz17aW1hZ2VTcmN9IC8+XG5cdFx0PC9hPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/index.js\n");

/***/ })

})