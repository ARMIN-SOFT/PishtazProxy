/*CMD
  command: غیر رسمی حساب کاربری
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
text: "🔄غیر رسمی در حال بارگذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Buttons = [
[{title: "🔌پلاس مسنجر", command: "پلاس مسنجر حساب کاربری" },{title: "🔌گراف مسنجر", command: "گراف مسنجر حساب کاربری" }],
[{title: "🔙بازگشت به منوی قبل", command: "دانلود اپلیکیشن حساب کاربری" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons,"<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش غیر رسمی خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
