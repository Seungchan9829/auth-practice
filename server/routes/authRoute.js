// routes/authRoute.js
import express from 'express';
import { login, register, logout, refreshAccessToken } from '../controllers/authController.js';
import { authenticateToken, authorizeRoles } from '../middleware/authMiddleware.js';
import { FakeUserRepository } from '../respositories/FakeUserRepository.js';
import AuthService from '../services/authservice.js';

//의존성 생성
const fakeUserRepository = new FakeUserRepository(); // 괄호 추가
const authService =  new AuthService(fakeUserRepository);

const authRouter = express.Router();



// 로그인 및 회원가입 라우트
authRouter.post('/login', (req, res) => login(req, res, authService));
authRouter.post('/register', register);
authRouter.get('/check', authenticateToken, (req, res) => {
    // authenticateToken이 통과되면 req.user에 유저 정보가 저장됨
    res.status(200).json({
        message: 'User is authenticated',
        user: req.user, // 유저 정보 반환 (예: id, role)
    });
});
authRouter.post('/logout', (req,res) => logout(req,res))

authRouter.post('/refreshtoken', (req,res) => refreshAccessToken(req, res))

// 보호된 라우트 예제: 관리자 전용 라우트
authRouter.get('/admin', authenticateToken, authorizeRoles('admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome, admin' });
});

// 보호된 라우트 예제: 관리자 및 선생님 전용 라우트
authRouter.get('/teacher', authenticateToken, authorizeRoles('admin', 'teacher'), (req, res) => {
    res.status(200).json({ message: 'Welcome, teacher or admin' });
});

export default authRouter;
