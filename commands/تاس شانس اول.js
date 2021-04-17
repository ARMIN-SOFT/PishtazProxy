/*CMD
  command: تاس شانس اول
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let String = Libs.Random.randomInt(500,3000);

let Dice_Luck = String;

Bot.setProperty("Dice_Luck", Dice_Luck, "Integer");

Bot.runCommand("تاس شانس دوم");
