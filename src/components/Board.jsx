import React from 'react';
import Square from './Square';
const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
        {/* <Square value={9}>
          <p>Aayushi</p>
          <h2>Amonkar</h2>
        </Square> */}
        {/* u can get this as children in  in props */}
      </div>
      <div className="board-row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className="board-row">
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
};

export default Board;
