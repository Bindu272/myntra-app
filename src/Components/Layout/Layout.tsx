import React from 'react'
import Navbar from '../Comman/Navbar/Navbar'
import InviteHome from '../Card/InviteCard/InviteCard'
import SimpleSlider from '../Carousel/Carousel'
import Brand from '../Comman/Home/brand/Brand'
import DealOf from '../Comman/Home/Deal/DealOf'
import TopPick from '../Comman/Home/Top/TopPick'
import '../Comman/Home/Home.scss'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import WishlistLogin from '../NavPages/WishList/WishlistLoginpage/WishlistLogin'
import Home from '../Comman/Home/Home'
import './Layout.scss'

import AddToCart from '../NavPages/AddToCartPage/AddToCart'
import SignInPage from '../SignInPage/SignInPage'
import Beauty from '../NavPages/Beauty/Beauty'
// import Men
const Layout = () => {
//  const location = useLocation();
//  const renderFlatSection = !location.pathname.includes('/signInPage');
  return (
   
    <Router >
    <Navbar/>
    
    <div className='LayoutBody'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/wishlistLogin" element={<WishlistLogin/>}/>
        <Route path='/signInPage' element={<SignInPage/>}/>
        <Route path='/addToCart' element={<AddToCart/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        {/* <Route path='/men' element={<Men/>}/> */}
        {/* <Route path='/beauty' element={<Beauty/>}/> */}
      </Routes>
    </div>
    <Routes>
      <Route path='/signInPage' element={null}/>
      <Route path='*'
      element={
        <div className="flat">
          <h1 className="flat_h">
            Flat 50% offer
            <span>
              <i className="fa-solid fa-caret-up"></i>
            </span>
          </h1>
          </div>}/>
    </Routes>    
    </Router>
   
    
    
  
  )
}

export default Layout