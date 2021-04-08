'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

const displayNumber = function (number) {
    document.querySelector(".number").textContent = number;
}

const bgColorChange = function (bgColor) {
    document.querySelector('body').style.backgroundColor = bgColor;
}
// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
// IF NO INPUT
    if (!guess) {
        displayMessage('❌ No Number');
        // document.querySelector('.message').textContent = '❌ No Number';

    } else if (guess > 20) {
        displayMessage('Between 1 & 20');

    } else if (guess === number) {
        displayMessage('🎊 success');
        bgColorChange('#60b347');
        displayNumber(number);
        document.querySelector(".number").style.width = '30rem';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? '📈 Too High' : '📈 Too Low');
            score--;
            displayScore(score);
        } else {
            displayMessage('💥  You lost the game ');
            bgColorChange('red');
            displayScore(0);
        }
        
        
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
     displayMessage('Start guessing...');
     displayScore(score);
     displayNumber ('?');
    bgColorChange('#222');
    document.querySelector('.guess').value = ' ';
    document.querySelector(".number").style.width = '15rem';
})













