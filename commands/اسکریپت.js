/*CMD
  command: اسکریپت
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

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

function gregorian_to_ghamari(year,month,day){
 if(year > 1582 || (year==1581 && month > 9 && day > 14)){
var int1=parseInt((month-14)/12);
var jd=parseInt((1461*(year+4800+int1))/4)+parseInt((367*(month-2-(12*(int1))))/12)-parseInt((3*(parseInt((year+4900+int1)/100)))/4)+day-32075;
 }

else{
var jd=(367*year)-parseInt((7*(year+5001+parseInt((month-9)/7)))/4)+parseInt((275*month)/9)+day+1729777;
 }
 
var l=jd-1948440+10632;
var n=parseInt((l-1)/10631);
var l=l-10631*n+354;
var j=((parseInt((10985-l)/5316))*(parseInt((50*l)/17719)))+((parseInt(l/5670))*(parseInt((43*l)/15238)));
var l=l-(parseInt((30-j)/15))*(parseInt((17719*j)/50))-(parseInt(j/16))*(parseInt((15238*j)/43))+29;
var month=parseInt((24*l)/709);
var day=l-parseInt((709*month)/24);
var year=(30*n)+j-30;
return [year, month, day];
}

function ghamari_to_gregorian(year,month,day){
var jd=parseInt(((11*year)+3)/30)+(354*year)+(30*month)-parseInt((month-1)/2)+day+1948440-385;
 if(jd > 2299160){
var l=jd+68569;
var n=parseInt((4*l)/146097);
var l=l-parseInt((146097*n+3)/4);
var i=parseInt((4000*(l+1))/1461001);
var l=l-parseInt((1461*i)/4)+31;
var j=parseInt((80*l)/2447);
var day=l-parseInt((2447*j)/80);
var l=parseInt(j/11);
var month=j+2-(12*l);
var year=(100*(n-49))+i+l;
 }

else{
var j=jd+1402;
var k=parseInt((j-1)/1461);
var l=j-(1461*k);
var n=parseInt((l-1)/365)-parseInt(l/1461);
var i=l-(365*n)+30;
var j=parseInt((80*i)/2447);
var day=i-parseInt((2447*j)/80);
var i=parseInt(j/11);
var month=j+2-(12*i);
var year=(4*k)+n+i-4716;
}
return [year, month, day];
}

var d=new Date();
var g_y=d.getFullYear();
var g_m=d.getMonth()+1;
var g_d=d.getDate();
var week=["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه"];
var week= week[d.getDay()];
var shamsi=gregorian_to_jalali(g_y,g_m,g_d);
var sh_month=["-","فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند"];
var sh_month=sh_month[shamsi[1]];
var ghamari=gregorian_to_ghamari(g_y,g_m,g_d);
var gh_month=["-","محرّم", "صفر","ربيع الأول","ربيع الثانى","جمادى الأول","جمادى الثاني","رجب","شعبان","رمضان","شوّال","ذو القعدة","ذو الحجة"];
var gh_month=gh_month[ghamari[1]];
var mi_month=["","ژانویه","فوریه","مارس","آوریل","می","ژوئن","ژولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"];
var mi_month=mi_month[g_m];
var h=d.getHours();
var h=(h<10)?"0"+h:h;
var i=d.getMinutes();
var i=(i<10)?"0"+i:i;
var s=d.getSeconds();
var s=(s<10)?"0"+s:s;

Bot.sendMessage("امروز: "+shamsi[2]+"/"+sh_month+"/"+shamsi[0]+" , "+ghamari[2]+"/"+gh_month+"/"+ghamari[0]+" , "+g_d+"/"+mi_month+"/"+g_y+" ");

Bot.sendMessage("*📆تاریخ:"+week+" "+shamsi[2]+" "+sh_month+" "+shamsi[0]+" *");
