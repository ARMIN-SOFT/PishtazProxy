/*CMD
  command: پرسش سوم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش سوم:نام کاربری خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:نام کاربری باید حروف لاتین و بدون فاصله باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Username", data.message, "text");

let Text = message; 
function validateUsername(Username){
var Form = /^[a-zA-Z]*$/g;

return Form.test(String(Username).toLowerCase());
}

if(validateUsername(Text)){
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش سوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش سوم بررسی چهارم", is_reply: true});
}
