"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Constants } from "@/Constants/page";
import Button from "../button/ClickableButton";
import Image from "next/image";

const HeroUI = ({}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-[500px] w-full object-cover">
        <Image
          src={
            "https://pixldata.com/wp-content/uploads/2024/04/data-labelling-background-1.jpg"
          }
          alt="background"
          className="pointer-events-none absolute -z-10 mt-36"
          fill
        />
        <div className="flex w-full flex-col items-center">
          <section className="mt-20 flex max-h-80 w-10/12 flex-col items-center gap-3 text-center leading-[50px] lg:w-6/12 lg:leading-[70px] xl:leading-[100px]">
            <h1 className="flex h-full bg-gradient-to-r from-white to-gray-400 bg-clip-text text-[40px] text-transparent lg:text-[60px] xl:text-[80px]">
              {Constants.PAGES.HOME.TITLE}
            </h1>
            <h3 className="flex h-full px-2 pt-6 text-xl font-light text-gray-400 lg:px-28">
              {Constants.PAGES.HOME.TAGLINE}
            </h3>
          </section>
          <section className="mt-20 flex flex-col gap-3 md:flex-row">
            <Button
              title={
                <div className="flex items-center justify-center gap-2">
                  {Constants.PAGES.HOME.CTA.GET_STARTED}
                  <IoIosArrowForward />
                </div>
              }
              styling="text-white bg-blue-600 rounded-[40px] text-xl h-16 w-64 hover:text-gray-200 hover:bg-blue-700 hover:border-2 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-700/90"
              onClick={() => console.log("Button clicked")}
            />
            <Button
              title={Constants.PAGES.HOME.CTA.LEARN_MORE}
              styling="text-white bg-gray-800/40 border-2 text-xl border-gray-600 rounded-[40px] h-16 w-64 hover:text-gray-200 hover:bg-gray-800/70 hover:border-gray-300 hover:shadow-lg hover:shadow-white/40"
              onClick={() => console.log("Button clicked")}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroUI;
