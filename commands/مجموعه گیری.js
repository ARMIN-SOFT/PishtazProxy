/*CMD
  command: مجموعه گیری
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
var DateTime = User.getProperty("DateTime");

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
text: "🔄مجموعه گیری در حال بارگذاری می باشد...",
show_alert: false
})

let Collection_Link = Libs.ReferralLib.currentUser.getRefLink("PishtazProxy_BOT");

Api.sendPhoto({
photo: "https://i.imgur.com/azNKfMS.jpg",
caption: " " + Sex + " " + FullName + " شما را به ربات پیشتاز پروکسی دعوت نموده است.\n\n👌در نظر داشته باشید با پذیرش دعوت ۴۰۰ تومان اعتبار دریافت خواهید کرد.\n➖➖➖➖➖➖➖➖➖➖\n🙃پیشتاز پروکسی محدودیت فیلترینگ تلگرام را دور زده است.\n\n😄پس منتظر چی هستید سریع وارد لینک زیر شوید.\n➖➖➖➖➖➖➖➖➖➖\n♻️لینک عضویت ربات:\n" + Collection_Link + " ",
});

Bot.runCommand("پیکربندی");

let UserID = data.user.telegramid;

var refList;
var refList;
var refList;
var refList;
var refList;

let lib = Libs.ReferralLib
refList = lib.currentUser.refList.get();
let Message;
if(refList.length>0){
Message = "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش مجموعه گیری خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👆پست بالا حاوی لینک مجموعه گیری اختصاصی شما می باشد.\n\n🎁پس از ورود کاربر به ربات شما ۶۰۰ تومان اعتبار دریافت خواهید کرد.\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات مجموعه گیری بدین شرح است:\n\n🎎تعداد مجموعه:*" + refList.length + "* نفر";

for(var i in refList){
user = refList[i];
Message+= "\n*" + user.first_name + "*";
}
}

else {
Bot.runCommand("پیکربندی");
let Message = "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش مجموعه گیری خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👆پست بالا حاوی لینک مجموعه گیری اختصاصی شما می باشد.\n\n🎁پس از ورود کاربر به ربات شما ۶۰۰ تومان اعتبار دریافت خواهید کرد.\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات مجموعه گیری بدین شرح است:\n\n🎎تعداد مجموعه:۰ نفر\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.";

let Buttons1 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.sendInlineKeyboard(Buttons1, Message);
}

let Buttons2 = [
{title: "🔙بازگشت به منوی قبل", command: "پروفایل اطلاعات کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.sendInlineKeyboard(Buttons2, Message);
