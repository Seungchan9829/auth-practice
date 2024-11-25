import bcrypt from 'bcrypt';
import { UserRepository } from "./UserRepository.js";

class FakeUserRepository extends UserRepository {
    constructor() {
        super();
        this.users = [
            {   
                id: 999, // ID 일관성 유지
                username: 'admin',
                password: bcrypt.hashSync('password', 10),
                role: 'admin',
            },
            {   
                id: 1000, // Id -> id로 수정
                username: 'teacher',
                password: bcrypt.hashSync('password', 10),
                role: 'teacher',
            },
        ];
    }

    // 모든 유저를 반환하는 함수
    async findAll() {
        return this.users;
    }

    // 특정 ID로 유저를 찾는 함수
    async findById(id) {

        return this.users.find(user => user.id === Number(id)) || null;
    }

    async findByName(name) {

        return this.users.find(user =>user.username === name)
    }

    // 새로운 유저를 생성하는 함수
    async create(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = {
            id: this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1, // ID 자동 증가
            ...data,
            password: hashedPassword,
        };
        this.users.push(newUser);
        return newUser;
    }

    // 특정 ID로 유저를 삭제하는 함수
    async delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return false; // 삭제 실패
        }
        this.users.splice(index, 1);
        return true; // 삭제 성공
    }
}

export { FakeUserRepository };
