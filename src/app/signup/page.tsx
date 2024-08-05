"use client";

import React from "react";
import { Constants } from "@/Constants/page";
import { register } from "../lib/authAction";
import { failureNotify, successNotify } from "@/utils/notifications";
import SignupUI from "./pageUI";
import { useRouter } from "next/navigation";

const Signup = ({}) => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credential = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    const auth = await register(credential);
    if (!auth.success) {
      failureNotify(Constants.POPUP_MESSAGES.USER_LOGEDIN_FAIL_MESSAGE);
      return;
    }
    successNotify(Constants.POPUP_MESSAGES.USER_LOGEDIN_SUCCESS_MESSAGE);
    setTimeout(() => {
      router.push("/signin");
    }, 1500);
  };
  return <SignupUI handleSubmit={handleSubmit} />;
};

export default Signup;
