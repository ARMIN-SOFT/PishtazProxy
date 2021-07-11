/*CMD
  command: اعتبار حساب کاربری
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

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄اعتبار حساب کاربری در حال بار گذاری می باشد...",
show_alert: false
})

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

let Buttons =
[
[{title: "💵 ۶۰،۰۰۰ هزار تومان", url: "" + Url1 + "" },{title: "💵 ۱۲۰،۰۰۰ هزار تومان", url: "" + Url2 + "" }],
[{title: "💵 ۱۸۰،۰۰۰ هزار تومان", url: "" + Url3 + "" }, {title: "💵 ۲۴۰،۰۰۰ هزار تومان", url: "" + Url4 +"" }],
[{title: "💸افزایش اعتبار دلخواه", url: "" + Url5 + "" }],
[{title: "🏧انتقال اعتبار", command: "انتقال اعتبار اول" }],
[{title: "🆓اعتبار رایگان", command: "اعتبار رایگان" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش اعتبار حساب کاربری خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:هنگام انجام عملیات پرداختی از شناسه پرداخت استفاده کنید.\n\n🔮شناسه پرداخت:`" + Payment_Code + "`\n\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
