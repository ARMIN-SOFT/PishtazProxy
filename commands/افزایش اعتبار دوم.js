/*CMD
  command: افزایش اعتبار دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Increase_Credit_UserID", data.message);

Bot.runCommand("افزایش اعتبار سوم");
