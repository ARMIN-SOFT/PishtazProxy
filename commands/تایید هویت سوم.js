/*CMD
  command: تایید هویت سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌متن تایید هویت را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

let FullName_Identity_Confirmation = Bot.getProperty("FullName_Identity_Confirmation");

let Identity_Confirmation = Bot.getProperty("Identity_Confirmation");

let Item = data.message;

let Buttons1 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") تایید هویت کاربر [" + FullName_Identity_Confirmation + "](tg://user?id=" + Identity_Confirmation + ") با موفقیت انجام شد.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🚪ورود حساب", command: "ورود حساب" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Identity_Confirmation, Buttons2, "✔️کاربر گرامی [" + FullName_Identity_Confirmation + "](tg://user?id=" + Identity_Confirmation + ") اطلاعات شما توسط مدیریت بررسی و هویت شما تایید گردیده است.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات ورود به حساب بدین شرح است:\n\n*" + Item + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
