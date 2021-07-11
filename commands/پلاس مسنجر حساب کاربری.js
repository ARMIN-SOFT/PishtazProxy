/*CMD
  command: پلاس مسنجر حساب کاربری
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

var Sex = User.getProperty("Sex");
var FullName = User.getProperty("FullName");

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
text: "🔄پلاس مسنجر در حال بارگذاری می باشد...",
show_alert: false
})

let UserID = data.user.Plusid;
let Plus_Messenger_Link = Bot.getProperty("Plus_Messenger_Link");
let Plus_Messenger_Details = Bot.getProperty("Plus_Messenger_Details");

Bot.runCommand("پیکربندی");
var Message = " " + Sex  + " " + FullName + " به پلاس مسنجر خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n" + Plus_Messenger_Details + " ";

Api.sendDocument({
chat_id: user.telegramid,
document: Plus_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "🔴پلاس مسنجر غیر رسمی است🔴", callback_data: 'پلاس مسنجر غیر رسمی است'}],
[{text: "🔙بازگشت به منوی قبل" , callback_data: 'غیر رسمی حساب کاربری' }],
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'داشبورد حساب کاربری' }],
]}
})
