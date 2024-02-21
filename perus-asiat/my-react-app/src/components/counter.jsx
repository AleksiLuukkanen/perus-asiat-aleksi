import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function add(){
    setCount(count + 1);
  }
  function remove(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Counter;
