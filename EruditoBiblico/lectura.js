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
