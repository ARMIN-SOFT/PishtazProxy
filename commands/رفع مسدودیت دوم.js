/*CMD
  command: رفع مسدودیت دوم
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
text: "🔄درخواست در حال پردازش می باشد...",
show_alert: false
})

let Crimes_UserID = User.getProperty("Crimes_UserID");
let Crimes_FullName = User.getProperty("Crimes_FullName");
let Crimes_Mass = User.getProperty("Crimes_Mass");

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "رفع مسدودیت اول" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "❌مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") بنا به درخواست شما کاربر [" + Crimes_FullName + "](tg://user?id=" + Crimes_UserID + ") رفع مسدودیت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

User.setProperty("Crimes_UserID", "", false);
User.setProperty("Crimes_FullName", "", false);
User.setProperty("Crimes_Mass", "", false);

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboardToChatWithId(Crimes_UserID, Buttons2, "⭕️آقای/خانم [" + Crimes_FullName + "](tg://user?id=" + Crimes_UserID + ") لحظاتی پیش حساب کاربری شما توسط مدیریت رفع مسدودیت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
