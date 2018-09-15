import React from 'react';
import './container.css';

export default props => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}