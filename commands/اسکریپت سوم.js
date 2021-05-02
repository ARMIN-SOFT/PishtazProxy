/*CMD
  command: اسکریپت سوم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Command 1
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

//Command 2
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
text: "🔄افزودن کانال در حال بار گذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "کانال وقایع" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش افزودن کانال خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:کانال وقایع بصورت خودکار فعال می شود و گزارشات پروکسی شما را به کانال مربوطه ارسال می کند.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی زیر کلیک کنید.");

Bot.runCommand("افزودن کانال دوم بررسی اول");

//Command 3
👌نام کاربری کانال خود را به همراه @ وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:ربات باید در کانال مربوطه ادمین باشد.

//Command 4
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Channel_Events = message;

User.setProperty("Channel_Events", data.message, "text");

function validateUsername(Username){
var Form = /^[a-zA-Z0-9_@]*$/

return Form.test(String(Username).toLowerCase());
}

if(validateUsername(Channel_Events)){
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی چهارم", is_reply: true});
}

//Command 5
let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال دوم بررسی سوم",
run_after: 5
})

//Command 6
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Edit = User.getProperty("msgid")

let DateTime = Bot.getProperty("DateTime");

Bot.editMessage("✔️فرمت نام کاربری کانال وارد شده صحیح می باشد.", Edit);

var Channel_Events = User.getProperty("Channel_Events");

Api.getChatMember({
chat_id: Channel_Events,
user_id: "1231290973",
on_result: "افزودن کانال دوم بررسی ششم"
})

//Command 7
let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال دوم بررسی پنجم",
run_after: 5
})

//Command 8
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Edit = User.getProperty("msgid")

Bot.editMessage("❌نام کاربری کانال وارد شده صحیح نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️فرمت ارسالی باید همراه با @ باشد.", Edit);

let Buttons = [
{title: "🔁تلاش مجدد", command: "افزودن کانال دوم بررسی اول" },
{title: "🔙بازگشت به منوی قبل", command: "کانال وقایع" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.sendInlineKeyboard(Buttons, "👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

//Command 9
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let status = options.result.status
if(status != "administrator"){
Bot.sendMessage("🔄ربات در حال بررسی ادمین بودن در کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی نهم"});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی ادمین بودن در کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی هفتم"});
}

//Command 10
let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال دوم بررسی هشتم",
run_after: 5
})

//Command 11
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Edit = User.getProperty("msgid")

let DateTime = Bot.getProperty("DateTime");

Bot.editMessage("✔️ربات در کانال وارد شده ادمین می باشد.", Edit);

let Validation = Libs.Random.randomInt(1,1000000);

let Channel_Events = User.getProperty("Channel_Events");

Bot.runCommand("تاریخ و زمان");
Bot.sendMessage("📮کد تایید اعتبار سنجی به کانال " + Channel_Events + " با موفقیت ارسال گردید.\n\n<DateTime>");

User.setProperty("Validation", Validation, "Integer");

Bot.runCommand("تاریخ و زمان");
var Message = "✔️کد تایید اعتبار سنجی کانال وقایع دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔒کد تایید اعتبار سنجی:`" + Validation + "`";

Api.sendMessage({ 
chat_id: Channel_Events, 
text: Message, 
parse_mode: "Markdown"})

Bot.runCommand("افزودن کانال سوم بررسی اول");

//Command 12
let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال دوم بررسی دهم",
run_after: 5
})

//Command 13
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Edit = User.getProperty("msgid")

Bot.editMessage("❌ربات در کانال وارد شده ادمین نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️ربات باید ادمین کانال باشد.", Edit);

Bot.runCommand("افزودن کانال دوم بررسی اول");

//Command 14
👌کد تایید اعتبار سنجی ۶ رقمی را به درستی وارد نمایید.

//Command 15
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

if(data.message == User.getProperty("Validation")){
Bot.sendMessage("🔄ربات در حال بررسی کد تایید اعتبار سنجی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال سوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی کد تایید اعتبار سنجی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال سوم بررسی چهارم", is_reply: true});
};

//Command 16
let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال سوم بررسی سوم",
run_after: 10
})

//Command 17
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Edit = User.getProperty("msgid");

var Sex = User.getProperty("Sex");

var FullName = User.getProperty("FullName");

let UserID = data.user.telegramid;

var Channel_Events = User.getProperty("Channel_Events");

let DateTime = Bot.getProperty("DateTime");

Bot.editMessage("✔️کد تایید اعتبار سنجی وارد شده صحیح می باشد.", Edit);

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "کانال وقایع" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons,"<Sex> [<FullName>](tg://user?id=" + UserID + ") کانال وقایع شما با موفقیت فعال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

var Message = "✅لحظاتی پیش این کانال در ربات پیشتاز پروکسی توسط کاربر [" + FullName + "](tg://user?id=" + UserID + ") به عنوان کانال وقایع ثبت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n✔️از این پس پروکسی های دریافتی به این کانال وقایع بصورت خودکار ارسال می گردد.";

Api.sendMessage({ 
chat_id: Channel_Events, 
text: Message, 
parse_mode: "Markdown"})

//Command 18
let msg_id = options.result.message_id;

User.setProperty("msgid" ,msg_id, "integer");

Bot.run({
command: "افزودن کانال سوم بررسی پنجم",
run_after: 10
})

//Command 19
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Edit = User.getProperty("msgid")

Bot.editMessage("❌کد تایید اعتبار سنجی وارد شده صحیح نمی باشد.", Edit);

//Command 20
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
text: "🔄حذف کانال در حال بار گذاری می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Channel_Events = User.getProperty("Channel_Events");

if (Channel_Events == undefined){
let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "کانال وقایع" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش حذف کانال خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰کانال قابل حذف بدین شرح است:\n\n⚠️کانالی برای حذف وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
{title: "❌حذف کانال " + Channel_Events + " ", command: "حذف کانال دوم" },
{title: "🔙بازگشت به منوی قبل", command: "کانال وقایع" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons2, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش حذف کانال خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰کانال قابل حذف بدین شرح است:\n\n📢کانال وقایع:" + Channel_Events + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

//Command 21
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Sex = User.getProperty("Sex");

var FullName = User.getProperty("FullName");

var DateTime = Bot.getProperty("DateTime");

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
text: "🔄درخواست در حال پردازش می باشد...",
show_alert: false
})

let UserID = data.user.telegramid;

let Channel_Events = User.getProperty("Channel_Events");

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "کانال وقایع" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") بنا به درخواست شما کانال وقایع " + Channel_Events + " با موفقیت حذف گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

User.setProperty("Channel_Events", "", false);

var Message = "❌لحظاتی پیش این کانال در ربات پیشتاز پروکسی توسط کاربر [" + FullName + "](tg://user?id=" + UserID + ") از کانال وقایع حذف گردید.\n\n" + DateTime + " ";

Api.sendMessage({ 
chat_id: Channel_Events, 
text: Message, 
parse_mode: "Markdown"})
