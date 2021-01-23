/*CMD
  command: انتقال اعتبار دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Transfer_Credit_UserID", data.message);

Bot.runCommand("انتقال اعتبار سوم");
