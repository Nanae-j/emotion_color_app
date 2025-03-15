"use server";

import { prisma } from "@/lib/prisma";
import { getActionData } from "@/utils/getActionData";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function empathyAction(postID: string) {
  try {
    const { userId } = await auth();
    const { users } = await getActionData(postID);

    if (!userId) {
      throw new Error("認証しているユーザーを確認できません");
    }

    // 現在ログインしているユーザーがアクションしているかのフラグ
    const existingEmpathy = users.EMPATHY.includes(userId);

    if (existingEmpathy) {
      await prisma.action.delete({
        where: {
          userId_postId_type: {
            userId: userId,
            postId: postID,
            type: "EMPATHY",
          },
        },
      });
    } else {
      await prisma.action.create({
        data: {
          type: "EMPATHY",
          userId: userId,
          postId: postID,
        },
      });
    }

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
