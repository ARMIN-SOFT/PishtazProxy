/*CMD
  command: افزودن کانال دوم بررسی ششم
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

let status = options.result.status
if(status != "administrator"){
Bot.sendMessage("🔄ربات در حال بررسی ادمین بودن در کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی نهم"});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی ادمین بودن در کانال وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "افزودن کانال دوم بررسی هفتم"});
}
