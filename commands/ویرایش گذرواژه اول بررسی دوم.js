/*CMD
  command: ویرایش گذرواژه اول بررسی دوم
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
command: "ویرایش گذرواژه اول بررسی سوم",
run_after: 10
})
