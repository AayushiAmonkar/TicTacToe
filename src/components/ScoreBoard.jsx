import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

const ScoreBoard = ({
  scoreBoard,
  player,
  changePlayer,
  winner,
  changeScore,
}) => {
  // const noMovesLeft = current.board.every(ele => ele !== null);

  // setScoreBoard(prev => {
  //   if (winner === 'X') {
  //     return [prev[0] + 1, prev[1], prev[2]];
  //   }
  //   if (winner === 'O') {
  //     return [prev[0], prev[1], prev[2] + 1];
  //   }
  //   if (noMovesLeft) {
  //     return [prev[0], prev[1] + 1, prev[2]];
  //   }
  // });
  if (winner == 'X') {
    changeScore;
  }
  return (
    <>
      <div className="score-board">
        <div className="score">
          <div className="title-score">Player 1</div>
          <div className="score-no">{scoreBoard[0]}</div>
        </div>
        <div className="score">
          <div className="title-score">Tie</div>
          <div className="score-no">{scoreBoard[1]}</div>
        </div>
        <div className="score">
          <div className="title-score">{`${
            player == 1 ? 'Computer' : 'Player 2'
          }`}</div>
          <div className="score-no">{scoreBoard[2]}</div>
        </div>
        <button style={{ color: '#fff' }} onClick={changePlayer}>
          <div className="score">
            <div className="title-score">
              <PersonIcon />
            </div>
            <div className="score-no">{player}P</div>
          </div>
        </button>
      </div>
    </>
  );
};

export default ScoreBoard;
