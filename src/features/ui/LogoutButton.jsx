import React from 'react';
import { useAuth } from '../../app/AuthProvider';

const LogoutButton = () => {
    const {logout} = useAuth();
    
    const handleLogout = () => {
        logout()
    }
    return(
        <button onClick={handleLogout}>
            로그아웃
        </button>
    )
}

export default LogoutButton;