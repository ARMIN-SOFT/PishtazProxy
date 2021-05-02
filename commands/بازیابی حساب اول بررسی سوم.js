/*CMD
  command: بازیابی حساب اول بررسی سوم
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

var Edit = User.getProperty("msgid")

Bot.editMessage("✔️یک مورد در دیتابیس یافت گردید.", Edit);

let string =
User.getProperty("PhoneNumber"); 
(data.message==string)

let Index = Number(string.length)
let Character1 = string.charAt(0)
let Character2 = string.charAt(1)
let Character3 = string.charAt(2)
let Character7 = string.charAt(3)
let Character6 = string.charAt(Index-1)
let Character5 = string.charAt(Index-2)
let Character4 = string.charAt(Index-3)
let Character8 = string.charAt(Index-4)

let Result = Character1+Character2+Character3+Character7+"---"+Character8+Character4+Character5+Character6

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.sendInlineKeyboard(Buttons1, "🔍کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") جست و جو به اتمام رسید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📮اطلاعات بازیابی حساب به شماره موبایل شما ارسال گردید.\n✉️" + Result + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Admin = 592526230;

let Buttons2 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
]

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons2, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش اطلاعات بازیابی کاربر [<FullName>](tg://user?id=" + UserID + ") از طریق سامانه پیامکی دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n`👤نام و نام خانوادگی:<FullName>\n♻️نام کاربری:*<Username>*\n🔒گذرواژه:*<Password>*\n📞شماره موبایل:<PhoneNumber>\n📧آدرس ایمیل:\n<EmailAddress>`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
