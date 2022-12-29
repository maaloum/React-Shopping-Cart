import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './../../../Images/log.png'

export default function Header(productsItems) {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img className='my-logo' src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for items" />
        <button>Search</button>
      </div>
      <div className='left'>
        <div className="cart">
          <Link to="/cart">My Cart</Link>
        </div>
        <div className="signin">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>

    </header>
  )
}
