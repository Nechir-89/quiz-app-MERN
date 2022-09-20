import { Router } from "express";
import { getAllQuetions } from '../controllers/questions-controller'

const router: Router = Router();

router.get('/', getAllQuetions);


export default router;
