/*CMD
  command: مسدودیت چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌نوع جرم را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Crimes_Mass", message);

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let Crimes_UserID = User.getProperty("Crimes_UserID");

let Crimes_FullName = User.getProperty("Crimes_FullName");

let Crimes_Mass = User.getProperty("Crimes_Mass");

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "بخش جرایم" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") حساب کاربری کاربر [" + Crimes_FullName + "](tg://user?id=" + Crimes_UserID + ") به علت [" + Crimes_Mass + "](tg://user?id=" + Crimes_UserID + ") با موفقیت مسدود گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Crimes_UserID, Buttons2, "⛔️آقای/خانم [" + Crimes_FullName + "](tg://user?id=" + Crimes_UserID + ") لحظاتی پیش حساب کاربری شما توسط مدیریت به علت [" + Crimes_Mass + "](tg://user?id=" + Crimes_UserID + ") مسدود گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
