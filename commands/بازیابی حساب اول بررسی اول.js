/*CMD
  command: بازیابی حساب اول بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⁉️پرسش اول:نام کاربری خود را جهت جست و جو در دیتابیس وارد نمایید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Username = User.getProperty("Username"); 

if(data.message==Username){
Bot.sendMessage("🔄ربات در حال جست و جو در دیتابیس می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "بازیابی حساب اول بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال جست و جو در دیتابیس می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "بازیابی حساب اول بررسی چهارم", is_reply: true});
}
