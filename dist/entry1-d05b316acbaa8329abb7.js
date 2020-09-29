(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entry1", function() { return entry1; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var entry1 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var a, b;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all(/* import() | A */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 5));

          case 2:
            a = _context.sent;
            _context.next = 5;
            return Promise.all(/* import() | B */[__webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 0));

          case 5:
            b = _context.sent;
            a();
            b();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function entry1() {
    return _ref.apply(this, arguments);
  };
}();

/***/ })
],[[1,0]]]);