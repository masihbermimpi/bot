const TelegramBot = require("node-telegram-bot-api");

// Ganti TOKEN_BOT_ANDA dengan token bot Telegram Anda
const token = "7058347107:AAGJUCQy74Y2K0nUIVq_PJpVqQQ49DWg4eM";

// Inisialisasi bot dengan token
const bot = new TelegramBot(token, { polling: true });

// Tangani pesan yang diterima
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // Menangani perintah '/start'
  if (msg.text.toString().toLowerCase() === "/start") {
    bot.sendMessage(chatId, "Halo! Saya adalah bot Telegram.");
  } else {
    // Membalas pesan pengguna
    bot.sendMessage(chatId, "Saya menerima pesan Anda: " + msg.text);
  }
});

// Tangani perintah yang tidak dikenal
bot.onText(/\/unknown/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Perintah tidak dikenal.");
});

console.log("Bot sedang berjalan...");
