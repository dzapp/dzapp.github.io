function go() {
  alert('Welcome to the Game');
  var bacon = confirm('do you want to play');
  if (bacon) {
    play();
  } else {
    alert('NO!');
    go()
  }
}

function play() {
  alert('Banna castle protect strawberrria and is in a long going war againts bannania this castle was stolen five minutes ago and bannania is trying to steal the castle back there is a night we captured and you have to ask him questons');

  var bacon = prompt('You have entered the questining room. Are you ready? Yes or No');

  if (bacon == 'yes' || bacon == 'Yes' || bacon == 'y' || bacon == 'affirmative' || bacon == 'ok' || bacon == 'kk') {
    play2();
  }

  if (bacon == 'no') {
    alert('Ok you die.')
  }

}

function play2() {
  alert('Great! Go down the hall and through the dor labeled "Do not enter." Good luck my friend.');
  var bacon = prompt('do you see that man in chains, you must kill. Will you or will you not?')
  if (bacon == 'yes' || bacon == 'Yes' || bacon == 'y' || bacon == 'affirmative' || bacon == 'ok' || bacon == 'kk') {
play3();
  }
  if (bacon == 'no') {
    alert('you are in a very small crawl space now you will slowly die.')
  }
}
function play3() {
alert('thanks, take the key in the corner and unlock the chains and take the body to the police. Or you die!!!')
alert('you take the body to the police and the king reavels himself as a poor pesent and you killed his father, you go to jail for ever')
alert('you die in jail')

}