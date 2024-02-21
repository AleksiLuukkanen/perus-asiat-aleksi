import React, { useState } from "react";



function timer() {
    const [time, setTime] = useState(0);

    function add () {
        setTime(time + 1);
    }
    function stop() {
        
    }

    function start() {
        setTimeout(add, 1000)
    }

    function reset() {
        
    }
                                                                         
    return (          
        <div>                                        
            <h1>TIMER</h1>                                              
            <p>{time}</p>
            <button onClick={start}>START</button>                            
            <button onClick={stop}>STOP</button>
            <button onClick={reset}>RESET</button>
        </div>

    );

}

export default timer;

