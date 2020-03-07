'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupHandle = setup.querySelector('.upload');
  var dragged = false;
    var startCoords = {
      x: null,
      y: null
    };

  var mouseDownHandler = function (evt) {
    evt.preventDefault();

    dragged = false;
    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y + 'px');
      setup.style.left = (setup.offsetLeft - shift.x + 'px');
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (dragged) {
        var preventDefaulClickHandler = function (clickEvt) {
          clickEvt.preventDefault();
          setupHandle.removeEventListener('click', preventDefaulClickHandler);
        };
        setupHandle.addEventListener('click', preventDefaulClickHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

  };

  setupHandle.addEventListener('mousedown', mouseDownHandler);
})();
