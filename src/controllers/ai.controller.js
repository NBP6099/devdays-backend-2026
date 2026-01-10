import * as aiService from '../services/ai.service.js';
import { User } from '../models/user.model.js';
import { Audit } from '../models/audit.model.js';

// --- Nivel 1: Obtener Biografía ---
export const getAIUserBio = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        const bio = await aiService.generateWizardBio(user.name);
        res.status(200).json({ userName: user.name, aiBio: bio });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// --- Nivel 2: Interpretar Métricas ---
export const interpretMetrics = async (req, res) => {
    try {
        const { query } = req.body;
        const audits = await Audit.find().sort({ timestamp: -1 }).limit(10);
        const answer = await aiService.chatWithMetrics(query, audits);
        res.status(200).json({ answer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// --- RETO EXTRA N2-EX-1: Análisis JSON ---
export const interpretMetricsJSON = async (req, res) => {
    try {
        const { query } = req.body;
        const audits = await Audit.find().sort({ timestamp: -1 }).limit(10);
        const jsonResponse = await aiService.chatWithMetricsStructured(query, audits);
        res.status(200).json(jsonResponse); // Enviamos el JSON estructurado
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};