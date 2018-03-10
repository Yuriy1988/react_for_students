import React, { Component } from 'react';
import Routes from './Routes';
import Navigation from './features/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;
