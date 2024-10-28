
# Telegram Bot - Fire Farm

This is a Telegram bot for the Fire Farm game.

## Deployment

Choose one of the following platforms to deploy the bot:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/Start-Farm)

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/yourusername/Start-Farm&branch=main&name=telegram-bot)

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   - `BOT_TOKEN`: Your Telegram Bot Token
   - `WEBHOOK_URL`: The URL where your bot will receive updates (for production)
4. Run the bot:
   - For development: `NODE_ENV=development node bot/index.js`
   - For production: Set up a webhook URL and run `node bot/index.js`

## Features

- Welcome message with inline keyboard
- Help command with game instructions
- Integration with web app
