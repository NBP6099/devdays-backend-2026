# 🚀 DevDays Backend API (2026)

## 📋 Descripción
Backend robusto y escalable diseñado para la plataforma DevDays. Este proyecto implementa una arquitectura profesional basada en servicios, enfocada en la mantenibilidad, observabilidad y la integración de capacidades de Inteligencia Artificial.

## 🛠️ Stack Tecnológico
* **Core:** Node.js + Express.
* **Infraestructura:** Docker + Docker Compose.
* **Documentación:** OpenAPI (Swagger).
* **Características Avanzadas:** * 🧠 **AI Controller:** Integración con servicios de LLMs/IA.
    * 📡 **Telemetría:** Monitoreo y métricas del sistema.
    * 🛡️ **Auditoría:** Middleware para registro de eventos críticos.

## 📂 Arquitectura del Proyecto
El código sigue una estructura de capas limpia (Clean Architecture):
* `/src/controllers`: Manejo de peticiones HTTP.
* `/src/services`: Lógica de negocio pura.
* `/src/models`: Modelado de datos.
* `/src/middlewares`: Interceptores de seguridad y auditoría.

## 🔧 Instalación y Despliegue

### Requisitos
* Docker & Docker Compose

### Pasos rápidos
1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/NBP6099/devdays-backend-2026.git](https://github.com/NBP6099/devdays-backend-2026.git)
    ```
2.  Levantar el contenedor:
    ```bash
    docker-compose up --build
    ```
3.  Acceder a la documentación (Swagger):
    * Navegar a: `http://localhost:3000/api-docs` (o el puerto configurado).

## 🧪 Endpoints Principales
* `POST /auth`: Gestión de sesiones.
* `GET /user`: Administración de usuarios.
* `POST /ai`: Interacción con el servicio de IA.

---
*Backend Engineering Project - 2026*
