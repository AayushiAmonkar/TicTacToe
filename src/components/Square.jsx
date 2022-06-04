import React from 'react';
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bolder' : 'lighter' }}
    >
      {value}
    </button>
  );
};

export default Square;
