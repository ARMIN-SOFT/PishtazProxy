/*CMD
  command: کد هدیه اول بررسی اول
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

var Gift_Code = User.getProperty("Gift_Code");

function canRun(){
if(!Gift_Code){ return true }

var minutes = (Date.now() - Gift_Code) /2000;
var minutes_in_day = 2000 * 2000
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 2000)
next -= wait_hours * 2000
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 2000)

if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " با عرض پوزش کد هدیه جدیدی موجود نمی باشد یا شما قبلا کد هدیه خود را استفاده کردید.",
show_alert: true
})
return
}

return true;
}

if(!canRun()){ return }
User.setProperty("Gift_Code", Date.now(), "integer");

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
text: "🔄کد هدیه در حال بار گذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "اعتبار رایگان" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش کد هدیه خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی زیر کلیک کنید.");

Bot.runCommand("کد هدیه اول بررسی دوم");
