"use client";

import React from "react";
import MobileNavigation from "@/app/components/MenuNav/_components/MobileNavigation";
import DesktopNavigation from "./_components/DesktopNavigation";

interface MenuNavbarUIProps {
  handleExpandPagesWindow: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuNavBarUI: React.FC<MenuNavbarUIProps> = ({
  handleExpandPagesWindow,
}) => {
  return (
    <>
        <DesktopNavigation handleExpandPagesWindow={handleExpandPagesWindow} />
        {/* <MobileNavigation handleExpandPagesWindow={handleExpandPagesWindow} /> */}
    </>
  );
};

export default MenuNavBarUI;
