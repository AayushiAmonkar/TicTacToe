import React, { useEffect, useState } from 'react';
import Square from './Square';
import History from './History';
import { calculateWinner } from './WinnerCalc';
import StatusMessage from './StatusMessage';
// import ScoreBoard from './ScoreBoard';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const Board = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  // const [player, setPlayer] = useState(2);
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [isXNext, setIsXNext] = useState(false);
  // //   console.log(board);
  // const [scoreBoard, setScoreBoard] = useState([0, 0, 0]);

  const winnerPlayer = calculateWinner(current.board);
  // //   const message = winner
  // //     ? `winner is ${winner}`
  // //     : `next player is ${current.isXNext ? 'X' : 'O'}`;
  // //   console.log(winner);
  const noMovesLeft = current.board.every(ele => ele !== null);
  // useEffect(() => {
  //   console.log('change');
  // }, [winnerPlayer.winner, noMovesLeft]);
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  const handleSquareClick = position => {
    // console.log(history);
    if (current.board[position] || winnerPlayer.winner) {
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
    const isWinningSquare = winnerPlayer.winningSquare.includes(position);
    // if (winnerPlayer.winner || noMovesLeft) {
    //   console.log(winnerPlayer);
    // }
    return (
      <Square
        value={current.board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  // const changePlayer = () => {
  //   setPlayer(prev => {
  //     if (prev == 1) {
  //       return 2;
  //     } else {
  //       return 1;
  //     }
  //   });
  // };

  const onUndo = () => {
    // console.log(history);
    if (currentMove == 0) {
      return;
    }
    setHistory(prev => {
      return prev.filter((curval, ind) => {
        return ind != prev.length - 1;
      });
    });
    setCurrentMove(prev => prev - 1);
  };

  const changeScore = () => {
    if (winnerPlayer.winner || noMovesLeft) {
      console.log('change');
      // setScoreBoard(prev => {
      //   if (winnerPlayer.winner === 'X') {
      //     return [prev[0] + 1, prev[1], prev[2]];
      //   }
      //   if (winnerPlayer.winner === 'O') {
      //     return [prev[0], prev[1], prev[2] + 1];
      //   }
      //   if (noMovesLeft) {
      //     return [prev[0], prev[1] + 1, prev[2]];
      //   }
      // });
    }
    // return (
    //   <ScoreBoard
    //     scoreBoard={scoreBoard}
    //     player={player}
    //     changePlayer={changePlayer}
    //     winner={winnerPlayer.winner}
    //     changeScore={changeScore}
    //   />
    // );
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <>
      <StatusMessage winner={winnerPlayer.winner} current={current} />
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
      <div>
        <button
          type="button"
          // className="special-btn"
          onClick={onNewGame}
          className={`btn-reset ${
            winnerPlayer.winner || noMovesLeft ? 'active' : ''
          }`}
        >
          New Game
        </button>
        <button type="button" className={`btn-reset undo `} onClick={onUndo}>
          Undo
        </button>
      </div>
      <h2>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />

      {/* {changeScore()} */}
    </>
  );
};

export default Board;
