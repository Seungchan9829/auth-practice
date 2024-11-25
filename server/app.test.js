import request from 'supertest';
import app from './app';

describe('유저 API 테스트', () => {
    it('GET /api/users - 유저 리스트 반환', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        console.log('Returned Users:', response.body);
    })
})