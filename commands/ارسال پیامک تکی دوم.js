/*CMD
  command: ارسال پیامک تکی دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Single_SMS_UserID", message);

Bot.runCommand("ارسال پیامک تکی سوم");
