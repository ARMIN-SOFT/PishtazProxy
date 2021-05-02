/*CMD
  command: پشتیبانی آنلاین اصلی
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🌹کاربر گرامی به بخش پشتیبانی آنلاین خوش آمدید.

<DateTime>
➖➖➖➖➖➖➖➖➖➖➖
👌لطفا پیام خود را بصورت کامل ارسال کنید.
⚠️نکته:پیام ارسالی می تواند حاوی فایل و تصویر باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Admin = 592526230;
let UserID = data.user.telegramid;
let FirstName = user.first_name;

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "پشتیبانی آنلاین اصلی" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "📬کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") تیکت پشتیبانی شما با موفقیت در سیستم ثبت و بررسی خواهد شد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n‼️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") هرگونه پاسخ از همین طریق اطلاع رسانی خواهد شد.\n\n📮متن پیامک:" + message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🗣پاسخ پیامک", command: "پاسخ پیامک اصلی اول" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم"},
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons2, "📬مدیریت گرامی آرمین اسکندری لحظاتی پیش پیامک جدید دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👤فرستنده:*" + FirstName + "*\n📜متن پیامک:*" + message + "*\n`" + FirstName + "` *-* `" + UserID + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
