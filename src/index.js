import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// test reducer
const tester = ( state='hello world', action ) =>{
    console.log( 'in tester reducer:', action );
    if( action.type === 'TEST' ){
        return action.payload.msg;
    }
    return state;
}
const pizzas = ( state=[], action ) =>{
    console.log( 'in pizzas reducer:', action );
    if( action.type === 'SET_PIZZAS' ){
        return action.payload;
    }
    return state;
}

// store
const pizzaStore = createStore(combineReducers({
        tester,
        pizzas
    })
)

ReactDOM.render(<Provider store={ pizzaStore }><App /></Provider>, document.getElementById('root'));

