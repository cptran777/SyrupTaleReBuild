import React from 'react';
import './App.scss';
import { GameWindow } from './components/GameWindow';
import { PhaserTesting } from './components/TestPhaser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Syrup Tale
      </header>
      <section className="App-body">
        <PhaserTesting />
      </section>
    </div>
  );
}

export default App;
