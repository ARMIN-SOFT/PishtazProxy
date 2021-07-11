/*CMD
  command: تنظیمات ربات
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let Add_Admin_UserID = User.getProperty("Add_Admin_UserID");

if(chat.chatid==Add_Admin_UserID){
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄تنظیمات ربات در حال بار گذاری می باشد...",
show_alert: false
})

let Buttons = [
{title: "💳بخش اعتبار حساب کاربری", command: "بخش اعتبار حساب کاربری" },
{title: "🔖بخش کد هدیه", command: "بخش کد هدیه" },
{title: "👥بخش ادمین", command: "بخش ادمین" },
{title: "⛔️بخش جرایم", command: "بخش جرایم" },
{title: "📨بخش ارسال پیامک", command: "بخش ارسال پیامک" },
{title: "📱بخش اپلیکیشن", command: "بخش اپلیکیشن" },
{title: "🔃بخش بروز رسانی", command: "بخش بروز رسانی" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به تنظیمات ربات خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
