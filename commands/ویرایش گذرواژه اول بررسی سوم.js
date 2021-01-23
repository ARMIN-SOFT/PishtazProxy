/*CMD
  command: ویرایش گذرواژه اول بررسی سوم
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

Bot.editMessage("✔️گذرراژه فعلی وارد شده صحیح می باشد.", Edit);

Bot.runCommand("ویرایش گذرواژه دوم بررسی اول");
