import { create } from 'zustand';

const authStore = create((set) => ({
    isAuthenticated : false,
    setAuthenticated: (status) =>({ isAuthenticated : status}),
    logout : () => set({ isAuthenticated : false})
}))

export default authStore