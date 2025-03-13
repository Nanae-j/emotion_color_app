/**
 * 日付表示を整形
 * @param date 2025-03-11T09:36:21.421Z
 * @returns 日本時間で整形された文字列 2025/03/12 00:03
 */

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
