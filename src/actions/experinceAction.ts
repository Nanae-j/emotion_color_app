"use server";

import { prisma } from "@/lib/prisma";
import { getActionData } from "@/utils/getActionData";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function experienceAction(postID: string) {
  try {
    // 入力値の検証
    if (!postID) {
      throw new Error("投稿IDが指定されていません");
    }

    // 認証チェック
    const { userId } = await auth();
    if (!userId) {
      throw new Error("認証されていません。ログインしてください。");
    }

    // 投稿の存在確認（オプション）
    const post = await prisma.post.findUnique({
      where: { id: postID },
      select: { id: true },
    });

    if (!post) {
      throw new Error("指定された投稿が見つかりません");
    }

    // 現在ログインしているユーザーがアクションしているかのフラグ
    const { users } = await getActionData(postID);
    const existingExperience = users.EXPERIENCE.includes(userId);

    if (existingExperience) {
      try {
        await prisma.action.delete({
          where: {
            userId_postId_type: {
              userId: userId,
              postId: postID,
              type: "EXPERIENCE",
            },
          },
        });
      } catch (deleteError) {
        console.error("経験ありアクション削除中にエラー:", deleteError);
        throw new Error("取り消せませんでした");
      }
    } else {
      try {
        await prisma.action.create({
          data: {
            type: "EXPERIENCE",
            userId: userId,
            postId: postID,
          },
        });
      } catch (createError) {
        console.error("経験ありアクション作成中にエラー:", createError);
        throw new Error("経験ありを追加できませんでした");
      }
    }

    revalidatePath("/");
  } catch (error) {
    // エラーログ
    console.error("experienceAction処理中のエラー:", error);
  }
}
