/*CMD
  command: افزودن کانال دوم بررسی دهم
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

Bot.editMessage("❌ربات در کانال وارد شده ادمین نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️ربات باید ادمین کانال باشد.", Edit);

Bot.runCommand("افزودن کانال دوم بررسی اول");
