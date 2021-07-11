/*CMD
  command: ایجاد حساب
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
text: "🔄ایجاد حساب در حال بار گذاری می باشد...",
show_alert: false
})

Bot.runCommand("پیکربندی");
Bot.sendMessage("🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش ایجاد حساب خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🙇‍♂لطفا به پرسش هایی که از شما پرسیده می شود به درستی پاسخ دهید.");

let Buttons = [
[{title: "🙎‍♂آقا", command: "آقا" },{title: "🙍‍♀خانم", command: "خانم" }],
[{title: "🔙بازگشت به منوی قبل", command: "حساب کاربری" }],
[{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" }],
];

Bot.sendInlineKeyboard(Buttons, "⁉️پرسش اول:جنسیت خود را انتخاب کنید.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
