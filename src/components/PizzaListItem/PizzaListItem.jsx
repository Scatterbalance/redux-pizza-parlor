
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import axios from 'axios';

function PizzaListItem( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const addPizzas = useSelector( store => store.addPizzas );
    const dispatch = useDispatch();
    
    const[switchButton, setswitchButton]=useState( true );

    const toggleImage = () =>{
        console.log( 'in switch button' ); 
        setswitchButton( !switchButton );
    }
    let pizzaObject = {
        id: props.pizza.id,
        name: props.pizza.name,
        price: Number(props.pizza.price),
        quantity: 1
    };
    

    return(
        <div className = "imageBlock">
            <img className= "image" src={props.pizza.image_path} alt ={props.pizza.description} />
            <h2>{props.pizza.name}</h2>
            <p className= "description">{ props.pizza.description }</p> 
           
            <div className = 'price'>
            <p>price: {props.pizza.price}</p>
            
            {
               switchButton ?
            <button className = 'addpizza' onClick = { ()=>{toggleImage();dispatch( { type: 'ADD_PIZZA', payload: pizzaObject})}}>add</button>:
            <button className = 'removepizza' onClick = { ()=>{toggleImage();dispatch( { type: 'REMOVE_PIZZA', payload: pizzaObject} )} }>remove</button>
            }
            </div>
            
        
        </div>
    )
}

export default PizzaListItem;