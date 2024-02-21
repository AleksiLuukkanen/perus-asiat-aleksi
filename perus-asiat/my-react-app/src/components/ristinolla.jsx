import React, { useState } from "react";

function Ristinolla() {

    function Pelaus() {
        
      }
      return (
        <>
        <div className="board">
        <button onClick={Pelaus} className="kuutio">X</button>
        <button onClick={Pelaus} className="kuutio">X</button>
        <button onClick={Pelaus} className="kuutio">X</button>
        </div>
        <div className="board">
        <button onClick={Pelaus} className="kuutio">X</button>
        <button onClick={Pelaus} className="kuutio">X</button>
        <button onClick={Pelaus} className="kuutio">X</button>
        </div>
        <div className="board">
        <button onClick={Pelaus} className="kuutio">X</button>
        <button onClick={Pelaus} className="kuutio">X</button>
        <button onClick={Pelaus} className="kuutio">X</button>
        </div>
        </>
    );
}

export default Ristinolla;
// Jatkan lomalla, kaikki muu keskeneräinen myös mainittu readme