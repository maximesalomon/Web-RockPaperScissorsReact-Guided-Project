import React from 'react';

export default function History(props) {
  return (
    <div className='history-container'>
      {
        props.fightHistory.map((score, idx) => (<span key={idx}>{score}&nbsp;</span>))
      }
    </div>
  );
}
