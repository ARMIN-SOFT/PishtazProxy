/*CMD
  command: افزودن تلگرام مسنجر دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌جزئیات تلگرام مسنجر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Telegram_Messenger_Details", data.message);

Bot.runCommand("افزودن تلگرام مسنجر سوم");
