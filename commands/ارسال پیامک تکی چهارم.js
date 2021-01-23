/*CMD
  command: ارسال پیامک تکی چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌متن پیامک را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let Single_SMS_UserID = User.getProperty("Single_SMS_UserID");

let Single_SMS_FullName = User.getProperty("Single_SMS_FullName");

let Message = data.message;

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "بخش ارسال پیامک" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") پیامک شما به کاربر [" + Single_SMS_FullName + "](tg://user?id=" + Single_SMS_UserID + ") با موفقیت ارسال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + Message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Single_SMS_UserID, Buttons2, "📩آقای/خانم [" + Single_SMS_FullName + "](tg://user?id=" + Single_SMS_UserID + ") لحظاتی پیش پیامکی از سوی مدیریت دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + Message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
