/*CMD
  command: پرسش ششم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش ششم:آدرس ایمیل معتبر خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:آدرس ایمیل باید سرویس دهنده جیمیل باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("EmailAddress", data.message, "text");

let Text = message; 
function validateEmailAddress(EmailAddress){
var Form = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;

return Form.test(String(EmailAddress).toLowerCase());
}

if(validateEmailAddress(Text)){
Bot.sendMessage("🔄ربات در حال بررسی آدرس ایمیل وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش ششم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی آدرس ایمیل وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش ششم بررسی چهارم", is_reply: true});
}
