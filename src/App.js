import React, { Component } from 'react';
import './App.css';
//import Header from './components/header';
import Page from './components/currentPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Page />
      </div>
    );
  }
}

export default App;
