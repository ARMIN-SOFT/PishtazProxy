/*CMD
  command: خاموش کردن ربات
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

Bot.setProperty("Robot", "❌خاموش");

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
text: "🔄درخواست شما در حال پردازش می باشد...",
show_alert: false
})

let Buttons = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "❌مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") بنا به درخواست شما ربات با موفقیت خاموش گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
