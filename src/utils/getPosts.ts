/**
 * 投稿データを取得
 * @param
 * @returns 各投稿情報をオブジェクト形式で配列として返却
 */

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getPosts(username?: string) {
  try {
    let posts = [];
    let followingUsers = [];

    const { userId } = await auth();

    if (!userId) {
      return [];
    }

    // プロフィールページ(ログインしているユーザーの投稿のみを取得)
    if (username) {
      const userID = await prisma.user.findFirst({
        where: {
          username: username,
        },
        select: {
          id: true,
        },
      });

      if (!userID) {
        throw new Error("ユーザーIDが取得できません");
      }

      posts = await prisma.post.findMany({
        where: {
          userId: userID.id,
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
    } else {
      // トップページ(フォロしているユーザーの投稿も取得)
      followingUsers = await prisma.follow.findMany({
        where: {
          followerId: userId,
        },
        select: {
          followingId: true,
        },
      });

      const followingIdArray = followingUsers.map((item) => item.followingId);

      const ids = [userId, ...followingIdArray];

      posts = await prisma.post.findMany({
        where: {
          userId: {
            in: ids,
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
    }

    return posts;
  } catch (error) {
    // エラーをログに記録
    console.error("投稿データ取得中にエラーが発生しました:", error);

    // 汎用エラーをスロー
    throw new Error("投稿データの取得に失敗しました");
  }
}
