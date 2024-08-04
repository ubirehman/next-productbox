"use client";

import React from "react";
import { Constants } from "@/Constants/page";

interface signupUIProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const SignupUI: React.FC<signupUIProps> = ({ handleSubmit }) => {
  return (
    <div className="text-white">
      <div className="flex min-h-screen justify-center p-6">
        <div className="mx-auto h-full max-w-md rounded-lg border-2 pb-1 shadow-lg">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-semibold text-white">
              {Constants.PAGES.AUTH.SIGNUP}
            </h2>
            <p className="mt-1 text-white">
              {Constants.PAGES.AUTH.SIGNUP_TAGLINE}
            </p>
          </div>
          <div className="px-6 py-4">
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-white" htmlFor="name">
                  {Constants.PAGES.AUTH.NAME}
                </label>
                <input
                  type="name"
                  id="name"
                  className="mt-2 w-full rounded px-3 py-2 text-gray-700 outline-none focus:bg-gray-300"
                  placeholder="Ubi Roberto"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-white" htmlFor="email">
                  {Constants.PAGES.AUTH.EMAIL}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full rounded px-3 py-2 text-gray-700 outline-none focus:bg-gray-300"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-white" htmlFor="password">
                  {Constants.PAGES.AUTH.PASSWORD}
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-2 w-full rounded px-3 py-2 text-gray-700 outline-none focus:bg-gray-300"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
                >
                  {Constants.PAGES.AUTH.SIGNUP}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupUI;
