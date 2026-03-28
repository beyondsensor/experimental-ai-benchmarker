import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import statusRoutes from '@/modules/status/status.routes';
import ollamaRoutes from '@/modules/ollama/ollama.routes';

dotenv.config();

const app: express.Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/status', statusRoutes);
app.use('/api/ollama', ollamaRoutes);

// Error Handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
