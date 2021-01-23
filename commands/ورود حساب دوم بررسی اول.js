/*CMD
  command: ورود حساب دوم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⁉️پرسش دوم:گذرواژه خود را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let Password =
User.getProperty("Password"); 

if(data.message==Password){
Bot.sendMessage("🔄ربات در حال بررسی گذرراژه وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب دوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی گذرواژه وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب دوم بررسی چهارم", is_reply: true});
};
