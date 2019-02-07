import React from 'react';
import Header from './Header';
import MainBoard from './MainBoard';
import History from './History';
import WeaponSelector from './WeaponSelector';

export default class Container extends React.Component {
  play(weapon) {
    console.log(`playing with ${weapon}`);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <History fightHistory={[1, 0, 1]} />
        <MainBoard
          score={{ user: 2, computer: 4 }}
          currentWeapons={{ user: 'Rock', computer: 'Rock' }}
          message='It is a Tie!'
        />
        <WeaponSelector play={this.play.bind(this)} />
      </div>
    );
  }
}
