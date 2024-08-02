"use client";

import React from "react";
import ClickableButton from "../Button/ClickableButton";
import { Constants } from "@/app/Constants/page";

const AuthUI = ({}) => {
  return (
    <div className="hidden gap-2 md:flex">
      <ClickableButton
        styling="rounded-3xl text-white hover:text-gray-200 hover:bg-gray-200/10 h-12 w-28"
        title={Constants.BUTTONS.SIGN_IN}
        onClick={() => {}}
      />
      <ClickableButton title={Constants.BUTTONS.SIGN_UP} onClick={() => {}} />
    </div>
  );
};

export default AuthUI;
