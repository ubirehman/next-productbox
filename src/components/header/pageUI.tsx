import React from "react";
import Logo from "../logo/page";
import MenuNav from "../menuNav/page";
import Auth from "../auth/page";


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
