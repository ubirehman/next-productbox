import React from "react";
import BlogUI from "./pageUI";
import { getAllPosts } from "../api/_controllers/posts";

const Blog = async ({}) => {
  const { posts } = await getAllPosts();

  return (
    <div className="flex px-3">
      <BlogUI blogPosts={posts} />
    </div>
  );
};

export default Blog;
