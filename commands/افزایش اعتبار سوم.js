/*CMD
  command: افزایش اعتبار سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نام و نام خانوادگی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Increase_Credit_FullName", data.message);

Bot.runCommand("افزایش اعتبار چهارم");
