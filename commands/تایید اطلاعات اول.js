/*CMD
  command: تایید اطلاعات اول
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

let Buttons = [
[{title: "✅تایید اطلاعات", command: "تایید اطلاعات دوم" },{title: "❌عدم تایید اطلاعات", command: "عدم تایید اطلاعات" }],
[{title: "🔙بازگشت به منوی قبل", command: "حساب کاربری" }],
[{title: "🏠بازگشت به منوی اصلی", command: "منوی خدمات ربات" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboard(Buttons, "✔️کاربر گرامی ایجاد حساب شما به پایان رسیده است.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.");
