import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import PizzaList from '../PizzaList/PizzaList';
import Checkout  from '../Checkout/Checkout';
import Admin from '../Admin/Admin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <Header />
      
      
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<PizzaList />}></Route>
          <Route path = "/CustomerInfo" element={<CustomerInfo />}></Route>
          <Route path = "/Checkout" element={<Checkout />}></Route>
          <Route path = "/Admin" element={<Admin />}></Route>
        </Routes>



      </BrowserRouter>
  
    </div>
  );
}

export default App;
