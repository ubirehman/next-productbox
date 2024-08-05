import { Constants } from "@/Constants/page";
import React from "react";

interface createBlogPostUIProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CreateBlogPostUI: React.FC<createBlogPostUIProps> = ({
  handleSubmit,
}) => {
  return (
    <div className="flex h-full w-screen flex-col gap-3 px-3">
      <h1 className="text-2xl font-semibold">
        {Constants.PAGES.BLOG.CREATE.HEADING}
      </h1>
      <form
        className="flex h-full w-full rounded-lg border-2 px-3 py-2"
        onSubmit={handleSubmit}
      >
        <div className="flex h-full w-full flex-col gap-3 text-black">
          <input type="text" placeholder="title" className="h-10 px-2" />
          <textarea
            placeholder="content"
            className="h-36 items-start px-2 text-start"
          />

          <button
            type="submit"
            value="Submit"
            className="h-20 w-60 bg-blue-600 text-white text-lg justify-end rounded-lg"
          >{Constants.PAGES.BLOG.CREATE.SUBMIT}</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPostUI;
