/*CMD
  command: پاسخ پیامک اصلی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("UserID_SMS_Original", message);

Bot.runCommand("پاسخ پیامک اصلی دوم");
