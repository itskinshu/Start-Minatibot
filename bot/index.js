
const { Telegraf, Markup } = require("telegraf");
require('dotenv').config();
const express = require("express");

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) throw new Error('BOT_TOKEN must be provided!');

const bot = new Telegraf(TOKEN);
const app = express();

const web_link = "https://firefarmer.netlify.app";
const community_link = "https://t.me/firefarmer";
const discussion_link = "https://t.me/firefarmer";

// Bot commands and actions remain the same
bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName} 👋!*

*Welcome to Fire Farm* 🎉
*Start Your Journey and Earn $FLAME* 🔥

🗓 Grab Daily Rewards
📈 Increase Your Mining Speed
🫂 Invite Your Friends
🔝 Upgrade Your Rank


[✨ *Join Our Community* ✨](https://t.me/firefarmer)
[🔥FIRE FARM🔥](https://t.me/firefarmer)
`, {
    reply_markup: {
        inline_keyboard: [
            [{ text: "✌️ Join our Community ✌️", url: community_link }],
            [{ text: "☃️ How To Earn  ☃️", callback_data: 'help' }],
            [{ text: "🕹 PLAY 🎮", web_app: { url: urlSent } }]
        ]
    }
});
});

bot.action('help', (ctx) => {
    const urlSent = `${web_link}?ref=${ctx.from.id}`;
    ctx.reply('What's the goal?\n\nEarn Tokens, upgrade Skills, Refer To Friena, and invest! AirDrop is coming soon...👀\n\n🔵Earn\nTap the screen to mine coins. You can never have too many!\n\n🔝Improve\nUpgrade your Skills and it's business to increase passive income and boost your level!\n\n📈Profit per hour\nEarn for many hours while you are not in the game.\n\n👥Friends\nInvite friends to Grow empires together! You will earn bonuses for invited friends and their achievements in the game.\n\n⚡️Negotiations\nCompete with players and win coins!\n\n📋Tasks\nComplete simple tasks every day and receive rewards!\n\n🏛Stock Exchange\nInvest your coins in various funds to achieve super returns! However, remember that you can either make a profit or lose your deposit.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "📌 Join our Community 📌", url: community_link }],
                [{ text: "❄️ Join our Discussion ❄️", url: discussion_link }],
                [{ text: "✨ Start now!", web_app: { url: urlSent } }]
            ]
        }
    });
});

// Webhook handling
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, this is your Telegram bot server!');
});

app.post(`/webhook/${TOKEN}`, (req, res) => {
    bot.handleUpdate(req.body, res);
});

// For local development
if (process.env.NODE_ENV === 'development') {
    bot.launch().then(() => {
        console.log('Bot started in development mode');
    }).catch((err) => {
        console.error('Error starting bot:', err);
    });
} else {
    // For production: use webhook
    bot.telegram.setWebhook(`${process.env.WEBHOOK_URL}/webhook/${TOKEN}`);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


} else {
    // For production: use webhook
    bot.telegram.setWebhook(`${process.env.WEBHOOK_URL}/webhook/${TOKEN}`);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
