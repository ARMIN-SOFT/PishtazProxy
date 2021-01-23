/*CMD
  command: ویرایش دستورات دوم
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

let UserID = data.user.telegramid;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش ویرایش دستورات" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") آمار کلی ربات با موفقیت بروز رسانی گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰آمار کلی بدین شرح است:\n\n<Statistics_Robot>\n\n‼️این آمار هر شب ساعت ۰۰:۰۰ بروز می شود.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");
