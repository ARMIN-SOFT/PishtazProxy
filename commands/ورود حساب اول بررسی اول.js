/*CMD
  command: ورود حساب اول بررسی اول
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let FullName = User.getProperty("FullName", data.user.telegramid);

if (FullName == FullName){
Bot.sendMessage("🔄ربات در حال دریافت اطلاعات کاربری در سیستم میباشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب اول بررسی دوم"});
}

else{
Bot.sendMessage("🔄ربات در حال دریافت اطلاعات کاربری در سیستم میباشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب اول بررسی چهارم"});
}
