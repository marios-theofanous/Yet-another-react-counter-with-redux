import React from 'react';
import ReactDOM from 'react-dom';
import Score from './components/Score';
import ChangeButton from './components/ChangeButton.jsx'
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {connect} from 'react-redux'
import {CounterContainer} from './components/Counter';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
store.dispatch({
    type: 'RESET'
});


ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById('app')
);
