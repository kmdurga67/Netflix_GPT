import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, addUser } from "../store/userSlice";
import { LOGO,USER_DEFAULT_AVTAR } from "../utils/constants";
import { toggleGptSearchValue } from "../store/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => {
      unsubcribe();
    }
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchValue());
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        src= {LOGO}
        alt="Logo"
        className="w-48"
      />
      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 my-2 m-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
          <img
            src={
              user.photoURL
                ? user.photoURL
                : {USER_DEFAULT_AVTAR}
            }
            alt="signout"
            className="w-12 h-12 pt-2 mt-3 rounded-lg"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
