const board = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
let score = 0;
let moleInterval;

function startGame() {
    moleInterval = setInterval(placeMole, 1000);
}

function placeMole() {
    const mole = document.createElement('div');
    mole.classList.add('mole');
    mole.textContent = '🐭';

    mole.addEventListener('click', () => {
        whackMole(mole);
    });

    const randomColumn = Math.floor(Math.random() * 3) + 1;
    const randomRow = Math.floor(Math.random() * 3) + 1;

    mole.style.gridColumn = randomColumn;
    mole.style.gridRow = randomRow;

    board.appendChild(mole);

    setTimeout(() => {
        if (!mole.classList.contains('whacked')) {
            removeMole(mole);
        }
    }, 2000);
}

function whackMole(mole) {
    if (!mole.classList.contains('whacked')) {
        mole.classList.add('whacked');
        removeMole(mole);
        increaseScore();
    }
}

function removeMole(mole) {
    mole.remove();
}

function increaseScore() {
    score++;
    scoreDisplay.textContent = score;
}

function endGame() {
    clearInterval(moleInterval);
    alert(`Game over! Your final score is ${score}.`);
    resetGame();
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    removeAllMoles();
}

function removeAllMoles() {
    const moles = document.querySelectorAll('.mole');
    moles.forEach(mole => mole.remove());
}

// Initialize the game
startGame();
setTimeout(endGame, 15000); // End the game after 15 seconds
