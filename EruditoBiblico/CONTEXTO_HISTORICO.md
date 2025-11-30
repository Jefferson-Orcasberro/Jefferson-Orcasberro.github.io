# 📖 Sistema de Contexto Histórico - Erudito Bíblico

## Descripción General

El sistema de **Contexto Histórico** es una característica que utiliza inteligencia artificial gratuita para generar análisis contextuales de capítulos bíblicos. Permite a los estudiantes de la Biblia obtener información sobre el trasfondo histórico, cultural y espiritual de cualquier capítulo seleccionado.

## Características

✅ **Contexto Histórico Automático**: Genera contexto detallado usando IA  
✅ **Múltiples Perspectivas**: Incluye contexto histórico, personajes, temas y significado espiritual  
✅ **Cache Inteligente**: Guarda contextos ya generados para acceso rápido  
✅ **Fallback Local**: Si las APIs no están disponibles, usa una base de datos local  
✅ **Interfaz Modal**: Presentación clara y no intrusiva del contenido  
✅ **Responsive**: Funciona perfectamente en móvil, tablet y desktop  

## Cómo Funciona

### 1. **Acceso a la Función**

En la página de lectura bíblica (`lectura.html`), encontrarás dos botones en los controles:
- **"Cargar"** (azul): Carga los versículos del capítulo
- **"📚 Contexto"** (púrpura): Genera el contexto histórico

### 2. **Proceso de Generación**

1. Selecciona un **Libro** de la lista desplegable
2. Selecciona un **Capítulo**
3. Haz clic en **"📚 Contexto"**
4. Se abre un modal mostrando "Generando contexto histórico..."
5. La IA genera el contenido y se muestra en el modal

### 3. **Estructura del Contexto Generado**

El contexto generado incluye:

```
📍 Contexto Histórico
- Cuándo sucedieron los eventos
- Quién gobernaba
- Qué ocurría en el mundo

👥 Personajes Principales
- Lista de personajes clave

🎯 Temas Centrales
- Temas principales del capítulo

✨ Significado Espiritual
- Lecciones y significado para creyentes
```

## APIs Utilizadas

### Orden de Intento

El sistema intenta usar APIs en este orden:

1. **OpenRouter** (Modelo: Mistral-7B-Instruct)
   - Gratuito con límite de requests
   - Documentación: https://openrouter.ai/

2. **Together AI** (Modelo: Mistral-7B-Instruct)
   - Alternativa gratuita
   - Documentación: https://www.together.ai/

3. **Base de Datos Local**
   - Si ambas APIs fallan, usa contextos predefinidos
   - Incluye información básica para libros comunes

## Detalles Técnicos

### Archivos Modificados

- **lectura.html**: Agregado botón y modal
- **lectura.js**: Funciones de IA y contexto
- **lectura-style.css**: Estilos del modal y spinner

### Nuevas Funciones en `lectura.js`

```javascript
obtenerContextoHistorico()        // Función principal
generarContextoIA()               // Llamadas a APIs
generarContextoLocal()            // Fallback local
formatearContexto()               // Formatea el texto
mostrarContexto()                 // Muestra en modal
cerrarContexto()                  // Cierra modal
```

### Variables Globales

```javascript
libroActual          // Libro seleccionado
capituloActual       // Capítulo seleccionado
cacheContexto        // Almacena contextos generados
```

## Estilos Principales

### Modal de Contexto

```css
.modal-contexto              /* Contenedor principal */
.modal-contexto-content      /* Contenedor del contenido */
.modal-contexto-header       /* Encabezado */
.modal-contexto-body         /* Cuerpo con texto */
.modal-contexto-footer       /* Pie del modal */
```

### Animaciones

- **fadeIn**: Aparición suave del modal
- **slideIn**: Deslizamiento del contenido
- **spin**: Animación del spinner de carga

## Limitaciones y Consideraciones

### Rate Limiting

Las APIs gratuitas tienen limitaciones:
- **OpenRouter**: Límite de requests por minuto (varía según el modelo)
- **Together AI**: Límite de requests según la cuenta gratuita

Si alcanzas el límite, el sistema automáticamente:
1. Muestra un error amigable
2. Te sugiere intentar más tarde
3. Ofrece contenido local como alternativa

### Funcionalidad Offline

Si **no tienes conexión a internet**:
- Las APIs no funcionarán
- Se usará automáticamente la base de datos local
- El contexto será más básico pero útil

### Privacidad

- **Sin datos personales**: No se recopila información del usuario
- **Sin almacenamiento remoto**: Solo cache local en el navegador
- **Requests mínimas**: Solo se hacen cuando el usuario lo solicita

## Futuras Mejoras

🔮 **Posibles características a añadir:**

1. **API Key Configurable**: Permitir a usuarios usar su propia API key
2. **Más Idiomas**: Contexto en portugués, inglés, francés, etc.
3. **Exportar PDF**: Descargar el contexto como PDF
4. **Comparativas**: Comparar contextos de múltiples capítulos
5. **Temas Relacionados**: Sugerir capítulos relacionados
6. **Comentarios Históricos**: Base de datos de comentarios externos
7. **Mapas Históricos**: Visualizar la geografía bíblica
8. **Cronología**: Línea de tiempo de eventos bíblicos

## Solución de Problemas

### "No se pudo generar el contexto"

**Posibles causas:**
- Sin conexión a internet
- APIs alcanzaron rate limit
- Servidor API no disponible

**Soluciones:**
1. Verifica tu conexión a internet
2. Espera unos minutos e intenta de nuevo
3. Recarga la página
4. Si persiste, usa el contexto local

### Modal no aparece

**Posibles causas:**
- JavaScript desactivado
- Conflicto con otro script

**Soluciones:**
1. Verifica que JavaScript esté activado
2. Limpia el caché del navegador
3. Intenta en otro navegador

### Contexto muy corto o genérico

**Posibles causas:**
- API devolvió respuesta incompleta
- Rate limit afectó la calidad

**Soluciones:**
1. Intenta de nuevo en unos minutos
2. Selecciona otro capítulo primero
3. Usa otra API reloading la página

## Contacto y Soporte

Para reportar problemas o sugerir mejoras:
- Abre un issue en el repositorio GitHub
- Consulta la documentación de las APIs usadas

## Licencia

Este sistema usa:
- **OpenRouter**: Licencia de la plataforma (verificar términos)
- **Together AI**: Licencia de la plataforma (verificar términos)
- **Código local**: MIT License

---

**Última actualización**: Noviembre 30, 2025
**Versión**: 1.0
