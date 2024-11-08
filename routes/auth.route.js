import express from 'express';

import * as authControler from '../controllers/auth.controller.js';

const authRoutes = express.Router();

// Create a new user
authRoutes.post('/user/register', authControler.registerUser);

authRoutes.post('/user/login', authControler.loginUser);



export default authRoutes;
