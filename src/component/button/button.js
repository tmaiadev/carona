import React from 'react';
import Icon from '../icon/icon';
import './button.css';

export default props => {
    return <button className="button"
                   type={props.type || 'submit'}
                   onClick={props.onClick}>
        {props.icon ?
            <Icon type={props.icon}
                  className="button__icon"
                  fill="#222222" /> : null}
        {props.children}
    </button>
}