import React, { useState } from 'react'
import './WishlistLogin.scss'
import { Link } from 'react-router-dom';
import { useCart } from '../../AddToCartPage/CartContext';
import { title } from 'process';

const WishlistLogin = () => {
  const [isAddedToBag, setIsAddedToBag]=useState<string[]>([]);
  const {cart, dispatch}= useCart();
  const {wishListItems}=cart

  const handleAddToCart=(product: any)=>{
    dispatch({type:'ADD_TO_CART',payload:product})
    setIsAddedToBag((prevItems) => [...prevItems, product.id]);

}
  return (
    <>{wishListItems.length>0?( <div className='wishlist-main-card'>
   {wishListItems.map((itemId:any, index:any)=>(
      <li key={itemId.id}>
        <div >
          <img src={itemId.image} alt={itemId.title}/>
          <h5>{itemId.title}</h5>
          <h6>{itemId.price} Rs/-</h6>
          <button onClick={()=>{
                               if(!isAddedToBag.includes(itemId.id)){
                                handleAddToCart(itemId)
                               }
                            }}disabled={isAddedToBag.includes(itemId.id)} style={{ background: "#ff3f6c", border: "none", color: '#ffff', marginRight: '2rem' }}>
                                {isAddedToBag.includes(itemId.id)?'Added to Bag':'Add To Bag'} <i className="fa-solid fa-bag-shopping nav_icon"></i>
                            </button>
        </div>
        {/* <p>{itemId.title}</p> */}
      </li>
    ))}</div>):(
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
    )}
      </>
  )
}

export default WishlistLogin;