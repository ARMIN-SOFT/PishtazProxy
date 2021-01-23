/*CMD
  command: پاسخ پیامک اصلی
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📬مدیریت گرامی لطفا پاسخ پیامک را ارسال کنید.

<DateTime>
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid;
let UserID = data.user.telegramid;

let Buttons1 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=" + UserID + ") پاسخ پیامک شما با موفقیت ارسال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📮متن پیامک:`" + message + "`", {is_reply: true});

let Buttons2 = [
{title: "🔙بازگشت به منوی قبل", command: "پشتیبانی آنلاین اصلی" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.sendInlineKeyboardToChatWithId(tgid, Buttons2, "📩کاربر گرامی پیامک جدید از سوی پشتیبانی دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📮متن پیامک:`" + message + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
