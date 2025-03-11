"use server";

import { colors } from "@/data/colorsData";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const addPostAction = async (formData: FormData) => {
  const { userId } = await auth();

  const postText = formData.get("postContent") as string;

  if (!userId) {
    return;
  }

  const createColors = colors
    .map((color) => {
      const newColor = formData.get(color.emotion);

      if (newColor) {
        return { color: newColor as string };
      }

      return null;
    })
    .filter((color) => color !== null);

  try {
    await prisma.post.create({
      data: {
        content: postText,
        userId: userId,
        colors: {
          create: createColors,
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};
