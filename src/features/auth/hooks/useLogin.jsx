import {useState} from 'react';
import authService from '../services/authService';

export const useLogin = () => {
    
    const login = async (credentials) => {
        try {
            const response = await authService.login(credentials);

            console.log('로그인', response)
        } catch (err) {
            console.error('err : ', err)
        }
    }


    return {login}
}




