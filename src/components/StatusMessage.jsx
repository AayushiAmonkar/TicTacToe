import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(ele => {
    el !== null;
  });
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
