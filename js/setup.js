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

  var wizardsCopy = [];
  var newColor = '';
  var sameCoatWizards = [];
  var sameEyesWizards = [];

  var coat = document.querySelector('.wizard-coat');
  var eyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name = coat-color]');
  var eyeColorInput = document.querySelector('input[name = eyes-color]');
  var fireballColorInput = document.querySelector('input[name = fireball-color]');


  var colorChangeHandler = function (arr) {
    return arr[window.util.getRandomIndex(arr)];
  };

  var updateWizards = function () {

    sameCoatWizards = wizardsCopy.filter(function (it) {
      return it.colorCoat === newColor;
    });
    sameEyesWizards = wizardsCopy.filter(function (it) {
      return it.colorEyes === newColor;
    });

    console.log(sameCoatWizards);
    console.log(sameEyesWizards);
  };

  var changeColor = function (part, parts, partValue) {
    part.style.fill = colorChangeHandler(parts);
    partValue.value = part.style.fill;
    newColor = part.style.fill;
  };

  var changeFireballColor = function () {
    var currentColor = colorChangeHandler(FIREBALLS);
    fireball.style.background = currentColor;
    fireballColorInput.value = currentColor;
  };

  coat.addEventListener('click', function () {
    changeColor(coat, COATS, coatColorInput);
    updateWizards();
  });


  eyes.addEventListener('click', function () {
    changeColor(eyes, EYES, eyeColorInput);
    updateWizards();
  });


  fireball.addEventListener('click', changeFireballColor);

  var WIZARD_QUANTITY = 4;

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successLoadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    wizardsCopy = wizards;
    for (var i = 0; i < WIZARD_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[window.util.getRandomIndex(wizards)]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successLoadHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');

  var successSaveHandler = function () {
    userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), successSaveHandler, errorHandler);
  });
})();
