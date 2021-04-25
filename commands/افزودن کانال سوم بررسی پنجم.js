/*CMD
  command: افزودن کانال سوم بررسی پنجم
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

Bot.editMessage("❌کد تایید اعتبار سنجی وارد شده صحیح نمی باشد.", Edit);
