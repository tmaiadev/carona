import React, { Component } from 'react';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Tabs />
      </div>
    );
  }
}

export default App;
