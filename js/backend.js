'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  window.save = function (data, successHandler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      successHandler(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);

  };
})();
