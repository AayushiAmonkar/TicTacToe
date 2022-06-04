import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history">
      <ul>
        {history.map((curVal, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  // console.log(move);
                  moveTo(move);
                }}
              >
                {move == 0 ? `Go to game start` : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
