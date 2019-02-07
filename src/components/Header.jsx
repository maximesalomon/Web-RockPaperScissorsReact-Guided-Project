import React from 'react';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-fighter'>
        <div className='header-image-container'>
          <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />
        </div>
        <span>Computer</span>
      </div>

      <div className='header-fighter'>
        <span>You</span>
        <div className='header-image-container'>
          <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />
        </div>
      </div>
    </div>
  );
}
