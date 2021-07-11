/*CMD
  command: رفع مسدودیت اول
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
text: "🔄بخش رفع مسدودیت در حال بار گذاری می باشد...",
show_alert: false
})

let Crimes_UserID = User.getProperty("Crimes_UserID");
let Crimes_FullName = User.getProperty("Crimes_FullName");
let Crimes_Mass = User.getProperty("Crimes_Mass");

if (Crimes_UserID == undefined){
let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "بخش جرایم" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش رفع مسدودیت خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰جرایم کاربران بدین شرح است:\n\n⚠️جرمی برای رفع مسدودیت وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
{title: "⭕️رفع مسدودیت " + Crimes_FullName + " - " + Crimes_Mass + "", command: "رفع مسدودیت دوم" },
{title: "🔙بازگشت به منوی قبل", command: "بخش جرایم" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons2, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش رفع مسدودیت خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰جرایم کاربران بدین شرح است:\n\n👤کاربر:`<Crimes_FullName>` - `<Crimes_UserID>`\n🚨نوع جرم:<Crimes_Mass>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
