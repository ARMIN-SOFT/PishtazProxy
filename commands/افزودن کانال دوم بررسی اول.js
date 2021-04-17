/*CMD
  command: افزودن کانال دوم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
👌نام کاربری کانال خود را به همراه @ وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:ربات باید در کانال مربوطه ادمین باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Channel_Events = message;

User.setProperty("Channel_Events", data.message, "text");

function validateUsername(Username){
var Form = /^[@a-z@A-Z]*$/g;

return Form.test(String(Username).toLowerCase());
}

if(validateUsername(Channel_Events)){
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی چهارم", is_reply: true});
}
