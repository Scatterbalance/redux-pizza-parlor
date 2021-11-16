
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import axios from 'axios';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

function PizzaList( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const pizzas = useSelector( store => store.pizzas );
    // const [name, setName] = useState( null );

    useEffect( ()=>{ getPizzas() }, []);

    const dispatch = useDispatch();

    const getPizzas = () =>{
        axios.get( '/api/pizza' ).then( ( response ) =>{
            console.log( 'back from GET:', response.data );
            dispatch( { type: 'SET_PIZZAS', payload: response.data } );
        })
        .catch( ( err )=>{
            alert( 'uh oh');
            console.log( err );
        })
    }
    return(
        <div>
            <h3 className = "StepTitle">Step 1: Select Your Pizza</h3>
            {pizzas.map( pizza=>(<PizzaListItem pizza={pizza}/>))}
            <p>{JSON.stringify(pizzas)}</p>
        </div>
    )
}

export default PizzaList;