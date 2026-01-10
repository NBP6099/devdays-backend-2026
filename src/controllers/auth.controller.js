import * as authService from '../services/auth.service.js';
import { loginCounter } from '../config/telemetry.js';

export const register = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);

        // --- N2-P1-A: Instrumentación Avanzada ---
        // Sumamos 1 al contador de Prometheus cada vez que alguien entra con éxito
        loginCounter.add(1, { status: 'success' });

        res.status(200).json(result);
    } catch (error) {
        // También registramos el fallo para telemetría
        loginCounter.add(1, { status: 'failure' });
        res.status(401).json({ message: error.message });
    }
};