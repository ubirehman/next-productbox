import React from "react";
import CreateBlogPostUI from "./pageUI";
import { createPost } from "@/app/lib/postAction";
import { createServerPost } from "@/app/lib/serverActions";

const CreateBlogPost = ({}) => {
  
  return <CreateBlogPostUI createPost={createServerPost} />;
};

export default CreateBlogPost;
