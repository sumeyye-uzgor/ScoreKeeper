const p1 = {
    score: 0,
    button: document.querySelector('#btnPlyr1'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#btnPlyr2'),
    display: document.querySelector('#p2Display')
}

const winScoreSelect = document.querySelector('#playto');
const resetButton = document.querySelector('#btnRst');
let winScore = parseInt(winScoreSelect.value);
let isGameOver = false;



p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});

resetButton.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;
    resetPlyr(p1);
    resetPlyr(p2);
}

function resetPlyr(plyr) {
    plyr.score = 0;
    plyr.display.textContent = plyr.score;
    plyr.display.classList.remove('has-text-success', 'has-text-danger');
    plyr.button.disabled = false;
}