/*CMD
  command: افزودن تلگرام ایکس مسنجر سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌لینک تلگرام ایکس مسنجر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Telegram_X_Messenger_Link", data.message);

let UserID = data.user.Telegram_Xid;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش تلگرام ایکس مسنجر" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیرت" },
];

Bot.runCommand("پیکربندی");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") اپلیکیشن تلگرام ایکس مسنجر با موفقیت ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Telegram_X_Messenger_Link = Bot.getProperty("Telegram_X_Messenger_Link");
let Telegram_X_Messenger_Details = Bot.getProperty("Telegram_X_Messenger_Details");
let Message = " " + Telegram_X_Messenger_Details + "\n➖➖➖➖➖➖➖➖➖➖\n 🆔 @APK_Telegrams";

Api.sendDocument({
chat_id: "@APK_Telegrams",
document: Telegram_X_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "🟢تلگرام ایکس مسنجر رسمی است🟢", callback_data: 'تلگرام ایکس مسنجر رسمی است'}],
[{text: "🤖ربات پیشتاز پروکسی", callback_data: '1', url: 'https://t.me/PishtazProxy_BOT?start=user110747'}]
]}
})
