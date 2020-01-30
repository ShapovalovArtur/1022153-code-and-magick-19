'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var BAR_TEXT = 260;
var BAR_TEXT_GAP = 20;
var BAR_TIME_GAP = 10;
var BAR_COLOR_CURRENT = 'rgba(255, 0, 0, 1)';
var CURRENT_NAME = 'Вы';
var BAR_STEP = BAR_WIDTH + BAR_GAP;
var BAR_LEFT_OFFSET = CLOUD_X + BAR_GAP;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomPercent = function () {
  return Math.floor(Math.random() * 100);
};

var renderRect = function (ctx, names, i, maxTime, times) {
  ctx.fillStyle = (names[i] === CURRENT_NAME) ? BAR_COLOR_CURRENT : 'hsl(240, ' + getRandomPercent() + '%, 50%)';
  ctx.fillRect(BAR_LEFT_OFFSET + i * BAR_STEP, BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (maxTime / times[i]), BAR_WIDTH, MAX_BAR_HEIGHT / (maxTime / times[i]));
};

var renderCloud = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'white';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderBar = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], BAR_LEFT_OFFSET + i * BAR_STEP, BAR_TEXT);
    ctx.fillText(Math.round(times[i]), BAR_LEFT_OFFSET + i * BAR_STEP, (BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (maxTime / times[i])) - BAR_TIME_GAP);
    renderRect(ctx, names, i, maxTime, times);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_TEXT_GAP, CLOUD_Y + (BAR_GAP - BAR_TEXT_GAP));
  ctx.fillText('Список результатов:', CLOUD_X + BAR_TEXT_GAP, CLOUD_Y + BAR_GAP);
  renderBar(ctx, names, times);
};


