/*CMD
  command: طراحی لوگو سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌درخواست همکاری خود را در رابطه با طراحی لوگو بصورت کامل وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let Admin = 592526230;

let FullName_Logo_Design = Bot.getProperty("FullName_Logo_Design");

let Item = data.message;

let Buttons1 = [
{title: "🔙بازگشت به منوی قبل", command: "درخواست همکاری" },
{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons1, "✔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") فرم درخواست همکاری شما با موفقیت به مدیریت ارسال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰فرم درخواست همکاری شما بدین شرح است:\n\n👤نام و نام خانوادگی:[" + FullName_Logo_Design + "](tg://user?id=" + UserID + ")\n\n📮متن درخواست:" + Item + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");

let Buttons2 = [
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons2, "👮‍♂مدیریت گرامی [آرمین اسکندری](tg://user?id=" + UserID + ") لحظاتی پیش درخواست همکاری طراحی لوگو از کاربر [" + FirstName + "](tg://user?id=" + UserID + ") دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰فرم درخواست همکاری کاربر بدین شرح است:\n\n👤نام و نام خانوادگی:[" + FullName_Logo_Design + "](tg://user?id=" + UserID + ")\n\n📮متن درخواست:" + Item + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
