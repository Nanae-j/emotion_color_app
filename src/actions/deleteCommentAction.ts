"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteCommentAction(commentID: string) {
  try {
    // 入力値の検証
    if (!commentID) {
      throw new Error("コメントIDが指定されていません");
    }

    // 投稿の存在確認（オプション）
    const comment = await prisma.comment.findUnique({
      where: { id: commentID },
      select: { id: true },
    });

    if (!comment) {
      throw new Error("指定されたコメントが見つかりません");
    }

    try {
      await prisma.comment.delete({
        where: {
          id: commentID,
        },
      });

      revalidatePath("/");
    } catch (deleteError) {
      console.error("コメント削除中にエラー:", deleteError);
      throw new Error("コメントをできませんでした");
    }
  } catch (error) {
    console.log(error);
  }
}
