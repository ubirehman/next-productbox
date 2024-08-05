"use client";

import React from "react";
import ClickableButton from "../button/ClickableButton";
import { Constants } from "@/Constants/page";

interface authUIProps {
  navigateTo: (path: string) => void;
}

const AuthUI: React.FC<authUIProps> = ({ navigateTo }) => {
  return (
    <div className="hidden gap-2 md:flex">
      <ClickableButton
        styling="rounded-3xl text-white hover:text-gray-200 hover:bg-gray-200/10 h-12 w-28"
        title={Constants.BUTTONS.SIGN_IN}
        onClick={() => navigateTo("/signin")}
      />
      <ClickableButton
        title={Constants.BUTTONS.SIGN_UP}
        onClick={() => navigateTo("/signup")}
      />
    </div>
  );
};

export default AuthUI;
