/*CMD
  command: تاس شانس سوم
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

var Sex = User.getProperty("Sex");

var FullName = User.getProperty("FullName");

let UserID = data.user.telegramid;

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
return Dice_Luck.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

var Dice_Luck = Bot.getProperty("Dice_Luck");

let Result = options.result.dice.value
if (Result == "6"){

Money.add(Dice_Luck);
let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "اعتبار رایگان"},
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری"},
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") تبریک *" + (Decimal(Dice_Luck)) + "* تومان بابت تاس شانس و آوردن عدد ۶ به اعتبار حساب شما افزوده گردید.\n\n😉همچنین می توانید ۲۴ ساعت آینده مجددا به این بخش مراجعه کنید و شانس خود را امتحان کنید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
{title: "🔙بازگشت به منوی قبل", command: "اعتبار رایگان"},
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری"},
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons2, "<Sex> [<FullName>](tg://user?id=" + UserID + ") با عرض پوزش تاس شانس شما عدد ۶ نبود.\n\n🎲عدد تاس شانس شما:*" + options.result.dice.value + "*\n\n😉نگران نباشید می توانید ۲۴ ساعت آینده مجددا به این بخش مراجعه کنید و شانس خود را امتحان کنید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}
