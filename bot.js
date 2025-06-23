require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id; // Get the user's Telegram ID

  const message = `Hey, @${msg.from.username}! Welcome to TokenTap!\n\nTap into a world of rewards and watch your tokens grow.\n\nTokenTap is a next-gen platform where users can earn tokens through airdrops, referrals, and community engagement. The majority of TokenTap (TAP) distribution happens right here, with users like you!\n\nGot friends, family, or teammates?\nInvite them in!\nMore friends, more tokens, more fun.\n\n💰 Start earning now and climb the leaderboard!`;
  
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '👋 Start now!', web_app: { url: 'https://tap-empire-web.lovable.app' } }
        ],
        [
          { text: '💪 Join community', url: 'https://t.me/TokenTapCommunity' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
