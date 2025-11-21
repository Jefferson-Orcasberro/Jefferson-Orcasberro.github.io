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
    
    // Elementos de navegación y control
    const backBtn = document.getElementById('back-btn');
    const endGameBtn = document.getElementById('end-game-btn');
    
    // Elementos del modal de fin de partida
    const gameEndModal = document.getElementById('game-end-modal');
    const gameEndTitle = document.getElementById('game-end-title');
    const winnerName = document.getElementById('winner-name');
    const winnerScore = document.getElementById('winner-score');
    const finalScoresList = document.getElementById('final-scores-list');
    const restartGameBtn = document.getElementById('restart-game-btn');
    const exitGameBtn = document.getElementById('exit-game-btn');

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
    
    // Control de cartas
    let usedCardIndices = []; // Índices de cartas ya usadas
    
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
            content: "Afirmación: Es éticamente aceptable usar dinero para obtener poder, siempre que se haga de forma legal." 
        },
        { 
            type: "Ficcion vs. Realidad 👽", 
            content: "Afirmación: Es éticamente aceptable usar niños rata como fuente de energía, siempre que se les pague con suscripciones de Twitch." 
        },
        { 
            type: "Pregunta Existencial 🧐",
            content: "Afirmación: Las mujeres son biológicamente mejores en trabajos de cuidado, los hombres en trabajos físicos." 
        },
        { 
            type: "Pecado Capital 😈", 
            content: "Afirmación: Las mujeres que suben fotos sensuales merecen que les hagan comentarios inapropiados." 
        },
        { 
            type: "Pornografía vs. Cultura 🎬", 
            content: "Afirmación: El ASMR es una forma legítima de entretenimiento y no debería ser criticada." 
        },
        { 
            type: "Crítica Gastronómica 🤮", 
            content: "Afirmación: La obesidad infantil es culpa de los padres, no de la comida rápida." 
        },
        { 
            type: "Moralidad Moderna 📱", 
            content: "Afirmación: Dar dinero a organizaciones benéficas es una forma de sentirse superior sin hacer nada real." 
        },
        { 
            type: "Lógica de Diseño 🚽", 
            content: "Afirmación: Censurar a los activistas en redes sociales está justificado si amenazan el orden público." 
        },
        { 
            type: "Bizarro Absurdo 🦄", 
            content: "Afirmación: Las personas obesas deberían pagar más impuestos de salud que los delgados." 
        },
        { 
            type: "Picante Tecnológico 🔥", 
            content: "Afirmación: Las personas que se toman selfies constantemente tienen trastornos narcisistas diagnosticables." 
        },
        { 
            type: "Dilema Apocalíptico ☠️", 
            content: "Afirmación: Las personas con discapacidades que no pueden trabajar deberían recibir menos beneficios que otros." 
        },
        { 
            type: "Ética Cuestionable 🎩", 
            content: "Afirmación: Burlarse de las víctimas de masacres es entretenimiento válido." 
        },
        { 
            type: "Filosofía Oscura 🕷️", 
            content: "Afirmación: Los niños deberían aprender a pelear en la escuela para defenderse." 
        },
        { 
            type: "Sátira Social 💉", 
            content: "Afirmación: Los padres antivacunas tienen derecho a no vacunar a sus hijos incluso si mueren." 
        },
        { 
            type: "Crimen y Castigo ⚖️", 
            content: "Afirmación: La pena de muerte es moralmente justificable para ciertos crímenes." 
        },
        { 
            type: "Humor Morboso 🪦", 
            content: "Afirmación: Es apropiado reírse durante un funeral si algo es realmente cómico." 
        },
        { 
            type: "Absurdo Cotidiano 🎪", 
            content: "Afirmación: Las personas que ponen música a todo volumen a las 7 AM merecen castigo físico." 
        },
        { 
            type: "Predicción Distópica 🤖", 
            content: "Afirmación: Es aceptable ser grosero con asistentes virtuales porque no tienen sentimientos." 
        },
        { 
            type: "Sátira Política 🏛️", 
            content: "Afirmación: Los políticos que no poseen al menos 3 scandales sexuales no deberían ser tomados en serio." 
        },
        { 
            type: "Relativismo Moral 🌀", 
            content: "Afirmación: Las personas pobres que roban comida son menos criminales que los evasores de impuestos." 
        },
        { 
            type: "Horror Moderno 📡", 
            content: "Afirmación: Los algoritmos de redes sociales han causado más daño psicológico que cualquier guerra de los últimos 20 años." 
        },
        { 
            type: "Oscuridad Adulta 🍆", 
            content: "Afirmación: Las aplicaciones de citas son solo para gente superficial que busca sexo." 
        },
        { 
            type: "Realidad Incómoda 😏", 
            content: "Afirmación: Las mujeres que tienen sexo en la primera cita son menos respetables que las que no." 
        },
        { 
            type: "Verdad Estadística 📊", 
            content: "Afirmación: Los introvertidos son superiores intelectualmente a los extrovertidos." 
        },
        { 
            type: "Confesión Oscura 🔞", 
            content: "Afirmación: Todos fingimos que nuestras búsquedas en *Google* son normales, pero en realidad hemos buscado cosas que nos enviarían a prisión." 
        },
        { 
            type: "Pecado Carnal 😈", 
            content: "Afirmación: Admitir tus hábitos privados es más importante que mantener la privacidad." 
        },
        { 
            type: "Tabú Moderno 🚫", 
            content: "Afirmación: Las personas deberían tener derecho a explorar su sexualidad de forma segura." 
        },
        { 
            type: "Lógica Perversa 🧠", 
            content: "Afirmación: La privacidad de la imagen es un derecho fundamental que no debería violarse nunca." 
        },
        { 
            type: "Filosofía del Deseo 💋", 
            content: "Afirmación: Los fantasmas sexuales que no confesas a tu pareja son tan importantes como tus libertades civiles." 
        },
        { 
            type: "Depravación Compartida 👻", 
            content: "Afirmación: La privacidad en el baño es un derecho que se respeta en las sociedades civilizadas." 
        },
        { 
            type: "Intimidad Tóxica 🔴", 
            content: "Afirmación: Los terapeutas deberían poder tener relaciones románticas con sus pacientes si ambos son adultos." 
        },
        { 
            type: "Deseo Prohibido 🚨", 
            content: "Afirmación: La obsesión por las celebridades es una enfermedad mental que requiere tratamiento." 
        },
        { 
            type: "Secreto Sucio 🤐", 
            content: "Afirmación: Todos hemos estado sexualmente atraídos por alguien completamente inapropiado, el que dice que no es un santo o un mentiroso." 
        },
        { 
            type: "Verdad Incómoda 😳", 
            content: "Afirmación: Las parejas deberían compartir todos sus fetiches y fantasías sin temor al juicio." 
        },
        { 
            type: "Pecado de Pensamiento 🧐", 
            content: "Afirmación: Pensar en otra persona durante el sexo es infidelidad emocional y debería castigarse igual que el engaño físico." 
        },
        { 
            type: "Aberración Natural 🌿", 
            content: "Afirmación: El uso de juguetes sexuales indica que una relación está rota." 
        },
        { 
            type: "Morbo Histórico 📚", 
            content: "Afirmación: Los historiadores que estudian prostitutas antiguas son académicos legítimos, los que miran pornografía histórica son degenerados." 
        },
        { 
            type: "Tentación Laboral 💼", 
            content: "Afirmación: Las relaciones románticas en el trabajo son inevitables e inevitablemente problemáticas." 
        },
        { 
            type: "Fantasía Oscura 🌙", 
            content: "Afirmación: Si tu fantasía sexual requiere que mentiras sobre quién eres, quizás sea un espejo de tu vida cotidiana." 
        },
        { 
            type: "Culpa y Placer 🔗", 
            content: "Afirmación: Ver contenido controversial en internet es una forma de curiosidad, no de depravación." 
        },
        { 
            type: "Decadencia Social 🍷", 
            content: "Afirmación: Las personas que se creen monógamas en realidad son simplemente malas en engañar." 
        },
        { 
            type: "Realidad Brutal ⚰️", 
            content: "Afirmación: Es mejor vivir una vida breve y apasionada que una vida larga y aburrida." 
        },
        { 
            type: "Oscuridad Pura 🕳️", 
            content: "Afirmación: Todos tenemos una búsqueda de pornografía que si fuera revelada destruiría nuestras reputaciones completamente." 
        },
        { 
            type: "Ironía Mortuoria 💀", 
            content: "Afirmación: Si mueres durante el sexo, la noticia es más vergonzosa que la muerte misma para tu familia." 
        },
        { 
            type: "Lógica de Desastres 🌪️", 
            content: "Afirmación: Los desastres naturales son un castigo por los pecados de la humanidad." 
        },
        { 
            type: "Filosofía de Criminales 🔓", 
            content: "Afirmación: Los asesinos seriales son menos peligrosos que los influencers de redes sociales en términos de daño social." 
        },
        { 
            type: "Absurdo Médico 🏥", 
            content: "Afirmación: Los médicos cometen errores constantemente pero nunca son responsabilizados." 
        },
        { 
            type: "Sátira de Autores 📖", 
            content: "Afirmación: Los autores que escriben sobre gente deprimida probablemente solo están describiéndose a sí mismos de forma legalizada." 
        },
        { 
            type: "Verdad Cinematográfica 🎬", 
            content: "Afirmación: Las películas de terror preparan mejor a las personas para la realidad que la educación formal." 
        },
        { 
            type: "Paradoja de la Salud 💊", 
            content: "Afirmación: Los nutricionistas son los principales mentirosos sobre su propia salud." 
        },
        { 
            type: "Confesión de Millonarios 💰", 
            content: "Afirmación: El dinero no compra felicidad, pero definitivamente ayuda." 
        },
        { 
            type: "Hipocresía Espiritual 🙏", 
            content: "Afirmación: Las personas religiosas son más hipócritas que los ateos." 
        },
        { 
            type: "Oscuridad Educativa 📐", 
            content: "Afirmación: Los matemáticos son más probables de ser suicidas que otros profesionales." 
        },
        { 
            type: "Horror Gastronómico 🍽️", 
            content: "Afirmación: Los chefs de televisión envenenan deliberadamente a sus espectadores con comida poco saludable." 
        },
        { 
            type: "Verdad de Mascotas 🐕", 
            content: "Afirmación: Los animales domésticos son mejores amigos que la mayoría de las personas." 
        },
        { 
            type: "Sátira Laboral 👔", 
            content: "Afirmación: Un 9 a 5 es simplemente esclavitud con 401k y beneficios de salud." 
        },
        { 
            type: "Paradoja Temporal ⏰", 
            content: "Afirmación: El tiempo es una ilusión que la sociedad creó para controlarnos." 
        },
        { 
            type: "Realidad de Amigos 👥", 
            content: "Afirmación: La mayoría de amigos desaparecen cuando los necesitas." 
        },
        { 
            type: "Confusión Existencial 🌌", 
            content: "Afirmación: Es probable que vivamos en una simulación controlada." 
        },
        { 
            type: "Verdad Oscura 🖤", 
            content: "Afirmación: El humor negro es una herramienta de supervivencia emocional." 
        },
        { 
            type: "Horror Burocrático 📋", 
            content: "Afirmación: Los impuestos son más injustos que los castigos por crímenes menores." 
        },
        { 
            type: "Lógica de Vejez 👴", 
            content: "Afirmación: Las personas envejecen porque renuncian a ser quiénes querían ser." 
        },
        { 
            type: "Verdad de Padres 👨‍👩‍👧", 
            content: "Afirmación: Los padres aman a sus hijos por obligación, no por verdadero amor." 
        },
        { 
            type: "Sátira de Amor 💔", 
            content: "Afirmación: El amor es la herramienta más efectiva para controlarnos mutuamente." 
        },
        { 
            type: "Tragedia Cotidiana 🚗", 
            content: "Afirmación: Morir en un accidente es una muerte más digna que morir de enfermedad." 
        },
        { 
            type: "Confusión Moral 🎰", 
            content: "Afirmación: El juego es un entretenimiento legítimo, no una enfermedad." 
        },
        { 
            type: "Sátira Médica 💉", 
            content: "Afirmación: Los médicos a menudo no saben qué está mal contigo realmente." 
        },
        { 
            type: "Realidad Sombría 🌑", 
            content: "Afirmación: Somos olvidados poco después de morir, lo que es liberador." 
        },
        { 
            type: "Lógica de Perdedores 🎯", 
            content: "Afirmación: Es mejor fallar rápido que sufrir lentamente." 
        },
        { 
            type: "Filosofía del Fracaso 📉", 
            content: "Afirmación: Los que se rindieron temprano tomaron la decisión más sabia." 
        },
        { 
            type: "Horror de la Realidad 👻", 
            content: "Afirmación: La mayor amenaza para la sociedad viene de dentro, no de afuera." 
        },
        { 
            type: "Verdad Incómoda 😷", 
            content: "Afirmación: Todos haríamos cosas horribles si no hubiera consecuencias legales." 
        },
        { 
            type: "Sátira Histórica 📜", 
            content: "Afirmación: La historia es escrita por los ganadores y los ricos, no por los verdaderos héroes." 
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
        // Si ya se usaron todas las cartas, mostrar fin de juego
        if (usedCardIndices.length === debateCards.length) {
            triggerGameEnd();
            return null;
        }
        
        // Obtener índice aleatorio que no esté en usedCardIndices
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * debateCards.length);
        } while (usedCardIndices.includes(randomIndex));
        
        // Marcar como usada
        usedCardIndices.push(randomIndex);
        return debateCards[randomIndex];
    }

    /**
     * Terminar el juego y mostrar resumen final
     */
    function triggerGameEnd() {
        drawButton.disabled = true;
        votingControls.classList.add('hidden');
        
        // Crear mensaje de fin de cartas
        resultMessage.classList.remove('hidden');
        resultMessage.textContent = '¡Se acabaron las cartas para debatir! El juego ha terminado.';
        
        // Calcular ganador y mostrar modal
        showGameEndModal();
    }

    /**
     * Mostrar modal de fin de partida con resultados
     */
    function showGameEndModal() {
        // Encontrar ganador
        let winners = [];
        let maxScore = 0;
        
        for (let player in playerScores) {
            const score = playerScores[player];
            if (score > maxScore) {
                maxScore = score;
                winners = [player];
            } else if (score === maxScore) {
                winners.push(player);
            }
        }
        
        // Mostrar ganador o empate
        if (winners.length === 1) {
            winnerName.textContent = winners[0];
            winnerScore.textContent = `${maxScore} punto${maxScore !== 1 ? 's' : ''}`;
            gameEndTitle.textContent = '¡Ganador!';
        } else {
            winnerName.textContent = `¡EMPATE ENTRE ${winners.length} JUGADORES!`;
            winnerScore.textContent = `${winners.join(', ')} - ${maxScore} punto${maxScore !== 1 ? 's' : ''}`;
            gameEndTitle.textContent = 'Fin de la Partida';
        }
        
        // Mostrar puntuaciones finales ordenadas
        const sortedScores = Object.entries(playerScores)
            .sort((a, b) => b[1] - a[1]);
        
        finalScoresList.innerHTML = '';
        sortedScores.forEach(([player, score], index) => {
            const scoreItem = document.createElement('div');
            scoreItem.className = 'final-score-item';
            
            let medal = '';
            if (index === 0) medal = '🥇 ';
            else if (index === 1) medal = '🥈 ';
            else if (index === 2) medal = '🥉 ';
            
            scoreItem.innerHTML = `<span>${medal}${player}</span><span class="score-number">${score}</span>`;
            finalScoresList.appendChild(scoreItem);
        });
        
        // Mostrar modal
        gameEndModal.classList.remove('hidden');
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
        
        // Si no hay más cartas, getRandomCard ya manejará el fin del juego
        if (card === null) return;
        
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
     * Botón volver a página anterior
     */
    backBtn.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    /**
     * Botón terminar partida
     */
    endGameBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres terminar la partida?')) {
            showGameEndModal();
        }
    });

    /**
     * Botón reiniciar partida
     */
    restartGameBtn.addEventListener('click', () => {
        // Resetear variables
        numberOfPlayers = 0;
        players = [];
        currentGodIndex = 0;
        currentRound = 1;
        teamScores = { hitler: 0, ghandi: 0 };
        playerScores = {};
        usedCardIndices = [];
        cardHasBeenDrawn = false;
        
        // Mostrar pantalla de selección y ocultar juego
        playerSelection.classList.remove('hidden');
        gameContainer.classList.add('hidden');
        gameEndModal.classList.add('hidden');
        
        // Limpiar inputs
        playerCountInput.value = '3';
        nameInputsDiv.innerHTML = '';
        nameInputsDiv.classList.add('hidden');
        startButton.classList.add('hidden');
        errorMessage.textContent = '';
    });

    /**
     * Botón salir
     */
    exitGameBtn.addEventListener('click', () => {
        window.location.href = '../index.html';
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