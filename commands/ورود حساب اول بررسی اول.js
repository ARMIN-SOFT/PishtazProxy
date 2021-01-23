/*CMD
  command: ورود حساب اول بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⁉️پرسش اول:نام کاربری خود را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Username =
User.getProperty("Username"); 

if(data.message==Username){
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب اول بررسی دوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی نام کاربری وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "ورود حساب اول بررسی چهارم", is_reply: true});
};
