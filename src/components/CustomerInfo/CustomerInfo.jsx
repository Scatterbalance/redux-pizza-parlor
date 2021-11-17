
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function CustomerInfo( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    
    const dispatch = useDispatch(); 

    //set initial variables
    const [newCustomer, setnewCustomer]= useState('');
    const [newAddress, setCustomerAddress]= useState('');
    const [newCity, setnewCity]= useState('');
    const [newZip, setnewZip]= useState('');
    const [newDeliveryMethod, setnewDeliveryMethod]= useState('')
    //get customer entered info from click event
    const updateCustomerName = (event)=>{
        setnewCustomer(event.target.value);
       }

       const updateCustomerAddress = (event)=>{
        setCustomerAddress (event.target.value);
       }

       const updateCustomerCity= (event)=>{
        setnewCity (event.target.value);
       }

       const updateCustomerZip= (event)=>{
        setnewZip (event.target.value);
       }

       const updateDeliveryMethod= (event)=>{
        setnewDeliveryMethod (event.target.value);
       }
       const CustomerInfo = useSelector( store => store.CustomerInfo);


return(
    <div>
        <h1>Step 2: Customer Information</h1>
        <input type="text" placeholder="Name" onChange={ (event)=>updateCustomerName( event ) } ></input>
        <input type="text" placeholder="Street Address" onChange={ (event)=>updateCustomerAddress( event ) } ></input>
        <input type="text" placeholder="City" onChange={ (event)=>updateCustomerCity( event ) } ></input>
        <input type="text" placeholder="Zip" onChange={ (event)=>updateCustomerZip( event ) } ></input>
        <p>Pick Up or Delivery?:</p>
        <div onChange={ (event)=>updateDeliveryMethod( event ) }>
        <input type="radio" id="Pick Up" name="delivery method" value="Pick Up"></input><label >Pick Up</label>
        <input type="radio" id="Delivery" name="delivery method" value="Delivery"></input><label >Delivery</label>
        </div>

        <Link to="/Checkout"><button  onClick={()=>dispatch({type:'ADD_CUSTOMER', 
            payload: { name: newCustomer, address: newAddress, city: newCity, zip: newZip, deliveryMethod: newDeliveryMethod} })}>Next</button></Link>
        <p>Customer: { JSON.stringify(CustomerInfo)}</p>
    
    </div>
)
}

export default CustomerInfo;