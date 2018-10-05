import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import DashBoard from './containers/dashboard';
class App extends Component {
  render() {
    return (
      <DashBoard/>
    );
  }
}

export default App;
