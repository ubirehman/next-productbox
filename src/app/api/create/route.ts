import { createPost } from "../_controllers/posts";

export async function POST(request: Request) {
  const req = await request.json();
  const { message, success } = await createPost(req);

  return Response.json({ success, message });
}
