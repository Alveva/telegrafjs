const { Telegraf } = require('telegraf')

const bot = new Telegraf('Bot Token')

bot.start(ctx => ctx.reply(`Hello ${ctx.from.first_name}`))

bot.launch()