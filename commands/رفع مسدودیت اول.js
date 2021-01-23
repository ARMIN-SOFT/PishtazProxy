/*CMD
  command: رفع مسدودیت اول
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
text: "🔄بخش رفع مسدودیت در حال بار گذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Crimes_UserID = User.getProperty("Crimes_UserID");

let Crimes_FullName = User.getProperty("Crimes_FullName");

let Crimes_Mass = User.getProperty("Crimes_Mass");

if (Crimes_UserID == undefined){
let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "بخش جرایم" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش رفع مسدودیت خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰جرایم کاربران بدین شرح است:\n\n⚠️جرمی برای رفع مسدودیت وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
{title: "⭕️رفع مسدودیت " + Crimes_FullName + " - " + Crimes_Mass + "", command: "رفع مسدودیت دوم" },
{title: "🔙بازگشت به منوی قبل", command: "بخش جرایم" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons2, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش رفع مسدودیت خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰جرایم کاربران بدین شرح است:\n\n👤کاربر:`<Crimes_FullName>` - `<Crimes_UserID>`\n🚨نوع جرم:<Crimes_Mass>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}
