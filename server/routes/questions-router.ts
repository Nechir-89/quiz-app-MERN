import { Router } from "express";
import { getAllQuetions } from '../controllers/questionsController'

const router: Router = Router();

router.get('/', getAllQuetions);


export default router;
