import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { userRouter } from './routes/user.routes.js';
import * as openapiParser from '@readme/openapi-parser'; 
import { authRouter } from './routes/auth.routes.js';
import { aiRouter } from './routes/ai.routes.js';
import { auditSLA } from './middlewares/audit.middleware.js';

const app = express();
app.use(express.json());

const openapiDoc = await openapiParser.bundle('./src/docs/openapi.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDoc));
app.use('/api/v1/auth', authRouter); 
app.use('/api/v1', userRouter);
app.use('/api/v1/ai', aiRouter);
app.use(auditSLA);


app.get('/', (req, res) => {
    res.send('APP: Hello, ISA DevDays 2025!');
});

export default app;