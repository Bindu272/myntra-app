import React, { useEffect } from 'react';
import { Link, useLocation , } from 'react-router-dom';
import SocialLinks from './SocialLinks';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const location=useLocation()
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount or route change
      }, [location.pathname]);
  return (
    <footer className="bg-white text-dark text-center p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>ONLINE SHOPPING</h5>
            <ul className="list-unstyled ">
              <li ><Link className='text-dark' to='/men'>Men</Link></li>
              <li><Link className='text-dark' to='/women'>Women</Link></li>
              <li className='text-secondary'>Kids</li>
              <li><Link className='text-dark' to='/electronic'>Home & Living</Link></li>
              <li><Link className='text-dark' to='/beauty'>Beauty</Link></li>
              <li className='text-secondary '>Gift Cards</li>
              <li className='text-secondary'>Myntra Insider</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li className='text-secondary'>Blog</li>
              <li className='text-secondary'>Careers</li>
              <li className='text-secondary'>Site Map</li>
              <li className='text-secondary'>Corporate Information</li>
              <li className='text-secondary'>Whitehat</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>CUSTOMER POLICIES</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li className='text-secondary'>FAQ</li>
              <li className='text-secondary'>T&C</li>
              <li className='text-secondary'>Terms Of Use</li>
              <li><Link className='text-dark' to='/addToCart'>Track Orders</Link></li>
              <li ><Link className='text-dark' to='/addToCart'>Shipping</Link></li>
              <li ><Link className='text-dark' to='/addToCart'>Cancellation</Link></li>
              <li><Link className='text-dark' to='/addToCart'>Returns</Link></li>
              <li className='text-secondary'>Privacy policy</li>
              <li className='text-secondary'>Grievance officer</li>
            </ul>
          </div>
        </div>
      </div>
    
        <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
        <p>KEEP IN TOUCH</p> 
       <SocialLinks/>
        <div className="mt-4">
        
        <p>100% ORIGINAL guarantee for all products at myntra.com</p>
        <p>Return within 30 days of receiving your order</p>
     </div>
    </footer>
  );
};

export default Footer;
