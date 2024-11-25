import bcrypt from 'bcrypt';
import { generateAccessToken, generateRefreshToken } from '../utils/generateTokens.js';

class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async login(username, password) {
        console.log("login : ", username, password, this.userRepository)
        const user = await this.userRepository.findByName(username);
        console.log("user is ", user)
        if(!user) throw new Error('Invaild credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw new Error("Invaild credentials")

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user)

        console.log("authService :", accessToken, refreshToken)

        return{accessToken, refreshToken, role: user.role}
    }

    async register(userData) {
        return await this.userRepository.createUser(userData)
    }

   
}

export default AuthService
