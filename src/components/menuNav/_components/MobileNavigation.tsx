"use client";

import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import React from "react";
import { Constants } from "@/Constants/page";

interface MobileNavProps {
  handleExpandPagesWindow: React.MouseEventHandler<HTMLButtonElement>;
}

const MobileNavigation: React.FC<MobileNavProps> = ({
  handleExpandPagesWindow,
}) => {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => console.log("expand mobile nav")}
        className="hover:cursor-pointer"
      >
        <GiHamburgerMenu className="mr-4 h-8 w-8 rounded-lg border-white/60 p-1 text-white transition-all hover:scale-105 hover:border-2 hover:text-gray-200 md:hidden" />
      </button>
      <nav className="fixed inset-0 flex h-screen w-full justify-end gap-8 text-lg text-white md:hidden">
        <aside className="flex h-full w-80 flex-col gap-3 bg-gray-200 p-4">
          <section className="flex w-full items-end justify-end ">
            <GiHamburgerMenu className="h-8 w-8 justify-end  rounded-lg border-gray-800/60 p-1 text-end text-gray-500 transition-all hover:scale-105 hover:border-2 hover:text-gray-700 md:hidden" />
          </section>
          {Constants.MENU_NAVBAR_LINKS.map((item) => {
            return (
              <ul key={item.id} className="text-black hover:text-gray-400">
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
                    <li className="flex w-full gap-1">{item.title}</li>
                  </Link>
                )}
              </ul>
            );
          })}
        </aside>
      </nav>
    </div>
  );
};

export default MobileNavigation;
