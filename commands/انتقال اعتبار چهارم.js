/*CMD
  command: انتقال اعتبار چهارم
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

let Transfer_Credit_UserID = User.getProperty("Transfer_Credit_UserID");

let Transfer_Credit_Amount = User.getProperty("Transfer_Credit_Amount");

let Item = parseFloat(Transfer_Credit_Amount);

let Money = Libs.ResourcesLib.anotherUserRes("Money", Transfer_Credit_UserID);

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

let Buttons = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Money.add(Item);
Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Transfer_Credit_UserID, Buttons, "🎁آقای/خانم تبریک لحظاتی پیش میزان [" + (Decimal(Item)) + "](tg://user?id=" + Transfer_Credit_UserID + ") تومان اعتبار حساب کاربری شما توسط کاربر [<FullName>](tg://user?id=" + UserID + ") شارژ گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
