/*CMD
  command: روزانه اول
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let String = Libs.Random.randomInt(1000,3000);
let Daily = String;

Bot.setProperty("Daily", Daily, "Integer");

Bot.runCommand("روزانه دوم");
