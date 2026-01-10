# Guía de Ejecución y Razonamiento Lógico - DevDays 25-26

## 1. Razonamiento Lógico
Este proyecto ha sido diseñado siguiendo una arquitectura de microservicios orientada a la observabilidad y la inteligencia artificial local.
- **Seguridad**: Se ha implementado un sistema de autenticación basado en JWT y encriptación de contraseñas con Bcrypt para asegurar la integridad de los datos de los usuarios.
- **Observabilidad**: La aplicación no solo funciona, sino que es "auditable". Gracias a OpenTelemetry, podemos monitorizar el rendimiento en tiempo real y detectar cuellos de botella mediante métricas de Prometheus.
- **IA Generativa Local**: Se utiliza Ollama para procesar datos de forma privada y local, permitiendo tanto la creación de contenido creativo (Nivel 1) como el análisis técnico de métricas de sistema (Nivel 2).

## 2. Requisitos Previos
- **Node.js**: Versión 20 o superior.
- **MongoDB**: Instancia local o en la nube.
- **Ollama**: Con el modelo `llama3.2` descargado (`ollama run llama3.2`).
- **Docker**: (Opcional) Para ejecución mediante contenedores.

## 3. Instalación y Ejecución Local
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Configurar el archivo `.env` con las siguientes variables:
   - `PORT=3000`
   - `MONGO_URI=tu_url_de_mongodb`
   - `JWT_SECRET=tu_clave_secreta`
4. Iniciar el servidor: `npm run dev`.

## 4. Ejecución con Docker (Toque Profesional)
Para levantar todo el entorno (API + MongoDB) automáticamente, ejecuta en la raíz:
```bash
docker-compose up --build