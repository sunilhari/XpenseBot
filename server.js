'use strict';

require('dotenv').config();

var Telegraf = require('telegraf');
var app = new Telegraf(process.env.ENV_BOT_TOKEN);

app.start(function (ctx) {
  console.log('started:', ctx.from.id);
  return ctx.reply('Welcome!');
});

app.hears('hi', function (ctx) {
  console.log("User:" + ctx.from);
  return ctx.reply('Hey!');
});

app.startPolling();;
