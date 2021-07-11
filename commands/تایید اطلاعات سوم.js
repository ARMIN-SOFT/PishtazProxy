/*CMD
  command: تایید اطلاعات سوم
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

var Edit = User.getProperty("msgid");

Bot.runCommand("پیکربندی");
Bot.editMessage("✔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") اطلاعات حساب با موفقیت در سیستم ثبت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات کاربری بدین شرح است:\n\n👤نام و نام خانوادگی:<FullName>\n➖➖➖➖➖➖➖➖➖➖\n⏳حساب کاربری تا لحظاتی دیگر فعال می گردد...", Edit);

let Buttons1 = [
{title: "🚪ورود حساب", command: "ورود حساب" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") حساب کاربری با موفقیت فعال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Admin = 592526230;

let Buttons2 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت اول" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons2, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش اطلاعات جدیدی در سیستم ثبت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👤نام و نام خانوادگی:`<FullName>`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
