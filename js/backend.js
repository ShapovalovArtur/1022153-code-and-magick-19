'use strict';

(function () {
  var RESPONSE_TYPE = 'json';
  var SUCCESS_STATUS = 200;
  var SERVER_TIMEOUT = 10000;
  var POST_URL = 'https://javascript.pages.academy/code-and-magick';
  var GET_URL = 'https://javascript.pages.academy/code-and-magick/data';
  var SAVE_METHOD = 'POST';
  var LOAD_METHOD = 'GET';

  var save = function (data, successHandler, errorHandler) {
    var URL = POST_URL;
    var xhr = new XMLHttpRequest();
    xhr.responseType = RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        successHandler(xhr.response);
      } else {
        errorHandler('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      errorHandler('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      errorHandler('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = SERVER_TIMEOUT;
    xhr.open(SAVE_METHOD, URL);
    xhr.send(data);

  };

  var load = function (successHandler, errorHandler) {
    var URL = GET_URL;
    var xhr = new XMLHttpRequest();
    xhr.responseType = RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        successHandler(xhr.response);
      } else {
        errorHandler('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      errorHandler('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      errorHandler('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = SERVER_TIMEOUT;
    xhr.open(LOAD_METHOD, URL);
    xhr.send();

  };

  window.backend = {
    save: save,
    load: load
  };

})();
