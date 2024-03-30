import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { DEFAULT_USER_AVATAR, LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { Supported_Languages } from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';
import lang from '../utils/languageConstants';


const Header = () => {
  const langkey = useSelector(store => store.config.lang)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
            dispatch(
                addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
                })
            );
            navigate('/browse')
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/');
          
        }
      });
  return () =>   unsubscribe(); //unsubscribe when my component unmounts
},[])
    const handlesignout = () => {
         signOut(auth).then(() => {
         // Sign-out successful.

        }).catch((error) => {
           // An error happened.
          navigate("/error")
    });
  }
  const handleGPTSearchClick = () => {
          //Toggle my gpt search
          dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e)=>{
      dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className=''>
        
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between '>
            <img 
            className='w-44 mx-auto md:mx-0'
            src={LOGO} alt="logo" />
  {auth.currentUser && (
          <div className='flex items-center p-2'>
               {showGptSearch &&   <select  className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
              >
              {Supported_Languages.map((lang)=> ( <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
            
            </select>} 
           
         <div className='flex justify-center items-center mx-auto'>
            <button className='py-2 px-4 my-2 mx-4  text-white bg-purple-800 rounded-xl 'onClick={handleGPTSearchClick}>
             {showGptSearch ? lang[langkey].homepage :  "GPT Search"} 
              </button>
            <img 
            className='hidden md:block w-12 h-12 '
            src={DEFAULT_USER_AVATAR} alt="usericon" />
          <button onClick={handlesignout} className='btn font-bold ml-2 text-white '>{lang[langkey].signout} </button>
          </div>
          </div>) }
          </div>
    </div>
  )
}

export default Header