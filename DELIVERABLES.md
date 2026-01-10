# Entregables - Proyecto DevDays 25-26

### Nivel 0: Base del Proyecto
- Servidor Express con MongoDB.
- Autenticación robusta: Bcrypt (hash de contraseñas) y JWT (protección de rutas).

### Nivel 1: IA y Observabilidad
- **N1-2 Telemetría:** Exposición de métricas en puerto 9464 (formato Prometheus).
- **N1-3 IA Local:** Generación de biografías dinámicas con Ollama (Llama 3.2).

### Nivel 2: Auditoría e Interpretación (Propuesta 1)
- **N2-P1-A Instrumentación:** Métricas personalizadas de login (`auth_login_total`).
- **N2-P1-B Auditoría SLA:** Middleware que registra violaciones de tiempo (>100ms) en la DB.
- **N2-P1-C Chatbot de Métricas:** IA que analiza los logs de auditoría para diagnosticar el servidor.

### Retos Extra
- **N2-EX-1 IA Estructurada:** Generación de diagnósticos de sistema en formato JSON puro.
- **Dockerización:** Inclusión de Dockerfile y Docker-compose para despliegue inmediato.