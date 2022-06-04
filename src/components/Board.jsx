import React, { useState } from 'react';
import Square from './Square';
import History from './History';
import { calculateWinner } from './WinnerCalc';
import StatusMessage from './StatusMessage';
const Board = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [isXNext, setIsXNext] = useState(false);
  //   console.log(board);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  //   const message = winner
  //     ? `winner is ${winner}`
  //     : `next player is ${current.isXNext ? 'X' : 'O'}`;
  //   console.log(winner);
  const handleSquareClick = position => {
    console.log(history);
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      //   console.log(isXNext);
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };
  const renderSquare = position => {
    return (
      <Square
        value={current.board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <>
      <StatusMessage winner={winner} current={current} />
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
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </>
  );
};

export default Board;
