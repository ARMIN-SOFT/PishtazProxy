/*CMD
  command: ورود حساب سوم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌کد تایید اعتبار سنجی ۶ رقمی را به درستی وارد نمایید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

if(data.message == Bot.getProperty("Validation")){
Bot.sendMessage("🔄ربات در حال بررسی کد تایید اعتبار سنجی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب سوم بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی کد تایید اعتبار سنجی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب سوم بررسی چهارم", is_reply: true});
};
