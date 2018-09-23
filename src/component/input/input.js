import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Icon from '../icon/icon';
import 'react-datepicker/dist/react-datepicker.css';
import './input.css';

class Input extends Component {
    constructor(props) {
        super(props);

        moment.updateLocale('pt-br', {
            months: [
                "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
            ],
            weekdaysMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
        });
    }


    state = {
        selectedDate: moment()
    }

    loadOptions(inputValue, callback) {
        const q = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const cities = this.props
            .options
            .filter(o => o.label.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(q) !== -1)
            .filter((o, i) => i < 20);

        callback(cities);
    }

    render() {
        const input = () => {
            let $el;

            switch (this.props.type) {
                case 'search-select':
                    $el = <AsyncSelect noOptionsMessage={() => '-'}
                                loadingMessage={() => 'Carregando...'}
                                placeholder=""
                                isClearable
                                inputId={this.props.id}
                                name={this.props.name}
                                aria-label={this.props.label}
                                defaultOptions={this.props.options.filter((o, i) => i < 20)}
                                loadOptions={this.loadOptions.bind(this)}
                                onInputChange={str => str} />;
                    break;

                case 'select':
                    $el = <select name={this.props.name}
                            id={this.props.id}
                            className="input__input">
                        {this.props.options.map(o => {
                            return <option key={o.value} value={o.value}>{o.label}</option>
                        })}
                    </select>;
                    break;

                case 'date':
                    $el = <DatePicker name={this.props.name}
                                      id={this.props.id}
                                      dateFormat="DD/MM/YYYY"
                                      className="input__input"
                                      selected={this.state.selectedDate}
                                      locale="pt-br"
                                      minDate={moment()}
                                      maxDate={moment().add(30, "days")}
                                      onChange={selectedDate => this.setState({ selectedDate })} />;
                    break;

                default: 
                    $el = <input type={this.props.type}
                                 name={this.props.name}
                                 id={this.props.id}
                                 className="input__input" />;
                    break;
            }

            return $el;
        }

        return (
            <div className="input" ref={$el => this.$input = $el}>
                <label htmlFor={this.props.id}
                       className="input__label">{this.props.label}:</label>
                {input()}
                {['select', 'date'].indexOf(this.props.type) !== -1 ?
                    <div className="input__icon-holder">
                        <div className="input__icon-separator" />
                        <Icon className="input__icon"
                              type="dropdown"
                              viewBox="-8 -5 30 30"
                              fill="#CCC" />
                    </div> : null}
            </div>
        )
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'select', 'search-select', 'date']),
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Input;