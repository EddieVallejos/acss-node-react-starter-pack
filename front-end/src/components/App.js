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
      resultsName: '',
      resultsDetails: '',
      resultsID: '',
      raw: '',
      name: '',
      detail: ''
    }
  }

  searchName() {
    const self = this;
    axios.get('http://localhost:3001/people', {
      params: {
        name: this.state.keyword
      }
    })
    .then(function (response) {
      if (response.data.length !== 0) {
        self.setState({
          resultsName: response.data[0].name,
          resultsDetails: response.data[0].details,
          resultsID: response.data[0].id
        })
      }
    })
  }

  searchAll() {
    const self = this;
    axios.get('http://localhost:3001/peoples', {})
    .then(function (response) {
      self.setState({
        raw: JSON.stringify(response.data)
      })
    })
  }

  postName() {
    axios.post('http://localhost:3001/people', {
      data: {
        name: this.state.name,
        detail: this.state.detail
      }
    })
    .then(function (response) {
      console.log(response);
    })
  }

  keyOnChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }

  keyOnChangeInput(e) {
    this.setState({
      name: e.target.value
    })
  }

  keyOnChangeInputDetail(e) {
    this.setState({
      detail: e.target.value
    })
  }

  render() {
    return (
      <div className="App row">
        <header className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ACSS Node-React Starter App</h1>
        </header>
        <div className="row">
          <div className="row">SAMPLE CRUD</div>
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

          <span className="row">
            ID : {this.state.resultsID} <br/>
            Details : {this.state.resultsDetails} <br/>
            Name : {this.state.resultsName} <br/>
          </span>

          <div className="row">
            <div className="col s4"/>
            <div className="input-field col s4">
              <button className="btn waves-effect waves-light" name="action" onClick={this.searchAll}>List All
                <i className="material-icons right">send</i>
              </button>
            </div>            
            <div className="col s4"/>
          </div>

          <span className="row">
            Raw : {this.state.raw} <br/>
          </span>

          <span>POST Name: </span>          

          <div className="row">
            <div className="col s4"/>
            <div className="input-field col s1">
              <input id="input" type="text" className="validate" onChange={this.keyOnChangeInput}/>
              <label htmlFor="input">Enter Name</label>
            </div>
            <div className="input-field col s1">
              <input id="detail" type="text" className="validate" onChange={this.keyOnChangeInputDetail}/>
              <label htmlFor="detail">Enter Detail</label>
            </div>
            <div className="input-field col s2">
              <button className="btn waves-effect waves-light" name="action" onClick={this.postName}>Submit
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
