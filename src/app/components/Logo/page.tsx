import React from "react";
import Link from "next/link";
import { SiRapid } from "react-icons/si";
import { Constants } from "@/app/Constants/page";


const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex text-3xl font-gothic-a1 gap-1 font-semibold items-center"
    >
      <section className="flex">
        <h1 className="text-gray-400">{Constants.LOGO.firstName}</h1>
        <h1 className="text-gray-200">{Constants.LOGO.lastName}</h1>
      </section>
      <SiRapid className="text-white" />
    </Link>
  );
};

export default Logo;
