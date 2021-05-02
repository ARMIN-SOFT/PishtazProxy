/*CMD
  command: افزودن پروکسی تلگرام پنجم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌پروکسی تلگرام کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Connect_Proxy", message);

var Sex = User.getProperty("Sex");

let FullName = User.getProperty("FullName");

let DateTime = Bot.getProperty("DateTime");

let UserID = data.user.telegramid;

var UserID_Connect_Proxy = Bot.getProperty("UserID_Connect_Proxy");

var FullName_Connect_Proxy = Bot.getProperty("FullName_Connect_Proxy");

let Photo_Connect_Proxy = Bot.getProperty("Photo_Connect_Proxy");

let Proxy_Service = Bot.getProperty("Proxy_Service");

let Proxy_Information = Bot.getProperty("Proxy_Information");

var Connect_Proxy = Bot.getProperty("Connect_Proxy");

let Buttons = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") پروکسی کاربر [" + FullName_Connect_Proxy + "](tg://user?id=" + UserID_Connect_Proxy + ") با موفقیت ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

Bot.runCommand("تاریخ و زمان");
Api.sendPhoto({
chat_id: UserID_Connect_Proxy,
photo: Photo_Connect_Proxy,
caption: "✔️کاربر گرامی " + FullName_Connect_Proxy + " پروکسی تلگرام شما با موفقیت ایجاد گردید.\n\n🔰اطلاعات پروکسی تلگرام بدین شرح است:\n\n" + Proxy_Service + "\n\n" + Proxy_Information + "\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "markdown",
reply_markup: { inline_keyboard: [
[{text: "🔌اتصال به پروکسی" , callback_data: '1', url: Connect_Proxy}],
[{text: "🏠بازگشت به منوی اصلی" , callback_data: 'داشبورد حساب کاربری' }],
]}
});
