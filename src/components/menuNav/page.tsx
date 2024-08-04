"use client"

import React from "react";
import MenuNavBarUI from "./pageUI";

const MenuNavBar = ({}) => {
  const handleExpandPagesWindow = ({}) => {
    console.log("Pages tab clicked");
  };

  return <MenuNavBarUI handleExpandPagesWindow={handleExpandPagesWindow}/>;
};

export default MenuNavBar;
