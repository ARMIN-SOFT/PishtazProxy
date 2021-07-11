/*CMD
  command: پروکسی تلگرام
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
let FullName = User.getProperty("FullName");
let DateTime = Bot.getProperty("DateTime");
var Services = User.getProperty("Services");

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
text: "🔄پروکسی تلگرام در حال بارگذاری می باشد...",
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

Bot.runCommand("پیکربندی");
if (Services == undefined){
Api.sendPhoto({
photo: "https://i.imgur.com/0ZDbr73.jpg",
caption: " " + Sex  + " " + FullName + " به بخش پروکسی تلگرام خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🚨وضعیت سرویس پروکسی تلگرام:❌غیر فعال\n➖➖➖➖➖➖➖➖➖➖\n💎هزینه فعالسازی سرویس ماهانه:۶۰،۰۰۰ تومان\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
reply_markup: { inline_keyboard: [
[{text: "✅فعالسازی سرویس" , callback_data: 'فعالسازی سرویس پروکسی تلگرام' }],
[{text: "🔙بازگشت به منوی قبل" , callback_data: 'سرویس پروکسی' }],
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'داشبورد حساب کاربری' }],
]}
});
}

else{
Bot.runCommand("پیکربندی");
Api.sendPhoto({
photo: "https://i.imgur.com/0ZDbr73.jpg",
caption: " " + Sex  + " " + FullName + " به بخش پروکسی تلگرام خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🚨وضعیت سرویس پروکسی تلگرام:" + Services + "\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
reply_markup: { inline_keyboard: [
[{text: "❌غیر فعالسازی سرویس" , callback_data: 'غیر فعالسازی سرویس پروکسی تلگرام' }],
[{text: "🔙بازگشت به منوی قبل" , callback_data: 'سرویس پروکسی' }],
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'داشبورد حساب کاربری' }],
]}
});
}
