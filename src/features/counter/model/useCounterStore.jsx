import {create} from 'zustand';
import {persist} from 'zustand/middleware'
const useCounterStore = create(persist(
    (set) => ({
        count : 0,
        increase : () => set((state) => ({ count : state.count + 1})),
        decrease : () => set((state) => ({ count : state.count - 1}))
    }),
    {
        name : 'counter-storage'
    }
))

export default useCounterStore;

persist(
    (set) => ({
        count : 0,
        increase : () => set((state) => ({ count : state.count + 1})),
        decrease : () => set((state) => ({ count : state.count - 1}))
    })
)