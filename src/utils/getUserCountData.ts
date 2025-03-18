/**
 * ユーザーのid情報から投稿数・フォローしている数・フォローされている数を取得
 * @param
 * @returns 投稿数・フォローしている数・フォローされている数をオブジェクト形式で返却 { postCountData: 5, followingCountData: 1, FollowedByCountData: 0 }
 */

import { prisma } from "@/lib/prisma";

export async function getUserCountData(userId: string) {
  const postCountData = await prisma.post.aggregate({
    where: {
      userId: userId,
    },
    _count: true,
  });

  const followingCountData = await prisma.follow.aggregate({
    where: {
      followerId: userId,
    },
    _count: true,
  });

  const FollowedByCountData = await prisma.follow.aggregate({
    where: {
      // フォローされているユーザーの項目に自分のIdがある = フォローされている
      followingId: userId,
    },
    _count: true,
  });

  return {
    postCountData: postCountData._count,
    followingCountData: followingCountData._count,
    FollowedByCountData: FollowedByCountData._count,
  };
}
