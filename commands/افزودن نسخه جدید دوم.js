/*CMD
  command: افزودن نسخه جدید دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌تغیرات جدید ربات را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Robot_Changes", data.message, "text");

Bot.runCommand("افزودن نسخه جدید سوم");
