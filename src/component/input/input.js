import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';
import './input.css';

class Input extends Component {
    loadOptions(inputValue, callback) {
        const q = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const cities = this.props
            .options
            .filter(o => o.label.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(q) !== -1)
            .filter((o, i) => i < 20);

        callback(cities);
    }

    onChange() {
        if ( ! this.props.remember) return;
    }

    render() {
        return (
            <div className="input" ref={$el => this.$input = $el}>
                <label htmlFor={this.props.id}
                       className="input__label">{this.props.label}:</label>
                {this.props.type === 'select' ?
                    <AsyncSelect noOptionsMessage={() => '-'}
                                 loadingMessage={() => 'Carregando...'}
                                 placeholder=""
                                 isClearable
                                 inputId={this.props.id}
                                 name={this.props.name}
                                 aria-label={this.props.label}
                                 defaultOptions={this.props.options.filter((o, i) => i < 20)}
                                 loadOptions={this.loadOptions.bind(this)}
                                 onChange={this.onChange.bind(this)}
                                 onInputChange={str => str} /> :
                    <input type={this.props.type}
                       name={this.props.name}
                       id={this.props.id}
                       className="input__input" />}
            </div>
        )
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'select']),
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Input;