class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() { // 비즈니스 관점: 모든 유저를 가져옴
        return await this.userRepository.findAll();
    }

    async getUserById(id) { // 비즈니스 관점: 특정 유저 정보 가져옴
        const user = await this.userRepository.findById(id);
        console.log('userService : ', user)
        if (!user) {
            throw new Error("유저를 찾을 수 없습니다.");
        }
        return user;
    }

    async registerUser(data) { // 비즈니스 관점: 유저 등록
        return await this.userRepository.create(data);
    }

    async removeUser(id) { // 비즈니스 관점: 유저 삭제
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error("삭제할 유저를 찾을 수 없습니다.");
        }
        return await this.userRepository.delete(id);
    }
}

export default UserService