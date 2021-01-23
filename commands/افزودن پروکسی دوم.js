/*CMD
  command: افزودن پروکسی دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌پروکسی نوع اول را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("First_Type", data.message);

Bot.runCommand("افزودن پروکسی سوم");
