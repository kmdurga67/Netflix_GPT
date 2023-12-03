import { signOut } from 'firebase/auth';
import React from 'react';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/") 
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img 
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        alt='Logo' className='w-44'/>
        {user && <div className='flex p-2'>
          <img src={user.photoURL ? user.photoURL : "https://cdn.iconscout.com/icon/premium/png-256-thumb/logout-2658702-2211662.png"} alt='signout' className='w-12 h-12 pt-2 mt-3'/>
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header