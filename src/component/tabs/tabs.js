import React from 'react';
import PropTypes from 'prop-types';
import Container from '../container/container';
import Icon from '../icon/icon';
import './tabs.css';

const Tabs = props => {
    return (
        <div className="tabs">
            <Container noPadding>
                <div className="tabs__wrapper">
                    <button className={
                        `tabs__tab-btn ${props.activeTab === 0 ?
                            'tabs__tab-btn--active' : ''}`
                        }
                        onClick={() => props.onTabChanged(0)}>
                        <Icon type="search"
                                className="tabs__tab-btn__icon" />
                        Pesquisar
                    </button>
                    <button className={
                        `tabs__tab-btn ${props.activeTab === 1 ?
                            'tabs__tab-btn--active' : ''}`
                        }
                        onClick={() => props.onTabChanged(1)}>
                        <Icon type="car"
                                className="tabs__tab-btn__icon" />
                        Oferecer
                    </button>
                </div>
            </Container>
        </div>
    )
};

Tabs.propTypes = {
    activeTab: PropTypes.oneOf([0, 1]).isRequired,
    onTabChanged: PropTypes.func.isRequired
}

export default Tabs;