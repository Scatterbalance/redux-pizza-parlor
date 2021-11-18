
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function Header( props ){
    // const reducerName = useSelector( store => store.reducerName );
    const updateCart = useSelector( store => store.updateCart );
    // const [name, setName] = useState( null );
    
    const dispatch = useDispatch();



    return(
        <div>
            <header className='App-header'>
              <h1 className='App-title'>Prime Pizza</h1>
              <p className = "cart">Cart Total: {(Number(updateCart.toFixed(2)))}</p>
            </header>
        </div>
    )
}

export default Header;




