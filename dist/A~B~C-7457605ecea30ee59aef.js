(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function (n, o, t) {
      'use strict';
      t.d(o, 'a', function () {
        return e;
      });
      var e = function () {
        return console.log('staticImportedByABC');
      };
    },
    14: function (n, o, t) {
      'use strict';
      t.d(o, 'a', function () {
        return e;
      });
      var e = function () {
        console.log('usedLeaf');
      };
      window.sideEffects = 'sideEffects';
    },
  },
]);
