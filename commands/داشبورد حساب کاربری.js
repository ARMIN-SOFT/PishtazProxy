/*CMD
  command: داشبورد حساب کاربری
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
text: "🔄داشبورد حساب کاربری در حال بار گذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Buttons = [
{title: "💳اعتبار حساب کاربری", command: "اعتبار حساب کاربری" },
{title: "🔧سرویس پروکسی", command: "سرویس پروکسی" },
{title: "📥دانلود اپلیکیشن", command: "دانلود اپلیکیشن حساب کاربری" },
{title: "📌تغییرات نسخه", command: "تغییرات نسخه حساب کاربری" },
{title: "👨‍💻پشتیبانی آنلاین", command: "پشتیبانی آنلاین حساب کاربری" },
{title: "🤖درباره پیشتاز پروکسی", command: "درباره پیشتاز پروکسی حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش داشبورد حساب کاربری خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
