
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function PizzaListItem( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div className = "imageBlock">
            <img className= "image" src={props.pizza.image_path} alt ={props.pizza.description} />
            <h2>{props.pizza.name}</h2>
            <p className= "description">{ props.pizza.description }</p> 
           
            <div className = 'price'>
            <p>price: {props.pizza.price}</p>

            <button className = 'addpizza'>add</button>
            </div>
        
        </div>
    )
}

export default PizzaListItem;