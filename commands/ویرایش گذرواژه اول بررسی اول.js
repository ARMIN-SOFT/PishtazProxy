/*CMD
  command: ویرایش گذرواژه اول بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⁉️پرسش اول:گذرواژه فعلی خود را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var Password = User.getProperty("Password"); 

if(data.message==Password){
Bot.sendMessage("🔄ربات در حال بررسی گذرواژه فعلی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ویرایش گذرواژه اول بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی گذرواژه فعلی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ویرایش گذرواژه اول بررسی چهارم", is_reply: true});
}
