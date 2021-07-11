/*CMD
  command: تایید اطلاعات اول
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.sendMessage("🔄ربات در حال ثبت اطلاعات در سیستم می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "تایید اطلاعات دوم"});
