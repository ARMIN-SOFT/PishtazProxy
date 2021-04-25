/*CMD
  command: پلاس مسنجر غیر رسمی است
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

let Sex = User.getProperty("Sex");

let FullName = User.getProperty("FullName");

if (FullName == undefined){
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "❌کاربر گرامی " + FirstName + " بخاطر داشته باشید پلاس مسنجر اپلیکیشن غیر رسمی می باشد.",
show_alert: true
})
}

else{
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " بخاطر داشته باشید پلاس مسنجر اپلیکیشن غیر رسمی می باشد.",
show_alert: true
})
}
