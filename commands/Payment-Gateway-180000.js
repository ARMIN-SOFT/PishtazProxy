/*CMD
  command: Payment-Gateway-180000
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let UserID = data.user.telegramid;

let FullName = User.getProperty("FullName");

let Buttons1 =
[
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") شما لحظاتی پیش وارد درگاه پرداخت سپال برای شارژ اعتبار به مبلغ ۱۲۰،۰۰۰ تومان شدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Admin = 592526230;
let Payment_Code = data.user.id;

let Buttons2 = [
{title: "✅تراکنش موفق", command: "تراکنش موفق اول" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
]

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons2, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش کاربر [<FullName>](tg://user?id=" + UserID + ") جهت شارژ اعتبار به مبلغ ۱۸۰،۰۰۰ تومان وارد درگاه پرداخت سپال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔮شناسه پرداخت:`" + Payment_Code + "`\n`" + FullName + "` *-* `" + UserID + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
