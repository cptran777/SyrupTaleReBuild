import React from 'react';
import './App.scss';
import { GameWindow } from './components/GameWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Syrup Tale
      </header>
      <section className="App-body">
        <GameWindow />
      </section>
    </div>
  );
}

export default App;
