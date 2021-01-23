/*CMD
  command: تراکنش موفق سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌مبلغ پرداختی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Successful_Transaction_Payment_Amount", data.message);

Bot.runCommand("تراکنش موفق چهارم");
