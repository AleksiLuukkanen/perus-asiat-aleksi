import "./App.css";
import React from 'react';
import Tulos from './components/props.jsx';
import Counter from './components/counter.jsx';
import Timer from './components/timer.jsx';
import Dice from './components/arpakuutio.jsx';
import Ristinolla from './components/ristinolla.jsx';
import HedelmäLista from './components/list_keys.jsx';


function App() {
    return (
        <div className="App">
             <header className="App-header">
             <Tulos/>
             <Counter/>
             <Timer/>
             <Dice/>
             <Ristinolla/>
             <HedelmäLista/>
             </header>
        </div>
    );
}

export default App;
// README:ssä lukee mitä jäi keskeneräiseksi/jatkan lomalla.