webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects/index.js":
/*!**************************************!*\
  !*** ./components/projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/projects/style.less\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/utils */ \"./styles/utils.less\");\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ \"./utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/suhanwijaya/Desktop/digital-garden/components/projects/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Projects = function Projects() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    id: 'projects-section',\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.projects, styles_utils__WEBPACK_IMPORTED_MODULE_4___default.a.homeSection),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n      children: \"projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.masonry,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/tmnt',\n          imageSrc: '/images/tmnt.png',\n          imageAlt: 'Personal challenge to build a game with React & Redux. Design/features inspired by SNES TMNT.',\n          stack: ['react.png', 'redux.png', 'html5.png', 'css3.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/auteur',\n          imageSrc: '/images/auteur.png',\n          imageAlt: 'Personal challenge to build a full-stack MVP with Node.js. Design/features inspired by Tumblr.',\n          stack: ['react.png', 'redux.png', 'nodejs.png', 'express.png', 'mongoose.jpg', 'mongodb.png', 'passport.png', 'socketio.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/mapmycruise',\n          imageSrc: '/images/mapmycruise.png',\n          imageAlt: 'Personal challenge to build a MVP with Rails. Design/features inspired by MapMyRun.',\n          stack: ['react.png', 'redux.png', 'ruby.png', 'rails.png', 'active-record.png', 'postgresql.png', 'googlemaps.png', 'pusher.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 5\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 2\n  }, _this);\n};\n\n_c = Projects;\n\nvar ProjectThumbnail = function ProjectThumbnail(_ref) {\n  _s();\n\n  var href = _ref.href,\n      imageSrc = _ref.imageSrc,\n      imageAlt = _ref.imageAlt,\n      stack = _ref.stack;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showOverlay = _useState[0],\n      setShowOverlay = _useState[1];\n\n  var handleMouseEvent = function handleMouseEvent(e) {\n    if (Object(utils__WEBPACK_IMPORTED_MODULE_5__[\"isTouchDevice\"])()) {\n      return;\n    }\n\n    if (showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseleave') {\n      setShowOverlay(false);\n    } else if (!showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseenter') {\n      setShowOverlay(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.cell, showOverlay ? _style__WEBPACK_IMPORTED_MODULE_3___default.a.show : null),\n    href: href,\n    target: \"_blank\",\n    onMouseEnter: handleMouseEvent,\n    onMouseLeave: handleMouseEvent,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlayContent,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.iconWrapper,\n        children: (stack === null || stack === void 0 ? void 0 : stack.length) > 0 && stack.map(function (filename) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.icon,\n            src: \"/tech-icons/\".concat(filename)\n          }, filename, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 52\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: imageSrc,\n      alt: imageAlt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(ProjectThumbnail, \"WfvaWF0rDew9qZQCcSVbkDBNxPA=\");\n\n_c2 = ProjectThumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"ProjectThumbnail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC5qcz80OTAxIl0sIm5hbWVzIjpbIlByb2plY3RzIiwiY24iLCJzdHlsZSIsInByb2plY3RzIiwidXRpbFN0eWxlIiwiaG9tZVNlY3Rpb24iLCJ0aXRsZSIsIm1hc29ucnkiLCJjb2x1bW4iLCJQcm9qZWN0VGh1bWJuYWlsIiwiaHJlZiIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJzdGFjayIsInVzZVN0YXRlIiwic2hvd092ZXJsYXkiLCJzZXRTaG93T3ZlcmxheSIsImhhbmRsZU1vdXNlRXZlbnQiLCJlIiwiaXNUb3VjaERldmljZSIsInR5cGUiLCJjZWxsIiwic2hvdyIsIm92ZXJsYXkiLCJvdmVybGF5Q29udGVudCIsImljb25XcmFwcGVyIiwibGVuZ3RoIiwibWFwIiwiZmlsZW5hbWUiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsc0JBQ2hCO0FBQVMsTUFBRSxFQUFFLGtCQUFiO0FBQWlDLGFBQVMsRUFBRUMsaURBQUUsQ0FBQ0MsNkNBQUssQ0FBQ0MsUUFBUCxFQUFpQkMsbURBQVMsQ0FBQ0MsV0FBM0IsQ0FBOUM7QUFBQSw0QkFDQztBQUFJLGVBQVMsRUFBRUgsNkNBQUssQ0FBQ0ksS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUssZUFBUyxFQUFFSiw2Q0FBSyxDQUFDSyxPQUF0QjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUwsNkNBQUssQ0FBQ00sTUFBdEI7QUFBQSxnQ0FDQyxxRUFBQyxnQkFBRDtBQUNDLGNBQUksRUFBRSxPQURQO0FBRUMsa0JBQVEsRUFBRSxrQkFGWDtBQUdDLGtCQUFRLEVBQUUsK0ZBSFg7QUFJQyxlQUFLLEVBQUUsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixX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LHdCQUFpQkQsUUFBakI7QUFBOUMsYUFBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFkO0FBQUEsU0FBVjtBQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBT0M7QUFBSyxTQUFHLEVBQUVqQixRQUFWO0FBQW9CLFNBQUcsRUFBRUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0ExQkQ7O0dBQU1ILGdCOztNQUFBQSxnQjtBQTRCU1QsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgdXRpbFN0eWxlIGZyb20gJ3N0eWxlcy91dGlscyc7XG5pbXBvcnQgeyBpc1RvdWNoRGV2aWNlIH0gZnJvbSAndXRpbHMnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcblx0PHNlY3Rpb24gaWQ9eydwcm9qZWN0cy1zZWN0aW9uJ30gY2xhc3NOYW1lPXtjbihzdHlsZS5wcm9qZWN0cywgdXRpbFN0eWxlLmhvbWVTZWN0aW9uKX0+XG5cdFx0PGgyIGNsYXNzTmFtZT17c3R5bGUudGl0bGV9PnByb2plY3RzPC9oMj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFzb25yeX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29sdW1ufT5cblx0XHRcdFx0PFByb2plY3RUaHVtYm5haWxcblx0XHRcdFx0XHRocmVmPXsnL3RtbnQnfVxuXHRcdFx0XHRcdGltYWdlU3JjPXsnL2ltYWdlcy90bW50LnBuZyd9XG5cdFx0XHRcdFx0aW1hZ2VBbHQ9eydQZXJzb25hbCBjaGFsbGVuZ2UgdG8gYnVpbGQgYSBnYW1lIHdpdGggUmVhY3QgJiBSZWR1eC4gRGVzaWduL2ZlYXR1cmVzIGluc3BpcmVkIGJ5IFNORVMgVE1OVC4nfVxuXHRcdFx0XHRcdHN0YWNrPXtbJ3JlYWN0LnBuZycsICdyZWR1eC5wbmcnLCAnaHRtbDUucG5nJywgJ2NzczMucG5nJ119XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxQcm9qZWN0VGh1bWJuYWlsXG5cdFx0XHRcdFx0aHJlZj17Jy9hdXRldXInfVxuXHRcdFx0XHRcdGltYWdlU3JjPXsnL2ltYWdlcy9hdXRldXIucG5nJ31cblx0XHRcdFx0XHRpbWFnZUFsdD17J1BlcnNvbmFsIGNoYWxsZW5nZSB0byBidWlsZCBhIGZ1bGwtc3RhY2sgTVZQIHdpdGggTm9kZS5qcy4gRGVzaWduL2ZlYXR1cmVzIGluc3BpcmVkIGJ5IFR1bWJsci4nfVxuXHRcdFx0XHRcdHN0YWNrPXtbXG5cdFx0XHRcdFx0XHQncmVhY3QucG5nJyxcblx0XHRcdFx0XHRcdCdyZWR1eC5wbmcnLFxuXHRcdFx0XHRcdFx0J25vZGVqcy5wbmcnLFxuXHRcdFx0XHRcdFx0J2V4cHJlc3MucG5nJyxcblx0XHRcdFx0XHRcdCdtb25nb29zZS5qcGcnLFxuXHRcdFx0XHRcdFx0J21vbmdvZGIucG5nJyxcblx0XHRcdFx0XHRcdCdwYXNzcG9ydC5wbmcnLFxuXHRcdFx0XHRcdFx0J3NvY2tldGlvLnBuZycsXG5cdFx0XHRcdFx0XX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbHVtbn0+XG5cdFx0XHRcdDxQcm9qZWN0VGh1bWJuYWlsXG5cdFx0XHRcdFx0aHJlZj17Jy9tYXBteWNydWlzZSd9XG5cdFx0XHRcdFx0aW1hZ2VTcmM9eycvaW1hZ2VzL21hcG15Y3J1aXNlLnBuZyd9XG5cdFx0XHRcdFx0aW1hZ2VBbHQ9eydQZXJzb25hbCBjaGFsbGVuZ2UgdG8gYnVpbGQgYSBNVlAgd2l0aCBSYWlscy4gRGVzaWduL2ZlYXR1cmVzIGluc3BpcmVkIGJ5IE1hcE15UnVuLid9XG5cdFx0XHRcdFx0c3RhY2s9e1tcblx0XHRcdFx0XHRcdCdyZWFjdC5wbmcnLFxuXHRcdFx0XHRcdFx0J3JlZHV4LnBuZycsXG5cdFx0XHRcdFx0XHQncnVieS5wbmcnLFxuXHRcdFx0XHRcdFx0J3JhaWxzLnBuZycsXG5cdFx0XHRcdFx0XHQnYWN0aXZlLXJlY29yZC5wbmcnLFxuXHRcdFx0XHRcdFx0J3Bvc3RncmVzcWwucG5nJyxcblx0XHRcdFx0XHRcdCdnb29nbGVtYXBzLnBuZycsXG5cdFx0XHRcdFx0XHQncHVzaGVyLnBuZycsXG5cdFx0XHRcdFx0XX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBQcm9qZWN0VGh1bWJuYWlsID0gKHsgaHJlZiwgaW1hZ2VTcmMsIGltYWdlQWx0LCBzdGFjayB9KSA9PiB7XG5cdGNvbnN0IFtzaG93T3ZlcmxheSwgc2V0U2hvd092ZXJsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IGhhbmRsZU1vdXNlRXZlbnQgPSAoZSkgPT4ge1xuXHRcdGlmIChpc1RvdWNoRGV2aWNlKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoc2hvd092ZXJsYXkgJiYgZT8udHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG5cdFx0XHRzZXRTaG93T3ZlcmxheShmYWxzZSk7XG5cdFx0fSBlbHNlIGlmICghc2hvd092ZXJsYXkgJiYgZT8udHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG5cdFx0XHRzZXRTaG93T3ZlcmxheSh0cnVlKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YSBjbGFzc05hbWU9e2NuKHN0eWxlLmNlbGwsIHNob3dPdmVybGF5ID8gc3R5bGUuc2hvdyA6IG51bGwpfSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRXZlbnR9IG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VFdmVudH0+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm92ZXJsYXl9Pjwvc3Bhbj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGUub3ZlcmxheUNvbnRlbnR9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmljb25XcmFwcGVyfT5cblx0XHRcdFx0XHR7c3RhY2s/Lmxlbmd0aCA+IDAgJiYgc3RhY2subWFwKChmaWxlbmFtZSkgPT4gPGltZyBrZXk9e2ZpbGVuYW1lfSBjbGFzc05hbWU9e3N0eWxlLmljb259IHNyYz17YC90ZWNoLWljb25zLyR7ZmlsZW5hbWV9YH0gLz4pfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17aW1hZ2VBbHR9IC8+XG5cdFx0PC9hPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/index.js\n");

/***/ })

})