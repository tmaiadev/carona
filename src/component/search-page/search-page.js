import React, { Component } from 'react';
import Container from '../container/container';
import Row from '../row/row';
import Input from '../input/input';
import Button from '../button/button';
import './search-page.css';

class SearchPage extends Component {
    state = {
        searchQuery: '',
        dateOptions: [],
        periodOptions: [],
        citiesOptions: []
    }

    componentDidMount() {
        const periodOptions = [
            { value: 'all-day', label: 'Qualquer hora' },
            { value: 'morning', label: 'Manhã' },
            { value: 'afternoon', label: 'Tarde' },
            { value: 'night', label: 'Noite' }
        ];

        const dateOptions = [];
        for (let i = 0; i <= 14; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            dateOptions.push({
                value: `${date - 1}`,
                label: date.toLocaleDateString()
            });
        }

        this.setState({ dateOptions, periodOptions }, async () => {
            this.setState({ citiesOptions: (await import('../../cities')).default  })
        });
    }

    onFormSubmit(evt) {
        evt.preventDefault();
    }

    render() {
        return (
            <div className="search-page">
                <form className="search-page__form"
                      onSubmit={this.onFormSubmit.bind(this)}>
                    <Container>
                        <Input type="search-select"
                               id="from"
                               name="from"
                               label="Saindo de"
                               options={this.state.citiesOptions}
                               required />
                        <Input type="search-select"
                               id="to"
                               name="to"
                               label="Indo para"
                               options={this.state.citiesOptions}
                               required />
                        <Row>
                            <Input type="date"
                                   id="date"
                                   name="date"
                                   label="Data"
                                   options={this.state.dateOptions}
                                   required />
                            <Input type="select"
                                   id="period"
                                   name="period"
                                   label="Período"
                                   options={this.state.periodOptions}
                                   required />
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button type="submit"
                                    icon="search">
                                Pesquisar
                            </Button>
                        </div>
                    </Container>
                </form>
            </div>
        )
    }
}

export default SearchPage;