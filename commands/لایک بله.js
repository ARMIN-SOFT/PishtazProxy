/*CMD
  command: لایک بله
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

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
