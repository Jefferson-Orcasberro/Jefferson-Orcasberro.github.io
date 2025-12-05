// Función para navegar a diferentes secciones
function irA(seccion) {
    switch(seccion) {
        case 'lectura':
            window.location.href = 'lectura.html';
            break;
        case 'temario':
            window.location.href = 'temario.html';
            break;
        case 'juego':
            window.location.href = 'juego.html';
            break;
        default:
            break;
    }
}

// Función para salir
function salir() {
    window.location.href = '../index.html';
}

// Evento para el botón de regreso
document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (confirm('¿Deseas volver a la página principal?')) {
                window.location.href = '../index.html';
            }
        });
    }
});

console.log('Erudito Bíblico - Menú Principal Cargado');
