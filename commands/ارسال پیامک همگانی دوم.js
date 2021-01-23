/*CMD
  command: ارسال پیامک همگانی دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌متن پیامک را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;
let Message = data.message;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش ارسال پیامک" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") پیامک شما به تمامی کاربران با موفقیت ارسال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + Message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

Bot.runCommand("تاریخ و زمان");
Bot.sendMessageToAllChats("📩آقای/خانم لحظاتی پیش پیامکی از سوی مدیریت دریافت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + Message + " ");
