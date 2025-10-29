// =============================================================
// --- DATOS DEL JUEGO ---
// =============================================================
const uiTexts = {
    es: {
        start: "Iniciar Partida", end: "Terminar Partida", settings: "Ajustes",
        settingsTitle: "Ajustes", volumeLabel: "Volumen de Música", musicLabel: "Música de Fondo",
        langLabel: "Idioma", pick: (num) => `Elige ${num} carta(s)`, score: "Puntos:",
        confirmPlay: "Confirmar Jugada", confirmOrder: "Confirmar Orden",
        advanceRound: "Siguiente Ronda"
    },
    pt: {
        start: "Iniciar Jogo", end: "Terminar Jogo", settings: "Configurações",
        settingsTitle: "Configurações", volumeLabel: "Volume da Música", musicLabel: "Música de Fundo",
        langLabel: "Idioma", pick: (num) => `Escolha ${num} carta(s)`, score: "Pontos:",
        confirmPlay: "Confirmar Jogada", confirmOrder: "Confirmar Ordem", // Texto PT añadido
        advanceRound: "Próxima Rodada"
    },
    bi: {
        start: "Iniciar Partida / Jogo", end: "Terminar Partida / Jogo", settings: "Ajustes / Configurações",
        settingsTitle: "Ajustes / Configurações", volumeLabel: "Volumen / Volume", musicLabel: "Música de Fondo / Fundo",
        langLabel: "Idioma", pick: (num) => `Elige / Escolha ${num} carta(s)`, score: "Puntos / Pontos:",
        confirmPlay: "Confirmar Jogada", confirmOrder: "Confirmar Orden / Ordem", // Texto BI añadido
        advanceRound: "Siguiente Ronda / Próxima Rodada"
    } // Llave de cierre corregida
};

// --- MAZOS DE CARTAS ---
const blackCardsData = [
    // Pick 1
    { es: "¿Qué es ese olor? Es _.", pick: 1 },
    { es: "A mi edad, mi abuelo cobraba 50 centesimos por _.", pick: 1 },
    { es: "Tras años de busqueda no se a podido corroborar la existencia de _.", pick: 1 },
    { es: "_, amor a primera vista.", pick: 1 },
    { es: "", pick: 1 },
    { es: "Bienvenido al grupo de _.", pick: 1 },
    { es: "La nueva experiencia de VR incluye _.", pick: 1 },
    { es: "Con paciencia y dedicación puedes dedicarte a vivir de _.", pick: 1 },
    { es: "¿Que es lo más lindo? _.", pick: 1 },
    { es: "_ pero es que además, LITERALMENTE.", pick: 1 },
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
    { es: "_, no puedes tener solo uno.", pick: 1 },
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
    { es: "El feminismo moderno arruinó _.", pick: 1 },
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
    { es: "Siempre que _, me dan ganas de _", pick: 2 },
    { es: "Le vendí mi alma al diablo, el me prometio _, pero todo lo que obtuve fue _.", pick: 2 },
    { es: "No debes _, mejor _.", pick: 2 },
    { es: "_ sirve como antidepresivo.", pick: 1 },
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
    { es: "No se preocupen niños, se pone mejor cada vez, yo llevo 20 años con _.", pick: 1 },

    // --- Lote 4: Absurdo y Picante (Pick 2) ---
    { es: "La peor combinación para una primera cita: _ y _.", pick: 2 },
    { es: "Mi currículum dice 'Experto en _', pero en realidad solo sé _.", pick: 2 },
    { es: "La reunión de padres y maestros fue incómoda cuando hablamos de _ y _.", pick: 2 },
    { es: "Lo que me mantiene despierto a las 3 AM: _.", pick: 1 },
    { es: "Lo que me mantiene despierto a las 3 AM: _ y _.", pick: 2 },
    { es: "En la fiesta de los sobrevivientes de Vietnam pusieron _.", pick: 1 },
    { es: "¿Que es lo que nunca falla para animar una fiesta? _.", pick: 1 },
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
    { es: "¿Qué cortó el rollo en la orgía.", pick: 1 },
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
    { es: "¿Cuál es mi mayor defecto? _.", pick: 1 },
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
    { es: "Esclavitud de minorías" },
    { es: "Huevos de codorniz lanzados con mucha fuerza" },
    { es: "El gobierno" },
    { es: "Barney el dinosaurio 'no' pedófilo" },
    { es: "El agujero equivocado" },
    { es: "Error 404 respuesta no encontrada" },
    { es: "Fingir ser una chica en internet" },
    { es: "El suicidio siempre es la solución" },
    { es: "Huerfanos" },
    { es: "Un test para saber que tan negro eres" },
    { es: "Enanos de circo" },
    { es: "Un niño ciego, sordo y mudo" },
    { es: "Las buenas drogas" },
    { es: "Estar muy fumado" },
    { es: "Estar muy borracho" },
    { es: "Spiderman biologicamente correcto que lanza telarañas por el ano" },
    { es: "Bebés muertos" },
    { es: "Padres muertos" },
    { es: "Enanos disfrazados" },
    { es: "Humillación sexual" },
    { es: "Puto el que lo lea" },
    { es: "Tiroteo escolar" },
    { es: "Tu hermana que es puta, reputa y recontraputa, joder que puta es" },
    { es: "Flashbacks de Vietnam" },
    { es: "Solo un poquitito de violación anal" },
    { es: "Putas Harry! PUTAS!" },
    { es: "Que te den matraca hasta que tu culo resista" },
    { es: "La puta que te remil pario, no tengo nada" },
    { es: "Sexo sadomasoquista" },
    { es: "Bailar como retrasado en la autopista" },
    { es: "Los Amish" },
    { es: "Erección al pasar por una guardería" },
    { es: "Un colegio de monjas muy zorras" },
    { es: "Gente que nunca conocerá el dulce placer de caminar" },
    { es: "La abuela desnuda" },
    { es: "Golpes muy fuertes en la entrepierna" },
    { es: "LA CAJA! LA CAJA!" },
    { es: "La paz mundial" },
    { es: "Feminazis enojadas" },
    { es: "Gente fea" },
    { es: "Un amigo que siempre esta dispuesto a hacerte una paja no homo" },
    { es: "Gente tonta" },
    { es: "Chinos trabajando en una fabrica ilegal" },
    { es: "Tener vagina" },
    { es: "Labios vaginales tan grandes que aplauden al caminar" },
    { es: "La concha peluda" },
    { es: "El clítoris" },
    { es: "La comunidad LGBTQ+ y mucho más" },
    { es: "Aliento de pene" },
    { es: "Cebollas" },
    { es: "Lamer el exterior de un ano y no terminar el trabajo" },
    { es: "Cuando te tiras un pedo y te cagas un poquito" },
    { es: "Eutanasia" },
    { es: "Ser árabe y explotar" },
    { es: "Adolescentes virgenes" },
    { es: "Usar mi ano como trompeta en el show de talentos" },
    { es: "Mi culo negro" },
    { es: "My nigga" },
    { es: "Minas anti-tanques" },
    { es: "El negro Mandela" },
    { es: "El capa preta" },
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
    { es: "Masculinidad frájil" },
    { es: "Sexo sucio y salvaje" },
    { es: "Sexo oral no reciproco" },
    { es: "Un billete de 3 dolares" },
    { es: "Los fachas" },
    { es: "La violacion de todos los derechos humanos" },
    { es: "Vladimir Putin" },
    { es: "Hitler" },
    { es: "72 virgenes" },
    { es: "Trish" },
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
    { es: "El terraplanismo de mi tía" },
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
    { es: "Gente negra" },
    { es: "Monaguillos" },
    { es: "Menores realizando trabajos forzados" },
    { es: "Gente blanca" },
    { es: "La abuela de mi amigo con lencería" },
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
    { es: "BATMAN!!" },
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
    { es: "Sexo con tentáculos." },
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
    { es: "Bragas usadas." },
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
    { es: "El 30 de febrero al atardecer." },
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

// =============================================================
// --- ESTADO DEL JUEGO ---
// =============================================================
let players = []; // Array de objetos: { id: 0, name: "P1", score: 0, hand: [] }
let whiteDeck = [];
let blackDeck = [];
let currentBlackCard = null;
let currentReaderIndex = -1; // Quién lee (0, 1, 2)
let currentPlayerIndex = -1; // Quién juega (el que NO es lector)
let currentTurnPlayer = -1; // A qué jugador (0, 1, 2) le toca jugar AHORA
let gameState = 'setup'; // Estados: setup, playing, reordering, judging, round_end
let submittedCards = {}; // { 0: [cardData], 1: [cardData] } - ID del jugador que juega
let selectedCardsData = []; // Selección local del jugador activo
let orderedCardElements = []; // Elementos HTML para reordenar
let currentLang = 'es';
const HAND_SIZE = 5;

// =============================================================
// --- ELEMENTOS DEL DOM ---
// =============================================================
// Modales
const setupModal = document.getElementById('setup-modal');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.querySelector('#settings-modal .close-btn');

// Botones Setup
const startSetupBtn = document.getElementById('start-setup-btn');
const pNameInputs = [
    document.getElementById('p1-name'),
    document.getElementById('p2-name'),
    document.getElementById('p3-name')
];

// Contenedores Principales
const appContainer = document.getElementById('app-container');
const gameContainer = document.getElementById('game-container');
const playerHandsContainer = document.querySelector('.player-hands-container');

// Barra Superior
const scoreBoards = [
    document.getElementById('score-board-0'),
    document.getElementById('score-board-1'),
    document.getElementById('score-board-2')
];
const controlsDiv = document.querySelector('.controls'); // Contenedor para botones dinámicos
const endBtn = document.getElementById('end-btn');
const settingsBtn = document.getElementById('settings-btn');

// Área de Juego Central
const blackCardElem = document.getElementById('black-card');
const gameMessageElem = document.getElementById('game-message');
const playedCardsSlots = document.getElementById('played-cards-slots');
const slotPlayerLeft = document.getElementById('slot-player-left');
const slotPlayerRight = document.getElementById('slot-player-right');
const readerChoiceButtons = document.getElementById('reader-choice-buttons');
const chooseLeftBtn = document.getElementById('choose-left-btn');
const chooseRightBtn = document.getElementById('choose-right-btn');
const advanceRoundBtn = document.getElementById('advance-round-btn');


// Manos (Divs contenedores)
const playerHandElems = [
    document.getElementById('player-hand-0'),
    document.getElementById('player-hand-1'),
    document.getElementById('player-hand-2')
];

// Botones de Confirmación (debajo de las manos)
const confirmationButtonsDiv = document.querySelector('.confirmation-buttons');
const confirmPlayBtn = document.getElementById('confirm-play-btn');
const confirmOrderBtn = document.getElementById('confirm-order-btn');

// Ajustes y Música
const volumeControl = document.getElementById('volume-control');
const langSelect = document.getElementById('lang-select');
const musicSelect = document.getElementById('music-select');
const musicTracks = {
    'Viento_y_hacha': document.getElementById('Viento_y_hacha'),
    'Brama_el_viento': document.getElementById('Brama_el_viento'),
    'Rey_del_asado': document.getElementById('Rey_del_asado')
};
let currentTrackId = 'Viento_y_hacha';


// =============================================================
// --- INICIO Y CONFIGURACIÓN ---
// =============================================================

startSetupBtn.addEventListener('click', () => {
    players = [];
    for (let i = 0; i < 3; i++) {
        players.push({
            id: i,
            name: pNameInputs[i].value || `Jugador ${i + 1}`,
            score: 0,
            hand: [] // La mano se guarda aquí
        });
    }
    setupModal.style.display = 'none';
    appContainer.classList.remove('hidden');
    initializeGame();
});

function initializeGame() {
    whiteDeck = shuffleDeck([...whiteCardsData]);
    blackDeck = shuffleDeck([...blackCardsData]);

    // Reparte manos iniciales
    players.forEach(player => {
        player.hand = dealCards(whiteDeck, HAND_SIZE);
    });

    currentReaderIndex = 0; // Empieza el jugador 0 como lector
    updateScoreboardHighlight();
    startNewRound();
    playCurrentMusic();
}

function updateScoreboardHighlight() {
    scoreBoards.forEach((board, index) => {
        board.classList.toggle('reader', index === currentReaderIndex);
        // Actualiza nombre y puntaje
        board.querySelector('.player-name').innerText = players[index].name;
        board.querySelector('.score').innerText = players[index].score;
    });
}

// =============================================================
// --- LÓGICA DE RONDAS Y TURNOS ---
// =============================================================

function startNewRound() {
    gameState = 'playing';
    submittedCards = {}; // Limpia cartas jugadas
    selectedCardsData = []; // Limpia selección local
    orderedCardElements = []; // Limpia elementos para reordenar

    // Limpia áreas visuales
    slotPlayerLeft.innerHTML = '';
    slotPlayerRight.innerHTML = '';
    playedCardsSlots.classList.remove('reordering');
    readerChoiceButtons.classList.add('hidden');
    advanceRoundBtn.classList.add('hidden');
    confirmPlayBtn.classList.add('hidden');
    confirmOrderBtn.classList.add('hidden');
    confirmationButtonsDiv.classList.add('hidden'); // Oculta contenedor de botones

    // Saca nueva carta negra
    if (blackDeck.length === 0) blackDeck = shuffleDeck([...blackCardsData]);
    currentBlackCard = blackDeck.pop();
    renderBlackCard();

    // Determina quién juega (los que NO son lectores)
    let playingPlayerIndexes = players.map(p => p.id).filter(id => id !== currentReaderIndex);
    currentPlayerIndex = 0; // Índice dentro de los que juegan (0 o 1)
    currentTurnPlayer = playingPlayerIndexes[currentPlayerIndex]; // ID real del jugador (0, 1, 2)

    updateGameMessage();
    renderAllHands(); // Dibuja todas las manos (con highlights)
}

function advanceTurn() {
    // Limpia selección y botones del jugador anterior
    selectedCardsData = [];
    confirmPlayBtn.classList.add('hidden');
    confirmOrderBtn.classList.add('hidden');
    confirmationButtonsDiv.classList.add('hidden');


    currentPlayerIndex++; // Avanza al siguiente jugador QUE JUEGA

    let playingPlayerIndexes = players.map(p => p.id).filter(id => id !== currentReaderIndex);

    if (currentPlayerIndex < playingPlayerIndexes.length) {
        // Todavía hay jugadores por jugar
        currentTurnPlayer = playingPlayerIndexes[currentPlayerIndex];
        updateGameMessage();
        renderAllHands(); // Actualiza highlights
    } else {
        // Todos los jugadores (que no son el lector) han jugado
        gameState = 'judging';
        currentTurnPlayer = -1; // Nadie tiene el turno activo
        updateGameMessage();
        renderAllHands(); // Quita highlights
        displaySubmittedCards(); // Muestra las cartas para el lector
        readerChoiceButtons.classList.remove('hidden'); // Muestra botones de elegir
    }
}

function updateGameMessage() {
    let message = "";
    switch (gameState) {
        case 'playing':
            message = `Turno de ${players[currentTurnPlayer].name} para jugar ${currentBlackCard.pick} carta(s).`;
            break;
        case 'reordering':
             message = `Turno de ${players[currentTurnPlayer].name}. Ordena tus cartas.`;
             break;
        case 'judging':
            message = `Turno de ${players[currentReaderIndex].name} (Lector) para elegir la mejor respuesta.`;
            break;
        case 'round_end':
            // El mensaje de ganador se maneja en chooseWinner
            break;
        default:
            message = "Cargando...";
    }
    gameMessageElem.innerText = message;
}

function rotateReader() {
    currentReaderIndex = (currentReaderIndex + 1) % players.length;
    updateScoreboardHighlight();
}

// =============================================================
// --- RENDERIZADO DE CARTAS ---
// =============================================================

function renderBlackCard() {
    if (!currentBlackCard) return;
    let text = getCardText(currentBlackCard, 'es'); // Adaptar idioma si es necesario
    blackCardElem.innerHTML = text.replace(/_/g, "<span>[____]</span>");
}

function renderAllHands() {
    players.forEach((player, index) => {
        const handElem = playerHandElems[index];
        handElem.innerHTML = ''; // Limpia mano
        handElem.classList.toggle('active', index === currentTurnPlayer && gameState === 'playing');
        handElem.classList.toggle('reader', index === currentReaderIndex);

        player.hand.forEach(cardData => {
            const cardElement = createWhiteCardElement(cardData, index); // Pasa el índice del jugador
            handElem.appendChild(cardElement);
        });
    });
     // Muestra/oculta el contenedor de botones de confirmación si es el turno de alguien
     confirmationButtonsDiv.classList.toggle('hidden', currentTurnPlayer === -1 || gameState !== 'playing' && gameState !== 'reordering');
}

function createWhiteCardElement(cardData, playerOwnerIndex) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'white-card');
    cardElement.innerHTML = getCardText(cardData, currentLang); // Usa el idioma actual

    // Solo permite click si es el turno de este jugador y estamos jugando
    if (playerOwnerIndex === currentTurnPlayer && gameState === 'playing') {
        cardElement.onclick = () => selectCard(cardData, cardElement);
    } else {
        cardElement.classList.add('disabled'); // Marca como no jugable
    }
    return cardElement;
}

function displaySubmittedCards() {
    slotPlayerLeft.innerHTML = '';
    slotPlayerRight.innerHTML = '';
    
    let playingPlayerIds = Object.keys(submittedCards).map(id => parseInt(id));

    // Muestra la carta del primer jugador que jugó a la izquierda
    if (playingPlayerIds.length > 0) {
        const playerIdLeft = playingPlayerIds[0];
        submittedCards[playerIdLeft].forEach(cardData => {
             const cardElement = document.createElement('div');
             cardElement.classList.add('card', 'white-card');
             cardElement.innerHTML = getCardText(cardData, currentLang);
             slotPlayerLeft.appendChild(cardElement);
        });
        // Guarda el ID del jugador en el botón para saber a quién dar el punto
        chooseLeftBtn.dataset.playerId = playerIdLeft;
    }

    // Muestra la carta del segundo jugador que jugó a la derecha
    if (playingPlayerIds.length > 1) {
        const playerIdRight = playingPlayerIds[1];
         submittedCards[playerIdRight].forEach(cardData => {
             const cardElement = document.createElement('div');
             cardElement.classList.add('card', 'white-card');
             cardElement.innerHTML = getCardText(cardData, currentLang);
             slotPlayerRight.appendChild(cardElement);
        });
        chooseRightBtn.dataset.playerId = playerIdRight;
    }
}


// =============================================================
// --- ACCIONES DEL JUGADOR ---
// =============================================================

function selectCard(cardData, cardElement) {
    // Solo el jugador actual puede seleccionar
    if (gameState !== 'playing' || players[currentTurnPlayer].id !== parseInt(cardElement.closest('.player-hand').id.split('-')[2])) return;

    const index = selectedCardsData.findIndex(data => data === cardData);

    if (index > -1) {
        selectedCardsData.splice(index, 1);
        cardElement.classList.remove('selected');
    } else {
        if (selectedCardsData.length < currentBlackCard.pick) {
            selectedCardsData.push(cardData);
            cardElement.classList.add('selected');
        }
    }

    // Actualiza botones y visualización de cartas no seleccionadas
    updateSelectionUI();
}

function updateSelectionUI() {
     const handElem = playerHandElems[currentTurnPlayer];
     const allHandCards = handElem.querySelectorAll('.white-card');

     if (selectedCardsData.length === currentBlackCard.pick) {
        confirmPlayBtn.classList.remove('hidden');
        allHandCards.forEach(card => {
             // Oculta solo las de la mano activa que no estén seleccionadas
            if (!card.classList.contains('selected')) {
                card.classList.add('hidden');
            } else {
                 card.classList.remove('hidden'); // Asegúrate que las seleccionadas se vean
            }
        });
    } else {
        confirmPlayBtn.classList.add('hidden');
        confirmOrderBtn.classList.add('hidden'); // Oculta por si acaso
        allHandCards.forEach(card => {
            card.classList.remove('hidden'); // Muestra todas de nuevo
        });
    }
}


function confirmPlay() {
    confirmPlayBtn.classList.add('hidden');
    confirmationButtonsDiv.classList.add('hidden'); // Oculta botones inferiores

    // Guarda los elementos seleccionados para reordenar
    const handElem = playerHandElems[currentTurnPlayer];
    orderedCardElements = Array.from(handElem.querySelectorAll('.white-card.selected'));

    orderedCardElements.forEach(elem => {
        elem.classList.remove('selected');
        elem.onclick = null; // Desactiva click
    });

    // Mueve los datos de las cartas seleccionadas al estado global
    submittedCards[currentTurnPlayer] = [...selectedCardsData]; // Copia los datos

    // Si es pick > 1, entra en modo reordenar
    if (currentBlackCard.pick > 1) {
        gameState = 'reordering';
        updateGameMessage();
        renderReorderView(); // Muestra las cartas seleccionadas en el centro para ordenar
        confirmOrderBtn.classList.remove('hidden'); // Muestra confirmar orden
        confirmationButtonsDiv.classList.remove('hidden'); // Muestra contenedor de botones

    } else {
        // Si es pick 1, avanza el turno directamente
        advanceTurn();
    }
}


function renderReorderView() {
    // Muestra las cartas seleccionadas en el SLOT IZQUIERDO para reordenar
    // (Simplificado: asumimos que solo un jugador reordena a la vez)
    slotPlayerLeft.innerHTML = '';
    slotPlayerRight.innerHTML = ''; // Limpia el otro slot
    slotPlayerLeft.classList.add('reordering');

    orderedCardElements.forEach((cardElement, index) => {
        slotPlayerLeft.appendChild(cardElement);

        if (index < orderedCardElements.length - 1) {
            const swapButton = document.createElement('button');
            swapButton.classList.add('swap-btn');
            swapButton.innerHTML = '↔';
            swapButton.dataset.index = index;
            swapButton.onclick = () => swapCards(index);
            slotPlayerLeft.appendChild(swapButton);
        }
    });
}

function swapCards(index) {
    if (index >= 0 && index < orderedCardElements.length - 1) {
        // Intercambia elementos HTML en el array
        [orderedCardElements[index], orderedCardElements[index + 1]] =
            [orderedCardElements[index + 1], orderedCardElements[index]];
        // Intercambia los datos correspondientes en submittedCards
         [submittedCards[currentTurnPlayer][index], submittedCards[currentTurnPlayer][index+1]] =
            [submittedCards[currentTurnPlayer][index+1], submittedCards[currentTurnPlayer][index]];

        renderReorderView(); // Vuelve a dibujar
    }
}


function confirmOrder() {
    confirmOrderBtn.classList.add('hidden');
    confirmationButtonsDiv.classList.add('hidden');
    slotPlayerLeft.classList.remove('reordering');

    // Elimina los botones de swap
    const swapButtons = slotPlayerLeft.querySelectorAll('.swap-btn');
    swapButtons.forEach(btn => btn.remove());

    // Ahora que el orden está confirmado, avanza el turno
    advanceTurn();
}

// =============================================================
// --- ACCIONES DEL LECTOR ---
// =============================================================

chooseLeftBtn.addEventListener('click', () => chooseWinner(parseInt(chooseLeftBtn.dataset.playerId)));
chooseRightBtn.addEventListener('click', () => chooseWinner(parseInt(chooseRightBtn.dataset.playerId)));

function chooseWinner(winnerPlayerId) {
    gameState = 'round_end';
    readerChoiceButtons.classList.add('hidden');

    // Da el punto
    players[winnerPlayerId].score++;
    updateScoreboardHighlight(); // Actualiza visualmente el puntaje

    // Muestra mensaje de ganador
    const winnerName = players[winnerPlayerId].name;
    const winnerCardsText = submittedCards[winnerPlayerId].map(c => getCardText(c, currentLang)).join(' / ');
    gameMessageElem.innerText = `¡Punto para ${winnerName}! (${winnerCardsText})`;

    // Resalta las cartas ganadoras (opcional)
    if (chooseLeftBtn.dataset.playerId == winnerPlayerId) {
        slotPlayerLeft.style.boxShadow = '0 0 15px 5px lightgreen';
        slotPlayerRight.style.opacity = '0.5';
    } else {
        slotPlayerRight.style.boxShadow = '0 0 15px 5px lightgreen';
        slotPlayerLeft.style.opacity = '0.5';
    }


    // Muestra el botón para que el LECTOR inicie la siguiente ronda
    advanceRoundBtn.classList.remove('hidden');
}


// =============================================================
// --- FUNCIONES AUXILIARES (Mazos, Idioma, Puntaje Manual) ---
// =============================================================

function dealCards(deck, count) {
    const hand = [];
    for (let i = 0; i < count; i++) {
        if (deck.length === 0) { // Si se acaba el mazo, rebaraja
             console.warn("Mazo blanco vacío en dealCards. Reiniciando mazo.");
             deck.push(...shuffleDeck([...whiteCardsData])); // Añade todas de nuevo y baraja
             // Evita bucle infinito si no hay cartas suficientes
             if (deck.length === 0) break;
        }
        hand.push(deck.pop());
    }
    return hand;
}


function drawWhiteCard() { // Llamada para rellenar mano
     if (whiteDeck.length === 0) {
        console.warn("Mazo blanco vacío en drawWhiteCard. Reiniciando mazo.");
        whiteDeck = shuffleDeck([...whiteCardsData]);
    }
     if (whiteDeck.length > 0) {
        return whiteDeck.pop();
    }
    return null; // No quedan cartas
}

function getCardText(card, lang) {
    if (!card) return "Error";
    const esText = card.es || "?";
    // Añade soporte PT si tus cartas lo tienen
    const ptText = card.pt || esText;
    if (lang === 'bi') return `${esText}<hr>${ptText}`;
    if (lang === 'pt') return ptText;
    return esText;
}

// --- Puntaje Manual (Ahora no tiene mucho sentido, pero lo dejamos) ---
addScoreBtn.addEventListener('click', () => { score++; updateScoreDisplay(); });
subtractScoreBtn.addEventListener('click', () => { if(score > 0) score--; updateScoreDisplay(); });
function updateScoreDisplay(){ /* Ya no se usa para el puntaje real */ }

// =============================================================
// --- AJUSTES Y MÚSICA ---
// =============================================================
settingsBtn.addEventListener('click', () => settingsModal.style.display = 'block');
closeSettingsBtn.addEventListener('click', () => settingsModal.style.display = 'none');
window.addEventListener('click', (event) => {
    if (event.target == settingsModal) settingsModal.style.display = 'none';
});

volumeControl.addEventListener('input', (e) => {
    const newVolume = e.target.value;
    Object.values(musicTracks).forEach(track => { if(track) track.volume = newVolume; });
});

musicSelect.addEventListener('change', switchMusic);
langSelect.addEventListener('change', updateLanguage); // Idioma actualiza textos estáticos

function updateLanguage() {
    currentLang = langSelect.value;
    // Actualiza textos estáticos (botones, etiquetas)
     Object.keys(uiTexts[currentLang]).forEach(key => {
        const elem = document.getElementById(key + '-label') || document.getElementById(key + '-btn') || document.getElementById(key + '-title');
         // Los botones de flujo usan su propio ID
         if (key === 'confirmPlay') document.getElementById('confirm-play-btn').innerText = uiTexts[currentLang][key];
         else if (key === 'confirmOrder') document.getElementById('confirm-order-btn').innerText = uiTexts[currentLang][key];
         else if (key === 'advanceRound') document.getElementById('advance-round-btn').innerText = uiTexts[currentLang][key];
         else if (key === 'start') document.getElementById('start-btn').innerText = uiTexts[currentLang][key];
         else if (key === 'end') document.getElementById('end-btn').innerText = uiTexts[currentLang][key];
         else if (key === 'settings') document.getElementById('settings-btn').innerText = uiTexts[currentLang][key];
         // Resto de elementos
         else if (elem) elem.innerText = uiTexts[currentLang][key];
     });

    // Actualiza texto dinámico si el juego está corriendo
    if (gameState !== 'setup' && currentBlackCard) {
        gameMessageElem.innerText = uiTexts[currentLang].pick(currentBlackCard.pick); // Actualiza pick text
        renderBlackCard(); // Re-renderiza carta negra
        renderAllHands(); // Re-renderiza manos con textos actualizados
        // Re-renderiza cartas jugadas si existen
        if (gameState === 'judging' || gameState === 'round_end') {
             displaySubmittedCards();
        }
    }
}


// =============================================================
// --- INICIALIZACIÓN AL CARGAR ---
// =============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Esconder contenedor de app hasta que se configuren los jugadores
    appContainer.classList.add('hidden');
    setupModal.style.display = 'block';
    updateLanguage(); // Pone los textos iniciales en el idioma por defecto
});

// Listener para el botón de Siguiente Ronda (que ahora es el del Lector)
advanceRoundBtn.addEventListener('click', () => {
    // Limpia estilos de ganador
    slotPlayerLeft.style.boxShadow = 'none';
    slotPlayerRight.style.boxShadow = 'none';
    slotPlayerLeft.style.opacity = '1';
    slotPlayerRight.style.opacity = '1';
    
    // Rellena manos de los jugadores que jugaron
     Object.keys(submittedCards).forEach(playerIdStr => {
         const playerId = parseInt(playerIdStr);
         const numPlayed = submittedCards[playerId].length;
         for (let i = 0; i < numPlayed; i++) {
             const newCard = drawWhiteCard();
             if (newCard) players[playerId].hand.push(newCard);
         }
     });

    rotateReader();
    startNewRound();
});