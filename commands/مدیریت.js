/*CMD
  command: مدیریت
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
let Buttons = [
[{title: "✅روشن کردن ربات" , command: "روشن کردن ربات"},{title: "❌خاموش کردن ربات" , command: "خاموش کردن ربات"}],
[{title: "⚙تنظیمات ربات" , command: "تنظیمات ربات"}],
[{title: "📊آمار کلی ربات" , command: "آمار کلی ربات"}],
[{title: "🚷خروج مدیریت ربات" , command: "خروج مدیریت ربات"}],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش مدیریت خوش آمدید.\n\n<DateTime>\n\n🚨وضعیت ربات:<Robot>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
