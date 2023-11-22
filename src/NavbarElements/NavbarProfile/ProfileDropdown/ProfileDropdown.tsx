import React, { useEffect } from 'react'
import './ProfileDropdown.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../../Components/Firebase'
import { addUser, removeUser } from '../../../Redux/userSlice'
const ProfileDropdown = () => {
const dispatch  =  useDispatch();
const navigate =  useNavigate();
const user  = useSelector((store:any)=> store.user);
const handleSignOut = () =>{
const auth = getAuth();
signOut(auth)
.then(()=> {})
.catch((error)=>{
  // navigate('\error');
  console.log(error)
})
  }
  useEffect(() => {
    // Create a variable to hold the unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/");
      } else {
        dispatch(removeUser(null));
        navigate("/signInPage");
      }
    });
  
    // Return the unsubscribe function in the cleanup function
    return () => {
      unsubscribe(); // Call the unsubscribe function when the component unmounts
    };
  }, [dispatch, navigate]);
  console.log(user)
  return (
    <div>
      
<div className='profileDropdownCard'>
<div className='container'>
  <p>Welcome 
    {/* <h6>{user.users.email}</h6> */}
  </p>
  <p>To access account and manage order</p>
  <button className='profileDropBtn' 
  onClick={handleSignOut}
  >{user ? 'Logout': 'Login / Sign up'}</button>
  <hr></hr>
  
    <li>Order</li>
    <li>Wishlist</li>
    <li>Gift Card</li>
    <li>Contact Us</li>
    <li>Myntra insider</li>
  <hr></hr>
 <li> Myntra Credit</li>
<li>Coupons</li>
<li>Saved Cards</li>
<li>Saved VPA</li>
<li>Saved Addresses</li>
</div>
</div>
    </div>
  )
}

export default ProfileDropdown