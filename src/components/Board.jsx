import React, { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  //   console.log(board);
  const handleSquareClick = position => {
    // console.log(board);
    if (board[position]) {
      return;
    }
    setBoard(prev => {
      //   console.log(isXNext);
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(!isXNext);
  };
  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}

        {/* <Square value={board[0]} onClick={()=>{handleSquareClick(0)}} />
        <Square value={board[1]} />
    <Square value={board[2]} /> */}
        {/* <Square value={0}}>
          <p>Aayushi</p>
          <h2>Amonkar</h2>
        </Square> */}
        {/* u can get this as children in  in props */}
      </div>
      <div className="board-row">
        {/* <Square value={board[3]} />
        <Square value={board[4]} />
    <Square value={board[5]} /> */}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {/* <Square value={board[6]} />
        <Square value={board[7]} />
    <Square value={board[8]} /> */}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
