# Objectives
  * Learn about application state.
  * Learn to organize application state into a state object.
  * Understand the app as a function that takes state and returns UI. `const appUI = appState => UI`
  * Learn to use a top-level container component to hold (1) the state and (2) the methods that operate on this state.
  * Learn to use presentational components that take slices of this state as props, and return UI based on these slices.
  * Understand that presentational components change state indirectly, using functions passed in as props.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Steps

## 1. Getting Started
  * We start with a barebones React project, and some pre-baked css in the top-level `styles.css` file.
  * Run `npm install` to get the dependencies.
  * Run `npm run dev` to start the bundler with a watcher.
  * Run `live-server` in a separate terminal, to serve the app.

## 2. About App State
  * Explain how to study a stateful system and pull out state.
  * Use the following examples:
    * Door `{ isOpen: true }`.
    * Headphones `{ songPlaying: '123', volumeLevel: 2, noiceCancellingActive: false }`.
    * Game of Chess `{ positionOfPieces: [ etc ], playsNext: 'whites' }`.

## 3. Studying the Problem
  * Walk the students through the functioning demo of Rock Paper Scissors.
  * Break up the **interface** into **four** distinct parts:
    * **Header Area**, with names and avatars.
    * **History Area**, where the results of recent fights are recorded.
    * **Main Area**, displaying current total scores and the current fight.
    * **Buttons Area**, where we trigger fights.
  * Break up the **state** of the app into **four** distinct parts:
    * Current weapon: `{ user: 'Rock', computer: 'Scissors' }`.
    * Score: `{ user: 6, computer: 6 }`.
    * Fight History: `[0, 2, 0, 1, 1, 2]`.
    * Message: `You Win!`.
  * The slices of state needn't match the different parts of the interface:
    * The Header Area uses hardcoded values, and consumes no app state.
    * The History area consumes the **Fight History** slice of state.
    * The Main Area uses several slices: **Current Weapon**, **Score** and **Message**.
    * The Buttons Area uses no state, but triggers state changes.

## 4. Create the Presentational Components
  * src/components/Header.jsx
    ```javascript
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
    ```
  * src/components/History.jsx
    ```javascript
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
      ```
  * src/components/MainBoard.jsx
    ```javascript
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
    ```
  * src/components/WeaponSelector.jsx
    ```javascript
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
    ```

## 5. Create the Container
  * src/components/Container.jsx
    ```javascript
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
                score={{ user: 2, computer: 4}}
                currentWeapons={{ user: 'Rock', computer: 'Rock'}}
                message='It\'s a Tie!'
              />
              <WeaponSelector play={this.play.bind(this)} />
            </div>
          );
        }
      }
    ```