'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var MageNames = [];
var mages = [];

var getRandomIndex = function (arr) {
  return Math.floor(Math.random() * (arr.length - 1));
};

var getRandomName = function (firstname, surname) {
  for (var i = 0; i < firstNames.length; i++) {
    MageNames[i] = firstname[getRandomIndex(firstNames)] + surname[getRandomIndex(firstNames)];
  }
  return MageNames;
};

var createMagesList = function () {
  for (var i = 0; i < MageNames.length; i++) {
    mages[i] = {
      name: MageNames[i],
      coatColor: coatColors[getRandomIndex(coatColors)],
      eyesColor: eyesColors[getRandomIndex(eyesColors)]
    };
  }
};

getRandomName(firstNames, surnames);
createMagesList();


