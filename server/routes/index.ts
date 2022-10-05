import { Router } from "express";
import questionRouter from './questions-router'
import userRouter from './users-router'
import htmlQuestionRouter from './htmlquetions-router'

const router: Router = Router();

router.use('/questions', questionRouter);
router.use('/htmlquestions', htmlQuestionRouter)
router.use('/users', userRouter);

export default router;
