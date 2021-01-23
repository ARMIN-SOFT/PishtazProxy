/*CMD
  command: پرسش پنجم بررسی پنجم
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

Bot.editMessage("❌شماره موبایل وارد شده صحیح نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️فرمت ارسالی باید اعداد فارسی باشد.", Edit);

Bot.runCommand("پرسش پنجم بررسی اول");
