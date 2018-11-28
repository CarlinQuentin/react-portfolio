import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, } from 'react-router-dom'

class App extends Component {
  render() {
    return (
<div> 
  <Router>
    <Home />
  </Router> 
</div>
    );
  }
}

export default App;
