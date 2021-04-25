/*CMD
  command: ارسال پیامک همگانی سوم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var All_SMS = Bot.getProperty("All_SMS");

Bot.sendMessage("📩آقای/خانم لحظاتی پیش پیامکی از سوی مدیریت دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + All_SMS + " ");
