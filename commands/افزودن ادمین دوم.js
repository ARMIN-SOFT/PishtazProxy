/*CMD
  command: افزودن ادمین دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Add_Admin_UserID", message);

Bot.runCommand("افزودن ادمین سوم");
