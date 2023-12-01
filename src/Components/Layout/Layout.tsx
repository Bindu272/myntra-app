import React from 'react'
import Navbar from '../Comman/Navbar/Navbar'
import '../Comman/Home/Home.scss'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import WishlistLogin from '../NavPages/WishList/WishlistLoginpage/WishlistLogin'
import Home from '../Comman/Home/Home'
import './Layout.scss'
import AddToCart from '../NavPages/AddToCartPage/AddToCart'
import SignInPage from '../SignInPage/SignInPage'
import Beauty from '../NavPages/NavPageProduct/NavPageProduct'
import ProductDetailPage from '../../Pages/ProductDetailPage/ProductDetailPage'
import { CartProvider } from '../NavPages/AddToCartPage/CartContext'
import Footer from '../Comman/Footer/Footer';
import SocialLinks from '../Comman/Footer/SocialLinks';
// import Men
const Layout = () => {
//  const location = useLocation();
//  const renderFlatSection = !location.pathname.includes('/signInPage');
  return (  
    <>
    <Router >
      <CartProvider>
    <Navbar/>
   
    <div className='LayoutBody'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/wishlistLogin" element={<WishlistLogin />}/>
        <Route path='/signInPage' element={<SignInPage/>}/>
        <Route path='/addToCart' element={<AddToCart/>}/>
        <Route path='/beauty' element={<Beauty category="jewelery"/>}/>
        <Route path='/women' element={<Beauty category="women's clothing"/>}/>
        <Route path='/men' element={<Beauty category="men's clothing"/>}/>
        <Route path='/electronic' element={<Beauty category="electronics"/>}/>
        <Route path='/product-detail-page/:productId' element={<ProductDetailPage/>}/>
        <Route path="/socialLink" element={<SocialLinks />}/> 
      </Routes>
    </div>
   <Footer/>
    <Routes>
      <Route path='/signInPage' element={null}/>
      <Route path='/wishlistLogin' element={null}/>
      <Route path='/product-detail-page/:productId' element={null}/>
      <Route path='/addToCart' element={null}/>
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
   
    </CartProvider>
    
    </Router>  
   
    </> 
  )
}

export default Layout