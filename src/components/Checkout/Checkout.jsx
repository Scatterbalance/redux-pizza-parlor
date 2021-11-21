
   
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, FormRow} from '@material-ui/core'
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
    
<Grid container spacing = {2} xs = {12}

><Grid item xs={1} />
<Grid item 

xs = {8}
className = "Checkoutleft"
><h3 >Step 3: Checkout</h3>
<p>{CustomerInfo.name}</p>
<p>{CustomerInfo.address}</p>
<p>{CustomerInfo.city} {CustomerInfo.zip}</p>

<TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align = "left">Name</TableCell>
            <TableCell align="left">Cost</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {addPizzas.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item
    xs={12}>


    <button onClick={postPizzas}>Checkout</button>
    </Grid>
    </Grid>
    <p>pizzas to use {JSON.stringify(addPizzas)}</p>
    <p>cust to use {JSON.stringify(CustomerInfo)}</p>
    </div>
)
}

export default Checkout;