/*CMD
  command: سورس کد
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Command 1
function gregorian_to_jalali(gy, gm, gd) {
var g_d_m, jy, jm, jd, gy2, days;
var g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var gy2 = (gm > 2) ? (gy + 1) : gy;
var days = 355666 + (365 * gy) + parseInt((gy2 + 3) / 4) - parseInt((gy2 + 99) / 100) + parseInt((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
 jy = -1595 + (33 * parseInt(days / 12053));
days %= 12053;
jy += 4 * parseInt(days / 1461);
days %= 1461;
if (days > 365) {
jy += parseInt((days - 1) / 365);
var days = (days - 1) % 365;
}

if (days < 186) {
var jm = 1 + parseInt(days / 31);
var jd = 1 + (days % 31);
}

else {
var jm = 7 + parseInt((days - 186) / 30);
var jd = 1 + ((days - 186) % 30);
}

return [jy, jm, jd];
}

function jalali_to_gregorian(jy, jm, jd) {
var sal_a, gy, gm, gd, days;
jy += 1595;
var days = -355668 + (365 * jy) + (parseInt(jy / 33) * 8) + parseInt(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
var gy = 400 * parseInt(days / 146097);
days %= 146097;
if (days > 36524) {
gy += 100 * parseInt(--days / 36524);
days %= 36524;
if (days >= 365) days++;
}

gy += 4 * parseInt(days / 1461);
days %= 1461;
if (days > 365) {
gy += parseInt((days - 1) / 365);
var days = (days - 1) % 365;
}

var gd = days + 1;
var sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
return [gy, gm, gd];
}

function gregorian_to_ghamari(year,month,day){
 if(year > 1582 || (year==1581 && month > 9 && day > 14)){
var int1=parseInt((month-14)/12);
var jd=parseInt((1461*(year+4800+int1))/4)+parseInt((367*(month-2-(12*(int1))))/12)-parseInt((3*(parseInt((year+4900+int1)/100)))/4)+day-32075;
 }

else{
var jd=(367*year)-parseInt((7*(year+5001+parseInt((month-9)/7)))/4)+parseInt((275*month)/9)+day+1729777;
 }
 
var l=jd-1948440+10632;
var n=parseInt((l-1)/10631);
var l=l-10631*n+354;
var j=((parseInt((10985-l)/5316))*(parseInt((50*l)/17719)))+((parseInt(l/5670))*(parseInt((43*l)/15238)));
var l=l-(parseInt((30-j)/15))*(parseInt((17719*j)/50))-(parseInt(j/16))*(parseInt((15238*j)/43))+29;
var month=parseInt((24*l)/709);
var day=l-parseInt((709*month)/24);
var year=(30*n)+j-30;
return [year, month, day];
}

function ghamari_to_gregorian(year,month,day){
var jd=parseInt(((11*year)+3)/30)+(354*year)+(30*month)-parseInt((month-1)/2)+day+1948440-385;
 if(jd > 2299160){
var l=jd+68569;
var n=parseInt((4*l)/146097);
var l=l-parseInt((146097*n+3)/4);
var i=parseInt((4000*(l+1))/1461001);
var l=l-parseInt((1461*i)/4)+31;
var j=parseInt((80*l)/2447);
var day=l-parseInt((2447*j)/80);
var l=parseInt(j/11);
var month=j+2-(12*l);
var year=(100*(n-49))+i+l;
 }

else{
var j=jd+1402;
var k=parseInt((j-1)/1461);
var l=j-(1461*k);
var n=parseInt((l-1)/365)-parseInt(l/1461);
var i=l-(365*n)+30;
var j=parseInt((80*i)/2447);
var day=i-parseInt((2447*j)/80);
var i=parseInt(j/11);
var month=j+2-(12*i);
var year=(4*k)+n+i-4716;
}
return [year, month, day];
}

var d=new Date();
var g_y=d.getFullYear();
var g_m=d.getMonth()+1;
var g_d=d.getDate();
var week=["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه"];
var week= week[d.getDay()];
var shamsi=gregorian_to_jalali(g_y,g_m,g_d);
var sh_month=["-","فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند"];
var sh_month=sh_month[shamsi[1]];
var ghamari=gregorian_to_ghamari(g_y,g_m,g_d);
var gh_month=["-","محرّم", "صفر","ربيع الأول","ربيع الثانى","جمادى الأول","جمادى الثاني","رجب","شعبان","رمضان","شوّال","ذو القعدة","ذو الحجة"];
var gh_month=gh_month[ghamari[1]];
var mi_month=["","ژانویه","فوریه","مارس","آوریل","می","ژوئن","ژولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"];
var mi_month=mi_month[g_m];
var h=d.getHours();
var h=(h<10)?"0"+h:h;
var i=d.getMinutes();
var i=(i<10)?"0"+i:i;
var s=d.getSeconds();
var s=(s<10)?"0"+s:s;

Bot.sendMessage("امروز: "+shamsi[2]+"/"+sh_month+"/"+shamsi[0]+" , "+ghamari[2]+"/"+gh_month+"/"+ghamari[0]+" , "+g_d+"/"+mi_month+"/"+g_y+" ");

Bot.sendMessage("*📆تاریخ:"+week+" "+shamsi[2]+" "+sh_month+" "+shamsi[0]+" *");
//-----------------------------------------
//Command 1
var Like_Yes = Libs.ResourcesLib.anotherChatRes("Like_Yes");

var Like_No = Libs.ResourcesLib.anotherChatRes("Like_No");

Api.sendDocument({
chat_id: "@APK_Telegrams",
document: Telegram_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "👍 " + Like_Yes.value() + " ", callback_data: 'لایک بله'}, {text: "👎 " + Like_No.value() + " ", callback_data: 'لایک خیر'}],
[{text: "⛔️عبور از فیلترینگ⛔️", callback_data: '1', url: 'https://t.me/PishtazProxy_BOT?start=user110747'}]
]}
})

//Comnand 2
let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

var Done = User.getProperty("Done");
if (Done == undefined){

var Like_Yes = Libs.ResourcesLib.anotherChatRes("Like_Yes");

var Like_No = Libs.ResourcesLib.anotherChatRes("Like_No");

if(params == "بله"){
Like_Yes.add(1)

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "✅کاربر گرامی " + FirstName + "  نظر شما با موفقیت ثبت گردید.",
show_alert: true
})
}

else{
Like_No.add(1)
}

User.setProperty("Done","string");
}

else{
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "⚠️کاربر گرامی " + FirstName + " شما قبلا نظر خود را ثبت کرده اید.",
show_alert: true
})
}

//Command 3
let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

var Done = User.getProperty("Done");
if (Done == undefined){

var Like_No = Libs.ResourcesLib.anotherChatRes("Like_No");

var Like_Yes = Libs.ResourcesLib.anotherChatRes("Like_Yes");

if(params == "خیر"){
Like_No.add(1)

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "✅کاربر گرامی " + FirstName + "  نظر شما با موفقیت ثبت گردید.",
show_alert: true
})
}

else{
Like_Yes.add(1)
}

User.setProperty("Done","string");
}

else{
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "⚠️کاربر گرامی " + FirstName + " شما قبلا نظر خود را ثبت کرده اید.",
show_alert: true
})
}
//-----------------------------------------
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
