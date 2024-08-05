"use client";

import React from "react";
import CreateBlogPostUI from "./pageUI";
import { createPost } from "@/app/lib/postAction";
import { useRouter } from "next/navigation";
import { Constants } from "@/Constants/page";
import { successNotify } from "@/utils/notifications";

const CreateBlogPost = ({}) => {
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target[0].value;
    const content = e.target[1].value;

    const postData = { title, content };
    const post = await createPost(postData);
    if (post.success) {
      router.push("/dashboard");
      successNotify(Constants.POPUP_MESSAGES.BLOG_POST_CREATED_SUCCESS);
    }
  };
  return <CreateBlogPostUI handleSubmit={handleSubmit} />;
};

export default CreateBlogPost;
