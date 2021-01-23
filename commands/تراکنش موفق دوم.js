/*CMD
  command: تراکنش موفق دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نام و نام خانوادگی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Successful_Transaction_FullName", data.message);

Bot.runCommand("تراکنش موفق سوم");
