import { prisma } from "@/lib/prisma";
import { ActionType } from "@prisma/client";

/**
 * 指定されたポストIDに対するアクションタイプごとのカウントを取得する
 * @param postId ポストID
 * @returns アクションタイプごとのカウントを含むオブジェクト
 *          actionCounts - { EMPATHY: 1, SUPPORT: 0, EXPERIENCE: 0 }
 * @throws Error データベースエラーが発生した場合
 */

export async function getActionCounts(postId: string) {
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

    // すべてのアクションタイプを含む結果オブジェクトを作成
    const actionCounts: Record<ActionType, number> = {
      EMPATHY: 0,
      SUPPORT: 0,
      EXPERIENCE: 0,
    };

    // 初期値として0をセット
    allActionTypes.forEach((type) => {
      actionCounts[type] = 0;
    });

    // 実際のカウントで上書き
    actionCountsByType.forEach((item) => {
      actionCounts[item.type] = item._count;
    });

    return actionCounts;
  } catch (error) {
    // エラーをログに記録
    console.error("アクションカウント取得中にエラーが発生しました:", error);

    // エラー内容によって処理を分岐
    if (error instanceof Error) {
      if (error.message.includes("ポストIDが指定されていません")) {
        throw error; // 入力値エラーはそのまま再スロー
      }
      // Prismaの特定のエラーを識別する場合はここに追加
    }

    // 汎用エラーをスロー
    throw new Error("アクションカウントの取得に失敗しました");
  }
}
