import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './store/reducers/rootReducers'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'

const state = createStore(rootReducers, applyMiddleware(thunk))


ReactDOM.render(<Provider store={state}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
