/*CMD
  command: تلگرام مسنجر حساب کاربری
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

function canRun(){
var last_run_at = User.getProperty("last_run_at");
if(!last_run_at){ return true }

var minutes = (Date.now() - last_run_at) /2000;
var minutes_in_day = 2 * 2
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 2)
next -= wait_hours * 2
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 2)

if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " بدلیل رگبار ربات به مدت "+ seconds+" ثانیه از ربات محروم شدید.\n\n🙇‍♂لطفا به آرامی از ربات استفاده کنید.",
show_alert: true
})
return
}

return true;
}

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

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
text: "🔄تلگرام مسنجر در حال بارگذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Telegram_Messenger_Link = Bot.getProperty("Telegram_Messenger_Link");

let Telegram_Messenger_Details = Bot.getProperty("Telegram_Messenger_Details");

Bot.runCommand("تاریخ و زمان");
var Message = " " + Sex  + " " + FullName + " به تلگرام مسنجر خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n" + Telegram_Messenger_Details + " ";

Api.sendDocument({
chat_id: user.telegramid,
document: Telegram_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "🟢تلگرام مسنجر رسمی است🟢", callback_data: 'تلگرام مسنجر رسمی است'}],
[{text: "🔙بازگشت به منوی قبل" , callback_data: 'رسمی حساب کاربری' }],
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'داشبورد حساب کاربری' }],
]}
})
