import React from "react";
import BlogUI from "../blog/pageUI";
import { getAllPosts } from "../api/_controllers/posts";

const Dashboard = async ({}) => {
  const { posts } = await getAllPosts();

  return (
    <div className="flex px-3">
      <BlogUI blogPosts={posts} />
    </div>
  );
};

export default Dashboard;
