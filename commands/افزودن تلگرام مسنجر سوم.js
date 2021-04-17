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

Bot.setProperty("Telegram_Messenger_Link", data.message);

let UserID = data.user.telegramid;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش تلگرام مسنجر" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") اپلیکیشن تلگرام مسنجر با موفقیت ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Telegram_Messenger_Link = Bot.getProperty("Telegram_Messenger_Link");

let Telegram_Messenger_Details = Bot.getProperty("Telegram_Messenger_Details");

let Message = " " + Telegram_Messenger_Details + "\n➖➖➖➖➖➖➖➖➖➖\n 🆔 @APK_Telegrams";

var Like_Yes = Libs.ResourcesLib.anotherChatRes("Like_Yes");

var Like_No = Libs.ResourcesLib.anotherChatRes("Like_No");

Api.sendDocument({
chat_id: "@APK_Telegrams",
document: Telegram_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "👍 " + Like_Yes.value() + " ", callback_data: 'لایک بله'}, {text: "👎 " + Like_No.value() + " ", callback_data: 'لایک خیر'}],
[{text: "⛔️عبور از فیلترینگ⛔️", callback_data: '1', url: 'https://t.me/PishtazProxy_BOT?start=user110747'}]
]}
})
