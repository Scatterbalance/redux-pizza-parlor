
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function CustomerInfo( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>CustomerInfo</h1>
        </div>
    )
}

export default CustomerInfo;