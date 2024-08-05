import React from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
}

interface singlePostUIProps {
  post: BlogPost;
}

const SinglePostUI: React.FC<singlePostUIProps> = ({ post }) => {
  return (
    <div className="flex h-full w-8/12 flex-col gap-3 px-3">
      <h1 className="text-pretty text-justify text-3xl font-semibold">
        {post.title}
      </h1>
      <p className="w-10/12 text-pretty text-justify leading-loose">
        {post.content}
      </p>
    </div>
  );
};

export default SinglePostUI;
