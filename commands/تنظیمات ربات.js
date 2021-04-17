/*CMD
  command: تنظیمات ربات
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
text: "🔄تنظیمات ربات در حال بار گذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Buttons = [
{title: "💳بخش اعتبار حساب کاربری", command: "بخش اعتبار حساب کاربری" },
{title: "🔖بخش کد هدیه", command: "بخش کد هدیه" },
{title: "👥بخش ادمین", command: "بخش ادمین" },
{title: "⛔️بخش جرایم", command: "بخش جرایم" },
{title: "📨بخش ارسال پیامک", command: "بخش ارسال پیامک" },
{title: "📱بخش اپلیکیشن", command: "بخش اپلیکیشن" },
{title: "🔌بخش پروکسی تلگرام", command: "بخش پروکسی تلگرام" },
{title: "📝بخش ویرایش دستورات", command: "بخش ویرایش دستورات" },
{title: "🔃بخش بروز رسانی", command: "بخش بروز رسانی" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به تنظیمات ربات خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
