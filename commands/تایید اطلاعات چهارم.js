/*CMD
  command: تایید اطلاعات چهارم
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

let FirstName1 = data.user.first_name;
let UserID = data.user.telegramid;

var Edit = User.getProperty("msgid")
Bot.runCommand("تاریخ و زمان");
Bot.editMessage("✔️کاربر گرامی [" + FirstName1 + "](tg://user?id=" + UserID + ") اطلاعات حساب شما با موفقیت در سیستم ثبت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات وارد شده بدین شرح است:\n\n👤نام و نام خانوادگی:<FullName>\n♻️نام کاربری:*<Username>*\n🔒گذرواژه:*<Password>*\n📞شماره موبایل:<PhoneNumber>\n📧آدرس ایمیل:\n<EmailAddress>\n➖➖➖➖➖➖➖➖➖➖\n📮اطلاعات شما به مدیریت ارسال گردید و پس از بررسی و تایید هویت اطلاع رسانی می شود.", Edit);

let Admin = 592526230;

let FirstName2 = data.user.first_name;

let Buttons = [
[{title: "✅تایید هویت", command: "تایید هویت اول" },{title: "❌عدم تایید هویت", command: "عدم تایید هویت اول" }],
[{title: "🏠بازگشت به منوی مدیریت", command: "مدیریت دوم" }],
];

Bot.runCommand("تاریخ و زمان");
Bot.sendInlineKeyboardToChatWithId(Admin, Buttons, "✔️مدیریت گرامی [آرمین اسکندری](tg://user?id=592526230) لحظاتی پیش اطلاعات جدیدی در سیستم ثبت گردید.\n\n<DateTime>\n➖➖➖➖➖➖➖➖➖➖\n👤نام و نام خانوادگی:<FullName>\n♻️نام کاربری:*<Username>*\n🔒گذرواژه:*<Password>*\n📞شماره موبایل:<PhoneNumber>\n📧آدرس ایمیل:\n<EmailAddress>\n`" + FirstName2 + "` *-* `" + UserID + "`\n➖➖➖➖➖➖➖➖➖➖\n⁉️مدیریت گرامی آیا اطلاعات فوق را تایید می کنید.");
