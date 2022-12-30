import React, {useState} from 'react'
import { Routes , Route } from 'react-router-dom';
import Product  from '../Products/Product';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';

export default function Routs({productsItems}) {
  const [cartItems, setCartItems] = useState([])

  const handelAddProduct =(product) =>{
    const exist = cartItems.find(item => item.id === product.id)
    if(exist){
      setCartItems(cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty + 1} : item))
    }else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const handleRemoveCart = (item) =>{
    const exist = cartItems.find((x) => x.id === item.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== item.id))
    }else{
      setCartItems(cartItems.map((x) => x.id === item.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }
  const handleClearAll = () =>{
    setCartItems([])
  }


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Product productsItems = {productsItems} handelAddProduct={handelAddProduct}/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/cart" element = {<Cart cartItems={cartItems} handleRemoveCart= {handleRemoveCart} handleClearAll={handleClearAll}/>}/>
      </Routes>
    </div>
  )
}
