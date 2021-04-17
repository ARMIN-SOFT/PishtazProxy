/*CMD
  command: Answer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

var Answer = params

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id
Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

if(!params){
return 
}

else{
let Result = User.getProperty('Answer')

if(Answer==Result){
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "✅جواب پرسش امنیتی صحیح می باشد.",
show_alert: false
})

let Buttons = [
[{title: "⚡️شروع ساده", command: "شروع ساده" }, {title: "⚡️شروع پیشرفته", command: "شروع پیشرفته" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "👌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") نوع شروع ربات را انتخاب کنید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🚨دستورات:شروع ساده\n📚توضیحات:ربات بصورت ساده شروع می شود\n\n🚨دستورات:شروع پیشرفته\n📚توضیحات:ربات تمامی تصاویر پروفایل شما را دریافت می کند\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
}

else{
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "❌جواب پرسش امنیتی صحیح نمی باشد.",
show_alert: false
})

Bot.runCommand("/start");
}
}
