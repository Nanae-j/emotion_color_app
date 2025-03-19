"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePostAction(postID: string) {
  try {
    // 入力値の検証
    if (!postID) {
      throw new Error("投稿IDが指定されていません");
    }

    // 投稿の存在確認（オプション）
    const post = await prisma.post.findUnique({
      where: { id: postID },
      select: { id: true },
    });

    if (!post) {
      throw new Error("指定された投稿が見つかりません");
    }

    try {
      await prisma.post.delete({
        where: {
          id: postID,
        },
      });

      revalidatePath("/");
    } catch (deleteError) {
      console.error("投稿削除中にエラー:", deleteError);
      throw new Error("削除できませんでした");
    }
  } catch (error) {}
}
