import express from 'express';
const router = express.Router();

import { createUser, getMessage, getAllUsers } from '../controllers/user.controller.js';

// Sample user route
router.post('/signup', createUser);
router.get('/msg', getMessage);
router.get('/users', getAllUsers);


export default router;