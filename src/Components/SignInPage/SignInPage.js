import React, { useRef, useState } from 'react';
import './SignInPage.scss';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ValidateForm } from '../validate';
import {auth} from '../Firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/userSlice';

const SignInPage = () => {
  const dispatch = useDispatch();

  const [isCreateAccount, setIsCreateAccount]=useState(true);
  const [loginErrMessage, setLoginErrMessage]=useState('');

const name = useRef(null)
const email =  useRef(null);
const pass =  useRef(null);

const handleSignUpForm = () =>{
  const errMessage = ValidateForm(email?.current?.value, pass?.current?.value);
      setLoginErrMessage(errMessage)
  if(errMessage) return;
  if(isCreateAccount){
  createUserWithEmailAndPassword(auth, email?.current?.value, pass?.current?.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
      displayName: name.current.value
      // photoURL: 
    }).then(() => {
      // Profile updated!
      const{uid, email, displayName} = auth.currentUser;
      dispatch(
        addUser({
          email:email,
          displayName:displayName,
          uid:uid
        })
      )
      
    }).catch((error) => {
      // An error occurred
      // ...
      setLoginErrMessage(error.message);
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setLoginErrMessage(errorCode+errMessage)
  });
}
else{
  signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setLoginErrMessage(errorCode+errMessage)
  });

}
}
  return (
    <div className='sign-in-container'>
      <img className='img-responsive' src='./Images/signin.webp' alt='signinimg' />
      <div className='signInContainer'>
        <div className='welcome-header'>     {isCreateAccount ? 'Create Account' : 'Login'}{' '}

        </div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <div className='mobileInputContainer'>
        
          <div className='form-group'>
          {isCreateAccount && ( <input  type='text' className='form-control mobileNumberInput' 
           placeholder='Name' size={35}/>)}
         
            <input type='email' 
            ref={email}
            className='form-control mobileNumberInput' 
            placeholder='Email' 
            style={{margin:"1rem 0"}}
            size={35}/>

            <input  
            type='password' 
            ref={pass} 
            className='form-control mobileNumberInput' 
            maxLength={8} 
            placeholder='Password'
            size={35}/>
          </div>
         
          <div className='midLinks'>By continuing, I agree to the <span style={{color:"#ff3f6c"}}>Terms of use</span>  & <span style={{color:"#ff3f6c"}}>Privacy Policy</span> </div>
         
         <p>{loginErrMessage}</p>
          <div className='submitBottomOption'  
          onClick={handleSignUpForm}
          > {isCreateAccount ? 'CONTINUE' : 'LOGIN'}</div>


        </div>
        </form>
        <div className='get-help' onClick={() => setIsCreateAccount(!isCreateAccount)}> <span>{isCreateAccount? 'Already have an account?' :'Dont have an account?'}</span> <span style={{color:"#ff3f6c"}}> {isCreateAccount ? ' Login' : 'Create Account'}</span> </div>
       
      </div>
    </div>
  );
}

export default SignInPage;
