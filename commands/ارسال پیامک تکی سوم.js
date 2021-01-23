/*CMD
  command: ارسال پیامک تکی سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نام و نام خانوادگی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Single_SMS_FullName", message);

Bot.runCommand("ارسال پیامک تکی چهارم");
