
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function Header( props ){
    // const reducerName = useSelector( store => store.reducerName );
    const addPizzas = useSelector( store => store.addPizzas );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <header className='App-header'>
              <h1 className='App-title'>Prime Pizza</h1>
              <p>{JSON.stringify(addPizzas)} </p>
            </header>
        </div>
    )
}

export default Header;