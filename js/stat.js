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
  var playerScore = '2725';
  var barX = CLOUD_X + 50;
  var barHeight = MAX_BAR_HEIGHT / (4025 / playerScore);
  var barY = BAR_TEXT - 20 - barHeight;
  var barScore = barY - 10;

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX, BAR_TEXT);
  ctx.fillText(playerScore, barX, barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX + BAR_GAP + BAR_WIDTH, BAR_TEXT);
  ctx.fillText(playerScore, barX + BAR_GAP + BAR_WIDTH, barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX + BAR_GAP + BAR_WIDTH, barY, BAR_WIDTH, barHeight);

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX + 2 * (BAR_GAP + BAR_WIDTH), BAR_TEXT);
  ctx.fillText(playerScore, barX + 2 * (BAR_GAP + BAR_WIDTH), barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX + 2 *(BAR_GAP + BAR_WIDTH), barY, BAR_WIDTH, barHeight);

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, barX + 3 * (BAR_GAP + BAR_WIDTH), BAR_TEXT);
  ctx.fillText(playerScore, barX + 3 * (BAR_GAP + BAR_WIDTH), barScore);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(barX + 3 * (BAR_GAP + BAR_WIDTH), barY, BAR_WIDTH, barHeight);

};


