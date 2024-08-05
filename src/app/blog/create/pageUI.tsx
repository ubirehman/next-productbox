"use client";

import { Constants } from "@/Constants/page";
import React from "react";

type CreatePostFunction = (formData: FormData) => Promise<void>;
interface createBlogPostUIProps {
  createPost: CreatePostFunction;
}
const CreateBlogPostUI: React.FC<createBlogPostUIProps> = ({ createPost }) => {
  return (
    <div className="flex h-full w-screen flex-col gap-3 px-3">
      <h1 className="text-2xl font-semibold">
        {Constants.PAGES.BLOG.CREATE.HEADING}
      </h1>
      <form
        className="flex h-full w-full rounded-lg border-2 px-3 py-2"
        action={createPost}
      >
        <div className="flex h-full w-full flex-col gap-3 text-black">
          <input
            name="title"
            type="text"
            placeholder="title"
            className="h-10 px-2"
          />
          <textarea
            name="content"
            placeholder="content"
            className="h-36 items-start px-2 text-start"
          />

          <button
            type="submit"
            value="Submit"
            className="h-20 w-60 justify-end rounded-lg bg-blue-600 text-lg text-white"
          >
            {Constants.PAGES.BLOG.CREATE.SUBMIT}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPostUI;
