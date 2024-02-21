import "./App.css";
import React from 'react';
import Counter from './components/counter.jsx';
import Timer from './components/timer.jsx';
import Dice from './components/arpakuutio.jsx';

function App() {
    return (
        <div className="App">
             <header className="App-header">
             <Counter></Counter>
             <Timer></Timer>
             <Dice></Dice>
             </header>
        </div>
    );
}

export default App;