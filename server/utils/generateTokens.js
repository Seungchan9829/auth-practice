import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig.js";

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role },
        jwtConfig.accessTokenSecret, // 객체에서 속성에 접근
        { expiresIn: jwtConfig.accessTokenExpiresIn }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user.id , role: user.role},
        jwtConfig.refreshTokenSecret, // 객체에서 속성에 접근
        { expiresIn: jwtConfig.refreshTokenExpiresIn }
    );
};

export { generateAccessToken, generateRefreshToken };
