// --- DATOS DEL JUEGO ---

const uiTexts = {
    es: {
        start: "Iniciar Partida",
        end: "Terminar Partida",
        settings: "Ajustes",
        settingsTitle: "Ajustes",
        volumeLabel: "Volumen de Música",
        musicLabel: "Música de Fondo", // <-- Etiqueta para el nuevo selector
        langLabel: "Idioma",
        pick: (num) => `Elige ${num} carta(s)`,
        score: "Puntos:",
        confirmPlay: "Confirmar Jugada", // <-- Botón 1
        advanceRound: "Siguiente Ronda"  // <-- Botón 2
    },
    pt: {
        start: "Iniciar Jogo",
        end: "Terminar Jogo",
        settings: "Configurações",
        settingsTitle: "Configurações",
        volumeLabel: "Volume da Música",
        musicLabel: "Música de Fundo",
        langLabel: "Idioma",
        pick: (num) => `Escolha ${num} carta(s)`,
        score: "Pontos:",
        confirmPlay: "Confirmar Jogada",
        advanceRound: "Próxima Rodada"
    },
    bi: {
        start: "Iniciar Partida / Jogo",
        end: "Terminar Partida / Jogo",
        settings: "Ajustes / Configurações",
        settingsTitle: "Ajustes / Configurações",
        volumeLabel: "Volumen / Volume",
        musicLabel: "Música de Fondo / Fundo",
        langLabel: "Idioma",
        pick: (num) => `Elige / Escolha ${num} carta(s)`,
        score: "Puntos / Pontos:",
        confirmPlay: "Confirmar Jogada",
        advanceRound: "Siguiente Ronda / Próxima Rodada"
    }
}

// Mazo de Cartas Negras (Preguntas)
const blackCardsData = [
    // Pick 1
    { es: "¿Qué es ese olor? Es _.", pick: 1 },
    { es: "La RAE acaba de aceptar ' _ ' como palabra.", pick: 1 },
    { es: "Mi psicólogo dice que mi problema es _.", pick: 1 },
    { es: "El ingrediente secreto de la abuela era _.", pick: 1 },
    { es: "En mi currículum, 'habilidades' incluye _.", pick: 1 },
    { es: "La próxima crisis mundial será causada por _.", pick: 1 },
    { es: "Lo que realmente quiero para Navidad es _.", pick: 1 },
    { es: "El apocalipsis zombie falló por culpa de _.", pick: 1 },
    { es: "El nuevo sabor de papas fritas es: _.", pick: 1 },
    { es: "Mi crush de Tinder resultó ser _.", pick: 1 },
    { es: "La verdadera razón por la que se extinguieron los dinosaurios fue _.", pick: 1 },
    { es: "No puedes tener solo un _.", pick: 1 },
    { es: "¿Por qué estoy soltero? Probablemente por _.", pick: 1 },
    { es: "La nueva película de Disney trata sobre _.", pick: 1 },
    { es: "Durante el sexo, me gusta pensar en _.", pick: 1 },
    { es: "El próximo presidente será _.", pick: 1 },
    { es: "Hoy en terapia hablé sobre _.", pick: 1 },
    { es: "Mi nombre de superhéroe es 'Capitán _'.", pick: 1 },
    { es: "El peor regalo de cumpleaños que recibí fue _.", pick: 1 },
    { es: "El nuevo plan de estudios escolar ahora incluye _.", pick: 1 },
    { es: "Mi placer culposo es _.", pick: 1 },
    { es: "La contraseña de mi WiFi es _.", pick: 1 },
    { es: "Hola, soy tu conductor de Uber. Hoy hablaremos de _.", pick: 1 },
    { es: "Lo único que me saca de la cama por la mañana es _.", pick: 1 },
    { es: "La autopsia reveló que la causa de muerte fue _.", pick: 1 },
    { es: "El nuevo eslogan de Nike es: 'Just _ It'.", pick: 1 },
    { es: "Descubrí que mi gato realmente sabe cómo _.", pick: 1 },
    { es: "La vida es como un _.", pick: 1 },
    { es: "El feminismo moderno se trata realmente de _.", pick: 1 },
    { es: "¿Qué es lo que esconde el Papa? _.", pick: 1 },
    
    // Pick 2
    { es: "Mi vida sexual es _ y _.", pick: 2 },
    { es: "Para mi próximo truco, sacaré un _ de mi _.", pick: 2 },
    { es: "¿Qué me traje del supermercado? _ y _.", pick: 2 },
    { es: "La nueva startup de tecnología combina _ con _.", pick: 2 },
    { es: "Este bar no tiene _ pero sí tiene _.", pick: 2 },
    { es: "Mi cita fue un desastre. Empezó con _ y terminó con _.", pick: 2 },
    { es: "Guerra y paz. Fuego y hielo. _ y _.", pick: 2 },
    { es: "El título de mi autobiografía es: ' _ : Una historia de _'.", pick: 2 },
    { es: "No soy un experto, pero estoy seguro de que _ no debería mezclarse con _.", pick: 2 },
    { es: "Dos cosas que no deberías hacer en un funeral: _ y _.", pick: 2 },
    { es: "Mi plan de jubilación es _ y _.", pick: 2 },
    { es: "Mi estado mental actual es _ con un toque de _.", pick: 2 },
    { es: "En el futuro, los historiadores dirán que nuestra era fue definida por _ y _.", pick: 2 },
    { es: "Mi profesor de filosofía dijo que el sentido de la vida es _ y _.", pick: 2 },
    { es: "El sándwich perfecto tiene _ y _.", pick: 2 },

    // Pick 3
    { es: "Haz tu propio pokémon: Empieza con _, evoluciona a _ y su ataque final es _.", pick: 3 },
    { es: "El kit de supervivencia para la oficina incluye _, _ y mucho _.", pick: 3 },
    { es: "Mi fin de semana perfecto: _, _ y _.", pick: 3 },
    { es: "La receta para el desastre: una parte de _, dos partes de _ y una pizca de _.", pick: 3 },
    { es: "Me arrestaron por posesión de _, intento de _ y _ en primer grado.", pick: 3 },
    // --- Lote 3: Absurdo y Picante (Pick 1) ---
    { es: "El algoritmo de Instagram cree que me obsesiona _.", pick: 1 },
    { es: "En lugar de un aumento, mi jefe me dio _.", pick: 1 },
    { es: "La palabra de seguridad de mis padres es _.", pick: 1 },
    { es: "Mi reunión de Zoom fue interrumpida por _.", pick: 1 },
    { es: "El próximo sabor de Monster Energy es: _.", pick: 1 },
    { es: "El reboot de 'El Rey León' pero con _.", pick: 1 },
    { es: "¿Qué encontré debajo de la cama de mis padres? _.", pick: 1 },
    { es: "El Papa ha anunciado que _ ya no es pecado.", pick: 1 },
    { es: "Mi 'safe search' está desactivado por culpa de _.", pick: 1 },
    { es: "Mi psiquiatra me recetó _.", pick: 1 },
    { es: "La nueva tendencia viral de TikTok es _.", pick: 1 },
    { es: "El nuevo juguete de la Cajita Feliz es _.", pick: 1 },
    { es: "No sabía lo que era el amor hasta que vi _.", pick: 1 },
    { es: "¿Qué es lo que realmente pasó en el Arca de Noé? _.", pick: 1 },
    { es: "La verdadera causa del calentamiento global es _.", pick: 1 },
    { es: "Mi personalidad de Tinder es _.", pick: 1 },
    { es: "Lo único que me queda por probar en la vida es _.", pick: 1 },

    // --- Lote 3: Absurdo y Picante (Pick 2) ---
    { es: "Mi personalidad se basa en _ y _.", pick: 2 },
    { es: "El titular de mañana: 'Famoso arrestado por _ con \_'." , pick: 2 },
    { es: "El sexo está bien, pero ¿alguna vez has probado _ con \_?", pick: 2 },
    { es: "Mi plan para dominar el mundo: primero \_, luego \_.", pick: 2 },
    { es: "El nombre de mi banda de punk: '\_ y los \_'." , pick: 2 },
    { es: "Paso 1: \_. Paso 2: \_. Paso 3: ¿Ganancias?", pick: 2 },
    { es: "Mi terapeuta dice que debo dejar _ y empezar a _.", pick: 2 },
    { es: "Netflix canceló mi serie favorita para producir una sobre _ y \_." , pick: 2 },
    { es: "No eres tú, soy yo. Y también un poco \_ y \_.", pick: 2 },

    // --- Lote 3: Absurdo y Picante (Pick 3) ---
    { es: "Mi cita perfecta: \_ , \_ y un poco de \_.", pick: 3 },
    { es: "Mi kit de primeros auxilios contiene: \_, \_ y \_.", pick: 3 },
    { es: "El perfil de mi ex en una frase: \_, \_ y \_.", pick: 3 },
    { es: "Lo que realmente aprendí en la universidad: \_, \_ y cómo evitar \_.", pick: 3 },
    // --- Lote 4: Absurdo y Picante (Pick 1) ---
    { es: "Mi fetiche más raro es _.", pick: 1 },
    { es: "La nueva serie de Netflix sobre crímenes reales trata de _.", pick: 1 },
    { es: "Lo que realmente me excita es _.", pick: 1 },
    { es: "El nuevo desafío viral de internet es el 'Reto del _'.", pick: 1 },
    { es: "En mi funeral, quiero que pongan _.", pick: 1 },
    { es: "Descubrí que mi compañero de trabajo es secretamente _.", pick: 1 },
    { es: "La peor parte de ser adulto es _.", pick: 1 },
    { es: "La nueva ley prohíbe _ en público.", pick: 1 },
    { es: "Mi tatuaje secreto dice ' _ '.", pick: 1 },
    { es: "¿Qué le regalé a mi suegra por error? _.", pick: 1 },
    { es: "El 2020 fue malo, pero al menos no tuvimos _.", pick: 1 },
    { es: "Mi sabor de helado favorito es _.", pick: 1 },
    { es: "La nueva canción del verano se llama ' _ '.", pick: 1 },
    { es: "La cura para la resaca es _.", pick: 1 },
    { es: "El área 51 realmente esconde _.", pick: 1 },
    { es: "Mi historial de Google me delató por buscar _.", pick: 1 },
    { es: "La nueva fragancia de Calvin Klein huele a _.", pick: 1 },
    { es: "_, los niños lo probaron, las madres lo aprobaron.", pick: 1 },

    // --- Lote 4: Absurdo y Picante (Pick 2) ---
    { es: "La peor combinación para una primera cita: _ y _.", pick: 2 },
    { es: "Mi currículum dice 'Experto en _', pero en realidad solo sé _.", pick: 2 },
    { es: "La reunión de padres y maestros fue incómoda cuando hablamos de _ y _.", pick: 2 },
    { es: "Lo que me mantiene despierto a las 3 AM: _ y _.", pick: 2 },
    { es: "El nuevo restaurante de lujo sirve _ con un toque de _.", pick: 2 },
    { es: "Mi epitafio dirá: 'Amaba _ y odiaba _'.", pick: 2 },
    { es: "El verdadero secreto para la felicidad es _ y _.", pick: 2 },
    { es: "Encontré un condón usado en _ y olía a _.", pick: 2 },

    // --- Lote 4: Absurdo y Picante (Pick 3) ---
    { es: "El triatlón de los dioses: nadar en _, correr con _ y andar en bicicleta sobre _.", pick: 3 },
    { es: "Mi combo de comida para la depresión es _, _ y _.", pick: 3 },
    { es: "Increible, subo un video de _ y el primer comentario es sobre _.", pick: 2 },
    { es: "Para sobrevivir a una cena familiar, necesitas _, _ y _.", pick: 3 },
    // --- Lote 5: Humor Uruguayo (Pick 1) ---
    { es: "Se cortó la luz en medio del partido y lo único que me quedó fue _.", pick: 1 },
    { es: "Fui a la rambla a tomar mate y me encontré con _.", pick: 1 },
    { es: "El nuevo plan del gobierno para bajar el dólar es _.", pick: 1 },
    { es: "Lo que realmente hay en el fondo del Palacio Salvo es _.", pick: 1 },
    { es: "En el bondi, el guarda me dijo que no podía subir con _.", pick: 1 },
    { es: "La verdadera razón por la que el chivito es tan caro es _.", pick: 1 },
    { es: "Me fui de vacaciones a Rocha y me gasté toda la plata en _.", pick: 1 },
    { es: "Mi abuela todavía guarda _ de la crisis del 2002.", pick: 1 },
    { es: "El nuevo hit del verano de Maramá se va a llamar ' _ '.", pick: 1 },
    { es: "Cuidado con _! O te volveras puto, no gay, PUTO!.", pick: 1 },
    { es: "Salí del boliche y pisé _.", pick: 1 },
    { es: "En vez de bizcochos, la panadería ahora vende _.", pick: 1 },
    { es: "La nueva medida del BROU es _.", pick: 1 },
    { es: "El Pepe Mujica dijo que lo único que le falta es _.", pick: 1 },

    // --- Lote 5: Humor Uruguayo (Pick 2) ---
    { es: "El asado del domingo se arruinó por _ y _.", pick: 2 },
    { es: "Mi estado de WhatsApp ahora dice: 'Ni _ ni _'.", pick: 2 },
    { es: "Para ser un verdadero uruguayo necesitas _, _ y ganas de quejarte.", pick: 2 },
    { es: "Lo único peor que el CTI de COVID es _ y _.", pick: 2 },
    { es: "Una paja triste no es triste sin _.", pick: 1 },
    { es: "Me colé en el ómnibus y el guarda me amenazó con _.", pick: 1 },
    // --- Lote 6: Humor Uruguayo (Pick 1) ---
    { es: "En la Criolla del Prado, un gaucho se cayó del caballo por culpa de _.", pick: 1 },
    { es: "La nueva campaña de Antel para competir con Starlink es _.", pick: 1 },
    { es: "La OSE anunció que el agua ahora viene con un leve sabor a _.", pick: 1 },
    { es: "Me colé en la Noche de la Nostalgia y lo único que pasaban era _.", pick: 1 },
    { es: "UTE informa que el próximo apagón programado es para festejar _.", pick: 1 },
    { es: "El nuevo impuesto se llama 'Impuesto al _'.", pick: 1 },
    { es: "La verdadera grieta en Uruguay es entre _ y _.", pick: 2 },
    { es: "Fui al Geant y en el parking me robaron _.", pick: 1 },
    { es: "El cuidacoches me dijo: 'Jefe, ¿no me deja algo pa' _?'", pick: 1 },
    { es: "La nueva murga se llama: 'Los Hinchas de _'.", pick: 1 },
    { es: "En el Mercado del Puerto, el medio y medio me pegó tan fuerte que vi _.", pick: 1 },
    { es: "Se suspende el fútbol por _.", pick: 1 },
    { es: "La nueva mascota de la selección uruguaya es _.", pick: 1 },
    { es: "En la playa, en vez de 'fútbol-tenis', ahora se juega al _.", pick: 1 },
    { es: "El grupo de WhatsApp de la familia se pudrió por culpa de _.", pick: 1 },

    // --- Lote 6: Humor Uruguayo (Pick 2) ---
    { es: "Salí a caminar por 18 de Julio y lo único que vi fue _ y _.", pick: 2 },
    { es: "El plan perfecto para el domingo: _ con _.", pick: 2 },
    { es: "Mi suegra me cocinó _ con _.", pick: 2 },
    { es: "Lo único más lento que un trámite del BPS es _ y _.", pick: 2 },
    { es: "La nueva moda en Pocitos es _ y _.", pick: 2 },
    { es: "El clásico se define por _ y _.", pick: 2 },
    { es: "Me tomé un bondi equivocado y terminé en _ con _.", pick: 2 },
    { es: "La UDELAR ahora tiene una carrera de 'Licenciatura en _ y _'.", pick: 2 },
    { es: "El secreto de una buena pascualina es _ y _.", pick: 2 },
    { es: "Este país no avanza por culpa de _ y _.", pick: 2 }
];

// Mazo de Cartas Blancas (Respuestas)
const whiteCardsData = [
    { es: "Eloy" },
    { es: "Minas anti-tanques" },
    { es: "El negro Mandela" },
    { es: "O capa preta" },
    { es: "2012" },
    { es: "Penes" },
    { es: "El pene" },
    { es: "Una sexy rubia con paquete" },
    { es: "Bro?" },
    { es: "Mi vida sexual" },
    { es: "Vituber furro" },
    { es: "SIDA!" },
    { es: "Un tumor cerebral" },
    { es: "Argentinos" },
    { es: "Brasileros" },
    { es: "Niños de africa" },
    { es: "Necro-zoofilia" },
    { es: "Problemitas con papá" },
    { es: "Silencio" },
    { es: "Masculinidad frajil" },
    { es: "Sexo sucio y salvaje" },
    { es: "Sexo oral no reciproco" },
    { es: "Un billete de 3 dolares" },
    { es: "Los fachas" },
    { es: "La violacion de todos los derechos humanos" },
    { es: "Putin" },
    { es: "Hitler" },
    { es: "72 virgenes" },
    { es: "Trhish" },
    { es: "Jeffo" },
    { es: "Insesto" },
    { es: "Gordofobia" },
    { es: "Gordo panceta" },
    { es: "Anorexia" },
    { es: "Un zopapo" },
    { es: "Pedofilos" },
    { es: "Monstruar" },
    { es: "Mujeres" },
    { es: "3cm" },
    { es: "Fascismo" },
    { es: "Tu mamá" },
    { es: "Racismo" },
    { es: "Bidon de tuco" },
    { es: "Un burro volador" },
    { es: "Pizza con piña" },
    { es: "La economía" },
    { es: "El sentido de la vida" },
    { es: "Un político honesto" },
    { es: "Gatos que juzgan" },
    { es: "Ruido de módem antiguo" },
    { es: "Explotar cosas con la mente" },
    { es: "Un Power Ranger desempleado" },
    { es: "Amor verdadero" },
    { es: "Ansiedad existencial" },
    { es: "Un audio de WhatsApp de 3 minutos" },
    { es: "Dejar todo para mañana" },
    { es: "El 'visto' de WhatsApp" },
    { es: "Mi ex" },
    { es: "Llorar en la ducha" },
    { es: "Un influencer haciendo el ridículo" },
    { es: "Criptomonedas" },
    { es: "El terraplanista de mi tía" },
    { es: "Gritar '¡GOL!' en un funeral" },
    { es: "El olor a nafta" },
    { es: "La friendzone" },
    { es: "Hacer contacto visual incómodo" },
    { es: "Dedos de salchicha" },
    { es: "Un video de TikTok sin gracia" },
    { es: "Elon Musk" },
    { es: "Quedarse sin batería" },
    { es: "Decir 'jaja' sin reírse" },
    { es: "Una IA que se cree poeta" },
    { es: "El capitalismo tardío" },
    { es: "Comer cereal con agua" },
    { es: "Ponerle medias a una sandía" },
    { es: "Un plot twist terrible" },
    { es: "El fantasma de Ricardo Fort" },
    { es: "Argumentos falsos que gano en mi cabeza" },
    { es: "Un mapache ladrón" },
    { es: "Sentirse ofendido en Twitter" },
    { es: "Dudar de mi propia existencia" },
    { es: "El olor a consultorio de dentista" },
    { es: "Pagar el alquiler" },
    { es: "El reggaetón antiguo" },
    { es: "Un pato con sombrero de copa" },
    { es: "El calentamiento global" },
    { es: "Mi historial de búsqueda" },
    { es: "Gente que aplaude cuando aterriza el avión" },
    { es: "Un niño gritando en un restaurante" },
    { es: "Hacer 'la granja de Zenón' en el auto" },
    { es: "El socialismo" },
    { es: "La meritocracia" },
    { es: "Un furro" },
    { es: "El olor a libro viejo" },
    { es: "Un optimismo tóxico" },
    { es: "La insoportable levedad del ser" },
    { es: "Depresión (pero con brillitos)" },
    { es: "Procrastinar agresivamente" },
    { es: "Un perro con acento argentino" },
    { es: "El algoritmo" },
    { es: "Los Illuminati" },
    { es: "El patriarcado" },
    { es: "Una Karen" },
    { es: "El Ayuwoki" },
    { es: "Un bebé feo" },
    { es: "Mi yo de 15 años" },
    { es: "El tío borracho de la fiesta" },
    { es: "Spam telefónico" },
    { es: "Una secta" },
    { es: "Decir 'provecho' en el baño" },
    { es: "El metaverso" },
    { es: "Un NFT de un mono" },
    { es: "El ano de Batman" },
    { es: "Nicolas Cage" },
    { es: "Un velociraptor vestido de cura" },
    { es: "Hacer caca en el trabajo" },
    { es: "Un vegano que come carne a escondidas" },
    { es: "El olor a humedad" },
    { es: "Poner los cuernos" },
    { es: "Un final decepcionante (como el de GOT)" },
    { es: "Usar medias con sandalias" },
    { es: "El jugo de pepinillos" },
    { es: "Un payaso triste" },
    { es: "Mi plan de datos" },
    { es: "La monja del fondo" },
    { es: "Un tatuaje mal escrito" },
    { es: "El perro del vecino a las 3 AM" },
    { es: "Una paloma comiéndose un hot dog" },
    { es: "El holocausto nuclear" },
    { es: "Vender fotos de mis pies" },
    { es: "El vello púbico de un extraño" },
    { es: "Mi jefe" },
    { es: "Mala conexión a internet" },
    { es: "Una tesis sobre la reproducción de los caracoles" },
    { es: "Un alemán gritando" },
    { es: "La gentrificación" },
    { es: "Comida de hospital" },
    { es: "La muerte térmica del universo" },
    { es: "Un musical de secundaria" },
    { es: "Una piñata llena de arañas" },
    { es: "El olor a sudor rancio" },
    { es: "El comunismo" },
    { es: "El clítoris (ese mito)" },
    // --- Lote 3: Absurdo y Picante ---
    { es: "Un abuelo haciendo 'twerking'." },
    { es: "Jeff Bezos (pero calvo)." },
    { es: "El fantasma de Michael Jackson." },
    { es: "Un niño emo de 2007." },
    { es: "Tu primo el 'emprendedor'." },
    { es: "La culpa católica." },
    { es: "El síndrome del impostor." },
    { es: "Vibras rancias." },
    { es: "Una crisis de los 30 (a los 20)." },
    { es: "Hablarle a las plantas en latín." },
    { es: "Fingir que entendiste la película." },
    { es: "Un pedo silencioso pero mortal." },
    { es: "Intentar ser sexy y fallar miserablemente." },
    { es: "Responder 'tú también' cuando el mesero te dice 'buen provecho'." },
    { es: "El sonido de un hueso rompiéndose." },
    { es: "Una berenjena sospechosamente grande." },
    { es: "Un dildo de doble punta." },
    { es: "Lágrimas de influencer." },
    { es: "Un lubricante sabor a tocino." },
    { es: "Agua bendita (de garrafa)." },
    { es: "Un nido de ratas." },
    { es: "El cadáver de un Pokémon." },
    { es: "Un vibrador que canta ópera." },
    { es: "Un fetiche de pies." },
    { es: "El porno de tentáculos." },
    { es: "Un 'accidente' en la piscina." },
    { es: "Fluidos corporales no identificados." },
    { es: "Un onlyfans de filosofía." },
    { es: "El claxon de un payaso en un momento serio." },
    { es: "El 'privilegio blanco'." },
    { es: "Un mapache con ansiedad." },
    { es: "Comer mayonesa directamente del frasco." },
    { es: "El cadáver de la Reina Isabel." },
    { es: "El olor de la axila de un programador." },
    { es: "La voz de mi conciencia (que suena como Ricardo Arjona)." },
    { es: "Un discurso motivacional de un terraplanista." },
    { es: "Sexo tántrico." },
    { es: "Una erección inoportuna." },
    { es: "Un pezón solitario." },
    { es: "Un divorcio muy caro." },
    { es: "El 'gemido' de una cafetera." },
    { es: "La mirada de desaprobación de mi gato." },
    { es: "Una orgía de pitufos." },
    { es: "Preguntar '¿cuál?' cuando te dicen 'te amo'." },
    { es: "Depilarse el ano con cera." },
    { es: "La friendzone... otra vez." },
    { es: "Un powerpoint sobre mis traumas." },
    { es: "El olor a iglesia." },
    { es: "Música de ascensor (pero metalera)." },
    { es: "Un agujero de gloria." },
    // --- Lote 4: Absurdo y Picante ---
    { es: "Una suscripción a OnlyFans." },
    { es: "El olor a naftalina." },
    { es: "Un cura con un secreto." },
    { es: "Un 'sugar daddy' diabético." },
    { es: "El comunismo (en teoría)." },
    { es: "El comunismo (en la práctica)." },
    { es: "Un moco perfectamente preservado." },
    { es: "Un clítoris de 3 metros." },
    { es: "Una abuela racista." },
    { es: "Mi dignidad (lo poco que queda)." },
    { es: "La voz de Gal Gadot cantando 'Imagine'." },
    { es: "Un pezón erecto." },
    { es: "Un feto en un frasco." },
    { es: "Hacer 'ghosting'." },
    { es: "Un coach de vida desempleado." },
    { es: "El olor a 'auto nuevo'." },
    { es: "Cagar en el baño de visitas." },
    { es: "La virginidad." },
    { es: "Una orgía de enanos." },
    { es: "El ano blanqueado de un famoso." },
    { es: "Un culo espectacular." },
    { es: "Los antivacunas." },
    { es: "Un podcast sobre nada." },
    { es: "La circuncisión." },
    { es: "Películas de Adam Sandler." },
    { es: "Semen." },
    { es: "Un testículo solitario." },
    { es: "El 'Black Friday'." },
    { es: "Mi colección de vibradores." },
    { es: "Chistes de padres." },
    { es: "Comerse las uñas de los pies." },
    { es: "El jugo de la basura." },
    { es: "Un 'deepfake' de mi madre." },
    { es: "El punto G." },
    { es: "Un pañal usado." },
    { es: "El holocausto." },
    { es: "Un consolador con forma de Shrek." },
    { es: "El olor a semen." },
    { es: "El vello púbico de Jesús." },
    { es: "Una toalla higiénica usada." },
    { es: "Una relación tóxica." },
    { es: "El olor a hospital." },
    { es: "Un vegano diciéndote que es vegano." },
    { es: "El K-Pop." },
    { es: "La regla." },
    { es: "Un payaso sexualmente frustrado." },
    { es: "El pene de mi ex." },
    { es: "Un 'baby shower' horrible." },
    { es: "El olor a perro mojado." },
    { es: "Un aborto casero." },
    // --- Lote 5: Humor Uruguayo ---
    { es: "Un termo Stanley." },
    { es: "El culo de la uruguaya." },
    { es: "Un carpincho de Nordelta." },
    { es: "El Pepe." },
    { es: "Un mate lavado." },
    { es: "Dos docenas de bizcochos." },
    { es: "El fantasma de Gardel." },
    { es: "Un choripán del Estadio." },
    { es: "La rambla en invierno." },
    { es: "El culo de Luis Suárez." },
    { es: "Una torta frita de un día para el otro." },
    { es: "El 'vamo arriba'." },
    { es: "Un 'ta, chau'." },
    { es: "El bondi." },
    { es: "Una milanesa a caballo." },
    { es: "El laburo." },
    { es: "Quedarse sin yerba un domingo." },
    { es: "Punta del Este en enero." },
    { es: "Un porteño quejándose." },
    { es: "El 18 de Julio a las 6 de la tarde." },
    { es: "La garra charrúa." },
    { es: "El dulce de leche." },
    { es: "Un 'vo, bo'." },
    { es: "La fiebre aftosa." },
    { es: "Un pichi." },
    { es: "La Costa de Oro." },
    { es: "Un plancha." },
    { es: "El Frente Amplio." },
    { es: "La Coalición Multicolor." },
    { es: "Una murga." },
    { es: "Forlán." },
    { es: "Comprar fiado." },
    { es: "El precio de la nafta." },
    { es: "Un chivito completo." },
    { es: "Agua Salus (con gas)." },
    { es: "El Palacio Legislativo." },
    { es: "La Intendencia de Montevideo." },
    { es: "Un ricardito." },
    { es: "Natalia Oreiro." },
    { es: "Un puto." },
    // --- Lote 6: Humor Uruguayo ---
    { es: "El 'vamo arriba'." },
    { es: "Un 'ta, chau'." },
    { es: "Un 'salado'." },
    { es: "Un 'demás'." },
    { es: "El calefón que gotea." },
    { es: "La garrafa de 13kg." },
    { es: "El viento de la rambla." },
    { es: "La humedad." },
    { es: "Ir a laburar." },
    { es: "Un asado prendido con piñas." },
    { es: "La China Zorrilla." },
    { es: "El Petinatti." },
    { es: "Un gol en la hora." },
    { es: "Una Pilsen bien fría." },
    { es: "Una Patricia de litro." },
    { es: "El 'Cacho' de la Cruz." },
    { es: "Un pascualina." },
    { es: "Un gramajo." },
    { es: "Los ñoquis del 29." },
    { es: "El truco." },
    { es: "El candombe." },
    { es: "Un tarro de dulce de leche Conaprole." },
    { es: "El 'FA'." },
    { es: "El 'cuco'." },
    { es: "Un feriado laborable." },
    { es: "El Carnaval más largo del mundo." },
    { es: "Quejarse del clima." },
    { es: "Estar 'en el horno'." },
    { es: "Dar manija." },
    { es: "Colgarse." },
    { es: "Pagar el boleto." },
    { es: "El boleto de una hora." },
    { es: "Un 'cheto' de Carrasco." },
    { es: "Un 'plancha' de Casavalle." },
    { es: "El Mercado Agrícola (MAM)." },
    { es: "El Antel Arena." },
    { es: "El Parque Rodó." },
    { es: "Un 'medio y medio' del Roldós." },
    { es: "La Celeste." },
    { es: "Un gol de Cavani." },
    { es: "Una mordida de Suárez." },
    { es: "El 'Maestro' Tabárez." },
    { es: "La OSE." },
    { es: "La UTE." },
    { es: "El BPS." },
    { es: "Tienda Inglesa." },
    { es: "El Devoto." },
    { es: "El ómnibus." },
    { es: "Una 'tata'." },
    { es: "El 'ni-ni'." },
    { es: "Un alfajor de las Sierras de Minas." },
    { es: "Yerba Canarias." },
    { es: "Un 'no te banco más'." },
    { es: "El culebrón de las 8." },
    { es: "Omar Gutiérrez." },
    { es: "El 'desayuno uruguayo' (mate y bizcochos)." },
    { es: "Un fainá." },
    { es: "La morcilla dulce." },
    { es: "Un 'pancho' de La Pasiva." },
    { es: "La mostaza de La Pasiva." },
    { es: "Un referéndum." },
    { es: "El déficit fiscal." },
    { es: "La calle 'Sal-si-puedes'." },
    { es: "Cruzar el charco." },
    { es: "El 'Día del Centro'." },
    { es: "Un grafiti de 'Peñarol'." },
    { es: "Un grafiti de 'Nacional'." },
    { es: "La feria de Tristán Narvaja." },
    { es: "El olor a chivito." }
];

// --- ESTADO DEL JUEGO ---
let playerHand = [];
let whiteDeck = [];
let blackDeck = [];
let currentBlackCard = null;
let selectedCardsData = [];
let currentLang = 'es';
const HAND_SIZE = 5; 
let score = 0;

// --- ELEMENTOS DEL DOM ---
const startBtn = document.getElementById('start-btn');
const endBtn = document.getElementById('end-btn');
const settingsBtn = document.getElementById('settings-btn');
const gameContainer = document.getElementById('game-container');
const blackCardElem = document.getElementById('black-card');
const playedCardsSlots = document.getElementById('played-cards-slots');
const playerHandElem = document.getElementById('player-hand');
const pickTextElem = document.getElementById('pick-text');

// Contador
const scoreDisplay = document.getElementById('score-display');
const addScoreBtn = document.getElementById('add-score');
const subtractScoreBtn = document.getElementById('subtract-score');

// Modal
const modal = document.getElementById('settings-modal');
const closeBtn = document.querySelector('.close-btn');
const volumeControl = document.getElementById('volume-control');
const langSelect = document.getElementById('lang-select');

// Botones de Flujo
const confirmPlayBtn = document.getElementById('confirm-play-btn');
const advanceRoundBtn = document.getElementById('advance-round-btn');

// --- ELEMENTOS DE MÚSICA (ACTUALIZADO para tu HTML) ---
const musicSelect = document.getElementById('music-select');
const musicTracks = {
    'Viento_y_hacha': document.getElementById('Viento_y_hacha'),
    'Brama_el_viento': document.getElementById('Brama_el_viento'),
    'Rey_del_asado': document.getElementById('Rey_del_asado')
};
let currentTrackId = 'Viento_y_hacha'; // Pista por defecto

// --- LÓGICA DEL JUEGO ---

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function startGame() {
    currentLang = langSelect.value;
    currentTrackId = musicSelect.value; // Toma la música seleccionada al iniciar
    
    whiteDeck = shuffleDeck([...whiteCardsData]);
    blackDeck = shuffleDeck([...blackCardsData]);
    
    playerHand = [];
    selectedCardsData = [];
    score = 0;
    updateScoreDisplay();
    
    gameContainer.classList.remove('hidden');
    startBtn.classList.add('hidden');
    endBtn.classList.remove('hidden');
    confirmPlayBtn.classList.add('hidden');
    advanceRoundBtn.classList.add('hidden');
    playerHandElem.classList.remove('hidden');
    langSelect.disabled = true;
    musicSelect.disabled = true; // Deshabilita el selector de música durante el juego

    nextRound(HAND_SIZE); 
    
    playCurrentMusic();
}

function endGame() {
    gameContainer.classList.add('hidden');
    startBtn.classList.remove('hidden');
    endBtn.classList.add('hidden');
    confirmPlayBtn.classList.add('hidden');
    advanceRoundBtn.classList.add('hidden');
    langSelect.disabled = false;
    musicSelect.disabled = false; // Habilita el selector de música de nuevo
    
    playerHandElem.innerHTML = '';
    blackCardElem.innerHTML = '';
    playedCardsSlots.innerHTML = '';
    pickTextElem.innerText = '';
    
    stopAllMusic();
}

/** Detiene todas las pistas de música */
function stopAllMusic() {
    Object.values(musicTracks).forEach(track => {
        if (track) { // Verifica que el elemento exista
            track.pause();
            track.currentTime = 0;
        }
    });
}

/** Reproduce la pista seleccionada actualmente */
function playCurrentMusic() {
    stopAllMusic(); // Detiene todo primero
    const trackToPlay = musicTracks[currentTrackId];
    if (trackToPlay) { // Verifica que la pista exista
        trackToPlay.volume = volumeControl.value;
        trackToPlay.play().catch(e => console.log("El usuario debe interactuar para reproducir música."));
    }
}

/** Cambia la pista de música y la reproduce */
function switchMusic() {
    const selectedTrack = musicSelect.value;
    currentTrackId = selectedTrack;
    // Solo reproduce si el juego ya está en marcha
    if (!gameContainer.classList.contains('hidden')) {
        playCurrentMusic();
    }
}


function nextRound(cardsToDraw) {
    advanceRoundBtn.classList.add('hidden'); 
    
    selectedCardsData = [];
    playedCardsSlots.innerHTML = '';
    playerHandElem.classList.remove('hidden');

    if (blackDeck.length === 0) {
        // Opcional: Re-barajar si se acaban
        console.warn("Mazo de cartas negras vacío. Reiniciando mazo.");
        blackDeck = shuffleDeck([...blackCardsData]);
    }

    currentBlackCard = blackDeck.pop();
    
    let blackCardText = getCardText(currentBlackCard, 'es'); 
    if (currentLang === 'pt') {
        blackCardText = getCardText(currentBlackCard, 'pt');
    } else if (currentLang === 'bi') {
        blackCardText = `${getCardText(currentBlackCard, 'es')} <br>/<br> ${getCardText(currentBlackCard, 'pt')}`;
    }
    
    let displayHtml = blackCardText.replace(/_/g, "<span>[____]</span>");
    blackCardElem.innerHTML = displayHtml;
    pickTextElem.innerText = uiTexts[currentLang].pick(currentBlackCard.pick);

    for (let i = 0; i < cardsToDraw; i++) {
        drawWhiteCard();
    }
    
    renderHand();
}

/** * Maneja la lógica de SELECCIÓN de cartas.
 */
function playWhiteCard(cardData, cardElement) {
    const index = selectedCardsData.indexOf(cardData);

    if (index > -1) {
        selectedCardsData.splice(index, 1);
        cardElement.classList.remove('selected');
    } else {
        if (selectedCardsData.length < currentBlackCard.pick) {
            selectedCardsData.push(cardData);
            cardElement.classList.add('selected');
        }
    }
    
    const allHandCards = playerHandElem.querySelectorAll('.white-card');

    if (selectedCardsData.length === currentBlackCard.pick) {
        confirmPlayBtn.classList.remove('hidden');
        
        allHandCards.forEach(card => {
            if (!card.classList.contains('selected')) {
                card.classList.add('hidden');
            }
        });
        
    } else {
        confirmPlayBtn.classList.add('hidden');
        
        allHandCards.forEach(card => {
            card.classList.remove('hidden');
        });
    }
}

/** * Se activa al pulsar 'Confirmar Jugada'.
 */
function confirmPlay() {
    confirmPlayBtn.classList.add('hidden');
    advanceRoundBtn.classList.remove('hidden');
    
    const selectedElements = document.querySelectorAll('.white-card.selected');
    selectedElements.forEach(elem => {
        playedCardsSlots.appendChild(elem);
        elem.classList.remove('selected');
        elem.classList.remove('hidden');
        elem.onclick = null; 
    });
    
    playerHandElem.classList.add('hidden');
    
    playerHand = playerHand.filter(card => !selectedCardsData.includes(card));
}


function drawWhiteCard() {
    if (whiteDeck.length === 0) {
        console.warn("Mazo blanco vacío. Reiniciando mazo.");
        whiteDeck = shuffleDeck([...whiteCardsData]);
    }
    if (whiteDeck.length > 0) {
        playerHand.push(whiteDeck.pop());
    }
}

function renderHand() {
    playerHandElem.innerHTML = '';
    
    playerHand.forEach(cardData => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'white-card');
        
        let whiteCardText = getCardText(cardData, 'es');
        if (currentLang === 'pt') {
            whiteCardText = getCardText(cardData, 'pt');
        } else if (currentLang === 'bi') {
            whiteCardText = `${getCardText(cardData, 'es')} <br>/<br> ${getCardText(cardData, 'pt')}`;
        }
        
        cardElement.innerHTML = whiteCardText;
        cardElement.onclick = () => playWhiteCard(cardData, cardElement);
        playerHandElem.appendChild(cardElement);
    });
}

function getCardText(card, lang) {
    const esText = card.es || "Texto Faltante (ES)";
    const ptText = card.pt || esText;
    
    if (currentLang === 'bi') {
        return `${esText} <hr> ${ptText}`;
    }
    if (currentLang === 'pt') {
        return ptText;
    }
    return esText;
}

function updateScoreDisplay() {
    scoreDisplay.innerText = score;
}

function updateLanguage() {
    currentLang = langSelect.value;
    
    startBtn.innerText = uiTexts[currentLang].start;
    endBtn.innerText = uiTexts[currentLang].end;
    settingsBtn.innerText = uiTexts[currentLang].settings;
    confirmPlayBtn.innerText = uiTexts[currentLang].confirmPlay;
    advanceRoundBtn.innerText = uiTexts[currentLang].advanceRound; 
    
    document.getElementById('settings-title').innerText = uiTexts[currentLang].settingsTitle;
    document.getElementById('volume-label').innerText = uiTexts[currentLang].volumeLabel;
    document.getElementById('music-label').innerText = uiTexts[currentLang].musicLabel;
    document.getElementById('lang-label').innerText = uiTexts[currentLang].langLabel;
    document.getElementById('score-label').innerText = uiTexts[currentLang].score;
    
    if (currentBlackCard) {
        pickTextElem.innerText = uiTexts[currentLang].pick(currentBlackCard.pick);
    }

    if (!gameContainer.classList.contains('hidden')) {
        renderHand(); 
        
        let blackCardText = getCardText(currentBlackCard, 'es');
        if (currentLang === 'pt') {
            blackCardText = getCardText(currentBlackCard, 'pt');
        } else if (currentLang === 'bi') {
            blackCardText = `${getCardText(currentBlackCard, 'es')} <br>/<br> ${getCardText(currentBlackCard, 'pt')}`;
        }
        let displayHtml = blackCardText.replace(/_/g, "<span>[____]</span>");
        blackCardElem.innerHTML = displayHtml;
        
        playedCardsSlots.innerHTML = '';
    }
}

// --- EVENT LISTENERS ---

startBtn.addEventListener('click', startGame);
endBtn.addEventListener('click', endGame);
confirmPlayBtn.addEventListener('click', confirmPlay);
advanceRoundBtn.addEventListener('click', () => {
    // Llama a nextRound, pasando el número de cartas que necesita robar
    nextRound(selectedCardsData.length);
});

// Contador
addScoreBtn.addEventListener('click', () => {
    score++;
    updateScoreDisplay();
});
subtractScoreBtn.addEventListener('click', () => {
    if (score > 0) { 
        score--;
        updateScoreDisplay();
    }
});

// Modal
settingsBtn.addEventListener('click', () => modal.style.display = 'block');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Ajustes
volumeControl.addEventListener('input', (e) => {
    const newVolume = e.target.value;
    Object.values(musicTracks).forEach(track => {
        if(track) track.volume = newVolume;
    });
});
musicSelect.addEventListener('change', switchMusic);
langSelect.addEventListener('change', updateLanguage);

// Init
updateLanguage();