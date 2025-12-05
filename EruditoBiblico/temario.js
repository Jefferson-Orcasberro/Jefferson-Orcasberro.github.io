// ============================================================
// --- BASE DE DATOS DE TEMAS BÍBLICOS ---
// ============================================================

const temasBiblicos = {
    amor: {
        icon: '❤️',
        descripcion: 'La expresión del amor divino y humano',
        versiculos: [
            { libro: 'Juan', capitulo: 3, verso: 16, texto: 'De tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.' },
            { libro: '1 Juan', capitulo: 4, verso: 8, texto: 'Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él.' },
            { libro: 'Romanos', capitulo: 5, verso: 8, texto: 'Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.' },
            { libro: '1 Corintios', capitulo: 13, verso: 4, texto: 'El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece;' },
            { libro: 'Proverbios', capitulo: 10, verso: 12, texto: 'El odio despierta rencillas; Pero el amor cubre todos los pecados.' },
            { libro: '1 Corintios', capitulo: 13, verso: 7, texto: 'Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.' },
            { libro: '1 Tesalonicenses', capitulo: 5, verso: 8, texto: 'Pero nosotros, que somos del día, seamos sobrios, habiéndonos vestido con la coraza de la fe y del amor, y con la esperanza de la salvación como yelmo.' },
            { libro: 'Cantares', capitulo: 8, verso: 7, texto: 'Las aguas muchas no podrían apagar el amor, Ni lo ahogarían los ríos. Si diese el hombre todos los bienes de su casa por este amor, de cierto lo menospreciarían.' },
            { libro: '1 Pedro', capitulo: 4, verso: 8, texto: 'y ante todo, tened entre vosotros fervoroso amor; porque el amor cubrirá multitud de pecados.' },
            { libro: 'Efesios', capitulo: 5, verso: 2, texto: 'y andad en amor, como también Cristo nos amó, y se entregó a sí mismo por nosotros, ofrenda y sacrificio a Dios de olor fragante.' }
        ]
    },
    paz: {
        icon: '☮️',
        descripcion: 'La paz que trasciende todo entendimiento',
        versiculos: [
            { libro: 'Filipenses', capitulo: 4, verso: 7, texto: 'Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.' },
            { libro: 'Romanos', capitulo: 5, verso: 1, texto: 'Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo;' },
            { libro: 'Isaías', capitulo: 26, verso: 3, texto: 'Al de firme propósito guardarás en completa paz, porque en ti ha puesto su confianza.' },
            { libro: 'Juan', capitulo: 14, verso: 27, texto: 'La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.' },
            { libro: 'Colosenses', capitulo: 3, verso: 15, texto: 'Y la paz de Dios gobierne en vuestros corazones, a la cual asimismo fuisteis llamados en un solo cuerpo; y sed agradecidos.' },
            { libro: 'Mateo', capitulo: 5, verso: 9, texto: 'Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios.' },
            { libro: 'Hebreos', capitulo: 12, verso: 14, texto: 'Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor.' },
            { libro: 'Proverbios', capitulo: 12, verso: 20, texto: 'Engaño hay en el corazón de los que piensan el mal; Pero alegría en el de los que piensan el bien.' },
            { libro: '2 Timoteo', capitulo: 2, verso: 22, texto: 'Huye asimismo de las pasiones juveniles, y sigue la justicia, la fe, el amor y la paz, con los que de corazón limpio invocan al Señor.' },
            { libro: 'Isaías', capitulo: 9, verso: 6, texto: 'Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz.' }
        ]
    },
    fe: {
        icon: '🙏',
        descripcion: 'La fe que mueve montañas',
        versiculos: [
            { libro: 'Hebreos', capitulo: 11, verso: 1, texto: 'Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.' },
            { libro: 'Marcos', capitulo: 11, verso: 24, texto: 'Por tanto, os digo que todo cuanto pidiereis orando, creed que lo recibiréis, y os vendrá.' },
            { libro: 'Romanos', capitulo: 10, verso: 17, texto: 'Así que la fe es por el oír, y el oír, por la palabra de Dios.' },
            { libro: '2 Corintios', capitulo: 5, verso: 7, texto: 'porque por fe andamos, no por vista;' },
            { libro: 'Proverbios', capitulo: 3, verso: 5, texto: 'Fíate de Jehová de todo tu corazón, Y no te apoyes en tu propia prudencia.' },
            { libro: 'Hebreos', capitulo: 11, verso: 6, texto: 'Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan.' },
            { libro: 'Gálatas', capitulo: 3, verso: 11, texto: 'Y que por la ley ninguno se justifica para con Dios, es evidente, porque el justo por la fe vivirá.' },
            { libro: 'Efesios', capitulo: 6, verso: 16, texto: 'sobre todo, tomad el escudo de la fe, con que podáis apagar todos los dardos de fuego del maligno.' },
            { libro: 'Romanos', capitulo: 4, verso: 20, texto: 'Tampoco dudó, por incredulidad, de la promesa de Dios, sino que se fortaleció en fe, dando gloria a Dios,' },
            { libro: '1 Pedro', capitulo: 1, verso: 7, texto: 'para que sometida a prueba vuestra fe, mucho más preciosa que el oro, el cual aunque perecedero se prueba con fuego, sea hallada en alabanza, gloria y honra cuando sea manifestado Jesucristo;' }
        ]
    },
    esperanza: {
        icon: '🌅',
        descripcion: 'La esperanza en tiempos difíciles',
        versiculos: [
            { libro: 'Romanos', capitulo: 15, verso: 13, texto: 'Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo.' },
            { libro: 'Hebreos', capitulo: 6, verso: 19, texto: 'la cual tenemos como segura y firme ancla del alma, y que penetra hasta dentro del velo;' },
            { libro: 'Salmos', capitulo: 42, verso: 5, texto: '¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, Salvación mía y Dios mío.' },
            { libro: '1 Pedro', capitulo: 1, verso: 3, texto: 'Bendito el Dios y Padre de nuestro Señor Jesucristo, que según su misericordia grande nos hizo renacer para una esperanza viva, por la resurrección de Jesucristo de los muertos,' },
            { libro: 'Jeremías', capitulo: 29, verso: 11, texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.' },
            { libro: 'Salmos', capitulo: 71, verso: 14, texto: 'Yo empero continuaré esperando, Y añadiré a tus alabanzas más y más.' },
            { libro: 'Tito', capitulo: 2, verso: 13, texto: 'aguardando la esperanza bienaventurada y la manifestación gloriosa de nuestro gran Dios y Salvador Jesucristo;' },
            { libro: 'Colosenses', capitulo: 1, verso: 27, texto: 'a quienes Dios quiso dar a conocer las riquezas de la gloria de este misterio entre los gentiles; que es Cristo en vosotros, la esperanza de gloria,' },
            { libro: 'Romanos', capitulo: 8, verso: 24, texto: 'Porque en esperanza hemos sido salvos; pero la esperanza que se ve, no es esperanza; porque ¿qué espera uno lo que ve?' },
            { libro: 'Salmos', capitulo: 146, verso: 5, texto: 'Bienaventurado aquel cuyo ayudador es el Dios de Jacob, Cuya esperanza está en Jehová su Dios,' }
        ]
    },
    paciencia: {
        icon: '⏳',
        descripcion: 'La virtud de esperar con fortaleza',
        versiculos: [
            { libro: 'Romanos', capitulo: 12, verso: 12, texto: 'gozosos en la esperanza; sufridos en la tribulación; constantes en la oración;' },
            { libro: 'Gálatas', capitulo: 5, verso: 22, texto: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe,' },
            { libro: 'Hebreos', capitulo: 12, verso: 1, texto: 'Por tanto, nosotros también, teniendo en derredor nuestro una tan grande nube de testigos, despojémonos de todo peso y del pecado que nos asedia, y corramos con paciencia la carrera que nos es propuesta,' },
            { libro: 'Santiago', capitulo: 1, verso: 4, texto: 'Mas tenga la paciencia su obra completa, para que seáis perfectos y cabales, sin que os falte cosa alguna.' },
            { libro: 'Colosenses', capitulo: 1, verso: 11, texto: 'fortalecidos con todo poder, conforme a la potencia de su gloria, para toda paciencia y longanimidad;' },
            { libro: '2 Timoteo', capitulo: 2, verso: 24, texto: 'Porque el siervo del Señor no debe ser contencioso, sino amable para con todos, apto para enseñar, sufrido;' },
            { libro: 'Proverbios', capitulo: 15, verso: 18, texto: 'El hombre iracundo levanta contienda; Mas el lento para la ira apacigua la rencilla.' },
            { libro: 'Eclesiastés', capitulo: 7, verso: 8, texto: 'Mejor es el fin del negocio que su principio; Mejor es el sufrido de espíritu que el altivo de espíritu.' },
            { libro: '1 Tesalonicenses', capitulo: 5, verso: 14, texto: 'También os rogamos, hermanos, que amonestéis a los ociosos, que alentéis a los de poco ánimo, que sostengáis a los débiles, que seáis pacientes para con todos.' },
            { libro: 'Salmos', capitulo: 27, verso: 14, texto: 'Aguarda a Jehová; Esfuérzate, y él fortalecerá tu corazón; Sí, aguarda a Jehová.' }
        ]
    },
    tristeza: {
        icon: '😢',
        descripcion: 'Consuelo en la aflicción',
        versiculos: [
            { libro: 'Salmos', capitulo: 34, verso: 18, texto: 'Cercano está Jehová a los quebrantados de corazón; Y salva a los contritos de espíritu.' },
            { libro: 'Mateo', capitulo: 5, verso: 4, texto: 'Bienaventurados los que lloran, porque ellos recibirán consolación.' },
            { libro: '2 Corintios', capitulo: 1, verso: 4, texto: 'quien nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación, por medio de la consolación con que nosotros somos consolados por Dios.' },
            { libro: 'Juan', capitulo: 16, verso: 33, texto: 'Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo.' },
            { libro: 'Filipenses', capitulo: 4, verso: 4, texto: 'Regocijaos en el Señor siempre. Otra vez os digo: ¡Regocijaos!' },
            { libro: 'Salmos', capitulo: 23, verso: 4, texto: 'Aunque ande en valle de sombra de muerte, No temeré mal alguno, porque tú estarás conmigo; Tu vara y tu cayado me infundirán aliento.' },
            { libro: '2 Corintios', capitulo: 4, verso: 8, texto: 'que por todos lados somos apremiados, pero no aplastados; perplejos, pero no desanimados;' },
            { libro: 'Salmos', capitulo: 30, verso: 5, texto: 'Porque un momento será su ira, Pero su favor dura toda la vida. Por la noche durará el lloro, Y a la mañana vendrá la alegría.' },
            { libro: 'Romanos', capitulo: 12, verso: 15, texto: 'Gozaos con los que se gozan; llorad con los que lloran.' },
            { libro: 'Lamentaciones', capitulo: 3, verso: 22, texto: 'Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias.' }
        ]
    },
    alegria: {
        icon: '😊',
        descripcion: 'El gozo que viene del Espíritu',
        versiculos: [
            { libro: 'Filipenses', capitulo: 4, verso: 4, texto: 'Regocijaos en el Señor siempre. Otra vez os digo: ¡Regocijaos!' },
            { libro: 'Nehemías', capitulo: 8, verso: 10, texto: 'Porque el gozo de Jehová es vuestra fuerza.' },
            { libro: 'Salmos', capitulo: 30, verso: 5, texto: 'Porque un momento será su ira, Pero su favor dura toda la vida. Por la noche durará el lloro, Y a la mañana vendrá la alegría.' },
            { libro: 'Proverbios', capitulo: 17, verso: 22, texto: 'El corazón alegre constituye buen remedio; Mas el espíritu triste seca los huesos.' },
            { libro: '1 Pedro', capitulo: 1, verso: 8, texto: 'a quien amáis sin haberle visto, en quien creyendo, aunque ahora no le veáis, os alegráis con gozo inefable y glorioso;' },
            { libro: 'Salmos', capitulo: 100, verso: 2, texto: 'Servid a Jehová con alegría; Venid ante su presencia con regocijo.' },
            { libro: 'Proverbios', capitulo: 15, verso: 13, texto: 'El corazón alegre hermosea el rostro; Mas por el dolor del corazón el espíritu se abate.' },
            { libro: '1 Tesalonicenses', capitulo: 5, verso: 16, texto: 'Estad siempre gozosos.' },
            { libro: 'Salmos', capitulo: 126, verso: 2, texto: 'Entonces nuestra boca se llenará de risa, Y nuestra lengua de alabanzas; Entonces dirán entre las naciones: Grandes cosas ha hecho Jehová con éstos.' },
            { libro: 'Juan', capitulo: 15, verso: 11, texto: 'Estas cosas os he hablado, para que mi gozo esté en vosotros, y vuestro gozo sea cumplido.' }
        ]
    },
    perdón: {
        icon: '🕊️',
        descripcion: 'La gracia del perdón divino',
        versiculos: [
            { libro: 'Efesios', capitulo: 1, verso: 7, texto: 'en quien tenemos redención por su sangre, el perdón de pecados según las riquezas de su gracia,' },
            { libro: 'Mateo', capitulo: 6, verso: 14, texto: 'Porque si perdonáis a los hombres sus ofensas, os perdonará también a vosotros vuestro Padre celestial;' },
            { libro: '1 Juan', capitulo: 1, verso: 9, texto: 'Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.' },
            { libro: 'Colosenses', capitulo: 3, verso: 13, texto: 'soportándoos los unos a los otros, y perdonándoos los unos a los otros si alguno tuviere queja contra otro. De la manera que Cristo os perdonó, así también hacedlo vosotros.' },
            { libro: 'Salmos', capitulo: 103, verso: 12, texto: 'Cuanto está lejos el oriente del occidente, Hizo alejar de nosotros nuestras rebeliones.' },
            { libro: 'Miqueas', capitulo: 7, verso: 19, texto: 'Volverá a tenernos piedad, y sepultará nuestras iniquidades, y echará en lo profundo del mar todos nuestros pecados.' },
            { libro: 'Proverbios', capitulo: 17, verso: 9, texto: 'El que cubre la falta busca amistad; Mas el que la divulga, aparta al amigo.' },
            { libro: 'Mateo', capitulo: 18, verso: 22, texto: 'Jesús le dijo: No te digo hasta siete, sino hasta setenta veces siete.' },
            { libro: 'Efesios', capitulo: 4, verso: 32, texto: 'Antes sed benignos unos con otros, misericordiosos, perdonándoos los unos a los otros, como Dios también os perdonó a vosotros en Cristo.' },
            { libro: 'Romanos', capitulo: 3, verso: 24, texto: 'siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús,' }
        ]
    },
    fuerza: {
        icon: '💪',
        descripcion: 'La fortaleza que viene de Dios',
        versiculos: [
            { libro: 'Filipenses', capitulo: 4, verso: 13, texto: 'Todo lo puedo en Cristo que me fortalece.' },
            { libro: 'Salmos', capitulo: 28, verso: 7, texto: 'Jehová es mi fortaleza y mi escudo; En él confió mi corazón, y fui ayudado, Por lo que se alegró mi corazón, Y con mi cántico le alabaré.' },
            { libro: 'Isaías', capitulo: 40, verso: 29, texto: 'Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.' },
            { libro: '2 Timoteo', capitulo: 2, verso: 1, texto: 'Tú, pues, hijo mío, esfuérzate en la gracia que es en Cristo Jesús.' },
            { libro: 'Proverbios', capitulo: 24, verso: 5, texto: 'El hombre sabio es fuerte, Y el hombre de conocimiento aumenta su poder.' },
            { libro: 'Efesios', capitulo: 6, verso: 10, texto: 'Por lo demás, hermanos mios, fortaleceos en el Señor, y en el poder de su fuerza.' },
            { libro: '2 Corintios', capitulo: 12, verso: 9, texto: 'Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.' },
            { libro: 'Salmos', capitulo: 46, verso: 5, texto: 'Dios está en medio de ella; no será conmovida. Dios la ayudará al clarear la mañana.' },
            { libro: 'Nahúm', capitulo: 1, verso: 7, texto: 'Jehová es bueno, fortaleza en el día de la angustia; y conoce a los que en él confían.' },
            { libro: 'Jeremías', capitulo: 32, verso: 27, texto: 'He aquí que yo soy Jehová, Dios de toda carne; ¿hay algo que sea difícil para mí?' }
        ]
    },
    confianza: {
        icon: '🔒',
        descripcion: 'Confianza en la protección divina',
        versiculos: [
            { libro: 'Proverbios', capitulo: 3, verso: 5, texto: 'Fíate de Jehová de todo tu corazón, Y no te apoyes en tu propia prudencia.' },
            { libro: 'Salmos', capitulo: 56, verso: 3, texto: 'En el día que temo, Yo en ti confío.' },
            { libro: 'Isaías', capitulo: 26, verso: 4, texto: 'Confiad en Jehová perpetuamente, porque en Jehová el Señor hay fortaleza de siglos.' },
            { libro: '2 Timoteo', capitulo: 1, verso: 7, texto: 'Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.' },
            { libro: '1 Pedro', capitulo: 5, verso: 7, texto: 'echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.' },
            { libro: 'Proverbios', capitulo: 29, verso: 25, texto: 'El temor del hombre pondrá lazo; Mas el que confía en Jehová será exaltado.' },
            { libro: 'Salmos', capitulo: 37, verso: 3, texto: 'Confía en Jehová, y haz el bien; Y habitarás en la tierra, y te apacentarás de la verdad.' },
            { libro: 'Filipenses', capitulo: 4, verso: 6, texto: 'Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias.' },
            { libro: '1 Pedro', capitulo: 3, verso: 14, texto: 'Mas también si alguna cosa padecéis por causa de la justicia, bienaventurados seréis. Por tanto, no os amedrentéis por temor de ellos, ni os conturbéis,' },
            { libro: 'Salmos', capitulo: 125, verso: 1, texto: 'Los que confían en Jehová Son como el monte de Sion, Que no se mueve, sino que permanece para siempre.' }
        ]
    },
    humildad: {
        icon: '🙇',
        descripcion: 'La virtud de la humildad ante Dios',
        versiculos: [
            { libro: 'Mateo', capitulo: 23, verso: 12, texto: 'Porque el que se enaltece será humillado, y el que se humilla será enaltecido.' },
            { libro: 'Proverbios', capitulo: 22, verso: 4, texto: 'De la humildad y del temor de Jehová Vienen las riquezas y la honra y la vida.' },
            { libro: 'Filipenses', capitulo: 2, verso: 3, texto: 'nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a sí mismo.' },
            { libro: '1 Pedro', capitulo: 5, verso: 5, texto: 'Igualmente, jóvenes, estad sujetos a los ancianos; y todos, sumisos unos a otros, revestíos de humildad; porque Dios resiste a los soberbios, y da gracia a los humildes.' },
            { libro: 'Proverbios', capitulo: 15, verso: 33, texto: 'El temor de Jehová es enseñanza de sabiduría; Y a la honra precede la humildad.' },
            { libro: 'Santiago', capitulo: 4, verso: 10, texto: 'Humillaos delante del Señor, y él os exaltará.' },
            { libro: 'Colosenses', capitulo: 3, verso: 12, texto: 'Vestiréis pues, como escogidos de Dios, santos y amados, de entrañas de misericordia, de benignidad, de humildad, de mansedumbre, de paciencia;' },
            { libro: 'Proverbios', capitulo: 11, verso: 2, texto: 'Cuando viene la soberbia, viene también la deshonra; Mas con los humildes está la sabiduría.' },
            { libro: '1 Corintios', capitulo: 3, verso: 18, texto: 'Nadie se engañe a sí mismo; si alguno entre vosotros se cree sabio en este siglo, hágase ignorante, para que llegue a ser sabio.' },
            { libro: 'Eclesiastés', capitulo: 4, verso: 13, texto: 'Mejor es el niño pobre y sabio, que el rey viejo y fatuo que no admite consejos.' }
        ]
    },
    justicia: {
        icon: '⚖️',
        descripcion: 'La justicia y rectitud divinas',
        versiculos: [
            { libro: 'Salmos', capitulo: 37, verso: 28, texto: 'Porque Jehová ama la rectitud, y no desampara a sus santos. Para siempre serán guardados; Mas la descendencia de los impíos será talada.' },
            { libro: 'Proverbios', capitulo: 21, verso: 3, texto: 'Mejor es hacer justicia y derecho Que sacrificios.' },
            { libro: 'Isaías', capitulo: 1, verso: 17, texto: 'Aprended a hacer el bien; buscad el juicio, restituid al agraviado, haced justicia al huérfano, amparad a la viuda.' },
            { libro: 'Miqueas', capitulo: 6, verso: 8, texto: 'Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios.' },
            { libro: 'Romanos', capitulo: 12, verso: 21, texto: 'No seas vencido de lo malo, sino vence con el bien el mal.' },
            { libro: 'Proverbios', capitulo: 31, verso: 8, texto: 'Abre tu boca por el mudo En la causa de todos los desvalidos.' },
            { libro: 'Isaías', capitulo: 59, verso: 4, texto: 'No hay quien clame por justicia, Ni quien juzgue por verdad; Confían en vanidad, y hablan mentiras; Conciben maldad, y dan a luz iniquidad.' },
            { libro: 'Amós', capitulo: 5, verso: 24, texto: 'Corra el juicio como las aguas, Y la justicia como impetuoso arroyo.' },
            { libro: '2 Tesalonicenses', capitulo: 1, verso: 6, texto: 'porque es justo delante de Dios pagar con tribulación a los que os atribulan;' },
            { libro: 'Salmos', capitulo: 89, verso: 14, texto: 'Justicia y juicio son el cimiento de tu trono; Misericordia y verdad van delante de tu rostro.' }
        ]
    },
    compasion: {
        icon: '💝',
        descripcion: 'La compasión y misericordia divinas',
        versiculos: [
            { libro: 'Mateo', capitulo: 9, verso: 36, texto: 'Y al ver las multitudes, tuvo compasión de ellas; porque estaban desamparadas y dispersas como ovejas que no tienen pastor.' },
            { libro: 'Lucas', capitulo: 6, verso: 36, texto: 'Sed, pues, misericordiosos, como también vuestro Padre es misericordioso.' },
            { libro: 'Hebreos', capitulo: 10, verso: 34, texto: 'porque también vosotros tuvisteis compasión de los encarcelados, y recibisteis con gozo el despojo de vuestros bienes, sabiendo que tenéis en vosotros una hacienda mejor y que permanece.' },
            { libro: '1 Juan', capitulo: 3, verso: 17, texto: 'Pero el que tiene bienes de este mundo y ve a su hermano tener necesidad, y cierra contra él su corazón, ¿cómo mora el amor de Dios en él?' },
            { libro: 'Proverbios', capitulo: 14, verso: 31, texto: 'El que oprime al pobre afrenta a su Hacedor; Mas el que tiene piedad del pobre lo honra.' },
            { libro: 'Filipenses', capitulo: 2, verso: 4, texto: 'no mirando cada uno por lo suyo propio, sino cada cual también por lo de los otros.' },
            { libro: 'Colosenses', capitulo: 3, verso: 12, texto: 'Vestiréis pues, como escogidos de Dios, santos y amados, de entrañas de misericordia, de benignidad, de humildad, de mansedumbre, de paciencia;' },
            { libro: 'Mateo', capitulo: 25, verso: 35, texto: 'Porque tuve hambre, y me disteis de comer; tuve sed, y me disteis de beber; fui forastero, y me recogisteis;' },
            { libro: 'Proverbios', capitulo: 19, verso: 17, texto: 'Al pobre que se compadece de él presta a Jehová, Y él le dará su paga.' },
            { libro: '1 Pedro', capitulo: 3, verso: 8, texto: 'Finalmente, sed todos de un mismo sentir, compasivos, amándoos fraternalmente, misericordiosos, humildes;' }
        ]
    },
    gratitud: {
        icon: '🙏✨',
        descripcion: 'La acción de gracias continua',
        versiculos: [
            { libro: '1 Tesalonicenses', capitulo: 5, verso: 18, texto: 'Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.' },
            { libro: 'Colosenses', capitulo: 3, verso: 15, texto: 'Y la paz de Dios gobierne en vuestros corazones, a la cual asimismo fuisteis llamados en un solo cuerpo; y sed agradecidos.' },
            { libro: 'Filipenses', capitulo: 4, verso: 6, texto: 'Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias.' },
            { libro: 'Salmos', capitulo: 100, verso: 4, texto: 'Entrad por sus puertas con acción de gracias, Por sus atrios con alabanza; Alabadle, bendecid su nombre.' },
            { libro: 'Colosenses', capitulo: 2, verso: 7, texto: 'arraigados y sobreedificados en él, y confirmados en la fe, así como habéis sido enseñados, abundando en acciones de gracias.' },
            { libro: 'Salmos', capitulo: 107, verso: 1, texto: 'Alabad a Jehová, porque es bueno; Porque para siempre es su misericordia.' },
            { libro: 'Colosenses', capitulo: 4, verso: 2, texto: 'Perseverad en la oración, velando en ella con acción de gracias;' },
            { libro: 'Filipenses', capitulo: 1, verso: 3, texto: 'Doy gracias a mi Dios siempre que me acuerdo de vosotros,' },
            { libro: 'Salmos', capitulo: 35, verso: 18, texto: 'Te confesaré en la gran congregación; Te alabaré entre pueblo numeroso.' },
            { libro: '1 Crónicas', capitulo: 23, verso: 30, texto: 'Así mismo para estar cada mañana a dar gracias y a cantar salmos a Jehová,' }
        ]
    },
    sabiduria: {
        icon: '🧠',
        descripcion: 'La sabiduría que viene de Dios',
        versiculos: [
            { libro: 'Proverbios', capitulo: 3, verso: 13, texto: 'Bienaventurado el hombre que halla la sabiduría, Y que obtiene la inteligencia;' },
            { libro: 'Santiago', capitulo: 1, verso: 5, texto: 'Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.' },
            { libro: '1 Corintios', capitulo: 2, verso: 9, texto: 'Antes bien, como está escrito, Cosas que ojo no vio, ni oído oyó, Ni han subido en corazón de hombre, Son las que Dios ha preparado para los que le aman.' },
            { libro: 'Colosenses', capitulo: 1, verso: 28, texto: 'a quien anunciamos, amonestando a todo hombre, y enseñando a todo hombre en toda sabiduría, a fin de presentar perfecto en Cristo Jesús a todo hombre;' },
            { libro: 'Proverbios', capitulo: 1, verso: 7, texto: 'El principio de la sabiduría es el temor de Jehová; Los insensatos desprecian la sabiduría y la enseñanza.' },
            { libro: 'Proverbios', capitulo: 8, verso: 11, texto: 'Porque mejor es la sabiduría que las piedras preciosas; Y todo lo que se puede desear, no es de compararse con ella.' },
            { libro: 'Santiago', capitulo: 3, verso: 17, texto: 'Pero la sabiduría que es de lo alto es primeramente pura, después pacífica, amable, benigna, llena de misericordia y de buenos frutos, sin incertidumbre ni hipocresía.' },
            { libro: 'Proverbios', capitulo: 2, verso: 6, texto: 'Porque Jehová da la sabiduría, Y de su boca viene el conocimiento y la inteligencia.' },
            { libro: 'Efesios', capitulo: 1, verso: 17, texto: 'para que el Dios de nuestro Señor Jesucristo, el Padre de gloria, os dé espíritu de sabiduría y de revelación en el conocimiento de él;' },
            { libro: 'Proverbios', capitulo: 9, verso: 10, texto: 'El principio de la sabiduría es el temor de Jehová; Y el conocimiento del Santísimo es la inteligencia.' }
        ]
    },
    adoracion: {
        icon: '🙌',
        descripcion: 'La adoración genuina a Dios',
        versiculos: [
            { libro: 'Juan', capitulo: 4, verso: 24, texto: 'Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren.' },
            { libro: 'Salmos', capitulo: 95, verso: 6, texto: 'Venid, adoremos y postrémonos; Arrodillémonos delante de Jehová nuestro Hacedor.' },
            { libro: 'Romanos', capitulo: 12, verso: 1, texto: 'Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional.' },
            { libro: 'Salmos', capitulo: 29, verso: 2, texto: 'Dad a Jehová la gloria debida a su nombre; Adorad a Jehová en la hermosura de la santidad.' },
            { libro: 'Apocalipsis', capitulo: 4, verso: 11, texto: 'Señor, digno eres de recibir la gloria y la honra y el poder; porque tú creaste todas las cosas, y por tu voluntad existen y fueron creadas.' },
            { libro: 'Salmos', capitulo: 100, verso: 1, texto: 'Cantad alegres a Dios, habitantes de toda la tierra.' },
            { libro: 'Nehemías', capitulo: 9, verso: 6, texto: 'Tú solo eres Jehová; tú hiciste los cielos, y los cielos de los cielos, con todo su ejército, la tierra y todo lo que está en ella, los mares y todo lo que hay en ellos; y tú vivificas todas estas cosas, y los ejércitos de los cielos te adoran.' },
            { libro: 'Filipenses', capitulo: 3, verso: 3, texto: 'Porque nosotros somos la circuncisión, los que en espíritu servimos a Dios y nos gloriamos en Cristo Jesús, no teniendo confianza en la carne.' },
            { libro: 'Hebreos', capitulo: 12, verso: 28, texto: 'Así que, recibiendo nosotros un reino inconmovible, tengamos gratitud, y por ella sirvamos a Dios agradándole con temor y reverencia;' },
            { libro: 'Salmos', capitulo: 96, verso: 9, texto: 'Adorad a Jehová en la hermosura de la santidad; Temed delante de él, toda la tierra.' }
        ]
    }
};

// ============================================================
// --- FUNCIONES DEL TEMARIO ---
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    cargarTemas();
});

function cargarTemas() {
    const grid = document.getElementById('temas-grid');
    grid.innerHTML = '';
    
    Object.entries(temasBiblicos).forEach(([tema, datos]) => {
        const card = document.createElement('div');
        card.className = 'tema-card';
        card.onclick = () => mostrarVersiculos(tema);
        
        card.innerHTML = `
            <div class="tema-icon">${datos.icon}</div>
            <h3>${tema.charAt(0).toUpperCase() + tema.slice(1)}</h3>
            <p>${datos.descripcion}</p>
            <span class="tema-count">${datos.versiculos.length} versículos</span>
        `;
        
        grid.appendChild(card);
    });
}

function mostrarVersiculos(tema) {
    const datos = temasBiblicos[tema];
    const modal = document.getElementById('tema-modal');
    const titulo = document.getElementById('titulo-tema');
    const cuerpo = document.getElementById('versiculos-tema');
    
    titulo.innerHTML = `${datos.icon} ${tema.charAt(0).toUpperCase() + tema.slice(1)}`;
    
    let html = '<div class="versiculos-lista">';
    datos.versiculos.forEach(v => {
        html += `
            <div class="versiculo-item">
                <div class="versiculo-referencia">${v.libro} ${v.capitulo}:${v.verso}</div>
                <div class="versiculo-texto">${v.texto}</div>
            </div>
        `;
    });
    html += '</div>';
    
    cuerpo.innerHTML = html;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
}

function cerrarTemaModal() {
    const modal = document.getElementById('tema-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

function filtrarTemas() {
    const busqueda = document.getElementById('buscar-tema').value.toLowerCase();
    const grid = document.getElementById('temas-grid');
    const cards = grid.querySelectorAll('.tema-card');
    
    let visible = 0;
    cards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        const descripcion = card.querySelector('p').textContent.toLowerCase();
        
        if (titulo.includes(busqueda) || descripcion.includes(busqueda)) {
            card.style.display = '';
            visible++;
        } else {
            card.style.display = 'none';
        }
    });
    
    if (visible === 0) {
        grid.innerHTML = '<div class="no-resultados" style="grid-column: 1/-1;"><p>No se encontraron temas que coincidan con tu búsqueda</p></div>';
    }
}

function volverAlMenu() {
    window.location.href = 'index.html';
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(e) {
    const modal = document.getElementById('tema-modal');
    if (e.target === modal) {
        cerrarTemaModal();
    }
});
