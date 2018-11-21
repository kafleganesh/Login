import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login_Form from './Components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login_Form/>
      </div>
    );
  }
}

export default App;
