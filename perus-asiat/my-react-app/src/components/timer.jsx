import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setTime((time) => time + 1);
      }, 1000);
    });
  
    return (
    <>
    <h1>TIMER</h1>
    <div>
        {time}
    </div>
    </>
    );
  }

export default Timer;

