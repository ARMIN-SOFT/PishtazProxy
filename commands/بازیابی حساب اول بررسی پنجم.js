/*CMD
  command: بازیابی حساب اول بررسی پنجم
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

Bot.editMessage("❌نام کاربری وارد شده در دیتابیس ثبت نشده است.", Edit);

let Buttons = [
{title: "🔁تلاش مجدد", command: "بازیابی حساب اول بررسی اول" },
{title: "🔙بازگشت به منوی قبل", command: "حساب کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.sendInlineKeyboard(Buttons, "👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
