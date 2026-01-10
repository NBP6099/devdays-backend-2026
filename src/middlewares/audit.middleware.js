import { Audit } from '../models/audit.model.js';

export const auditSLA = async (req, res, next) => {
    // 1. Empezamos a contar el tiempo justo cuando entra la petición
    const start = Date.now();

    // 2. Escuchamos el evento 'finish' (cuando el servidor envía la respuesta final)
    res.on('finish', async () => {
        const duration = Date.now() - start; // Calculamos los milisegundos que han pasado
        
        // 3. Verificamos si se ha cumplido el SLA de 100ms
        const status = duration > 100 ? 'SLA_VIOLATION' : 'OK';

        try {
            // 4. Guardamos el resultado en la colección 'audits' de MongoDB
            await Audit.create({
                endpoint: req.originalUrl,
                method: req.method,
                responseTime: duration,
                status: status
            });
        } catch (error) {
            console.error('Error guardando la auditoría:', error.message);
        }
    });

    next(); // Dejamos que la petición siga su camino hacia el controlador
};