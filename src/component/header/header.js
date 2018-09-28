import React from 'react';
import PropTypes from 'prop-types';
import Container from '../container/container';
import Icon from '../icon/icon';
import './header.css';

const Header = props => {
    let loginButton;
    if (props.user === null) {
        loginButton = null;
    } else if (props.user) {
        loginButton = <button className="header__login-btn"
                              onClick={props.logout}>
            Sair
        </button>;
    } else {
        loginButton = <button className="header__login-btn"
                              onClick={props.login}>
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

Header.propTypes = {
    user: PropTypes.any,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}

export default Header;