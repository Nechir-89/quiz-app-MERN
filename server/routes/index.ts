import { Router } from "express";
import questionRouter from './questions-router'
import userRouter from './users-router'

const router: Router = Router();

router.use('/questions', questionRouter);
router.use('/users', userRouter);

export default router;
