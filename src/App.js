import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>{this.props.flag}</h2>
      </div>
    );
  }
}

export default App;
