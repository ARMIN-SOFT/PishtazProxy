/*CMD
  command: افزودن پلاس مسنجر سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌لینک پلاس مسنجر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Plus_Messenger_Link", data.message);

let UserID = data.user.Plusid;

let Buttons = [
{title: "🔙بازگشت به منوی قبل", command: "بخش پلاس مسنجر" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") اپلیکیشن پلاس مسنجر با موفقیت ایجاد گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

let Plus_Messenger_Link = Bot.getProperty("Plus_Messenger_Link");

let Plus_Messenger_Details = Bot.getProperty("Plus_Messenger_Details");

let Message = " " + Plus_Messenger_Details + "\n➖➖➖➖➖➖➖➖➖➖\n 🆔 @APK_Telegrams";

Api.sendDocument({
chat_id: "@APK_Telegrams",
document: Plus_Messenger_Link,
caption: Message,
reply_markup: { inline_keyboard: [
[{text: "🔴پلاس مسنجر غیر رسمی است🔴", callback_data: 'پلاس مسنجر غیر رسمی است'}],
[{text: "🤖ربات پیشتاز پروکسی", callback_data: '1', url: 'https://t.me/PishtazProxy_BOT?start=user110747'}]
]}
})
