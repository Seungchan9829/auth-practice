import React from 'react';
import userService from '../auth/services/userService';

const GetUserButton = () => {
    
    const handleGetUser = () => {
        const users = userService.getUsers();
        console.log(users)
        return users;
    }
    return(
        <button onClick={handleGetUser}>
            전체 유저 조회 하기
        </button>
    )
}

export default GetUserButton;