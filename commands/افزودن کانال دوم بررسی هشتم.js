/*CMD
  command: افزودن کانال دوم بررسی هشتم
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

var Edit = User.getProperty("msgid")

let DateTime = Bot.getProperty("DateTime");

Bot.editMessage("✔️ربات در کانال وارد شده ادمین می باشد.", Edit);

let Validation = Libs.Random.randomInt(1,1000000);

let Channel_Events = User.getProperty("Channel_Events");

Bot.runCommand("تاریخ و زمان");
Bot.sendMessage("📮کد تایید اعتبار سنجی به کانال " + Channel_Events + " با موفقیت ارسال گردید.\n\n<DateTime>");

User.setProperty("Validation", Validation, "Integer");

Bot.runCommand("تاریخ و زمان");
var Message = "✔️کد تایید اعتبار سنجی کانال وقایع دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔒کد تایید اعتبار سنجی:`" + Validation + "`";

Api.sendMessage({ 
chat_id: Channel_Events, 
text: Message, 
parse_mode: "Markdown"})

Bot.runCommand("افزودن کانال سوم بررسی اول");
