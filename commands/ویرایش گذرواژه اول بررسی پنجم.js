/*CMD
  command: ویرایش گذرواژه اول بررسی پنجم
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

Bot.editMessage("❌گذرواژه فعلی وارد شده صحیح نمی باشد.", Edit);

let Buttons = [
{title: "🔁تلاش مجدد", command: "ویرایش گذرواژه اول بررسی اول" },
{title: "🔙بازگشت به منوی قبل", command: "پروفایل اطلاعات کاربری" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.sendInlineKeyboard(Buttons, "👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
