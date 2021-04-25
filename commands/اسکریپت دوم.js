/*CMD
  command: اسکریپت دوم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

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
