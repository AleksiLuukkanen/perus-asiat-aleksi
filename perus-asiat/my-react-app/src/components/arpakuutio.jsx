import React, { useState } from "react";

function DiceGame() {
    const [diceNumber, setDiceNumber] = useState(1);
    const diceImages = [
        "https://www.clker.com/cliparts/9/u/S/1/o/A/red-die-1-md.png",
        "https://www.clker.com/cliparts/N/e/8/O/Z/G/red-die-2-md.png",
        "https://www.clker.com/cliparts/Y/3/S/S/N/8/red-die-3-md.png",
        "https://www.clker.com/cliparts/T/1/G/i/B/E/red-die-4-md.png",
        "https://www.clker.com/cliparts/p/N/w/Z/Q/C/red-die-5-md.png",
        "https://www.clker.com/cliparts/O/r/n/M/N/g/red-die-6-md.png"
    ];

    function spin() {
        const newDiceNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(newDiceNumber);
    }

    return (
        <div>
            <h1>DICE GAME</h1>
            <img src={diceImages[diceNumber - 1]} alt="Dice" width="100" />
            <p><b>Dice number is:</b> {diceNumber}</p>
            <button onClick={spin}>SPIN THE DICE!</button>
        </div>
    );
}

export default DiceGame;