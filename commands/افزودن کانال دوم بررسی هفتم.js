/*CMD
  command: افزودن کانال دوم بررسی هفتم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال دوم بررسی هشتم",
run_after: 5
})
