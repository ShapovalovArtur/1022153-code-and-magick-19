'use strict';

(function () {

  window.save = function (data, successHandler) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      successHandler(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);

  };

  window.load = function (successHandler, errorHandler) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      successHandler(xhr.response);
    });

    xhr.send();

  };

})();
