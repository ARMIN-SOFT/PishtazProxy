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

function gregorian_to_jalali(gy, gm, gd) {
var g_d_m, jy, jm, jd, gy2, days;
var g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var gy2 = (gm > 2) ? (gy + 1) : gy;
var days = 355666 + (365 * gy) + parseInt((gy2 + 3) / 4) - parseInt((gy2 + 99) / 100) + parseInt((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
 jy = -1595 + (33 * parseInt(days / 12053));
days %= 12053;
jy += 4 * parseInt(days / 1461);
days %= 1461;
if (days > 365) {
jy += parseInt((days - 1) / 365);
var days = (days - 1) % 365;
}

if (days < 186) {
var jm = 1 + parseInt(days / 31);
var jd = 1 + (days % 31);
}

else {
var jm = 7 + parseInt((days - 186) / 30);
var jd = 1 + ((days - 186) % 30);
}

return [jy, jm, jd];
}

function jalali_to_gregorian(jy, jm, jd) {
var sal_a, gy, gm, gd, days;
jy += 1595;
var days = -355668 + (365 * jy) + (parseInt(jy / 33) * 8) + parseInt(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
var gy = 400 * parseInt(days / 146097);
days %= 146097;
if (days > 36524) {
gy += 100 * parseInt(--days / 36524);
days %= 36524;
if (days >= 365) days++;
}

gy += 4 * parseInt(days / 1461);
days %= 1461;
if (days > 365) {
gy += parseInt((days - 1) / 365);
var days = (days - 1) % 365;
}

var gd = days + 1;
var sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
return [gy, gm, gd];
}

var d=new Date();
var g_y=d.getFullYear();
var g_m=d.getMonth()+1;
var g_d=d.getDate();
var week=["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه"];
var week=["یكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه"];
var week= week[d.getDay()];
var shamsi=gregorian_to_jalali(g_y,g_m,g_d);
var sh_month=["-","فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
var sh_month=sh_month[shamsi[1]];

Full.setHours(Full.getHours(Full.setMinutes(Full.getMinutes()+30))+4.30);

let Time = Libs.DateTimeFormat.format(Full, "HH:MM:ss");

Bot.setProperty("DateTime", "*📆تاریخ:"+week+" "+shamsi[2]+" "+sh_month+" "+shamsi[0]+" | 🌎فصل:" + Seasons + "\n🕰زمان:" + Time + " به وقت ایران*");
