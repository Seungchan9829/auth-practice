class UserRepository {
    // 모든 유저를 찾는 함수
    async findAll() {
        throw new Error("모든 유저 찾는 함수 아직 구현되지 않음");
    }

    // 특정 ID로 유저 찾는 함수
    async findById(id) {
        throw new Error("ID로 유저 찾는 함수 아직 구현되지 않음");
    }

    async findByName(name) {
        throw new Error("아이디로 유저 찾는 함수 아직 구현되지 않음.")
    }

    // 새로운 유저를 생성하는 함수
    async create(data) {
        throw new Error("유저 생성 함수 아직 구현되지 않음");
    }

    // 특정 ID의 유저를 삭제하는 함수
    async delete(id) {
        throw new Error("유저 삭제 함수 아직 구현되지 않음");
    }
}

export {UserRepository}