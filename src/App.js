import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import BodyContainer from './components/BodyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContainer />
      </div>
    );
  }
}

export default App;
