import React, { useState } from "react";



function timer() {
    let currentTime = 0;

    
    function stop() {
        
    }

    function start() {
    }

    function reset() {
    }
                                                                         
    return (          
        <div>                                               
            <h1>TIMER</h1>                                              
            <p>{currentTime}</p>
            <button onClick={start}>START</button>                            
            <button onClick={stop}>STOP</button>
            <button onClick={reset}>RESET</button>
        </div>

    );

}

export default timer;

