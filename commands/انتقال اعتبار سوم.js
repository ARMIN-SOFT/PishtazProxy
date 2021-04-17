/*CMD
  command: انتقال اعتبار سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌میزان انتقال اعتبار را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Transfer_Credit_Amount", data.message);

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let Transfer_Credit_Amount = User.getProperty("Transfer_Credit_Amount");

let Transfer_Credit_UserID = User.getProperty("Transfer_Credit_UserID");

let Item = parseFloat(Transfer_Credit_Amount);

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

let Amount = data.message

if (Money.value()<Amount){
let Buttons1 = [
{title: "🔄تلاش مجدد", command: "انتقال اعتبار اول" },
{title: "🔙بازگشت به منوی قبل", command: "اعتبار حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") با عرض پوزش اعتبار حساب کاربری شما برای انتقال [" + (Decimal(Item)) + "](tg://user?id=" + UserID + ") تومان به [" + Transfer_Credit_UserID + "](tg://user?id=" + Transfer_Credit_UserID + ") کافی نمی باشد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
Money.remove(Item);

let Buttons2 = [
{title: "🔙بازگشت به منوی قبل", command: "اعتبار حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons2, "<Sex> [<FullName>](tg://user?id=" + UserID + ") میزان [" + (Decimal(Item)) + "](tg://user?id=" + UserID + ") تومان از اعتبار حساب کاربری شما به کاربر [" + Transfer_Credit_UserID + "](tg://user?id=" + Transfer_Credit_UserID + ") با موفقیت انتقال یافت.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

Bot.runCommand("انتقال اعتبار چهارم");
}
