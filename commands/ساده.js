/*CMD
  command: ساده
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

User.setProperty("Connect_Platform", "✅فعال - 🔌ساده");

var Sex = User.getProperty("Sex");

var FullName = User.getProperty("FullName");

function canRun(){
var last_run_at = User.getProperty("last_run_at");
if(!last_run_at){ return true }

var minutes = (Date.now() - last_run_at) /2000;
var minutes_in_day = 2 * 2
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 2)
next -= wait_hours * 2
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 2)

if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " بدلیل رگبار ربات به مدت "+ seconds+" ثانیه از ربات محروم شدید.\n\n🙇‍♂لطفا به آرامی از ربات استفاده کنید.",
show_alert: true
})
return
}

return true;
}

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

let Money = Libs.ResourcesLib.userRes("Money");

function Currency(Money){
if(isNaN(Money))
return Money;

if(Money < 1000){
return "تومان";
}

if(Money < 1000000){
return "هزار تومان";
}

if(Money < 10000000){
return "میلیون تومان";
}

if(Money < 1000000000000){
return "میلیارد تومان";
}

if(Money < 1000000000000){
return "میلیارد تومان";
}

if(Money < 1000000000000000){
return "بیلیون تومان";
}

if(Money < 1000000000000000000){
return "بیلیارد تومان";
}

if(Money < 1000000000000000000000){
return "تریلیون تومان";
}
}

function Decimal(Money){
return Money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

let Amount = parseFloat("15000");
if (Money.value()<Amount){
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " با عرض پوزش اعتبار حساب کاربری شما کافی نمی باشد.",
show_alert: true
})

let Payment_Code = data.user.id;

let Url1 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-15000",
user_id: user.id,
redirect_to: "https://idpay.ir/pishtazproxy/shop/259001"
})

let Url2 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-30000",
user_id: user.id,
redirect_to: "https://idpay.ir/pishtazproxy/shop/259004"
})

let Url3 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-45000",
user_id: user.id,
redirect_to: "https://idpay.ir/pishtazproxy/shop/259007"
})

let Url4 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-60000",
user_id: user.id,
redirect_to: "https://idpay.ir/pishtazproxy/shop/259010"
})

let Url5 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway",
user_id: user.id,
redirect_to: "https://idpay.ir/pishtazproxy"
})

let Buttons =
[
[{title: "💵 ۱۵،۰۰۰ هزار تومان", url: "" + Url1 + "" },{title: "💵 ۳۰،۰۰۰ هزار تومان", url: "" + Url2 + "" }],
[{title: "💵 ۴۵،۰۰۰ هزار تومان", url: "" + Url3 + "" }, {title: "💵 ۶۰،۰۰۰ هزار تومان", url: "" + Url4 +"" }],
[{title: "💸افزایش اعتبار دلخواه", url: "" + Url5 + "" }],
[{title: "🏧انتقال اعتبار", command: "انتقال اعتبار اول" }],
[{title: "🎁اعتبار روزانه", command: "اعتبار روزانه اول" },{title: "🔖کد هدیه", command: "کد هدیه اول بررسی اول" }],
[{title: "🔙بازگشت به منوی قبل", command: "پروفایل اطلاعات کاربری" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

let UserID = data.user.telegramid;

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش اعتبار حساب کاربری خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:هنگام انجام عملیات پرداختی از شناسه پرداخت استفاده کنید.\n\n🔮شناسه پرداخت:`" + Payment_Code + "`\n\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
Money.remove(Amount);
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄درخواست شما در حال پردازش می باشد...",
show_alert: false
})

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "پروکسی تلگرام" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

let UserID = data.user.telegramid;

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") بنا به درخواست شما پلتفرم پروکسی ساده با موفقیت فعال گردید.\n\n⚠️نکته:پروکسی دقایقی دیگر برای شما ارسال می گردد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Admin = 592526230;

let Buttons2 = [
[{title: "✅تایید هویت", command: "تایید هویت اول" },{title: "❌عدم تایید هویت", command: "عدم تایید هویت اول" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons2, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش اطلاعات جدیدی در سیستم ثبت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n`👤نام و نام خانوادگی:<FullName>\n♻️نام کاربری:<Username>\n🔒گذرواژه:<Password>\n📞شماره موبایل:<PhoneNumber>\n📧آدرس ایمیل:\n<EmailAddress>\n``" + FirstName2 + "` *-* `" + UserID + "`\n➖➖➖➖➖➖➖➖➖➖\n⁉️مدیریت گرامی آیا اطلاعات فوق را تایید می کنید.");
}
