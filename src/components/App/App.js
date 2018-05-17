import React, { Component } from 'react';
import Header from '../Header';
import Body from '../Body';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
