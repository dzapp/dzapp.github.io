// JavaScript
var score1 = 0;
var spin1 = 0;
var cash = 2000;
var pic1 = [1,2,3];
function spin() {
  spin1++;
  var win = "You Win!";
  var first_number = pic1[Math.floor(Math.random() * 3)];
  one.innerHTML = first_number;
  
  var second_number = pic1[Math.floor(Math.random() * 3)];
  two.innerHTML = second_number;
  
  var third_number = pic1[Math.floor(Math.random() * 3)];
  three.innerHTML = third_number;
  
  if(first_number == pic1[2] &&  second_number == pic1[2] && third_number == pic1[2]){
    result.innerHTML = win;
    score1++;
    score.innerHTML = score1;
    cash = cash + 150;
  }
  cash = cash - 10;
  var percent = score1 / spin1 * 100;
  percentage.innerHTML = percent.toFixed(4) + "%";
  money.innerHTML = cash;
}
