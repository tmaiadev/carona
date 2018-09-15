import React, { Component } from 'react';
import Container from '../container/container';
import LOGO from '../../icons/md-car.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <div className="header__wrapper">
                        <img src={LOGO}
                            className="header__logo"
                            alt="Me Dá Uma Carona" />
                        <h1 className="header__title">
                            ME DÁ UMA CARONA
                        </h1>
                        <div className="header__separator" />
                        <button className="header__login-btn">
                            Entrar
                        </button>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header;