/*CMD
  command: ورود حساب اول بررسی دوم
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "ورود حساب اول بررسی سوم",
run_after: 10
})
