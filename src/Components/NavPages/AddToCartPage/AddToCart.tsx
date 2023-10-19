import React from 'react'
import './AddToCart.scss'
const AddToCart = () => {
  return (
    <div className='emptyBagContainer'>
        <img src='./Images/empty-bag.webp' alt='emptyCart' className='empty-bag-img'/>
        <div className='emptyText'>Hey, it feels so light!</div>
        <div className='emptyDesc'>There is nothing in your bag. Let's add some items.</div>
        <button>ADD ITEMS FROM WISHLIST</button>
    </div>
  )
}

export default AddToCart