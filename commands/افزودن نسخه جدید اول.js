/*CMD
  command: افزودن نسخه جدید اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نسخه جدید ربات را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Robot_Version", data.message, "text");

Bot.runCommand("افزودن نسخه جدید دوم");
