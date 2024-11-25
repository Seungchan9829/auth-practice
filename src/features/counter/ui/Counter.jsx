import React from 'react';
import useCounterStore from '../model/useCounterStore';

const Counter = () => {
    const count = useCounterStore((state) => state.count)
    const increase = useCounterStore((state) => state.increase)
    const decrease = useCounterStore((state) => state.decrease)

    return(
        <div>
            <h2>Count : {count} </h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter