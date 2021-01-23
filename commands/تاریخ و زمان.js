/*CMD
  command: تاریخ و زمان
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var Full = new Date();
var Year = Full.getFullYear();
var Month = Full.getMonth();
var A_Date = Full.getDate();
var B_Date = Full.getDay();
var Years;
switch (B_Date) {
case 0:
var Weeks_Days = "یکشنبه";
break;
case 1:
var Weeks_Days = "دوشنبه";
break;
case 2:
var Weeks_Days = "سه شنبه";
break;
case 3:
var Weeks_Days = "چهارشنبه";
break;
case 4:
var Weeks_Days = "پنجشنبه";
break;
case 5:
var Weeks_Days = "جمعه";
break;
case 6:
var Weeks_Days = "شنبه";
break;
}

switch (Month) {
case 0:
Years = Year - 622;
if (A_Date <= 20) {
var Months = "دی";
var Seasons = "☃زمستان";
var Days = A_Date + 10;
}

else {
var Months = "بهمن";
var Seasons = "☃زمستان";
var Days = A_Date - 20;
}

break;
case 1:
Years = Year - 622;
if (A_Date <= 19) {
var Months = "بهمن";
var Seasons = "☃زمستان";
var Days = A_Date + 11;
}

else {
var Months = "اسفند";
var Seasons = "☃زمستان";
var Days = A_Date - 19;
}

break;
case 2:
{
if ((Year - 621) % 4 == 0) var i = 10;
else var i = 9;
if (A_Date <= 20) {
Years = Year - 622;
var Months = "اسفند";
var Seasons = "☃زمستان";
var Days = A_Date + i;
}

else {
Years = Year - 621;
var Months = "فروردین";
var Seasons = "🍃بهار";
var Days = A_Date - 20;
}
}

break;
case 3:
Years = Year - 621;
if (A_Date <= 20) {
var Months = "فروردین";
var Seasons = "🍃بهار";
var Days = A_Date + 11;
}

else {
var Months = "اردیبهشت";
var Seasons = "🍃بهار";
var Days = A_Date - 20;
}

break;
case 4:
Years = Year - 621;
if (A_Date <= 21) {
var Months = "اردیبهشت";
var Seasons = "🍃بهار";
var Days = A_Date + 10;
}

else {
var Months = "خرداد";
var Seasons = "🍃بهار";
var Days = A_Date - 21;
}

break;
case 5:
Years = Year - 621;
if (A_Date <= 21) {
var Months = "خرداد";
var Seasons = "🍃بهار";
var Days = A_Date + 10;
}

else {
var Months = "تیر";
var Seasons = "🏝تابستان";
var Days = A_Date - 21;
}

break;
case 6:
Years = Year - 621;
if (A_Date <= 22) {
var Months = "تیر";
var Seasons = "🏝تابستان";
var Days = A_Date + 9;
}

else {
var Months = "مرداد";
var Seasons = "🏝تابستان";
var Days = A_Date - 22;
}

break;
case 7:
Years = Year - 621;
if (A_Date <= 22) {
var Months = "مرداد";
var Seasons = "🏝تابستان";
var Days = A_Date + 9;
}

else {
var Months = "شهریور";
var Seasons = "🏝تابستان";
var Days = A_Date - 22;
}

break;
case 8:
Years = Year - 621;
if (A_Date <= 22) {
var Months = "شهریور";
var Seasons = "🏝تابستان";
var Days = A_Date + 9;
}

else {
var Months = "مهر";
var Seasons = "🍂پاییز";
var Days = A_Date + 22;
}

break;
case 9:
Years = Year - 621;
if (A_Date <= 22) {
var Months = "مهر";
var Seasons = "🍂پاییز";
var Days = A_Date + 8;
}

else {
var Months = "آبان";
var Seasons = "🍂پاییز";
var Days = A_Date - 22;
}

break;
case 10:
Years = Year - 621;
if (A_Date <= 21) {
var Months = "آبان";
var Seasons = "🍂پاییز";
var Days = A_Date + 9;
}

else {
var Months = "آذر";
var Seasons = "🍂پاییز";
var Days = A_Date - 21;
}

break;
case 11:
Years = Year - 621;
if (A_Date <= 19) {
var Months = "آذر";
var Seasons = "🍂پاییز";
var Days = A_Date + 9;
}

else {
var Months = "دی";
var Seasons = "☃زمستان";
var Days = A_Date + 21;
}

break;
}

Full.setHours(Full.getHours(Full.setMinutes(Full.getMinutes()-30))+4.30);

let Time = Libs.DateTimeFormat.format(Full, "HH:MM:ss");

Bot.setProperty("DateTime", "*📆تاریخ:" + Weeks_Days + " " +[Days + 1] + " " + Months + " " + Years + " | 🌎فصل:" + Seasons + "\n🕰زمان:" + Time + " به وقت ایران*");
