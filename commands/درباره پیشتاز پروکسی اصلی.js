/*CMD
  command: درباره پیشتاز پروکسی اصلی
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
text: "🔄درباره پیشتاز پروکسی در حال بار گذاری می باشد...",
show_alert: false
})

let Buttons = [
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش درباره پیشتاز پروکسی خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n✔️این ربات توسط نرم افزاری و امنیتی آمبرلا طراحی شده است.\n\n👌هدف از طراحی این ربات عبور از محدودیت فیلترینگ می باشد.\n➖➖➖➖➖➖➖➖➖➖\n🔰دست اندرکاران این ربات بدین شرح است:\n\n👨‍💻توسعه دهنده:[آرمین اسکندری](https://T.Me/ARMIN_SOFT)\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.", { disable_web_page_preview: true });
