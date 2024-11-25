import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import authService from '../features/auth/services/authService';

const useAuthStore = create(
    persist(
        (set) => ({
            accessToken : null,
            userRole : null,
            setAccessToken: (token) => set({accessToken : token}),
            login : async (credentials) => {
                const {accessToken, role} = await authService.login(credentials);
                set({accessToken, userRole : role})
            },
            logout : async () => {
                await authService.logout();
                set({accessToken : null, userRole : null})
            }

        }),
        {name : 'auth-storage'}
    )
)

export default useAuthStore