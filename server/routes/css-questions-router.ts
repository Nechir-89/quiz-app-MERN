import { Router } from "express";
import { getAllQuetions } from '../controllers/css-questions-controller'

const router: Router = Router();

router.get('/', getAllQuetions);


export default router;
