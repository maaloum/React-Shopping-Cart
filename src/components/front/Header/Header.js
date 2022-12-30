import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './../../../Images/log.png'

export default function Header({handleSearch}) {

  const [value, setValue] = useState('')

  const handlInput = (e) =>{
    setValue(e.target.value)

  }
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img className='my-logo' src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="search">
        <input type="text" value={value} onChange={handlInput} placeholder="Search for items" />
        <button onClick={()=> handleSearch(value)}>Search</button>
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
