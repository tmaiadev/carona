import React, { Component } from 'react';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Container from '../container/container';
import Footer from '../footer/footer';
import './app.css';

class App extends Component {
	firebase = null
	state = {
		activeTab: 0,
		pages: [null, null],
		user: null
	}

	get activePage() {
		const activePage = this.state.pages[this.state.activeTab];
		if (activePage) {
			return activePage;
		} else {
			return <Container>
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: 300
				}}>
					Carregando...
        </div>
			</Container>
		}
	}

	async componentDidMount() {
		// Import search page asyncronally
		const SearchPage = (await import('../search-page/search-page')).default;
		const pages = this.state.pages;
		pages[0] = <SearchPage />;
		this.setState({ pages })

		// Imports firebase asyncronally
		this.firebase = (await import('../../firebase')).default;
		try {
			const auth = await this.firebase.auth().getRedirectResult();
			this.setState({ user: auth.user || false });
		} catch (e) {
			console.log(e);
			alert('Ocorreu um erro ao logar');
			this.setState({ user: false });
		}
	}

	onTabChanged(activeTab) {
		this.setState({ activeTab }, async () => {

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

	async login() {
		try {
			this.setState({ user: null });
			const provider = new this.firebase.auth.FacebookAuthProvider();
			await this.firebase.auth().signInWithRedirect(provider);
		} catch (e) {
			console.log(e);
			alert('Ocorreu um erro ao logar. Tente novamente mais tarde.');
		}
	}

	logout() {
		this.firebase.auth().signOut();
	}

	render() {
		return (
			<div className="app">
				<Header user={this.state.user}
					login={this.login.bind(this)}
					logout={this.logout.bind(this)} />
				<Tabs activeTab={this.state.activeTab}
					onTabChanged={this.onTabChanged.bind(this)} />
				{this.activePage}
				<Footer />
			</div>
		);
	}
}

export default App;
