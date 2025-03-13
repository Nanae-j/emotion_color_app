/**
 * textareaから送信されたデータの改行を整形
 * @param content 投稿データの本文
 * @returns 改行部分をbrとして表示する
 */

export function formatContent(content: string): string {
  return content.replace(/\r?\n/g, "<br>");
}
