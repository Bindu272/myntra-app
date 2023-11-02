import React, { useEffect, useState } from "react";
import './Navbar.scss'
import Profileicon from "../../../NavbarElements/NavbarProfile/ProfileIcon/Profileicon";
import { useLocation } from "react-router-dom";
import NavElementDropdown from "../../../NavbarElements/NavElementsDropdown/NavElementDropdown";

import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
// import { auth } from '../../Firebase'
// import { addUser, removeUser } from '../../Redux/userSlice'

const Nav = () => {
//   const dispatch  =  useDispatch();
// const navigate =  useNavigate();
// const user  = useSelector((store)=> store.user);
// const handleSignOut = () =>{
// const auth = getAuth();
// signOut(auth)
// .then(()=> {})
// .catch((error)=>{
//   // navigate('\error');
//   console.log(error)
// })
//   }
//   useEffect(() => {
//     // Create a variable to hold the unsubscribe function
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName, photoURL } = user;
//         dispatch(
//           addUser({
//             uid: uid,
//             email: email,
//             displayName: displayName,
//             photoURL: photoURL,
//           })
//         );
//         navigate("/");
//       } else {
//         dispatch(removeUser(null));
//         navigate("/signInPage");
//       }
//     });
  
//     // Return the unsubscribe function in the cleanup function
//     return () => {
//       unsubscribe(); // Call the unsubscribe function when the component unmounts
//     };
//   }, [dispatch, navigate]);
  
  const [activeItem, setActiveItem] = useState()

  const handleMouseEnter = (item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };
  const location=useLocation();
  return (
    <>
    <nav >
      
      <div className="nav_background">
        <ul className="nav_ul">
          <li className="nav_li nav_item1 ">
            <Link to='/'> <img
              className="nav_logo"
              src="data:image/png;base64,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"
              alt="logo"
            ></img></Link>
           
          </li>
          {/* <li className="nav_li nav_item1" onMouseEnter={()=>handleMouseEnter('men')}onMouseLeave={handleMouseLeave} >men </li> */}
       <Link to='/men'> <li className="nav_li nav_item1">men</li></Link> 
         <Link to='/women'><li className="nav_li nav_item1" >women</li></Link> 
       <li className="nav_li nav_item1">kids</li>
        <Link to='/electronic'> <li className="nav_li nav_item1">home & living</li></Link> 
        <Link to='/beauty'><li className="nav_li nav_item1">beauty</li></Link>  
          <li className="nav_li nav_item1 nav_new">studio</li>
          <p className="new">NEW</p>
          <li className="nav_li nav_item2"> 
            <input
              className="nav_input"
              size={40}          
              type="text"
              placeholder= "Search for products, brand and more"
             
            />
            <i className="fa-solid fa-magnifying-glass search_icon"></i>
          </li>
          {location.pathname !=='/signInPage' &&(
            <span className="nav_item3">
          <Profileicon />
          </span>
          )}
         
       
          <span className="nav_item3">
            <i className="fa-solid fa-heart nav_icon"></i>

            <li className="nav_li "><Link to='/wishlistLogin'>Wishlist</Link> </li>
          </span>
          <span className="nav_item3">
            <Link to='/addToCart'>
            <i className="fa-solid fa-bag-shopping nav_icon"></i>
            <li className="nav_li ">Bag</li></Link>
            
          </span>
       
        </ul>
      </div>
      </nav>
      {/* <span>{activeItem=== 'men' && (<NavElementDropdown>Men Content</NavElementDropdown>)}</span>
      {activeItem==='women' &&(<NavElementDropdown>Women</NavElementDropdown>)} */}
    </>
  );
};

export default Nav;
