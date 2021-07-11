/*CMD
  command: بخش جرایم
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
text: "🔄بخش جرایم در حال بار گذاری می باشد...",
show_alert: false
})

var Crimes_UserID = User.getProperty("Crimes_UserID");
var Crimes_FullName = User.getProperty("Crimes_FullName");

if (Crimes_UserID == undefined){
let Buttons1 = [
[{title: "🚫مسدودیت" , command: "مسدودیت اول"},{title: "⭕️رفع مسدودیت" , command: "رفع مسدودیت اول"}],
[{title: "🗑پاکسازی کلی جرایم", command: "پاکسازی کلی جرایم" }],
[{title: "🔙بازگشت به منوی قبل", command: "تنظیمات ربات" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش جرایم خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰جرایم کاربران بدین شرح است:\n\n⚠️جرایمی برای نمایش وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
[{title: "🚫مسدودیت" , command: "مسدودیت اول"},{title: "⭕️رفع مسدودیت" , command: "رفع مسدودیت اول"}],
[{title: "🗑پاکسازی کلی جرایم", command: "پاکسازی کلی جرایم" }],
[{title: "🔙بازگشت به منوی قبل", command: "تنظیمات ربات" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons2, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش جرایم خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰جرایم کاربران بدین شرح است:\n\n👤کاربر:`<Crimes_FullName>` - `<Crimes_UserID>`\n⛔️جرم:<Crimes_Mass>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
