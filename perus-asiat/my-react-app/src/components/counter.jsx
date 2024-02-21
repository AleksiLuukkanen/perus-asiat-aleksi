import React, { useState } from "react";

function Counter(props) {
  // Lisäsin props initialCount, se auttaa palauttamaan alkuperäisen arvon kun painetaan reset.
  const { initialCount } = props; 
  const [count, setCount] = useState(initialCount); 
  

  function add() {
    setCount(count + 1); 
  }

  function remove() {
    setCount(count - 1); 
  }
  // Palauttaa nyt alkuperäisen arvon eli initialCount joka on propsina.
  function reset() {
    setCount(initialCount); 
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
