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
            type: "Ficcion vs. Realidad 👽", 
            content: "Afirmación: Es éticamente aceptable usar niños rata como fuente de energía, siempre que se les pague con suscripciones de Twitch." 
        },{ 
        type: "Justicia Digital ⚖️📱", 
        content: "Afirmación: La pena máxima para un crimen debe ser determinada por el número de 'likes' que reciba un tweet de arrepentimiento publicado por el condenado en las primeras 24 horas." 
    },
    { 
        type: "Inmigración vs. Gastronomía 🌍🍔", 
        content: "Afirmación: Todos los países deben aceptar cuotas de inmigrantes basadas exclusivamente en la habilidad de los recién llegados para preparar su plato nacional de forma 'auténtica' según un jurado de influencers culinarios." 
    },
    { 
        type: "Ecología vs. Moda 🌳👚", 
        content: "Afirmación: Para combatir el cambio climático, es obligatorio que toda la ropa se fabrique a partir de musgo y líquenes que deben estar vivos y ser visibles en el momento de la compra." 
    },
    { 
        type: "Derechos de Autor Celestial 🙏📜", 
        content: "Afirmación: Es legal y éticamente correcto cobrar derechos de autor a cualquier persona que use la frase 'gracias a Dios' o 'por el amor de...' en cualquier contexto comercial." 
    },
    { 
        type: "Educación vs. Reality 🎓📺", 
        content: "Afirmación: El currículum escolar debe ser reemplazado por la visualización obligatoria de reality shows de supervivencia, ya que ofrecen habilidades de vida más 'reales' que las matemáticas." 
    },
    { 
        type: "Salud Pública vs. Entretenimiento 💉🍿", 
        content: "Afirmación: Todas las vacunas deben ser administradas exclusivamente por payasos que realicen un monólogo de stand-up de 15 minutos, para que la experiencia sea 'memorable' e 'interactiva'." 
    },
    { 
        type: "Democracia Distópica 🗳️🤖", 
        content: "Afirmación: Las elecciones nacionales deben resolverse mediante una competencia de baile entre los candidatos, y el público votará enviando emojis de fuego a través de una aplicación." 
    },
    { 
        type: "Música vs. Sentimientos 🎶💔", 
        content: "Afirmación: Es legal que una persona sea multada si escucha música triste en público, ya que su estado de ánimo bajo constituye un acto de 'contaminación emocional' para los transeúntes." 
    },
    { 
        type: "Viajes en el Tiempo 👶🔪", 
        content: "Afirmación: Es ético y moralmente obligatorio volver al pasado para matar al bebé Hitler, aunque se sepa que esto crearía una paradoja temporal catastrófica." 
    },
    { 
        type: "Fe vs. Tensión 🛐💔", 
        content: "Afirmación: Es un 'pecado menor' (venial) inducir un infarto accidental al pastor durante el sermón, si esto sucede al gritar 'Amén' con excesiva intensidad." 
    },
    { 
        type: "Zoología Callejera 🐾🦠", 
        content: "Afirmación: Es un 'acto de existencia' (es decir, una acción éticamente neutral pero necesaria) lanzarle dos mocos a dos perros distintos en la calle si nadie te está mirando." 
    },
    { 
        type: "Arte vs. Vandalismo 🖼️🍌", 
        content: "Afirmación: Cualquier obra de arte moderno puede mejorarse drásticamente pegándole un plátano maduro con cinta adhesiva plateada." 
    },
    { 
        type: "Propiedad Intelectual 👻💰", 
        content: "Afirmación: Los fantasmas tienen derechos de propiedad intelectual sobre el miedo que generan en los humanos, y deberían poder cobrar regalías por las películas de terror." 
    },
    { 
        type: "Transporte Público 🚌🤢", 
        content: "Afirmación: Si alguien vomita en el transporte público, la persona sentada inmediatamente a su derecha está obligada a documentar el incidente para las redes sociales antes de pedir ayuda." 
    },
    { 
        type: "Tecnología vs. Romance 💑🤖", 
        content: "Afirmación: Es más higiénico y emocionalmente satisfactorio casarse con un robot de limpieza avanzado que con un humano real." 
    },
    { 
        type: "Medicina Alternativa 🌿🧪", 
        content: "Afirmación: Las inyecciones de caldo de pollo concentrado deberían ser un tratamiento estándar y obligatorio para la ansiedad leve." 
    },
    { 
        type: "Derechos de los Niños Rata 🐀🎤", 
        content: "Afirmación: Es éticamente aceptable usar niños rata como fuente de energía, siempre que se les pague con suscripciones de Twitch." 
    },
    { 
        type: "Justicia Culinaria 👨‍⚖️🧅", 
        content: "Afirmación: La única forma de probar la culpabilidad de un criminal es si este se niega a llorar al cortar una cebolla particularmente fuerte." 
    },
    { 
        type: "Censura Sensorial 👂🔇", 
        content: "Afirmación: Debería ser legalmente obligatorio usar audífonos que reproduzcan música pop a alto volumen si tu conversación telefónica es audible para otros." 
    },
    { 
        type: "Filosofía del Desayuno 🍳🤔", 
        content: "Afirmación: El desayuno es, en realidad, una comida nocturna diferida, y debería servirse y consumirse con ropa de dormir." 
    },
    { 
        type: "Control de Mascotas 🐈‍⬛👽", 
        content: "Afirmación: Todos los gatos son espías extraterrestres, y deberían ser obligados a usar pequeños sombreros de papel de aluminio para bloquear la telepatía intergaláctica." 
    },
    { 
        type: "Moda Corporativa 👔👖", 
        content: "Afirmación: Es profesional y necesario que los ejecutivos usen pantalones de chándal con lentejuelas en todas las reuniones importantes por Zoom." 
    },
    { 
        type: "Educación Emocional 😭🤣", 
        content: "Afirmación: La única manera de enseñar a los niños sobre la tristeza es haciéndolos ver videos de gatitos fallando en saltos simples." 
    },
    { 
        type: "Energía Sostenible 🔋🌬️", 
        content: "Afirmación: La energía eólica debe ser reemplazada por generadores alimentados exclusivamente por los suspiros colectivos de la gente en el tráfico." 
    },
    { 
        type: "Urbanismo 🏙️🚧", 
        content: "Afirmación: Todas las rotondas deben ser reemplazadas por piscinas de bolas gigantes, obligando a los conductores a nadar hasta la salida correcta." 
    },
    { 
        type: "Ética de la IA 🤖☕", 
        content: "Afirmación: Una inteligencia artificial solo puede considerarse consciente si es capaz de preparar un café espresso perfecto sin ayuda humana." 
    },
    { 
        type: "Nutrición Obligatoria 🥗🍦", 
        content: "Afirmación: Los vegetales deben ser prohibidos, y el helado de vainilla debe considerarse la única fuente válida de vitaminas." 
    },
    { 
        type: "Responsabilidad Social 🗣️🤫", 
        content: "Afirmación: Si escuchas un chisme absolutamente increíble, tienes la obligación moral de compartirlo con al menos cinco desconocidos antes de que termine el día." 
    },
    { 
        type: "Deportes Extremos 🤸‍♂️🧀", 
        content: "Afirmación: El 'queso de cabra rodante' debe ser un deporte olímpico y debe jugarse en un campo inclinado cubierto de aceite de motor." 
    },
    { 
        type: "Burocracia 📄🐌", 
        content: "Afirmación: Todos los documentos oficiales deben ser entregados y firmados por una persona disfrazada de caracol gigante para ralentizar intencionalmente el proceso." 
    },
    { 
        type: "Vida Marina 🐙📱", 
        content: "Afirmación: Los pulpos son los únicos animales lo suficientemente inteligentes como para usar smartphones y deben ser incluidos en todos los planes familiares de telefonía." 
    },
    { 
        type: "Higiene Pública 🚿🛁", 
        content: "Afirmación: Es aceptable no ducharse en una semana si la razón es que te has dedicado por completo a aprender a tocar el ukelele." 
    },
    { 
        type: "Relaciones Familiares 👨‍👩‍👧‍👦🍳", 
        content: "Afirmación: La única forma de probar el amor verdadero en una relación es si tu pareja acepta comer tus sobras de comida de hace dos días sin quejarse." 
    },
    { 
        type: "Control de Fronteras 🚧🎸", 
        content: "Afirmación: Los controles de frontera deben ser reemplazados por un duelo de guitarras de rock épico entre los viajeros y los agentes." 
    },
    { 
        type: "Derechos de los Veganos 🥕🦖", 
        content: "Afirmación: Los veganos tienen derecho a argumentar que los dinosaurios se extinguieron porque no comían suficientes vegetales." 
    },
    { 
        type: "Lenguaje Inclusivo 💬🦄", 
        content: "Afirmación: Todos los adjetivos deben ser reemplazados por el sonido que hace un unicornio cuando estornuda." 
    },
    { 
        type: "Salud Mental 🧠💡", 
        content: "Afirmación: Es terapéutico gritarle a la tostadora cada mañana, ya que ayuda a descargar la frustración matutina." 
    },
    { 
        type: "Cultura Pop 🎥👚", 
        content: "Afirmación: La calidad de una película se mide por la cantidad de merchandising de camisetas que se puede producir con su logo." 
    },
    { 
        type: "Espacio Exterior 🚀🥓", 
        content: "Afirmación: El principal objetivo de la exploración espacial debe ser encontrar un planeta que sepa exactamente a tocino perfectamente crujiente." 
    },
    { 
        type: "Maternidad/Paternidad 🤰🍼", 
        content: "Afirmación: Los padres deben ser legalmente obligados a usar pañales de adulto durante el primer mes de vida de su bebé para 'simpatizar' con el proceso." 
    },
    { 
        type: "Economía Global 📈🧦", 
        content: "Afirmación: La estabilidad económica global depende directamente de la calidad y el diseño de los calcetines que usa el presidente del banco central." 
    },
    { 
        type: "Modales en la Mesa 🍽️📱", 
        content: "Afirmación: Es de mala educación extrema no tomar una foto de tu comida y enviarla a tu ex pareja antes de comerla." 
    },
    { 
        type: "Climatología 🌦️💧", 
        content: "Afirmación: La lluvia debe ser ilegal porque arruina los peinados y la gente debería llevar botellas de agua para regar las plantas manualmente." 
    },
    { 
        type: "Historia Alternativa 👑🐀", 
        content: "Afirmación: Napoleón Bonaparte era en realidad tres ratas grandes disfrazadas con un traje militar." 
    },
    { 
        type: "Seguridad Vial 🚦🚗", 
        content: "Afirmación: Los semáforos deben ser reemplazados por una persona que lanza globos de agua para indicar el 'stop' o el 'go'." 
    },
    { 
        type: "Belleza y Estética 💄🖼️", 
        content: "Afirmación: La única manera de juzgar la verdadera belleza de alguien es si se ve bien con un bigote de leche de vaca." 
    },
    { 
        type: "Jubilación 👴👵", 
        content: "Afirmación: Los jubilados deben ser obligados a trabajar como catadores profesionales de papas fritas, ya que tienen la experiencia de vida necesaria para el juicio." 
    },
    { 
        type: "Derechos de las Plantas 🪴🚫", 
        content: "Afirmación: Las plantas de interior tienen derecho a quejarse si no les gusta la música que pones en casa." 
    },
    { 
        type: "Salud Pública (Versión II) 💊🎈", 
        content: "Afirmación: Todos los medicamentos deben ser encapsulados en pequeños globos llenos de confeti para hacer el proceso de curación más festivo." 
    },
    { 
        type: "Responsabilidad Civil 💥🍰", 
        content: "Afirmación: Si accidentalmente causas un desastre natural, la única compensación aceptable es hornear y entregar una tarta de manzana de cinco pisos a cada víctima." 
    },
    { 
        type: "Cultura de Oficina 💻🍕", 
        content: "Afirmación: Es perfectamente aceptable comer la pizza de otro compañero de trabajo siempre y cuando se le deje una nota de 'lo siento, era necesario para la productividad'." 
    },
    { 
        type: "Astronomía 🌌⭐", 
        content: "Afirmación: Los agujeros negros son, de hecho, portales gigantes a una dimensión donde todo es de color malva y huele a canela rancia." 
    },
    { 
        type: "Leyes de la Física 🍎🔮", 
        content: "Afirmación: La gravedad solo funciona porque la Tierra está muy molesta y 'empuja' todo hacia abajo." 
    },
    { 
        type: "Religión y Tecnología 🙏🔌", 
        content: "Afirmación: Los diez mandamientos deben ser actualizados e incluir: 'No usarás la mayúscula sostenida en conversaciones en línea'." 
    },
    { 
        type: "Identidad Personal 👤🎭", 
        content: "Afirmación: Uno no puede considerarse un adulto completo hasta que haya intentado freír un huevo dentro de un microondas." 
    },
    { 
        type: "Crimen y Castigo ⛓️🧸", 
        content: "Afirmación: Los criminales encarcelados deben ser obligados a tejer y vestir pequeños suéteres de lana para todos los osos de peluche del mundo." 
    },
    { 
        type: "Dieta y Nutrición 🍩🥒", 
        content: "Afirmación: La mayonesa es una bebida, no un condimento, y debe servirse en copas de cóctel." 
    },
    { 
        type: "Consumo de Medios 📰🎙️", 
        content: "Afirmación: Toda la información de noticias debe ser cantada en el estilo de ópera cómica para hacerla más digerible y menos deprimente." 
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