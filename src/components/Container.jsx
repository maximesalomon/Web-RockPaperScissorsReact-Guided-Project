import React from 'react';
import Header from './Header';
import MainBoard from './MainBoard';
import History from './History';
import WeaponSelector from './WeaponSelector';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeapons: { user: 'Rock', computer: 'Scissors' },
      score: { user: 8, computer: 6 },
      fightHistory: [1, 2, 1, 0, 0, 2, 2],
      message: 'You Win!',
    };

    this.play = this.play.bind(this);
  }

  play(weapon) {
    console.log(`playing with ${weapon}`);
  }

  render() {
    const { currentWeapons, score, fightHistory, message } = this.state;

    return (
      <div className="container">
        <Header />
        <History fightHistory={fightHistory} />
        <MainBoard
          score={score}
          currentWeapons={currentWeapons}
          message={message}
        />
        <WeaponSelector play={this.play} />
      </div>
    );
  }
}
