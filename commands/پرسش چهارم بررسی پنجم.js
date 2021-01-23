/*CMD
  command: پرسش چهارم بررسی پنجم
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

Bot.editMessage("❌گذرواژه وارد شده صحیح نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️فرمت ارسالی باید حروف لاتین و اعداد و کاراکتر خاص باشد.", Edit);

Bot.runCommand("پرسش چهارم بررسی اول");
