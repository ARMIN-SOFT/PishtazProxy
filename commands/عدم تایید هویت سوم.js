/*CMD
  command: عدم تایید هویت سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌متن عدم تایید هویت را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let FullName_Identity_Non = Bot.getProperty("FullName_Identity_Non");

let Identity_Non = Bot.getProperty("Identity_Non");

let Item = data.message;

let Buttons1 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") عدم تایید هویت کاربر [" + FullName_Identity_Non + "](tg://user?id=" + Identity_Non + ") با موفقیت انجام شد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "📝ایجاد حساب", command: "ایجاد حساب" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Identity_Non, Buttons2, "❌کاربر گرامی [" + FullName_Identity_Non + "](tg://user?id=" + Identity_Non + ") اطلاعات شما توسط مدیریت بررسی و رد شده است.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n⛔️دلایل عدم تایید هویت:" + Item + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
