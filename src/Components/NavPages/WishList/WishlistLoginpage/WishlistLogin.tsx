import React from 'react'
import './WishlistLogin.scss'
import { Link } from 'react-router-dom';
const WishlistLogin = () => {
  return (
    <div className='wishlistLogin-container'>
      <div className='wishlistLogin-heading'>
        PLEASE LOG IN
      </div>
      <div className='wishlistLogin-info'>Login to view items in your wishlist</div>
      <i className="fa-solid fa-heart fa-2xl"></i>
      <div className='wishlistLogin-button'>
        <button ><Link to='/signInPage'>LOGIN</Link></button>
      </div>
    </div>
  )
}

export default WishlistLogin;