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
    wizardNames[i] = firstname[getRandomIndex(firstNames)] + ' ' + surname[getRandomIndex(firstNames)];
  }
  return wizardNames;
};

var createWizardList = function () {
  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    wizards[i] = {
      name: wizardNames[i],
      coatColor: coatColors[getRandomIndex(coatColors)],
      eyesColor: eyesColors[getRandomIndex(eyesColors)]
    };
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

userDialog.classList.remove('hidden');
getRandomName(firstNames, surnames);
createWizardList();

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
