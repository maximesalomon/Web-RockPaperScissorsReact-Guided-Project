import React from 'react';

export default function WeaponSelector(props) {
  return (
    <div className='weapon-selector-container'>
      <button onClick={() => props.play('Rock')}>Rock</button>
      <button onClick={() => props.play('Paper')}>Paper</button>
      <button onClick={() => props.play('Scissors')}>Scissors</button>
    </div>
  );
}
