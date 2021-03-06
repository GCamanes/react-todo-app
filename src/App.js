import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoContainer} from "./components/TodoContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoContainer />
        </header>
      </div>
    );
  }
}

export default App;
