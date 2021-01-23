/*CMD
  command: کسر اعتبار سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نام و نام خانوادگی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Credit_Deduction_FullName", data.message);

Bot.runCommand("کسر اعتبار چهارم");
