/*CMD
  command: کد هدیه اول بررسی ششم
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

Bot.editMessage("❌کد هدیه وارد شده صحیح نمی باشد.", Edit);

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "اعتبار رایگان" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.sendInlineKeyboard(Buttons, "👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
