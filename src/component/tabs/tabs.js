import React, { Component } from 'react';
import Container from '../container/container';
import Icon from '../icon/icon';
import './tabs.css';

class Tabs extends Component {
    render() {
        return (
            <div className="tabs">
                <Container>
                    <div className="tabs__wrapper">
                        <button className="tabs__tab">
                            <Icon type="car" />
                            Pesquisar
                        </button>
                        <button className="tabs__tab">
                            <Icon type="car" />
                            Pesquisar
                        </button>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Tabs;