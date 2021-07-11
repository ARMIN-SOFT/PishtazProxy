/*CMD
  command: کسر اعتبار چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌میزان اعتبار را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let Credit_Deduction_UserID = User.getProperty("Credit_Deduction_UserID");
let Credit_Deduction_FullName = User.getProperty("Credit_Deduction_FullName");

let Item = parseFloat(data.message);
let Money = Libs.ResourcesLib.anotherUserRes("Money", Credit_Deduction_UserID);

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
{title: "🔙بازگشت به منوی قبل", command: "بخش اعتبار حساب کاربری" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Money.remove(Item);
Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") میزان [" + (Decimal(Item)) + "](tg://user?id=" + UserID + ") تومان اعتبار حساب کاربری [" + Credit_Deduction_FullName + "](tg://user?id=" + Credit_Deduction_UserID + ") با موفقیت کسر گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboardToChatWithId(Credit_Deduction_UserID, Buttons2, "😢آقای/خانم [" + Credit_Deduction_FullName + "](tg://user?id=" + Credit_Deduction_UserID + ") با عرض پوزش لحظاتی پیش میزان [" + (Decimal(Item)) + "](tg://user?id=" + Credit_Deduction_UserID + ") تومان اعتبار حساب کاربری شما توسط مدیریت کسر گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
