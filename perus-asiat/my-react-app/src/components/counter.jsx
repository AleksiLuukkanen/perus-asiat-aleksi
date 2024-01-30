import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const clickspersecond = count;

    function add(){
        setCount((count) => count + 1);
    }
    function remove(){
        setCount((count) => count - 1);
    }
    function reset(){
        setCount((count) => count = 0);
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
        <button onClick={reset}>reset</button>
        <p>Your got {clickspersecond} clicks per second!</p>
        </>
    );
}


export default Counter;