// Se importa de biblia.js (LIBROS_INFO y BIBLIA_RV1960)

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    poblarLibros();
});

// Poblar el selector de libros
function poblarLibros() {
    const libroSelect = document.getElementById('libro-select');
    libroSelect.innerHTML = '<option value="">Selecciona un libro...</option>';
    
    LIBROS_INFO.forEach((libro) => {
        const option = document.createElement('option');
        option.value = libro.nombre;
        option.textContent = libro.nombre;
        libroSelect.appendChild(option);
    });
}

// Actualizar capítulos cuando se selecciona un libro
function actualizarCapitulos() {
    const libroSelect = document.getElementById('libro-select');
    const capituloSelect = document.getElementById('capitulo-select');
    const libroNombre = libroSelect.value;
    
    if (libroNombre === '') {
        capituloSelect.innerHTML = '<option value="">Selecciona un capítulo...</option>';
        capituloSelect.disabled = true;
        return;
    }
    
    capituloSelect.disabled = false;
    const libro = obtenerInfoLibro(libroNombre);
    capituloSelect.innerHTML = '<option value="">Selecciona un capítulo...</option>';
    
    for (let i = 1; i <= libro.capitulos; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Capítulo ${i}`;
        capituloSelect.appendChild(option);
    }
}

// Cargar versículos del capítulo seleccionado
function cargarVersiculos() {
    const libroSelect = document.getElementById('libro-select');
    const capituloSelect = document.getElementById('capitulo-select');
    const contenidoDiv = document.getElementById('contenido-biblia');
    const referenciaSpan = document.getElementById('referencia');
    
    const libroNombre = libroSelect.value;
    const capitulo = parseInt(capituloSelect.value);
    
    if (libroNombre === '' || isNaN(capitulo)) {
        contenidoDiv.innerHTML = '<p class="placeholder">Selecciona un libro y capítulo para comenzar a leer</p>';
        referenciaSpan.textContent = 'Referencia: -';
        return;
    }
    
    const versiculos = obtenerVersiculos(libroNombre, capitulo);
    
    // Actualizar referencia
    referenciaSpan.textContent = `${libroNombre} ${capitulo}`;
    
    if (!versiculos || versiculos.length === 0) {
        contenidoDiv.innerHTML = `
            <div class="placeholder">
                <p>📖 ${libroNombre} ${capitulo}</p>
                <p>Este capítulo está disponible próximamente en la base de datos.</p>
                <p style="font-size: 0.85em; margin-top: 20px;">Continuamos actualizando todos los versículos...</p>
            </div>
        `;
        return;
    }
    
    // Mostrar versículos
    let html = `<h3 style="color: var(--secondary-color); text-align: center; margin-bottom: 20px;">${libroNombre} ${capitulo}</h3>`;
    
    versiculos.forEach(v => {
        html += `
            <div class="versiculo">
                <span class="versiculo-numero">${v.verso}</span>
                <span class="versiculo-texto">${v.texto}</span>
            </div>
        `;
    });
    
    contenidoDiv.innerHTML = html;
}

// Volver al menú
function volverAlMenu() {
    window.location.href = 'index.html';
}

// ============================================================
// --- SISTEMA DE CONTEXTO HISTÓRICO CON IA ---
// ============================================================

let libroActual = '';
let capituloActual = 0;
let cacheContexto = {}; // Cache para no repetir llamadas a la API

// Función para obtener contexto histórico
async function obtenerContextoHistorico() {
    const libroSelect = document.getElementById('libro-select');
    const capituloSelect = document.getElementById('capitulo-select');
    
    libroActual = libroSelect.value;
    capituloActual = parseInt(capituloSelect.value);
    
    // Validar que se haya seleccionado un libro y capítulo
    if (libroActual === '' || isNaN(capituloActual)) {
        alert('Por favor, selecciona un libro y capítulo primero.');
        return;
    }
    
    // Abrir modal
    const modal = document.getElementById('contexto-modal');
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    
    // Actualizar referencia en el header del modal
    document.getElementById('contexto-referencia').textContent = `${libroActual} ${capituloActual}`;
    
    const cacheKey = `${libroActual}-${capituloActual}`;
    
    // Si ya existe en cache, mostrar directamente
    if (cacheContexto[cacheKey]) {
        mostrarContexto(cacheContexto[cacheKey]);
        return;
    }
    
    try {
        // Obtener primeros versículos para contexto
        const versiculos = obtenerVersiculos(libroActual, capituloActual);
        let textoBiblia = '';
        
        if (versiculos && versiculos.length > 0) {
            textoBiblia = versiculos.slice(0, 3).map(v => v.texto).join(' ');
        }
        
        // Llamar a la API de IA
        const contexto = await generarContextoIA(libroActual, capituloActual, textoBiblia);
        
        // Guardar en cache
        cacheContexto[cacheKey] = contexto;
        
        // Mostrar el contexto
        mostrarContexto(contexto);
    } catch (error) {
        console.error('Error al generar contexto:', error);
        mostrarErrorContexto();
    }
}

// Función para mostrar el contexto en el modal
function mostrarContexto(contexto) {
    const contenidoDiv = document.getElementById('contexto-contenido');
    
    // Crear HTML con el contexto
    let html = `
        <div class="contexto-text">
            ${contexto}
        </div>
    `;
    
    contenidoDiv.innerHTML = html;
}

// Función para mostrar error en el contexto
function mostrarErrorContexto() {
    const contenidoDiv = document.getElementById('contexto-contenido');
    
    contenidoDiv.innerHTML = `
        <div class="contexto-error">
            <p>❌ No se pudo generar el contexto histórico en este momento.</p>
            <p style="font-size: 0.9em; color: var(--text-secondary); margin-top: 15px;">
                Verifica tu conexión a internet e intenta nuevamente.
            </p>
        </div>
    `;
}

// Cerrar modal de contexto
function cerrarContexto() {
    const modal = document.getElementById('contexto-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', function(event) {
    const modal = document.getElementById('contexto-modal');
    if (event.target === modal) {
        cerrarContexto();
    }
});

// ============================================================
// --- GENERADOR DE CONTEXTO CON IA (API Gratuita) ---
// ============================================================

async function generarContextoIA(libro, capitulo, textoPrincipal) {
    // Primero intentar con OpenRouter (modelo gratuito, sin API key requerida en muchos casos)
    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://jefferson-orcasberro.github.io',
                'X-Title': 'Erudito Bíblico',
                // Sin API key - OpenRouter permite algunas requests gratuitas
            },
            body: JSON.stringify({
                model: 'mistralai/mistral-7b-instruct:free',
                messages: [{
                    role: 'user',
                    content: `Eres un erudito bíblico experto con profundo conocimiento de la historia, cultura y teología. Proporciona un contexto histórico y espiritual detallado sobre ${libro} capítulo ${capitulo} en la Biblia.

Estructura tu respuesta así:

**📍 Contexto Histórico:**
Explica cuándo sucedieron estos eventos, quién gobernaba, qué estaba ocurriendo en el mundo.

**👥 Personajes Principales:**
Lista los personajes clave mencionados en este capítulo.

**🎯 Temas Centrales:**
Identifica los temas principales y mensajes del capítulo.

**✨ Significado Espiritual:**
Explica el significado espiritual y las lecciones clave para los creyentes.

Se conciso pero informativo (máximo 400 palabras). Usa un lenguaje claro y educativo.`
                }],
                temperature: 0.6,
                max_tokens: 600
            })
        });
        
        if (response.ok) {
            const result = await response.json();
            if (result.choices && result.choices[0] && result.choices[0].message) {
                const texto = result.choices[0].message.content;
                return formatearContexto(texto);
            }
        }
    } catch (error) {
        console.log('OpenRouter no disponible, intentando otra fuente...');
    }
    
    // Alternativa: Usar la API de Together AI (también gratuita)
    try {
        const response = await fetch('https://api.together.xyz/inference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'mistralai/Mistral-7B-Instruct-v0.1',
                prompt: `Eres un erudito bíblico. Proporciona contexto sobre ${libro} ${capitulo}:`,
                max_tokens: 400,
                temperature: 0.7,
                top_k: 40,
                top_p: 0.9
            })
        });
        
        if (response.ok) {
            const result = await response.json();
            if (result.output && result.output.choices) {
                const texto = result.output.choices[0].text;
                return formatearContexto(texto);
            }
        }
    } catch (error) {
        console.log('Together AI no disponible, usando generador local...');
    }
    
    // Si ninguna API funciona, usar generador local basado en datos
    return generarContextoLocal(libro, capitulo);
}

// Generador local de contexto (cuando las APIs no están disponibles)
function generarContextoLocal(libro, capitulo) {
    const baseDatos = {
        'Génesis': {
            1: `
                <h3>📖 Génesis 1: La Creación del Universo</h3>
                
                <h4>🕰️ Contexto Histórico y Literario</h4>
                <p>Este capítulo es el comienzo de toda la Biblia y presenta la cosmogonía bíblica (teoría del origen del universo). Fue escrito durante el exilio babilónico (siglo VI a.C.), pero describe eventos de la creación. Contrasta directamente con las mitologías babilónicas de ese tiempo.</p>
                
                <h4>⏰ Período y Ubicación</h4>
                <ul>
                    <li><strong>Tiempo de escritura:</strong> Probablemente durante o después del exilio babilónico (586-538 a.C.)</li>
                    <li><strong>Evento descrito:</strong> Creación del universo (sin fecha literal)</li>
                    <li><strong>Contexto cultural:</strong> Contraste con el mito de Enuma Elish babilónico</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>Dios (Elohim):</strong> Creador único, poderoso y sabio</li>
                    <li><strong>La creación:</strong> Cielos, tierra, plantas, animales y humanidad</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>Monoteísmo vs. politeísmo:</strong> Enfatiza que hay UN Dios único</li>
                    <li><strong>Orden y propósito:</strong> La creación es ordenada, no caótica</li>
                    <li><strong>Naturaleza humana:</strong> El hombre creado "a imagen de Dios"</li>
                    <li><strong>Dominio divino:</strong> Dios tiene autoridad absoluta sobre todo</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>Este capítulo establece que el universo no es eterno ni accidental, sino creado por un Dios personal. El ser humano tiene un <span class="highlight">propósito divino</span> y fue creado con dignidad única. La declaración "y vio que era bueno" repetidata muestra la satisfacción divina con la creación.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> Dios es el origen de todo. Todo existe por su voluntad y bajo su autoridad. Nosotros, como seres humanos, somos la culminación de su obra creativa.
                </div>
            `,
            2: `
                <h3>📖 Génesis 2: El Descanso de Dios y la Creación del Hombre</h3>
                
                <h4>🕰️ Contexto Histórico</h4>
                <p>Este capítulo profundiza en el sexto y séptimo día de la creación. Presenta una perspectiva más íntima de la creación humana y el establecimiento del reposo sabático, un concepto fundamental en la ley israelita.</p>
                
                <h4>⏰ Período</h4>
                <ul>
                    <li><strong>Tiempo sagrado:</strong> El séptimo día, día de descanso divino</li>
                    <li><strong>Lugar:</strong> El Jardín del Edén, un paraíso terrenal</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>Dios:</strong> Creador que desansa y bendice</li>
                    <li><strong>Adán:</strong> Primer hombre, puesto en el jardín</li>
                    <li><strong>Eva (aún no nombrada):</strong> Compañera del hombre</li>
                    <li><strong>Los animales:</strong> Traídos ante Adán para ser nombrados</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>El Shabat (descanso):</strong> Dios descansa y bendice el séptimo día</li>
                    <li><strong>La relación matrimonial:</strong> "Una sola carne"</li>
                    <li><strong>El cuidado de la tierra:</strong> Adán es puesto en el jardín para "labrar" y "guardar"</li>
                    <li><strong>La obediencia:</strong> El mandamiento de no comer del árbol del conocimiento</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>El descanso de Dios no significa que esté inactivo, sino que su obra está completa y satisfecha. El concepto del <span class="highlight">Shabat</span> se convierte en uno de los mandamientos más importantes de la ley israelita. El matrimonio es presentado como la más íntima de las relaciones humanas.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> El descanso es parte del plan divino. La comunión con Dios y con otros es central en la existencia humana. Tenemos responsabilidad de cuidar la creación.
                </div>
            `,
            3: `
                <h3>📖 Génesis 3: La Caída del Hombre</h3>
                
                <h4>🕰️ Contexto Histórico</h4>
                <p>Este es el capítulo más significativo de la Biblia para entender la teología cristiana. Describe el primer pecado de la humanidad y sus consecuencias catastróficas. Es el pivote sobre el cual gira toda la historia de redención.</p>
                
                <h4>⏰ Período</h4>
                <ul>
                    <li><strong>Tiempo:</strong> Después de la creación, en el Jardín del Edén</li>
                    <li><strong>Eventos:</strong> Tentación, desobediencia y expulsión del paraíso</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>La serpiente:</strong> Símbolo del engaño y más tarde interpretada como Satanás</li>
                    <li><strong>Eva:</strong> Primera mujer, engañada por la serpiente</li>
                    <li><strong>Adán:</strong> Come del fruto prohibido tras Eva</li>
                    <li><strong>Dios:</strong> Ejecuta el juicio divino</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>La tentación:</strong> "¿Conque Dios os ha dicho..." - cuestionar la palabra de Dios</li>
                    <li><strong>El pecado original:</strong> Desobediencia a Dios</li>
                    <li><strong>Las consecuencias:</strong> Vergüenza, expulsión, sufrimiento, muerte</li>
                    <li><strong>La promesa de redención:</strong> La "simiente" que aplastará la cabeza de la serpiente (Génesis 3:15)</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>Este capítulo explica el origen del mal y el sufrimiento en el mundo. No es culpa de Dios, sino resultado de la libertad humana mal usada. Sin embargo, contiene la <span class="highlight">primera promesa de salvación</span> (Génesis 3:15), que será cumplida en Jesús.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> La desobediencia a Dios trae muerte espiritual y física. Pero incluso en el juicio, Dios promete redención. La serpiente (mal) será vencida por la "simiente" (Jesucristo).
                </div>
            `
        },
        'Éxodo': {
            1: `
                <h3>📖 Éxodo 1: La Opresión de Israel en Egipto</h3>
                
                <h4>🕰️ Contexto Histórico</h4>
                <p>Este capítulo marca el inicio del libro de Éxodo. Los israelitas, descendientes de Jacob, han crecido en Egipto durante 400 años pero ahora enfrentan opresión bajo un nuevo Faraón. Históricamente, esto probablemente ocurrió durante el período de la dinastía XIX (circa 1290-1210 a.C.).</p>
                
                <h4>⏰ Período y Ubicación</h4>
                <ul>
                    <li><strong>Tiempo:</strong> Probablemente siglo XIII a.C. (dinastía XIX bajo Ramsés II)</li>
                    <li><strong>Lugar:</strong> Tierra de Gosén, Egipto</li>
                    <li><strong>Duración:</strong> Aproximadamente 430 años de estancia en Egipto</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>Los hijos de Israel:</strong> Descendientes de Jacob, multiplicándose rápidamente</li>
                    <li><strong>Un nuevo Faraón:</strong> Que "no conocía a José", símbolo del olvido y la hostilidad</li>
                    <li><strong>Egipto:</strong> Potencia mundial, economía basada en la esclavitud</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>Multiplicación:</strong> Israel crece en número a pesar de la opresión</li>
                    <li><strong>Esclavitud:</strong> "Servicio duro" con "dureza"</li>
                    <li><strong>Temor del Faraón:</strong> Miedo a que Israel se rebele o se alíe con enemigos</li>
                    <li><strong>Resistencia israelita:</strong> A pesar del sufrimiento, el pueblo no desaparece</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>Este capítulo muestra que incluso bajo la opresión más brutal, el pueblo de Dios se multiplica. El Faraón intenta controlar a Israel mediante crueldad, pero Dios está trabajando en los <span class="highlight">bastidores de la historia</span>. La esclavitud en Egipto se convierte en un símbolo teológico de la opresión del pecado.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> Dios no olvida a su pueblo incluso en la mayor opresión. La esclavitud extrema precede a la liberación extrema. Los planes humanos de destrucción no pueden detener el propósito de Dios.
                </div>
            `,
            2: `
                <h3>📖 Éxodo 2: El Nacimiento y Crianza de Moisés</h3>
                
                <h4>🕰️ Contexto Histórico</h4>
                <p>Este capítulo narra el nacimiento de Moisés durante la más brutal persecución de bebés hebreos. El Faraón ordena matar todos los varones hebreos para controlar su población. Moisés es salvado milagrosamente y criado en el palacio del Faraón.</p>
                
                <h4>⏰ Período</h4>
                <ul>
                    <li><strong>Edad de Moisés:</strong> Nace durante la persecución de bebés</li>
                    <li><strong>Crecimiento:</strong> 40 años en Egipto, 40 años en Madián (Éxodo 7:7)</li>
                    <li><strong>Ubicación:</strong> Orilla del Nilo, palacio del Faraón, tierra de Madián</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>Moisés:</strong> Futuro liberador de Israel, criado entre dos mundos</li>
                    <li><strong>Su madre:</strong> Jocabed, muestra fe extrema</li>
                    <li><strong>Su hermana Miriam:</strong> Vela por él desde lejos</li>
                    <li><strong>La hija del Faraón:</strong> Actúa con compasión, desafiando a su padre</li>
                    <li><strong>Jetro:</strong> Sacerdote de Madián, futuro suegro de Moisés</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>La providencia de Dios:</strong> Moisés es salvado de forma providencial</li>
                    <li><strong>Ironía divina:</strong> El futuro libertador es criado en el palacio del tirano</li>
                    <li><strong>Identidad dividida:</strong> Moisés crece en dos mundos: Egipto e Israel</li>
                    <li><strong>Justicia inicial:</strong> Moisés mata a un egipcio opresor</li>
                    <li><strong>Exilio preparatorio:</strong> 40 años en Madián lo preparan para su misión</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>La salvación de Moisés del agua es una prefiguración del bautismo. Su crianza en el palacio mientras su pueblo sufre refleja la <span class="highlight">experiencia de muchos héroes bíblicos</span> que son preservados por Dios. El exilio en Madián es necesario para su preparación espiritual.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> Dios preserva a sus siervos incluso en circunstancias imposibles. El camino a la grandeza espiritual a menudo pasa por el desierto y la soledad. Nuestras debilidades y errores no disqualifican al Señor de usarnos.
                </div>
            `,
            3: `
                <h3>📖 Éxodo 3: La Llamada de Moisés en la Zarza Ardiente</h3>
                
                <h4>🕰️ Contexto Histórico</h4>
                <p>Después de 40 años en el exilio de Madián, Moisés experimenta el encuentro más significativo de su vida. Dios se revela a sí mismo a través de una zarza ardiente y comisiona a Moisés para liberar a Israel. Este es el punto de inflexión de la historia de redención.</p>
                
                <h4>⏰ Período y Ubicación</h4>
                <ul>
                    <li><strong>Tiempo:</strong> 40 años después de la huida de Moisés</li>
                    <li><strong>Ubicación:</strong> Monte Horeb (Sinaí), en el desierto de Madián</li>
                    <li><strong>Contexto temporal:</strong> Justo antes del Éxodo de Egipto</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>Dios:</strong> Se revela como "Yo Soy" (YHWH), revelando su nombre divino</li>
                    <li><strong>Moisés:</strong> Un pastor anciano que se ve a sí mismo como inadecuado</li>
                    <li><strong>Israel:</strong> En esclavitud, clamando a Dios</li>
                    <li><strong>El Faraón:</strong> Opresor que será confrontado</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>La teofanía:</strong> Manifestación visible de Dios (zarza ardiente)</li>
                    <li><strong>El nombre de Dios:</strong> "YO SOY EL QUE SOY" revela su naturaleza eterna</li>
                    <li><strong>La misión:</strong> Liberar a Israel de Egipto</li>
                    <li><strong>Las objeciones de Moisés:</strong> "¿Quién soy yo?" "¿Qué nombre le diré?"</li>
                    <li><strong>La promesa:</strong> Dios irá con Moisés</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>La zarza ardiente representa la presencia ardiente de Dios sin ser consumida, simbolizando a Israel siendo oprimido pero no destruido. El nombre "YO SOY" enfatiza la <span class="highlight">existencia eterna y autosuficiente de Dios</span>. Moisés representa nuestra propia inadecuación ante la llamada de Dios, pero recibe la seguridad de Su presencia.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> Dios ve el sufrimiento de su pueblo y actúa. Él revela su nombre y carácter a través de Su palabra. Nuestras debilidades no son obstáculo cuando Dios nos envía. "Yo estaré contigo" es la garantía suprema.
                </div>
            `
        },
        'Salmos': {
            23: `
                <h3>📖 Salmo 23: El Señor Es Mi Pastor</h3>
                
                <h4>🕰️ Contexto Histórico</h4>
                <p>Este es el salmo más amado de la Biblia, tradicionalmente atribuido al rey David. Fue escrito probablemente durante su reinado (1010-970 a.C.), cuando tenía experiencia como pastor de ovejas (1 Samuel 17:34-37). Utiliza la metáfora pastoral para describir la relación entre Dios y su pueblo.</p>
                
                <h4>⏰ Período</h4>
                <ul>
                    <li><strong>Autor probable:</strong> Rey David</li>
                    <li><strong>Contexto:</strong> Después de experiencias peligrosas (Saúl lo perseguía, enfrentó depredadores como pastor)</li>
                    <li><strong>Propósito:</strong> Consuelo y confianza en Dios</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>Dios:</strong> El Pastor supremo, guía y protector</li>
                    <li><strong>El salmista (probablemente David):</strong> Una oveja confiada en su pastor</li>
                    <li><strong>Las ovejas:</strong> Representan al pueblo de Dios o creyentes individuales</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>Cuidado pastoral:</strong> "Nada me faltará" - provisión completa</li>
                    <li><strong>Reposo y descanso:</strong> "Me hará descansar en verdes pastos"</li>
                    <li><strong>Restauración:</strong> "Confortará mi alma" - sanación emocional</li>
                    <li><strong>Guía en la oscuridad:</strong> "Aunque ande en valle de sombra de muerte"</li>
                    <li><strong>Protección y comunión:</strong> "Tu vara y tu cayado me infundirán aliento"</li>
                    <li><strong>Abundancia en presencia de enemigos:</strong> "Aderezas mesa delante de mí"</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>Este salmo expresa confianza total en Dios incluso en circunstancias adversas. La metáfora del pastor establece una relación íntima de cuidado, donde el creyente no es un siervo temeroso sino una <span class="highlight">oveja amada y cuidada</span>. El "valle de sombra de muerte" representa nuestras mayores pruebas, pero en ellas Dios está presente.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> Confianza completa en Dios elimina el miedo. El Señor no solo nos guía, sino que nos restaura y nos exalta. Su bondad nos seguirá todos los días de nuestra vida. La casa de Dios es nuestro hogar eterno.
                </div>
            `,
            42: `
                <h3>📖 Salmo 42: Sed de Dios</h3>
                
                <h4>🕰️ Contexto Histórico</h4>
                <p>Este salmo es un salmo de lamentación y esperanza, escrito probablemente durante una separación forzada del templo. El salmista ansia estar en la presencia de Dios pero sufre persecución y angustia. Es un salmo particularmente relevante para quienes experimentan la ausencia aparente de Dios.</p>
                
                <h4>⏰ Período</h4>
                <ul>
                    <li><strong>Contexto:</strong> Exilio o separación del templo</li>
                    <li><strong>Emocional:</strong> Profunda angustia espiritual y física</li>
                    <li><strong>Ubicación probable:</strong> Tierra de Hermón, lejos de Jerusalén</li>
                </ul>
                
                <h4>👥 Personajes Principales</h4>
                <ul>
                    <li><strong>El salmista:</strong> Perseguido, lejano de la casa de Dios</li>
                    <li><strong>Dios:</strong> Objeto de la esperanza y el ansia del salmista</li>
                    <li><strong>Los enemigos:</strong> Burladores que preguntan "¿Dónde está tu Dios?"</li>
                    <li><strong>El alma:</strong> Centro de la angustia y la esperanza</li>
                </ul>
                
                <h4>🎯 Temas Principales</h4>
                <ul>
                    <li><strong>Sed espiritual:</strong> "Como el ciervo brama por las aguas" - ansia profunda</li>
                    <li><strong>Ausencia aparente:</strong> "¿Por qué te has olvidado de mí?"</li>
                    <li><strong>Angustia emocional:</strong> Derramamiento de lágrimas día y noche</li>
                    <li><strong>Burla de los enemigos:</strong> "¿Dónde está tu Dios?"</li>
                    <li><strong>Esperanza renovada:</strong> "Aún tengo esperanza en Dios" (estribillo repetido)</li>
                    <li><strong>Recordanza confortadora:</strong> "Me acuerdo de cuando iba con la multitud"</li>
                </ul>
                
                <h4>✨ Significado Espiritual</h4>
                <p>Este salmo es honesto sobre las emociones humanas. No niega el sufrimiento ni la aparente ausencia de Dios, pero mantiene <span class="highlight">esperanza a pesar del dolor</span>. La repetición del estribillo "¿Por qué te abates, oh alma mía?" muestra una lucha interna pero también una resolución de confiar en Dios.</p>
                
                <div class="info-box">
                    <strong>💡 Lección clave:</strong> Es legítimo llorar y preguntar dónde está Dios. La fe no significa ausencia de duda, sino esperanza a pesar de la duda. Recordar las obras pasadas de Dios fortalece nuestra fe en tiempos oscuros.
                </div>
            `
        }
    };
    
    // Buscar en la base de datos local
    if (baseDatos[libro] && baseDatos[libro][capitulo]) {
        return formatearContextoLocal(baseDatos[libro][capitulo]);
    }
    
    // Contexto genérico si no existe en la base de datos
    return `
        <h3>📖 ${libro} ${capitulo}</h3>
        <p>Este capítulo es parte de la palabra de Dios revelada a la humanidad a través de la Biblia.</p>
        
        <h4>🔍 Información General</h4>
        <p>Para obtener un contexto histórico detallado y personalizado, asegúrate de tener conexión a internet para consultar con nuestra IA especializada en teología bíblica.</p>
        
        <h4>📝 Sugerencias para Estudio Personal</h4>
        <ul>
            <li><strong>Lee el capítulo completo:</strong> Varias veces para familiarizarte con el contenido</li>
            <li><strong>Identifica personajes clave:</strong> Quiénes son los protagonistas y antagonistas</li>
            <li><strong>Busca palabras repetidas:</strong> Las palabras clave revelan temas principales</li>
            <li><strong>Nota el contexto:</strong> Qué pasó antes y qué viene después</li>
            <li><strong>Reflexiona en lo espiritual:</strong> ¿Qué mensaje hay para mi fe?</li>
            <li><strong>Busca conexiones:</strong> Cómo se conecta con otros pasajes bíblicos</li>
            <li><strong>Aplica a tu vida:</strong> ¿Qué lecciones debo aprender y aplicar?</li>
        </ul>
        
        <div class="info-box">
            <strong>💡 Recordatorio:</strong> La Biblia es la palabra viva de Dios. Pide al Espíritu Santo que te guíe en tu comprensión y aplicación de la Escritura.
        </div>
    `;
}

// Función para formatear el contexto generado por IA
function formatearContexto(texto) {
    // Limpiar el texto
    let html = texto
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/^/g, '<p>')
        .replace(/$/g, '</p>')
        .replace(/(\d+\.|^|\s)(Contexto|Personajes|Temas|Significado|Historia|Lecciones|Detalles)/gi, '<br><strong>$2</strong>')
        .replace(/^<p>/, '<p style="margin-top: 0;">');
    
    return html;
}

// Función para formatear contexto local
function formatearContextoLocal(texto) {
    return `
        <div class="contexto-text">
            ${texto}
        </div>
    `;
}
