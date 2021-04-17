/*CMD
  command: افزودن کانال سوم بررسی سوم
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

var Edit = User.getProperty("msgid");

var Sex = User.getProperty("Sex");

var FullName = User.getProperty("FullName");

let UserID = data.user.telegramid;

var Channel_Events = User.getProperty("Channel_Events");

let DateTime = Bot.getProperty("DateTime");

Bot.editMessage("✔️کد تایید اعتبار سنجی وارد شده صحیح می باشد.", Edit);

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "کانال وقایع" },
{title: "🏠بازگشت به منوی اصلی", command: "داشبورد حساب کاربری" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons,"<Sex> [<FullName>](tg://user?id=" + UserID + ") کانال وقایع شما با موفقیت فعال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

var Message = "✅لحظاتی پیش این کانال در ربات پیشتاز پروکسی توسط کاربر [" + FullName + "](tg://user?id=" + UserID + ") به عنوان کانال وقایع ثبت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n✔️از این پس پروکسی های دریافتی به این کانال وقایع بصورت خودکار ارسال می گردد.";

Api.sendMessage({ 
chat_id: Channel_Events, 
text: Message, 
parse_mode: "Markdown"})
