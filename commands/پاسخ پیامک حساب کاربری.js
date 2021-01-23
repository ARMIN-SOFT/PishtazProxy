/*CMD
  command: پاسخ پیامک حساب کاربری
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📬مدیریت گرامی <FullName> لطفا پاسخ پیامک را ارسال کنید.

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
{title: "🔙بازگشت به منوی قبل", command: "پشتیبانی آنلاین حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.sendInlineKeyboardToChatWithId(tgid, Buttons2, "📩آقای/خانم پیامک جدید از سوی پشتیبانی دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📮متن پیامک:`" + message + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
