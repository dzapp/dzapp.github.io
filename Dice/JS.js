// Main Menu Scipt/button toggles
function showDice() {
    var games = document.getElementsByClassName('game');
    for (var i = 0; i < games.length; i++) {
        games[i].classList.remove('show');
    }
    diceBox.classList.add('show');
}

function showSlot() {
    var games = document.getElementsByClassName('game');
    for (var i = 0; i < games.length; i++) {
        games[i].classList.remove('show');
    }
    slotBox.classList.add('show');
    consol.log(slotBox);
}


// Dice Roll Game
var money = 100;

function rollDice() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var yourBet = moneyBet.value;
    var yourNum = luckyNum.value;

    //     alert("You rolled: " + die1 + "and" + die2);
    //     alert("You bet $" + yourBet + "on getting " + yourNum);
    document.getElementById("results").innerHTML = "You rolled: " + die1 + " and " + die2 + "<br>" +
        " You bet $" + yourBet + " on getting " + yourNum;

    if ((die1 + die2) == yourNum) {
        var winnings = yourBet * 10;
        //         alert("congrats! you won! yay!");
        money += winnings;
        yourMoney.innerHTML = money;
        document.getElementById("NextResponse").innerHTML = "Congrats! You Won! Yay!";
    } else {
        //         alert("you lost! give us some more!!");
        money -= yourBet;
        yourMoney.innerHTML = money;
        document.getElementById("NextResponse").innerHTML = "You Lost! Play More or Leave!";
    }
}

function reset() {
    money = 100;
    yourMoney.innerHTML = money;
    document.getElementById('moneyBet').value = '';
    document.getElementById('luckyNum').value = '';

}