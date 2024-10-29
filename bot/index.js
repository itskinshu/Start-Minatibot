const { Telegraf, Markup } = require("telegraf");
require('dotenv').config();
const TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://firefarmer.netlify.app";
const community_link = "https://t.me/firefarmer";
const discussion_link = "https://t.me/firefarmer";
bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
ctx.replyWithMarkdown(`*Hey, ${userName}🫰!*
*Welcome to FireFarm* 🎉

Tap the screen, collect coins 🌟, 
pump up your passive income. 🚀

🌟 Grab Daily Rewards 
🎰 Spin the Fortune Wheel
🧟 Share with your buddies 
🚀 Upgrade Your Rank 


`, {
    reply_markup: {
        inline_keyboard: [
            [{ text: "✌️ Join our Community ✌️", url: community_link }],
            [{ text: "🐥 How To Earn  🐥", callback_data: 'help' }],
            [{ text: "🕹 Oepn App 🎮", web_app: { url: urlSent } }]
        ]
    }
});
});

bot.action('help', (ctx) => {
    const urlSent = `${web_link}?ref=${ctx.from.id}`;
    ctx.replyWithMarkdown(`*What's the goal?*
Earn Tokens, upgrade Levels, Refer To Friends, and
Do Tasks ! AirDrop is coming soon...👀

*🔵Earn*
Tap the screen to mine coins.

*📈Profit per hour*
Buy Cards And Earn for many hours 
while you are not in the game. 🚀

*👥Friends*
Invite friends to Grow together! 
You will get Bonuses and 10% of Earnings.

*⚡️Compete*
Compete with players and win coins!

*📋Tasks*
Complete simple tasks every day 
and receive rewards 🫰!
`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Join our Community", url: community_link }],
                [{ text: "❄️ Join our Discussion ❄️", url: discussion_link }],
                [{ text: "✨ Start now !", web_app: { url: urlSent } }]
            ]
        }
    });
});

  
bot.use((ctx, next) => {
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
ctx.replyWithMarkdown(`*Hey, ${userName}🫰!*
*Welcome to FireFarm* 🎉

Tap the screen, collect coins 🌟, 
pump up your passive income. 🚀

🌟 Grab Daily Rewards 
🎰 Spin the Fortune Wheel
🧟 Share with your buddies 
🚀 Upgrade Your Rank 


`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: " Join our Community ", url: community_link }],
                [{ text: "🐥 How To Earn  🐥", callback_data: 'help' }],
                [{ text: "🕹 Open App 🎮", web_app: { url: web_link } }]
            ]
        }
    });
    return next();
});

bot.on('text', (ctx) => {
    // Handle text messages here
});

bot.launch().then(() => {
    console.log('Bot started successfully');
}).catch((err) => {
    console.error('Error starting bot:', err);
});
  
app.listen(3005, () => {
    console.log("server is me and now running");
});
