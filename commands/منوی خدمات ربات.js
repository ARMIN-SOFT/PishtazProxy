/*CMD
  command: منوی خدمات ربات
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
text: "🔄منوی خدمات ربات در حال بار گذاری می باشد...",
show_alert: false
})

let Buttons = [
{title: "👤حساب کاربری", command: "حساب کاربری" },
{title: "👮‍♂درخواست همکاری", command: "درخواست همکاری" },
{title: "📥دانلود اپلیکیشن", command: "دانلود اپلیکیشن اصلی" },
{title: "📌تغییرات نسخه", command: "تغییرات نسخه اصلی" },
{title: "👨‍💻پشتیبانی آنلاین", command: "پشتیبانی آنلاین اصلی" },
{title: "🤖درباره پیشتاز پروکسی", command: "درباره پیشتاز پروکسی اصلی" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش منوی خدمات ربات خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
