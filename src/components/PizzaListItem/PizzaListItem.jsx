
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function PizzaListItem( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>PizzaListItem</h1>
        </div>
    )
}

export default PizzaListItem;