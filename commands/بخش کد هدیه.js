/*CMD
  command: بخش کد هدیه
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let Add_Admin_UserID = User.getProperty("Add_Admin_UserID");

if(chat.chatid==Add_Admin_UserID){
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄بخش اعتبار کد هدیه در حال بار گذاری می باشد...",
show_alert: false
})

var Credit_Amount = Bot.getProperty("Credit_Amount");

function Currency(Credit_Amount){
if(isNaN(Credit_Amount))
return Credit_Amount;

if(Credit_Amount < 1000){
return "تومان";
}

if(Credit_Amount < 1000000){
return "هزار تومان";
}

if(Credit_Amount < 10000000){
return "میلیون تومان";
}

if(Credit_Amount < 1000000000000){
return "میلیارد تومان";
}

if(Credit_Amount < 1000000000000){
return "میلیارد تومان";
}

if(Credit_Amount < 1000000000000000){
return "بیلیون تومان";
}

if(Credit_Amount < 1000000000000000000){
return "بیلیارد تومان";
}

if(Credit_Amount < 1000000000000000000000){
return "تریلیون تومان";
}
}

function Decimal(Credit_Amount){
return Credit_Amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

let UserID = data.user.telegramid;

var Gift_Code = Bot.getProperty("Gift_Code");

if (Gift_Code == undefined){
let Buttons1 = [
[{title: "➕ثبت کد" , command: "ثبت کد اول"},{title: "➖حذف کد اول" , command: "حذف کد اول"}],
[{title: "🔙بازگشت به منوی قبل", command: "تنظیمات ربات" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش کد هدیه خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰کد هدیه بدین شرح است:\n\n⚠️کد هدیه ای برای نمایش وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}

else {
let Buttons2 = [
[{title: "➕ثبت کد" , command: "ثبت کد اول"},{title: "➖حذف کد" , command: "حذف کد اول"}],
[{title: "🔙بازگشت به منوی قبل", command: "تنظیمات ربات" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" }],
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons2, "🌹مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") به بخش کد هدیه خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰کد هدیه بدین شرح است:\n\n🔖کد هدیه کنونی:`" + Gift_Code + "`\n🎁اعتبار هدیه:*" + (Decimal(Credit_Amount)) + "* " + (Currency(Credit_Amount)) + "\n📆تاریخ منقضی:<Expiration_Date>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
}
}

else {
Bot.runCommand("پیکربندی");
Bot.sendMessage("⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") دسترسی به بخش مدیریت برای حساب کاربری شما مقدور نمی باشد.\n\n<DateTime>",{is_reply:true});
}
