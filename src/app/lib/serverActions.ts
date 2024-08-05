import { createPost } from "../api/_controllers/posts";

export async function createServerPost(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const post = await createPost({
    title,
    content,
  });
}
