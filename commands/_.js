/*CMD
  command: *
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
let FullName = User.getProperty("FullName");

if (FullName == undefined){
let Buttons1 = [
{title: "👨‍💻پشتیبانی آنلاین", command: "پشتیبانی آنلاین اصلی" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش عبارت وارد شده معتبر نمی باشد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📝عبارت وارد شده:*" + message + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else{
let Buttons2 = [
{title: "👨‍💻پشتیبانی آنلاین", command: "پشتیبانی آنلاین حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons2, "<Sex> [<FullName>](tg://user?id=" + UserID + ") با عرض پوزش عبارت وارد شده معتبر نمی باشد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📝عبارت وارد شده:*" + message + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}
