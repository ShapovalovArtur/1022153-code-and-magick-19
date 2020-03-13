'use strict';

(function () {
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

  window.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  });

  var form = userDialog.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function (response) {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

})();
