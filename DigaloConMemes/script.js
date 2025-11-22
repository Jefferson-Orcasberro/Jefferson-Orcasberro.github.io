// ===== VARIABLES GLOBALES =====
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;
const TOTAL_MEMES = 50;

// Referencias del DOM
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const playerCountInput = document.getElementById('player-count');
const gameModeSelect = document.getElementById('game-mode');
const roundCountSelect = document.getElementById('round-count');
const startGameBtn = document.getElementById('start-game-btn');
const drawBtn = document.getElementById('draw-btn');
const deckRemaining = document.getElementById('deck-remaining');
const cardImage = document.getElementById('card-image');
const currentPlayerDiv = document.getElementById('current-player');
const roundInfoDiv = document.getElementById('round-info');
const scoresListDiv = document.getElementById('scores-list');
const gameEndModal = document.getElementById('game-end-modal');
const winnerAnnouncement = document.getElementById('winner-announcement');
const finalScoresListDiv = document.getElementById('final-scores-list');
const playAgainBtn = document.getElementById('play-again-btn');
const exitBtn = document.getElementById('exit-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = document.getElementById('close-settings');
const closeModalBtn = document.querySelector('.close');
const nextRoundBtn = document.getElementById('next-round-btn');
const endGameBtn = document.getElementById('end-game-btn');
const globalBackBtn = document.getElementById('global-back-btn');

// Variables de estado
let players = [];
let currentRound = 0;
let maxRounds = 10;
let gameMode = 'war';
let usedMemes = [];
let currentMeme = null;

// ===== INICIALIZACIÓN =====
window.addEventListener('load', () => {
    setupEventListeners();
});

function setupEventListeners() {
    startGameBtn.addEventListener('click', initializeGame);
    drawBtn.addEventListener('click', drawMeme);
    playAgainBtn.addEventListener('click', restartGame);
    exitBtn.addEventListener('click', exitGame);
    settingsBtn.addEventListener('click', openSettings);
    closeSettingsBtn.addEventListener('click', closeSettings);
    closeModalBtn.addEventListener('click', closeSettings);
    nextRoundBtn.addEventListener('click', nextRound);
    endGameBtn.addEventListener('click', showGameOverModal);
    globalBackBtn.addEventListener('click', goBack);

    document.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            closeSettings();
        }
        if (e.target === gameEndModal) {
            // No cerrar haciendo click afuera
        }
    });
}

// ===== INICIALIZACIÓN DEL JUEGO =====
function initializeGame() {
    const playerCount = parseInt(playerCountInput.value);
    maxRounds = parseInt(roundCountSelect.value);
    gameMode = gameModeSelect.value;

    // Crear jugadores
    players = [];
    for (let i = 1; i <= playerCount; i++) {
        players.push({
            id: i,
            name: `Jugador ${i}`,
            score: 0,
            cardsWon: 0
        });
    }

    currentRound = 0;
    usedMemes = [];

    // Mostrar pantalla de juego
    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    updateGameDisplay();
}

// ===== LÓGICA DE CARTAS =====
function drawMeme() {
    if (usedMemes.length >= TOTAL_MEMES) {
        showGameOverModal();
        return;
    }

    // Generar número de meme aleatorio que no se haya usado
    let memeNumber;
    do {
        memeNumber = Math.floor(Math.random() * TOTAL_MEMES) + 1;
    } while (usedMemes.includes(memeNumber));

    usedMemes.push(memeNumber);
    currentMeme = memeNumber;

    // Mostrar imagen del meme
    const memePath = `memes/meme${memeNumber}.jpg`;
    cardImage.src = memePath;
    cardImage.onload = () => {
        console.log(`Meme ${memeNumber} cargado`);
    };
    cardImage.onerror = () => {
        console.error(`Error cargando meme${memeNumber}.jpg`);
        cardImage.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="300"%3E%3Crect fill="%23333" width="200" height="300"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="14"%3EMeme ' + memeNumber + ' no disponible%3C/text%3E%3C/svg%3E';
    };

    // Actualizar puntos del jugador actual
    const currentPlayer = players[currentRound % players.length];
    currentPlayer.score += Math.floor(Math.random() * 10) + 1;
    currentPlayer.cardsWon += 1;

    drawBtn.disabled = true;
    nextRoundBtn.classList.remove('hidden');
    deckRemaining.textContent = `${TOTAL_MEMES - usedMemes.length} cartas`;
}

// ===== CONTROL DE RONDAS =====
function nextRound() {
    currentRound++;

    if (currentRound >= maxRounds || usedMemes.length >= TOTAL_MEMES) {
        showGameOverModal();
        return;
    }

    drawBtn.disabled = false;
    nextRoundBtn.classList.add('hidden');
    cardImage.src = '';
    updateGameDisplay();
}

function updateGameDisplay() {
    const currentPlayer = players[currentRound % players.length];
    
    currentPlayerDiv.textContent = `Turno: ${currentPlayer.name}`;
    roundInfoDiv.textContent = `Ronda ${currentRound + 1}/${maxRounds}`;
    deckRemaining.textContent = `${TOTAL_MEMES - usedMemes.length} cartas`;

    // Actualizar scores
    updateScoresDisplay();
}

function updateScoresDisplay() {
    scoresListDiv.innerHTML = '';
    
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    
    sortedPlayers.forEach((player, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'score-item';
        if (player.id === players[currentRound % players.length].id) {
            scoreItem.classList.add('active');
        }
        scoreItem.innerHTML = `
            <span class="score-item-name">#${index + 1} ${player.name}</span>
            <span class="score-item-points">${player.score} pts</span>
        `;
        scoresListDiv.appendChild(scoreItem);
    });
}

// ===== MODAL DE FIN DE PARTIDA =====
function showGameOverModal() {
    gameScreen.classList.add('hidden');
    gameEndModal.classList.remove('hidden');

    // Encontrar ganador
    const winner = players.reduce((prev, current) => 
        (prev.score > current.score) ? prev : current
    );

    winnerAnnouncement.textContent = `🎉 ¡${winner.name} ganó con ${winner.score} puntos!`;

    // Mostrar scores finales
    finalScoresListDiv.innerHTML = '';
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    
    sortedPlayers.forEach((player, index) => {
        const li = document.createElement('li');
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        li.innerHTML = `<span>${medal} ${player.name}</span><span>${player.score} pts</span>`;
        finalScoresListDiv.appendChild(li);
    });
}

// ===== CONTROLES DEL JUEGO =====
function restartGame() {
    gameEndModal.classList.add('hidden');
    setupScreen.classList.remove('hidden');
    currentRound = 0;
    usedMemes = [];
    cardImage.src = '';
    drawBtn.disabled = false;
    nextRoundBtn.classList.add('hidden');
}

function exitGame() {
    // Redirigir a la página principal
    window.location.href = '../index.html';
}

function goBack() {
    if (gameScreen.classList.contains('hidden')) {
        exitGame();
    } else {
        if (confirm('¿Deseas salir de la partida en curso?')) {
            exitGame();
        }
    }
}

// ===== MODAL DE AJUSTES =====
function openSettings() {
    settingsModal.classList.remove('hidden');
}

function closeSettings() {
    settingsModal.classList.add('hidden');
}

// Controles de volumen y música
const volumeControl = document.getElementById('volume');
const musicSelect = document.getElementById('music-select');

if (volumeControl) {
    volumeControl.addEventListener('change', (e) => {
        console.log(`Volumen: ${e.target.value}%`);
    });
}

if (musicSelect) {
    musicSelect.addEventListener('change', (e) => {
        console.log(`Música: ${e.target.value}`);
    });
}

console.log('Script de Dígalo Con Memes cargado');
