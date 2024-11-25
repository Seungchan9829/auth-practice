// app.js
import express from 'express';
import authRouter from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoute.js';
import cors from 'cors'
const app = express();

// 미들웨어 설정

app.use(cors({
    origin: 'http://localhost:5173', // 허용할 도메인
    credentials: true, // 쿠키 허용 (필요한 경우)
}));

app.use(express.json());
app.use(cookieParser());



app.use('/auth', authRouter);
app.use('/api', userRouter)
// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send('Express Server is Running');
});

export default app;
