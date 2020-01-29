'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var BAR_TEXT = CLOUD_Y + 250;
var BAR_TEXT_GAP = 20;
var BAR_TIME_GAP = 10;

var times = [2725, 4025, 1244, 1339];
var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < 4; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + i * (BAR_GAP + BAR_WIDTH), BAR_TEXT);
    ctx.fillText(times[i], CLOUD_X + BAR_GAP + i * (BAR_GAP + BAR_WIDTH), (BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (maxTime / times[i])) - BAR_TIME_GAP);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(CLOUD_X + BAR_GAP + i * (BAR_GAP + BAR_WIDTH), BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (4025 / times[i]), BAR_WIDTH, MAX_BAR_HEIGHT / (maxTime / times[i]));
  }
};


