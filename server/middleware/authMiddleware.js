// jwt 토큰을 검증하고 역할을 확인하는 미들웨어

import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig.js"

const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json({ message: 'Access token required' });

    jwt.verify(token, jwtConfig.accessTokenSecret, (err, user) => {
        if (err) {
            // 만료된 토큰의 경우 클라이언트에게 만료되었음을 알림
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({ message: 'Access token expired' });
            }
            // 그 외의 에러 (유효하지 않은 토큰)
            return res.status(403).json({ message: 'Invalid access token' });
        }

        // 토큰이 유효할 때
        req.user = user;
        next();
    });
};

const authorizeRoles = (allowedRoles) => (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({messge : "접근이 제한됩니다."})
    }
    next()
}

export {authenticateToken, authorizeRoles}