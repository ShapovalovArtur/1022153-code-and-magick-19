'use strict';

(function () {

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');


  var popupEscHandler = function (evt) {
    if (userNameInput === document.activeElement) {
      return;
    }
    if (evt.key === ESC_KEY) {
      setup.classList.add('hidden');
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscHandler);
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
})();
