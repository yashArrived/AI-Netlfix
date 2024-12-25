import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData  from '../utils/validate'
import {auth } from '../utils/firebase'

import { createUserWithEmailAndPassword ,updateProfile, signInWithEmailAndPassword} from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BROWSE_BG_IMG, DEFAULT_USER_AVATAR } from '../utils/constants';



const Login = () => {

    const dispatch = useDispatch();

    const [isSignInForm , setisSignInForm] = useState(true);
    const [errmsg,setErrmsg] = useState(null);
    const email = useRef(null);
    //use ref is used to reference a field
    const password = useRef(null);
    const name = useRef(null);
    const toggleSignInForm = () => {
            setisSignInForm(!isSignInForm);
    }
    const handleButtonClick = (e) => {
        //Validate the form data
      
        
        
        const msg = checkValidData(email.current.value, password.current.value)
        setErrmsg(msg);

        //Proceed with signin / signup  
        if(msg){
            return;
        }
        //signin/signup Logic
        if(!isSignInForm){
                //signup Logic
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

  .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: DEFAULT_USER_AVATAR,
      }).then(() => {
        // Profile updated!
        // ...
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(
            addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
            })
        );
    
      }).catch((error) => {
        // An error occurred
        // ...
        setErrmsg(error.message);
      });
    updateProfile(user, {
        // displayName: name.current.value 
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    // Signed up 
    // ...


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrmsg(errorCode+ "-" + errorMessage );
  });


        }
        else{
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/invalid-credential'){
        setErrmsg("Err.. No User Found !")
    }

  });
        }

    }
  return (
    <> 
       <div>
        <Header/> 
          <div className='absolute h-screen w-screen object-cover'>
    
       <img className=' h-screen w-full object-cover' src={BROWSE_BG_IMG} alt="" />
       </div>
       <form  onSubmit={(e)=>e.preventDefault()}  className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className='py-4 font-bold text-3xl'>{isSignInForm ?" Sign In ":"Sign Up" }</h1>
           {
            !isSignInForm &&
            <input type="text" placeholder="Full Name " className='p-4 my-4 w-full bg-gray-500   ' ref={name} />} 
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600' ref={email}/>
            <input type="password" placeholder="Password " className='p-4 my-4 w-full bg-gray-500   ' ref={password} />
            <br />
            <p className='text-red-500 font-bold text-lg py-2 '>{errmsg}</p>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ?" Sign In ":"Sign Up" }</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ?" New to Netflix? Sign Up Now":"Already registered? Login here" }</p>
       </form>
       
       
       </div>
    </>

  )
}

export default Login
