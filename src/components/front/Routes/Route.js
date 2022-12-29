import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Product  from '../Products/Product';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';

export default function Routs(productsItems) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Product productsItems = {productsItems}/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/cart" element = {<Cart/>}/>
      </Routes>
    </div>
  )
}
