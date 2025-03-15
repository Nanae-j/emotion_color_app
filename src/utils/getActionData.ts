import { prisma } from "@/lib/prisma";
import { ActionType } from "@prisma/client";

/**
 * 指定されたポストIDに対するアクションタイプごとのカウントとアクションしているユーザーIDを取得する
 * @param postId ポストID
 * @returns アクションタイプごとのカウントとユーザーIDリストを含むオブジェクト
 *          {
 *            counts: { EMPATHY: 1, SUPPORT: 0, EXPERIENCE: 0 },
 *            users: {
 *              EMPATHY: ["user1", "user2"],
 *              SUPPORT: [],
 *              EXPERIENCE: ["user3"]
 *            }
 *          }
 * @throws Error データベースエラーが発生した場合
 */

export async function getActionData(postId: string) {
  try {
    // 入力値の検証
    if (!postId) {
      throw new Error("ポストIDが指定されていません");
    }

    // タイプごとのアクションカウントを別途取得
    const actionCountsByType = await prisma.action.groupBy({
      by: ["type"],
      where: {
        postId: postId,
      },
      _count: true,
    });
    // 出力 [ { _count: 1, type: 'EMPATHY' } ]

    // すべてのアクションタイプを含む配列を定義
    const allActionTypes: ActionType[] = ["EMPATHY", "SUPPORT", "EXPERIENCE"];

    // すべてのアクションタイプを含むカウント用オブジェクトを作成
    const counts: Record<ActionType, number> = {
      EMPATHY: 0,
      SUPPORT: 0,
      EXPERIENCE: 0,
    };

    // ユーザーIDを格納するオブジェクトを作成
    const users: Record<ActionType, string[]> = {
      EMPATHY: [],
      SUPPORT: [],
      EXPERIENCE: [],
    };

    // 初期値として0をセット
    allActionTypes.forEach((type) => {
      counts[type] = 0;
    });

    // 実際のカウントで上書き
    actionCountsByType.forEach((item) => {
      counts[item.type] = item._count;
    });

    // ユーザーIDをアクションタイプ別に取得
    const actions = await prisma.action.findMany({
      where: {
        postId: postId,
      },
      select: {
        userId: true,
        type: true,
      },
    });

    // 取得したアクションからユーザーIDをタイプ別に格納
    actions.forEach((action) => {
      users[action.type].push(action.userId);
    });

    return {
      counts,
      users,
    };
  } catch (error) {
    // エラーをログに記録
    console.error("アクションデータ取得中にエラーが発生しました:", error);

    // エラー内容によって処理を分岐
    if (error instanceof Error) {
      if (error.message.includes("ポストIDが指定されていません")) {
        throw error; // 入力値エラーはそのまま再スロー
      }
      // Prismaの特定のエラーを識別する場合はここに追加
    }

    // 汎用エラーをスロー
    throw new Error("アクションデータの取得に失敗しました");
  }
}
