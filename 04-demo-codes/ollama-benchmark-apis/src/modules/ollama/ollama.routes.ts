import { Router } from 'express';
import { testGeneration, getSchemas } from './ollama.controller';

const router: Router = Router();

router.post('/generate', testGeneration);
router.get('/schemas', getSchemas);

export default router;
