/*CMD
  command: افزودن تلگرام مسنجر سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌لینک تلگرام مسنجر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let UserID = data.user.telegramid;

Bot.setProperty("Telegram_Messenger_Link", data.message);

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش تلگرام مسنجر" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") اپلیکیشن تلگرام مسنجر با موفقیت ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Telegram_Messenger_Link = Bot.getProperty("Telegram_Messenger_Link");
let Telegram_Messenger_Details = Bot.getProperty("Telegram_Messenger_Details");
let Message = " " + Telegram_Messenger_Details + "\n➖➖➖➖➖➖➖➖➖➖\n 🆔 @APK_Telegrams";

Api.sendDocument({
chat_id: "@APK_Telegrams",
document: Telegram_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "🟢تلگرام مسنجر رسمی است🟢", callback_data: 'تلگرام مسنجر رسمی است'}],
[{text: "🤖ربات پیشتاز پروکسی", callback_data: '1', url: 'https://t.me/PishtazProxy_BOT?start=user110747'}]
]}
})
