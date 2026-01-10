import { Router } from 'express';
// Importamos las 3 funciones del controlador
import { 
    getAIUserBio, 
    interpretMetrics, 
    interpretMetricsJSON 
} from '../controllers/ai.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

export const aiRouter = Router();

// --- NIVEL 1 ---
// Endpoint: GET /api/v1/ai/generate-bio/:id
aiRouter.get('/generate-bio/:id', verifyToken, getAIUserBio);

// --- NIVEL 2 ---
// Endpoint: POST /api/v1/ai/chat-metrics (Respuesta Humana)
aiRouter.post('/chat-metrics', verifyToken, interpretMetrics);

// --- RETO EXTRA (N2-EX-1) ---
// Endpoint: POST /api/v1/ai/chat-metrics-json (Respuesta Estructurada)
aiRouter.post('/chat-metrics-json', verifyToken, interpretMetricsJSON);