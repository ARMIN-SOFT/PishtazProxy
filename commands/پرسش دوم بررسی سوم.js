/*CMD
  command: پرسش دوم بررسی سوم
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

Bot.editMessage("✔️فرمت نام و نام خانوادگی وارد شده صحیح می باشد.", Edit);

Bot.runCommand("پرسش سوم بررسی اول");
