/*CMD
  command: اعتبار روزانه اول
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let String = Libs.Random.randomInt(500,3000);

let Daily_Credit = String;

Bot.setProperty("Daily_Credit", Daily_Credit, "Integer");

Bot.runCommand("اعتبار روزانه دوم");
