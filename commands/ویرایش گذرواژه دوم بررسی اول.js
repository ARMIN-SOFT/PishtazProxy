/*CMD
  command: ویرایش گذرواژه دوم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش دوم:گذرواژه جدید خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:گذرواژه باید دارای حروف لاتین و اعداد و کاراکتر خاص باشد.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Password", data.message);

let Text = message; 
function validatePassword(Password){
var Form = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,15}$/;

return Form.test(String(Password).toLowerCase());
}

if(validatePassword(Text)){
Bot.sendMessage("🔄ربات در حال بررسی گذرواژه وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ویرایش گذرواژه دوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی گذرواژه وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ویرایش گذرواژه دوم بررسی چهارم", is_reply: true});
}
