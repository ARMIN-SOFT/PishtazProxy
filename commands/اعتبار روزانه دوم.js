/*CMD
  command: اعتبار روزانه دوم
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
var Run_Time = User.getProperty("Run_Time");
if(!Run_Time){ return true }

var minutes = (Date.now() - Run_Time) /1000/60;
var minutes_in_day = 24 * 60
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 60)
next -= wait_hours * 60
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)

if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " با عرض پوزش شما قبلا اعتبار حساب روزانه خود را دریافت نمودید.\n\n⌚️مدت انتظار:"+wait_hours+" ساعت "+wait_minutes+" دقیقه "+ seconds+" ثانیه",
show_alert: true
})
return
}

return true;
}

if(!canRun()){ return }
User.setProperty("Run_Time", Date.now(), "integer");

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
text: "🔄اعتبار روزانه در حال بارگذاری می باشد...",
show_alert: false
})

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
return Daily_Credit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

var Daily_Credit = Bot.getProperty("Daily_Credit");

Money.add(Daily_Credit);
let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "اعتبار حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") تبریک *" + (Decimal(Daily_Credit)) + "* تومان بابت اعتبار روزانه به اعتبار حساب شما افزوده گردید.\n\n😉همچنین می توانید ۲۴ ساعت آینده مجددا به این بخش مراجعه کنید و هدیه روزانه خود را دریافت کنید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
