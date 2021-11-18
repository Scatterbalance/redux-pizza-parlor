
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import axios from 'axios';

function Checkout( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const dispatch = useDispatch();

    const CustomerInfo = useSelector( store => store.CustomerInfo);
    const addPizzas = useSelector( store => store.addPizzas );
    const updateCart = useSelector( store => store.updateCart );
    // const [objectToSend, setobjectToSend] = useState(
    //      {
    //        customer_name: CustomerInfo.name,
    //        street_address: CustomerInfo.address,
    //        city: CustomerInfo.city,
    //        zip: CustomerInfo.zip,
    //        total: addPizzas.price,
    //        type: CustomerInfo.deliveryMethod,
    //        pizzas: addPizzas

    //     //    customer_name: "Laura",
    //     //    street_address: "123 Main",
    //     //    city: "MPLS",
    //     //    zip: "54321",
    //     //    total: "27.98",
    //     //    type: "delivery",
    //     //    pizzas: [{
    //     //        id: 1,
    //     //        quantity: 1
    //     //      },{
    //     //        id: 2,
    //     //        quantity: 1
    //     //      }]
    //      });

        const postPizzas = ()=>{
            console.log(CustomerInfo.name);
            let objectToSend =
                {
                  customer_name: CustomerInfo.name,
                  street_address: CustomerInfo.address,
                  city: CustomerInfo.city,
                  zip: CustomerInfo.zip,
                  total: Number(updateCart.toFixed(2)),
                  type: CustomerInfo.deliveryMethod,
                  pizzas: addPizzas }
       console.log(objectToSend);
            axios.post( '/api/order', objectToSend ).then( ( response ) =>{
                console.log( 'back from Post:', response.data );
            })
            .catch( ( err )=>{
                alert( 'uh oh');
                console.log( err );
            })
        }


    

return(

    <div>
    <h1>Checkout</h1>
    <button onClick={postPizzas}>Checkout</button>
    
    <p>pizzas to use {JSON.stringify(addPizzas)}</p>
    <p>cust to use {JSON.stringify(CustomerInfo)}</p>
    </div>
)
}

export default Checkout;