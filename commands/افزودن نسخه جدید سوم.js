/*CMD
  command: افزودن نسخه جدید سوم
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
{title: "🔙بازگشت به منوی قبل", command: "بخش بروز رسانی ربات" },
{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" },
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "✅مدیریت گرامی [<FullName>](tg://user?id=" + UserID + ") ربات با موفقیت به نسخه جدید بروز رسانی گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات بروز رسانی جدید بدین شرح است:\n\n🔄نسخه جدید ربات:<Robot_Version>\n\n<Robot_Changes>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.");

Bot.runCommand("تاریخ و زمان");
Bot.sendMessageToAllChats("🌹سلام کاربرای گرامی وقت بخیر ربات با موفقیت بروز رسانی گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات بروز رسانی جدید بدین شرح است:\n\n🔄نسخه جدید ربات:<Robot_Version>\n\n<Robot_Changes>\n➖➖➖➖➖➖➖➖➖➖\n📨نظرات و انتقادات خود را با ما در میان بگذارید.\n🆔 @ARMIN_SOFT\n🌐 https://ARMIN-SOFT.IR");

let DateTime = Bot.getProperty("DateTime");
let Robot_Version = Bot.getProperty("Robot_Version");
let Robot_Changes = Bot.getProperty("Robot_Changes");

Bot.runCommand("تاریخ و زمان");
Api.sendPhoto({
chat_id: "-1001308385324",
photo: "https://i.imgur.com/hsmUEH6.jpg",
caption: "🌹سلام کاربرای گرامی وقت بخیر ربات با موفقیت بروز رسانی گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات بروز رسانی جدید بدین شرح است:\n\n🔄نسخه جدید ربات:" + Robot_Version + "\n\n" + Robot_Changes + "\n➖➖➖➖➖➖➖➖➖➖\n📨نظرات و انتقادات خود را با ما در میان بگذارید.\n🆔 @ARMIN_SOFT\n🌐 https://ARMIN-SOFT.IR",
reply_markup: { inline_keyboard: [
[{text: "🤖ورود به ربات🤖" , callback_data: '1', url:'https://t.me/PishtazProxy_BOT?start=user110747' }],
]
}
});
