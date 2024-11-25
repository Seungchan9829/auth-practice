import express from 'express'
import { getUsers, getUser, addUser } from '../controllers/userController.js'
import { FakeUserRepository } from '../respositories/FakeUserRepository.js'
import UserService from '../services/userService.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

// 의존성 생성
const fakeUserRepository = new FakeUserRepository(); // 괄호 추가
const userService =  new UserService(fakeUserRepository);




const userRouter = express.Router()

userRouter.get('/users', authenticateToken, getUsers(userService));
userRouter.post('/users', addUser(userService));
userRouter.get('/users/:id', getUser(userService));


export default userRouter