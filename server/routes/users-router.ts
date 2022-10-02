import { Router } from 'express';
import { getUsers, getUser, addUser } from '../controllers/users-controller';

const router: Router = Router();

router.get('/', getUsers);
router.get('/:name', getUser);
router.post('/', addUser);

export default router;