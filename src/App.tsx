import React from 'react';
import reactLogo from './react-logo.png';
import './style.css';

import { Counter } from './Counter';

const App = () => {
  const a = 0;
  const name = 'Harsh';
  return (
    <React.Fragment>
      <h1>
        Hi TypeScript Webpack Starter Template Mode: {process.env.NODE_ENV} |{' '}
        {process.env.name}
      </h1>
      <img src={reactLogo} alt="react-logo" width="200" height="200" />
      <br />
      <Counter />
    </React.Fragment>
  );
};

export default App;
