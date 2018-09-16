import React, { Component } from 'react';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import './app.css';

class App extends Component {
  state = {
    activeTab: 0
  }

  onTabChanged(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Tabs activeTab={this.state.activeTab}
              onTabChanged={this.onTabChanged.bind(this)} />
      </div>
    );
  }
}

export default App;
