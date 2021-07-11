/*CMD
  command: افزودن نسخه جدید دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌تغیرات جدید ربات را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

Bot.setProperty("Robot_Changes", message)

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش بروز رسانی" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") ربات با موفقیت به نسخه جدید بروز رسانی گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات بروز رسانی جدید بدین شرح است:\n\n🔄نسخه جدید ربات:<Robot_Version>\n\n<Robot_Changes>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

Bot.runAll({
command: "افزودن نسخه جدید سوم",
for_chats: "private-chats"
})
