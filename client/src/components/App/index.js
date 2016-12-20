import React, { Component } from 'react';
import logo from './logo.svg';
import Client from '../../Client';
import './style.css';

class App extends Component {
  handlClick(e){
    e.preventDefault();
    Client.search(function(users){
      console.log(users);
    })

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={this.handlClick}>Click</button>
        </p>
      </div>
    );
  }
}

export default App;
