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
const endGameBtn = document.getElementById('end-game-btn');
const globalBackBtn = document.getElementById('global-back-btn');
const settingsBtnSetup = document.getElementById('settings-btn-setup');
const playersInputContainer = document.getElementById('players-input-container');
const submitAnswersBtn = document.getElementById('submit-answers-btn');
const playerNamesContainer = document.getElementById('player-names-container');

// Variables de estado
let players = [];
let currentRound = 0;
let maxRounds = 10;
let gameMode = 'war';
let usedMemes = [];
let currentMeme = null;
let playerAnswers = {};
let allPlayersAnswered = false;
let currentPlayerInputIndex = 0;
let playersFinished = 0;

// ===== INICIALIZACIÓN =====
window.addEventListener('load', () => {
    setupEventListeners();
    generatePlayerNameInputs(); // Generar campos de nombre al cargar
});

function setupEventListeners() {
    startGameBtn.addEventListener('click', initializeGame);
    playAgainBtn.addEventListener('click', restartGame);
    exitBtn.addEventListener('click', exitGame);
    settingsBtn.addEventListener('click', openSettings);
    settingsBtnSetup.addEventListener('click', openSettings);
    closeSettingsBtn.addEventListener('click', closeSettings);
    closeModalBtn.addEventListener('click', closeSettings);
    endGameBtn.addEventListener('click', showGameOverModal);
    globalBackBtn.addEventListener('click', goBack);
    playerCountInput.addEventListener('change', generatePlayerNameInputs);

    document.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            closeSettings();
        }
        if (e.target === gameEndModal) {
            // No cerrar haciendo click afuera
        }
    });
}

function generatePlayerNameInputs() {
    const playerCount = parseInt(playerCountInput.value);
    playerNamesContainer.innerHTML = '';

    for (let i = 1; i <= playerCount; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'setting-group';

        const label = document.createElement('label');
        label.textContent = `Nombre Jugador ${i}:`;

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Jugador ${i}`;
        input.className = 'player-name-input';
        input.dataset.playerIndex = i - 1;

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);
        playerNamesContainer.appendChild(inputGroup);
    }
}

// ===== INICIALIZACIÓN DEL JUEGO =====
function initializeGame() {
    const playerCount = parseInt(playerCountInput.value);
    const roundCountValue = roundCountSelect.value;
    gameMode = gameModeSelect.value;

    // Configurar rondas
    if (roundCountValue === 'unlimited') {
        maxRounds = TOTAL_MEMES; // Jugar hasta terminar todas las cartas
    } else {
        maxRounds = parseInt(roundCountValue);
    }

    // Crear jugadores con nombres personalizados
    players = [];
    const nameInputs = document.querySelectorAll('.player-name-input');
    
    for (let i = 1; i <= playerCount; i++) {
        let playerName = `Jugador ${i}`;
        
        if (nameInputs[i - 1] && nameInputs[i - 1].value.trim() !== '') {
            playerName = nameInputs[i - 1].value.trim();
        }
        
        players.push({
            id: i,
            name: playerName,
            score: 0,
            cardsWon: 0
        });
    }

    currentRound = 0;
    usedMemes = [];
    playerAnswers = {};

    // Mostrar pantalla de juego
    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    startNewRound();
}

// ===== INICIAR NUEVA RONDA =====
function startNewRound() {
    if (currentRound >= maxRounds || usedMemes.length >= TOTAL_MEMES) {
        showGameOverModal();
        return;
    }

    // Obtener nuevo meme
    let memeNumber;
    do {
        memeNumber = Math.floor(Math.random() * TOTAL_MEMES) + 1;
    } while (usedMemes.includes(memeNumber));

    usedMemes.push(memeNumber);
    currentMeme = memeNumber;

    // Mostrar imagen del meme
    const memePath = `memes/meme${memeNumber}.jpg`;
    cardImage.src = memePath;
    cardImage.onerror = () => {
        console.error(`Error cargando meme${memeNumber}.jpg`);
        cardImage.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="400"%3E%3Crect fill="%23333" width="300" height="400"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="14"%3EMeme ' + memeNumber + ' no disponible%3C/text%3E%3C/svg%3E';
    };

    // Limpiar respuestas anteriores
    playerAnswers = {};
    allPlayersAnswered = false;

    // Crear inputs para cada jugador
    createPlayerInputs();

    // Actualizar pantalla
    updateGameDisplay();

    submitAnswersBtn.classList.add('hidden');
}

// ===== CREAR INPUTS PARA LOS JUGADORES =====
function createPlayerInputs() {
    playersInputContainer.innerHTML = '';
    currentPlayerInputIndex = 0;
    playersFinished = 0;
    playerAnswers = {};

    showCurrentPlayerInput();
}

function showCurrentPlayerInput() {
    playersInputContainer.innerHTML = '';

    if (currentPlayerInputIndex >= players.length) {
        // Todos terminaron
        showChooseWinnerModal();
        return;
    }

    const player = players[currentPlayerInputIndex];

    // Mostrar quién está escribiendo
    const statusDiv = document.createElement('div');
    statusDiv.className = 'turn-status';
    statusDiv.innerHTML = `<h3>Turno de ${player.name}</h3><p>Escribe tu meme y presiona Enter o haz clic en Siguiente</p>`;
    playersInputContainer.appendChild(statusDiv);

    // Input solo para el jugador actual
    const inputDiv = document.createElement('div');
    inputDiv.className = 'player-input-group single';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `${player.name}, escribe tu meme aquí...`;
    input.className = 'meme-input';
    input.dataset.playerId = player.id;
    input.autofocus = true;

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveAndNext(input.value.trim(), player.id);
        }
    });

    inputDiv.appendChild(input);
    playersInputContainer.appendChild(inputDiv);

    // Botón para pasar al siguiente
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'input-buttons';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-primary';
    nextBtn.textContent = currentPlayerInputIndex === players.length - 1 ? 'Terminar y Revelar' : 'Siguiente Jugador';
    nextBtn.addEventListener('click', () => {
        saveAndNext(input.value.trim(), player.id);
    });

    buttonDiv.appendChild(nextBtn);
    playersInputContainer.appendChild(buttonDiv);
}

function saveAndNext(answer, playerId) {
    if (answer === '') {
        alert('Por favor, escribe algo antes de continuar');
        return;
    }

    playerAnswers[playerId] = answer;
    currentPlayerInputIndex++;

    if (currentPlayerInputIndex >= players.length) {
        showChooseWinnerModal();
    } else {
        showCurrentPlayerInput();
    }
}

function showChooseWinnerModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'choose-winner-modal';
    modal.innerHTML = `
        <div class="modal-content choose-winner-modal">
            <h2>¿Cuál es el mejor meme?</h2>
            <div id="meme-options-container" class="meme-options-grid"></div>
            <div class="modal-buttons">
                <button class="btn-secondary" onclick="closeWinnerModal()">Cancelar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';

    const optionsContainer = document.getElementById('meme-options-container');

    // Crear array de jugadores y mezclarlos aleatoriamente
    let shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    shuffledPlayers.forEach((player) => {
        const playerAnswer = playerAnswers[player.id];
        const optionDiv = document.createElement('div');
        optionDiv.className = 'meme-option-card';
        
        const memePath = `memes/meme${currentMeme}.jpg`;
        optionDiv.innerHTML = `
            <img src="${memePath}" alt="Meme" class="option-meme-image">
            <div class="option-text">"${playerAnswer}"</div>
            <button class="btn-primary select-btn" onclick="selectWinner(${player.id})">👍 Elegir</button>
        `;
        optionsContainer.appendChild(optionDiv);
    });
}

function selectWinner(playerId) {
    const player = players.find(p => p.id === playerId);
    player.score += 1;
    player.cardsWon += 1;

    closeWinnerModal();

    // Avanzar a la siguiente ronda
    currentRound++;
    setTimeout(() => {
        startNewRound();
    }, 500);
}

function closeWinnerModal() {
    const modal = document.getElementById('choose-winner-modal');
    if (modal) {
        modal.remove();
    }
}

// ===== ACTUALIZAR PANTALLA DEL JUEGO =====
function updateGameDisplay() {
    currentPlayerDiv.textContent = `Todos escriban su meme`;
    
    // Mostrar rondas según el modo
    if (maxRounds === TOTAL_MEMES) {
        roundInfoDiv.textContent = `Cartas usadas: ${usedMemes.length}/${TOTAL_MEMES}`;
    } else {
        roundInfoDiv.textContent = `Ronda ${currentRound + 1}/${maxRounds}`;
    }
    
    deckRemaining.textContent = `${TOTAL_MEMES - usedMemes.length} cartas`;

    updateScoresDisplay();
}

function updateScoresDisplay() {
    scoresListDiv.innerHTML = '';
    
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    
    sortedPlayers.forEach((player, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'score-item';
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
let audioPlayer = new Audio();
audioPlayer.loop = true;

if (volumeControl) {
    volumeControl.addEventListener('change', (e) => {
        audioPlayer.volume = e.target.value / 100;
    });
}

if (musicSelect) {
    musicSelect.addEventListener('change', (e) => {
        const selectedMusic = e.target.value;
        
        if (selectedMusic === 'none') {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        } else {
            const musicPath = `../musicas/${selectedMusic}.mp3`;
            audioPlayer.src = musicPath;
            audioPlayer.volume = (volumeControl.value || 70) / 100;
            audioPlayer.play().catch(() => {
                console.error(`No se pudo reproducir: ${musicPath}`);
            });
        }
    });
}

console.log('Script de Dígalo Con Memes cargado');
