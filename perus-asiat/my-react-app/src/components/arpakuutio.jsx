import React from "react";

function arpominen() {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = "https://www.clker.com/cliparts/9/u/S/1/o/A/red-die-1-md.png";

    function spin(){
        
        if (diceNumber === 1) {
            diceImage = "https://www.clker.com/cliparts/9/u/S/1/o/A/red-die-1-md.png"
        }
        else if (diceNumber === 2) {
            diceImage = "https://www.clker.com/cliparts/N/e/8/O/Z/G/red-die-2-md.png"
        }
        else if (diceNumber === 3) {
            diceImage = "https://www.clker.com/cliparts/Y/3/S/S/N/8/red-die-3-md.png"
        }
        else if (diceNumber === 4) {
            diceImage = "https://www.clker.com/cliparts/T/1/G/i/B/E/red-die-4-md.png"
        }
        else if (diceNumber === 5) {
            diceImage = "https://www.clker.com/cliparts/p/N/w/Z/Q/C/red-die-5-md.png"
        }
        else {
            diceImage = "https://www.clker.com/cliparts/O/r/n/M/N/g/red-die-6-md.png"
        }

        }
        
    return (
        <>
        <h1>DICE GAME</h1>
        <img id="diceImage" src={diceImage} alt="Diceee"></img>
        <p>Dice number is: {diceNumber}</p>
        <button onClick={spin}>SPIN THE DICE!</button>
        
        </>
    );
}

export default arpominen;
