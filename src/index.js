import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './React/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './Redux/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
