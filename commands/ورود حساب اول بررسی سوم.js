/*CMD
  command: ورود حساب اول بررسی سوم
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

var Edit = User.getProperty("msgid")

Bot.editMessage("✅اطلاعات کاربری در دیتابیس ثبت گردیده است.", Edit);

let UserID = data.user.telegramid;

Bot.sendMessage("🔄ربات در حال ورود به حساب کاربری [<FullName>](tg://user?id=" + UserID + ") می باشد...");
let Buttons = [
{title: "🗄داشبورد حساب کاربری", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به حساب کاربری خود خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
