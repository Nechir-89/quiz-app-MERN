import { Router } from "express";
import questionRouter from './questions-router'
const router: Router = Router();

router.use('/api/questions', questionRouter)

export default router;
