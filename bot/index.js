const { Telegraf, Markup } = require("telegraf");
require('dotenv').config();
const TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://minati-app.netlify.app";
const community_link = "https://t.me/Minativerseofficial";
const discussion_link = "https://x.com/minatifi";
bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
ctx.replyWithMarkdown(`*Hey, ${userName}🫰!*Welcome to Minativerse! 🌟 

Dive into the world of Minati, where your crypto journey expands beyond boundaries! 🌍 With our Minati debit card, metaverse platform, Minatibox wallet, and Tap&Earn Game, there’s always something exciting happening.

Join our community, complete quests, and earn fantastic rewards while exploring endless possibilities. 

Got friends who love innovation? 👥 Invite them to explore Minati together! More friends = More adventures = Greater rewards! 🎉 

*🚀 Powered by Minati* `, {
    reply_markup: {
        inline_keyboard: [
            [{ text: " Join our Community ", url: community_link }],
            [{ text: " Our Twitter 💫", url: discussion_link }],
            [{ text: "🎮 Open App 🎮", web_app: { url: urlSent } }]
        ]
    }
});
});


bot.launch().then(() => {
    console.log('Bot started successfully');
}).catch((err) => {
    console.error('Error starting bot:', err);
});
  
app.listen(3005, () => {
    console.log("server is me and now running");
});
