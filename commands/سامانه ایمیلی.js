/*CMD
  command: سامانه ایمیلی
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

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄سامانه ایمیلی در حال بارگذاری می باشد...",
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

var Email = User.getProperty("Email");

let UserID = data.user.telegramid;

if (Email == undefined){
let Buttons1 = [
[{title: "✅فعالسازی سامانه", command: "فعالسازی سامانه ایمیلی" },{title: "❌غیر فعالسازی سامانه", command: "غیر فعالسازی سامانه ایمیلی" }],
[{title: "🔙بازگشت به منوی قبل", command: "ماژول اطلاع رسانی" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1,"<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش سامانه ایمیلی خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌شما با استفاده از گزینه های زیر می توانید سامانه ایمیلی خود را لغو یا فعال کنید.\n\n📧آدرس ایمیل ثبت شده:\n<EmailAddress>\n🚨وضعیت سامانه:تنظیم نشده است\n➖➖➖➖➖➖➖➖➖➖\n💎هزینه فعالسازی سامانه:۴۰۰ تومان\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons1 = [
[{title: "✅فعالسازی سامانه", command: "فعالسازی سامانه ایمیلی" },{title: "❌غیر فعالسازی سامانه", command: "غیر فعالسازی سامانه ایمیلی" }],
[{title: "🔙بازگشت به منوی قبل", command: "ماژول اطلاع رسانی" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1,"<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش سامانه ایمیلی خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌شما با استفاده از گزینه های زیر می توانید سامانه ایمیلی خود را لغو یا فعال کنید.\n\n📧آدرس ایمیل ثبت شده:\n<EmailAddress>\n🚨وضعیت سامانه:<Email>\n➖➖➖➖➖➖➖➖➖➖\n💎هزینه فعالسازی سامانه:۴۰۰ تومان\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}
