import React from "react";
import { IMG_BG } from "../Assets/constants";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-black text-white w-full h-screen ">
      <Header />
      <div className="flex justify-center items-center h-full ">
        <div className=" flex flex-col w-full h-[80%] gap-4 p-2">
          {/* the heading text */}
          <div className="p-2">
            <h1 className="text-3xl font-bold">Sign In</h1>
          </div>
          {/* the heading text */}

          {/* form for sing in  */}
          <form
            action=""
            className="flex flex-col justify-center items-center gap-4 p-2"
          >
            <input
              type="text"
              placeholder="Email or phone number"
              className="p-3 w-full rounded-sm bg-[#333333] placeholder:text-[#d8d8d850]"
            />
            <input
              type="text"
              placeholder="Password"
              className="p-3 w-full rounded-sm bg-[#333333] placeholder:text-[#d8d8d850]"
            />

            <button className="p-3 w-full rounded-sm bg-[#E50914] font-bold mt-4">
              Sign in
            </button>
            <div className="w-full flex justify-between items-center ">
              <div className="flex justify-center items-center">
                <input type="checkBox" className="h-[1rem] w-4 text-center " />
                <label htmlFor="" className="p-1 text-sm">Remember Me</label>
              </div>
              <div>
                <a href="http://www.google.com" className="text-sm">Need help</a>
              </div>
            </div>
            <div className="w-full">
            <p className="text-[#aaaaaa]">New to NetFlix <span className="text-lg text-white"><a href="www.google.com" className="underline">Sing up now?</a></span></p>
            <p className="text-[13px] mt-4 text-[#7a7a7a]">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-400"> <a href="/">Learn more.</a> </span></p>
            </div>
          </form>
        </div>
        {/* form for sing in  */}
      </div>
    </div>
  );
};

export default Login;
