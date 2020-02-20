'use strict';

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardNames = [];
var wizards = [];

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomIndex = function (arr) {
  return Math.floor(Math.random() * (arr.length - 1));
};

var getRandomName = function (firstname, surname) {
  for (var i = 0; i < firstNames.length; i++) {
    wizardNames.push(firstname[getRandomIndex(firstNames)] + ' ' + surname[getRandomIndex(firstNames)]);
  }
  return wizardNames;
};

var createWizardList = function () {
  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    wizards.push({
      name: wizardNames[i],
      coatColor: coatColors[getRandomIndex(coatColors)],
      eyesColor: eyesColors[getRandomIndex(eyesColors)]
    });
  }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var WIZARD_QUANTITY = 4;

getRandomName(firstNames, surnames);
createWizardList();

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');
var setupTextInput = setup.querySelector('.setup-user-name');

var setupEscKeyHandler = function (evt) {
  if (evt.key === 'Escape') {
    setup.classList.add('hidden');
  }
};
var openSetupMenu = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', setupEscKeyHandler);
  setupTextInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', setupEscKeyHandler);
  });
  setupTextInput.addEventListener('blur', function () {
    document.addEventListener('keydown', setupEscKeyHandler);
  });

};

var closeSetupMenu = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', setupEscKeyHandler);
};

setupOpenButton.addEventListener('click', function () {
  openSetupMenu();
});

setupCloseButton.addEventListener('click', function () {
  closeSetupMenu();
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeSetupMenu();
  }
});

setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openSetupMenu();
  }
});


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

var coat = document.querySelector('.wizard-coat');
var eyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var inputCoat = document.querySelector('input[name = coat-color]');
var inputEyes = document.querySelector('input[name = eyes-color]');
var inputFireball = document.querySelector('input[name = fireball-color]');

var colorChangeHandler = function (arr) {
  return arr[getRandomIndex(arr)];
};


coat.addEventListener('click', function () {
  coat.style.fill = colorChangeHandler(COATS);
  inputCoat.value = coat.style.fill;
});


eyes.addEventListener('click', function () {
  eyes.style.fill = colorChangeHandler(EYES);
  inputEyes.value = eyes.style.fill;
});


fireball.addEventListener('click', function () {
  var currentColor = colorChangeHandler(FIREBALLS);
  fireball.style.background = currentColor;
  inputFireball.value = currentColor;
});
