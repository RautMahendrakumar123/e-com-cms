import React, { useContext } from 'react'
import "./header.css"
import { cartContext } from '../context/cart-context'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {cartData} = useContext(cartContext);
  const navigate = useNavigate();
  return <>
  <nav className='navbar'>
    <section>Game Site</section>
    <section onClick={()=>{navigate('/cart')}}>
      <span>{cartData.length}</span>
      Cart</section>
  </nav>
  </>
}

export default Header
