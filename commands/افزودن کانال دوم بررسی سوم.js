/*CMD
  command: افزودن کانال دوم بررسی سوم
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

let DateTime = Bot.getProperty("DateTime");

Bot.editMessage("✔️فرمت نام کاربری کانال وارد شده صحیح می باشد.", Edit);

var Channel_Events = User.getProperty("Channel_Events");

Api.getChatMember({
chat_id: Channel_Events,
user_id: "1231290973",
on_result: "افزودن کانال دوم بررسی ششم"
})
