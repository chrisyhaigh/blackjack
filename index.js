let num1;
let num2;

let message = document.getElementById('message-element');

let totalScore = 0;

let blackjack = false;
let isInGame = true;


function dealCards() {

    num1 = Math.floor((Math.random() * 13) + 1);
    num2 = Math.floor((Math.random() * 13) + 1);

    totalScore = num1 + num2;
    
    let card1 = document.getElementById('card-1');
    let card2 = document.getElementById('card-2');
    let total = document.getElementById('total-score');

    card1.textContent = 'Card: ' + num1;
    card2.textContent = 'Card: ' + num2;

    total.textContent = 'Total Score: ' + totalScore;

    if (totalScore < 21) {
        message.textContent = 'Would you like to Play another card?'
    } else if (totalScore === 21) {
        message.textContent = 'BLACKJACK!'
    } else {
        message.textContent = 'Bust!'
    }
    
}