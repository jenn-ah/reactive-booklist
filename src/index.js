import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/index';
//this App can be named what you prefer; 
//similar to module.exports
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
