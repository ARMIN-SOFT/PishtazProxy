/*CMD
  command: غیر رسمی اصلی
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
text: "🔄غیر رسمی در حال بارگذاری می باشد...",
show_alert: false
})

let Buttons = [
[{title: "🔌پلاس مسنجر", command: "پلاس مسنجر اصلی" },{title: "🔌گراف مسنجر", command: "گراف مسنجر اصلی" }],
[{title: "🔙بازگشت به منوی قبل", command: "دانلود اپلیکیشن اصلی" }],
[{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons,"🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش غیر رسمی خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
