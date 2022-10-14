import { Router } from "express";
import cssQuestionRouter from './css-questions-router'
import userRouter from './users-router'
import htmlQuestionRouter from './htmlquetions-router'

const router: Router = Router();

router.use('/css-questions', cssQuestionRouter);
router.use('/htmlquestions', htmlQuestionRouter)
router.use('/users', userRouter);

export default router;
