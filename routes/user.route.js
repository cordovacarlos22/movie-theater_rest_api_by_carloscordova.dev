import express from 'express';

import * as userController from '../controllers/user.auth.controller.js';

const userRoutes = express.Router();

// Create a new user
userRoutes.post('/user/register', userController.registerUser);

// login user 
userRoutes.post('/user/login', userController.loginUser);

// Get all users
userRoutes.get('/user/', userController.getAllUsers);

// Get user by id 
userRoutes.get('/user/:id', userController.getUserById);

// Update user by id
userRoutes.patch('/user/:id', userController.updateUser);

// Delete user by id with hard delete operation and soft delete operation
userRoutes.delete('/user/:id', userController.deleteUser);

export default userRoutes;
