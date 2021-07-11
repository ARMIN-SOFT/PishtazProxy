/*CMD
  command: تلگرام ایکس مسنجر اصلی
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
let UserID = data.user.Telegram_Xid;

let DateTime = Bot.getProperty("DateTime");

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
text: "🔄تلگرام ایکس مسنجر در حال بارگذاری می باشد...",
show_alert: false
})

let Telegram_X_Messenger_Link = Bot.getProperty("Telegram_X_Messenger_Link");
let Telegram_X_Messenger_Details = Bot.getProperty("Telegram_X_Messenger_Details");

Bot.runCommand("پیکربندی");
var Message = "🌹کاربر گرامی " + FirstName + " به تلگرام ایکس مسنجر خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n" + Telegram_X_Messenger_Details + " ";

Api.sendDocument({
chat_id: user.telegramid,
document: Telegram_X_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "🟢تلگرام ایکس مسنجر رسمی است🟢", callback_data: 'تلگرام ایکس مسنجر رسمی است'}],
[{text: "🔙بازگشت به منوی قبل" , callback_data: 'رسمی اصلی' }],
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'منوی خدمات ربات' }],
]}
})
