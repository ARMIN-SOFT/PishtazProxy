/*CMD
  command: مسدودیت سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نام و نام خانوادگی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Crimes_FullName", message);

Bot.runCommand("مسدودیت چهارم");
