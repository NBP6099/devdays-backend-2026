import './config/telemetry.js'; 
import app from './app.js';
import { connectDB } from './config/db.js'; 

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Métricas disponibles en http://localhost:9464/metrics`);
    });
});