/*CMD
  command: پروفایل کاربری
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

let Robot_Version = Bot.getProperty("Robot_Version");

let Robot_Changes = Bot.getProperty("Robot_Changes");

let DateTime = Bot.getProperty("DateTime");

Bot.runCommand("تاریخ و زمان");

let Photos = options.result.photos;
for(let User in Photos)

Api.sendPhoto({
photo: Photos[User][0].file_id,
caption: "🤖نام ربات:پیشتاز پروکسی\n🆔 @PishtazProxy_BOT\n📚درباره ربات:سرویس خدمات پروکسی آنلاین\n👨‍💻توسعه دهنده:نرم افزاری و امنیتی آمبرلا\n➖➖➖➖➖➖➖➖➖➖\n🔰آخرین نسخه ربات بدین شرح است:\n\n🔄نسخه جدید ربات:" + Robot_Version + "\n\n" + DateTime + " ",
})
