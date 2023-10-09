import React from "react";
import { IMG_LOGO } from "../Assets/constants";

const Header = () => {
  return (
    <div className="absolute z-50 flex justify-between ">
      <img
        src={IMG_LOGO}
        alt=""
        className="w-1/3 p-4 md:w-1/4 lg:w-[15%] lg:p-6"
      />
    </div>
  );
};

export default Header;
