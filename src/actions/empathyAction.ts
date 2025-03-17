"use server";

import { prisma } from "@/lib/prisma";
import { getActionData } from "@/utils/getActionData";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function empathyAction(postID: string) {
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
    const existingEmpathy = users.EMPATHY.includes(userId);

    if (existingEmpathy) {
      try {
        await prisma.action.delete({
          where: {
            userId_postId_type: {
              userId: userId,
              postId: postID,
              type: "EMPATHY",
            },
          },
        });
      } catch (deleteError) {
        console.error("共感アクション削除中にエラー:", deleteError);
        throw new Error("取り消せませんでした");
      }
    } else {
      try {
        await prisma.action.create({
          data: {
            type: "EMPATHY",
            userId: userId,
            postId: postID,
          },
        });
      } catch (createError) {
        console.error("共感アクション作成中にエラー:", createError);
        throw new Error("共感を追加できませんでした");
      }
    }

    revalidatePath("/");
  } catch (error) {
    // エラーログ
    console.error("empathyAction処理中のエラー:", error);
  }
}
