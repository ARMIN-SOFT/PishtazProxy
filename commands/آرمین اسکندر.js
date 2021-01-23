/*CMD
  command: آرمین اسکندر
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

let UserID = 592526230;
let FullName = "آرمین اسکندری";

let DateTime = Bot.getProperty("DateTime");

let ProxyService = Bot.getProperty("ProxyService");

var Email = User.getProperty("Email", "undefined", "string" );

var SMSs = User.getProperty("SMSs");

let First_Type = Bot.getProperty("First_Type");

let Second_Type = Bot.getProperty("Second_Type");

let Photo = "https://i.imgur.com/NXg61as.jpg";

let Amount = parseFloat("700");

let Money = Libs.ResourcesLib.anotherUserRes("Money", UserID);

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

Bot.runCommand("خدمات پروکسی");
Bot.runCommand("تاریخ و زمان");

if (Money.value()<Amount){
Api.sendPhoto({
chat_id: UserID,
photo: Photo,
caption: "🙎‍♂جناب آقای:[" + FullName + "](tg://user?id=" + UserID + ")\n⛔️با عرض پوزش اعتبار حساب کاربری شما برای دریافت پروکسی تلگرام کافی نمی باشد.\n\n" + DateTime + "\n\n👌جهت شارژ اعتبار حساب کاربری بر روی منوی زیر کلیک کنید.\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + " ",
parse_mode: "markdown",
reply_markup: { inline_keyboard: [
[{text: "🛒شارژ اعتبار حساب کاربری" , callback_data: 'اعتبار حساب کاربری' }],
[{text: "🗄داشبورد حساب کاربری" , callback_data: 'داشبورد حساب کاربری' }],
]
}
});
}

else {
if (Email, SMSs == undefined){
Money.remove(Amount);
Api.sendPhoto({
chat_id: UserID,
photo: Photo,
caption: "🙎‍♂جناب آقای:[" + FullName + "](tg://user?id=" + UserID + ")\n🔮پروکسی جدید تلگرام از سوی سیستم دریافت گردید.\n\n" + DateTime + "\n\n⚠️نکته ۷۰۰ تومان از اعتبار حساب کاربری شما کسر گردید.\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات پروکسی دریافتی بدین شرح است:\n\n" + ProxyService + "\n➖➖➖➖➖➖➖➖➖➖\n🔰ماژول اطلاع رسانی ارسالی بدین شرح است:\n\n⚠️هیچ گونه ماژول اطلاع رسانی تنظیم نشده است.\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + " ",
parse_mode: "markdown",
reply_markup: { inline_keyboard: [
[{text: "✅فعالسازی سامانه پیامکی" , callback_data: 'فعالسازی سامانه پیامکی' },{text: "✅فعالسازی سامانه ایمیلی" , callback_data: 'فعالسازی سامانه ایمیلی' }],
[{text: "🗄داشبورد حساب کاربری" , callback_data: 'داشبورد حساب کاربری' }],
]
}
});
}

else {
Money.remove(Amount);
Api.sendPhoto({
chat_id: UserID,
photo: Photo,
caption: "🙎‍♂جناب آقای:[" + FullName + "](tg://user?id=" + UserID + ")\n🔮پروکسی جدید تلگرام از سوی سیستم دریافت گردید.\n\n" + DateTime + "\n\n⚠️نکته ۷۰۰ تومان از اعتبار حساب کاربری شما کسر گردید.\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات پروکسی دریافتی بدین شرح است:\n\n" + ProxyService + "\n➖➖➖➖➖➖➖➖➖➖\n🔰ماژول اطلاع رسانی ارسالی بدین شرح است:\n\n🚨وضعیت ماژول سامانه پیامکی:" + SMSs + "\n🚨وضعیت ماژول سامانه ایمیلی:" + Email + "\n\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + " ",
parse_mode: "markdown",
reply_markup: { inline_keyboard: [
[{text: "📡اتصال نوع اول" , callback_data: '1', url: First_Type},{text: "📡اتصال نوع دوم" , callback_data: '1', url: Second_Type }],
[{text: "❌غیر فعالسازی سرویس" , callback_data: 'غیر فعالسازی سرویس پروکسی تلگرام' }],
[{text: "❌غییر فعالسازی سامانه پیامکی" , callback_data: 'غیر فعالسازی سامانه پیامکی' },{text: "❌غیر فعالسازی سامانه ایمیلی" , callback_data: 'غیر فعالسازی سامانه ایمیلی' }],
[{text: "🗄داشبورد حساب کاربری" , callback_data: 'داشبورد حساب کاربری' }],
]
}
});
}
}
