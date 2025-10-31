/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// =============================================================
// --- DATOS DEL JUEGO (Cartas y Textos) ---
// =============================================================
const uiTexts = {
    es: { start: "Iniciar Partida", end: "Terminar Partida", settings: "Ajustes", settingsTitle: "Ajustes", volumeLabel: "Volumen de Música", musicLabel: "Música de Fondo", langLabel: "Idioma", pick: (num) => `Elige ${num} carta(s)`, score: "Puntos:", confirmPlay: "Confirmar Jugada", confirmOrder: "Confirmar Orden", advanceRound: "Siguiente Ronda" },
    pt: { start: "Iniciar Jogo", end: "Terminar Jogo", settings: "Configurações", settingsTitle: "Configurações", volumeLabel: "Volume da Música", musicLabel: "Música de Fundo", langLabel: "Idioma", pick: (num) => `Escolha ${num} carta(s)`, score: "Pontos:", confirmPlay: "Confirmar Jogada", confirmOrder: "Confirmar Ordem", advanceRound: "Próxima Rodada" },
    bi: { start: "Iniciar Partida / Jogo", end: "Terminar Partida / Jogo", settings: "Ajustes / Configurações", settingsTitle: "Ajustes / Configurações", volumeLabel: "Volumen / Volume", musicLabel: "Música de Fondo / Fundo", langLabel: "Idioma", pick: (num) => `Elige / Escolha ${num} carta(s)`, score: "Puntos / Pontos:", confirmPlay: "Confirmar Jogada", confirmOrder: "Confirmar Orden / Ordem", advanceRound: "Siguiente Ronda / Próxima Rodada" }
};

const blackCardsData = [
    { es: "¿Qué es ese olor? Es _.", pick: 1 }, { es: "A mi edad, mi abuelo cobraba 50 centesimos por _.", pick: 1 },
    { es: "Tras años de busqueda no se a podido corroborar la existencia de _.", pick: 1 }, { es: "_, amor a primera vista.", pick: 1 },
    { es: "Bienvenido al grupo de _.", pick: 1 }, { es: "La nueva experiencia de VR incluye _.", pick: 1 },
    { es: "Con paciencia y dedicación puedes dedicarte a vivir de _.", pick: 1 }, { es: "¿Que es lo más lindo? _.", pick: 1 },
    { es: "_ pero es que además, LITERALMENTE.", pick: 1 }, { es: "La RAE acaba de aceptar ' _ ' como palabra.", pick: 1 },
    { es: "Mi psicólogo dice que mi problema es _.", pick: 1 }, { es: "El ingrediente secreto de la abuela era _.", pick: 1 },
    { es: "En mi currículum, 'habilidades' incluye _.", pick: 1 }, { es: "La próxima crisis mundial será causada por _.", pick: 1 },
    { es: "Lo que realmente quiero para Navidad es _.", pick: 1 }, { es: "El apocalipsis zombie falló por culpa de _.", pick: 1 },
    { es: "El nuevo sabor de papas fritas es: _.", pick: 1 }, { es: "Mi crush de Tinder resultó ser _.", pick: 1 },
    { es: "La verdadera razón por la que se extinguieron los dinosaurios fue _.", pick: 1 }, { es: "_, no puedes tener solo uno.", pick: 1 },
    { es: "¿Por qué estoy soltero? Probablemente por _.", pick: 1 }, { es: "La nueva película de Disney trata sobre _.", pick: 1 },
    { es: "Durante el sexo, me gusta pensar en _.", pick: 1 }, { es: "El próximo presidente será _.", pick: 1 },
    { es: "Hoy en terapia hablé sobre _.", pick: 1 }, { es: "Mi nombre de superhéroe es 'Capitán _'.", pick: 1 },
    { es: "El peor regalo de cumpleaños que recibí fue _.", pick: 1 }, { es: "El nuevo plan de estudios escolar ahora incluye _.", pick: 1 },
    { es: "Mi placer culposo es _.", pick: 1 }, { es: "La contraseña de mi WiFi es _.", pick: 1 },
    { es: "Hola, soy tu conductor de Uber. Hoy hablaremos de _.", pick: 1 }, { es: "Lo único que me saca de la cama por la mañana es _.", pick: 1 },
    { es: "La autopsia reveló que la causa de muerte fue _.", pick: 1 }, { es: "El nuevo eslogan de Nike es: 'Just _ It'.", pick: 1 },
    { es: "Descubrí que mi gato realmente sabe cómo _.", pick: 1 }, { es: "La vida es como un _.", pick: 1 },
    { es: "Las feministas están arruinando _.", pick: 1 }, { es: "¿Qué es lo que esconde el Papa? _.", pick: 1 },
    { es: "Mi vida sexual es _ y _.", pick: 2 }, { es: "Para mi próximo truco, sacaré _ de _.", pick: 2 },
    { es: "¿Qué me traje del supermercado? _ y _.", pick: 2 }, { es: "La nueva startup de tecnología combina _ con _.", pick: 2 },
    { es: "Este bar no tiene _ pero sí tiene _.", pick: 2 }, { es: "Mi cita fue un desastre. Empezó con _ y terminó con _.", pick: 2 },
    { es: "Guerra y paz. Fuego y hielo. _ y _.", pick: 2 }, { es: "El título de mi autobiografía es: ' _ : Una historia de _'.", pick: 2 },
    { es: "No soy un experto, pero estoy seguro de que _ no debería mezclarse con _.", pick: 2 }, { es: "Dos cosas que no deberías hacer en un funeral: _ y _.", pick: 2 },
    { es: "Mi plan de jubilación es _ y _.", pick: 2 }, { es: "Mi estado mental actual es _ con un toque de _.", pick: 2 },
    { es: "En el futuro, los historiadores dirán que nuestra era fue definida por _ y _.", pick: 2 }, { es: "Mi profesor de filosofía dijo que el sentido de la vida es _ y _.", pick: 2 },
    { es: "El sándwich perfecto tiene _ y _.", pick: 2 }, { es: "Haz tu propio pokémon: Empieza con _, evoluciona a _ y su ataque final es _.", pick: 3 },
    { es: "El kit de supervivencia para la oficina incluye _, _ y mucho _.", pick: 3 }, { es: "Mi fin de semana perfecto: _, _ y _.", pick: 3 },
    { es: "La receta para el desastre: una parte de _, dos partes de _ y una pizca de _.", pick: 3 }, { es: "Me arrestaron por posesión de _, intento de _ y _ en primer grado.", pick: 3 },
    { es: "El algoritmo de Instagram cree que me obsesiona _.", pick: 1 }, { es: "En lugar de un aumento, mi jefe me dio _.", pick: 1 },
    { es: "La palabra de seguridad de mis padres es _.", pick: 1 }, { es: "Mi reunión de Zoom fue interrumpida por _.", pick: 1 },
    { es: "El próximo sabor de Monster Energy es: _.", pick: 1 }, { es: "El reboot de 'El Rey León' pero con _.", pick: 1 },
    { es: "¿Qué encontré debajo de la cama de mis padres? _.", pick: 1 }, { es: "El Papa ha anunciado que _ ya no es pecado.", pick: 1 },
    { es: "Mi 'safe search' está desactivado por culpa de _.", pick: 1 }, { es: "Mi psiquiatra me recetó _.", pick: 1 },
    { es: "La nueva tendencia viral de TikTok es _.", pick: 1 }, { es: "El nuevo juguete de la Cajita Feliz es _.", pick: 1 },
    { es: "No sabía lo que era el amor hasta que vi _.", pick: 1 }, { es: "¿Qué es lo que realmente pasó en el Arca de Noé? _.", pick: 1 },
    { es: "La verdadera causa del calentamiento global es _.", pick: 1 }, { es: "Mi personalidad de Tinder es _.", pick: 1 },
    { es: "Lo único que me queda por probar en la vida es _.", pick: 1 }, { es: "Mi personalidad se basa en _ y _.", pick: 2 },
    { es: "Siempre que _, me dan ganas de _", pick: 2 }, { es: "Le vendí mi alma al diablo, el me prometio _, pero todo lo que obtuve fue _.", pick: 2 },
    { es: "No debes _, mejor _.", pick: 2 }, { es: "_ sirve como antidepresivo.", pick: 1 },
    { es: "El titular de mañana: 'Famoso arrestado por _ con \_'." , pick: 2 }, { es: "El sexo está bien, pero ¿alguna vez has probado _ con \_?", pick: 2 },
    { es: "Mi plan para dominar el mundo: primero \_, luego \_.", pick: 2 }, { es: "El nombre de mi banda de punk: '\_ y los \_'." , pick: 2 },
    { es: "Paso 1: \_. Paso 2: \_. Paso 3: ¿Ganancias?", pick: 2 }, { es: "Mi terapeuta dice que debo dejar _ y empezar a _.", pick: 2 },
    { es: "Netflix canceló mi serie favorita para producir una sobre _ y \_." , pick: 2 }, { es: "No eres tú, soy yo. Y también un poco \_ y \_.", pick: 2 },
    { es: "Mi cita perfecta: \_ , \_ y un poco de \_.", pick: 3 }, { es: "Mi kit de primeros auxilios contiene: \_, \_ y \_.", pick: 3 },
    { es: "El perfil de mi ex en una frase: \_, \_ y \_.", pick: 3 }, { es: "Lo que realmente aprendí en la universidad: \_, \_ y cómo evitar \_.", pick: 3 },
    { es: "Mi fetiche más raro es _.", pick: 1 }, { es: "La nueva serie de Netflix sobre crímenes reales trata de _.", pick: 1 },
    { es: "Lo que realmente me excita es _.", pick: 1 }, { es: "El nuevo desafío viral de internet es el 'Reto del _'.", pick: 1 },
    { es: "En mi funeral, quiero que pongan _.", pick: 1 }, { es: "Descubrí que mi compañero de trabajo es secretamente _.", pick: 1 },
    { es: "La peor parte de ser adulto es _.", pick: 1 }, { es: "La nueva ley prohíbe _ en público.", pick: 1 }, { es: "_ es la cura para el covid.", pick: 1 },
    { es: "Mi tatuaje secreto dice ' _ '.", pick: 1 }, { es: "¿Qué le regalé a mi suegra por error? _.", pick: 1 },
    { es: "El 2020 fue malo, pero al menos no tivemos _.", pick: 1 }, { es: "Mi sabor de helado favorito es _.", pick: 1 }, { es: "El nuevo villano Argentino de Marvel es _.", pick: 1 },
    { es: "La nueva canción del verano se llama ' _ '.", pick: 1 }, { es: "La cura para la resaca es _.", pick: 1 }, { es: "El nuevo superhéroe uruguayo de Marvel se llama '_'.", pick: 1 },
    { es: "El área 51 realmente esconde _.", pick: 1 }, { es: "Mi historial de búsqueda me delató por buscar _.", pick: 1 },
    { es: "La nueva fragancia de Calvin Klein huele a _.", pick: 1 }, { es: "_, los niños lo probaron, las madres lo aprobaron.", pick: 1 },
    { es: "No se preocupen niños, se pone mejor cada vez, yo llevo 20 años con _.", pick: 1 }, { es: "La peor combinación para una primera cita: _ y _.", pick: 2 },
    { es: "Mi currículum dice 'Experto en _', pero en realidad solo sé _.", pick: 2 }, { es: "La reunión de padres y maestros fue incómoda cuando hablamos de _ y _.", pick: 2 },
    { es: "Lo que me mantiene despierto a las 3 AM: _.", pick: 1 }, { es: "Lo que me mantiene despierto a las 3 AM: _ y _.", pick: 2 },
    { es: "En la fiesta de los sobrevivientes de Vietnam pusieron _.", pick: 1 }, { es: "¿Que es lo que nunca falla para animar una fiesta? _.", pick: 1 },
    { es: "El nuevo restaurante de lujo sirve _ con un toque de _.", pick: 2 }, { es: "Mi epitafio dirá: 'Amaba _ y odiaba _'.", pick: 2 },
    { es: "El verdadero secreto para la felicidad es _ y _.", pick: 2 }, { es: "Encontré un condón usado en _ y olía a _.", pick: 2 },
    { es: "El triatlón de los dioses: nadar en _, correr con _ y andar en bicicleta sobre _.", pick: 3 }, { es: "Mi combo de comida para la depresión es _, _ y _.", pick: 3 },
    { es: "Increible, subo un video de _ y el primer comentario es sobre _.", pick: 2 }, { es: "Para sobrevivir a una cena familiar, necesitas _, _ y _.", pick: 3 },
    { es: "Se cortó la luz en medio del partido y lo único que me quedó fue _.", pick: 1 }, { es: "¿Qué cortó el rollo en la orgía.", pick: 1 },
    { es: "Fui a la rambla a tomar mate y me encontré con _.", pick: 1 }, { es: "El nuevo plan del gobierno para bajar el dólar es _.", pick: 1 },
    { es: "Lo que realmente hay en el fondo del Palacio Salvo es _.", pick: 1 }, { es: "En el bondi, el guarda me dijo que no podía subir con _.", pick: 1 },
    { es: "La verdadera razón por la que el chivito es tan caro es _.", pick: 1 }, { es: "Me fui de vacaciones a Rocha y me gasté toda la plata en _.", pick: 1 },
    { es: "Mi abuela todavía guarda _ de la crisis del 2002.", pick: 1 }, { es: "El nuevo hit del verano de Maramá se va a llamar ' _ '.", pick: 1 },
    { es: "Cuidado con _! O te volveras puto, no gay, PUTO!.", pick: 1 }, { es: "Salí del boliche y pisé _.", pick: 1 }, { es: "El nuevo sabor de la cerveza Patricia es _.", pick: 1 },
    { es: "En vez de bizcochos, la panadería ahora vende _.", pick: 1 }, { es: "La nueva medida del BROU es _.", pick: 1 }, { es: "El nuevo fernet con coca viene con sabor a _.", pick: 1 },
    { es: "El Pepe Mujica dijo que lo único que le falta es _.", pick: 1 }, { es: "El asado del domingo se arruinó por _ y _.", pick: 2 }, { es: "En la fiesta de 15 de mi prima, lo que no podía faltar era _ y _.", pick: 2 },
    { es: "Mi estado de WhatsApp ahora dice: 'Ni _ ni _'.", pick: 2 }, { es: "Para ser un verdadero uruguayo necesitas _, _ y ganas de quejarte.", pick: 2 },
    { es: "Lo único peor que el CTI de COVID es _.", pick: 1 }, { es: "Una paja triste no es triste sin _.", pick: 1 }, { es: "Dos _, para más placer.", pick: 1 }, 
    { es: "Me colé en el ómnibus y el guarda me amenazó con _.", pick: 1 }, { es: "En la Criolla del Prado, un gaucho se cayó del caballo por culpa de _.", pick: 1 },
    { es: "La nueva campaña de Antel para competir con Starlink es _.", pick: 1 }, { es: "La OSE anunció que el agua ahora viene con un leve sabor a _.", pick: 1 },
    { es: "Me colé en la Noche de la Nostalgia y lo único que pasaban era _.", pick: 1 }, { es: "UTE informa que el próximo apagón programado es para festejar _.", pick: 1 },
    { es: "El nuevo impuesto se llama 'Impuesto al _'.", pick: 1 }, { es: "La verdadera grieta en Uruguay es entre _ y _.", pick: 2 },
    { es: "Fui al Geant y en el parking me robaron _.", pick: 1 }, { es: "El cuidacoches me dijo: 'Jefe, ¿no me deja algo pa' _?'", pick: 1 },
    { es: "La nueva murga se llama: 'Los Hinchas de _'.", pick: 1 }, { es: "En el Mercado del Puerto, el medio y medio me pegó tan fuerte que vi _.", pick: 1 },
    { es: "Se suspende el fútbol por _.", pick: 1 }, { es: "¿Cuál es mi mayor defecto? _.", pick: 1 }, { es: "El nuevo baile viral se llama '_'.", pick: 1 },
    { es: "La nueva mascota de la selección uruguaya es _.", pick: 1 }, { es: "En la playa, en vez de 'fútbol-tenis', ahora se juega al _.", pick: 1 },
    { es: "El grupo de WhatsApp de la familia se pudrió por culpa de _.", pick: 1 }, { es: "Salí a caminar por 18 de Julio y lo único que vi fue _ y _.", pick: 2 },
    { es: "El plan perfecto para el domingo: _ con _.", pick: 2 }, { es: "Mi suegra me cocinó _ con _.", pick: 2 }, { es: "No me gusta generalizar, pero los Argentinos be like: _.", pick: 2 },
    { es: "Lo único más lento que un trámite del BPS es _.", pick: 1 }, { es: "La nueva moda en Pocitos es _.", pick: 1 }, { es: "Mi jefe me despidió por _.", pick: 1 },
    { es: "El clásico se define por _ y _.", pick: 2 }, { es: "Me tomé un bondi equivocado y terminé en _ con _.", pick: 2 }, { es: "No me gusta generalizar, pero los Argentinos be like: _.", pick: 1 },
    { es: "La UDELAR ahora tiene una carrera de 'Licenciatura en _ y _'.", pick: 2 }, { es: "El secreto de una buena pascualina es _ y _.", pick: 2 }, { es: "El asado uruguayo no es lo mismo sin _ y _.", pick: 2 },
    { es: "Este país no avanza por culpa de _ y _.", pick: 2 }, { es: "Rayos! ¿Donde deje _?", pick: 1 }, { es: "No puedo dormir por culpa de _.", pick: 1 }, { es: "No me gusta generalizar pero los Uruguayos be like: _.", pick: 1 }
];

const whiteCardsData = [
    { es: "Eloy" }, { es: "Cuidado con el siguiente jugador! (gestos exagerados)" }, { es: "Callate!" }, { es: "Johnny Depp" }, { es: "El pene de Henry Cavil" }, { es: "Una patada bien acomodada en los testiculos" },
    { es: "La masturbación en grupo" }, { es: "El pene de Henry Cavill" }, { es: "Un trío con dos mujeres" }, { es: "Una orgía en un geriátrico" },
    { es: "Un trío con dos hombres" }, { es: "Un trío (pero tu solo estas mirando)" }, { es: "Sexo anal sin lubricante" }, { es: "Crucificción" },
    { es: "La masturbación" }, { es: "Lluvia dorada" }, { es: "Un orgasmo falso" }, { es: "Emma Watson" }, { es: "Un pene gigante" }, { es: "Un negro muy sexy" },
    { es: "La violación (pero no de tus derechos)" }, { es: "La violación de todos tus derechos humanos" }, { es: "Enamorar a un famoso" }, 
    { es: "Un polvo de una noche que se repite" }, { es: "El verdadero significado de la navidad" }, { es: "Henry Cavil" }, { es: "Un pene muy pequeño" },
    { es: "La sexy mirada de un negro en prisión" }, { es: "Los terroristas" }, { es: "No puedo pensar, estoy borracho" }, { es: "salir a escondidas de la casa de tus padres (tienes 35 años)" },
    { es: "Mandar a los niños pronto a la cama para poder ponderla en paz" }, { es: "Patriarcado, dulce patriarcado" }, 
    { es: "Un mimo teniendo un ataque al corazón" }, { es: "Bebé que nació sin extremidades" }, { es: "Un niño con síndrome de down que toca la batería" },
    { es: "Perder la virginidad del orto" }, { es: "Mujeres sumísas" }, { es: "Un retrato erótico de My little ponny" }, { es: "Furros" }, 
    { es: "Esclavitud de minorías" }, { es: "Huevos de codorniz lanzados con mucha fuerza" }, { es: "El gobierno" }, { es: "Tu prima" }, { es: "Tu prima la gorda" }, 
    { es: "Barney el dinosaurio 'no' pedófilo" }, { es: "El agujero equivocado" }, { es: "Error 404 respuesta no encontrada" }, 
    { es: "Fingir ser una chica en internet" }, { es: "El suicidio siempre es la solución" }, { es: "Huerfanos" },
    { es: "Un test para saber que tan negro eres" }, { es: "Enanos de circo" }, { es: "Un niño ciego, sordo y mudo" },
    { es: "Las buenas drogas" }, { es: "Estar muy fumado" }, { es: "Estar muy borracho" }, { es: "Cientos y cientos de ratas gigantes" },
    { es: "Spiderman biologicamente correcto que lanza telarañas por el ano" }, { es: "Bebés muertos" }, { es: "Padres muertos" },
    { es: "Enanos disfrazados" }, { es: "Humillación sexual" }, { es: "Puto el que lo lea" }, { es: "Tiroteo escolar" },
    { es: "Tu hermana que es puta, reputa y recontraputa, joder que puta es" }, { es: "Flashbacks de Vietnam" },
    { es: "Solo un poquitito de violación anal" }, { es: "Putas Harry! PUTAS!" }, { es: "Que te den matraca hasta que tu culo resista" },
    { es: "La puta que te remil pario, no tengo nada" }, { es: "Sexo sadomasoquista" }, { es: "Bailar como retrasado en la autopista" },
    { es: "Los Amish" }, { es: "Erección al pasar por una guardería" }, { es: "Un colegio de monjas muy zorras" },
    { es: "Gente que nunca conocerá el dulce placer de caminar" }, { es: "La abuela desnuda" }, { es: "Golpes muy fuertes en la entrepierna" },
    { es: "LA CAJA! LA CAJA!" }, { es: "La paz mundial" }, { es: "Feminazis enojadas" }, { es: "Gente fea" },
    { es: "Un amigo que siempre esta dispuesto a hacerte una paja no homo" }, { es: "Gente tonta" }, { es: "Chinos trabajando en una fabrica ilegal" },
    { es: "Tener vagina" }, { es: "Labios vaginales tan grandes que aplauden al caminar" }, { es: "La concha peluda" },
    { es: "El clítoris" }, { es: "La comunidad LGBTQ+ y mucho más" }, { es: "Aliento de pene" }, { es: "Cebollas" },
    { es: "Lamer el exterior de un ano y no terminar el trabajo" }, { es: "Cuando te tiras un pedo y te cagas un poquito" }, { es: "Eutanasia" },
    { es: "Ser árabe y explotar" }, { es: "Adolescentes virgenes" }, { es: "Usar mi ano como trompeta en el show de talentos" },
    { es: "Mi culo negro" }, { es: "My nigga" }, { es: "Minas anti-tanques" }, { es: "El negro Mandela" }, { es: "El capa preta" },
    { es: "2012" }, { es: "Penes" }, { es: "El pene" }, { es: "Una sexy rubia con paquete" }, { es: "Bro?" }, { es: "Mi vida sexual" },
    { es: "Vituber furro" }, { es: "SIDA!" }, { es: "Un tumor cerebral" }, { es: "Argentinos" }, { es: "Brasileros" },
    { es: "Niños de africa" }, { es: "Necro-zoofilia" }, { es: "Problemitas con papá" }, { es: "Silencio" },
    { es: "Masculinidad frájil" }, { es: "Sexo sucio y salvaje" }, { es: "Sexo oral no reciproco" }, { es: "Un billete de 3 dolares" },
    { es: "Los fachas" }, { es: "La violacion de todos los derechos humanos" }, { es: "Vladimir Putin" }, { es: "Hitler" },
    { es: "72 virgenes" }, { es: "Trish" }, { es: "Jeffo" }, { es: "Insesto" }, { es: "Gordofobia" }, { es: "Gordo panceta" },
    { es: "Anorexia" }, { es: "Un zopapo" }, { es: "Pedofilos" }, { es: "Monstruar" }, { es: "Mujeres" }, { es: "3cm" },
    { es: "Fascismo" }, { es: "Tu mamá" }, { es: "Racismo" }, { es: "Bidon de tuco" }, { es: "Un burro volador" },
    { es: "Pizza con piña" }, { es: "La economía" }, { es: "El sentido de la vida" }, { es: "Un político honesto" },
    { es: "Gatos que juzgan" }, { es: "Ruido de módem antiguo" }, { es: "Explotar cosas con la mente" }, { es: "Un Power Ranger desempleado" },
    { es: "Amor verdadero" }, { es: "Ansiedad existencial" }, { es: "Un audio de WhatsApp de 3 minutos" }, { es: "Dejar todo para mañana" },
    { es: "El 'visto' de WhatsApp" }, { es: "Mi ex" }, { es: "Llorar en la ducha" }, { es: "Un influencer haciendo el ridículo" },
    { es: "Criptomonedas" }, { es: "El terraplanismo de mi tía" }, { es: "Gritar '¡GOL!' en un funeral" }, { es: "El olor a nafta" },
    { es: "La friendzone" }, { es: "Hacer contacto visual incómodo" }, { es: "Dedos de salchicha" }, { es: "Un video de TikTok sin gracia" },
    { es: "Elon Musk" }, { es: "Quedarse sin batería" }, { es: "Decir 'jaja' sin reírse" }, { es: "Una IA que se cree poeta" },
    { es: "El capitalismo tardío" }, { es: "Comer cereal con agua" }, { es: "Ponerle medias a una sandía" }, { es: "Un plot twist terrible" },
    { es: "El fantasma de Ricardo Fort" }, { es: "Argumentos falsos que gano en mi cabeza" }, { es: "Un mapache ladrón" },
    { es: "Sentirse ofendido en Twitter" }, { es: "Dudar de mi propia existencia" }, { es: "El olor a consultorio de dentista" },
    { es: "Pagar el alquiler" }, { es: "El reggaetón antiguo" }, { es: "Un pato con sombrero de copa" }, { es: "El calentamiento global" },
    { es: "Mi historial de búsqueda" }, { es: "Gente negra" }, { es: "Monaguillos" }, { es: "Menores realizando trabajos forzados" },
    { es: "Gente blanca" }, { es: "La abuela de mi amigo con lencería" }, { es: "Un niño gritando en un restaurante" },
    { es: "Hacer 'la granja de Zenón' en el auto" }, { es: "El socialismo" }, { es: "La meritocracia" }, { es: "Un furro" },
    { es: "El olor a libro viejo" }, { es: "Un optimismo tóxico" }, { es: "La insoportable levedad del ser" },
    { es: "Depresión (pero con brillitos)" }, { es: "Procrastinar agresivamente" }, { es: "Un perro con acento argentino" },
    { es: "El algoritmo" }, { es: "Los Illuminati" }, { es: "El patriarcado" }, { es: "Una Karen" }, { es: "El Ayuwoki" },
    { es: "Un bebé feo" }, { es: "Mi yo de 15 años" }, { es: "El tío borracho de la fiesta" }, { es: "Spam telefónico" },
    { es: "Una secta" }, { es: "Decir 'provecho' en el baño" }, { es: "El metaverso" }, { es: "Un NFT de un mono" }, { es: "BATMAN!!" }, { es: "Un unicornio rosa" },
    { es: "El ano de Batman" }, { es: "Nicolas Cage" }, { es: "Un velociraptor vestido de cura" }, { es: "Hacer caca en el trabajo" },
    { es: "Un vegano que come carne a escondidas" }, { es: "El olor a humedad" }, { es: "Poner los cuernos" }, { es: "Un gato con sobrepeso" },
    { es: "Un político 'no' corrupto" }, { es: "Un reality show de sobrevivencia en la oficina" }, { es: "El sonido de las uñas en la pizarra" },
    { es: "Un final decepcionante (como el de GOT)" }, { es: "Usar medias con sandalias" }, { es: "El jugo de pepinillos" },
    { es: "Un payaso triste" }, { es: "Mi plan de datos" }, { es: "La monja del fondo" }, { es: "Un tatuaje mal escrito" },
    { es: "El perro del vecino a las 3 AM" }, { es: "Una paloma comiéndose un pancho" }, { es: "El holocausto nuclear" },
    { es: "Vender fotos de mis pies" }, { es: "El vello púbico de un extraño" }, { es: "Mi jefe" }, { es: "Mala conexión a internet" },
    { es: "Una tesis sobre la reproducción de los caracoles" }, { es: "Un alemán gritando" }, { es: "La gentrificación" },
    { es: "Comida de hospital" }, { es: "La muerte térmica del universo" }, { es: "Un musical de secundaria" },
    { es: "Una piñata llena de arañas" }, { es: "El olor a sudor rancio" }, { es: "El comunismo" }, { es: "El clítoris (ese mito)" },
    { es: "Un abuelo haciendo 'twerking'." }, { es: "Jeff Bezos (pero calvo)." }, { es: "El fantasma de Michael Jackson." },
    { es: "Un niño emo de 2007." }, { es: "Tu primo el 'emprendedor'." }, { es: "La culpa católica." }, { es: "El síndrome del impostor." },
    { es: "Vibras rancias." }, { es: "Una crisis de los 30 (a los 20)." }, { es: "Hablarle a las plantas en latín." },
    { es: "Fingir que entendiste la película." }, { es: "Un pedo silencioso pero mortal." }, { es: "Intentar ser sexy y fallar miserablemente." },
    { es: "Responder 'tú también' cuando el mesero te dice 'buen provecho'." }, { es: "El sonido de un hueso rompiéndose." },
    { es: "Una berenjena sospechosamente grande." }, { es: "Un dildo de doble punta." }, { es: "Lágrimas de influencer." },
    { es: "Un lubricante sabor a tocino." }, { es: "Agua bendita (de garrafa)." }, { es: "Un nido de ratas." }, { es: "El cadáver de un Pokémon." },
    { es: "Un vibrador que canta ópera." }, { es: "Un fetiche de pies." }, { es: "El porno de tentáculos." }, { es: "Un 'accidente' en la piscina." },
    { es: "Fluidos corporales no identificados." }, { es: "Un onlyfans de filosofía." }, { es: "El claxon de un payaso en un momento serio." },
    { es: "El 'privilegio blanco'." }, { es: "Un mapache con ansiedad." }, { es: "Comer mayonesa directamente del frasco." },
    { es: "El cadáver de la Reina Isabel." }, { es: "El olor de la axila de un programador." }, { es: "La voz de mi conciencia (que suena como Ricardo Arjona)." },
    { es: "Un discurso motivacional de un terraplanista." }, { es: "Sexo con tentáculos." }, { es: "Una erección inoportuna." },
    { es: "Un pezón solitario." }, { es: "Un divorcio muy caro." }, { es: "El 'gemido' de una cafetera." }, { es: "La mirada de desaprobación de mi gato." },
    { es: "Una orgía de pitufos." }, { es: "Preguntar '¿cuál?' cuando te dicen 'te amo'." }, { es: "Depilarse el ano con cera." },
    { es: "La friendzone... otra vez." }, { es: "Un powerpoint sobre mis traumas." }, { es: "El olor a iglesia." },
    { es: "Música de ascensor (pero metalera)." }, { es: "Un agujero de gloria." }, { es: "Una suscripción a OnlyFans." },
    { es: "El olor a naftalina." }, { es: "Un cura con un secreto." }, { es: "Un 'sugar daddy' diabético." }, { es: "El comunismo (en teoría)." },
    { es: "El comunismo (en la práctica)." }, { es: "Un moco perfectamente preservado." }, { es: "Un clítoris de 3 metros." },
    { es: "Una abuela racista." }, { es: "Mi dignidad (lo poco que queda)." }, { es: "La voz de Gal Gadot cantando 'Imagine'." },
    { es: "Un pezón erecto." }, { es: "Un feto en un frasco." }, { es: "Hacer 'ghosting'." }, { es: "Un coach de vida desempleado." },
    { es: "El olor a 'auto nuevo'." }, { es: "Cagar en el baño de visitas." }, { es: "La virginidad." }, { es: "Una orgía de enanos." },
    { es: "El ano blanqueado de un famoso." }, { es: "Un culo espectacular." }, { es: "Los antivacunas." }, { es: "Un podcast sobre nada." },
    { es: "La circuncisión." }, { es: "Películas de Adam Sandler." }, { es: "Semen." }, { es: "Un testículo solitario." },
    { es: "El 'Black Friday'." }, { es: "Mi colección de vibradores." }, { es: "Chistes de padres." }, { es: "Comerse las uñas de los pies." },
    { es: "El jugo de la basura." }, { es: "Un 'deepfake' de mi madre." }, { es: "El punto G." }, { es: "Un pañal usado." },
    { es: "El holocausto." }, { es: "Un consolador con forma de Shrek." }, { es: "El olor a semen." }, { es: "El vello púbico de Jesús." },
    { es: "Bragas usadas." }, { es: "Una relación tóxica." }, { es: "El olor a hospital." }, { es: "Un vegano diciéndote que es vegano." },
    { es: "El K-Pop." }, { es: "La regla." }, { es: "Un payaso sexualmente frustrado." }, { es: "El pene de mi ex." },
    { es: "Un 'baby shower' horrible." }, { es: "El olor a perro mojado." }, { es: "Un aborto casero." }, { es: "Un termo Stanley." },
    { es: "El culo de la uruguaya." }, { es: "Un carpincho de Nordelta." }, { es: "El Pepe." }, { es: "Un mate lavado." },
    { es: "Dos docenas de bizcochos." }, { es: "El fantasma de Gardel." }, { es: "Un choripán del Estadio." }, { es: "La rambla en invierno." },
    { es: "El culo de Luis Suárez." }, { es: "Una torta frita de un día para el otro." }, { es: "El 'vamo arriba'." }, { es: "Un 'ta, chau'." },
    { es: "El bondi." }, { es: "Una milanesa a caballo." }, { es: "El laburo." }, { es: "Quedarse sin yerba un domingo." },
    { es: "Punta del Este en enero." }, { es: "Un porteño quejándose." }, { es: "El 30 de febrero al atardecer." }, { es: "La garra charrúa." },
    { es: "El dulce de leche." }, { es: "Un 'vo, bo'." }, { es: "La fiebre aftosa." }, { es: "Un pichi." }, { es: "La Costa de Oro." },
    { es: "Un plancha." }, { es: "El Frente Amplio." }, { es: "La Coalición Multicolor." }, { es: "Una murga." }, { es: "Forlán." },
    { es: "Comprar fiado." }, { es: "El precio de la nafta." }, { es: "Un chivito completo." }, { es: "Agua Salus (con gas)." },
    { es: "El Palacio Legislativo." }, { es: "La Intendencia de Montevideo." }, { es: "Un ricardito." }, { es: "Natalia Oreiro." },
    { es: "Un puto." }, { es: "El 'vamo arriba'." }, { es: "Un 'ta, chau'." }, { es: "Un 'salado'." }, { es: "Un 'demás'." },
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
let currentPlayerIndex = -1; // Índice del array de 'playingPlayerIndexes'
let currentTurnPlayer = -1; // ID del jugador (0-9)
let gameState = 'setup'; // setup, playing, reordering, flipping_cards, judging, round_end
let submittedCards = {}; // { playerId: [cardData, ...], ... }
let selectedCardsData = []; // Cartas seleccionadas en el turno actual
let orderedCardElements = []; // Elementos DOM para reordenar
let potentialWinnerId = -1; // ID del ganador seleccionado por el lector
let currentLang = 'es';
const HAND_SIZE = 5; 

// =============================================================
// --- ELEMENTOS DEL DOM ---
// =============================================================
// Setup
let setupModal, playerCountSelect, nicknameContainer, startSetupBtn;
let pNameInputs = []; // Array de <input> para los nombres

// General
let appContainer, settingsModal, closeSettingsBtn, endBtn, settingsBtn;

// Marcadores y Manos (Arrays)
let scoreBoards = [];
let activePlayerHandElem;

// Área de Juego
let gameContainer, blackCardElem, gameMessageElem, playedCardsSlots, advanceRoundBtn;

// Botones de Acción
let confirmationButtonsDiv, confirmPlayBtn, confirmOrderBtn;
let readerConfirmationButtons, confirmWinnerBtn, changeChoiceBtn; // NUEVOS
let gameOverModal, winnerAnnouncement, finalScoresList, restartGameBtn;

// Ajustes
let volumeControl, langSelect, musicSelect;
let musicTracks = {};
let currentTrackId = 'Rey_del_asado';


// =============================================================
// --- INICIALIZACIÓN (Entry Point) ---
// =============================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ASIGNAR ELEMENTOS DOM ---
    
    // Setup
    setupModal = document.getElementById('setup-modal');
    playerCountSelect = document.getElementById('player-count');
    nicknameContainer = document.getElementById('nickname-inputs-container');
    startSetupBtn = document.getElementById('start-setup-btn');

    // General
    appContainer = document.getElementById('app-container');
    settingsModal = document.getElementById('settings-modal');
    closeSettingsBtn = document.querySelector('#settings-modal .close-btn');
    endBtn = document.getElementById('end-btn');
    settingsBtn = document.getElementById('settings-btn');
    
    // Área de Juego
    gameContainer = document.getElementById('game-container');
    blackCardElem = document.getElementById('black-card');
    gameMessageElem = document.getElementById('game-message');
    playedCardsSlots = document.getElementById('played-cards-slots');
    advanceRoundBtn = document.getElementById('advance-round-btn');

    // Botones de Acción
    confirmationButtonsDiv = document.querySelector('.confirmation-buttons');
    confirmPlayBtn = document.getElementById('confirm-play-btn');
    confirmOrderBtn = document.getElementById('confirm-order-btn');
    // NUEVOS Botones del Lector
    readerConfirmationButtons = document.getElementById('reader-confirmation-buttons');
    confirmWinnerBtn = document.getElementById('confirm-winner-btn');
    changeChoiceBtn = document.getElementById('change-choice-btn');

    // Ajustes
    volumeControl = document.getElementById('volume-control');
    langSelect = document.getElementById('lang-select');
    musicSelect = document.getElementById('music-select');
    musicTracks['Rey_del_asado'] = document.getElementById('Rey_del_asado');
    musicTracks['Viento_y_hacha'] = document.getElementById('Viento_y_hacha');
    musicTracks['Brama_el_viento'] = document.getElementById('Brama_el_viento');
    
    currentTrackId = musicSelect ? musicSelect.value : 'Rey_del_asado';

    // Asignación dinámica (ACTUALIZADO a 10)
    for (let i = 0; i < 10; i++) {
        scoreBoards.push(document.getElementById(`score-board-${i}`));
    }
    activePlayerHandElem = document.getElementById('active-player-hand');

    gameOverModal = document.getElementById('game-over-modal');
    winnerAnnouncement = document.getElementById('winner-announcement');
    finalScoresList = document.getElementById('final-scores-list');
    restartGameBtn = document.getElementById('restart-game-btn');

    // --- 2. AÑADIR LISTENERS ---

    // Setup
    playerCountSelect.addEventListener('change', updateNicknameInputs);
    startSetupBtn.addEventListener('click', setupGame);

    // General
    endBtn.addEventListener('click', triggerGameOver);
    settingsBtn.addEventListener('click', () => { settingsModal.style.display = 'block'; });
    closeSettingsBtn.addEventListener('click', () => { settingsModal.style.display = 'none'; });
    window.addEventListener('click', (event) => {
        if (event.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });

    // Acciones de Juego
    confirmPlayBtn.addEventListener('click', confirmPlay);
    confirmOrderBtn.addEventListener('click', confirmOrder);
    
    // NUEVOS Listeners del Lector
    confirmWinnerBtn.addEventListener('click', () => {
        if (potentialWinnerId === -1) return;
        chooseWinner(potentialWinnerId);
        readerConfirmationButtons.classList.add('hidden');
        potentialWinnerId = -1;
    });
    
    changeChoiceBtn.addEventListener('click', () => {
        potentialWinnerId = -1;
        playedCardsSlots.querySelectorAll('.submitted-card-container').forEach(c => c.classList.remove('potential-winner'));
        readerConfirmationButtons.classList.add('hidden');
    });

    restartGameBtn.addEventListener('click', endGame);

    advanceRoundBtn.addEventListener('click', () => {
        // 1. Repartir cartas nuevas
        Object.keys(submittedCards).forEach(playerIdStr => {
            const playerId = parseInt(playerIdStr);
            const player = players[playerId];
            if (player && submittedCards[playerId]) {
                const numPlayed = submittedCards[playerId].length;
                const newCards = dealCards(whiteDeck, numPlayed);
                player.hand.push(...newCards);
            }
        });

        // 2. Rotar lector y empezar ronda
        rotateReader();
        startNewRound();
    });

    // Ajustes
    volumeControl.addEventListener('input', (e) => {
        const newVolume = e.target.value;
        Object.values(musicTracks).forEach(track => { if (track) track.volume = newVolume; });
    });
    musicSelect.addEventListener('change', switchMusic);
    langSelect.addEventListener('change', updateLanguage);

    // --- 3. ESTADO INICIAL ---
    updateNicknameInputs(); // Generar inputs para el valor por defecto (3)
    updateLanguage();
});

// =============================================================
// --- FUNCIONES DE SETUP ---
// =============================================================

function updateNicknameInputs() {
    const count = parseInt(playerCountSelect.value, 10);
    nicknameContainer.innerHTML = ''; // Limpiar campos anteriores
    pNameInputs = []; // Reiniciar el array de inputs

    for (let i = 0; i < count; i++) {
        const settingItem = document.createElement('div');
        settingItem.className = 'setting-item';

        const label = document.createElement('label');
        label.setAttribute('for', `p-name-${i}`);
        label.innerText = `Nombre Jugador ${i + 1}:`;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `p-name-${i}`;
        input.placeholder = `Jugador ${i + 1}`;
        
        settingItem.appendChild(label);
        settingItem.appendChild(input);
        nicknameContainer.appendChild(settingItem);
        pNameInputs.push(input); // Guardar la referencia al input
    }
}

function setupGame() {
    players = [];
    const playerCount = parseInt(playerCountSelect.value, 10);

    // Ocultar TODOS los tableros y manos primero
    scoreBoards.forEach(board => board?.classList.add('hidden'));
    activePlayerHandElem.classList.add('hidden');

    // Crear jugadores y mostrar sus elementos de UI
    for (let i = 0; i < playerCount; i++) { 
        const playerName = pNameInputs[i]?.value.trim() || `Jugador ${i + 1}`;
        players.push({ id: i, name: playerName, score: 0, hand: [] });

        // Mostrar solo los elementos de los jugadores en la partida
        if (scoreBoards[i]) {
            scoreBoards[i].classList.remove('hidden');
        }
    }

    // Ocultar modal y mostrar app
    setupModal.style.display = 'none';
    appContainer.classList.remove('hidden');
    
    // Empezar la lógica del juego
    initializeGame();
}


// =============================================================
// --- FUNCIONES PRINCIPALES DEL JUEGO ---
// =============================================================

function initializeGame() {
    whiteDeck = shuffleDeck([...whiteCardsData]);
    blackDeck = shuffleDeck([...blackCardsData]);
    
    // Repartir manos iniciales
    players.forEach(player => {
        player.hand = dealCards(whiteDeck, HAND_SIZE);
    });
    
    currentReaderIndex = 0;
    updateAllScoreboards();
    updateScoreboardHighlight();
    startNewRound();
    playCurrentMusic();
}

function startNewRound() {
    gameState = 'playing';
    submittedCards = {};
    selectedCardsData = [];
    orderedCardElements = [];
    potentialWinnerId = -1;

    // Limpiar UI
    playedCardsSlots.innerHTML = '';
    playedCardsSlots.classList.remove('reordering');
    advanceRoundBtn.classList.add('hidden');
    confirmPlayBtn.classList.add('hidden');
    confirmOrderBtn.classList.add('hidden');
    confirmationButtonsDiv.classList.add('hidden');
    readerConfirmationButtons.classList.add('hidden'); // Ocultar botones del lector

    // Sacar carta negra
    if (blackDeck.length === 0) {
        // ¡Se acabaron las cartas!
        triggerGameOver();
        return; // Detener la ejecución de startNewRound
    }
    
    // Si llegamos aquí, todavía hay cartas
    currentBlackCard = blackDeck.pop();
    renderBlackCard();

    // Configurar primer turno
    let playingPlayerIndexes = players.map(p => p.id).filter(id => id !== currentReaderIndex);
    currentPlayerIndex = 0; // Índice del array playingPlayerIndexes
    currentTurnPlayer = playingPlayerIndexes.length > 0 ? playingPlayerIndexes[currentPlayerIndex] : -1;

    updateGameMessage();
    renderAllHands();
}

/**
 * Avanza al siguiente jugador (en modo "pasar el teléfono").
 * Si todos han jugado, pasa a la fase de REVELAR CARTAS.
 */
function advanceTurn() {
    selectedCardsData = [];
    confirmPlayBtn.classList.add('hidden');
    confirmOrderBtn.classList.add('hidden');
    confirmationButtonsDiv.classList.add('hidden');

    let playingPlayerIndexes = players.map(p => p.id).filter(id => id !== currentReaderIndex);
    currentPlayerIndex++;

    if (currentPlayerIndex < playingPlayerIndexes.length) {
        // Siguiente jugador
        gameState = 'playing';
        currentTurnPlayer = playingPlayerIndexes[currentPlayerIndex];
        updateGameMessage();
        renderAllHands();
    } else {
        // Todos jugaron, vamos a REVELAR
        gameState = 'flipping_cards'; // NUEVO ESTADO
        currentTurnPlayer = -1;
        updateGameMessage();
        renderAllHands();
        displaySubmittedCards(); // Esta función ahora mostrará cartas boca abajo
    }
}

function confirmPlay() {
    if (currentTurnPlayer < 0) return;
    
    const handElem = activePlayerHandElem;
    orderedCardElements = Array.from(handElem.querySelectorAll('.white-card.selected'));
    orderedCardElements.forEach(elem => {
        elem.classList.remove('selected');
        elem.onclick = null; // Quitarles el click
    });

    const orderedCardData = orderedCardElements.map(el => el.cardData);
    submittedCards[currentTurnPlayer] = orderedCardData;
    players[currentTurnPlayer].hand = players[currentTurnPlayer].hand.filter(card => !orderedCardData.includes(card));
    
    const pickCount = parseInt(currentBlackCard.pick) || 1;
    if (pickCount > 1) {
        gameState = 'reordering';
        updateGameMessage();
        renderReorderView();
        confirmPlayBtn.classList.add('hidden');
        confirmOrderBtn.classList.remove('hidden');
        confirmationButtonsDiv.classList.remove('hidden');
    } else {
        advanceTurn();
    }
}

function confirmOrder() {
    confirmOrderBtn.classList.add('hidden');
    confirmationButtonsDiv.classList.add('hidden');
    playedCardsSlots.classList.remove('reordering');
    playedCardsSlots.innerHTML = ''; 
    advanceTurn();
}

/**
 * NUEVA: Lógica para revelar un set de cartas.
 */
function flipCardSet(containerElement, playerId, cardDataArray) {
    if (gameState !== 'flipping_cards') return;

    containerElement.onclick = null; // Quitar click para revelar
    containerElement.classList.remove('facedown');
    containerElement.innerHTML = ''; // Limpiar el "X CARTA(S)"

    // Añadir las cartas reales (boca arriba)
    cardDataArray.forEach(cardData => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'white-card');
        cardElement.innerHTML = getCardText(cardData, currentLang);
        cardElement.dataset.playerId = playerId; // Guardar ID
        containerElement.appendChild(cardElement);
    });

    // Comprobar si todas las cartas han sido reveladas
    const remainingFacedown = playedCardsSlots.querySelectorAll('.facedown');
    if (remainingFacedown.length === 0) {
        transitionToChoosing();
    }
}

/**
 * NUEVA: Transición de revelar a elegir.
 */
function transitionToChoosing() {
    gameState = 'judging';
    updateGameMessage();

    // Añadir click a los contenedores para elegir
    const allContainers = playedCardsSlots.querySelectorAll('.submitted-card-container');
    allContainers.forEach(container => {
        // El primer hijo (carta) tendrá el ID del jugador
        const firstCard = container.querySelector('.white-card');
        if (firstCard) {
            const playerId = firstCard.dataset.playerId;
            container.onclick = () => selectPotentialWinner(playerId, container);
        }
    });
}

/**
 * NUEVA: El lector selecciona un *potencial* ganador.
 */
function selectPotentialWinner(playerIdStr, container) {
    if (gameState !== 'judging') return;

    potentialWinnerId = parseInt(playerIdStr);
    
    // Quitar highlight anterior
    playedCardsSlots.querySelectorAll('.submitted-card-container').forEach(c => c.classList.remove('potential-winner'));
    
    // Poner highlight nuevo
    container.classList.add('potential-winner');

    // Mostrar botones de confirmación
    readerConfirmationButtons.classList.remove('hidden');
}

/**
 * El lector confirma al ganador de la ronda.
 */
function chooseWinner(winnerPlayerId) {
    if (isNaN(winnerPlayerId)) return;
    
    gameState = 'round_end';
    const winner = players[winnerPlayerId];
    if (!winner) return;
    
    winner.score++;
    updateAllScoreboards();

    const winnerName = winner.name;
    const winnerCardsText = submittedCards[winnerPlayerId].map(c => getCardText(c, currentLang)).join(' / ');
    gameMessageElem.innerText = `¡Punto para ${winnerName}! (${winnerCardsText})`;

    // Resaltar cartas ganadoras y deshabilitar las demás
    const allContainers = playedCardsSlots.querySelectorAll('.submitted-card-container');
    allContainers.forEach(container => {
        container.onclick = null; // Deshabilitar click
        container.classList.remove('potential-winner'); // Quitar brillo azul
        
        const firstCard = container.querySelector('.white-card');
        if (firstCard && firstCard.dataset.playerId == winnerPlayerId) {
            container.classList.add('winning'); // Resaltar ganadora (verde)
        } else {
            container.classList.add('submitted'); // Opacar perdedoras
        }
    });

    advanceRoundBtn.classList.remove('hidden');
}

function endGame() {
    stopAllMusic();
    window.location.reload();
}

function triggerGameOver() {
    stopAllMusic();
    
    // 1. Ordenar jugadores por puntaje (de mayor a menor)
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    
    // 2. Anunciar al ganador (o ganadores si hay empate)
    const topScore = sortedPlayers[0].score;
    const winners = sortedPlayers.filter(p => p.score === topScore);
    
    if (winners.length > 1) {
        // Empate
        const winnerNames = winners.map(p => p.name).join(' y ');
        winnerAnnouncement.innerText = `¡Es un empate entre ${winnerNames}!`;
    } else {
        // Un solo ganador
        winnerAnnouncement.innerText = `¡El ganador es ${sortedPlayers[0].name}!`;
    }

    // 3. Limpiar y llenar la lista de puntajes
    finalScoresList.innerHTML = '';
    sortedPlayers.forEach(player => {
        const li = document.createElement('li');
        li.innerText = `${player.name}: ${player.score} puntos`;
        
        // Resaltar al ganador(es) en la lista
        if (player.score === topScore) {
            li.classList.add('winner');
        }
        
        finalScoresList.appendChild(li);
    });

    // 4. Mostrar el modal de fin de juego
    gameOverModal.style.display = 'block';
}

// =============================================================
// --- RENDERIZADO Y UI ---
// =============================================================

function renderBlackCard() {
    if (!currentBlackCard) return;
    currentBlackCard.pick = parseInt(currentBlackCard.pick) || 1;
    let text = getCardText(currentBlackCard, currentLang);
    text = text.replace(/(_+)/g, "<span>[____]</span>");
    blackCardElem.innerHTML = text;
}

/**
 * Muestra la mano del jugador activo, u oculta el contenedor si no es el turno de un jugador.
 */
function renderAllHands() {
    if (!activePlayerHandElem) return;

    // Limpiar la mano
    activePlayerHandElem.innerHTML = '';
    
    // Comprobar si un jugador está jugando (no el lector, no juzgando)
    const isPlayerTurn = (gameState === 'playing' || gameState === 'reordering') && currentTurnPlayer !== -1;

    if (isPlayerTurn) {
        // Mostrar el contenedor de la mano
        activePlayerHandElem.classList.remove('hidden');

        // Obtener el jugador actual y renderizar su mano
        const player = players[currentTurnPlayer];
        if (player && Array.isArray(player.hand)) {
            player.hand.forEach(cardData => {
                if (cardData && typeof cardData === 'object') {
                    const cardElement = createWhiteCardElement(cardData, player.id);
                    activePlayerHandElem.appendChild(cardElement);
                }
            });
        }
    } else {
        // Ocultar el contenedor si no es el turno de un jugador
        activePlayerHandElem.classList.add('hidden');
    }
    
    // Mostrar/ocultar botones de confirmación
    const showConfirm = isPlayerTurn;
    confirmationButtonsDiv.classList.toggle('hidden', !showConfirm);
    if(gameState !== 'playing') confirmPlayBtn.classList.add('hidden');
    if(gameState !== 'reordering') confirmOrderBtn.classList.add('hidden');
}

function createWhiteCardElement(cardData, playerOwnerIndex) {
    const cardElement = document.createElement('div');
    cardElement.cardData = cardData;
    cardElement.classList.add('card', 'white-card');
    cardElement.innerHTML = getCardText(cardData, currentLang);
    
    const isPlayerTurn = playerOwnerIndex === currentTurnPlayer && gameState === 'playing';
    cardElement.classList.toggle('disabled', !isPlayerTurn);
    
    if (isPlayerTurn) {
        cardElement.onclick = () => selectCard(cardData, cardElement);
    }
    
    if (isPlayerTurn && selectedCardsData.includes(cardData)) {
        cardElement.classList.add('selected');
    }
    return cardElement;
}

/**
 * Muestra todas las cartas jugadas (boca abajo o boca arriba).
 */
function displaySubmittedCards() {
    playedCardsSlots.innerHTML = '';
    
    const playerIds = shuffleDeck(Object.keys(submittedCards));

    playerIds.forEach(playerId => {
        const cardSet = submittedCards[playerId];
        if (!cardSet || cardSet.length === 0) return;

        const container = document.createElement('div');
        container.className = 'submitted-card-container';
        
        if (gameState === 'flipping_cards') {
            // NUEVO: Mostrar boca abajo
            container.classList.add('facedown');
            const cardCountText = cardSet.length > 1 ? `${cardSet.length} CARTAS` : `1 CARTA`;
            container.innerHTML = `<span>${cardCountText}</span>`;
            // Guardar los datos para revelarlos después
            container.onclick = () => flipCardSet(container, parseInt(playerId), cardSet);
        } else {
            // Lógica anterior (para fin de ronda, si es necesario)
            cardSet.forEach(cardData => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card', 'white-card');
                cardElement.innerHTML = getCardText(cardData, currentLang);
                cardElement.dataset.playerId = playerId; 
                container.appendChild(cardElement);
            });
        }
        playedCardsSlots.appendChild(container);
    });
}

function renderReorderView() {
    playedCardsSlots.innerHTML = ''; 
    playedCardsSlots.classList.add('reordering');
    
    const container = document.createElement('div');
    container.className = 'submitted-card-container reordering'; 

    orderedCardElements.forEach((cardElement, index) => {
        container.appendChild(cardElement); 
        
        if (index < orderedCardElements.length - 1) {
            const swapButton = document.createElement('button');
            swapButton.classList.add('swap-btn');
            swapButton.innerHTML = '↔';
            swapButton.dataset.index = index;
            swapButton.onclick = () => swapCards(index);
            container.appendChild(swapButton);
        }
    });
    
    playedCardsSlots.appendChild(container);
}

function swapCards(index) {
    if (index >= 0 && index < orderedCardElements.length - 1) {
        [orderedCardElements[index], orderedCardElements[index + 1]] = 
        [orderedCardElements[index + 1], orderedCardElements[index]];
        
        const playerIdx = currentTurnPlayer;
        if (submittedCards[playerIdx] && submittedCards[playerIdx].length > index + 1) {
            [submittedCards[playerIdx][index], submittedCards[playerIdx][index + 1]] = 
            [submittedCards[playerIdx][index + 1], submittedCards[playerIdx][index]];
        }
        
        renderReorderView();
    }
}

function selectCard(cardData, cardElement) {
    if (gameState !== 'playing' || !currentBlackCard) return;

    const pickCount = parseInt(currentBlackCard.pick) || 1;
    const isSelected = selectedCardsData.includes(cardData);

    if (isSelected) {
        selectedCardsData = selectedCardsData.filter(c => c !== cardData);
        cardElement.classList.remove('selected');
    } else {
        if (selectedCardsData.length < pickCount) {
            selectedCardsData.push(cardData);
            cardElement.classList.add('selected');
        }
    }

    const isSelectionComplete = selectedCardsData.length === pickCount;
    confirmPlayBtn.classList.toggle('hidden', !isSelectionComplete);
    confirmationButtonsDiv.classList.toggle('hidden', !isSelectionComplete);
}

// =============================================================
// --- MENSAJES Y MARCADORES ---
// =============================================================

function updateGameMessage() {
    let message = "";
    const texts = uiTexts[currentLang] || uiTexts['es'];
    if (!currentBlackCard) {
        gameMessageElem.innerText = "Cargando...";
        return;
    }
    const pickCount = parseInt(currentBlackCard.pick) || 1;
    const readerName = (currentReaderIndex !== -1 && players[currentReaderIndex]) ? players[currentReaderIndex].name : "Lector";

    switch (gameState) {
        case 'playing':
            message = currentTurnPlayer !== -1 && players[currentTurnPlayer] ?
                `Turno de ${players[currentTurnPlayer].name}. ${texts.pick(pickCount)}` : 
                "Esperando...";
            break;
        case 'reordering':
            message = currentTurnPlayer !== -1 && players[currentTurnPlayer] ?
                `${players[currentTurnPlayer].name}, ordena tus cartas.` :
                "Ordenando...";
            break;
        case 'flipping_cards': // NUEVO
            message = `Turno de ${readerName} (Lector). Revela las cartas...`;
            break;
        case 'judging':
            message = `Turno de ${readerName} (Lector). Elige la(s) carta(s) ganadora(s).`;
            break;
        case 'round_end':
            // El mensaje se pone en chooseWinner()
            return;
        default:
            message = "Cargando...";
    }
    gameMessageElem.innerText = message;
}

function updateAllScoreboards() {
    players.forEach((player, index) => {
        if (scoreBoards[index]) {
            const nameElem = scoreBoards[index].querySelector('.player-name');
            const scoreElem = scoreBoards[index].querySelector('.score');
            if (nameElem) nameElem.innerText = player.name;
            if (scoreElem) scoreElem.innerText = player.score;
        }
    });
}

function updateScoreboardHighlight() {
    scoreBoards.forEach((board, index) => {
        board?.classList.toggle('reader', index === currentReaderIndex);
    });
}

function rotateReader() {
    currentReaderIndex = (currentReaderIndex + 1) % players.length;
    updateScoreboardHighlight();
}

// =============================================================
// --- AJUSTES Y MÚSICA ---
// =============================================================

function updateLanguage() {
    currentLang = langSelect ? langSelect.value : 'es';
    const texts = uiTexts[currentLang] || uiTexts['es'];
    if (!texts) return;

    // Actualizar textos estáticos
    document.getElementById('end-btn').innerText = texts.end;
    document.getElementById('settings-btn').innerText = texts.settings;
    document.getElementById('confirm-play-btn').innerText = texts.confirmPlay;
    document.getElementById('confirm-order-btn').innerText = texts.confirmOrder;
    document.getElementById('advance-round-btn').innerText = texts.advanceRound;
    document.getElementById('settings-title').innerText = texts.settingsTitle;
    document.getElementById('volume-label').innerText = texts.volumeLabel;
    document.getElementById('music-label').innerText = texts.musicLabel;
    document.getElementById('lang-label').innerText = texts.langLabel;
    
    // NUEVO: Botones del lector (aunque no estén en uiTexts, los traducimos aquí)
    if(confirmWinnerBtn) confirmWinnerBtn.innerText = (currentLang === 'pt') ? "Confirmar Vencedor" : "Confirmar Ganador";
    if(changeChoiceBtn) changeChoiceBtn.innerText = (currentLang === 'pt') ? "Mudar Escolha" : "Cambiar Elección";

    // Actualizar textos dinámicos del juego (si ya empezó)
    if (gameState !== 'setup') {
        updateGameMessage();
        renderBlackCard();
        renderAllHands();
        if (gameState === 'judging' || gameState === 'round_end' || gameState === 'flipping_cards') {
            displaySubmittedCards(); // Re-renderizar cartas con el idioma nuevo
        }
    }
}

function stopAllMusic() {
    Object.values(musicTracks).forEach(track => { if (track) { track.pause(); track.currentTime = 0; } });
}

function playCurrentMusic() {
    stopAllMusic();
    const trackToPlay = musicTracks[currentTrackId];
    if (trackToPlay) {
        trackToPlay.volume = volumeControl ? volumeControl.value : 0.5;
        trackToPlay.play().catch(e => console.error("Error al reproducir audio:", e));
    }
}

function switchMusic() {
    currentTrackId = musicSelect ? musicSelect.value : currentTrackId;
    if (gameState !== 'setup') {
        playCurrentMusic();
    }
}

// =============================================================
// --- FUNCIONES AUXILIARES (Deck) ---
// =============================================================

function shuffleDeck(deck) {
    let array = [...deck];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function dealCards(deck, count) {
    const hand = [];
    for (let i = 0; i < count; i++) {
        const card = drawWhiteCard(); 
        if (card) hand.push(card);
    }
    return hand;
}

function drawWhiteCard() {
    if (whiteDeck.length === 0) {
        console.log("Rellenando mazo de cartas blancas...");
        whiteDeck = shuffleDeck([...whiteCardsData]);
    }
    if (whiteDeck.length > 0) {
        return whiteDeck.pop();
    }
    return null; 
}

function getCardText(card, lang) {
    if (!card || typeof card !== 'object') return "?";
    const esText = card.es || "?";
    const ptText = card.pt || esText;
    if (lang === 'bi') return `${esText}<hr>${ptText}`;
    if (lang === 'pt') return ptText;
    return esText;
}