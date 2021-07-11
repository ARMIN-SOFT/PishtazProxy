/*CMD
  command: انتقال اعتبار اول
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
text: "🔄انتقال اعتبار در حال بار گذاری می باشد...",
show_alert: false
})

let Money = Libs.ResourcesLib.userRes("Money");

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

let UserID = data.user.telegramid;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "اعتبار حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش انتقال اعتبار خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:*" + (Decimal(Money.value())) + "* " + (Currency(Money.value())) + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی زیر کلیک کنید.");

Bot.runCommand("انتقال اعتبار دوم");
