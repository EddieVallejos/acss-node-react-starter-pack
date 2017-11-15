import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import mat from 'materialize-css/dist/css/materialize.css';
import './../css/App.css';

console.log(mat);

class App extends Component {
  render() {
    return (
      <div className="App row">
        <header className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ACSS Node-React Guide</h1>
        </header>
      </div>
    );
  }
}

export default App;
