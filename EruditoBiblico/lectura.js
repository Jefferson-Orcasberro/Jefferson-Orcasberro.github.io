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
            1: 'En el inicio de todo, Dios creó los cielos y la tierra. Este capítulo describe la creación del universo en seis días y el descanso divino. Es fundamental para entender la visión cristiana del origen de la vida y el propósito divino en la creación.',
            2: 'Después de crear todo, Dios descansa el séptimo día. Se describe la creación del hombre y la mujer en el Jardín del Edén. Este capítulo establece las bases para la relación humana con Dios y con la creación.',
            3: 'El relato de la tentación y la caída del hombre. La serpiente engaña a Eva, quien come del fruto prohibido y lo da a Adán. Este es el primer pecado de la humanidad, que tendrá consecuencias eternas.'
        },
        'Éxodo': {
            1: 'Los israelitas están en esclavitud en Egipto. Este capítulo describe cómo se multiplican a pesar de la opresión. El contexto histórico es crucial: Egipto era una potencia mundial y la esclavitud representaba la cautividad.',
            2: 'Nace Moisés durante la persecución de bebés hebreos. Siendo bebé es salvado y criado por la hija del Faraón. Este es el inicio de la historia de liberación del pueblo de Dios.',
            3: 'Dios se revela a Moisés en la zarza ardiente. Lo comisiona para liberar a los israelitas de Egipto. Este es un momento de vocación divina fundamental en la historia de Israel.'
        },
        'Salmos': {
            23: 'El Salmo más famoso de la Biblia. Expresa confianza en Dios como pastor que cuida y guía. Es una oración de consuelo y esperanza en tiempos de dificultad.',
            42: 'Un salmo de lamentación y esperanza. El salmista expresa su sed de Dios en medio de la angustia. Refleja la experiencia humana de buscar a Dios en momentos difíciles.'
        }
    };
    
    // Buscar en la base de datos local
    if (baseDatos[libro] && baseDatos[libro][capitulo]) {
        return formatearContextoLocal(baseDatos[libro][capitulo]);
    }
    
    // Contexto genérico si no existe en la base de datos
    return `
        <p><strong>📖 ${libro} ${capitulo}</strong></p>
        <p>Este capítulo es parte de la Biblia, la palabra de Dios revelada a la humanidad. Para obtener un contexto histórico detallado, asegúrate de tener conexión a internet para consultar con nuestra IA.</p>
        <p><strong>Sugerencias para estudio:</strong></p>
        <ul>
            <li>Lee el capítulo completo varias veces</li>
            <li>Identifica los personajes principales</li>
            <li>Nota las acciones y palabras clave</li>
            <li>Reflexiona sobre el mensaje espiritual</li>
            <li>Busca conexiones con otros pasajes bíblicos</li>
        </ul>
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
        <p><strong>📖 Contexto Histórico y Espiritual</strong></p>
        <p>${texto}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: rgba(212, 175, 55, 0.1); border-left: 4px solid var(--secondary-color); border-radius: 4px;">
            <p style="margin: 0;"><strong>💡 Nota:</strong> Este contexto fue generado localmente. Para contextos más detallados, conecta a internet para acceder a nuestra IA.</p>
        </div>
    `;
}
