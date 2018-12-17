import React, { Component } from 'react';
import './App.css';

import {TodoContainer} from "./components/TodoContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoContainer />
        </header>
      </div>
    );
  }
}

export default App;
