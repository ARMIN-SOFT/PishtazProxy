/*CMD
  command: حذف آدمین دوم
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
text: "🔄درخواست در حال پردازش می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Add_Admin_UserID = User.getProperty("Add_Admin_UserID");

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "حذف آدمین اول" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "❌مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") بنا به درخواست شما کاربر [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") از آدمین ربات با موفقیت حذف گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

User.setProperty("Add_Admin_UserID", "", false);

User.setProperty("Add_Admin_FullName", "", false);

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Add_Admin_UserID, Buttons2, "😢آقای/خانم [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") با عرض پوزش لحظاتی پیش حساب کاربری شما توسط مدیریت از آدمین ربات حذف گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
