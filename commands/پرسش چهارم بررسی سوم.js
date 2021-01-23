/*CMD
  command: پرسش چهارم بررسی سوم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Edit = User.getProperty("msgid")

Bot.editMessage("✔️فرمت گذرراژه وارد شده صحیح می باشد.", Edit);

Bot.runCommand("پرسش پنجم بررسی اول");
