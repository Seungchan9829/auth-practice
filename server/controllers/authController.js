// 인증 컨트롤러, 로그인과 토큰 갱신 로직을 담당
import AuthService from '../../src/features/auth/services/authService.js';
import  { generateAccessToken, generateRefreshToken } from '../utils/generateTokens.js';
import jwt from "jsonwebtoken";


const login = async (req, res, authService) => {
    try {
        const { username, password } = req.body;
        console.log(username, password)
        const {accessToken, refreshToken, role} = await authService.login(username, password)

        console.log("login :", accessToken, refreshToken, role)
        res.cookie('accessToken', accessToken, {
            httpOnly : true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict'
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly : true,
            secure : process.env.NODE_ENV === 'production',
            sameSite: 'Strict'
        })
        res.status(200).json({ role });
    } catch (error) {
        res.status(401).json({ messeage : error.messeage})
    }
}

const register = async (req, res) => {
    try {
        const newUser = await AuthService.register(req.body)
        res.status(201).json({user : newUser})
    } catch (error){
        res.status(400).json({ message: error.message });
    }
}

// 실제에서는 authService에서 refreshToken 파기를 해야한다. 따라서 authService에 코드를 작성하는 것이 맞다.
const refreshAccessToken = async(req, res) => {
    console.log("AccesToken 재발급 함수 실행")
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ message: 'Refresh token required' });

    jwt.verify(refreshToken, 'secret', (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid refresh token' });

        const newAccessToken = generateAccessToken(user);
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
        });
        console.log("AccessToken 재발급 완료")
        res.status(200).json({ message: 'Token refreshed' });
    });
}

const logout = (req, res) => {
    try {
        
        console.log("authcontroller 입니다." )
        res.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict'
        });

        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict'
        });

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to logout' });
    }
};



export {login, register, refreshAccessToken, logout}