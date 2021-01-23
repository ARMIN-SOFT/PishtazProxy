/*CMD
  command: پرسش پنجم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش پنجم:شماره موبایل خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:شماره موبایل باید اعداد فارسی باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("PhoneNumber", data.message, "text");

if(message.length==11){
let Text = message; 
function validatePhoneNumber(PhoneNumber){
var Form = /[۰-۹]/;

return Form.test(String(PhoneNumber).toLowerCase());
}

if(validatePhoneNumber(Text)){
Bot.sendMessage("🔄ربات در حال بررسی شماره موبایل وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش پنجم بررسی دوم", is_reply: true});
}
}

else{
Bot.sendMessage("🔄ربات در حال بررسی شماره موبایل وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش پنجم بررسی چهارم", is_reply: true});
}
