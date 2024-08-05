// app/posts/[id]/page.tsx
import { getPostById } from "@/app/api/_controllers/posts";
import { notFound } from "next/navigation";
import SinglePostUI from "./pageUI";

interface singlePostProps {
  params: {
    id: string;
  };
}

const SinglePost = async ({ params }: singlePostProps) => {
  const { id } = params;
  const { post } = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <SinglePostUI post={post} />;
};

export default SinglePost;
