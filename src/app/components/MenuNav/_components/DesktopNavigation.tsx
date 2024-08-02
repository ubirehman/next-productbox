"use client";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import React from "react";
import { Constants } from "@/app/Constants/page";

interface MobileNavProps {
  handleExpandPagesWindow: React.MouseEventHandler<HTMLButtonElement>;
}

const DesktopNavigation: React.FC<MobileNavProps> = ({
  handleExpandPagesWindow,
}) => {
  return (
    <nav className="hidden justify-center gap-8 text-lg text-white md:flex">
      {Constants.MENU_NAVBAR_LINKS.map((item) => {
        return (
          <ul key={item.id} className="hover:text-gray-400">
            <li>
              {item.title === "Pages" ? (
                <button
                  className="flex items-center gap-1"
                  type="button"
                  onClick={handleExpandPagesWindow}
                >
                  {item.title}
                  <IoIosArrowDown />
                </button>
              ) : (
                <Link key={item.id} href={item.link}>
                  <ul className="flex w-full gap-1">{item.title}</ul>
                </Link>
              )}
            </li>
          </ul>
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;
