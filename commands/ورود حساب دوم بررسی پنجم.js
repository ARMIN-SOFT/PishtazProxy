/*CMD
  command: ورود حساب دوم بررسی پنجم
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

Bot.editMessage("❌گذرواژه وارد شده صحیح نمی باشد.", Edit);

Bot.runCommand("ورود حساب دوم بررسی اول");
