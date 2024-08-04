import { getJsonWebToken } from "@/utils/jsonWebToken";
import { PrismaClient } from "@prisma/client";

interface Credentials {
  name: string;
  email: string;
  password: string;
}

export const signIn = async (data: Credentials) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return { success: false, message: "User doesn't exist" };
    }

    const { password, ...rest } = user;
    const token = getJsonWebToken(rest.email);
    rest.token = token;

    return {
      success: true,
      message: "User signed in successfully",
      user: rest,
    };
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw new Error("Failed to sign in");
  } finally {
    await prisma.$disconnect();
  }
};

export const signUp = async (data: Credentials) => {
  const prisma = new PrismaClient();
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!existingUser) {
      await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });

      return {
        success: true,
        message: "User registered successfully",
      };
    } else {
      return {
        success: false,
        message: "User already exists",
      };
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw new Error("Failed to sign up");
  } finally {
    await prisma.$disconnect();
  }
};