import { Router } from 'express';
import {
    analyzeImage,
    textGeneration,
    listModels,
    pullModel,
    deleteModel,
    chat,
    generateText,
    getSchemas
} from './ollama.controller';

const router: Router = Router();

// Model Management
router.get('/models', listModels);
router.post('/pull', pullModel);
router.post('/delete', deleteModel);

// Generation & Analysis
router.post('/analyze-image', analyzeImage);
router.post('/generate-schema', textGeneration); // Renamed for clarity: schema-based generation
router.post('/generate', generateText);         // Generic generation
router.post('/chat', chat);

// Utilities
router.get('/schemas', getSchemas);

export default router;
