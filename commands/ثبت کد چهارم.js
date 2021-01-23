/*CMD
  command: ثبت کد چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌تاریخ منقضی را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Expiration_Date", data.message);

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

var Credit_Amount = Bot.getProperty("Credit_Amount");

var Gift_Code = Bot.getProperty("Gift_Code");

function Currency(Credit_Amount){
if(isNaN(Credit_Amount))
return Credit_Amount;

if(Credit_Amount < 1000){
return "تومان";
}

if(Credit_Amount < 1000000){
return "هزار تومان";
}

if(Credit_Amount < 10000000){
return "میلیون تومان";
}

if(Credit_Amount < 1000000000000){
return "میلیارد تومان";
}

if(Credit_Amount < 1000000000000){
return "میلیارد تومان";
}

if(Credit_Amount < 1000000000000000){
return "بیلیون تومان";
}

if(Credit_Amount < 1000000000000000000){
return "بیلیارد تومان";
}

if(Credit_Amount < 1000000000000000000000){
return "تریلیون تومان";
}
}

function Decimal(Credit_Amount){
return Credit_Amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "بخش کد هدیه" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") کد هدیه جدید با موفقیت ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

Bot.runCommand("تاریخ و زمان");
Bot.sendMessageToAllChats("🌹سلام کاربرای گرامی وقت بخیر لحظاتی پیش کد هدیه ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات کد هدیه بدین شرح است:\n\n🔖کد هدیه:`" + Gift_Code + "`\n🎁اعتبار هدیه:*" + (Decimal(Credit_Amount)) + "* " + (Currency(Credit_Amount)) + "\n📆تاریخ منقضی:<Expiration_Date>");
