/*CMD
  command: افزودن کانال دوم بررسی دوم
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال دوم بررسی سوم",
run_after: 5
})
