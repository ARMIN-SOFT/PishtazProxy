/*CMD
  command: پاسخ پیامک حساب کاربری سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌متن پیامک را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

let UserID = data.user.telegramid;

var UserID_SMS_Account = Bot.getProperty("UserID_SMS_Account");

var FullName_SMS_Account = Bot.getProperty("FullName_SMS_Account");

let Buttons1 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=" + UserID + ") پاسخ پیامک شما با موفقیت به کاربر [" + FullName_SMS_Account + "](tg://user?id=" + UserID_SMS_Account + ") ارسال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📮متن پیامک:`" + message + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.", {is_reply: true});

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.sendInlineKeyboardToChatWithId(UserID_SMS_Account, Buttons2, "📩آقای/خانم [" + FullName_SMS_Account + "](tg://user?id=" + UserID_SMS_Account + ") پیامک جدید از سوی پشتیبانی دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📮متن پیامک:`" + message + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
