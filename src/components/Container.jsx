import React from 'react';
import Header from './Header';
import MainBoard from './MainBoard';
import History from './History';
import WeaponSelector from './WeaponSelector';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeapons: { user: null, computer: null },
      score: { user: 0, computer: 0 },
      fightHistory: [],
      message: null,
    };

    this.play = this.play.bind(this);
  }

  updateCurrentWeapons(user, computer) {
    this.setState({
      currentWeapons: { user, computer },
    });
  }

  addToFightHistory(points) {
    this.setState(st => ({ fightHistory: [...st.fightHistory, points] }));
  }

  updateScoreTie() {
    this.setState(st => ({
      score: {
        user: st.score.user + 1,
        computer: st.score.computer + 1,
      },
    }));
  }

  updateScoreWin(fighter) {
    this.setState(st => ({
      score: {
        ...st.score,
        [fighter]: st.score[fighter] + 2,
      },
    }));
  }

  setMessage(message) {
    this.setState({ message });
  }

  play(weapon) {
    const randomWeaponNumber = Math.floor(Math.random() * 3);
    const randomWeapon = ['Rock', 'Paper', 'Scissors'][randomWeaponNumber];
    this.updateCurrentWeapons(weapon, randomWeapon);

    const win = (
      (weapon === 'Rock' && randomWeapon === 'Scissors') ||
      (weapon === 'Paper' && randomWeapon === 'Rock') ||
      (weapon === 'Scissors' && randomWeapon === 'Paper')
    );

    const tie = (weapon === randomWeapon);

    if (win) {
      this.updateScoreWin('user');
      this.addToFightHistory(2);
      this.setMessage('You Win!');
    } else if (tie) {
      this.updateScoreTie();
      this.addToFightHistory(1);
      this.setMessage('It\'s a tie!');
    } else {
      this.updateScoreWin('computer');
      this.addToFightHistory(0);
      this.setMessage('You Lose!');
    }
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
