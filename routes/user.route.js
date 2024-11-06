import express from 'express';

import * as userController from '../controllers/user.auth.controller.js';

const userRoutes = express.Router();

// Create a new user
userRoutes.post('/register', userController.createUser);

// login user 
userRoutes.post('/login', userController.loginUser);

// Get all users
userRoutes.get('/', userController.getAllUsers);

// Get user by id 
userRoutes.get('/:id', userController.getUserById);

// Update user by id
userRoutes.patch('/:id', userController.updateUser);

// Delete user by id with hard delete operation and soft delete operation
userRoutes.delete('/:id', userController.deleteUser);

export default userRoutes;
