import React, { Component } from 'react';
import Container from '../container/container';
import Icon from '../icon/icon';
import './header.css';

class Header extends Component {
    firebase = null;
    state = { user: null }

    async componentDidMount() {
        this.firebase = (await import('../../firebase')).default;
        this.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: false });
            }
        })
    }

    async login() {
        try {
            this.setState({ user: null });
            const provider = new this.firebase.auth.FacebookAuthProvider();
            await this.firebase.auth().signInWithPopup(provider);
        } catch (e) {
            console.log(e);
            alert('Ocorreu um erro ao logar. Tente novamente mais tarde.');
        }
    }

    async logout() {
        this.firebase.auth().signOut();
    }

    render() {
        let loginButton;
        if (this.state.user === null) {
            loginButton = null;
        } else if (this.state.user) {
            loginButton = <button className="header__login-btn"
                                  onClick={this.logout.bind(this)}>
                Sair
            </button>;
        } else {
            loginButton = <button className="header__login-btn"
                                  onClick={this.login.bind(this)}>
                Entrar
            </button>;
        }

        return (
            <div className="header">
                <Container>
                    <div className="header__wrapper">
                        <Icon type="car"
                              className="header__logo" />
                        <h1 className="header__title">
                            Carona
                        </h1>
                        <div className="header__separator" />
                        {loginButton}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header;