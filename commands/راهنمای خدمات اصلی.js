/*CMD
  command: راهنمای خدمات اصلی
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

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

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
text: "⛔️کاربر گرامی " + FirstName + " بدلیل رگبار ربات به مدت "+ seconds+" ثانیه از ربات محروم شدید.\n\n🙇‍♂لطفا به آرامی از ربات استفاده کنید.",
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
text: "🔄بخش راهنمای خدمات در حال بار گذاری می باشد...",
show_alert: false
})

let Buttons = [
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش راهنمای خدمات خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰دستورات و توضیحات ربات بدین شرح است:\n\n⚙دستورات اول:منوی خدمات ربات\n📚توضیحات دستورات:نمایش منوی خدمات ربات\n\n⚙دستورات دوم:حساب کاربری\n📚توضیحات دستورات:نمایش منوی حساب کاربری\n\n⚙دستورات سوم:ایجاد حساب کاربری\n📚توضیحات دستورات:ایجاد حساب کاربری و تکمیل پرسشات\n\n⚙دستورات چهارم:ورود حساب کاربری\n📚توضیحات دستورات:وررد به حساب کاربری\n\n⚙دستورات پنجم:بازیابی حساب کاربری\n📚توضیحات دستورات:بازیابی حساب کاربری از طریق نام کاربری\n\n⚙دستورات ششم:درخواست همکاری\n📚توضیحات دستورات:نمایش منوی درخواست همکاری\n\n⚙دستورات هفتم:طراحی لوگو\n📚توضیحات دستورات:درخواست همکاری طراحی لوگو\n\n⚙دستورات هشتم:طراحی ربات\n📚توضیحات دستورات:درخواست همکاری طراحی ربات\n\n⚙دستورات نهم:دیگر پیشنهادات\n📚توضیحات دستورات:درخواست همکاری پیشنهادی\n\n⚙دستورات دهم:تغیرات نسخه\n📚توضیحات دستورات:تغیرات نسخه اخیر ربات\n\n⚙دستورات یازدهم:راهنمای خدمات\n📚توضیحات دستورات:دستورات و توضیحات ربات\n\n⚙دستورات دوازدهم:پشتیبانی آنلاین\n📚توضیحات دستورات:ارتباط آنلاین مدیریت\n\n⚙دستورات سیزدهم:درباره پیشتاز پروکسی\n📚توضیحات دستورات:درباره ربات پیشتاز پروکسی\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
