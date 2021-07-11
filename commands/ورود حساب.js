/*CMD
  command: ورود حساب
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

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄ورود حساب در حال بار گذاری می باشد...",
show_alert: false
})

Bot.runCommand("پیکربندی");
Bot.sendMessage("🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش ورود حساب خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:ورود به حساب بصورت خودکار انجام می شود.");

Bot.runCommand('ورود حساب اول بررسی اول');

