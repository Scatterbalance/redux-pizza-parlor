import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


//getting data from the pizza item
const addPizzas = ( state=[], action ) =>{
    console.log( 'in addPizzas:', action );
    //adding pizza to array
    if( action.type === 'ADD_PIZZA' ){
            
        return [...state, action.payload];

    //removing pizza from array
     }else if(action.type === 'REMOVE_PIZZA'){
        console.log('id', action.payload.id);
        console.log('state:', state);
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === action.payload.id)
            state.splice(i,1);
        } //end for
        return state 
    }//end else if
            
    return state;
}

//getting customer info from page
const CustomerInfo =( state=[], action)=>{
    if(action.type === 'ADD_CUSTOMER'){
        return [...state, action.payload];
    }
    return state;
}

//adding types of pizzas to reducer store
const pizzas = ( state=[], action ) =>{
    console.log( 'in pizzas reducer:', action );
    if( action.type === 'SET_PIZZAS' ){
        return action.payload;
    }
    return state;
}

// test reducer
const tester = ( state='hello world', action ) =>{
    console.log( 'in tester reducer:', action );
    if( action.type === 'TEST' ){
        return action.payload.msg;
    }
    return state;
}

const updateCart = (state= 0, action )=>{
    console.log('updating cart:', action);
    let price = 0;
    if( action.type === 'ADD_PIZZA' ){
    price = action.payload.price;
    console.log(price);
    state = state + price;
    return state
    
    }else if (action.type === 'REMOVE_PIZZA'){
    price = action.payload.price;
    console.log(price);
    state = state - price;
    return state

    }//end elseif
    return state;

}


// store
const pizzaStore = createStore(combineReducers({
        tester,
        pizzas,
        addPizzas,
        CustomerInfo,
        updateCart
    })
)

ReactDOM.render(<Provider store={ pizzaStore }><App /></Provider>, document.getElementById('root'));

