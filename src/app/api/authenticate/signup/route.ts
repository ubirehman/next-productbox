import { signUp } from "../../_controllers/authentication";

export async function POST(request: Request) {
  const req = await request.json();
  const { message, success } = await signUp(req);

  return Response.json({ message, success });
}
