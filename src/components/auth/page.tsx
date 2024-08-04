"use client";

import React from "react";
import AuthUI from "./pageUI";
import { useRouter } from "next/navigation";

const Auth = ({}) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };
  
  return <AuthUI navigateTo={navigateTo} />;
};

export default Auth;
