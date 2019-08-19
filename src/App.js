import React from 'react';
import './App.scss';
import { GamePage } from './pages/game/gamepage.component'

const App = () => (
  <div className="App">
    <a className='github-banner' href="https://github.com/AnkushMalik/Tetris">
      <img src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub" />
    </a>
    <h1>||| Tetris |||</h1>
    <GamePage />
  </div>
)

export default App;
