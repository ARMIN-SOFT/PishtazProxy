/*CMD
  command: /start
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

if(!User.getProperty("Statistics_Robot")){
var Admin = "592526230";

Bot.setProperty("Total_User", (Bot.getProperty("Total_User", "0")*1)+1, "text");

let Buttons10 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons10, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش کاربر جدیدی عضو ربات گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات عضویت کاربر جدید بدین شرح است:\n\n👤نام:[" + data.user.first_name + "](tg://user?id=" + data.user.telegramid + ")\n♻️نام کاربری:@" + user.username + "\n🆔آیدی عددی:`" + data.user.telegramid + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

User.setProperty("Statistics_Robot", true, "boolean");
}

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

Bot.runCommand("تاریخ و زمان");
function doAlreadyAttracted(){
Bot.sendMessage("<Sex> [<FullName>](tg://user?id=" + UserID + ") شما نمی توانید از لینک مجموعه گیری خود استفاده کنید.\n\n<DateTime>");
}

function doAtractedByUser(refUser) {

let Money = Libs.ResourcesLib.anotherUserRes("Money", refUser.telegramid);

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
return Money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

Money.add(400);
Bot.sendMessage("🎁کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") شما ۴۰۰ تومان اعتبار بدلیل عضویت شما به ربات دریافت نمودید.\n➖➖➖➖➖➖➖➖➖➖\n🎎همچنین شما از طریق لینک معرف [" + refUser.first_name + "](tg://user?id=" + refUser.telegramid + ") عضویت خود را انجام دادید.\n\n<DateTime>");

Money.add(600);
Bot.runCommand("تاریخ و زمان");
Bot.sendMessageToChatWithId(refUser.chatId, "🌹کاربر گرامی [" + refUser.first_name + "](tg://user?id=" + refUser.telegramid + ") تبریک شما ۶۰۰ تومان اعتبار بابت عضویت کاربر [" + FirstName + "](tg://user?id=" + UserID + ") به ربات دریافت نمودید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + " ");
}

Bot.runCommand("تاریخ و زمان");
function doTouchOwnLink(){
Bot.sendMessage("⚠️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") شما قبلا یک بار عضویت خود را انجام داده اید.\n\n<DateTime>");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

let Question1 = Libs.Random.randomInt(10,100);

let Question2 = Libs.Random.randomInt(10,100);

let Answer = Question1+Question2;

User.setProperty('Answer',Answer,'string')

var Button1 = Libs.Random.randomInt(10,100);
var Button2 = Libs.Random.randomInt(10,100);
var Button3 = Libs.Random.randomInt(10,100);
var Button4 = Libs.Random.randomInt(10,100);
var Button5 = Libs.Random.randomInt(10,100);
var Button6 = Libs.Random.randomInt(10,100);
var Button7 = Libs.Random.randomInt(10,100);
var Button8 = Question1+Question2;
var Button9 = Libs.Random.randomInt(10,100);
var Button10 = Libs.Random.randomInt(10,100);
var Button11 = Libs.Random.randomInt(10,100);
var Button12 = Libs.Random.randomInt(10,100);

var Buttons20 = [
[{title:Button1, command:'Answer '+Button1}, {title:Button2, command:'Answer '+Button2}, {title:Button3, command:'Answer '+Button3}],
[{title:Button4, command:'Answer '+Button4}, {title:Button5, command:'Answer '+Button5}, {title:Button6, command:'Answer '+Button6}],
[{title:Button7, command:'Answer '+Button7}, {title:Button8, command:'Answer '+Button8}, {title:Button9, command:'Answer '+Button9}],
[{title:Button10, command:'Answer '+Button10}, {title:Button11, command:'Answer '+Button11}, {title:Button12, command:'Answer '+Button12}],
[{title:'🔄تغیر پرسش امنیتی', command:'/start'}],
]

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons20, "❓کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") قبل از استفاده از خدمات ربات پرسش امنیتی زیر را جواب دهید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📟پرسش امنیتی:\n*" + Question1 + " + " + Question2 + "= ?*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
