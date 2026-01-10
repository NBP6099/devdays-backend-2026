import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(403).json({ message: 'No token provided' });

    try {
        // Usamos la misma variable del .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error("JWT Error:", error.message); // <--- Esto te dirá el fallo real en la terminal
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
};