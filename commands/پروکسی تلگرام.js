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

var Proxy_Platform = User.getProperty("Proxy_Platform");

let Services = User.getProperty("Services");

var Email = User.getProperty("Email");

var SMSs = User.getProperty("SMSs");

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
text:" " + Sex + " " + FullName + " بدلیل رگبار ربات به مدت "+ seconds+" ثانیه از ربات محروم شدید.\n\n🙇‍♂لطفا به آرامی از ربات استفاده کنید.",
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

Bot.runCommand("تاریخ و زمان");
Api.sendPhoto({
photo: "https://i.imgur.com/0ZDbr73.jpg",
caption: "" + Sex  + " " + FullName + " به بخش پروکسی تلگرام خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:در صورت عدم تنظیم پلتفرم اتصال پروکسی سرویس بصورت پیش فرض فعال می گردد.\n\n📡پلتفرم پروکسی کنونی:" + Proxy_Platform + "\n\n🚨وضعیت سرویس پروکسی تلگرام:" + Services + "\n🚨وضعیت ماژول سامانه پیامکی:" + SMSs + "\n🚨وضعیت ماژول سامانه ایمیلی:" + Email + "\n➖➖➖➖➖➖➖➖➖➖\n💎هزینه فعالسازی سرویس:۷۰۰ تومان\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "markdown",

reply_markup: { inline_keyboard: [
[{text: "✅فعالسازی سرویس" , callback_data: 'فعالسازی سرویس پروکسی تلگرام' },{text: "❌غیر فعالسازی سرویس" , callback_data: 'غیر فعالسازی سرویس پروکسی تلگرام' }],
[{text: "📡پلتفرم اتصال پروکسی" , callback_data: 'پلتفرم اتصال پروکسی' }],
[{text: "🔔ماژول اطلاع رسانی" , callback_data: 'ماژول اطلاع رسانی' }],
[{text: "🔙بازگشت به منوی قبل" , callback_data: 'سرویس پروکسی' }],
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'داشبورد حساب کاربری' }],
]}
});
