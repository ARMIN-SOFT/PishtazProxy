/*CMD
  command: افزودن پروکسی سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌پروکسی نوع دوم را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Second_Type", data.message);

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "بخش پروکسی تلگرام" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") پروکسی جدید با موفقیت ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
