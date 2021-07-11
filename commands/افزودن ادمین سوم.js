/*CMD
  command: افزودن ادمین سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نام و نام خانوادگی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Add_Admin_FullName", message);

let UserID = data.user.telegramid;

let Add_Admin_UserID = User.getProperty("Add_Admin_UserID");
let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "بخش ادمین" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") حساب کاربری کاربر [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به ادمین ارتقاء گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboardToChatWithId(Add_Admin_UserID, Buttons2, "🎁آقای/خانم [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") تبریک لحظاتی پیش حساب کاربری شما توسط مدیریت به ادمین ارتقاء گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
