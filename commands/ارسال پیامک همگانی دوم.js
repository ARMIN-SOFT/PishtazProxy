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

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش ارسال پیامک" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];
 
Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") پیامک شما به تمامی کاربران با موفقیت ارسال گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

Bot.setProperty("All_SMS", message)

Bot.runAll({
command: "ارسال پیامک همگانی سوم",
for_chats: "private-chats"
})
