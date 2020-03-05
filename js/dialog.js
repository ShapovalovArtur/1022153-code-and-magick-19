'use strict';

(function () {

  var COATS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALLS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var coat = document.querySelector('.wizard-coat');
  var eyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name = coat-color]');
  var eyeColorInput = document.querySelector('input[name = eyes-color]');
  var fireballColorInput = document.querySelector('input[name = fireball-color]');

  var popupEscHandler = function (evt) {
    if (userNameInput === document.activeElement) {
      return;
    }
    if (evt.key === ESC_KEY) {
      setup.classList.add('hidden');
    }
  };

  var colorChangeHandler = function (arr) {
    return arr[window.util.getRandomIndex(arr)];
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscHandler);
  };

  var changeColor = function (part, parts, partValue) {
    part.style.fill = colorChangeHandler(parts);
    partValue.value = part.style.fill;
  };

  var changeFireballColor = function () {
    var currentColor = colorChangeHandler(FIREBALLS);
    fireball.style.background = currentColor;
    fireballColorInput.value = currentColor;
  };

  setupOpen.addEventListener('click', openPopup);

  setupClose.addEventListener('click', closePopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  coat.addEventListener('click', function () {
    changeColor(coat, COATS, coatColorInput);
  });


  eyes.addEventListener('click', function () {
    changeColor(eyes, EYES, eyeColorInput);
  });


  fireball.addEventListener('click', changeFireballColor);
})();
