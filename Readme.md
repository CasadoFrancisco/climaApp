# Clima

Breve descripción del proyecto o del propósito del backend.

## Uso

Describe cómo utilizar el backend y proporciona ejemplos de las diferentes rutas disponibles.

### Obtener el clima actual de tu ubicación IP y pronóstico para los próximos 5 días

**Endpoint:** `/api/v1/`

Este endpoint te proporciona el clima actual de tu ubicación IP y el pronóstico del tiempo para los próximos 5 días.

**Ejemplo de solicitud:**
GET /api/v1/



### Obtener el clima actual de una ciudad

**Endpoint:** `/api/v1/<city>` o `/api/v1/<city>/<country>`

Este endpoint te permite obtener el clima actual de una ciudad específica. Puedes proporcionar solo el nombre de la ciudad o agregar el país (en formato de región abreviada) para una mayor precisión.

**Ejemplo de solicitud:**
GET /api/v1/London
GET /api/v1/Paris/FR


### Obtener el pronóstico del clima para una ciudad

**Endpoint:** `/api/v1/forecast/<city>` o `/api/v1/forecast/<city>/<country>`

Este endpoint te proporciona el pronóstico del tiempo para los próximos 5 días de una ciudad específica. Puedes proporcionar solo el nombre de la ciudad o agregar el país (en formato de región abreviada) para una mayor precisión.

**Ejemplo de solicitud:**
GET /api/v1/forecast/New York

GET /api/v1/forecast/New York


## Contribuciones

Indica si estás aceptando contribuciones al proyecto y cómo los colaboradores pueden participar.

## Notas adicionales

Proporciona cualquier nota adicional relevante, instrucciones de configuración especial, ejemplos de uso avanzado, etc.

## Licencia

Indica la licencia del proyecto.





