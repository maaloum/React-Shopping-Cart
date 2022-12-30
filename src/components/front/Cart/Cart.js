import React from 'react'
import './Cart.css'
import Watch from '../../../Images/watch.jpg'


export default function Cart({cartItems, handleRemoveCart, handleClearAll}) {
  return (
    <div className='card'>
      <div>
        <h2>Your Items</h2>
        <div className='cart-items'>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className='cart-item'>
              <img src={Watch}
              alt={item.name}
              />
              <div>
                <div>{item.name}</div>
                <div className='right'>
                  <div>{item.price} x {item.qty} </div>
                  <button className='removeBtn' onClick={() =>{handleRemoveCart(item)}}>Remove</button>
                </div>
            </div>
      </div>
          ))}
          <div className='cart-items-total-rice-name'>
            <div className='cart-items-total'>
              Total Price: ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </div>
          </div>
        </div>
        <div>
            <button className='cart-items-clearAll-btn' onClick={() => handleClearAll()}>clearAll</button>
          </div>
      </div>
    </div>
  )
}
