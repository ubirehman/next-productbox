"use client";

import { Constants } from "@/Constants/page";
import React from "react";
import SigninUI from "./pageUI";
import { useRouter } from "next/navigation";
import { authenticate } from "../lib/authAction";
import { failureNotify, successNotify } from "@/utils/notifications";

const Signin = ({}) => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credential = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const auth = await authenticate(credential);
    if (!auth.success) {
      failureNotify(Constants.POPUP_MESSAGES.USER_LOGEDIN_FAIL_MESSAGE);
      return;
    }
    successNotify(Constants.POPUP_MESSAGES.USER_LOGEDIN_SUCCESS_MESSAGE);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };
  return <SigninUI handleSubmit={handleSubmit} />;
};

export default Signin;
