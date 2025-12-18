import express from 'express';
const router = express.Router();

import { createUser, getMessage, getAllUsers } from '../controllers/user.controller.js';

// Sample user route
router.post('/api/signup', createUser);
router.get('/', getMessage);
router.get('/api/users', getAllUsers);



export default router;