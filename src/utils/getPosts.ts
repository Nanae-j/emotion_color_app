/**
 * 投稿データを取得
 * @param
 * @returns 各投稿情報をオブジェクト形式で配列として返却
 */

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getPosts() {
  try {
    let posts = [];

    const { userId } = await auth();

    if (!userId) {
      return;
    }

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: [userId],
        },
      },
      include: {
        user: true,
        actions: {
          select: {
            type: true,
            userId: true,
          },
        },
        colors: {
          select: {
            color: true,
          },
        },
        _count: {
          select: {
            comments: true,
            actions: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts;
  } catch (error) {
    // エラーをログに記録
    console.error("投稿データ取得中にエラーが発生しました:", error);

    // 汎用エラーをスロー
    throw new Error("投稿データの取得に失敗しました");
  }
}
