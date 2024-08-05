import { Constants } from "@/Constants/page";
import React from "react";

interface signinUIProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }

const SigninUI: React.FC<signinUIProps> = ({handleSubmit}) => {
  return (
    <div className="flex min-h-screen justify-center p-6">
      <div className="mx-auto h-full max-w-md rounded-lg border-2 pb-1 shadow-lg">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-semibold text-white">
            {Constants.PAGES.AUTH.SIGNIN}
          </h2>
          <p className="mt-1 text-white">{Constants.PAGES.AUTH.TAGLINE}</p>
        </div>
        <div className="px-6 py-4">
          <form onSubmit={handleSubmit}>
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
                {Constants.PAGES.AUTH.SIGNIN}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninUI;
