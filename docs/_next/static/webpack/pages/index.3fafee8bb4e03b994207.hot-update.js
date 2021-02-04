webpackHotUpdate_N_E("pages/index",{

/***/ "./components/projects/index.js":
/*!**************************************!*\
  !*** ./components/projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/projects/style.less\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/utils */ \"./styles/utils.less\");\n/* harmony import */ var styles_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ \"./utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/suhanwijaya/Desktop/digital-garden/components/projects/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Projects = function Projects() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    id: 'projects-section',\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.projects, styles_utils__WEBPACK_IMPORTED_MODULE_4___default.a.homeSection),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n      children: \"projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.masonry,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/tmnt',\n          imageSrc: '/images/tmnt.png',\n          description: 'React & Redux',\n          stack: ['react.png', 'redux.png', 'html5.png', 'css3.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/auteur',\n          imageSrc: '/images/auteur.png',\n          description: 'Node.js, React, & Redux',\n          stack: ['react.png', 'redux.png', 'nodejs.png', 'express.png', 'mongoose.jpg', 'mongodb.png', 'passport.png', 'socketio.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectThumbnail, {\n          href: '/mapmycruise',\n          imageSrc: '/images/mapmycruise.png',\n          description: 'Rails, React, & Redux',\n          stack: ['react.png', 'redux.png', 'ruby.png', 'rails.png', 'active-record.png', 'postgresql.png', 'googlemaps.png', 'pusher.png']\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 5\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 2\n  }, _this);\n};\n\n_c = Projects;\n\nvar ProjectThumbnail = function ProjectThumbnail(_ref) {\n  _s();\n\n  var href = _ref.href,\n      imageSrc = _ref.imageSrc,\n      description = _ref.description,\n      stack = _ref.stack;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showOverlay = _useState[0],\n      setShowOverlay = _useState[1];\n\n  var handleMouseEvent = function handleMouseEvent(e) {\n    if (Object(utils__WEBPACK_IMPORTED_MODULE_5__[\"isTouchDevice\"])()) {\n      return;\n    }\n\n    if (showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseleave') {\n      setShowOverlay(false);\n    } else if (!showOverlay && (e === null || e === void 0 ? void 0 : e.type) === 'mouseenter') {\n      setShowOverlay(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style__WEBPACK_IMPORTED_MODULE_3___default.a.cell, showOverlay ? _style__WEBPACK_IMPORTED_MODULE_3___default.a.show : null),\n    href: href,\n    target: \"_blank\",\n    onMouseEnter: handleMouseEvent,\n    onMouseLeave: handleMouseEvent,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.overlayContent,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.iconWrapper,\n        children: (stack === null || stack === void 0 ? void 0 : stack.length) > 0 && stack.map(function (filename) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _style__WEBPACK_IMPORTED_MODULE_3___default.a.icon,\n            src: \"/tech-icons/\".concat(filename)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 52\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: imageSrc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(ProjectThumbnail, \"WfvaWF0rDew9qZQCcSVbkDBNxPA=\");\n\n_c2 = ProjectThumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"ProjectThumbnail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC5qcz80OTAxIl0sIm5hbWVzIjpbIlByb2plY3RzIiwiY24iLCJzdHlsZSIsInByb2plY3RzIiwidXRpbFN0eWxlIiwiaG9tZVNlY3Rpb24iLCJ0aXRsZSIsIm1hc29ucnkiLCJjb2x1bW4iLCJQcm9qZWN0VGh1bWJuYWlsIiwiaHJlZiIsImltYWdlU3JjIiwiZGVzY3JpcHRpb24iLCJzdGFjayIsInVzZVN0YXRlIiwic2hvd092ZXJsYXkiLCJzZXRTaG93T3ZlcmxheSIsImhhbmRsZU1vdXNlRXZlbnQiLCJlIiwiaXNUb3VjaERldmljZSIsInR5cGUiLCJjZWxsIiwic2hvdyIsIm92ZXJsYXkiLCJvdmVybGF5Q29udGVudCIsImljb25XcmFwcGVyIiwibGVuZ3RoIiwibWFwIiwiZmlsZW5hbWUiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsc0JBQ2hCO0FBQVMsTUFBRSxFQUFFLGtCQUFiO0FBQWlDLGFBQVMsRUFBRUMsaURBQUUsQ0FBQ0MsNkNBQUssQ0FBQ0MsUUFBUCxFQUFpQkMsbURBQVMsQ0FBQ0MsV0FBM0IsQ0FBOUM7QUFBQSw0QkFDQztBQUFJLGVBQVMsRUFBRUgsNkNBQUssQ0FBQ0ksS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUssZUFBUyxFQUFFSiw2Q0FBSyxDQUFDSyxPQUF0QjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUwsNkNBQUssQ0FBQ00sTUFBdEI7QUFBQSxnQ0FDQyxxRUFBQyxnQkFBRDtBQUNDLGNBQUksRUFBRSxPQURQO0FBRUMsa0JBQVEsRUFBRSxrQkFGWDtBQUdDLHFCQUFXLEVBQUUsZUFIZDtBQUlDLGVBQUssRUFBRSxDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJC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LFFBQWpCO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWQ7QUFBQSxTQUFWO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQsZUFZQztBQUFLLFNBQUcsRUFBRWpCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBZ0JBLENBL0JEOztHQUFNRixnQjs7TUFBQUEsZ0I7QUFpQ1NULHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHV0aWxTdHlsZSBmcm9tICdzdHlsZXMvdXRpbHMnO1xuaW1wb3J0IHsgaXNUb3VjaERldmljZSB9IGZyb20gJ3V0aWxzJztcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXG5cdDxzZWN0aW9uIGlkPXsncHJvamVjdHMtc2VjdGlvbid9IGNsYXNzTmFtZT17Y24oc3R5bGUucHJvamVjdHMsIHV0aWxTdHlsZS5ob21lU2VjdGlvbil9PlxuXHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlLnRpdGxlfT5wcm9qZWN0czwvaDI+XG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLm1hc29ucnl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbHVtbn0+XG5cdFx0XHRcdDxQcm9qZWN0VGh1bWJuYWlsXG5cdFx0XHRcdFx0aHJlZj17Jy90bW50J31cblx0XHRcdFx0XHRpbWFnZVNyYz17Jy9pbWFnZXMvdG1udC5wbmcnfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXsnUmVhY3QgJiBSZWR1eCd9XG5cdFx0XHRcdFx0c3RhY2s9e1sncmVhY3QucG5nJywgJ3JlZHV4LnBuZycsICdodG1sNS5wbmcnLCAnY3NzMy5wbmcnXX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFByb2plY3RUaHVtYm5haWxcblx0XHRcdFx0XHRocmVmPXsnL2F1dGV1cid9XG5cdFx0XHRcdFx0aW1hZ2VTcmM9eycvaW1hZ2VzL2F1dGV1ci5wbmcnfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXsnTm9kZS5qcywgUmVhY3QsICYgUmVkdXgnfVxuXHRcdFx0XHRcdHN0YWNrPXtbXG5cdFx0XHRcdFx0XHQncmVhY3QucG5nJyxcblx0XHRcdFx0XHRcdCdyZWR1eC5wbmcnLFxuXHRcdFx0XHRcdFx0J25vZGVqcy5wbmcnLFxuXHRcdFx0XHRcdFx0J2V4cHJlc3MucG5nJyxcblx0XHRcdFx0XHRcdCdtb25nb29zZS5qcGcnLFxuXHRcdFx0XHRcdFx0J21vbmdvZGIucG5nJyxcblx0XHRcdFx0XHRcdCdwYXNzcG9ydC5wbmcnLFxuXHRcdFx0XHRcdFx0J3NvY2tldGlvLnBuZycsXG5cdFx0XHRcdFx0XX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbHVtbn0+XG5cdFx0XHRcdDxQcm9qZWN0VGh1bWJuYWlsXG5cdFx0XHRcdFx0aHJlZj17Jy9tYXBteWNydWlzZSd9XG5cdFx0XHRcdFx0aW1hZ2VTcmM9eycvaW1hZ2VzL21hcG15Y3J1aXNlLnBuZyd9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249eydSYWlscywgUmVhY3QsICYgUmVkdXgnfVxuXHRcdFx0XHRcdHN0YWNrPXtbXG5cdFx0XHRcdFx0XHQncmVhY3QucG5nJyxcblx0XHRcdFx0XHRcdCdyZWR1eC5wbmcnLFxuXHRcdFx0XHRcdFx0J3J1YnkucG5nJyxcblx0XHRcdFx0XHRcdCdyYWlscy5wbmcnLFxuXHRcdFx0XHRcdFx0J2FjdGl2ZS1yZWNvcmQucG5nJyxcblx0XHRcdFx0XHRcdCdwb3N0Z3Jlc3FsLnBuZycsXG5cdFx0XHRcdFx0XHQnZ29vZ2xlbWFwcy5wbmcnLFxuXHRcdFx0XHRcdFx0J3B1c2hlci5wbmcnLFxuXHRcdFx0XHRcdF19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9zZWN0aW9uPlxuKTtcblxuY29uc3QgUHJvamVjdFRodW1ibmFpbCA9ICh7IGhyZWYsIGltYWdlU3JjLCBkZXNjcmlwdGlvbiwgc3RhY2sgfSkgPT4ge1xuXHRjb25zdCBbc2hvd092ZXJsYXksIHNldFNob3dPdmVybGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBoYW5kbGVNb3VzZUV2ZW50ID0gKGUpID0+IHtcblx0XHRpZiAoaXNUb3VjaERldmljZSgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHNob3dPdmVybGF5ICYmIGU/LnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuXHRcdFx0c2V0U2hvd092ZXJsYXkoZmFsc2UpO1xuXHRcdH0gZWxzZSBpZiAoIXNob3dPdmVybGF5ICYmIGU/LnR5cGUgPT09ICdtb3VzZWVudGVyJykge1xuXHRcdFx0c2V0U2hvd092ZXJsYXkodHJ1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGFcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGUuY2VsbCwgc2hvd092ZXJsYXkgPyBzdHlsZS5zaG93IDogbnVsbCl9XG5cdFx0XHRocmVmPXtocmVmfVxuXHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFdmVudH1cblx0XHRcdG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VFdmVudH0+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm92ZXJsYXl9Pjwvc3Bhbj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGUub3ZlcmxheUNvbnRlbnR9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmljb25XcmFwcGVyfT5cblx0XHRcdFx0XHR7c3RhY2s/Lmxlbmd0aCA+IDAgJiYgc3RhY2subWFwKChmaWxlbmFtZSkgPT4gPGltZyBjbGFzc05hbWU9e3N0eWxlLmljb259IHNyYz17YC90ZWNoLWljb25zLyR7ZmlsZW5hbWV9YH0gLz4pfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8aW1nIHNyYz17aW1hZ2VTcmN9IC8+XG5cdFx0PC9hPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/index.js\n");

/***/ })

})