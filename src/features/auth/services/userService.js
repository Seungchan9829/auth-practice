import api from "../../../app/api";

const userService = {
    getUsers : async () => {
        const response = await api.get('http://localhost:5000/api/users');
        return response.data
    }
}

export default userService