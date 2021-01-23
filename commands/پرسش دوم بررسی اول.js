/*CMD
  command: پرسش دوم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش دوم:نام و نام خانوادگی خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:نام و نام خانوادگی باید حروف فارسی باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("FullName", data.message, "text");

let Text = message; 
function validateFullName(FullName){
var Form = /^[\u0600-\u06FF\s]+$/;
return Form.test(String(FullName).toLowerCase());
}

if(validateFullName(Text)){
Bot.sendMessage("🔄ربات در حال بررسی نام و نام خانوادگی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش دوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی نام و نام خانوادگی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "پرسش دوم بررسی چهارم", is_reply: true});
};
