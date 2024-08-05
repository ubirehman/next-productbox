"use server";

import { Constants } from "../../Constants/page";

interface Post {
  title: string;
  content: string;
}

export async function createPost(post: Post) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${Constants.API_LINKS.CREATE_POST}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong.");
    }
    return await response.json();
  } catch (error: any) {
    console.error("Error during authentication:", error);

    if (error.message === "Invalid credentials") {
      return "Invalid credentials.";
    }

    return "Something went wrong.";
  }
}
