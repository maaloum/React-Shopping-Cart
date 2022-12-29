import React from 'react'
import './Product.css'
import Watch from '../../../Images/watch.jpg'

const Product = (productsItems) => {
  return (
    <div className='products'>
      {productsItems.productsItems.productsItems.products.map(product =>
        <div className='product' key={product.id}>
          <img className='product-image' src= {Watch} alt='product'/>
          <div className='product-name'>
            {product.name}
          </div>
          <div className='product-price'>${product.price}</div>
          <div> <button className='product-add-btn'>Add to cart</button> </div>
        </div>
      )}
    </div>
  )
}

export default Product
