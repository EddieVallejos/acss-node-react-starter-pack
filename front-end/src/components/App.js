import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import autobind from 'react-autobind'
import axios from 'axios';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './../css/App.css';

class App extends Component {

  constructor(){
    super();
    autobind(this);
    this.state = {
      keyword: '',
      results: ''
    }
  }

  searchName() {
    axios.get('http://localhost:3001/people', {
      
    })
    .then((response) => {
      
    })
  }

  keyOnChange(e) {
    this.setState({
      keyword: e.target.value
    })
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
          <div className="row">
            <div className="col s4"/>
            <div className="input-field col s2">
              <input id="name" type="text" className="validate" onChange={this.keyOnChange}/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s2">
              <button className="btn waves-effect waves-light" name="action" onClick={this.searchName}>Submit
                <i className="material-icons right">send</i>
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
