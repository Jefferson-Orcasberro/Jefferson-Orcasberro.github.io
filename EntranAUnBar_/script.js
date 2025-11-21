document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DEL DOM ---
    const playerSelection = document.getElementById('player-selection');
    const gameContainer = document.getElementById('game-container');
    const playerCountInput = document.getElementById('player-count-input');
    const setCountButton = document.getElementById('set-count-button');
    const nameInputsDiv = document.getElementById('name-inputs');
    const startButton = document.getElementById('start-button');
    const errorMessage = document.getElementById('error-message');
    
    const currentRoundDisplay = document.getElementById('current-round');
    const playerDiosDisplay = document.getElementById('player-dios');
    const playerHitlerDisplay = document.getElementById('player-hitler');
    const playerGhandiDisplay = document.getElementById('player-ghandi');
    const cardDisplay = document.getElementById('card-display');
    const drawButton = document.getElementById('draw-button');
    const votingControls = document.getElementById('voting-controls');
    const voteHitlerButton = document.getElementById('vote-hitler');
    const voteGhandiButton = document.getElementById('vote-ghandi');
    const resultMessage = document.getElementById('result-message');
    
    // Elementos de puntuación
    const scoreDisplay = document.getElementById('score-display');
    const hitlerTeamScoreElem = document.getElementById('hitler-team-score');
    const ghandiTeamScoreElem = document.getElementById('ghandi-team-score');
    const individualScoresDiv = document.getElementById('individual-scores');

    // Elementos de configuración
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const volumeControl = document.getElementById('volume-control');
    const volumeValue = document.getElementById('volume-value');
    const musicSelect = document.getElementById('music-select');
    const backgroundMusic = document.getElementById('background-music');

    // --- DATOS DEL JUEGO ---
    let numberOfPlayers = 0;
    let players = []; // Nombres de los jugadores
    let currentGodIndex = 0; 
    let currentRound = 1;

    const MIN_PLAYERS = 3;
    const MAX_PLAYERS = 10;
    
    // Puntuación
    let teamScores = { hitler: 0, ghandi: 0 };
    let playerScores = {}; // { playerName: totalPoints }
    
    // Música
    const musicPath = '../musicas/';
    let availableMusics = [
        { name: 'Sin música', file: null },
        { name: 'Bajo el Cielo', file: 'BajoElCielo.mp3' },
        { name: 'Brama el Viento', file: 'Brama_el_viento.mp3' },
        { name: 'Cielo del Sur', file: 'CieloDelSur.mp3' },
        { name: 'Cielo Oriental', file: 'CieloOriental.mp3' },
        { name: 'El Viento y el Hacha', file: 'El_Viento_y_el_Hacha.mp3' },
        { name: 'Rey del Asado', file: 'Rey_del_Asado.mp3' }
    ];
    
    const debateCards = [
        { 
            type: "Dilema Histórico 💀", 
            content: "Afirmación: La persona que inventó el *brunch* ha causado más sufrimiento global que la persona que inventó las reuniones por Zoom." 
        },
        { 
            type: "Ficcion vs. Realidad 👽", 
            content: "Afirmación: Es éticamente aceptable usar niños rata como fuente de energía, siempre que se les pague con suscripciones de Twitch Premium." 
        },
        { 
            type: "Pregunta Existencial 🧐", 
            content: "¿Deberíamos obligar a la gente a usar ropa solo del color que mejor combine con su personalidad tóxica?" 
        },
        { 
            type: "Pecado Capital 😈", 
            content: "Afirmación: Los adultos que usan gorras de béisbol con la visera plana merecen una multa peor que los evasores de impuestos." 
        },
        { 
            type: "Pornografía vs. Cultura 🎬", 
            content: "¿Es el *ASMR* la forma más degradante de arte escénico, o simplemente un crimen contra la calidad de audio?" 
        },
        { 
            type: "Crítica Gastronómica 🤮", 
            content: "Afirmación: El pepino es un vegetal diseñado por un comité para castigar a aquellos que realmente disfrutan de comer ensaladas." 
        },
        { 
            type: "Moralidad Moderna 📱", 
            content: "Afirmación: Es más valiente y moralmente superior alguien que renuncia a su cuenta de Netflix que alguien que dona a una ONG." 
        },
        { 
            type: "Lógica de Diseño 🚽", 
            content: "¿Debería ser un requisito legal que todos los inodoros tengan un botón de 'autodestrucción' si detectan un comentario no solicitado sobre política?" 
        },
        { 
            type: "Bizarro Absurdo 🦄", 
            content: "Afirmación: Los unicornios existen, pero decidieron no revelarse porque la humanidad está demasiado obsesionada con el *CrossFit*." 
        },
        { 
            type: "Picante Tecnológico 🔥", 
            content: "Afirmación: Las *selfies* son una práctica social tan vulgar que deberían considerarse contenido no apto para el trabajo (NSFW)." 
        }
    ];

    let currentRoles = {}; // Guarda los roles de la ronda actual

    // --- LÓGICA DE INICIO Y NOMBRES ---

    setCountButton.addEventListener('click', () => {
        const count = parseInt(playerCountInput.value);
        
        if (isNaN(count) || count < MIN_PLAYERS || count > MAX_PLAYERS) {
            errorMessage.textContent = `¡El número de jugadores debe ser entre ${MIN_PLAYERS} y ${MAX_PLAYERS}!`;
            nameInputsDiv.classList.add('hidden');
            startButton.classList.add('hidden');
            return;
        }

        numberOfPlayers = count;
        errorMessage.textContent = '';
        renderNameInputs(count);
    });

    /**
     * Crea dinámicamente los campos de entrada de nombres.
     */
    function renderNameInputs(count) {
        nameInputsDiv.innerHTML = '';
        nameInputsDiv.classList.remove('hidden');
        
        for (let i = 1; i <= count; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Nombre Jugador ${i}`;
            input.id = `player-name-${i}`;
            input.value = `Jugador ${i}`; // Valor por defecto
            nameInputsDiv.appendChild(input);
        }

        startButton.classList.remove('hidden');
    }

    startButton.addEventListener('click', () => {
        // Recoger los nombres y validar que no estén vacíos
        players = [];
        let allValid = true;
        for (let i = 1; i <= numberOfPlayers; i++) {
            const name = document.getElementById(`player-name-${i}`).value.trim();
            if (name === "") {
                allValid = false;
                break;
            }
            players.push(name);
            playerScores[name] = 0; // Inicializar puntos individuales
        }

        if (!allValid) {
            errorMessage.textContent = "Por favor, ingresa el nombre de todos los jugadores.";
            return;
        }

        // Iniciar el juego
        playerSelection.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        
        // Asignar roles iniciales y esperar el primer click de "Sacar Carta"
        currentGodIndex = 0;
        currentRound = 1;
        teamScores = { hitler: 0, ghandi: 0 }; // Resetear puntos de equipos
        
        currentRoles = assignRoles(currentGodIndex);
        renderRoles(currentRoles);
        renderScores(); // Mostrar puntuación inicial

        votingControls.classList.add('hidden');
        resultMessage.classList.add('hidden');
        
        // Actualizar nombres de los botones de votación
        voteHitlerButton.textContent = `Gana EQUIPO HITLER`;
        voteGhandiButton.textContent = `Gana EQUIPO GHANDI`;
    });


    // --- LÓGICA DE ROLES Y ROTACIÓN ---

    function assignRoles(godIndex) {
        const diosPlayer = players[godIndex % numberOfPlayers];
        const numRemaining = numberOfPlayers - 1; 
        const numHitler = Math.ceil(numRemaining / 2);
        
        let hitlerTeam = [];
        let ghandiTeam = [];
        
        let teamStartIndex = (godIndex + 1) % numberOfPlayers; 
        
        for (let i = 0; i < numRemaining; i++) {
            const playerIndex = (teamStartIndex + i) % numberOfPlayers;
            const player = players[playerIndex];

            if (i < numHitler) {
                hitlerTeam.push(player); 
            } else {
                ghandiTeam.push(player); 
            }
        }

        return { dios: diosPlayer, hitler: hitlerTeam, ghandi: ghandiTeam };
    }
    
    function renderRoles(roles) {
        currentRoundDisplay.textContent = `Ronda ${currentRound}`;
        playerDiosDisplay.textContent = roles.dios;
        playerHitlerDisplay.textContent = roles.hitler.join(', ');
        playerGhandiDisplay.textContent = roles.ghandi.join(', ');
    }

    /**
     * Renderiza la puntuación de equipos e individuales
     */
    function renderScores() {
        // Actualizar puntos de equipos
        hitlerTeamScoreElem.textContent = teamScores.hitler;
        ghandiTeamScoreElem.textContent = teamScores.ghandi;
        
        // Actualizar puntos individuales
        individualScoresDiv.innerHTML = '';
        players.forEach(player => {
            const scoreItem = document.createElement('div');
            scoreItem.className = 'individual-score-item';
            scoreItem.innerHTML = `<span class="player-name">${player}</span>: <span class="player-points">${playerScores[player]}</span>`;
            individualScoresDiv.appendChild(scoreItem);
        });
    }

    // --- LÓGICA DE JUEGO Y VOTACIÓN ---
    
    let cardHasBeenDrawn = false; // Bandera para controlar si se ha sacado una carta

    function getRandomCard() {
        const randomIndex = Math.floor(Math.random() * debateCards.length);
        return debateCards[randomIndex];
    }

    // El Juez saca una nueva carta para iniciar la ronda
    drawButton.addEventListener('click', () => {
        // Bloquear el botón de sacar carta hasta que se vote
        drawButton.disabled = true;
        votingControls.classList.remove('hidden');
        resultMessage.classList.add('hidden');
        
        // Habilitar botones de votación solo después de sacar carta
        voteHitlerButton.disabled = false;
        voteGhandiButton.disabled = false;
        cardHasBeenDrawn = true;
        
        // 1. Asignar y mostrar roles (usando el índice actual antes de incrementar)
        currentRoles = assignRoles(currentGodIndex);
        renderRoles(currentRoles);

        // 2. Sacar y mostrar nueva carta
        const card = getRandomCard();
        
        cardDisplay.style.opacity = 0;
        setTimeout(() => {
            cardDisplay.querySelector('.card-type').textContent = card.type;
            cardDisplay.querySelector('.card-content').textContent = card.content;
            cardDisplay.style.opacity = 1;
        }, 100); 
    });
    
    // Función de votación (común para ambos botones)
    function handleVote(winnerTeamName) {
        const winnerTeam = winnerTeamName === 'Hitler' ? currentRoles.hitler : currentRoles.ghandi;
        const godName = currentRoles.dios;

        // Sumar 1 punto al equipo ganador
        if (winnerTeamName === 'Hitler') {
            teamScores.hitler += 1;
        } else {
            teamScores.ghandi += 1;
        }

        // Sumar 1 punto a cada jugador del equipo ganador
        winnerTeam.forEach(playerName => {
            playerScores[playerName] += 1;
        });

        const winnerNames = winnerTeam.join(', ');
        resultMessage.textContent = `¡${godName} ha decidido! El Equipo ganador es ${winnerTeamName}. Felicitaciones a: ${winnerNames}.`;
        resultMessage.classList.remove('hidden');
        
        // Actualizar puntuación en pantalla
        renderScores();
        
        // Ocultar votación y habilitar botón para la próxima ronda
        votingControls.classList.add('hidden');
        voteHitlerButton.disabled = true;
        voteGhandiButton.disabled = true;
        cardHasBeenDrawn = false;
        drawButton.disabled = false;
        
        // Preparar para la próxima ronda (Rotar roles)
        currentGodIndex++;
        currentRound++;
    }

    // Event listeners para los botones de votación
    voteHitlerButton.addEventListener('click', () => handleVote('Hitler'));
    voteGhandiButton.addEventListener('click', () => handleVote('Ghandi'));

    // --- FUNCIONALIDAD DE CONFIGURACIONES ---

    /**
     * Actualizar el select de música con las opciones disponibles
     */
    function updateMusicSelect() {
        musicSelect.innerHTML = '';
        availableMusics.forEach((music, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = music.name;
            musicSelect.appendChild(option);
        });
    }

    /**
     * Abrir modal de configuraciones
     */
    settingsBtn.addEventListener('click', () => {
        settingsModal.classList.remove('hidden');
    });

    /**
     * Cerrar modal de configuraciones
     */
    closeModalBtn.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
    });

    /**
     * Cerrar modal si se hace click fuera del contenido
     */
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.add('hidden');
        }
    });

    /**
     * Controlar volumen
     */
    volumeControl.addEventListener('input', (e) => {
        const volume = e.target.value;
        volumeValue.textContent = volume + '%';
        backgroundMusic.volume = volume / 100;
        localStorage.setItem('musicVolume', volume);
    });

    /**
     * Cambiar música
     */
    musicSelect.addEventListener('change', (e) => {
        const selectedIndex = parseInt(e.target.value);
        const selectedMusic = availableMusics[selectedIndex];
        
        if (selectedMusic.file) {
            backgroundMusic.src = musicPath + selectedMusic.file;
            backgroundMusic.play().catch(err => console.log('Autoplay bloqueado:', err));
        } else {
            backgroundMusic.pause();
            backgroundMusic.src = '';
        }
        
        localStorage.setItem('selectedMusic', selectedIndex);
    });

    /**
     * Cargar configuraciones guardadas
     */
    function loadSavedSettings() {
        const savedVolume = localStorage.getItem('musicVolume');
        const savedMusic = localStorage.getItem('selectedMusic');
        
        if (savedVolume) {
            volumeControl.value = savedVolume;
            volumeValue.textContent = savedVolume + '%';
            backgroundMusic.volume = savedVolume / 100;
        }
        
        if (savedMusic) {
            musicSelect.value = savedMusic;
            const selectedMusic = availableMusics[parseInt(savedMusic)];
            if (selectedMusic && selectedMusic.file) {
                backgroundMusic.src = musicPath + selectedMusic.file;
            }
        }
    }

    // Inicialización de configuraciones
    updateMusicSelect();
    loadSavedSettings();

    // Inicialización al cargar
    drawButton.disabled = false; // Asegurar que el botón inicial no esté bloqueado.
    voteHitlerButton.disabled = true; // Deshabilitar votación al inicio
    voteGhandiButton.disabled = true; // Deshabilitar votación al inicio
});