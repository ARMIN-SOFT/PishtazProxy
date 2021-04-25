/*CMD
  command: کانال وقایع
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
text: "🔄کانال وقایع در حال بارگذاری می باشد...",
show_alert: false
})

var Channel_Events = User.getProperty("Channel_Events");

let UserID = data.user.telegramid;

if (Channel_Events == undefined){
let Buttons1 = [
[{title: "➕افزودن کانال" , command: "افزودن کانال اول"}, 
{title: "➖حذف کانال" , command: "حذف کانال اول"}],
[{title: "🔙بازگشت به منوی قبل", command: "پروکسی تلگرام" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1,"<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش کانال وقایع خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⚠️هیچ کانال وقایعی برای نمایش وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
[{title: "➕افزودن کانال" , command: "افزودن کانال اول"}, 
{title: "➖حذف کانال" , command: "حذف کانال اول"}],
[{title: "🔙بازگشت به منوی قبل", command: "پروکسی تلگرام" }],
[{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons2, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش کانال وقایع خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰کانال وقایع ثبت شده بدین شرح است:\n\n📢نام کاربری:<Channel_Events>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}
