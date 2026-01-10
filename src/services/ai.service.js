import ollama from 'ollama';

// --- NIVEL 1: Biografía Mágica (N1-3) ---
export const generateWizardBio = async (userName) => {
    try {
        const response = await ollama.chat({
            model: 'llama3.2',
            messages: [{ 
                role: 'user', 
                content: `Eres el Sombrero Seleccionador de Hogwarts. Crea una biografía corta (máximo 3 frases) para un nuevo estudiante llamado ${userName}. Asígnale una casa y una habilidad mágica única.` 
            }],
        });
        return response.message.content;
    } catch (error) {
        console.error('Error en AI Service (Bio):', error.message);
        throw new Error('No se pudo conectar con Ollama.');
    }
};

// --- NIVEL 2: Analista de Métricas (N2-P1-C) ---
// Versión mejorada para evitar que la IA responda con código de programación
export const chatWithMetrics = async (userQuery, auditData) => {
    try {
        // Pre-procesamos los datos para que la IA los entienda sin errores
        const dataLog = auditData.map(a => 
            `- Ruta: ${a.endpoint} | Tiempo: ${a.responseTime}ms | Estado: ${a.status}`
        ).join('\n');

        const response = await ollama.chat({
            model: 'llama3.2',
            messages: [
                { 
                    role: 'system', 
                    content: `IMPORTANTE: No proporciones código de programación (Python, JS, etc). 
                    Eres un Ingeniero DevOps senior. Analiza este log de rendimiento real de mi servidor:
                    ${dataLog}
                    
                    Responde de forma humana y técnica a la duda del usuario. 
                    Si detectas 'SLA_VIOLATION', indica específicamente qué ruta está fallando y por qué.` 
                },
                { role: 'user', content: userQuery }
            ],
        });
        return response.message.content;
    } catch (error) {
        throw new Error('Error al procesar el análisis de métricas: ' + error.message);
    }
};

// --- RETO EXTRA N2-EX-1: Respuesta Estructurada JSON ---
// Esta función permite que una App lea los datos de la IA automáticamente
export const chatWithMetricsStructured = async (userQuery, auditData) => {
    try {
        const response = await ollama.chat({
            model: 'llama3.2',
            format: 'json', 
            messages: [
                { 
                    role: 'system', 
                    content: `Analiza estos datos de auditoría: ${JSON.stringify(auditData)}. 
                    Responde EXCLUSIVAMENTE en formato JSON con estas llaves: 
                    "status" (resumen), "critical_issues" (lista de problemas) y "recommendation" (consejo técnico).` 
                },
                { role: 'user', content: userQuery }
            ],
        });
        return JSON.parse(response.message.content); 
    } catch (error) {
        throw new Error('Error en el análisis estructurado JSON.');
    }
};