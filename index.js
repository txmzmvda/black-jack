let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: "Let the game begins!",
    // chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name 
// + ": $" + player.chips;

let sumEL = document.querySelector("#sum-el");
let messageEL = document.getElementById("message-id");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
    return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    
    cardsEl.textContent = "Cards "
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEL.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "do you want another card?";
    } else if (sum === 21) {
        message = "blackjack";
        hasBlackJack = true;
    } else {
        message = "you lost";
        isAlive = false;
    }
    messageEL.textContent = message;
} 

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    }
}