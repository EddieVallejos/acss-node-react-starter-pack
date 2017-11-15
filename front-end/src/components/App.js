import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './../css/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      results: ''
    }
  }

  render() {
    return (
      <div className="App row">
        <header className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ACSS Node-React Guide</h1>
        </header>
        <div className="row">
          <span>SEARCH: </span>
          <div class="row">
            <div className="col s4"/>
            <div class="input-field col s2">
              <input id="name" type="text" class="validate"/>
              <label for="name">Name</label>
            </div>
            <div class="input-field col s2">
              <button class="btn waves-effect waves-light"name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>            
            <div className="col s4"/>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
