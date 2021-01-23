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

Bot.sendMessage("🎁کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") شما ۲،۰۰۰ تومان اعتبار بدلیل عضویت شما به ربات دریافت نمودید.\n➖➖➖➖➖➖➖➖➖➖\n🎎همچنین شما از طریق لینک معرف [" + refUser.first_name + "](tg://user?id=" + refUser.telegramid + ") عضویت خود را انجام دادید.\n\n<DateTime>");

Money.add(4000);
Bot.runCommand("تاریخ و زمان");
Bot.sendMessageToChatWithId(refUser.chatId, "🌹کاربر گرامی [" + refUser.first_name + "](tg://user?id=" + refUser.telegramid + ") تبریک شما ۴،۰۰۰ هزار تومان اعتبار بابت عضویت کاربر [" + FirstName + "](tg://user?id=" + UserID + ") به ربات دریافت نمودید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + " ");
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

let Buttons = [
[{title: "⚡️شروع ساده", command: "شروع ساده" }, {title: "⚡️شروع پیشرفته", command: "شروع پیشرفته" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "👌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") نوع شروع ربات را انتخاب کنید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🚨دستورات:شروع ساده\n📚توضیحات:ربات بصورت ساده شروع می شود\n\n🚨دستورات:شروع پیشرفته\n📚توضیحات:ربات تمامی تصاویر پروفایل شما را دریافت می کند\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
