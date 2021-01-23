/*CMD
  command: تراکنش موفق اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Successful_Transaction_UserID", data.message);

Bot.runCommand("تراکنش موفق دوم");
