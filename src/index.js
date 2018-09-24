import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/app/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Load font asyncronally
{
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Roboto|Bungee+Inline:400,700';
    document.head.appendChild(link);
}