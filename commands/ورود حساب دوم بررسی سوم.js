/*CMD
  command: ورود حساب دوم بررسی سوم
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

let UserID = data.user.telegramid;

var Edit = User.getProperty("msgid")

Bot.editMessage("✔️گذرواژه وارد شده صحیح می باشد.", Edit);

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

var EmailAddress = User.getProperty("EmailAddress")

Bot.runCommand("تاریخ و زمان");
Bot.sendMessage("📮کد تایید اعتبار سنجی از طریق پیامک و آدرس ایمیل به شماره موبایل " + Result + " و آدرس ایمیل " + EmailAddress + " ارسال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:بدلیل ارتقاء سطح امنیتی حساب کاربری نیاز به کد تایید اعتبار سنجی می باشد.");

let Code = Libs.Random.randomInt(1,1000000);

let Validation = Code;
let Admin = 592526230;

Bot.setProperty("Validation", Validation, "Integer");

let Buttons = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
]

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش کد تایید اعتبار سنجی کاربر [<FullName>](tg://user?id=" + UserID + ") از طریق سامانه پیامکی و آدرس ایمیل دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔒کد تایید اعتبار سنجی:`" + Validation + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

Bot.runCommand("ورود حساب سوم بررسی اول");
