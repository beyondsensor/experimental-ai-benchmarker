import type { Request, Response } from 'express';

export const getHello = (req: Request, res: Response) => {
    res.json({
        message: "Hello from Ollama Benchmark API",
        status: "online",
        timestamp: new Date().toISOString()
    });
};
