import { createPost } from "../api/_controllers/posts";

export async function createServerPost(formData: FormData) {
  "use server";

  const title = formData.get("title");
  const content = formData.get("content");

  const post = await createPost({
    title,
    content,
  });

  console.log(post);
}
