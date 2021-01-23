/*CMD
  command: ویرایش گذرواژه اول بررسی پنجم
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

Bot.editMessage("❌گذرواژه فعلی وارد شده صحیح نمی باشد.", Edit);

Bot.runCommand("ویرایش گذرواژه اول بررسی اول");
