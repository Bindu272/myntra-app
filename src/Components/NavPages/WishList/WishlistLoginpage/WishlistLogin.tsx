import React, { useEffect, useState } from 'react'
import './WishlistLogin.scss'
import { Link } from 'react-router-dom';
import { useCart } from '../../AddToCartPage/CartContext';
import { title } from 'process';

const WishlistLogin = () => {
  // const [isAddedToCart, setIsAddedToCart]=useState(false);
  const {cart, dispatch}= useCart();
  const {wishListItems}=cart

  const handleAddToCart=(product: any)=>{
    dispatch({type:'ADD_TO_CART',payload:product})
    // setIsAddedToCart((prevItems) => [...prevItems, product.id]);
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });

}
const handleRemoveWishlist=(itemId:any)=>{
dispatch({type:'REMOVE_FROM_WISHLIST', payload:{id:itemId}})
}
const isAddedToCart = (itemId: any) => {
  const productInCart = cart.items.find((item: { id: any }) => item.id === itemId);
  return productInCart !== undefined;
};
  return (
    <>{wishListItems.length>0?( <div className='wishlist-main-card'>
   {wishListItems.map((itemId:any, index:any)=>(
      <li key={itemId.id}>
        
        <div className='wishlist-card'>
         
          <div>
          <Link to={`/product-detail-page/${itemId.id}`} style={{color:'black'}}>
          <img src={itemId.image} alt={itemId.title}/>
          <h5>{itemId.title}</h5>
          <h6>{itemId.price} Rs/-</h6>
          </Link>
          <button
  onClick={() => {
    if (!isAddedToCart(itemId.id)) {
      handleAddToCart(itemId);
    }
  }}
  disabled={isAddedToCart(itemId.id)}
  style={{
    background:  "#ff3f6c" ,
    border: "none",
    color: "#ffff",
    marginRight: "2rem",
  }}
>
  {isAddedToCart(itemId.id) ? "Added to Bag" : "Add To Bag"}{" "}
  <i className="fa-solid fa-bag-shopping nav_icon"></i>
</button>
{/* <button onClick={()=>handleRemoveWishlist(itemId.id)}>Remove</button> */}
        </div>
        <div >
                 <i className="fa-solid fa-x" onClick={()=>handleRemoveWishlist(itemId.id)} style={{cursor:'pointer'}}></i>
                  </div>
                 
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