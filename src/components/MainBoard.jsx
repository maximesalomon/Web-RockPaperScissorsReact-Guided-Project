import React from 'react';

export default function MainBoard(props) {
  const { score, currentWeapons, message } = props;

  return (
    <div className='main-board-container'>
      <div className='main-board-score'>
        {score.computer}
      </div>

      <div className='main-board-battle'>
        <div className='main-board-weapons'>
          <span>{currentWeapons.computer}</span>

          <span>{currentWeapons.user}</span>
        </div>

        <h2>{message}</h2>
      </div>

      <div className='main-board-score'>
        {score.user}
      </div>
    </div>
  );
}
