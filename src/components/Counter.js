import React, { useState } from "react"; 

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {setCount(count + 1); };
    const decrementCount = () => {setCount(count - 1); };
    const resetCount = () => {setCount(0); };

    return (
        <div>
            <h3>Assignment 1</h3>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={incrementCount}>Increase</button><br></br>
            <button onClick={decrementCount}>Decrease</button><br></br>
            <button onClick={resetCount}>Reset</button>
            <h4>----------------------------------------</h4>
        </div>
    );
};

export default Counter;
