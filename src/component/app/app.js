import React, { Component } from 'react';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import './app.css';

class App extends Component {
  state = {
    activeTab: 0,
    pages: [null, null]
  }

  get activePage() {
    const activePage = this.state.pages[this.state.activeTab];
    if (activePage) {
      return activePage;
    } else {
      return <span>Carregando...</span>
    }
  }

  componentDidMount() {
    // Import search page asyncronally
    import('../search-page/search-page')
      .then(r => {
        const pages = this.state.pages;
        pages[0] = <r.default />
        this.setState({ pages });
      });
  }

  onTabChanged(activeTab) {
    this.setState({ activeTab }, async  () => {

      // If user clicks on the Offer tab,
      // download the Offer page asyncronally
      if (activeTab !== 1 || this.state.pages[1] !== null)
        return;
      
      const OfferPage = (
        await import('../offer-page/offer-page')
      ).default;

      const pages = this.state.pages;
      pages[1] = <OfferPage />;

      this.setState({ pages });
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Tabs activeTab={this.state.activeTab}
              onTabChanged={this.onTabChanged.bind(this)} />
        {this.activePage}
      </div>
    );
  }
}

export default App;
