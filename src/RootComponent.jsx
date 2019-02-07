import React from 'react';
import ReactDOM from 'react-dom';


export default function RootComponent() {
  return (
    <div>Hello World</div>
  );
}

ReactDOM.render(
  <RootComponent />, document.querySelector('#target'),
);
