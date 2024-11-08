import express from 'express';

import * as userController from '../controllers/user.auth.controller.js';

const userRoutes = express.Router();


// Get all users
userRoutes.get('/user/', userController.getAllUsers);

// Get user by id 
userRoutes.get('/user/:userId', userController.getUserById);

// Update user by id
userRoutes.patch('/user/:userId', userController.updateUser);

// Delete user by id with hard delete operation and soft delete operation
userRoutes.delete('/user/:userId', userController.deleteUser);

export default userRoutes;
