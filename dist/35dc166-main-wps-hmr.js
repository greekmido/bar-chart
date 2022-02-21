"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatenew_project"]("main",{

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1645172113110\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://new-project/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\nconst gdpArr=[];\r\nconst dateArr=[];\r\nconst dataSet = await fetch(\"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json\")\r\n.then((res)=>res.json())\r\n.then((data)=>{\r\n  return data\r\n});\r\ndataSet.data.forEach(element => {\r\n    gdpArr.push(element[1]);\r\n    dateArr.push(new Date(element[0]))\r\n});\r\n\r\nconst height = document.documentElement.clientHeight-200;\r\nconst width = document.documentElement.clientWidth-200;\r\n\r\nconst xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(dateArr).range([0,width]);\r\nconst yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([d3__WEBPACK_IMPORTED_MODULE_1__.min(gdpArr),d3__WEBPACK_IMPORTED_MODULE_1__.max(gdpArr)]).range([5,height]);\r\n\r\nconst xAxisScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleTime().domain([d3__WEBPACK_IMPORTED_MODULE_1__.min(dateArr),(d3__WEBPACK_IMPORTED_MODULE_1__.max(dateArr).setMonth(d3__WEBPACK_IMPORTED_MODULE_1__.max(dateArr).getMonth()+3))]).range([0,width]);\r\nconst yAxisScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([d3__WEBPACK_IMPORTED_MODULE_1__.max(gdpArr),d3__WEBPACK_IMPORTED_MODULE_1__.min(gdpArr)]).range([5,height]);\r\n\r\nconst xAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(xAxisScale).ticks(15);\r\nconst yAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(yAxisScale).tickFormat((d,i)=>d3__WEBPACK_IMPORTED_MODULE_1__.format(\".1s\")(d)).ticks(25);\r\n\r\nconst theme = \"#034694\"\r\nconst themeAcc = \"#00BFFF\"\r\nconst svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(\"svg\")\r\n.attr(\"height\",height+50)\r\n.attr(\"width\",width+110);\r\n\r\n\r\nsvg.selectAll(\"rect\")\r\n.data(gdpArr)\r\n.enter()\r\n.append(\"rect\")\r\n.style(\"fill\",theme)\r\n.attr(\"height\",(d)=>yScale(d))\r\n.attr(\"width\",xScale.bandwidth())\r\n.attr(\"x\",(d,i)=>xScale(dateArr[i])+100)\r\n.attr(\"y\",(d)=>(height)-(yScale(d)))\r\n.attr(\"index\",(d,i)=>i)\r\n.on('mouseover', function (e,d){\r\n    d3__WEBPACK_IMPORTED_MODULE_1__.select(this).style(\"fill\",themeAcc);\r\n    d3__WEBPACK_IMPORTED_MODULE_1__.select(\".tooltip\")\r\n    .append(\"div\")\r\n    .html(`${d} B$`)\r\n    .attr(\"class\",\"tooltiptext\")\r\n    .style(\"top\",`${height-yScale(d)+30}px`)\r\n    .style(\"left\",`${xScale(dateArr[this.getAttribute(\"index\")])+50}px`)\r\n    .attr(\"id\",`tip${d}`)\r\n})\r\n.on(\"mouseout\",function(e,d){\r\n    d3__WEBPACK_IMPORTED_MODULE_1__.select(this).style(\"fill\",theme);\r\n    document.getElementById(`tip${d}`).remove()\r\n})\r\n\r\n\r\nd3__WEBPACK_IMPORTED_MODULE_1__.select(\"svg\").append(\"g\").attr(\"transform\", `translate(100, ${height})`).call(xAxis)\r\n.append(\"text\")\r\n.text(\"years →\")\r\n.attr(\"x\",\"40\")\r\n.attr(\"y\",\"40\")\r\n.style(\"fill\",theme)\r\n.style(\"font-size\",\"20\");\r\nd3__WEBPACK_IMPORTED_MODULE_1__.select(\"svg\").append(\"g\").attr(\"transform\", `translate(100, 0)`).call(yAxis).append(\"text\").text(\"$ in billions → \")\r\n.attr(\"y\",\"20\")\r\n.attr(\"x\",\"-100\")\r\n.attr(\"transform\",\"rotate(-90)\")\r\n.style(\"fill\",theme)\r\n.style(\"font-size\",\"20\");\r\n\r\n\r\n\r\n\r\nif(true){\r\n    module.hot.accept();\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://new-project/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("21003bc9ad87ceabc9b7")
/******/ })();
/******/ 
/******/ }
);