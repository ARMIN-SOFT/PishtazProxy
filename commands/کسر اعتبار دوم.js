/*CMD
  command: کسر اعتبار دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Credit_Deduction_UserID", data.message);

Bot.runCommand("کسر اعتبار سوم");
