/*CMD
  command: ویرایش گذرواژه دوم بررسی سوم
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

Bot.editMessage("✔️گذرراژه وارد شده صحیح می باشد.", Edit);

let UserID = data.user.telegramid;

Bot.runCommand("تاریخ و زمان");
Bot.sendMessage("<Sex> [<FullName>](tg://user?id=" + UserID + ") گذرواژه حساب کاربری شما با موفقیت تغیر یافت.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔒گذرواژه جدید:*<Password>*");

var Sex = User.getProperty("Sex");

var FullName = User.getProperty("FullName");

let Buttons = [
{title: "👤پروفایل کاربری", command: "پروفایل اطلاعات کاربری" },
{title: "🔧سرویس پروکسی", command: "سرویس پروکسی" },
{title: "📥دانلود اپلیکیشن", command: "دانلود اپلیکیشن" },
{title: "📌تغیرات نسخه", command: "تغیرات نسخه حساب کاربری" },
{title: "📚راهنمای خدمات", command: "راهنمای خدمات حساب کاربری" },
{title: "👨‍💻پشتیبانی آنلاین", command: "پشتیبانی آنلاین حساب کاربری" },
{title: "🤖درباره پیشتاز پروکسی", command: "درباره پیشتاز پروکسی حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "<Sex> [<FullName>](tg://user?id=" + UserID + ") به بخش داشبورد حساب کاربری خوش آمدید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
