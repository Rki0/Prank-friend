document.querySelector("#name").innerHTML = prompt("당신의 이름은 무엇인가요?");
var birthDay = new Date(prompt("당신의 생일은?","YYYY-MM-DD로 입력해주세요."));
var nowDay = new Date();
var length = nowDay - birthDay;

var frombirth = birthDay.getTime();
var toNow = nowDay.getTime();
var solo = Math.round((toNow - frombirth)/(1000*60*60*24));
document.querySelector("#accent").innerHTML = solo + "일";

calcDate(8000);
calcDate(9000);
calcDate(10000);
calcDate(20000);

function calcDate(days){
    var future = frombirth + days*(1000*60*60*24);
    var someDay = new Date(future);
    var year = someDay.getFullYear();
    var month = someDay.getMonth() + 1;
    var date = someDay.getDate();
    document.querySelector("#date" + days).innerHTML = year + "년" + month + "월" + date + "일";
}