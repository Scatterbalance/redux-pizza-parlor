
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import axios from 'axios';

function PizzaListItem( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const addPizzas = useSelector( store => store.addPizzas );
    const dispatch = useDispatch();

    

    return(
        <div className = "imageBlock">
            <img className= "image" src={props.pizza.image_path} alt ={props.pizza.description} />
            <h2>{props.pizza.name}</h2>
            <p className= "description">{ props.pizza.description }</p> 
           
            <div className = 'price'>
            <p>price: {props.pizza.price}</p>

            <button className = 'addpizza' onClick = { ()=>dispatch( { type: 'ADD_PIZZA', payload: props.pizza} ) }>add</button>
            <button className = 'removepizza' onClick = { ()=>dispatch( { type: 'REMOVE_PIZZA', payload: props.pizza} ) }>remove</button>
            </div>
            <p>{JSON.stringify(addPizzas)}</p>
        
        </div>
    )
}

export default PizzaListItem;