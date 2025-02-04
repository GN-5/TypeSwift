"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TypingTest)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_English_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/English.json */ \"(app-pages-browser)/./src/data/English.json\");\n/* harmony import */ var _data_English500_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/English500.json */ \"(app-pages-browser)/./src/data/English500.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst wordSets = {\n    \"200 Words\": _data_English_json__WEBPACK_IMPORTED_MODULE_2__.words,\n    \"500 Words\": _data_English500_json__WEBPACK_IMPORTED_MODULE_3__.words\n};\nfunction TypingTest() {\n    _s();\n    const [words, setWords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(15);\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [wpm, setWpm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [errorCount, setErrorCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flash, setFlash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [caretPosition, setCaretPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedWordSet, setSelectedWordSet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"200 Words\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"TypingTest.useEffect\": ()=>{\n            resetTest();\n        }\n    }[\"TypingTest.useEffect\"], [\n        timer,\n        selectedWordSet\n    ]);\n    function shuffleArray(array) {\n        return array.sort(()=>Math.random() - 0.5);\n    }\n    function handleChange(e) {\n        if (timeLeft === 0) return;\n        const value = e.target.value;\n        setInput(value);\n        setCaretPosition(value.length);\n        if (timeLeft === null) {\n            setTimeLeft(timer);\n        }\n        if (value.endsWith(\" \")) {\n            if (value.trim() === words[currentIndex].trim()) {\n                setCurrentIndex((i)=>i + 1);\n                setInput(\"\");\n                setCaretPosition(0);\n            } else {\n                setErrorCount((count)=>count + 1);\n                setFlash(true);\n                setTimeout(()=>setFlash(false), 100);\n            }\n        }\n    }\n    function resetTest() {\n        setWords(shuffleArray([\n            ...wordSets[selectedWordSet]\n        ]).map((word)=>word + \" \"));\n        setCurrentIndex(0);\n        setInput(\"\");\n        setErrorCount(0);\n        setCaretPosition(0);\n        setTimeLeft(null);\n        setWpm(null);\n        setTimeout(()=>{\n            var _inputRef_current;\n            return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        }, 100);\n    }\n    function calculateWPM() {\n        const timeElapsedInMinutes = timer / 60;\n        const wordsTyped = currentIndex;\n        const mistakes = errorCount;\n        const calculatedWPM = (wordsTyped - mistakes) / timeElapsedInMinutes;\n        setWpm(Math.max(0, Math.round(calculatedWPM))); // Ensure WPM is not negative\n    }\n    function handleFocus() {\n        setIsFocused(true);\n    }\n    function handleBlur() {\n        setIsFocused(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 text-center flex flex-col items-center justify-center min-h-screen \".concat(flash ? \"bg-red-500\" : \"\"),\n        children: [\n            !isFocused && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl cursor-pointer\",\n                onClick: ()=>{\n                    var _inputRef_current;\n                    return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n                },\n                children: \"Press here to focus\"\n            }, void 0, false, {\n                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Typing Test\"\n            }, void 0, false, {\n                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"p-2 border rounded text-black\",\n                        value: selectedWordSet,\n                        onChange: (e)=>setSelectedWordSet(e.target.value),\n                        children: Object.keys(wordSets).map((set)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: set,\n                                children: set\n                            }, set, false, {\n                                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"p-2 border rounded text-black\",\n                        value: timer,\n                        onChange: (e)=>setTimer(Number(e.target.value)),\n                        children: [\n                            15,\n                            30,\n                            60,\n                            120\n                        ].map((t)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: t,\n                                children: [\n                                    t,\n                                    \"s\"\n                                ]\n                            }, t, true, {\n                                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full max-w-3xl p-4 bg-gray-800 text-white rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputRef,\n                        className: \"absolute w-full h-full opacity-0\",\n                        value: input,\n                        onChange: handleChange,\n                        onFocus: handleFocus,\n                        onBlur: handleBlur,\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 text-lg flex flex-wrap justify-center items-center min-h-[120px] text-center\",\n                        children: words.map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: index === currentIndex ? \"text-blue-500 relative\" : index < currentIndex ? \"text-gray-400\" : \"\",\n                                style: {\n                                    whiteSpace: \"pre\"\n                                },\n                                children: word.split('').map((char, charIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative\",\n                                        children: [\n                                            char,\n                                            index === currentIndex && charIndex === caretPosition && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute left-0 top-5 w-3 h-0.5 bg-white blinking-caret\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, charIndex, true, {\n                                        fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 17\n                                    }, this))\n                            }, index, false, {\n                                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4\",\n                children: [\n                    \"Time Left: \",\n                    timeLeft !== null ? timeLeft : timer,\n                    \"s\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            wpm !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 font-bold\",\n                children: [\n                    \"WPM: \",\n                    wpm\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n                lineNumber: 146,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gaurabneupane/TypeSwift/src/app/page.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(TypingTest, \"l9o4TA6XcnER6Wp2UHVGBF1MggI=\");\n_c = TypingTest;\nvar _c;\n$RefreshReg$(_c, \"TypingTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw4REFBQ0M7Z0NBRUNoQixXQUFXZSxVQUFVaEUsZUFBZSwyQkFBMkJnRSxRQUFRaEUsZUFBZSxrQkFBa0I7Z0NBQ3hHa0UsT0FBTztvQ0FBRUMsWUFBWTtnQ0FBTTswQ0FFMUIvQixLQUFLZ0MsS0FBSyxDQUFDLElBQUlqQyxHQUFHLENBQUMsQ0FBQ2tDLE1BQU1DLDBCQUN6Qiw4REFBQ0w7d0NBQXFCaEIsV0FBVTs7NENBQzdCb0I7NENBQ0FMLFVBQVVoRSxnQkFBZ0JzRSxjQUFjMUQsK0JBQ3ZDLDhEQUFDcUQ7Z0RBQUtoQixXQUFVOzs7Ozs7O3VDQUhUcUI7Ozs7OytCQUxSTjs7Ozs7Ozs7Ozs7Ozs7OzswQkFnQmIsOERBQUNPO2dCQUFFdEIsV0FBVTs7b0JBQU87b0JBQVk3QyxhQUFhLE9BQU9BLFdBQVdGO29CQUFNOzs7Ozs7O1lBQ3BFSSxRQUFRLHNCQUFRLDhEQUFDaUU7Z0JBQUV0QixXQUFVOztvQkFBaUI7b0JBQU0zQzs7Ozs7Ozs7Ozs7OztBQUczRDtHQXpJd0JWO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvZ2F1cmFibmV1cGFuZS9UeXBlU3dpZnQvc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd29yZHMyMDAgZnJvbSBcIi4uL2RhdGEvRW5nbGlzaC5qc29uXCI7XG5pbXBvcnQgd29yZHM1MDAgZnJvbSBcIi4uL2RhdGEvRW5nbGlzaDUwMC5qc29uXCI7XG5cbmNvbnN0IHdvcmRTZXRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XG4gIFwiMjAwIFdvcmRzXCI6IHdvcmRzMjAwLndvcmRzLFxuICBcIjUwMCBXb3Jkc1wiOiB3b3JkczUwMC53b3Jkcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR5cGluZ1Rlc3QoKSB7XG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMTUpO1xuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbd3BtLCBzZXRXcG1dID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtlcnJvckNvdW50LCBzZXRFcnJvckNvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmxhc2gsIHNldEZsYXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhcmV0UG9zaXRpb24sIHNldENhcmV0UG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZFdvcmRTZXQsIHNldFNlbGVjdGVkV29yZFNldF0gPSB1c2VTdGF0ZShcIjIwMCBXb3Jkc1wiKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXNldFRlc3QoKTtcbiAgfSwgW3RpbWVyLCBzZWxlY3RlZFdvcmRTZXRdKTtcblxuICBmdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXk6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBpZiAodGltZUxlZnQgPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0SW5wdXQodmFsdWUpO1xuICAgIHNldENhcmV0UG9zaXRpb24odmFsdWUubGVuZ3RoKTtcblxuICAgIGlmICh0aW1lTGVmdCA9PT0gbnVsbCkge1xuICAgICAgc2V0VGltZUxlZnQodGltZXIpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5lbmRzV2l0aChcIiBcIikpIHtcbiAgICAgIGlmICh2YWx1ZS50cmltKCkgPT09IHdvcmRzW2N1cnJlbnRJbmRleF0udHJpbSgpKSB7XG4gICAgICAgIHNldEN1cnJlbnRJbmRleCgoaSkgPT4gaSArIDEpO1xuICAgICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbigwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yQ291bnQoKGNvdW50KSA9PiBjb3VudCArIDEpO1xuICAgICAgICBzZXRGbGFzaCh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGbGFzaChmYWxzZSksIDEwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUZXN0KCkge1xuICAgIHNldFdvcmRzKHNodWZmbGVBcnJheShbLi4ud29yZFNldHNbc2VsZWN0ZWRXb3JkU2V0XV0pLm1hcCh3b3JkID0+IHdvcmQgKyBcIiBcIikpO1xuICAgIHNldEN1cnJlbnRJbmRleCgwKTtcbiAgICBzZXRJbnB1dChcIlwiKTtcbiAgICBzZXRFcnJvckNvdW50KDApO1xuICAgIHNldENhcmV0UG9zaXRpb24oMCk7XG4gICAgc2V0VGltZUxlZnQobnVsbCk7XG4gICAgc2V0V3BtKG51bGwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKSwgMTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVdQTSgpIHtcbiAgICBjb25zdCB0aW1lRWxhcHNlZEluTWludXRlcyA9IHRpbWVyIC8gNjA7XG4gICAgY29uc3Qgd29yZHNUeXBlZCA9IGN1cnJlbnRJbmRleDtcbiAgICBjb25zdCBtaXN0YWtlcyA9IGVycm9yQ291bnQ7XG4gICAgY29uc3QgY2FsY3VsYXRlZFdQTSA9ICh3b3Jkc1R5cGVkIC0gbWlzdGFrZXMpIC8gdGltZUVsYXBzZWRJbk1pbnV0ZXM7XG4gICAgc2V0V3BtKE1hdGgubWF4KDAsIE1hdGgucm91bmQoY2FsY3VsYXRlZFdQTSkpKTsgLy8gRW5zdXJlIFdQTSBpcyBub3QgbmVnYXRpdmVcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xuICAgIHNldElzRm9jdXNlZCh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XG4gICAgc2V0SXNGb2N1c2VkKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BwLTQgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuICR7Zmxhc2ggPyBcImJnLXJlZC01MDBcIiA6IFwiXCJ9YH0+XG4gICAgICB7IWlzRm9jdXNlZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgdGV4dC13aGl0ZSB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpfVxuICAgICAgICA+XG4gICAgICAgICAgUHJlc3MgaGVyZSB0byBmb2N1c1xuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5UeXBpbmcgVGVzdDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBnYXAtNFwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIHRleHQtYmxhY2tcIlxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFdvcmRTZXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFdvcmRTZXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgICAge09iamVjdC5rZXlzKHdvcmRTZXRzKS5tYXAoKHNldCkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3NldH0gdmFsdWU9e3NldH0+e3NldH08L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgdGV4dC1ibGFja1wiXG4gICAgICAgICAgdmFsdWU9e3RpbWVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZXIoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgID5cbiAgICAgICAgICB7WzE1LCAzMCwgNjAsIDEyMF0ubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17dH0gdmFsdWU9e3R9Pnt0fXM8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTN4bCBwLTQgYmctZ3JheS04MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvcGFjaXR5LTBcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWluLWgtWzEyMHB4XSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBjdXJyZW50SW5kZXggPyBcInRleHQtYmx1ZS01MDAgcmVsYXRpdmVcIiA6IGluZGV4IDwgY3VycmVudEluZGV4ID8gXCJ0ZXh0LWdyYXktNDAwXCIgOiBcIlwifVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcInByZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt3b3JkLnNwbGl0KCcnKS5tYXAoKGNoYXIsIGNoYXJJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17Y2hhckluZGV4fSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAge2NoYXJ9XG4gICAgICAgICAgICAgICAgICB7aW5kZXggPT09IGN1cnJlbnRJbmRleCAmJiBjaGFySW5kZXggPT09IGNhcmV0UG9zaXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTUgdy0zIGgtMC41IGJnLXdoaXRlIGJsaW5raW5nLWNhcmV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj5UaW1lIExlZnQ6IHt0aW1lTGVmdCAhPT0gbnVsbCA/IHRpbWVMZWZ0IDogdGltZXJ9czwvcD5cbiAgICAgIHt3cG0gIT09IG51bGwgJiYgPHAgY2xhc3NOYW1lPVwibXQtNCBmb250LWJvbGRcIj5XUE06IHt3cG19PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIndvcmRzMjAwIiwid29yZHM1MDAiLCJ3b3JkU2V0cyIsIndvcmRzIiwiVHlwaW5nVGVzdCIsInNldFdvcmRzIiwiaW5wdXQiLCJzZXRJbnB1dCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInRpbWVyIiwic2V0VGltZXIiLCJ0aW1lTGVmdCIsInNldFRpbWVMZWZ0Iiwid3BtIiwic2V0V3BtIiwiZXJyb3JDb3VudCIsInNldEVycm9yQ291bnQiLCJmbGFzaCIsInNldEZsYXNoIiwiY2FyZXRQb3NpdGlvbiIsInNldENhcmV0UG9zaXRpb24iLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJzZWxlY3RlZFdvcmRTZXQiLCJzZXRTZWxlY3RlZFdvcmRTZXQiLCJpbnB1dFJlZiIsInJlc2V0VGVzdCIsInNodWZmbGVBcnJheSIsImFycmF5Iiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJlbmRzV2l0aCIsInRyaW0iLCJpIiwiY291bnQiLCJzZXRUaW1lb3V0IiwibWFwIiwid29yZCIsImN1cnJlbnQiLCJmb2N1cyIsImNhbGN1bGF0ZVdQTSIsInRpbWVFbGFwc2VkSW5NaW51dGVzIiwid29yZHNUeXBlZCIsIm1pc3Rha2VzIiwiY2FsY3VsYXRlZFdQTSIsIm1heCIsInJvdW5kIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJPYmplY3QiLCJrZXlzIiwic2V0Iiwib3B0aW9uIiwiTnVtYmVyIiwidCIsInJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJhdXRvRm9jdXMiLCJpbmRleCIsInNwYW4iLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJzcGxpdCIsImNoYXIiLCJjaGFySW5kZXgiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});