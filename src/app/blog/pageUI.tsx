import { trimText } from "@/utils/excessStringTrimmer";
import Link from "next/link";
import React from "react";

interface blogPost {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
}

interface blogUIProps {
  blogPosts: blogPost[];
}

const BlogUI: React.FC<blogUIProps> = ({ blogPosts }) => {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-4">
      {blogPosts.map((item) => (
        <Link href={`/blog/${item.id}`}
          key={item.id}
          className="flex flex-col gap-2 rounded-lg border px-5 py-3"
        >
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="text-md">{trimText(item.content)}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogUI;
