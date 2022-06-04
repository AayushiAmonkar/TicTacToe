import React from 'react';
import Board from './components/Board';
import './styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE!
      </h1>
      {/* <h2>Message</h2> */}
      <Board />
      <div className="bg-balls"></div>
    </div>
  );
};

export default App;
