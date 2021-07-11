/*CMD
  command: پشتیبانی آنلاین حساب کاربری
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
<Sex> <FullName> به بخش پشتیبانی آنلاین خوش آمدید.

<DateTime>
➖➖➖➖➖➖➖➖➖➖➖
👌لطفا پیام خود را بصورت کامل ارسال کنید.
‼️پیام ارسالی می تواند حاوی فایل و تصویر باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let Admin = 592526230;
let UserID = data.user.telegramid;
let FirstName = user.first_name;

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "پشتیبانی آنلاین حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") تیکت پشتیبانی شما با موفقیت در سیستم ثبت و بررسی خواهد شد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n<Sex> [<FullName>](tg://user?id=" + UserID + ") هرگونه پاسخ از همین طریق اطلاع رسانی خواهد شد.\n\n📮متن پیامک:" + message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🗣پاسخ پیامک", command: "پاسخ پیامک حساب کاربری اول" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم"},
];

let FullName = User.getProperty("FullName");

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons2, "📬مدیریت گرامی آرمین اسکندری لحظاتی پیش پیامک جدید دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👤فرستنده:" + FullName + "\n📜متن پیامک:" + message + "\n`" + FullName + "` *-* `" + UserID + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
