import { Router } from "express";
import { getAllQuetions } from '../controllers/css-questions-controller.js'

const router: Router = Router();

router.get('/', getAllQuetions);


export default router;
