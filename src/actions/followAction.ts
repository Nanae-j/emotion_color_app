"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function followAction(
  isFollowing: boolean,
  currentUserId: string
) {
  try {
    // console.log(isFollowing);

    const { userId } = await auth();

    if (!userId) {
      throw new Error("認証されていません。ログインしてください。");
    }

    if (isFollowing) {
      // console.log("フォローを解除する処理");

      try {
        await prisma.follow.delete({
          where: {
            followerId_followingId: {
              followerId: userId,
              followingId: currentUserId,
            },
          },
        });
      } catch (deleteError) {
        console.error("フォローアクション削除中にエラー:", deleteError);
        throw new Error("フォローを解除できませんでした");
      }
    } else {
      // console.log("フォローをする処理");
      try {
        await prisma.follow.create({
          data: {
            followerId: userId,
            followingId: currentUserId,
          },
        });
      } catch (createError) {
        console.error("フォローアクション作成中にエラー:", createError);
        throw new Error("フォローできませんでした");
      }
    }

    revalidatePath("/profile");
  } catch (error) {
    // エラーログ
    console.error("followAction処理中のエラー:", error);
  }
}
