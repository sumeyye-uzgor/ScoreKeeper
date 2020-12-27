const winScoreSelect = document.querySelector('#playto');
const p1Button = document.querySelector('#btnPlyr1');
const p2Button = document.querySelector('#btnPlyr2');
const resetButton = document.querySelector('#btnRst');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let winScore = 5;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winScore) {
            isGameOver = true;
            p1Display.style.color = 'green';
            p2Display.style.color = 'red';
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winScore) {
            isGameOver = true;
            p1Display.style.color = 'red';
            p2Display.style.color = 'green';
            p2Button.disabled = true;
            p1Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.style.color = 'black';
    p2Display.style.color = 'black';
    p1Button.disabled = false;
    p2Button.disabled = false;
}