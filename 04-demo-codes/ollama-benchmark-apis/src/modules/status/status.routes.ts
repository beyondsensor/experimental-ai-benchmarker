import { Router } from 'express';
import { getHello } from './status.controller';

const router: Router = Router();

router.get('/', getHello);

export default router;
