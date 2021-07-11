/*CMD
  command: طراحی لوگو اول
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
text: "🔄طراحی لوگو در حال بار گذاری می باشد...",
show_alert: false
})

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "درخواست همکاری" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش طراحی لوگو خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🙇‍♂لطفا به پرسش هایی که از شما پرسیده می شود به درستی پاسخ دهید.");

Bot.runCommand("طراحی لوگو دوم");
