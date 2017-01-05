var potatoes = document.getElementById("potatoes");
var ham = document.getElementById("ham");

function go() {
  // alert('welcome to the game')
  potatoes.innerHTML = 'Welcome to the game. Do You want to play?';
  ham.innerHTML = ' <br><button onclick="play()">Play!</button><button onclick="go()">Do not play</button>';
}

function play() {
  // alert('Banna castle protect strawberrria and is in a long going war againts bannania this castle was stolen five minutes ago and bannania is trying to steal the castle back there is a night we captured and you have to ask him questons');
  potatoes.innerHTML = 'Banna castle protect strawberrria and is in a long going war againts bannania this castle was stolen five minutes ago and bannania is trying to steal the castle back there is a night we captured and you have to ask him questons. You have entered the questining room. Are you ready? Yes or No';
  ham.innerHTML ="<br><button onclick='play2()'>Yes</button><button onclick='go()'>No</button>";
  // if (bacon == 'yes' || bacon == 'Yes' || bacon == 'y' || bacon == 'affirmative' || bacon == 'ok' || bacon == 'kk') {

  if (bacon == 'no') {
    //alert('Ok you die.') 
    ham.innerHTML = "ok yuo die";
  }

}

function play2() {
  potatoes.innerHTML = 'Great! Go down the hall and through the dor labeled "Do not enter. Good luck my friend. do you see that man in chains, you must kill him. Will you or will you not?';
    // alert('Great! Go down the hall and through the dor labeled "Do not enter." Good luck my friend.');
    // var bacon = prompt('do you see that man in chains, you must kill. Will you or will you not?')
    //if (bacon == 'yes' || bacon == 'Yes' || bacon == 'y' || bacon == 'affirmative' || bacon == 'ok' || bacon == 'kk') {
  ham.innerHTML = "<br><button onclick='play3()'>I Will!</button><button onclick='go()'>I will not </button>";

}
if (bacon == "no") {
  potatoes.innerHTML = 'you are in a very small crawl space now you will slowly die'
    //  alert('you are in a very small crawl space now you will slowly die.')
  if (bacon == "no") {

  }
}

function play3() {
  potatoes.innerHTML = 'thanks, take the key in the corner and unlock the chains and take the body to the police. Or you die!!!'
  potatoes.innerHTML = 'you take the body to the police and the king reavels himself as a poor pesent and you killed his father, you go to jail for ever. You die in jail'
    //alert('you take the body to the police and the king reavels himself as a poor pesent and you killed his father, you go to jail for ever')
    //alert('you die in jail'
    //alert('thanks, take the key in the corner and unlock the chains and take the body to the police. Or you die!!!')
    //alert('you take the body to the police and the king reavels himself as a poor pesent and you killed his father, you go to jail for ever')
    //alert('you die in jail')
  ham.innerHTML = "";

}