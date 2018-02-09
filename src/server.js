'use strict'

require('dotenv').config()

const Telegraf = require('telegraf');
const app = new Telegraf(process.env.ENV_BOT_TOKEN);

app.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!')
})

app.hears('hi', ctx => {
  console.log("User:"+ctx.from);
  return ctx.reply(JSON.stringify(ctx.from));
});

app.startPolling();;