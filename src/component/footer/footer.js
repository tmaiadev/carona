import React from 'react';
import Container from '../container/container';
import Icon from '../icon/icon';
import './footer.css';

export default () => {
    return <div className="footer">
        <Container>
            <div className="footer__content">
                <Icon type="car"
                    fill="#222222"
                    className="footer__icon" />
                <div className="footer__title">
                    CARONA
                </div>
            </div>
            <div className="footer__content">
                Criado por <a href="https://thallesmaia.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="footer__link">Thalles Maia</a>
            </div>
            <div className="footer__content">
                Todos os Direitos Reservados. 2018.
            </div>
            <div className="footer__content">
                Este projeto é <a href="https://github.com/tmaiadev/carona/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="footer__link">Open Source</a> ❤️.
            </div>
        </Container>
    </div>
}