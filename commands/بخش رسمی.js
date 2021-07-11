/*CMD
  command: بخش رسمی
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
text: "🔄بخش رسمی در حال بار گذاری می باشد...",
show_alert: false
})

let Buttons = [
[{title: "🔌تلگرام مسنجر", command: "بخش تلگرام مسنجر" },{title: "🔌تلگرام ایکس مسنجر", command: "بخش تلگرام ایکس مسنجر" }],
[{title: "🔙بازگشت به منوی قبل", command: "بخش اپلیکیشن" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش رسمی خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
