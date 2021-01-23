/*CMD
  command: تراکنش موفق چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌اطلاعات پرداختی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Successful_Transaction_UserID = User.getProperty("Successful_Transaction_UserID");

let Successful_Transaction_FullName = User.getProperty("Successful_Transaction_FullName");

let Successful_Transaction_Payment_Amount = User.getProperty("Successful_Transaction_Payment_Amount");

let UserID = data.user.telegramid;
let Item = parseFloat(Successful_Transaction_Payment_Amount);

let Money = Libs.ResourcesLib.anotherUserRes("Money", Successful_Transaction_UserID);

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

let Buttons1 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Money.add(Item);
Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") میزان [" + (Decimal(Item)) + "](tg://user?id=" + UserID + ") تومان اعتبار حساب کاربری [" + Successful_Transaction_FullName + "](tg://user?id=" + Successful_Transaction_UserID + ") بابت تراکنش موفق با موفقیت شارژ گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Payment_Information = data.message;

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Successful_Transaction_UserID, Buttons2, "🎊آقای/خانم [" + Successful_Transaction_FullName + "](tg://user?id=" + Successful_Transaction_UserID + ") ضمن تشکر از استفاده ربات شارژ اعتبار حساب کاربری شما به مبلغ [" + (Decimal(Item)) + "](tg://user?id=" + Successful_Transaction_UserID + ") تومان با موفقیت انجام گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات پرداختی بدین شرح است:\n\n" + Payment_Information + "\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
