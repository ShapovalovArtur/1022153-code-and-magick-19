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

  var playerIndex = 0;
  var playerName = 'Вы';
  var playerTime = 1725;
  var barX = CLOUD_X + 50;
  var barHeight = MAX_BAR_HEIGHT / (4025 / playerTime);
  var barY = BAR_TEXT - BAR_TEXT_GAP - barHeight;
  var barScore = BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (4025 / playerTime) - BAR_TIME_GAP;

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX, BAR_TEXT);
  ctx.fillText(playerTime, barX, barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX + 0 * (BAR_GAP + BAR_WIDTH), BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (4025 / playerTime), BAR_WIDTH, MAX_BAR_HEIGHT / (4025 / playerTime));

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX + BAR_GAP + BAR_WIDTH, BAR_TEXT);
  ctx.fillText(playerTime, barX + BAR_GAP + BAR_WIDTH, barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX + 1 * (BAR_GAP + BAR_WIDTH), BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (4025 / playerTime), BAR_WIDTH, MAX_BAR_HEIGHT / (4025 / playerTime));

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX + 2 * (BAR_GAP + BAR_WIDTH), BAR_TEXT);
  ctx.fillText(playerTime, barX + 2 * (BAR_GAP + BAR_WIDTH), barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX + 2 * (BAR_GAP + BAR_WIDTH), BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (4025 / playerTime), BAR_WIDTH, MAX_BAR_HEIGHT / (4025 / playerTime));

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX + 3 * (BAR_GAP + BAR_WIDTH), BAR_TEXT);
  ctx.fillText(playerTime, barX + 3 * (BAR_GAP + BAR_WIDTH), barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX + 3 * (BAR_GAP + BAR_WIDTH), BAR_TEXT - BAR_TEXT_GAP - MAX_BAR_HEIGHT / (4025 / playerTime), BAR_WIDTH, MAX_BAR_HEIGHT / (4025 / playerTime));

};


