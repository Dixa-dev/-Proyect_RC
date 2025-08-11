import express from "express";
import { getAllUsers,getById, createUser, updateUser, deleteUser } from '../controllers/user.controllers.js';

const userRouter = express.Router();


userRouter.get('/users', getAllUsers);
userRouter.get('/users/:id',getById)
userRouter.post('/users', createUser);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);



export default userRouter;