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
        confirmPlay: "Confirmar Jogada", confirmOrder: "Confirmar Ordem",
        advanceRound: "Próxima Rodada"
    },
    bi: {
        start: "Iniciar Partida / Jogo", end: "Terminar Partida / Jogo", settings: "Ajustes / Configurações",
        settingsTitle: "Ajustes / Configurações", volumeLabel: "Volumen / Volume", musicLabel: "Música de Fondo / Fundo",
        langLabel: "Idioma", pick: (num) => `Elige / Escolha ${num} carta(s)`, score: "Puntos / Pontos:",
        confirmPlay: "Confirmar Jogada", confirmOrder: "Confirmar Orden / Ordem",
        advanceRound: "Siguiente Ronda / Próxima Rodada"
    }
};

// --- MAZOS DE CARTAS ---
const blackCardsData = [
    // Lote 1 & 2
    { es: "¿Qué es ese olor? Es _.", pick: 1 },
    { es: "A mi edad, mi abuelo cobraba 50 centesimos por _.", pick: 1 },
    { es: "Tras años de busqueda no se a podido corroborar la existencia de _.", pick: 1 },
    { es: "_, amor a primera vista.", pick: 1 },
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
    { es: "Haz tu propio pokémon: Empieza con _, evoluciona a _ y su ataque final es _.", pick: 3 },
    { es: "El kit de supervivencia para la oficina incluye _, _ y mucho _.", pick: 3 },
    { es: "Mi fin de semana perfecto: _, _ y _.", pick: 3 },
    { es: "La receta para el desastre: una parte de _, dos partes de _ y una pizca de _.", pick: 3 },
    { es: "Me arrestaron por posesión de _, intento de _ y _ en primer grado.", pick: 3 },

    // Lote 3
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
    { es: "Mi cita perfecta: \_ , \_ y un poco de \_.", pick: 3 },
    { es: "Mi kit de primeros auxilios contiene: \_, \_ y \_.", pick: 3 },
    { es: "El perfil de mi ex en una frase: \_, \_ y \_.", pick: 3 },
    { es: "Lo que realmente aprendí en la universidad: \_, \_ y cómo evitar \_.", pick: 3 },

    // Lote 4
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
    { es: "El triatlón de los dioses: nadar en _, correr con _ y andar en bicicleta sobre _.", pick: 3 },
    { es: "Mi combo de comida para la depresión es _, _ y _.", pick: 3 },
    { es: "Increible, subo un video de _ y el primer comentario es sobre _.", pick: 2 },
    { es: "Para sobrevivir a una cena familiar, necesitas _, _ y _.", pick: 3 },

    // Lote 5 (Uruguayo)
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
    { es: "El asado del domingo se arruinó por _ y _.", pick: 2 },
    { es: "Mi estado de WhatsApp ahora dice: 'Ni _ ni _'.", pick: 2 },
    { es: "Para ser un verdadero uruguayo necesitas _, _ y ganas de quejarte.", pick: 2 },
    { es: "Lo único peor que el CTI de COVID es _ y _.", pick: 2 },
    { es: "Una paja triste no es triste sin _.", pick: 1 },
    { es: "Me colé en el ómnibus y el guarda me amenazó con _.", pick: 1 },

    // Lote 6 (Uruguayo)
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

const whiteCardsData = [
    // Lote 1 & 2
    { es: "Eloy" }, { es: "Esclavitud de minorías" }, { es: "Huevos de codorniz lanzados con mucha fuerza" },
    { es: "El gobierno" }, { es: "Barney el dinosaurio 'no' pedófilo" }, { es: "El agujero equivocado" },
    { es: "Error 404 respuesta no encontrada" }, { es: "Fingir ser una chica en internet" },
    { es: "El suicidio siempre es la solución" }, { es: "Huerfanos" }, { es: "Un test para saber que tan negro eres" },
    { es: "Enanos de circo" }, { es: "Un niño ciego, sordo y mudo" }, { es: "Las buenas drogas" },
    { es: "Estar muy fumado" }, { es: "Estar muy borracho" }, { es: "Spiderman biologicamente correcto que lanza telarañas por el ano" },
    { es: "Bebés muertos" }, { es: "Padres muertos" }, { es: "Enanos disfrazados" }, { es: "Humillación sexual" },
    { es: "Puto el que lo lea" }, { es: "Tiroteo escolar" }, { es: "Tu hermana que es puta, reputa y recontraputa, joder que puta es" },
    { es: "Flashbacks de Vietnam" }, { es: "Solo un poquitito de violación anal" }, { es: "Putas Harry! PUTAS!" },
    { es: "Que te den matraca hasta que tu culo resista" }, { es: "La puta que te remil pario, no tengo nada" },
    { es: "Sexo sadomasoquista" }, { es: "Bailar como retrasado en la autopista" }, { es: "Los Amish" },
    { es: "Erección al pasar por una guardería" }, { es: "Un colegio de monjas muy zorras" },
    { es: "Gente que nunca conocerá el dulce placer de caminar" }, { es: "La abuela desnuda" },
    { es: "Golpes muy fuertes en la entrepierna" }, { es: "LA CAJA! LA CAJA!" }, { es: "La paz mundial" },
    { es: "Feminazis enojadas" }, { es: "Gente fea" }, { es: "Un amigo que siempre esta dispuesto a hacerte una paja no homo" },
    { es: "Gente tonta" }, { es: "Chinos trabajando en una fabrica ilegal" }, { es: "Tener vagina" },
    { es: "Labios vaginales tan grandes que aplauden al caminar" }, { es: "La concha peluda" }, { es: "El clítoris" },
    { es: "La comunidad LGBTQ+ y mucho más" }, { es: "Aliento de pene" }, { es: "Cebollas" },
    { es: "Lamer el exterior de un ano y no terminar el trabajo" }, { es: "Cuando te tiras un pedo y te cagas un poquito" },
    { es: "Eutanasia" }, { es: "Ser árabe y explotar" }, { es: "Adolescentes virgenes" },
    { es: "Usar mi ano como trompeta en el show de talentos" }, { es: "Mi culo negro" }, { es: "My nigga" },
    { es: "Minas anti-tanques" }, { es: "El negro Mandela" }, { es: "El capa preta" }, { es: "2012" },
    { es: "Penes" }, { es: "El pene" }, { es: "Una sexy rubia con paquete" }, { es: "Bro?" }, { es: "Mi vida sexual" },
    { es: "Vituber furro" }, { es: "SIDA!" }, { es: "Un tumor cerebral" }, { es: "Argentinos" }, { es: "Brasileros" },
    { es: "Niños de africa" }, { es: "Necro-zoofilia" }, { es: "Problemitas con papá" }, { es: "Silencio" },
    { es: "Masculinidad frájil" }, { es: "Sexo sucio y salvaje" }, { es: "Sexo oral no reciproco" },
    { es: "Un billete de 3 dolares" }, { es: "Los fachas" }, { es: "La violacion de todos los derechos humanos" },
    { es: "Vladimir Putin" }, { es: "Hitler" }, { es: "72 virgenes" }, { es: "Trish" }, { es: "Jeffo" },
    { es: "Insesto" }, { es: "Gordofobia" }, { es: "Gordo panceta" }, { es: "Anorexia" }, { es: "Un zopapo" },
    { es: "Pedofilos" }, { es: "Monstruar" }, { es: "Mujeres" }, { es: "3cm" }, { es: "Fascismo" }, { es: "Tu mamá" },
    { es: "Racismo" }, { es: "Bidon de tuco" }, { es: "Un burro volador" }, { es: "Pizza con piña" },
    { es: "La economía" }, { es: "El sentido de la vida" }, { es: "Un político honesto" }, { es: "Gatos que juzgan" },
    { es: "Ruido de módem antiguo" }, { es: "Explotar cosas con la mente" }, { es: "Un Power Ranger desempleado" },
    { es: "Amor verdadero" }, { es: "Ansiedad existencial" }, { es: "Un audio de WhatsApp de 3 minutos" },
    { es: "Dejar todo para mañana" }, { es: "El 'visto' de WhatsApp" }, { es: "Mi ex" }, { es: "Llorar en la ducha" },
    { es: "Un influencer haciendo el ridículo" }, { es: "Criptomonedas" }, { es: "El terraplanismo de mi tía" },
    { es: "Gritar '¡GOL!' en un funeral" }, { es: "El olor a nafta" }, { es: "La friendzone" },
    { es: "Hacer contacto visual incómodo" }, { es: "Dedos de salchicha" }, { es: "Un video de TikTok sin gracia" },
    { es: "Elon Musk" }, { es: "Quedarse sin batería" }, { es: "Decir 'jaja' sin reírse" }, { es: "Una IA que se cree poeta" },
    { es: "El capitalismo tardío" }, { es: "Comer cereal con agua" }, { es: "Ponerle medias a una sandía" },
    { es: "Un plot twist terrible" }, { es: "El fantasma de Ricardo Fort" }, { es: "Argumentos falsos que gano en mi cabeza" },
    { es: "Un mapache ladrón" }, { es: "Sentirse ofendido en Twitter" }, { es: "Dudar de mi propia existencia" },
    { es: "El olor a consultorio de dentista" }, { es: "Pagar el alquiler" }, { es: "El reggaetón antiguo" },
    { es: "Un pato con sombrero de copa" }, { es: "El calentamiento global" }, { es: "Mi historial de búsqueda" },
    { es: "Gente negra" }, { es: "Monaguillos" }, { es: "Menores realizando trabajos forzados" }, { es: "Gente blanca" },
    { es: "La abuela de mi amigo con lencería" }, { es: "Un niño gritando en un restaurante" },
    { es: "Hacer 'la granja de Zenón' en el auto" }, { es: "El socialismo" }, { es: "La meritocracia" },
    { es: "Un furro" }, { es: "El olor a libro viejo" }, { es: "Un optimismo tóxico" }, { es: "La insoportable levedad del ser" },
    { es: "Depresión (pero con brillitos)" }, { es: "Procrastinar agresivamente" }, { es: "Un perro con acento argentino" },
    { es: "El algoritmo" }, { es: "Los Illuminati" }, { es: "El patriarcado" }, { es: "Una Karen" }, { es: "El Ayuwoki" },
    { es: "Un bebé feo" }, { es: "Mi yo de 15 años" }, { es: "El tío borracho de la fiesta" }, { es: "Spam telefónico" },
    { es: "Una secta" }, { es: "Decir 'provecho' en el baño" }, { es: "El metaverso" }, { es: "Un NFT de un mono" },
    { es: "BATMAN!!" }, { es: "El ano de Batman" }, { es: "Nicolas Cage" }, { es: "Un velociraptor vestido de cura" },
    { es: "Hacer caca en el trabajo" }, { es: "Un vegano que come carne a escondidas" }, { es: "El olor a humedad" },
    { es: "Poner los cuernos" }, { es: "Un final decepcionante (como el de GOT)" }, { es: "Usar medias con sandalias" },
    { es: "El jugo de pepinillos" }, { es: "Un payaso triste" }, { es: "Mi plan de datos" }, { es: "La monja del fondo" },
    { es: "Un tatuaje mal escrito" }, { es: "El perro del vecino a las 3 AM" }, { es: "Una paloma comiéndose un hot dog" },
    { es: "El holocausto nuclear" }, { es: "Vender fotos de mis pies" }, { es: "El vello púbico de un extraño" },
    { es: "Mi jefe" }, { es: "Mala conexión a internet" }, { es: "Una tesis sobre la reproducción de los caracoles" },
    { es: "Un alemán gritando" }, { es: "La gentrificación" }, { es: "Comida de hospital" }, { es: "La muerte térmica del universo" },
    { es: "Un musical de secundaria" }, { es: "Una piñata llena de arañas" }, { es: "El olor a sudor rancio" },
    { es: "El comunismo" }, { es: "El clítoris (ese mito)" },

    // Lote 3
    { es: "Un abuelo haciendo 'twerking'." }, { es: "Jeff Bezos (pero calvo)." }, { es: "El fantasma de Michael Jackson." },
    { es: "Un niño emo de 2007." }, { es: "Tu primo el 'emprendedor'." }, { es: "La culpa católica." },
    { es: "El síndrome del impostor." }, { es: "Vibras rancias." }, { es: "Una crisis de los 30 (a los 20)." },
    { es: "Hablarle a las plantas en latín." }, { es: "Fingir que entendiste la película." }, { es: "Un pedo silencioso pero mortal." },
    { es: "Intentar ser sexy y fallar miserablemente." }, { es: "Responder 'tú también' cuando el mesero te dice 'buen provecho'." },
    { es: "El sonido de un hueso rompiéndose." }, { es: "Una berenjena sospechosamente grande." }, { es: "Un dildo de doble punta." },
    { es: "Lágrimas de influencer." }, { es: "Un lubricante sabor a tocino." }, { es: "Agua bendita (de garrafa)." },
    { es: "Un nido de ratas." }, { es: "El cadáver de un Pokémon." }, { es: "Un vibrador que canta ópera." },
    { es: "Un fetiche de pies." }, { es: "El porno de tentáculos." }, { es: "Un 'accidente' en la piscina." },
    { es: "Fluidos corporales no identificados." }, { es: "Un onlyfans de filosofía." }, { es: "El claxon de un payaso en un momento serio." },
    { es: "El 'privilegio blanco'." }, { es: "Un mapache con ansiedad." }, { es: "Comer mayonesa directamente del frasco." },
    { es: "El cadáver de la Reina Isabel." }, { es: "El olor de la axila de un programador." },
    { es: "La voz de mi conciencia (que suena como Ricardo Arjona)." }, { es: "Un discurso motivacional de un terraplanista." },
    { es: "Sexo con tentáculos." }, { es: "Una erección inoportuna." }, { es: "Un pezón solitario." },
    { es: "Un divorcio muy caro." }, { es: "El 'gemido' de una cafetera." }, { es: "La mirada de desaprobación de mi gato." },
    { es: "Una orgía de pitufos." }, { es: "Preguntar '¿cuál?' cuando te dicen 'te amo'." }, { es: "Depilarse el ano con cera." },
    { es: "La friendzone... otra vez." }, { es: "Un powerpoint sobre mis traumas." }, { es: "El olor a iglesia." },
    { es: "Música de ascensor (pero metalera)." }, { es: "Un agujero de gloria." },

    // Lote 4
    { es: "Una suscripción a OnlyFans." }, { es: "El olor a naftalina." }, { es: "Un cura con un secreto." },
    { es: "Un 'sugar daddy' diabético." }, { es: "El comunismo (en teoría)." }, { es: "El comunismo (en la práctica)." },
    { es: "Un moco perfectamente preservado." }, { es: "Un clítoris de 3 metros." }, { es: "Una abuela racista." },
    { es: "Mi dignidad (lo poco que queda)." }, { es: "La voz de Gal Gadot cantando 'Imagine'." }, { es: "Un pezón erecto." },
    { es: "Un feto en un frasco." }, { es: "Hacer 'ghosting'." }, { es: "Un coach de vida desempleado." },
    { es: "El olor a 'auto nuevo'." }, { es: "Cagar en el baño de visitas." }, { es: "La virginidad." },
    { es: "Una orgía de enanos." }, { es: "El ano blanqueado de un famoso." }, { es: "Un culo espectacular." },
    { es: "Los antivacunas." }, { es: "Un podcast sobre nada." }, { es: "La circuncisión." }, { es: "Películas de Adam Sandler." },
    { es: "Semen." }, { es: "Un testículo solitario." }, { es: "El 'Black Friday'." }, { es: "Mi colección de vibradores." },
    { es: "Chistes de padres." }, { es: "Comerse las uñas de los pies." }, { es: "El jugo de la basura." },
    { es: "Un 'deepfake' de mi madre." }, { es: "El punto G." }, { es: "Un pañal usado." }, { es: "El holocausto." },
    { es: "Un consolador con forma de Shrek." }, { es: "El olor a semen." }, { es: "El vello púbico de Jesús." },
    { es: "Bragas usadas." }, { es: "Una relación tóxica." }, { es: "El olor a hospital." },
    { es: "Un vegano diciéndote que es vegano." }, { es: "El K-Pop." }, { es: "La regla." },
    { es: "Un payaso sexualmente frustrado." }, { es: "El pene de mi ex." }, { es: "Un 'baby shower' horrible." },
    { es: "El olor a perro mojado." }, { es: "Un aborto casero." },

    // Lote 5 (Uruguayo)
    { es: "Un termo Stanley." }, { es: "El culo de la uruguaya." }, { es: "Un carpincho de Nordelta." }, { es: "El Pepe." },
    { es: "Un mate lavado." }, { es: "Dos docenas de bizcochos." }, { es: "El fantasma de Gardel." }, { es: "Un choripán del Estadio." },
    { es: "La rambla en invierno." }, { es: "El culo de Luis Suárez." }, { es: "Una torta frita de un día para el otro." },
    { es: "El 'vamo arriba'." }, { es: "Un 'ta, chau'." }, { es: "El bondi." }, { es: "Una milanesa a caballo." },
    { es: "El laburo." }, { es: "Quedarse sin yerba un domingo." }, { es: "Punta del Este en enero." }, { es: "Un porteño quejándose." },
    { es: "El 30 de febrero al atardecer." }, { es: "La garra charrúa." }, { es: "El dulce de leche." }, { es: "Un 'vo, bo'." },
    { es: "La fiebre aftosa." }, { es: "Un pichi." }, { es: "La Costa de Oro." }, { es: "Un plancha." }, { es: "El Frente Amplio." },
    { es: "La Coalición Multicolor." }, { es: "Una murga." }, { es: "Forlán." }, { es: "Comprar fiado." }, { es: "El precio de la nafta." },
    { es: "Un chivito completo." }, { es: "Agua Salus (con gas)." }, { es: "El Palacio Legislativo." },
    { es: "La Intendencia de Montevideo." }, { es: "Un ricardito." }, { es: "Natalia Oreiro." }, { es: "Un puto." },

    // Lote 6 (Uruguayo)
    { es: "El 'vamo arriba'." }, { es: "Un 'ta, chau'." }, { es: "Un 'salado'." }, { es: "Un 'demás'." },
    { es: "El calefón que gotea." }, { es: "La garrafa de 13kg." }, { es: "El viento de la rambla." }, { es: "La humedad." },
    { es: "Ir a laburar." }, { es: "Un asado prendido con piñas." }, { es: "La China Zorrilla." }, { es: "El Petinatti." },
    { es: "Un gol en la hora." }, { es: "Una Pilsen bien fría." }, { es: "Una Patricia de litro." }, { es: "El 'Cacho' de la Cruz." },
    { es: "Un pascualina." }, { es: "Un gramajo." }, { es: "Los ñoquis del 29." }, { es: "El truco." }, { es: "El candombe." },
    { es: "Un tarro de dulce de leche Conaprole." }, { es: "El 'FA'." }, { es: "El 'cuco'." }, { es: "Un feriado laborable." },
    { es: "El Carnaval más largo del mundo." }, { es: "Quejarse del clima." }, { es: "Estar 'en el horno'." }, { es: "Dar manija." },
    { es: "Colgarse." }, { es: "Pagar el boleto." }, { es: "El boleto de una hora." }, { es: "Un 'cheto' de Carrasco." },
    { es: "Un 'plancha' de Casavalle." }, { es: "El Mercado Agrícola (MAM)." }, { es: "El Antel Arena." }, { es: "El Parque Rodó." },
    { es: "Un 'medio y medio' del Roldós." }, { es: "La Celeste." }, { es: "Un gol de Cavani." }, { es: "Una mordida de Suárez." },
    { es: "El 'Maestro' Tabárez." }, { es: "La OSE." }, { es: "La UTE." }, { es: "El BPS." }, { es: "Tienda Inglesa." },
    { es: "El Devoto." }, { es: "El ómnibus." }, { es: "Una 'tata'." }, { es: "El 'ni-ni'." }, { es: "Un alfajor de las Sierras de Minas." },
    { es: "Yerba Canarias." }, { es: "Un 'no te banco más'." }, { es: "El culebrón de las 8." }, { es: "Omar Gutiérrez." },
    { es: "El 'desayuno uruguayo' (mate y bizcochos)." }, { es: "Un fainá." }, { es: "La morcilla dulce." },
    { es: "Un 'pancho' de La Pasiva." }, { es: "La mostaza de La Pasiva." }, { es: "Un referéndum." }, { es: "El déficit fiscal." },
    { es: "La calle 'Sal-si-puedes'." }, { es: "Cruzar el charco." }, { es: "El 'Día del Centro'." }, { es: "Un grafiti de 'Peñarol'." },
    { es: "Un grafiti de 'Nacional'." }, { es: "La feria de Tristán Narvaja." }, { es: "El olor a chivito." }
];


// =============================================================
// --- ESTADO DEL JUEGO ---
// =============================================================
let players = [];
let whiteDeck = [];
let blackDeck = [];
let currentBlackCard = null;
let currentReaderIndex = -1;
let currentPlayerIndex = -1;
let currentTurnPlayer = -1;
let gameState = 'setup';
let submittedCards = {};
let selectedCardsData = [];
let orderedCardElements = [];
let currentLang = 'es';
const HAND_SIZE = 5;

// =============================================================
// --- ELEMENTOS DEL DOM ---
// =============================================================
const setupModal = document.getElementById('setup-modal');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.querySelector('#settings-modal .close-btn');
const startSetupBtn = document.getElementById('start-setup-btn');
const pNameInputs = [
    document.getElementById('p1-name'),
    document.getElementById('p2-name'),
    document.getElementById('p3-name')
];
const appContainer = document.getElementById('app-container');
const gameContainer = document.getElementById('game-container');
const playerHandsContainer = document.querySelector('.player-hands-container');
const scoreBoards = [
    document.getElementById('score-board-0'),
    document.getElementById('score-board-1'),
    document.getElementById('score-board-2')
];
const controlsDiv = document.querySelector('.controls');
const endBtn = document.getElementById('end-btn');
const settingsBtn = document.getElementById('settings-btn');
const blackCardElem = document.getElementById('black-card');
const gameMessageElem = document.getElementById('game-message');
const playedCardsSlots = document.getElementById('played-cards-slots');
const slotPlayerLeft = document.getElementById('slot-player-left');
const slotPlayerRight = document.getElementById('slot-player-right');
const readerChoiceButtons = document.getElementById('reader-choice-buttons');
const chooseLeftBtn = document.getElementById('choose-left-btn');
const chooseRightBtn = document.getElementById('choose-right-btn');
const advanceRoundBtn = document.getElementById('advance-round-btn');
const playerHandElems = [
    document.getElementById('player-hand-0'),
    document.getElementById('player-hand-1'),
    document.getElementById('player-hand-2')
];
const confirmationButtonsDiv = document.querySelector('.confirmation-buttons');
const confirmPlayBtn = document.getElementById('confirm-play-btn');
const confirmOrderBtn = document.getElementById('confirm-order-btn');
const volumeControl = document.getElementById('volume-control');
const langSelect = document.getElementById('lang-select');
const musicSelect = document.getElementById('music-select');
const musicTracks = {
    'Viento_y_hacha': document.getElementById('Viento_y_hacha'),
    'Brama_el_viento': document.getElementById('Brama_el_viento'),
    'Rey_del_asado': document.getElementById('Rey_del_asado')
};
let currentTrackId = 'Rey_del_asado'; // Asegúrate que este ID exista en musicTracks


// =============================================================
// --- INICIO Y CONFIGURACIÓN ---
// =============================================================

startSetupBtn.addEventListener('click', () => {
    console.log("--- Setup Clicked ---");
    players = [];
    for (let i = 0; i < 3; i++) {
        players.push({
            id: i,
            name: pNameInputs[i].value || `Jugador ${i + 1}`,
            score: 0,
            hand: []
        });
        console.log(`Player ${i} created: ${players[i].name}`);
    }
    if (setupModal) setupModal.style.display = 'none';
    if (appContainer) appContainer.classList.remove('hidden');
    console.log("Modal hidden, App shown.");
    try {
        initializeGame();
    } catch (error) {
        console.error("¡ERROR durante initializeGame!:", error);
    }
});

function initializeGame() {
    console.log("--- Initializing Game ---");
    whiteDeck = shuffleDeck([...whiteCardsData]);
    blackDeck = shuffleDeck([...blackCardsData]);
    console.log(`Decks shuffled. White: ${whiteDeck.length}, Black: ${blackDeck.length}`);

    players.forEach(player => {
        player.hand = dealCards(whiteDeck, HAND_SIZE);
        console.log(`Dealt hand to ${player.name}. Hand size: ${player.hand.length}`);
    });

    currentReaderIndex = 0;
    console.log(`Reader set to index: ${currentReaderIndex} (${players[currentReaderIndex].name})`);
    updateScoreboardHighlight();

    console.log("Calling startNewRound...");
    try {
        startNewRound();
    } catch (error) {
        console.error("¡ERROR durante startNewRound!:", error);
    }

    console.log("Calling playCurrentMusic...");
    playCurrentMusic();
    console.log("--- Initialization Complete ---");
}

function updateScoreboardHighlight() {
    console.log("Updating scoreboard highlight...");
    scoreBoards.forEach((board, index) => {
        if (board) {
            board.classList.toggle('reader', index === currentReaderIndex);
            const nameElem = board.querySelector('.player-name');
            const scoreElem = board.querySelector('.score');
            // Verifica que 'players[index]' exista antes de acceder a 'name' o 'score'
            if (players[index]) {
                 if (nameElem) nameElem.innerText = players[index].name;
                 if (scoreElem) scoreElem.innerText = players[index].score;
            } else {
                 console.warn(`Player data for index ${index} not found.`);
                 if (nameElem) nameElem.innerText = `P${index+1}`; // Nombre por defecto
                 if (scoreElem) scoreElem.innerText = '0';
            }
        } else {
             console.error(`Scoreboard element for index ${index} not found.`);
        }
    });
}

// =============================================================
// --- LÓGICA DE RONDAS Y TURNOS ---
// =============================================================

function startNewRound() {
    console.log("--- Starting New Round ---");
    gameState = 'playing';
    submittedCards = {};
    selectedCardsData = [];
    orderedCardElements = [];

    // Limpia áreas visuales (con verificaciones)
    if (slotPlayerLeft) slotPlayerLeft.innerHTML = '';
    if (slotPlayerRight) slotPlayerRight.innerHTML = '';
    if (playedCardsSlots) playedCardsSlots.classList.remove('reordering');
    if (readerChoiceButtons) readerChoiceButtons.classList.add('hidden');
    if (advanceRoundBtn) advanceRoundBtn.classList.add('hidden');
    if (confirmPlayBtn) confirmPlayBtn.classList.add('hidden');
    if (confirmOrderBtn) confirmOrderBtn.classList.add('hidden');
    if (confirmationButtonsDiv) confirmationButtonsDiv.classList.add('hidden');

    // Saca nueva carta negra
    if (blackDeck.length === 0) {
        console.log("Black deck empty, shuffling again.");
        blackDeck = shuffleDeck([...blackCardsData]);
    }
    if (blackDeck.length === 0) {
        console.error("CRITICAL: No black cards available even after reshuffle!");
        alert("¡Error! No quedan cartas negras.");
        endGame();
        return;
    }
    currentBlackCard = blackDeck.pop();
     if (!currentBlackCard) { // Verifica si la carta es válida
         console.error("CRITICAL: Popped an invalid black card!");
         alert("¡Error al sacar carta negra!");
         endGame();
         return;
     }
    console.log("New black card drawn:", currentBlackCard);
    renderBlackCard();

    // Determina quién juega
    let playingPlayerIndexes = players.map(p => p.id).filter(id => id !== currentReaderIndex);
    currentPlayerIndex = 0;
    if (playingPlayerIndexes.length > 0) {
        currentTurnPlayer = playingPlayerIndexes[currentPlayerIndex];
        console.log(`First player to play: index ${currentTurnPlayer} (${players[currentTurnPlayer]?.name || 'Unknown'})`); // Añadido Optional Chaining
    } else {
        console.error("Error: No players available to play.");
        currentTurnPlayer = -1;
    }

    updateGameMessage();
    console.log("Rendering all hands...");
    renderAllHands();
    console.log("--- New Round Setup Complete ---");
}

function advanceTurn() {
    console.log("--- Advancing Turn ---");
    selectedCardsData = [];
    if (confirmPlayBtn) confirmPlayBtn.classList.add('hidden');
    if (confirmOrderBtn) confirmOrderBtn.classList.add('hidden');
    if (confirmationButtonsDiv) confirmationButtonsDiv.classList.add('hidden');

    currentPlayerIndex++;

    let playingPlayerIndexes = players.map(p => p.id).filter(id => id !== currentReaderIndex);

    if (currentPlayerIndex < playingPlayerIndexes.length) {
        currentTurnPlayer = playingPlayerIndexes[currentPlayerIndex];
         console.log(`Next player to play: index ${currentTurnPlayer} (${players[currentTurnPlayer]?.name || 'Unknown'})`); // Optional Chaining
        updateGameMessage();
        renderAllHands();
    } else {
        console.log("All players have played. Moving to judging.");
        gameState = 'judging';
        currentTurnPlayer = -1;
        updateGameMessage();
        renderAllHands();
        displaySubmittedCards();
        if(readerChoiceButtons) readerChoiceButtons.classList.remove('hidden');
    }
}

function updateGameMessage() {
     let message = "";
     try {
        switch (gameState) {
            case 'playing':
                if (currentTurnPlayer !== -1 && players[currentTurnPlayer] && currentBlackCard) {
                    message = `Turno de ${players[currentTurnPlayer].name} para jugar ${currentBlackCard.pick} carta(s).`;
                } else { message = "Esperando jugador..."; console.warn("State: Playing, but invalid player/card."); }
                break;
            case 'reordering':
                 if (currentTurnPlayer !== -1 && players[currentTurnPlayer]) {
                    message = `Turno de ${players[currentTurnPlayer].name}. Ordena tus cartas.`;
                 } else { message = "Ordenando..."; console.warn("State: Reordering, but invalid player.");}
                 break;
            case 'judging':
                if (currentReaderIndex !== -1 && players[currentReaderIndex]) {
                    message = `Turno de ${players[currentReaderIndex].name} (Lector) para elegir la mejor respuesta.`;
                } else { message = "Juzgando..."; console.warn("State: Judging, but invalid reader.");}
                break;
            case 'round_end':
                // Mensaje manejado en chooseWinner
                break;
            default:
                message = "Cargando...";
        }
        if (gameMessageElem) gameMessageElem.innerText = message;
     } catch (error) {
         console.error("Error updating game message:", error);
         if (gameMessageElem) gameMessageElem.innerText = "Error...";
     }
}

function rotateReader() {
    currentReaderIndex = (currentReaderIndex + 1) % players.length;
    console.log(`Reader rotated to index: ${currentReaderIndex} (${players[currentReaderIndex]?.name || 'Unknown'})`); // Optional Chaining
    updateScoreboardHighlight();
}

// =============================================================
// --- RENDERIZADO DE CARTAS ---
// =============================================================

function renderBlackCard() {
    console.log("Rendering black card...");
    if (!currentBlackCard) {
        console.error("Attempted to render null black card.");
        if(blackCardElem) blackCardElem.innerHTML = "Error";
        return;
    };
    // Asegurarse de que 'pick' exista
    currentBlackCard.pick = currentBlackCard.pick || 1;
    let text = getCardText(currentBlackCard, currentLang);
    if(blackCardElem) blackCardElem.innerHTML = text.replace(/_/g, "<span>[____]</span>");
}

function renderAllHands() {
    console.log("Rendering all hands...");
    players.forEach((player, index) => {
        const handElem = playerHandElems[index];
        if (!handElem) {
             console.error(`Hand element for player ${index} not found.`);
             return;
        }
        handElem.innerHTML = '';
        handElem.classList.toggle('active', index === currentTurnPlayer && gameState === 'playing');
        handElem.classList.toggle('reader', index === currentReaderIndex);
        // console.log(`Rendering hand for ${player.name}. Active: ${index === currentTurnPlayer}, Reader: ${index === currentReaderIndex}`);

        if (player.hand && Array.isArray(player.hand) && player.hand.length > 0) { // Verifica que sea un array
            player.hand.forEach(cardData => {
                if (cardData && typeof cardData === 'object') { // Verifica que cardData sea un objeto
                    const cardElement = createWhiteCardElement(cardData, index);
                    handElem.appendChild(cardElement);
                } else {
                     console.warn(`Player ${player.name} has invalid card data in hand:`, cardData);
                }
            });
        } else {
            // console.log(`Player ${player.name} has no cards or invalid hand.`);
        }
    });
     if (confirmationButtonsDiv) {
        confirmationButtonsDiv.classList.toggle('hidden', currentTurnPlayer === -1 || (gameState !== 'playing' && gameState !== 'reordering'));
     }
     // console.log("Finished rendering hands.");
}

function createWhiteCardElement(cardData, playerOwnerIndex) {
     const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'white-card');
    cardElement.innerHTML = getCardText(cardData, currentLang);

    if (playerOwnerIndex === currentTurnPlayer && gameState === 'playing') {
        // Verifica si la carta ya está seleccionada para marcarla visualmente al re-renderizar
        if (selectedCardsData.includes(cardData)) {
            cardElement.classList.add('selected');
        }
        cardElement.onclick = () => selectCard(cardData, cardElement);
    } else {
        cardElement.classList.add('disabled');
    }
    return cardElement;
}

function displaySubmittedCards() {
    console.log("Displaying submitted cards..."); // LOG
    if (slotPlayerLeft) slotPlayerLeft.innerHTML = '';
    if (slotPlayerRight) slotPlayerRight.innerHTML = '';

    let playingPlayerIds = Object.keys(submittedCards).map(id => parseInt(id));
     console.log("Players who submitted:", playingPlayerIds); // LOG

    if (playingPlayerIds.length > 0) {
        const playerIdLeft = playingPlayerIds[0];
         console.log("Rendering left slot for player:", playerIdLeft); // LOG
        if (submittedCards[playerIdLeft] && Array.isArray(submittedCards[playerIdLeft])) {
            submittedCards[playerIdLeft].forEach(cardData => {
                 const cardElement = document.createElement('div');
                 cardElement.classList.add('card', 'white-card');
                 cardElement.innerHTML = getCardText(cardData, currentLang);
                 if(slotPlayerLeft) slotPlayerLeft.appendChild(cardElement);
            });
            if(chooseLeftBtn) chooseLeftBtn.dataset.playerId = playerIdLeft;
        } else {
             console.error("Invalid submitted card data for left player:", playerIdLeft, submittedCards[playerIdLeft]);
        }
    }

    if (playingPlayerIds.length > 1) {
        const playerIdRight = playingPlayerIds[1];
        console.log("Rendering right slot for player:", playerIdRight); // LOG
        if (submittedCards[playerIdRight] && Array.isArray(submittedCards[playerIdRight])) {
             submittedCards[playerIdRight].forEach(cardData => {
                 const cardElement = document.createElement('div');
                 cardElement.classList.add('card', 'white-card');
                 cardElement.innerHTML = getCardText(cardData, currentLang);
                 if(slotPlayerRight) slotPlayerRight.appendChild(cardElement);
            });
            if(chooseRightBtn) chooseRightBtn.dataset.playerId = playerIdRight;
         } else {
              console.error("Invalid submitted card data for right player:", playerIdRight, submittedCards[playerIdRight]);
         }
    }
}


// =============================================================
// --- ACCIONES DEL JUGADOR ---
// =============================================================

function selectCard(cardData, cardElement) {
    console.log(`Card selected/deselected by ${players[currentTurnPlayer]?.name || 'Unknown'}:`, cardData);
    if (!currentBlackCard) {
         console.error("Cannot select card, currentBlackCard is not set.");
         return;
    }

    const index = selectedCardsData.findIndex(data => data === cardData);

    if (index > -1) {
        selectedCardsData.splice(index, 1);
        cardElement.classList.remove('selected');
    } else {
        // Asegúrate de que currentBlackCard.pick sea un número válido
        const pickCount = parseInt(currentBlackCard.pick) || 1;
        if (selectedCardsData.length < pickCount) {
            selectedCardsData.push(cardData);
            cardElement.classList.add('selected');
        }
    }
    updateSelectionUI();
}

function updateSelectionUI() {
     // Asegúrate de que currentTurnPlayer sea un índice válido
     if (currentTurnPlayer < 0 || currentTurnPlayer >= playerHandElems.length || !playerHandElems[currentTurnPlayer]) {
         console.warn("updateSelectionUI called with invalid currentTurnPlayer:", currentTurnPlayer);
         // Oculta botones si el turno no es válido
         if (confirmPlayBtn) confirmPlayBtn.classList.add('hidden');
         if (confirmOrderBtn) confirmOrderBtn.classList.add('hidden');
         return;
     }

     const handElem = playerHandElems[currentTurnPlayer];
     const allHandCards = handElem.querySelectorAll('.white-card');
     const pickCount = parseInt(currentBlackCard?.pick) || 1; // Usa Optional Chaining y valor por defecto

     if (selectedCardsData.length === pickCount) {
        if(confirmPlayBtn) confirmPlayBtn.classList.remove('hidden');
        if(confirmationButtonsDiv) confirmationButtonsDiv.classList.remove('hidden'); // Muestra contenedor
        allHandCards.forEach(card => {
            if (!card.classList.contains('selected')) {
                card.classList.add('hidden');
            } else {
                 card.classList.remove('hidden');
            }
        });
    } else {
        if(confirmPlayBtn) confirmPlayBtn.classList.add('hidden');
        if(confirmOrderBtn) confirmOrderBtn.classList.add('hidden');
        // Mantiene el contenedor visible si está jugando, pero oculta botones específicos
        if (confirmationButtonsDiv) {
            confirmationButtonsDiv.classList.toggle('hidden', gameState !== 'playing' && gameState !== 'reordering');
        }
        allHandCards.forEach(card => {
            card.classList.remove('hidden');
        });
    }
}


function confirmPlay() {
    console.log(`${players[currentTurnPlayer]?.name || 'Unknown'} confirmed play.`);
    if (confirmPlayBtn) confirmPlayBtn.classList.add('hidden');
    // NO ocultes confirmationButtonsDiv aquí si vas a reordenar

    // Asegúrate de que playerHandElems[currentTurnPlayer] exista
     if (currentTurnPlayer < 0 || !playerHandElems[currentTurnPlayer]) {
          console.error("confirmPlay: Invalid currentTurnPlayer");
          return;
     }

    const handElem = playerHandElems[currentTurnPlayer];
    orderedCardElements = Array.from(handElem.querySelectorAll('.white-card.selected'));

    orderedCardElements.forEach(elem => {
        elem.classList.remove('selected');
        elem.onclick = null;
    });

    // Guarda los *datos* de las cartas seleccionadas
    submittedCards[currentTurnPlayer] = [...selectedCardsData];
    console.log("Submitted cards data:", submittedCards[currentTurnPlayer]); // LOG

    // Quita las cartas jugadas de la mano del jugador (array de datos)
    players[currentTurnPlayer].hand = players[currentTurnPlayer].hand.filter(card => !selectedCardsData.includes(card));
     console.log("Player hand after playing:", players[currentTurnPlayer].hand); // LOG

    // Limpia la selección local para el siguiente turno
    selectedCardsData = [];


    const pickCount = parseInt(currentBlackCard?.pick) || 1;
    if (pickCount > 1) {
        console.log("Entering reorder state."); // LOG
        gameState = 'reordering';
        updateGameMessage();
        renderReorderView();
        if(confirmOrderBtn) confirmOrderBtn.classList.remove('hidden');
        // Mantiene confirmationButtonsDiv visible
        if(confirmationButtonsDiv) confirmationButtonsDiv.classList.remove('hidden');
    } else {
        console.log("Pick 1, advancing turn directly."); // LOG
        advanceTurn();
    }
}


function renderReorderView() {
    console.log(`Rendering reorder view for ${players[currentTurnPlayer]?.name || 'Unknown'}`);
    // Muestra las cartas seleccionadas en el SLOT IZQUIERDO
    if (slotPlayerLeft) {
        slotPlayerLeft.innerHTML = '';
        slotPlayerLeft.classList.add('reordering');
    }
    if (slotPlayerRight) slotPlayerRight.innerHTML = ''; // Limpia el otro

    orderedCardElements.forEach((cardElement, index) => {
        if (slotPlayerLeft) slotPlayerLeft.appendChild(cardElement);

        if (index < orderedCardElements.length - 1) {
            const swapButton = document.createElement('button');
            swapButton.classList.add('swap-btn');
            swapButton.innerHTML = '↔';
            swapButton.dataset.index = index; // Guarda índice 0, 1, ...
            swapButton.onclick = () => swapCards(index);
            if (slotPlayerLeft) slotPlayerLeft.appendChild(swapButton);
        }
    });
}

function swapCards(index) {
     const playerIdx = currentTurnPlayer; // Guarda el jugador actual
     console.log(`Swapping cards at index ${index} for player ${playerIdx}`);
    if (index >= 0 && index < orderedCardElements.length - 1) {
        // Intercambia elementos HTML
        [orderedCardElements[index], orderedCardElements[index + 1]] =
            [orderedCardElements[index + 1], orderedCardElements[index]];

        // Intercambia los datos en submittedCards para el jugador actual
        if (submittedCards[playerIdx] && submittedCards[playerIdx].length > index + 1) {
            [submittedCards[playerIdx][index], submittedCards[playerIdx][index + 1]] =
                [submittedCards[playerIdx][index + 1], submittedCards[playerIdx][index]];
             console.log("New submitted order:", submittedCards[playerIdx]); // LOG
        } else {
            console.error("Error swapping submittedCards data: index out of bounds or data missing.");
        }

        renderReorderView();
    } else {
         console.warn("Invalid index for swapCards:", index);
    }
}


function confirmOrder() {
    console.log(`${players[currentTurnPlayer]?.name || 'Unknown'} confirmed order.`);
    if (confirmOrderBtn) confirmOrderBtn.classList.add('hidden');
    if (confirmationButtonsDiv) confirmationButtonsDiv.classList.add('hidden');
    if (slotPlayerLeft) slotPlayerLeft.classList.remove('reordering');

    // Elimina los botones de swap del slot izquierdo
    const swapButtons = slotPlayerLeft?.querySelectorAll('.swap-btn'); // Optional chaining
    swapButtons?.forEach(btn => btn.remove());

    advanceTurn();
}

// =============================================================
// --- ACCIONES DEL LECTOR ---
// =============================================================

if (chooseLeftBtn) {
    chooseLeftBtn.addEventListener('click', () => {
        const playerId = chooseLeftBtn.dataset.playerId;
        if (playerId !== undefined) {
             console.log(`Reader chose left card (Player ID: ${playerId})`);
             chooseWinner(parseInt(playerId));
        } else {
            console.error("Choose Left button has no player ID.");
        }
    });
}
if (chooseRightBtn) {
    chooseRightBtn.addEventListener('click', () => {
        const playerId = chooseRightBtn.dataset.playerId;
         if (playerId !== undefined) {
            console.log(`Reader chose right card (Player ID: ${playerId})`);
            chooseWinner(parseInt(playerId));
         } else {
             console.error("Choose Right button has no player ID.");
         }
    });
}


function chooseWinner(winnerPlayerId) {
    // Verifica que winnerPlayerId sea un número válido y exista en players
    if (isNaN(winnerPlayerId) || !players[winnerPlayerId]) {
        console.error("Invalid winnerPlayerId:", winnerPlayerId);
        return;
    }
    console.log(`Choosing winner: Player ID ${winnerPlayerId} (${players[winnerPlayerId].name})`);
    gameState = 'round_end';
    if(readerChoiceButtons) readerChoiceButtons.classList.add('hidden');

    players[winnerPlayerId].score++;
    updateScoreboardHighlight();

    const winnerName = players[winnerPlayerId].name;
    // Asegurarse de que submittedCards[winnerPlayerId] exista y sea un array
    const winnerCards = submittedCards[winnerPlayerId];
    let winnerCardsText = "Error";
    if (Array.isArray(winnerCards)) {
        winnerCardsText = winnerCards.map(c => getCardText(c, currentLang)).join(' / ');
    } else {
         console.error("Winner card data not found or invalid:", winnerCards);
    }

    if(gameMessageElem) gameMessageElem.innerText = `¡Punto para ${winnerName}! (${winnerCardsText})`;

    // Resalta visualmente
     const leftPlayerId = parseInt(chooseLeftBtn?.dataset.playerId); // Optional chaining
     const rightPlayerId = parseInt(chooseRightBtn?.dataset.playerId); // Optional chaining

     if (slotPlayerLeft) {
         slotPlayerLeft.style.boxShadow = (leftPlayerId === winnerPlayerId) ? '0 0 15px 5px lightgreen' : 'none';
         slotPlayerLeft.style.opacity = (leftPlayerId === winnerPlayerId) ? '1' : '0.5';
     }
      if (slotPlayerRight) {
         slotPlayerRight.style.boxShadow = (rightPlayerId === winnerPlayerId) ? '0 0 15px 5px lightgreen' : 'none';
         slotPlayerRight.style.opacity = (rightPlayerId === winnerPlayerId) ? '1' : '0.5';
     }

    if(advanceRoundBtn) advanceRoundBtn.classList.remove('hidden');
}


// =============================================================
// --- FUNCIONES AUXILIARES (Mazos, Idioma, Puntaje Manual) ---
// =============================================================

function dealCards(deck, count) {
    const hand = [];
    for (let i = 0; i < count; i++) {
        if (deck.length === 0) {
             console.warn("Mazo blanco vacío en dealCards. Reiniciando mazo.");
             let allWhiteCardsCopy = [...whiteCardsData];
             // Sobrescribe el deck original pasado por referencia
             deck.length = 0; // Vacía el array original
             deck.push(...shuffleDeck(allWhiteCardsCopy));
             if (deck.length === 0) {
                 console.error("CRITICAL: No white cards available even after reshuffle!");
                 break;
             }
        }
        const card = deck.pop();
        if(card) {
            hand.push(card);
        } else {
            console.error("Error: deck.pop() returned undefined in dealCards.");
        }
    }
    return hand;
}


function drawWhiteCard() {
     if (whiteDeck.length === 0) {
        console.warn("Mazo blanco vacío en drawWhiteCard. Reiniciando mazo.");
        let allWhiteCardsCopy = [...whiteCardsData];
        whiteDeck = shuffleDeck(allWhiteCardsCopy);
    }
     if (whiteDeck.length > 0) {
        const card = whiteDeck.pop();
        if (card) return card;
        else {
             console.error("Error: whiteDeck.pop() returned undefined in drawWhiteCard.");
             return null;
        }
    }
    console.error("CRITICAL: No white cards available to draw.");
    return null;
}

function getCardText(card, lang) {
    if (!card || typeof card !== 'object') return "Error: Carta inválida";

    const esText = card.es || "?";
    const ptText = card.pt || esText;

    if (lang === 'bi') return `${esText}<hr>${ptText}`;
    if (lang === 'pt') return ptText;
    return esText;
}

// --- Puntaje Manual (Deshabilitado) ---
// addScoreBtn.addEventListener('click', () => { console.warn("Puntaje manual no implementado para 3 jugadores."); });
// subtractScoreBtn.addEventListener('click', () => { console.warn("Puntaje manual no implementado para 3 jugadores."); });
function updateScoreDisplay(){ /* Ya no se usa para el puntaje real */ }

// =============================================================
// --- AJUSTES Y MÚSICA ---
// =============================================================
if(settingsBtn) settingsBtn.addEventListener('click', () => { if(settingsModal) settingsModal.style.display = 'block'; });
if(closeSettingsBtn) closeSettingsBtn.addEventListener('click', () => { if(settingsModal) settingsModal.style.display = 'none'; });
window.addEventListener('click', (event) => {
    if (event.target == settingsModal) { if(settingsModal) settingsModal.style.display = 'none'; }
});

if(volumeControl) volumeControl.addEventListener('input', (e) => {
    const newVolume = e.target.value;
    Object.values(musicTracks).forEach(track => { if(track) track.volume = newVolume; });
});

if(musicSelect) musicSelect.addEventListener('change', switchMusic);
if(langSelect) langSelect.addEventListener('change', updateLanguage);

function updateLanguage() {
    // Verifica si langSelect existe antes de leer su valor
    currentLang = langSelect ? langSelect.value : 'es'; // Valor por defecto si no existe
    console.log("Updating language to:", currentLang); // LOG

    // Usa optional chaining (?) para evitar errores si los elementos no existen
    document.getElementById('start-btn')?.innerText = uiTexts[currentLang]?.start;
    document.getElementById('end-btn')?.innerText = uiTexts[currentLang]?.end;
    document.getElementById('settings-btn')?.innerText = uiTexts[currentLang]?.settings;
    document.getElementById('confirm-play-btn')?.innerText = uiTexts[currentLang]?.confirmPlay;
    document.getElementById('confirm-order-btn')?.innerText = uiTexts[currentLang]?.confirmOrder;
    document.getElementById('advance-round-btn')?.innerText = uiTexts[currentLang]?.advanceRound;

    document.getElementById('settings-title')?.innerText = uiTexts[currentLang]?.settingsTitle;
    document.getElementById('volume-label')?.innerText = uiTexts[currentLang]?.volumeLabel;
    document.getElementById('music-label')?.innerText = uiTexts[currentLang]?.musicLabel;
    document.getElementById('lang-label')?.innerText = uiTexts[currentLang]?.langLabel;
    // document.getElementById('score-label')?.innerText = uiTexts[currentLang]?.score; // Score label ya no se usa así

    if (gameState !== 'setup' && currentBlackCard) {
        if (pickTextElem) pickTextElem.innerText = uiTexts[currentLang]?.pick(currentBlackCard.pick);
        renderBlackCard();
        renderAllHands();
        if (gameState === 'judging' || gameState === 'round_end') {
             displaySubmittedCards();
        }
    } else if (gameState === 'setup') {
         // Actualiza textos en modal de setup si es necesario (no implementado aquí)
    }
}


// =============================================================
// --- INICIALIZACIÓN AL CARGAR ---
// =============================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded. Showing setup modal.");
    if (appContainer) appContainer.classList.add('hidden');
    if (setupModal) setupModal.style.display = 'block';
    // Llama a updateLanguage solo después de que el DOM esté listo
    updateLanguage();
});

// Listener para el botón de Siguiente Ronda (del Lector)
if(advanceRoundBtn) advanceRoundBtn.addEventListener('click', () => {
    console.log("--- Advance Round Button Clicked (Reader) ---");

    // Limpia estilos
    if (slotPlayerLeft) { slotPlayerLeft.style.boxShadow = 'none'; slotPlayerLeft.style.opacity = '1'; }
    if (slotPlayerRight) { slotPlayerRight.style.boxShadow = 'none'; slotPlayerRight.style.opacity = '1'; }

    // Rellena manos
     Object.keys(submittedCards).forEach(playerIdStr => {
         const playerId = parseInt(playerIdStr);
         if (players[playerId] && submittedCards[playerIdStr]) { // Verifica jugador y datos
             const numPlayed = submittedCards[playerIdStr].length;
             console.log(`Player ${players[playerId].name} played ${numPlayed} cards. Drawing replacements...`);
             for (let i = 0; i < numPlayed; i++) {
                 const newCard = drawWhiteCard();
                 if (newCard) {
                     // Asegúrate de que player.hand sea un array
                     if (!Array.isArray(players[playerId].hand)) {
                          players[playerId].hand = [];
                     }
                     players[playerId].hand.push(newCard);
                 } else {
                     console.warn(`Could not draw replacement card ${i+1} for player ${players[playerId].name}`);
                 }
             }
             console.log(`Player ${players[playerId].name} new hand size: ${players[playerId].hand?.length || 0}`); // Optional chaining
         } else {
             console.error(`Invalid player ID ${playerIdStr} or submittedCards data.`);
         }
     });

    rotateReader();
    startNewRound();
});