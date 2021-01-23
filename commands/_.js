/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var valid = message.indexOf("/Reply_SMS_Account") + 1
if (!valid){
}

else {
var tgid = message.split("/Reply_SMS_Account")[1]
if (!tgid){
}

else {
Bot.run({
command: "پاسخ پیامک حساب کاربری",
options: { tgid: tgid} 
})
}
}

var valid2 = message.indexOf("/Reply_SMS_Original") + 1
if (!valid2){
}

else {
var tgid2 = message.split("/Reply_SMS_Original")[1]
if (!tgid2){
}

else {
Bot.run({
command: "پاسخ پیامک اصلی",
options: { tgid: tgid2} 
})
}
}
