import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, addUser } from "../store/userSlice";
import {
  LOGO,
  SUPPORTED_LANGUAGES,
  USER_DEFAULT_AVTAR,
} from "../utils/constants";
import { toggleGptSearchValue } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector(store => store.gpt.showGptSearch);

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
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchValue());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between md:justify-between">
      <img src={LOGO} alt="Logo" className="w-48 mx-auto md:mx-0" />
      {user && (
        <div className="flex p-2 justify-between">
         {showGPTSearch && <select className="p-2 bg-gray-500 text-white m-4" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option value={lang.identifier} key={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          }
          <button
            className="py-2 px-4 my-2 m-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch? "Home Page" : "GPT Search"}
          </button>
          <img
            src={user.photoURL ? user.photoURL : { USER_DEFAULT_AVTAR }}
            alt="signout"
            className="w-16 h-16 pt-2 mt-3 rounded-3xl mr-1 hidden md:block"
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
