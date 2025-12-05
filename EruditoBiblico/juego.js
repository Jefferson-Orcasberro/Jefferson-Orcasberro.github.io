// ============================================================
// --- BASE DE DATOS DE PREGUNTAS POR NIVEL ---
// ============================================================

const basePreguntasPorNivel = {
    principiante: [
        {
            pregunta: '¿Cuál es el primer libro de la Biblia?',
            opciones: ['Génesis', 'Éxodo', 'Levítico', 'Números'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos apóstoles eligió Jesús según los evangelios?',
            opciones: ['10', '12', '14', '15'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién escribió la mayoría de los Salmos?',
            opciones: ['Salomón', 'David', 'Asaf', 'Moisés'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué monte Dios entregó los Diez Mandamientos a Moisés?',
            opciones: ['Monte Sinaí', 'Monte Sión', 'Monte Carmelo', 'Monte Moriah'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál fue el nombre que Dios le cambió a Abram?',
            opciones: ['Israel', 'Abraham', 'Jacob', 'Isaac'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué ciudad nació Jesús según los evangelios?',
            opciones: ['Nazaret', 'Jerusalén', 'Belén', 'Jericó'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos evangelios canónicos hay en el Nuevo Testamento?',
            opciones: ['3', '4', '5', '6'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién bautizó a Jesús en el Jordán?',
            opciones: ['Pedro', 'Juan el Bautista', 'Santiago', 'Felipe'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos días y noches llovió durante el diluvio según Génesis?',
            opciones: ['40 días', '40 noches', '40 días y 40 noches', '100 días'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál fue el nombre que Dios le puso a Jacob?',
            opciones: ['Isaac', 'Israel', 'Abraham', 'José'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el padre de Juan el Bautista?',
            opciones: ['Zacarías', 'Simeón', 'José', 'Herodes'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál es el último libro de la Biblia?',
            opciones: ['Malaquías', 'Apocalipsis', '3 Juan', 'Judas'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos hijos tenía Jacob según Génesis?',
            opciones: ['10', '11', '12', '13'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue la primera mujer según la Biblia?',
            opciones: ['Ester', 'Eva', 'Raquel', 'Sara'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál fue el número de plagas en Egipto?',
            opciones: ['7', '9', '10', '12'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién construyó el Arca de Noé?',
            opciones: ['Sem', 'Noé', 'Jafet', 'Cam'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué lugar fue crucificado Jesús?',
            opciones: ['Getsemaní', 'Gólgota', 'Betania', 'Cafarnaum'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del monte más alto que se menciona en la Biblia?',
            opciones: ['Monte Ararat', 'Monte Carmelo', 'Monte Sinaí', 'Monte de los Olivos'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Quién fue el rey que mandó matar a todos los bebés varones?',
            opciones: ['Faraón', 'Herodes', 'Saúl', 'Nabucodonosor'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos libros tiene el Nuevo Testamento?',
            opciones: ['24', '25', '27', '30'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál fue la profesión de Jesús antes de su ministerio?',
            opciones: ['Pescador', 'Carpintero', 'Escriba', 'Recaudador'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se narra la creación del mundo?',
            opciones: ['Éxodo', 'Levítico', 'Génesis', 'Job'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el apóstol que durmió durante la oración en Getsemaní?',
            opciones: ['Juan', 'Santiago', 'Pedro', 'Judas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál fue el nombre que Dios le puso a Jacob?',
            opciones: ['Isaac', 'Israel', 'Abraham', 'José'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se narra la historia del Diluvio?',
            opciones: ['Éxodo', 'Génesis', 'Job', 'Jonás'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del ángel que anunció el nacimiento de Jesús a María?',
            opciones: ['Miguel', 'Gabriel', 'Rafael', 'Uriel'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue la primera profetisa mencionada en la Biblia?',
            opciones: ['Débora', 'Miriam', 'Hulda', 'Noadia'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué lugar fue tentado Jesús por Satanás?',
            opciones: ['En la sinagoga', 'En el desierto', 'En el Jordán', 'En Getsemaní'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del monte donde fue crucificado Jesús?',
            opciones: ['Monte Tabor', 'Monte Carmelo', 'Monte Gólgota', 'Monte Ararat'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el discípulo que negó conocer a Jesús tres veces?',
            opciones: ['Juan', 'Santiago', 'Pedro', 'Tomás'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos libros forman el Pentateuco?',
            opciones: ['4', '5', '6', '7'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que fue lanzado a un pozo?',
            opciones: ['Elías', 'Jeremías', 'Oseas', 'Jonás'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del apóstol que fue hermano de Santiago?',
            opciones: ['Juan', 'Pedro', 'Felipe', 'Mateo'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿En qué ciudad vivía Jonás antes de huir?',
            opciones: ['Nínive', 'Babilonia', 'Tarsis', 'Jope'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál es el nombre de la ciudad de Saulo de Tarso?',
            opciones: ['Damasco', 'Jerusalén', 'Tarso', 'Antioquía'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el rey más joven de Judá?',
            opciones: ['Josías', 'Joás', 'Ezequías', 'Acaz'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el rey más sabio de Israel?',
            opciones: ['David', 'Salomón', 'Saúl', 'Roboam'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años duró el reinado de David?',
            opciones: ['20 años', '30 años', '40 años', '50 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos años vivió Enoc antes de ser arrebatado?',
            opciones: ['365 años', '400 años', '500 años', '600 años'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Quién fue el primer hombre según la Biblia?',
            opciones: ['Abel', 'Adán', 'Enoc', 'Noé'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue la mujer que ungió a Jesús con perfume?',
            opciones: ['María de Betania', 'María Magdalena', 'Marta', 'La mujer samaritana'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años vivió Matusalén?',
            opciones: ['857 años', '912 años', '969 años', '999 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántas veces aparece la palabra "amor" en el libro de 1 Corintios 13?',
            opciones: ['7', '9', '15', '20'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué monte se produjo la transfiguración de Jesús?',
            opciones: ['Monte Tabor', 'Monte Carmelo', 'Monte de los Olivos', 'Monte Galaad'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál fue el nombre del hijo rebelde de David que se levantó contra él?',
            opciones: ['Salomón', 'Absalón', 'Adonías', 'Amnón'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántas tribus de Israel se dividieron después de Salomón?',
            opciones: ['Dos reinos (Judá e Israel)', 'Tres reinos', 'Cuatro reinos', 'Cada tribu fue independiente'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál fue el nombre de la primera esposa de Adán según la Biblia?',
            opciones: ['Eva', 'Lilia', 'Adela', 'No se menciona'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos reyes buenos tuvo Judá según 2 Reyes y 2 Crónicas?',
            opciones: ['8', '12', '14', 'Aproximadamente 14'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál fue la ocupación de Rahab antes de ayudar a los espías?',
            opciones: ['Mercadera de tejidos', 'Posadería', 'Prostituta', 'Agricultora'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál fue el nombre que Dios le cambió a Abram?',
            opciones: ['Israel', 'Abraham', 'Jacob', 'Isaac'],
            respuestaCorrecta: 1
        }
    ],
    creyente: [
        {
            pregunta: '¿Cuántos años tenía Noé cuando comenzó el diluvio?',
            opciones: ['500 años', '600 años', '700 años', '800 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos libros tiene el Antiguo Testamento en la Biblia hebrea?',
            opciones: ['37', '39', '41', '43'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál fue la primera plaga de Egipto según Éxodo?',
            opciones: ['Oscuridad', 'Agua convertida en sangre', 'Granizo', 'Langostas'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos Salmos hay en total en el libro de Salmos?',
            opciones: ['100', '125', '150', '175'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el padre natural de Jesús según los evangelios?',
            opciones: ['José de Arimatea', 'José de Nazaret', 'Simeón', 'Zacarías'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos capítulos tiene el libro de Job?',
            opciones: ['30', '35', '42', '50'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué monte quiso Abraham sacrificar a Isaac?',
            opciones: ['Monte Sinaí', 'Monte Moriah', 'Monte Carmelo', 'Monte Ararat'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos profetas mayores hay en el Antiguo Testamento?',
            opciones: ['3', '4', '5', '6'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre de la madre de María según la tradición bíblica?',
            opciones: ['Ana', 'Noemí', 'Raquel', 'Lea'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos fragmentos de la Ley escribió Moisés?',
            opciones: ['Los Cinco Libros', 'Los Diez Mandamientos', 'El Pentateuco', 'Todas las anteriores'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál fue el primer animal mencionado en la creación?',
            opciones: ['Ballena', 'Pez', 'Pájaro', 'Ganado'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue vendido como esclavo por sus hermanos?',
            opciones: ['Benjamín', 'José', 'Rubén', 'Judá'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el libro más antiguo de la Biblia según los estudiosos?',
            opciones: ['Génesis', 'Éxodo', 'Job', 'Salmos'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el profeta que fue arrebatado al cielo sin morir?',
            opciones: ['Elías', 'Enoc', 'Moisés', 'Ambos Elías y Enoc'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuántos años vivió Matusalén?',
            opciones: ['800 años', '900 años', '969 años', '999 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el apóstol que negó a Jesús?',
            opciones: ['Juan', 'Santiago', 'Pedro', 'Judas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué río fue bautizado Jesús?',
            opciones: ['Jordán', 'Tigris', 'Éufrates', 'Nilo'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años ayunó Jesús en el desierto?',
            opciones: ['10 días', '40 días', '60 días', '100 días'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del lugar donde se reúnen los creyentes para adorar?',
            opciones: ['Mercado', 'Sinagoga', 'Plaza', 'Camino'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el padre de Caín y Abel?',
            opciones: ['Noé', 'Adán', 'Set', 'Enoc'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años pasaron entre la promesa a Abraham y el nacimiento de Isaac?',
            opciones: ['10 años', '15 años', '20 años', '25 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue la mujer que escondió a los espías en Jericó?',
            opciones: ['Débora', 'Rahab', 'Rut', 'Ester'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se narra la historia de Job?',
            opciones: ['Proverbios', 'Salmos', 'Job', 'Eclesiastés'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál fue el nombre del huerto donde fue puesto Adán?',
            opciones: ['Paraíso', 'Edén', 'Sión', 'Getsemaní'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que predijo el nacimiento de Jesús?',
            opciones: ['Isaías', 'Jeremías', 'Ezequiel', 'Daniel'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos hermanos tenía Jesús según los evangelios?',
            opciones: ['Ninguno', 'Uno', 'Varios', 'No se especifica'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué lugar fue transfigurado Jesús?',
            opciones: ['En el Jordán', 'En una montaña', 'En Cafarnaum', 'En Jerusalén'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del discípulo que traicionó a Jesús?',
            opciones: ['Simón', 'Judas', 'Mateo', 'Andrés'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién resucitó a Lázaro según el Evangelio de Juan?',
            opciones: ['Pedro', 'Juan', 'Jesús', 'Pablo'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos días después de su muerte resucitó Jesús?',
            opciones: ['1 día', '2 días', '3 días', '4 días'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue la mujer que apoyó a Elías en tiempos de hambre?',
            opciones: ['La viuda de Sarepta', 'La reina de Sabá', 'Betsabé', 'Naami'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál es el nombre del evangelista que era recaudador de impuestos?',
            opciones: ['Juan', 'Marcos', 'Mateo', 'Lucas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué libro se encuentra la Ley del Talión?',
            opciones: ['Génesis', 'Éxodo', 'Levítico', 'Números'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el apóstol que fue pescador de hombres?',
            opciones: ['Mateo', 'Juan', 'Pedro', 'Felipe'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre de la ciudad donde nació David?',
            opciones: ['Jerusalén', 'Jericó', 'Belén', 'Nazaret'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el rey que construyó el Templo de Jerusalén?',
            opciones: ['David', 'Salomón', 'Roboam', 'Asa'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos mandamientos adicionales dio Jesús a sus discípulos?',
            opciones: ['Un mandamiento', 'Dos mandamientos', 'Tres mandamientos', 'Cuatro mandamientos'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál es el primer mandamiento según Jesús?',
            opciones: ['No robarás', 'Ama al Señor tu Dios', 'No mentirás', 'Honra a tus padres'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué monte se dice que Dios probó a Abraham?',
            opciones: ['Monte Ararat', 'Monte Moriah', 'Monte Sinaí', 'Monte Horeb'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años tenía Noé cuando comenzó el diluvio?',
            opciones: ['500 años', '600 años', '700 años', '800 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién vendió su primogenitura por un plato de lentejas?',
            opciones: ['Caín', 'Esaú', 'Ismael', 'Benjamín'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años durmió Jonás en el vientre del pez?',
            opciones: ['1 día', '2 días', '3 días', '7 días'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Qué apóstol era publicano antes de seguir a Jesús?',
            opciones: ['Simón', 'Mateo', 'Judas', 'Bartolomé'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué ciudad se bajó la paloma sobre Jesús en su bautizo?',
            opciones: ['En Bethania', 'En el Jordán', 'En Cafarnaum', 'En Nazaret'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál fue el primer milagro de Jesús según Juan?',
            opciones: ['Caminar sobre el agua', 'Convertir agua en vino', 'Sanar a un ciego', 'Multiplicar panes'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años tenía José cuando fue vendido como esclavo?',
            opciones: ['15 años', '17 años', '20 años', '22 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién traicionó a Sansón revelando el secreto de su fuerza?',
            opciones: ['Mical', 'Dalila', 'Noemí', 'Berseba'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué tierra fue donde Dios se le aparecio a Abraham por primera vez?',
            opciones: ['Ur de los caldeos', 'Haran', 'Canaán', 'Betsaida'],
            respuestaCorrecta: 2
        }
    ],
    cristiano: [
        {
            pregunta: '¿Cuál fue la profesión de Santiago el Mayor antes de seguir a Jesús?',
            opciones: ['Recaudador de impuestos', 'Pescador', 'Leñador', 'Carpintero'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué idioma fue escrito originalmente el Antiguo Testamento?',
            opciones: ['Arameo', 'Hebreo', 'Griego', 'Hebreo y Arameo principalmente'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál fue el nombre de la mujer de Noé según Génesis?',
            opciones: ['No se especifica en la Biblia', 'Naamá', 'Noemí', 'Tamara'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Quién fue la madre de Juan el Bautista según Lucas?',
            opciones: ['Ana', 'Isabel', 'María', 'Elisabet'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuántos reyes buenos tuvo Judá según 2 Reyes y 2 Crónicas?',
            opciones: ['8', '12', '14', 'Aproximadamente 14'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál fue la ocupación de Rahab antes de ayudar a los espías?',
            opciones: ['Mercadera de tejidos', 'Posadería', 'Prostituta', 'Agricultora'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué monte se produjo la transfiguración de Jesús?',
            opciones: ['Monte Tabor', 'Monte Carmelo', 'Monte de los Olivos', 'Monte Galaad'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años de cautiverio en Babilonia predijo el profeta Jeremías?',
            opciones: ['40 años', '50 años', '70 años', '80 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál fue el nombre del hijo rebelde de David que se levantó contra él?',
            opciones: ['Salomón', 'Absalón', 'Adonías', 'Amnón'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántas tribus de Israel se dividieron después de Salomón?',
            opciones: ['Dos reinos (Judá e Israel)', 'Tres reinos', 'Cuatro reinos', 'Cada tribu fue independiente'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál fue el nombre de la primera esposa de Adán según la Biblia?',
            opciones: ['Eva', 'Lilia', 'Adela', 'No se menciona'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años duró el reinado de David?',
            opciones: ['20 años', '30 años', '40 años', '50 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el rey más sabio de Israel?',
            opciones: ['David', 'Salomón', 'Saúl', 'Roboam'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántas veces aparece la palabra "amor" en el libro de 1 Corintios 13?',
            opciones: ['7', '9', '15', '20'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se narra la creación del mundo?',
            opciones: ['Éxodo', 'Levítico', 'Génesis', 'Job'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál fue la profesión de Jesús antes de su ministerio?',
            opciones: ['Pescador', 'Carpintero', 'Escriba', 'Recaudador'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el apóstol que durmió durante la oración en Getsemaní?',
            opciones: ['Juan', 'Santiago', 'Pedro', 'Judas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos libros tiene el Nuevo Testamento?',
            opciones: ['24', '25', '27', '30'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue la mujer que ungió a Jesús con perfume?',
            opciones: ['María de Betania', 'María Magdalena', 'Marta', 'La mujer samaritana'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años vivió Enoc antes de ser arrebatado?',
            opciones: ['365 años', '400 años', '500 años', '600 años'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Quién fue el primer hombre según la Biblia?',
            opciones: ['Abel', 'Adán', 'Enoc', 'Noé'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se narra la historia del Diluvio?',
            opciones: ['Éxodo', 'Génesis', 'Job', 'Jonás'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del ángel que anunció el nacimiento de Jesús a María?',
            opciones: ['Miguel', 'Gabriel', 'Rafael', 'Uriel'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue la primera profetisa mencionada en la Biblia?',
            opciones: ['Débora', 'Miriam', 'Hulda', 'Noadia'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos mandamientos completó Jesús en dos?',
            opciones: ['Tres', 'Cinco', 'Diez', 'Todos'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿En qué lugar fue tentado Jesús por Satanás?',
            opciones: ['En la sinagoga', 'En el desierto', 'En el Jordán', 'En Getsemaní'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del monte donde fue crucificado Jesús?',
            opciones: ['Monte Tabor', 'Monte Carmelo', 'Monte Gólgota', 'Monte Ararat'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el discípulo que negó conocer a Jesús tres veces?',
            opciones: ['Juan', 'Santiago', 'Pedro', 'Tomás'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos libros forman el Pentateuco?',
            opciones: ['4', '5', '6', '7'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que fue lanzado a un pozo?',
            opciones: ['Elías', 'Jeremías', 'Oseas', 'Jonás'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del apóstol que fue hermano de Santiago?',
            opciones: ['Juan', 'Pedro', 'Felipe', 'Mateo'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿En qué ciudad vivía Jonás antes de huir?',
            opciones: ['Nínive', 'Babilonia', 'Tarsis', 'Jope'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Quién fue el king que restauró el Templo?',
            opciones: ['Asa', 'Josafat', 'Ezequías', 'Josías'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál es el nombre de la ciudad de Saulo de Tarso?',
            opciones: ['Damasco', 'Jerusalén', 'Tarso', 'Antioquía'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el rey más joven de Judá?',
            opciones: ['Josías', 'Joás', 'Ezequías', 'Acaz'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se encuentra el Cantar de los Cantares?',
            opciones: ['Proverbios', 'Salmos', 'Cantar de los Cantares', 'Eclesiastés'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántas iglesias en Asia son mencionadas en Apocalipsis?',
            opciones: ['5', '7', '9', '12'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que predijo sobre la caída de Nínive?',
            opciones: ['Jonás', 'Nahúm', 'Habacuc', 'Sofonías'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años tenía Jesús cuando fue bautizado?',
            opciones: ['28 años', '30 años', '32 años', '35 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál fue la primera iglesia que se menciona en Hechos?',
            opciones: ['Antioquía', 'Jerusalén', 'Éfeso', 'Corinto'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos milagros hizo Eliseo según la tradición?',
            opciones: ['13 milagros', '16 milagros', '20 milagros', '32 milagros'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Quién fue el rey que reinó durante el ministerio de Jesús?',
            opciones: ['Herodes el Grande', 'Herodes Antipas', 'Arquelao', 'Felipe'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué ciudad fue arrestado y juzgado Jesús?',
            opciones: ['Galilea', 'Cafarnaum', 'Jerusalén', 'Jericó'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos días después de su resurrección se le apareció Jesús a Tomás?',
            opciones: ['Un día', 'Tres días', 'Ocho días', 'Diez días'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue la primera mujer que se le apareció Jesús resucitado?',
            opciones: ['María la madre de Jesús', 'María de Betania', 'María Magdalena', 'Salomé'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre de la bestia según Apocalipsis?',
            opciones: ['Dragón', '666', 'Babilonia', 'Leviatán'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué isla fue exiliado Juan cuando escribió Apocalipsis?',
            opciones: ['Chipre', 'Creta', 'Patmos', 'Rodas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántas trompetas se tocan en Apocalipsis?',
            opciones: ['5', '6', '7', '9'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre de la ciudad donde se dieron los eventos del Apocalipsis?',
            opciones: ['Jerusalén', 'Babilonia', 'Roma', 'Tiro'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años de tribulación se mencionan en Daniel?',
            opciones: ['3.5 años', '7 años', '70 años', '490 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el ángel que anunció a María que sería la madre de Jesús?',
            opciones: ['Miguel', 'Gabriel', 'Uriel', 'Raguel'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántas plagas cayeron sobre Egipto según el relato bíblico?',
            opciones: ['7 plagas', '9 plagas', '10 plagas', '12 plagas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué libro profético se describe el sueño de la estatua de metales mixtos?',
            opciones: ['Isaías', 'Ezequiel', 'Daniel', 'Jeremías'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos años duró el reinado de Salomón?',
            opciones: ['20 años', '30 años', '40 años', '50 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el profeta que comió un rollo escrito según Ezequiel?',
            opciones: ['Jeremías', 'Ezequiel', 'Daniel', 'Habacuc'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos días se tomó Dios para crear todas las cosas?',
            opciones: ['5 días', '6 días', '7 días', '8 días'],
            respuestaCorrecta: 1
        }
    ],
    erudito: [
        {
            pregunta: '¿Cuál es el orden correcto de los profetas mayores en la Biblia hebrea?',
            opciones: ['Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel', 'Jeremías, Isaías, Daniel, Ezequiel, Lamentaciones', 'Ezequiel, Isaías, Jeremías, Daniel, Lamentaciones', 'Isaías, Ezequiel, Jeremías, Lamentaciones, Daniel'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál fue el nombre hebreo de la ciudad que llamaban Betsaida?',
            opciones: ['Casa de los pescadores', 'Casa del pan', 'Casa de olivos', 'Casa de agua'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántas generaciones hay desde Abraham hasta David según Mateo?',
            opciones: ['12 generaciones', '14 generaciones', '16 generaciones', '18 generaciones'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre de la esposa que Dios mandó a Oseas a tomar?',
            opciones: ['Gómara', 'Diblaim', 'Débora', 'No se especifica'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos días estuvo Moisés en el monte Sinaí recibiendo las Tablas de la Ley?',
            opciones: ['30 días', '40 días', '50 días', '60 días'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se menciona la frase "Vanidad de vanidades, todo es vanidad"?',
            opciones: ['Proverbios', 'Salmos', 'Eclesiastés', 'Lamentaciones'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos años reinó David específicamente en Jerusalén?',
            opciones: ['30 años', '33 años', '37 años', '40 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre de la mujer que traicionó a Sansón?',
            opciones: ['Dalila', 'Mical', 'Betsabé', 'Raquel'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos hermanos tenía Moisés?',
            opciones: ['Uno (Aarón)', 'Dos (Aarón y María)', 'Tres', 'No tenía hermanos'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál fue el último acto de Sansón según Jueces?',
            opciones: ['Matar 1000 filisteos', 'Derrumbar el templo de Dagón', 'Cegar a sus enemigos', 'Romper las cadenas'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del hombre que cuestionó más a Dios en la Biblia?',
            opciones: ['Job', 'Abraham', 'Moisés', 'Jeremías'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años estuvo cautivo Sansón en la cárcel?',
            opciones: ['2 años', '5 años', '10 años', 'No se especifica'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál fue el primer milagro de Jesús según Juan?',
            opciones: ['Sanar al ciego', 'Convertir agua en vino', 'Alimentar a 5000', 'Resucitar a Lázaro'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que comió un rollo amargo?',
            opciones: ['Isaías', 'Jeremías', 'Ezequiel', 'Daniel'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos hombres eligió Gedeón para la batalla según Jueces?',
            opciones: ['100', '300', '500', '1000'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál fue el nombre de la esposa de Isaac?',
            opciones: ['Raquel', 'Rebeca', 'Lea', 'Sara'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el primer rey de Israel?',
            opciones: ['David', 'Saúl', 'Salomón', 'Roboam'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos apóstoles escribieron epístolas en el Nuevo Testamento?',
            opciones: ['5', '6', '7', '8'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué ciudad fue condenado Jesús?',
            opciones: ['Belén', 'Cafarnaum', 'Jerusalén', 'Nazaret'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre del apóstol que fue médico?',
            opciones: ['Juan', 'Lucas', 'Marcos', 'Andrés'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue la mujer que fue la primera en ver a Jesús resucitado?',
            opciones: ['María de Betania', 'María Magdalena', 'Marta', 'Salomé'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos apóstoles fueron enviados por Jesús en parejas?',
            opciones: ['6 parejas', '8 parejas', '10 parejas', '12 parejas'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál es el nombre del discípulo gemelo?',
            opciones: ['Felipe', 'Tomás', 'Bartolomé', 'Judas'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el apóstol que predicó en Pentecostés?',
            opciones: ['Juan', 'Santiago', 'Pedro', 'Felipe'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué libro se registra la ascensión de Jesús?',
            opciones: ['Mateo', 'Marcos', 'Lucas', 'Juan'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre del gobernador romano que condenó a Jesús?',
            opciones: ['Herodes', 'Poncio Pilato', 'Félix', 'Festo'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que fue tragado por un gran pez?',
            opciones: ['Elías', 'Jeremías', 'Jonás', 'Oseas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos hijos tuvo Canaán según la genealogía?',
            opciones: ['4', '6', '8', '10'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el rey que hizo más malo según 2 Reyes?',
            opciones: ['Manasés', 'Acab', 'Jeroboam', 'Sedequías'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué río fue bautizado Juan el Bautista?',
            opciones: ['Tigris', 'Nilo', 'Jordán', 'Éufrates'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre del ángel que anunció a Zacarías el nacimiento de Juan?',
            opciones: ['Miguel', 'Gabriel', 'Rafael', 'Uriel'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años pasó Israel en el desierto?',
            opciones: ['30 años', '40 años', '50 años', '60 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que dividió el Jordán con su manto?',
            opciones: ['Moisés', 'Elías', 'Eliseo', 'Josué'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué ciudad fue predicada la primera iglesia?',
            opciones: ['Antioquía', 'Jerusalén', 'Roma', 'Éfeso'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del discípulo que fue apóstol de los gentiles?',
            opciones: ['Pedro', 'Santiago', 'Juan', 'Pablo'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Quién fue la mujer que ayudó a la iglesia en Tiatira?',
            opciones: ['Lídia', 'Dorcas', 'Priscila', 'Febe'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años duró la cautividad de Israel en Babilonia?',
            opciones: ['50 años', '70 años', '80 años', '100 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el rey de Nínive que se arrepintió?',
            opciones: ['Sargón', 'Sargón II', 'Ashur', 'No se especifica'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál es el nombre del escriba que acompañó a Nehemías?',
            opciones: ['Esdras', 'Malaquías', 'Ageo', 'Zacarías'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos años de restauración del Templo profetizó?',
            opciones: ['49 años', '70 años', '483 años', '490 años'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Quién fue el rey que más sacrificios hizo a Dios?',
            opciones: ['Salomón', 'David', 'Ezequías', 'Josías'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿En qué libro se describe la Segunda Venida de Cristo?',
            opciones: ['Mateo', '1 Tesalonicenses', 'Apocalipsis', 'Todos mencionan'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál es el nombre del apóstol que escribió Apocalipsis?',
            opciones: ['Juan', 'Pedro', 'Pablo', 'Santiago'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Quién fue el profeta que fue lanzado a un horno de fuego?',
            opciones: ['Daniel', 'Jonás', 'Jeremías', 'Habacuc'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos compañeros de Daniel fueron lanzados al horno?',
            opciones: ['1', '2', '3', '4'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué libro se encuentra la Prueba de las Aguas?',
            opciones: ['Éxodo', 'Levítico', 'Números', 'Deuteronomio'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue la profetisa que cantó después del paso del Mar Rojo?',
            opciones: ['María', 'Miriam', 'Mical', 'Noemí'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del rey que fue transformado en bestia?',
            opciones: ['Belsasar', 'Nabucodonosor', 'Ciro', 'Darío'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántas veces se menciona la palabra "Aleluya" en Apocalipsis?',
            opciones: ['2', '4', '6', '8'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el profeta que escribió sobre los últimos tiempos?',
            opciones: ['Isaías', 'Jeremías', 'Daniel', 'Malaquías'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué libro se menciona el anticristo?',
            opciones: ['Mateo', '1 Juan', '2 Tesalonicenses', 'Todos mencionan'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿Cuál es el nombre de la Bestia según Apocalipsis?',
            opciones: ['Dragón', '666', 'Babilonia', 'Leviatán'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el apóstol que fue crucificado boca abajo?',
            opciones: ['Pedro', 'Pablo', 'Santiago', 'Juan'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántos sellos se abren en Apocalipsis?',
            opciones: ['5', '6', '7', '12'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué isla fue exiliado Juan cuando escribió Apocalipsis?',
            opciones: ['Chipre', 'Creta', 'Patmos', 'Rodas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el rey que soñó con una estatua de metales mixtos?',
            opciones: ['Belsasar', 'Nabucodonosor', 'Ciro', 'Darío'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuál es el nombre del ángel que custodia el Trono de Dios?',
            opciones: ['Miguel', 'Gabriel', 'Uriel', 'Rafael'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuántas trompetas se tocan en Apocalipsis?',
            opciones: ['5', '6', '7', '9'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre de la ciudad donde se dieron los eventos del Apocalipsis?',
            opciones: ['Jerusalén', 'Babilonia', 'Roma', 'Tiro'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años de tribulación se mencionan en Daniel?',
            opciones: ['3.5 años', '7 años', '70 años', '490 años'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el ángel que anunció a María que sería la madre de Jesús?',
            opciones: ['Miguel', 'Gabriel', 'Uriel', 'Raguel'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántas plagas cayeron sobre Egipto según el relato bíblico?',
            opciones: ['7 plagas', '9 plagas', '10 plagas', '12 plagas'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿En qué libro profético se describe el sueño de la estatua de metales mixtos?',
            opciones: ['Isaías', 'Ezequiel', 'Daniel', 'Jeremías'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuántos años duró el reinado de Salomón?',
            opciones: ['20 años', '30 años', '40 años', '50 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Quién fue el profeta que comió un rollo escrito según Ezequiel?',
            opciones: ['Jeremías', 'Ezequiel', 'Daniel', 'Habacuc'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos días se tomó Dios para crear todas las cosas?',
            opciones: ['5 días', '6 días', '7 días', '8 días'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Quién fue el rey que soñó con una estatua de metales mixtos?',
            opciones: ['Belsasar', 'Nabucodonosor', 'Ciro', 'Darío'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos sellos se abren en Apocalipsis?',
            opciones: ['5', '6', '7', '12'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Cuál es el nombre del ángel que custodia el Trono de Dios?',
            opciones: ['Miguel', 'Gabriel', 'Uriel', 'Rafael'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿En qué momento fue arrebatada la iglesia según Pablo en 1 Tesalonicenses?',
            opciones: ['Antes de la tribulación', 'A mitad de la tribulación', 'Después de la tribulación', 'Durante las plagas'],
            respuestaCorrecta: 0
        },
        {
            pregunta: '¿Cuál es el nombre del anticristo en la Biblia?',
            opciones: ['Leviatán', 'Babilonia', 'La Bestia', 'No se menciona un nombre específico'],
            respuestaCorrecta: 3
        },
        {
            pregunta: '¿En qué libro profético se menciona el "Hijo de Hombre"?',
            opciones: ['Isaías', 'Daniel', 'Jeremías', 'Ezequiel'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿Cuántos años transcurrieron entre la promesa a Abraham y el Éxodo?',
            opciones: ['200 años', '300 años', '400 años', '500 años'],
            respuestaCorrecta: 2
        },
        {
            pregunta: '¿Qué significa la palabra "Apocalipsis"?',
            opciones: ['Fin del mundo', 'Revelación', 'Catástrofe', 'Juicio'],
            respuestaCorrecta: 1
        },
        {
            pregunta: '¿En qué libro se encuentra el Salmo 23, considerado el "Salmo del Pastor"?',
            opciones: ['Salmo 19', 'Libro de Salmos', 'Salmo 23', 'Libro de Proverbios'],
            respuestaCorrecta: 1
        }
    ]
};

// ============================================================
// --- VARIABLES GLOBALES ---
// ============================================================

let nivelActual = null;
let cantidadPreguntasSeleccionada = 50;
let preguntasActuales = [];
let indicePreguntaActual = 0;
let puntos = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let respondiendo = true;

const PUNTOS_POR_RESPUESTA_CORRECTA = 10;

// ============================================================
// --- FUNCIONES PRINCIPALES ---
// ============================================================

function obtenerCantidadPreguntas(nivel) {
    return basePreguntasPorNivel[nivel].length;
}

function iniciarJuego(nivel) {
    // Limpiar variables de juegos anteriores
    cantidadPreguntasSeleccionada = 50;
    preguntasActuales = [];
    indicePreguntaActual = 0;
    puntos = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    respondiendo = true;
    
    nivelActual = nivel;
    mostrarMenuCantidad();
}

function seleccionarCantidad(cantidad) {
    cantidadPreguntasSeleccionada = cantidad;
    iniciarJuegoConCantidad();
}

function iniciarJuegoConCantidad() {
    let preguntasDisponibles = [...basePreguntasPorNivel[nivelActual]];
    
    // Si la cantidad seleccionada es menor que las disponibles, seleccionar aleatoriamente
    if (cantidadPreguntasSeleccionada < preguntasDisponibles.length) {
        preguntasDisponibles = preguntasDisponibles
            .sort(() => Math.random() - 0.5)
            .slice(0, cantidadPreguntasSeleccionada);
    }
    
    preguntasActuales = barajarPreguntas(preguntasDisponibles);
    indicePreguntaActual = 0;
    puntos = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    respondiendo = true;

    mostrarAreaJuego();
    cargarPregunta();
}

function mostrarMenuCantidad() {
    document.getElementById('menu-niveles').classList.remove('menu-niveles-active');
    document.getElementById('menu-niveles').classList.add('menu-niveles-hidden');
    
    // Generar botones dinámicamente según la cantidad real de preguntas
    const cantidadTotal = obtenerCantidadPreguntas(nivelActual);
    const opcionesDisponibles = [5, 10, 15, 20, 30, 40, 50];
    
    const cantidadGrid = document.querySelector('.cantidad-grid');
    cantidadGrid.innerHTML = ''; // Limpiar botones anteriores
    
    // Agregar botones solo para opciones menores o iguales a la cantidad total
    opcionesDisponibles.forEach((opcion, index) => {
        if (opcion <= cantidadTotal) {
            const btn = document.createElement('button');
            btn.className = opcion === 50 && opcion <= cantidadTotal ? 'cantidad-btn cantidad-btn-full' : 'cantidad-btn';
            
            let tiempoEstimado = '';
            const minutos = Math.round(opcion / 2.5);
            tiempoEstimado = `~${minutos} min`;
            
            let badgeHTML = '';
            if (opcion === cantidadTotal && opcion === 50) {
                badgeHTML = '<span class="cantidad-badge">Todas</span>';
            } else if (opcion === cantidadTotal) {
                badgeHTML = '<span class="cantidad-badge">Todas</span>';
            }
            
            btn.innerHTML = `
                <span class="cantidad-numero">${opcion}</span>
                <span class="cantidad-label">Preguntas</span>
                ${badgeHTML}
                <span class="tiempo-estimado">${tiempoEstimado}</span>
            `;
            btn.onclick = () => seleccionarCantidad(opcion);
            cantidadGrid.appendChild(btn);
        }
    });
    
    // Si hay más de 50 preguntas, agregar botón con "Todas"
    if (cantidadTotal > 50) {
        const btnTodas = document.createElement('button');
        btnTodas.className = 'cantidad-btn cantidad-btn-full';
        const minutos = Math.round(cantidadTotal / 2.5);
        btnTodas.innerHTML = `
            <span class="cantidad-numero">${cantidadTotal}</span>
            <span class="cantidad-label">Preguntas</span>
            <span class="cantidad-badge">Todas</span>
            <span class="tiempo-estimado">~${minutos} min</span>
        `;
        btnTodas.onclick = () => seleccionarCantidad(cantidadTotal);
        cantidadGrid.appendChild(btnTodas);
    }
    
    document.getElementById('menu-cantidad').classList.remove('menu-cantidad-hidden');
    document.getElementById('menu-cantidad').classList.add('menu-cantidad-active');
}

function mostrarAreaJuego() {
    document.getElementById('menu-cantidad').classList.remove('menu-cantidad-active');
    document.getElementById('menu-cantidad').classList.add('menu-cantidad-hidden');
    
    document.getElementById('area-juego').classList.remove('area-juego-hidden');
    document.getElementById('area-juego').classList.add('area-juego-active');

    const nombreNivel = getNombreNivel(nivelActual);
    document.getElementById('nivel-actual').textContent = `Nivel: ${nombreNivel}`;
}

function cargarPregunta() {
    if (indicePreguntaActual >= preguntasActuales.length) {
        mostrarResultados();
        return;
    }

    respondiendo = true;
    const pregunta = preguntasActuales[indicePreguntaActual];

    // Actualizar información
    document.getElementById('numero-pregunta').textContent = indicePreguntaActual + 1;
    document.getElementById('pregunta-contador').textContent = `${indicePreguntaActual + 1}/${preguntasActuales.length}`;
    document.getElementById('pregunta-texto').textContent = pregunta.pregunta;
    document.getElementById('puntos-total').textContent = puntos;

    // Actualizar barra de progreso
    const progreso = ((indicePreguntaActual) / preguntasActuales.length) * 100;
    document.getElementById('barra-progreso-fill').style.width = progreso + '%';

    // Mezclar opciones y guardar el índice correcto
    const opcionesConIndices = pregunta.opciones.map((opcion, index) => ({
        texto: opcion,
        esCorrecta: index === pregunta.respuestaCorrecta
    }));
    
    // Barajar opciones
    for (let i = opcionesConIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesConIndices[i], opcionesConIndices[j]] = [opcionesConIndices[j], opcionesConIndices[i]];
    }
    
    // Guardar la respuesta correcta barajada
    pregunta.respuestaCorrectaMezclada = opcionesConIndices.findIndex(opt => opt.esCorrecta);

    // Cargar opciones
    opcionesConIndices.forEach((opcion, index) => {
        document.getElementById(`opcion-texto-${index + 1}`).textContent = opcion.texto;
    });

    // Resetear estado de botones
    document.querySelectorAll('.opcion-btn').forEach((btn, index) => {
        btn.classList.remove('seleccionada', 'correcta', 'incorrecta', 'deshabilitada');
        btn.onclick = () => seleccionarOpcion(index);
    });

    // Ocultar botón siguiente
    document.getElementById('btn-siguiente').style.display = 'none';
}

function seleccionarOpcion(indiceOpcion) {
    if (!respondiendo) return;

    respondiendo = false;
    const pregunta = preguntasActuales[indicePreguntaActual];
    const esCorrecta = indiceOpcion === pregunta.respuestaCorrectaMezclada;

    // Marcar opciones
    document.querySelectorAll('.opcion-btn').forEach((btn, index) => {
        if (index === pregunta.respuestaCorrectaMezclada) {
            btn.classList.add('correcta');
        } else if (index === indiceOpcion && !esCorrecta) {
            btn.classList.add('incorrecta');
        }
        btn.classList.add('deshabilitada');
    });

    // Actualizar puntuación
    if (esCorrecta) {
        puntos += PUNTOS_POR_RESPUESTA_CORRECTA;
        respuestasCorrectas++;
        reproducirSonidoExito();
    } else {
        respuestasIncorrectas++;
        reproducirSonidoError();
    }

    // Mostrar botón siguiente
    document.getElementById('btn-siguiente').style.display = 'block';
}

function siguientePregunta() {
    indicePreguntaActual++;
    cargarPregunta();
}

function mostrarResultados() {
    document.getElementById('area-juego').classList.remove('area-juego-active');
    document.getElementById('area-juego').classList.add('area-juego-hidden');

    document.getElementById('pantalla-resultados').classList.remove('pantalla-resultados-hidden');
    document.getElementById('pantalla-resultados').classList.add('pantalla-resultados-active');

    const porcentaje = Math.round((respuestasCorrectas / preguntasActuales.length) * 100);
    const nombreNivel = getNombreNivel(nivelActual);

    document.getElementById('nivel-completado').textContent = `Nivel: ${nombreNivel}`;
    document.getElementById('puntos-finales').textContent = puntos;
    document.getElementById('respuestas-correctas').textContent = respuestasCorrectas;
    document.getElementById('respuestas-incorrectas').textContent = respuestasIncorrectas;
    document.getElementById('porcentaje-acierto').textContent = porcentaje + '%';

    // Mensaje según desempeño
    let mensaje = '';
    if (porcentaje === 100) {
        mensaje = '¡Perfecto! ¡Excelente conocimiento bíblico!';
    } else if (porcentaje >= 80) {
        mensaje = '¡Muy bien! Demostraste gran conocimiento.';
    } else if (porcentaje >= 60) {
        mensaje = '¡Bien! Sigue estudiando la Biblia.';
    } else if (porcentaje >= 40) {
        mensaje = 'Necesitas estudiar más la Palabra de Dios.';
    } else {
        mensaje = 'Te recomendamos estudiar más. ¡No te desanimes!';
    }

    document.getElementById('mensaje-resultado').textContent = mensaje;
}

function volverANiveles() {
    // Limpiar variables del juego anterior
    nivelActual = null;
    cantidadPreguntasSeleccionada = 50;
    preguntasActuales = [];
    indicePreguntaActual = 0;
    puntos = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    respondiendo = true;
    
    document.getElementById('pantalla-resultados').classList.remove('pantalla-resultados-active');
    document.getElementById('pantalla-resultados').classList.add('pantalla-resultados-hidden');

    document.getElementById('menu-niveles').classList.remove('menu-niveles-hidden');
    document.getElementById('menu-niveles').classList.add('menu-niveles-active');
}

function salirDelJuego() {
    if (confirm('¿Deseas salir del juego? Se perderá tu progreso.')) {
        volverANiveles();
    }
}

function volverAlMenu() {
    window.location.href = 'index.html';
}

// ============================================================
// --- FUNCIONES AUXILIARES ---
// ============================================================

function getNombreNivel(nivel) {
    const nombres = {
        'principiante': 'Recién Convertido',
        'creyente': 'Creyente',
        'cristiano': 'Cristiano',
        'erudito': 'Erudito'
    };
    return nombres[nivel] || nivel;
}

function barajarPreguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function reproducirSonidoExito() {
    // Sonido de éxito (usando Web Audio API)
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

function reproducirSonidoError() {
    // Sonido de error (usando Web Audio API)
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 300;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// ============================================================
// --- INICIALIZACIÓN ---
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // El juego está listo para usarse
    console.log('Quiz Bíblico cargado correctamente');
});
