import "./App.css";
import React from 'react';
import Tulos from './components/props.jsx';
import Counter from './components/counter.jsx';
import Timer from './components/timer.jsx';
import Dice from './components/arpakuutio.jsx';
import Ristinolla from './components/ristinolla.jsx';

function App() {
    return (
        <div className="App">
             <header className="App-header">
             <Tulos></Tulos>
             <Counter></Counter>
             <Timer></Timer>
             <Dice></Dice>
             <Ristinolla></Ristinolla>
             </header>
        </div>
    );
}

export default App;