/*CMD
  command: ثبت کد دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌کد هدیه جدید را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Gift_Code", data.message);

Bot.runCommand("ثبت کد سوم");
