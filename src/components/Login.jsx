import React, { useState, useRef } from "react";
import { IMG_BG } from "../Assets/constants";
import Header from "./Header";
import { checkValidate } from "../utils/validates";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVTAR } from "../utils/constant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, SetErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const dispatch = useDispatch();

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleOnSignButton = () => {
    // console.log(email.current.value)
    // console.log(password.current.value)

    let msg;
    if (isSignIn) {
      msg = checkValidate(email.current.value, password.current.value);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      msg = checkValidate(
        email.current.value,
        password.current.value,
        username.current.value
      );

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: {AVTAR},
          })
            .then(() => {
              const { uid, email, displayName,photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL })
              );
            })
            .catch((error) => {
              SetErrorMsg(errorMsg);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    }

    SetErrorMsg(msg);
  };

  return (
    <div className="bg-black text-white w-full h-screen  md:flex md:justify-center md:h-[200%] md:relative  md:backdrop-blur-md md:bg-white/30 ">
      <div className=" md:w-full md:h-full absolute bg-[#0000006b] z-10  "></div>
      <Header />
      <img
        src={IMG_BG}
        alt="bg-img"
        className="hidden md:block md:absolute md:w-full md:h-full md:object-cover"
      />

      <div
        className={`${
          isSignIn
            ? "md:border-t-2 md:border-r-2 md:border-[#8b8989ba] md:transition-all ease-linear duration-500 "
            : "md:border-b-2 md:border-l-2 md:border-[#8b8989ba] md:transition-all ease-linear duration-500"
        } flex justify-center items-center h-full md:w-[60%] md:min-h-full md:rounded-sm md:mt-24 md:mb-4 md:bg-[#000000d7]  z-20 lg:w-[30%] `}
      >
        <div className=" flex flex-col w-full h-[80%] gap-4 p-2 md:p-14">
          {/* the heading text */}
          <div className="p-2">
            <h1 className="text-3xl font-bold">
              {isSignIn ? "Sign In " : "Sign Up"}
            </h1>
          </div>
          {/* the heading text */}

          {/* form for sing in  */}
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="flex flex-col justify-center items-center gap-4 p-2 relative"
          >
            <p className="absolute -top-2  left-0 text-sm text-red-700">
              *{errorMsg}
            </p>

            {!isSignIn && (
              <input
                type="text"
                ref={username}
                placeholder="Full Name"
                className={`opacity-0 ${
                  isSignIn ? "opacity-0" : "opacity-100 transition-opacity"
                } p-3 w-full rounded-sm bg-[#333333] placeholder:text-[#d8d8d850]`}
              />
            )}

            <input
              type="text"
              ref={email}
              placeholder="Email or phone number"
              className="p-3 w-full rounded-sm bg-[#333333] placeholder:text-[#d8d8d850]"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="p-3 w-full rounded-sm bg-[#333333] placeholder:text-[#d8d8d850]"
            />

            <button
              onClick={() => handleOnSignButton()}
              className="p-3 w-full rounded-sm bg-[#E50914] font-bold mt-4"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <div className="w-full flex justify-between items-center ">
              <div className="flex justify-center items-center">
                <input type="checkBox" className="h-[1rem] w-4 text-center " />
                <label htmlFor="" className="p-1 text-sm">
                  Remember Me
                </label>
              </div>
              <div>
                <a href="http://www.google.com" className="text-sm">
                  Need help ?
                </a>
              </div>
            </div>
            <div className="w-full md:mt-12 md:mb-10">
              <p className="text-[#aaaaaa]">
                {isSignIn ? "New to netflix" : "Already have account "}
                <span
                  className="text-lg text-white underline"
                  onClick={() => handleToggleSignIn()}
                >
                  {isSignIn ? " Sing up now" : "Sign in"}
                </span>
              </p>
              <p className="text-[13px] mt-4 text-[#7a7a7a]">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <span className="text-blue-400">
                  <a href="/">Learn more.</a>
                </span>
              </p>
            </div>
          </form>
        </div>
        {/* form for sing in  */}
      </div>
    </div>
  );
};

export default Login;
