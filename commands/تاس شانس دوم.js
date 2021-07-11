/*CMD
  command: تاس شانس دوم
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

var Sex = User.getProperty("Sex");
var FullName = User.getProperty("FullName");

function canRun(){
var Dice_Luck = User.getProperty("Dice_Luck");
if(!Dice_Luck){ return true }

var minutes = (Date.now() - Dice_Luck) /1000/60;
var minutes_in_day = 24 * 60
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 60)
next -= wait_hours * 60
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)

if (minutes < minutes_in_day) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: " " + Sex + " " + FullName + " با عرض پوزش شما قبلا تاس شانس خود را انداختید.\n\n⌚️مدت انتظار:"+wait_hours+" ساعت "+wait_minutes+" دقیقه "+ seconds+" ثانیه",
show_alert: true
})
return
}

return true;
}

if(!canRun()){ return }
User.setProperty("Dice_Luck", Date.now(), "integer");

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄تاس شانس در حال بارگذاری می باشد...",
show_alert: false
})

Api.sendDice({ on_result:"تاس شانس سوم",emoji:"🎲"})
