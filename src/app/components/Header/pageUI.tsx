import React from "react";
import Logo from "../Logo/page";
import MenuNav from "../MenuNav/page";
import Auth from "../Auth/page";


const HeaderUI = ({}) => {
  return (
    <div className="flex w-full h-24 justify-between md:px-5 py-3 items-center">
      <Logo />
      <MenuNav />
      <Auth />
    </div>
  );
};

export default HeaderUI;
