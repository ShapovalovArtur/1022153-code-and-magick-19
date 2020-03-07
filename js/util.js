'use strict';

(function () {
  var getRandomIndex = function (arr) {
    return Math.floor(Math.random() * (arr.length - 1));
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i <= arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var getRandomPercent = function () {
    return Math.floor(Math.random() * 100);
  };

  window.util = {
    getRandomIndex: getRandomIndex,
    getMaxElement: getMaxElement,
    getRandomPercent: getRandomPercent
  };
})();
