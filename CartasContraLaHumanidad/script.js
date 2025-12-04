/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// =============================================================
// --- DATOS DEL JUEGO (Cartas y Textos) ---
// =============================================================
const uiTexts = {
    es: { start: "Iniciar Partida", end: "Terminar Partida", settings: "Ajustes", settingsTitle: "Ajustes", volumeLabel: "Volumen de Música", musicLabel: "Música de Fondo", langLabel: "Idioma", pick: (num) => `Elige ${num} carta(s)`, score: "Puntos:", confirmPlay: "Confirmar Jugada", confirmOrder: "Confirmar Orden", advanceRound: "Siguiente Ronda" },
    pt: { start: "Iniciar Jogo", end: "Terminar Jogo", settings: "Configurações", settingsTitle: "Configurações", volumeLabel: "Volume da Música", musicLabel: "Música de Fundo", langLabel: "Idioma", pick: (num) => `Escolha ${num} carta(s)`, score: "Pontos:", confirmPlay: "Confirmar Jogada", confirmOrder: "Confirmar Ordem", advanceRound: "Próxima Rodada" },
    en: { start: "Start Game", end: "End Game", settings: "Settings", settingsTitle: "Settings", volumeLabel: "Music Volume", musicLabel: "Background Music", langLabel: "Language", pick: (num) => `Pick ${num} card(s)`, score: "Points:", confirmPlay: "Confirm Play", confirmOrder: "Confirm Order", advanceRound: "Next Round" }
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
    { es: "El 2020 fue malo, pero al menos no tuvimos _.", pick: 1 }, { es: "Mi sabor de helado favorito es _.", pick: 1 }, { es: "El nuevo villano Argentino de Marvel es _.", pick: 1 },
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
    { es: "El plan perfecto para el domingo: _ con _.", pick: 2 }, { es: "Mi suegra me cocinó _ con _.", pick: 2 }, { es: "La razón por la que no confío en los Argentinos es _.", pick: 1 },
    { es: "Lo único más lento que un trámite del BPS es _.", pick: 1 }, { es: "La nueva moda en Pocitos es _.", pick: 1 }, { es: "Mi jefe me despidió por _.", pick: 1 },
    { es: "El clásico se define por _ y _.", pick: 2 }, { es: "Me tomé un bondi equivocado y terminé en _ con _.", pick: 2 }, { es: "Los Brasileros son mejores que los Argentinos en _.", pick: 1 },
    { es: "La UDELAR ahora tiene una carrera de 'Licenciatura en _ y _'.", pick: 2 }, { es: "El secreto de una buena pascualina es _ y _.", pick: 2 }, { es: "El asado uruguayo no es lo mismo sin _ y _.", pick: 2 },
    { es: "Este país no avanza por culpa de _ y _.", pick: 2 }, { es: "Rayos! ¿Donde deje _?", pick: 1 }, { es: "No puedo dormir por culpa de _.", pick: 1 }, { es: "No me gusta generalizar pero los Uruguayos be like: _.", pick: 1 },
    { es: "Mi vida es un chiste, la punchline es _.", pick: 1 }, { es: "El verdadero porno no es el cuerpo, es _.", pick: 1 },
    { es: "¿Cual es la razón de mi adicción? _.", pick: 1 }, { es: "Si la vida es corta, la mía será recordada por _.", pick: 1 },
    { es: "El Darwinismo está siendo prueba por _.", pick: 1 }, { es: "Lo que mis padres nunca me contaron era sobre _.", pick: 1 },
    { es: "Cero puntos para conducta pero infinito puntos para intentar _.", pick: 1 }, { es: "Mi fetiche incondicional es sentir el olor de _.", pick: 1 },
    { es: "¿Cómo le explico a mis hijos que vieron _?", pick: 1 }, { es: "La única razón por la que sigo vivo es para probar _.", pick: 1 },
    { es: "Eso no se dice en la mesa, pero sí se hace con _.", pick: 1 }, { es: "Mi banda sonora de vida tiene tema de _ y _.", pick: 2 },
    { es: "Si fuera presidente, legalizaría _ pero prohibiría _.", pick: 2 }, { es: "Lo más perturbador que he visto en internet fue _ con _.", pick: 2 },
    { es: "La mayoría de edad me llegó cuando descubrí _.", pick: 1 }, { es: "Mi mayor logro es hacer _ sin que se enteren.", pick: 1 },
    { es: "El buen humor requiere _ y una alta dosis de _.", pick: 2 }, { es: "¿Que pasa si mezclas _ con _? Terminas en prisión.", pick: 2 },
    { es: "La lista negra de Netflix incluye mis videos de _.", pick: 1 }, { es: "Los boomers no entienden que _ es un arte.", pick: 1 },
    { es: "Mi confesión más oscura es que disfruto _ mientras _.", pick: 2 }, { es: "El algoritmo de YouTube se da cuenta cuando busco _.", pick: 1 },
    { es: "¿Lo peor? Que alguien descubra que he estado pensando en _.", pick: 1 }, { es: "Mi terapia cuesta 150 pesos porque hablo de _.", pick: 1 },
    { es: "Lo que mis amigos no saben es que _ me hace llorar.", pick: 1 }, { es: "El sueño más recurrente que tengo es con _ y _.", pick: 2 },
    { es: "Juraba que nunca haría _, pero aquí estoy con _.", pick: 2 }, { es: "La culpa post-orgasmo es por pensar en _.", pick: 1 },
    { es: "Mi contraseña de todo es el nombre de _, por razones obvias.", pick: 1 }, { es: "La verdad incómoda es que _ se ve mejor que _.", pick: 2 },
    { es: "Cuando muera, dejaré todo a quien encuentre _.", pick: 1 }, { es: "El amor es lindo, pero nada se compara con _.", pick: 1 },
    { es: "Mi identidad secreta en internet es 'El Rey del _'.", pick: 1 }, { es: "La medicina moderna descubrió que _ cura la depresión.", pick: 1 },
    { es: "Científicamente comprobado: _ hace que la gente tenga _ en la cabeza.", pick: 2 }, { es: "Lo que realmente me enciende es _ sin protección.", pick: 1 },
    { es: "Mi primer beso fue con _ y desde entonces todo fue _.", pick: 2 }, { es: "La vergüenza eterna de mi vida es haber hecho _ con _.", pick: 2 },
    { es: "¿Soy un monstruo? Tal vez. ¿Fue divertido? Definitivamente fue _.", pick: 1 }, { es: "Lo que me proporciona el máximo placer en la vida es _.", pick: 1 },
    { es: "Mi lista de cosas que probar antes de morir está encabezada por _.", pick: 1 }, { es: "La ventaja de tener depresión es que _ no me afecta.", pick: 1 },
    { es: "La iglesia condena _, pero todos lo hacemos.", pick: 1 }, { es: "Mi fetiche es ver a alguien sufrir por _.", pick: 1 },
    { es: "Lo que enseña mi iglesia es que _ es pecado.", pick: 1 }, { es: "En el porno van directo a _, sin saludar.", pick: 1 },
    { es: "La razón secreta por la que los curas están solos es _.", pick: 1 }, { es: "Mi colección privada de videos es toda sobre _.", pick: 1 },
    { es: "El mayor tabú es hacer _ en público.", pick: 1 }, { es: "Mi therapist me preguntó si alguna vez hice _.", pick: 1 },
    { es: "Lo que me excita mientras conducen es _.", pick: 1 }, { es: "El número de llamadas que me hacen por _ es vergonzoso.", pick: 1 },
    { es: "¿Cuál es mi mayor arrepentimiento? Haber intentado _.", pick: 1 }, { es: "Lo que mi madre no sabe es que disfruto _.", pick: 1 },
    { es: "La razón por la que fui a la cárcel fue por intentar _.", pick: 1 }, { es: "Mi próximo tattoo será el nombre de _ en el pecho.", pick: 1 },
    { es: "Lo que realmente pasa en el closet es _.", pick: 1 }, { es: "En los juegos de mesa, siempre termino haciendo _.", pick: 1 },
    { es: "Mi fantasía recurrente es con _ y _.", pick: 2 }, { es: "Si pudiera viajar en el tiempo, viajaría a cuando descubrí _.", pick: 1 },
    { es: "La verdad detrás de mi sonrisa es _.", pick: 1 }, { es: "En la próxima reunión de familia voy a revelar _.", pick: 1 },
    { es: "Lo que mis ojos vieron y nunca pueden olvidar fue _.", pick: 1 }, { es: "El día que empecé a odiar fue cuando conocí _.", pick: 1 },
    { es: "Mi sueño mojado recurrente tiene al menos tres _ y _.", pick: 2 }, { es: "Lo que realmente significa tener clase es saber cuándo _ es aceptable.", pick: 1 },
    { es: "El motivo por el que me deportaron fue por llevar _.", pick: 1 }, { es: "Nada arruina una cena familiar como hablar de _.", pick: 1 },
    { es: "Lo que la policía encontró en mi casa fue _.", pick: 1 }, { es: "La razón por la que tengo restricción de órdenes es _.", pick: 1 },
    { es: "Mi streaming se cerró por tener _ de fondo.", pick: 1 }, { es: "El vídeo viral que arruinó mi vida mostraba _.", pick: 1 },
    { es: "En la escuela, los bullies me llamaban 'El Rey de _'.", pick: 1 }, { es: "Lo único que me mantiene en forma es el trauma de _.", pick: 1 },
    { es: "El secreto para no envejecer es inyectarse _.", pick: 1 }, { es: "Mi testamento dice que todo va para quien ame _ como yo.", pick: 1 },
    { es: "La razón por la que abandoné el seminario fue _.", pick: 1 }, { es: "Mi próximo proyecto filantropía es recolectar fondos para _.", pick: 1 },
    { es: "¿Lo peor de la vejez? Que _ no funcione como antes.", pick: 1 }, { es: "El médico me dijo que debo evitar _ para vivir más.", pick: 1 },
    { es: "La razón por la que perdí mis dientes fue _.", pick: 1 }, { es: "Lo que apareció en el test de drogas fue _.", pick: 1 },
    { es: "En la próxima religión que funde, veneraremos a _.", pick: 1 }, { es: "Mi confesión más oscura es que pagué dinero por _.", pick: 1 },
    { es: "La maldición de mi familia es que siempre terminamos haciendo _.", pick: 1 }, { es: "Después de años de negarlo, admito que _ es mi verdadera pasión.", pick: 1 },
    { es: "El documental sobre mi vida se llama '_: Una historia de supervivencia'.", pick: 1 }, { es: "Lo que realmente duele no es el rechazo, es que lo hizo con _.", pick: 1 },
    { es: "Mi canción de protesta va contra _.", pick: 1 }, { es: "El diario que encontraron en mi casa revelaba una obsesión con _.", pick: 1 },
    { es: "La reunión de exalumnos fue incómoda porque todos sabían que yo _ con _.", pick: 2 }, { es: "Lo que me hace llorar es pensar en _ y _.", pick: 2 },
    { es: "Mi fetiche prohibido es observar a otros haciendo _.", pick: 1 }, { es: "El email que accidentalmente envié al jefe contenía fotos de _.", pick: 1 },
    { es: "La razón de mi divorcio fue que ella descubrió mi colección de _.", pick: 1 }, { es: "Mi mayor miedo es que alguien publique el vídeo de mí haciendo _.", pick: 1 },
    { es: "Lo que me hace sentir vivo es _ combinado con riesgo de _.", pick: 2 }, { es: "Mi próximo libro se titula 'Confesiones de un adicto a _'.", pick: 1 },
    { es: "El sueño recurrente que tengo desde niño es con _ y _.", pick: 2 }, { es: "Lo que nadie sabe es que fui arrestado por intentar _ a alguien en _.", pick: 2 },
    { es: "Mi Instagram es solo fotos de _ con filtros de _.", pick: 2 }, { es: "¿Mi mayor logro? Aprender a disfrutar de _ sin sentir culpa.", pick: 1 },
    { es: "La razón por la que no vuelvo a mi pueblo es porque _ me vio _.", pick: 2 }, { es: "En el futuro, me arrepentiré de haber dicho que amo _.", pick: 1 },
    { es: "Lo que realmente enseña la pornografía es cómo hacer _ correctamente.", pick: 1 }, { es: "Mi terapeuta se sorprendió cuando le confesé que disfruto _.", pick: 1 },
    { es: "La noche más salvaje de mi vida involucró _, _ y una cámara de seguridad.", pick: 2 }, { es: "El motivo por el que no puedo volver a ese restaurante es _.", pick: 1 },
    { es: "Lo que sueno cuando digo que tengo 'trabajo de noche' es que estoy haciendo _.", pick: 1 }, { es: "Mi mayor vergüenza profesional fue cuando el cliente descubrió que _.", pick: 1 },
    { es: "El grupo de chat se llamaba 'Amigos de _' y terminó siendo arrestado.", pick: 1 }, { es: "Lo que pasó en Vegas no se quedó en Vegas, se viralizó en _.", pick: 1 },
    { es: "Mi lista de reproducción de Spotify se llama 'Soundtrack de _'.", pick: 1 }, { es: "La razón por la que tengo un alias es para esconder mi verdadera identidad como _.", pick: 1 },
    { es: "Lo que el ejército me enseñó no fue combate, sino cómo _.", pick: 1 }, { es: "Mi segundo trabajo es secretamente _ en _.", pick: 2 },
    { es: "El viaje a Las Vegas terminó con una foto comprometedora de mí con _.", pick: 1 }, { es: "Lo que mi novia no sabe es que durante el sexo pienso en _.", pick: 1 },
    { es: "La razón por la que pierdo dinero en apuestas es mi adicción a _.", pick: 1 }, { es: "En el funeral de mi abuelo, revelé que él siempre quiso _.", pick: 1 },
    { es: "Mi fantasía que nunca le contaré a nadie es _.", pick: 1 }, { es: "La verdad oscura de mi éxito es que lo debo a _.", pick: 1 },
    { es: "Lo que apareció en mi expediente policial fue el incidente de _.", pick: 1 }, { es: "Mi tatuaje de la espalda es un tributo a _ y eso me avergüenza.", pick: 1 },
    { es: "¿Sabías que _ fue banido de internet por hacer _?", pick: 2 }, { es: "El podcast que escucho en secreto trata sobre 'La ciencia detrás de _'.", pick: 1 },
    { es: "Mi ex escribió una novela sobre nuestro tiempo juntos y el protagonista es _.", pick: 1 }, { es: "La razón por la que no tengo redes sociales es porque una vez me etiquetaron haciendo _.", pick: 1 },
    { es: "Lo que cambió mi vida para siempre fue el día que intenté _.", pick: 1 }, { es: "Mi confesión de lecho de muerte será que siempre amé _ en secreto.", pick: 1 },
    { es: "En el acta notarial que firme reconozco que _ fue idea mía.", pick: 1 }, { es: "Lo que duele más que nada es que ella me dejó por alguien que disfruta de _.", pick: 1 },
    { es: "El grupo de apoyo al que asisto en secreto es para personas adictas a _.", pick: 1 }, { es: "Mi mayor éxito escondido en las redes es cuando _ compartió mi contenido sobre _.", pick: 2 },
    { es: "Si revisan mi historial de búsqueda, van a descubrir mi obsesión con _.", pick: 1 }, { es: "La peor mentira que le conté a mi familia fue que estaba en _ cuando en realidad estaba haciendo _.", pick: 2 },
    { es: "Lo que realmente oculta mi biografía de LinkedIn es que me especializó en _.", pick: 1 }, { es: "Mi confesión de TikTok que eliminé en 5 minutos fue sobre _.", pick: 1 },
    { es: "La razón por la que no vuelvo al gimnasio es porque una vez me vieron _ en el baño.", pick: 1 }, { es: "El secreto que guardé durante años es que yo era responsable de _.", pick: 1 },
    { es: "Mi mayor miedo en la vida es que alguien descubra que yo _ con _.", pick: 2 }, { es: "Lo que hice durante la cuarentena que nunca admitiré es _.", pick: 1 },
    { es: "El DM que nunca debí enviar fue a _ diciéndole que _.", pick: 2 }, { es: "Mi pasión secreta que alimenta desde hace 10 años es _.", pick: 1 }
];

const whiteCardsData = [
    { es: "Jeffo" }, {es: "Lucas"}, { es: "Miro" }, { es: "Florencia" }, { es: "Carla" }, { es: "Cuidado con el siguiente jugador! (gestos exagerados)" }, { es: "Callate!" }, { es: "Johnny Depp" }, { es: "El pene de Henry Cavil" }, { es: "Una patada bien acomodada en los testiculos" },
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
    { es: "Fingir ser una chica en internet" }, { es: "El suicidio siempre es la solución" }, { es: "Huerfanos" }, { es: "Destrucción mutua asegurada" },
    { es: "Un test para saber que tan negro eres" }, { es: "Enanos de circo" }, { es: "Un niño ciego, sordo y mudo" },
    { es: "Las buenas drogas" }, { es: "Estar muy fumado" }, { es: "Estar muy borracho" }, { es: "Cientos y cientos de ratas gigantes" },
    { es: "Spiderman biologicamente correcto que lanza telarañas por el ano" }, { es: "Bebés muertos" }, { es: "Padres muertos" },
    { es: "Enanos disfrazados" }, { es: "Humillación sexual" }, { es: "Puto el que lo lea" }, { es: "Tiroteo escolar" },
    { es: "Tu hermana que es puta, reputa y recontraputa, joder que puta es" }, { es: "Flashbacks de Vietnam" }, { es: "Dulce, dulce venganza" },
    { es: "Solo un poquitito de violación anal" }, { es: "Putas Harry! PUTAS!" }, { es: "Que te den matraca hasta que tu culo resista" },
    { es: "La puta que te remil pario, no tengo nada" }, { es: "Sexo sadomasoquista" }, { es: "Bailar como retrasado en la autopista" },
    { es: "Los Amish" }, { es: "Erección al pasar por una guardería" }, { es: "Un colegio de monjas muy zorras" }, { es: "Nazis" },
    { es: "Gente que nunca conocerá el dulce placer de caminar" }, { es: "La abuela desnuda" }, { es: "Golpes muy fuertes en la entrepierna" },
    { es: "LA CAJA! LA CAJA!" }, { es: "La paz mundial" }, { es: "Feminazis enojadas" }, { es: "Gente fea" }, { es: "Una paja triste" }, { es: "Amigos con derechos" },
    { es: "Un amigo que siempre esta dispuesto a hacerte una paja no homo" }, { es: "Gente tonta" }, { es: "Chinos trabajando en una fabrica ilegal" },
    { es: "Tener vagina" }, { es: "Labios vaginales tan grandes que aplauden al caminar" }, { es: "La concha peluda" },
    { es: "El clítoris" }, { es: "La comunidad LGBTQ+ y mucho más" }, { es: "Aliento de pene" }, { es: "Cebollas" },
    { es: "Lamer el exterior de un ano y no terminar el trabajo" }, { es: "Cuando te tiras un pedo y te cagas un poquito" }, { es: "Eutanasia" },
    { es: "Ser árabe y explotar" }, { es: "Adolescentes virgenes" }, { es: "Usar mi ano como trompeta en el show de talentos" },
    { es: "Mi culo negro" }, { es: "My nigga" }, { es: "Minas terrestres" }, { es: "El negro Mandela" }, { es: "El capa preta" },
    { es: "2012" }, { es: "Penes" }, { es: "El pene" }, { es: "Una sexy rubia con paquete" }, { es: "Bro?" }, { es: "Mi vida sexual" },
    { es: "Vituber furro" }, { es: "SIDA!" }, { es: "Un tumor cerebral" }, { es: "Argentinos" }, { es: "Brasileros" },
    { es: "Decir 'estamos llegando' cuando recién salgo de casa." }, { es: "Un cheto hablando spanglish" }, { es: "La frontera, otra vez" },
    { es: "Mi 'dieta' que empieza todos los lunes." }, { es: "El 'trabajo soñado' (pagar facturas)." }, { es: "'Solo una más' (la octava cerveza)." },
    { es: "La silla donde apilo toda mi ropa limpia." }, { es: "'No tengo nada que ponerme' (frente a un armario lleno)." },
    { es: "Mi impresionante habilidad para procrastinar." }, { es: "El audio de WhatsApp de 3 minutos que podría haber sido un 'sí'." },
    { es: "'Solo estoy mirando' (antes de gastar todo mi sueldo)." }, { es: "El 'ya lo leí' a los términos y condiciones." },
    { es: "Una opinión muy fuerte basada en un titular que no leí." }, { es: "Quejarme de estar cansado todo el día y no poder dormir en la noche." },
    { es: "El tupper que dejé en la oficina hace dos meses." }, { es: "'Lo vi en un TikTok, así que debe ser cierto'." }, { es: "Mi 'personalidad única' (que es igual a la de todos los demás)." },
    { es: "La ansiedad." }, { es: "Niños de africa" }, { es: "Necro-zoofilia" }, { es: "Problemitas con papá" }, { es: "Silencio" }, { es: "Las milipilis" },
    { es: "Masculinidad frájil" }, { es: "Sexo sucio y salvaje" }, { es: "Sexo oral no reciproco" }, { es: "Un billete de 3 dolares" },
    { es: "Los fachas" }, { es: "La violacion de todos los derechos humanos" }, { es: "Vladimir Putin" }, { es: "Hitler" }, { es: "Lacalle" },
    { es: "72 virgenes" }, { es: "Insesto" }, { es: "Gordofobia" }, { es: "Gordo panceta" }, { es: "Desayunar con el presidente"},
    { es: "Anorexia" }, { es: "Un zopapo" }, { es: "Pedofilos" }, { es: "Monstruar" }, { es: "Mujeres" }, { es: "3cm" }, { es: "Cagarse en la sopa"},
    { es: "Fascismo" }, { es: "Tu mamá" }, { es: "Racismo" }, { es: "Bidon de tuco" }, { es: "Un burro volador" }, { es: "Represión" },
    { es: "Pizza con piña" }, { es: "La economía" }, { es: "El sentido de la vida" }, { es: "Un político honesto" }, { es: "Transporte de fluidos" },
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
    { es: "El ano de Batman" }, { es: "Nicolas Cage" }, { es: "Un velocirraptor vestido de cura" }, { es: "Hacer caca en el trabajo" },
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
    { es: "Un puto." }, { es: "Un 'boludo'." }, { es: "Un 'che vos'." }, { es: "Un 'salado'." }, { es: "Un 'demás'." },
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
    { es: "Un grafiti de 'Nacional'." }, { es: "La feria de Tristán Narvaja." }, { es: "El olor a chivito." },
    { es: "Una foto sin contexto en WhatsApp." }, { es: "Mi dildo de silicona." }, { es: "Un video de TikTok sin sentido." },
    { es: "La depresión clínica." }, { es: "Una crisis existencial a las 3 AM." }, { es: "Mi historial de búsqueda de Google." },
    { es: "Un chivo chupacabra." }, { es: "Mi adicción a la pornografía." }, { es: "Testículos gigantes." },
    { es: "Una botella de vodka." }, { es: "Mi ex con su nuevo novio." }, { es: "El Viagra." },
    { es: "Una enfermedad de transmisión sexual." }, { es: "La marihuana." }, { es: "Mi teléfono destrozado." },
    { es: "Un condón roto." }, { es: "Levitra." }, { es: "Mi madre en Tinder." },
    { es: "Una foto del pene de mi profesor." }, { es: "Lamer un culo." }, { es: "Mi primo." },
    { es: "Un enema." }, { es: "Crack." }, { es: "Herpes." },
    { es: "Mi tío borracho en Navidad." }, { es: "Grindr." }, { es: "La clamidia." },
    { es: "El Grinch." }, { es: "Quebracho rojo." }, { es: "Mi vecino viendo porno." },
    { es: "Un órgano trasplantado." }, { es: "La brujería." }, { es: "Mi psicóloga." },
    { es: "Levitra pero para mujeres." }, { es: "Esperma." }, { es: "Fetiches raros." },
    { es: "Esconder dinero en el culo." }, { es: "Los Simpson porno." }, { es: "Comer culo en el parque." },
    { es: "Una vagina de madera." }, { es: "El fetichismo con pies." }, { es: "Ser violado por un caballo." },
    { es: "Besarse con alguien del mismo género." }, { es: "Una cama mojada de semen." }, { es: "El incesto." },
    { es: "La zoofilia." }, { es: "Pedofilia." }, { es: "Necrofilia." },
    { es: "La obsesión sexual." }, { es: "Mi abuela desnuda." }, { es: "Un strap-on gigante." },
    { es: "Semen en la cara." }, { es: "Un orgasmo simulado." }, { es: "Una paja triste." },
    { es: "Mi madre viendo porno." }, { es: "La prostitución." }, { es: "Un gigoló." },
    { es: "Las tetas de mi profesora." }, { es: "Un sexto sentido pero sexual." }, { es: "Eyacular demasiado rápido." },
    { es: "Una noche de sexo salvaje." }, { es: "Desnudarse en público." }, { es: "Hacer ejercicio desnudo." },
    { es: "Mi jefe en ropa interior." }, { es: "Un trío." }, { es: "Una orgía." },
    { es: "Un vibrador." }, { es: "Masturbación." }, { es: "Posiciones sexuales imposibles." },
    { es: "El sexo anal." }, { es: "Una violación simulada." }, { es: "Amarrarse durante el sexo." },
    { es: "Garganta profunda." }, { es: "Sexo en la calle." }, { es: "Una cámara de seguridad grabando." },
    { es: "Mi novio infiel." }, { es: "Una prostituta cara." }, { es: "El sexo sin condominio." },
    { es: "Un dildo sucio." }, { es: "Sexo durante el período." }, { es: "Una mancha de semen en la pared." },
    { es: "Mi ex con un plug anal." }, { es: "Una polla mojada." }, { es: "Fluidos corporales." },
    { es: "Un gloryholemasculino." }, { es: "Lactancia sexual." }, { es: "Eyacular en la boca." },
    { es: "Feces." }, { es: "Orina." }, { es: "Una botella de lubricante." },
    { es: "Mi primer porno." }, { es: "Una cita de sexo casual." }, { es: "Infidelidad digital." },
    { es: "Un video de seguridad de mi dormitorio." }, { es: "Mi diario secreto con fantasías." }, { es: "Una webcam hackeada." },
    { es: "Mi fantasía más oscura." }, { es: "Un traje de latex." }, { es: "Cadenas y esposas." },
    { es: "Alcohol y sexo." }, { es: "Drogas durante el sexo." }, { es: "Sexo con miedo a que descubran." },
    { es: "Un DVD rayado de películas para adultos." }, { es: "Mi novia/o con mi mejor amigo." }, { es: "Una cámara oculta en el baño." },
    { es: "Abusadores sexuales." }, { es: "Violadores en serie." }, { es: "Asesinos con impulsos sexuales." },
    { es: "El psicópata de mi cuadra." }, { es: "Esteroides anabólicos." }, { es: "Cirugía de aumento de glúteos." },
    { es: "Un cuerpo modificado quirúrgicamente." }, { es: "Silicona en los labios." }, { es: "Botox extremo." },
    { es: "Mi obsesión por los hombres." }, { es: "Mi obsesión por las mujeres." }, { es: "Mi falta de autoestima." },
    { es: "Una vejiga incontinente." }, { es: "Disfunción eréctil." }, { es: "Eyaculación precoz." },
    { es: "Ausencia total de libido." }, { es: "Un pene pequeño." }, { es: "Un culo enorme." },
    { es: "Senos enormes." }, { es: "Labios vaginales colgantes." }, { es: "Un clítoris prominente." },
    { es: "Acné en el culo." }, { es: "Estrías sexuales." }, { es: "Celulitis en las nalgas." },
    { es: "Hemorroides sangrantes." }, { es: "Un ano desgarrado." }, { es: "Prolapso rectal." },
    { es: "Mi peso." }, { es: "Mi calvicie." }, { es: "Mi poca estatura." },
    { es: "Mi nariz grande." }, { es: "Mis orejas de soplillo." }, { es: "Mi sobrepeso extremo." },
    { es: "Mi delgadez patológica." }, { es: "Mis estrías." }, { es: "Mis cicatrices de acné." },
    { es: "Mi piel grasosa." }, { es: "Mi halitosis." }, { es: "Mi olor corporal." },
    { es: "Un espejo de cuerpo entero." }, { es: "Mi reflejo en el espejo." }, { es: "Una balanza digital." },
    { es: "Una cinta métrica." }, { es: "Un calendario de desnudos." }, { es: "Una revista pornográfica vintage." },
    { es: "Mi colección de juguetes adultos." }, { es: "Mi suscripción a OnlyFans." }, { es: "Mi cartera de fotos provocativas." },
    { es: "Mi galería oculta en el teléfono." }, { es: "Mis videos caseros." }, { es: "Mi diario de sexo." },
    { es: "Mis fantasías por escrito." }, { es: "Mi lista de deseos sexuales." }, { es: "Mi bucket list obsceno." },
    { es: "Un bálsamo labial de marihuana." }, { es: "Una botella de tequila." }, { es: "Un cigarro de marihuana." },
    { es: "Mi pareja de experimentación." }, { es: "Mi aventura de una noche." }, { es: "Mi amante secreto." },
    { es: "Mi doble vida." }, { es: "Mi perfil falso en redes." }, { es: "Mi aplicación de citas descargada." },
    { es: "Mi contraseña de pornografía." }, { es: "Mi cuenta Premium de porno." }, { es: "Mi algoritmo de recomendación." },
    { es: "Un orgasmo alucinante." }, { es: "Mi mejor noche de sexo." }, { es: "Una experiencia sexual inesperada." },
    { es: "Un encuentro casual." }, { es: "Mi tipo ideal." }, { es: "Mi celoso." },
    { es: "Mis padres teniendo sexo." }, { es: "Mi vecino desnudo." }, { es: "Mi profesor guapo." },
    { es: "La gente que veo en el transporte público." }, { es: "Mi colega de trabajo." }, { es: "Mi pareja del gimnasio." },
    { es: "El barista que me prepara el café." }, { es: "Mi dentista." }, { es: "Mi dermatólogo." }
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
let targetPoints = 0; // Puntos objetivo para ganar (0 = sin límite)
const HAND_SIZE = 5; 

// =============================================================
// --- ELEMENTOS DEL DOM ---
// =============================================================
// Setup
let setupModal, playerCountSelect, nicknameContainer, startSetupBtn;
let pNameInputs = []; // Array de <input> para los nombres

// General
let appContainer, settingsModal, closeSettingsBtn, endBtn, settingsBtn;
let setupSettingsBtn, globalBackBtn; // NUEVOS botones

// Marcadores y Manos (Arrays)
let scoreBoards = [];
let activePlayerHandElem;

// Área de Juego
let gameContainer, blackCardElem, gameMessageElem, playedCardsSlots, advanceRoundBtn;

// Botones de Acción
let confirmationButtonsDiv, confirmPlayBtn, confirmOrderBtn;
let readerConfirmationButtons, confirmWinnerBtn, changeChoiceBtn; // NUEVOS
let gameOverModal, winnerAnnouncement, finalScoresList, restartGameBtn;

// Variables para revelar mano
let revealHandBtn;
let handRevealed = false;

// Ajustes
let volumeControl, langSelect, musicSelect;
let musicTracks = {};
let currentTrackId = 'none';


// =============================================================
// --- INICIALIZACIÓN (Entry Point) ---
// =============================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ASIGNAR ELEMENTOS DOM ---
    
    // Setup
    setupModal = document.getElementById('setup-modal');
    playerCountSelect = document.getElementById('player-count');
    targetPointsSelect = document.getElementById('target-points');
    nicknameContainer = document.getElementById('nickname-inputs-container');
    startSetupBtn = document.getElementById('start-setup-btn');
    setupSettingsBtn = document.getElementById('setup-settings-btn'); // NUEVO

    // General
    appContainer = document.getElementById('app-container');
    settingsModal = document.getElementById('settings-modal');
    closeSettingsBtn = document.querySelector('#settings-modal .close-btn');
    globalBackBtn = document.getElementById('global-back-btn'); // NUEVO
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
    musicTracks['Bajo_el_cielo'] = document.getElementById('Bajo_el_cielo');
    musicTracks['Cielo_del_sur'] = document.getElementById('Cielo_del_sur');
    musicTracks['Cielo_oriental'] = document.getElementById('Cielo_oriental');
    
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
    exitGameBtn = document.getElementById('exit-game-btn');

    // --- 2. AÑADIR LISTENERS ---

    // Setup
    playerCountSelect.addEventListener('change', updateNicknameInputs);
    startSetupBtn.addEventListener('click', setupGame);
    setupSettingsBtn.addEventListener('click', () => { settingsModal.style.display = 'block'; }); // NUEVO

    // General
    endBtn.addEventListener('click', triggerGameOver);
    settingsBtn.addEventListener('click', () => { settingsModal.style.display = 'block'; });
    closeSettingsBtn.addEventListener('click', () => { settingsModal.style.display = 'none'; });
    globalBackBtn.addEventListener('click', () => { window.location.href = '../index.html'; }); // NUEVO
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

    exitGameBtn.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

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
    targetPoints = parseInt(targetPointsSelect.value, 10); // Capturar puntos objetivo

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
    handRevealed = false;

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

// ---------- Traducción automática de cartas ----------
const TRANSLATE_API_URL = 'https://api.mymemory.translated.net/get'; // MyMemory - Sin CORS issues
let translationQueue = {}; // { 'pt': [...cartas], 'en': [...cartas] }
let isTranslatingPt = false; // Bandera para portugués
let isTranslatingEn = false; // Bandera para inglés
let translationCache = {}; // Cache de traducciones: { 'es|pt|texto': 'traducción' }

async function translateText(text, source = 'es', target = 'pt') {
    if (!text) return text;
    
    // Limpiar el texto de caracteres especiales (guiones bajos que son placeholders)
    const textToTranslate = text.replace(/_+/g, '').trim();
    if (!textToTranslate) return text; // Si solo tenía guiones, devolver original
    
    // Verificar cache
    const cacheKey = `${source}|${target}|${textToTranslate}`;
    if (translationCache[cacheKey]) {
        return translationCache[cacheKey];
    }
    
    try {
        // Mapeo de códigos de idioma para MyMemory
        const langMap = { 'pt': 'pt-PT', 'en': 'en-US' };
        const targetLang = langMap[target] || target;
        
        const params = new URLSearchParams({
            q: textToTranslate,
            langpair: `${source}|${targetLang}`
        });
        
        const res = await fetch(`${TRANSLATE_API_URL}?${params.toString()}`);
        
        if (res.status === 429) {
            console.warn('Rate limit alcanzado, esperando...');
            await new Promise(r => setTimeout(r, 2000)); // Esperar 2 segundos
            return text; // Devolver original
        }
        
        if (!res.ok) {
            console.error('Error en traducción:', res.status);
            return text;
        }
        
        const json = await res.json();
        
        // MyMemory devuelve: { responseStatus: 200, responseData: { translatedText: "..." } }
        if (json.responseStatus === 200 && json.responseData.translatedText) {
            const translated = json.responseData.translatedText;
            translationCache[cacheKey] = translated; // Cachear
            return translated;
        }
        
        console.warn('Respuesta inesperada de MyMemory:', json);
        return text;
    } catch (e) {
        console.error('Excepción traduciendo texto:', e);
        return text;
    }
}

async function translateCardsList(list, sourceKey = 'es', targetKey = 'pt') {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        // saltar si ya tiene traducción
        if (item && item[targetKey]) continue;
        const original = item && item[sourceKey] ? item[sourceKey].toString() : '';
        if (!original) continue;
        // traducir y guardar
        item[targetKey] = await translateText(original, 'es', targetKey);
        // Pausa para respetar rate limits de MyMemory
        await new Promise(r => setTimeout(r, 400));
    }
}

// Traducir una sola carta
async function translateCard(cardObj, targetLang) {
    if (!cardObj || !cardObj.es || cardObj[targetLang]) return; // Ya está traducida
    cardObj[targetLang] = await translateText(cardObj.es, 'es', targetLang);
}

// Procesar cola de traducción en background para un idioma específico
async function processTranslationQueue(targetLang) {
    if (!translationQueue[targetLang] || translationQueue[targetLang].length === 0) {
        return;
    }
    
    const isTranslatingKey = targetLang === 'pt' ? 'isTranslatingPt' : 'isTranslatingEn';
    
    if (window[isTranslatingKey]) {
        return; // Ya hay una traducción en progreso
    }
    
    window[isTranslatingKey] = true;
    console.log(`Iniciando traducción de ${translationQueue[targetLang].length} cartas a ${targetLang}`);
    
    while (translationQueue[targetLang] && translationQueue[targetLang].length > 0) {
        const card = translationQueue[targetLang].shift();
        if (card && !card[targetLang]) {
            await translateCard(card, targetLang);
            await new Promise(r => setTimeout(r, 100)); // Pequeña pausa
        }
    }
    
    window[isTranslatingKey] = false;
    console.log(`Traducción de ${targetLang} completada`);
}

// Agregar cartas a la cola de traducción
function addCardsToTranslationQueue(cards, targetLang) {
    if (!['pt', 'en'].includes(targetLang)) return;
    if (!Array.isArray(cards)) cards = [cards];
    
    // Inicializar cola si no existe
    if (!translationQueue[targetLang]) {
        translationQueue[targetLang] = [];
    }
    
    cards.forEach(card => {
        if (card && !card[targetLang] && !translationQueue[targetLang].includes(card)) {
            translationQueue[targetLang].push(card);
        }
    });
    
    console.log(`Cartas en cola para ${targetLang}:`, translationQueue[targetLang].length);
    
    // Iniciar procesamiento en background
    processTranslationQueue(targetLang).catch(e => console.error('Error en traducción de cartas:', e));
}

async function translateAllCards(targetLang) {
    if (!['pt', 'en'].includes(targetLang)) return; // PT (Portugues) y EN (Ingles)
    console.log('Iniciando traducción completa de cartas a', targetLang);
    if (gameMessageElem) gameMessageElem.innerText = 'Traduciendo cartas...';

    await Promise.all([
        translateCardsList(whiteCardsData, 'es', targetLang),
        translateCardsList(blackCardsData, 'es', targetLang)
    ]);

    // Si el juego ya arrancó, re-renderizar
    if (gameState !== 'setup') {
        renderBlackCard();
        displaySubmittedCards();
        renderAllHands();
    }
    console.log('Traducción completada');
    if (gameState !== 'setup') updateGameMessage();
}

function autoTranslateIfNeeded(lang) {
    // Llamada sin bloquear la UI
    if (lang === 'pt') {
        translateAllCards('pt').catch(e => console.error('Error en auto-traducción:', e));
    } else if (lang === 'en') {
        translateAllCards('en').catch(e => console.error('Error en auto-traducción:', e));
    }
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
    handRevealed = false; // Resetear para mostrar cartas ocultas al siguiente jugador

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
    containerElement.innerHTML = 'Traduciendo...'; // Mostrar mientras traduce

    // Traducir cartas en tiempo real si es necesario
    if (currentLang !== 'es') {
        translateCardsBeforeDisplay(cardDataArray, currentLang).then(() => {
            // Limpiar y añadir las cartas reales (boca arriba)
            containerElement.innerHTML = '';
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
        }).catch(e => {
            console.error('Error traduciendo cartas:', e);
            // Si hay error, mostrar en español
            containerElement.innerHTML = '';
            cardDataArray.forEach(cardData => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card', 'white-card');
                cardElement.innerHTML = getCardText(cardData, 'es');
                cardElement.dataset.playerId = playerId;
                containerElement.appendChild(cardElement);
            });
        });
    } else {
        // Si es español, no necesita traducción
        containerElement.innerHTML = '';
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

    // Verificar si alguien alcanzó el objetivo de puntos
    if (targetPoints > 0 && winner.score >= targetPoints) {
        // Fin del juego por objetivo alcanzado
        setTimeout(() => {
            triggerGameOver();
        }, 2000);
    } else {
        advanceRoundBtn.classList.remove('hidden');
    }
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
    
    // Traducir en tiempo real si es necesario
    if (currentLang !== 'es' && !currentBlackCard[currentLang]) {
        // Mostrar "Traduciendo..." mientras se traduce
        blackCardElem.innerHTML = '<p>Traduciendo carta negra...</p>';
        
        translateCard(currentBlackCard, currentLang).then(() => {
            // Renderizar de nuevo después de traducir
            let text = getCardText(currentBlackCard, currentLang);
            text = text.replace(/(_+)/g, "<span>[____]</span>");
            blackCardElem.innerHTML = text;
        }).catch(e => {
            console.error('Error traduciendo carta negra:', e);
            // Mostrar en español si hay error
            let text = getCardText(currentBlackCard, 'es');
            text = text.replace(/(_+)/g, "<span>[____]</span>");
            blackCardElem.innerHTML = text;
        });
    } else {
        // Si es español o ya está traducida, mostrar directamente
        let text = getCardText(currentBlackCard, currentLang);
        text = text.replace(/(_+)/g, "<span>[____]</span>");
        blackCardElem.innerHTML = text;
    }
}

/**
 * Crea el botón de revelar mano
 */
function createRevealHandButton() {
    // Buscar si ya existe el botón en la mano
    let existingBtn = document.getElementById('reveal-hand-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    // Crear nuevo botón
    revealHandBtn = document.createElement('button');
    revealHandBtn.id = 'reveal-hand-btn';
    revealHandBtn.innerText = (currentLang === 'pt') ? 'Revelar Mão' : (currentLang === 'en') ? 'Reveal Hand' : 'Revelar Mano';
    revealHandBtn.onclick = () => {
        handRevealed = true;
        renderAllHands();
    };
    
    // Insertar botón después del contenedor de mano
    activePlayerHandElem.insertAdjacentElement('afterend', revealHandBtn);
    revealHandBtn.classList.remove('hidden');
  }

// Traducir cartas en tiempo real (bloqueante) antes de mostrar
async function translateCardsBeforeDisplay(cards, targetLang) {
    if (targetLang === 'es' || !Array.isArray(cards)) return;
    
    for (const card of cards) {
        if (card && !card[targetLang]) {
            await translateCard(card, targetLang);
            await new Promise(r => setTimeout(r, 300)); // 300ms entre cada carta para evitar rate limit
        }
    }
}

/**
 * Muestra la mano del jugador activo, u oculta el contenedor si no es el turno de un jugador.
 */
function renderAllHands() {
    if (!activePlayerHandElem) return;

    // Limpiar la mano
    activePlayerHandElem.innerHTML = '';
    
    // Remover botón anterior si existe
    let existingBtn = document.getElementById('reveal-hand-btn');
    if (existingBtn) {
        existingBtn.remove();
        revealHandBtn = null;
    }
    
    // Comprobar si un jugador está jugando (no el lector, no juzgando)
    const isPlayerTurn = (gameState === 'playing' || gameState === 'reordering') && currentTurnPlayer !== -1;

    if (isPlayerTurn) {
        // Mostrar el contenedor de la mano
        activePlayerHandElem.classList.remove('hidden');
        const player = players[currentTurnPlayer];
        if (player && Array.isArray(player.hand)) {
            // En estado 'playing', siempre mostrar cartas ocultas hasta que se presione el botón
            // En estado 'reordering', mostrar cartas seleccionadas si handRevealed es true
            if (gameState === 'playing' && !handRevealed) {
                // Mostrar cartas ocultas
                for (let i = 0; i < player.hand.length; i++) {
                    const cardBack = document.createElement('div');
                    cardBack.className = 'card white-card disabled';
                    cardBack.innerHTML = '<span style="font-size:1.2em;">?</span>';
                    activePlayerHandElem.appendChild(cardBack);
                }
                createRevealHandButton();
            } else if (gameState === 'playing' && handRevealed) {
                // Traducir cartas antes de mostrar (bloqueante en tiempo real)
                if (currentLang !== 'es') {
                    translateCardsBeforeDisplay(player.hand, currentLang).then(() => {
                        // Re-renderizar después de traducir
                        activePlayerHandElem.innerHTML = '';
                        player.hand.forEach(cardData => {
                            if (cardData && typeof cardData === 'object') {
                                const cardElement = createWhiteCardElement(cardData, player.id);
                                activePlayerHandElem.appendChild(cardElement);
                            }
                        });
                    }).catch(e => console.error('Error en traducción:', e));
                } else {
                    // Mostrar todas las cartas de la mano (español no necesita traducción)
                    player.hand.forEach(cardData => {
                        if (cardData && typeof cardData === 'object') {
                            const cardElement = createWhiteCardElement(cardData, player.id);
                            activePlayerHandElem.appendChild(cardElement);
                        }
                    });
                }
                if (revealHandBtn) revealHandBtn.classList.add('hidden');
            } else if (gameState === 'reordering' && handRevealed) {
                // En reordering, mostrar solo las cartas seleccionadas
                // Traducir primero si es necesario
                if (currentLang !== 'es') {
                    const selectedCards = orderedCardElements.map(el => el.cardData);
                    translateCardsBeforeDisplay(selectedCards, currentLang).then(() => {
                        // Re-renderizar después de traducir
                        activePlayerHandElem.innerHTML = '';
                        orderedCardElements.forEach(cardElem => {
                            if (cardElem && cardElem.cardData) {
                                const newCardElem = createWhiteCardElement(cardElem.cardData, player.id);
                                newCardElem.classList.add('selected');
                                activePlayerHandElem.appendChild(newCardElem);
                            }
                        });
                    }).catch(e => console.error('Error en traducción:', e));
                } else {
                    orderedCardElements.forEach(cardElem => {
                        if (cardElem && cardElem.cardData) {
                            const newCardElem = createWhiteCardElement(cardElem.cardData, player.id);
                            newCardElem.classList.add('selected');
                            activePlayerHandElem.appendChild(newCardElem);
                        }
                    });
                }
            }
        }
    } else {
        // Ocultar el contenedor si no es el turno de un jugador
        activePlayerHandElem.classList.add('hidden');
        if (revealHandBtn) revealHandBtn.classList.add('hidden');
        handRevealed = false;
    }
    const showConfirm = isPlayerTurn && handRevealed;
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
    const allCards = []; // Recopilar todas las cartas para traducir

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
            
            // Agregar cartas a la cola para traducir
            allCards.push(...cardSet);
        } else {
            // Lógica anterior (para fin de ronda, si es necesario)
            cardSet.forEach(cardData => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card', 'white-card');
                cardElement.innerHTML = getCardText(cardData, currentLang);
                cardElement.dataset.playerId = playerId; 
                container.appendChild(cardElement);
            });
            allCards.push(...cardSet);
        }
        playedCardsSlots.appendChild(container);
    });
    
    // Agregar todas las cartas jugadas a la cola de traducción
    if (currentLang !== 'es' && allCards.length > 0) {
        addCardsToTranslationQueue(allCards, currentLang);
    }
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
    
    // Traducir botón "Revelar Mano"
    if(revealHandBtn) {
        revealHandBtn.innerText = (currentLang === 'pt') ? "Revelar Mão" : (currentLang === 'en') ? "Reveal Hand" : "Revelar Mano";
    }
    
    // NUEVO: Botones del lector (aunque no estén en uiTexts, los traducimos aquí)
    if(currentLang === 'pt') {
        if(confirmWinnerBtn) confirmWinnerBtn.innerText = "Confirmar Vencedor";
        if(changeChoiceBtn) changeChoiceBtn.innerText = "Mudar Escolha";
    } else if(currentLang === 'en') {
        if(confirmWinnerBtn) confirmWinnerBtn.innerText = "Confirm Winner";
        if(changeChoiceBtn) changeChoiceBtn.innerText = "Change Choice";
    } else {
        if(confirmWinnerBtn) confirmWinnerBtn.innerText = "Confirmar Ganador";
        if(changeChoiceBtn) changeChoiceBtn.innerText = "Cambiar Elección";
    }

    // Actualizar textos dinámicos del juego (si ya empezó)
    if (gameState !== 'setup') {
        updateGameMessage();
        renderBlackCard();
        renderAllHands();
        if (gameState === 'judging' || gameState === 'round_end' || gameState === 'flipping_cards') {
            displaySubmittedCards(); // Re-renderizar cartas con el idioma nuevo
        }
    }
    
    // Iniciar traducción automática si es necesario
    autoTranslateIfNeeded(currentLang);
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
    stopAllMusic(); // Detener cualquier música que esté sonando
    if (currentTrackId !== 'none' && gameState !== 'setup') {
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
    const enText = card.en || esText;
    if (lang === 'pt') return ptText;
    if (lang === 'en') return enText;
    return esText;
}