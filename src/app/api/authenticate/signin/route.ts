import { signIn } from "../../_controllers/authentication";

export async function POST(request: Request) {
  const req = await request.json();
  const { message, success, user } = await signIn(req);

  return Response.json({ success, message, user });
}
