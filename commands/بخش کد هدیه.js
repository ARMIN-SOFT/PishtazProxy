/*CMD
  command: بخش کد هدیه
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
text: "⛔️مدیریت گرامی " + FullName + " بدلیل رگبار ربات به مدت "+ seconds+" ثانیه از ربات محروم شدید.\n\n🙇‍♂لطفا به آرامی از ربات استفاده کنید.",
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
text: "🔄بخش اعتبار کد هدیه در حال بار گذاری می باشد...",
show_alert: false
})

var Credit_Amount = Bot.getProperty("Credit_Amount");

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

let UserID = data.user.telegramid;

var Gift_Code = Bot.getProperty("Gift_Code");

if (Gift_Code == undefined){
let Buttons1 = [
[{title: "➕ثبت کد" , command: "ثبت کد اول"},{title: "➖حذف کد اول" , command: "حذف کد اول"}],
[{title: "🔙بازگشت به منوی قبل", command: "تنظیمات ربات" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش کد هدیه خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰کد هدیه بدین شرح است:\n\n⚠️کد هدیه ای برای نمایش وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
[{title: "➕ثبت کد" , command: "ثبت کد اول"},{title: "➖حذف کد" , command: "حذف کد اول"}],
[{title: "🔙بازگشت به منوی قبل", command: "تنظیمات ربات" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons2, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش کد هدیه خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰کد هدیه بدین شرح است:\n\n🔖کد هدیه کنونی:`" + Gift_Code + "`\n🎁اعتبار هدیه:*" + (Decimal(Credit_Amount)) + "* " + (Currency(Credit_Amount)) + "\n📆تاریخ منقضی:<Expiration_Date>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}
