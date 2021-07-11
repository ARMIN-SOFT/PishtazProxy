/*CMD
  command: فعالسازی سرویس پروکسی تلگرام
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

var Sex = User.getProperty("Sex");
var FullName = User.getProperty("FullName");

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

let Amount = parseFloat("60000");
if (Money.value()<Amount){
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " با عرض پوزش اعتبار حساب کاربری شما کافی نمی باشد.",
show_alert: true
})

let Payment_Code = data.user.id;
let Url1 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-60000",
user_id: user.id,
redirect_to: "https://sepal.ir/f/6560e89c9e505d5"
})

let Url2 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-120000",
user_id: user.id,
redirect_to: "https://sepal.ir/f/6560ea9e2673f31"
})

let Url3 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-180000",
user_id: user.id,
redirect_to: "https://sepal.ir/f/6560ea9ef5a8c9f"
})

let Url4 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-240000",
user_id: user.id,
redirect_to: "https://sepal.ir/f/6560ea9f4c82b06"
})

let Url5 = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway",
user_id: user.id,
redirect_to: "https://sepal.ir/f/6560ea9fbcdf339"
})

let Buttons1 =
[
[{title: "💵 ۶۰،۰۰۰ هزار تومان", url: "" + Url1 + "" },{title: "💵 ۱۲۰،۰۰۰ هزار تومان", url: "" + Url2 + "" }],
[{title: "💵 ۱۸۰،۰۰۰ هزار تومان", url: "" + Url3 + "" }, {title: "💵 ۲۴۰،۰۰۰ هزار تومان", url: "" + Url4 +"" }],
[{title: "💸افزایش اعتبار دلخواه", url: "" + Url5 + "" }],
[{title: "🏧انتقال اعتبار", command: "انتقال اعتبار اول" }],
[{title: "🆓اعتبار رایگان", command: "اعتبار رایگان" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش اعتبار حساب کاربری خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:هنگام انجام عملیات پرداختی از شناسه پرداخت استفاده کنید.\n\n🔮شناسه پرداخت:`" + Payment_Code + "`\n\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
User.setProperty("Services", "✅فعال");

Money.remove(Amount);
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄درخواست شما در حال پردازش می باشد...",
show_alert: false
})

let Buttons2 = [
{title: "🔙بازگشت به منوی قبل", command: "پروکسی تلگرام" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

let UserID = data.user.telegramid;

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons2, "<Sex> [<FullName>](tg://user?id=" + UserID + ") بنا به درخواست شما سرویس پروکسی تلگرام با موفقیت فعال گردید.\n\n⚠️نکته:پروکسی تلگرام دقایقی دیگر برای شما ارسال می گردد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Admin = 592526230;

let Buttons3 = [
{title: "➕افزودن پروکسی تلگرام", command: "افزودن پروکسی تلگرام اول" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons3, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش درخواست پروکسی تلگرام  جدیدی در سیستم ثبت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n`" + FullName + "` *-* `" + UserID + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}
