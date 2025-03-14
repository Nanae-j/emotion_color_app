/**
 * Emotionのカラーからborderクラスを動的に作成する
 * @param emotionColor - emotionのvalue red,purpleなど
 * @returns
 */

export function generateBorderClass(emotionColor: string) {
  const borderClasses: Record<string, string> = {
    green: "border-green",
    yellow: "border-yellow",
    orange: "border-orange",
    pink: "border-pink",
    red: "border-red",
    blue: "border-blue",
    purple: "border-purple",
  };

  return borderClasses[emotionColor] || ""; // 色が見つからない場合は空文字を返す
}

/**
 * Emotionのカラーからborderクラスを動的に作成する
 * @param emotionColor - emotionのvalue red,purpleなど
 * @returns
 */

export function generateTextClass(emotionColor: string) {
  const textClasses: Record<string, string> = {
    green: "text-green",
    yellow: "text-yellow",
    orange: "text-orange",
    pink: "text-pink",
    red: "text-red",
    blue: "text-blue",
    purple: "text-purple",
  };

  return textClasses[emotionColor] || ""; // 色が見つからない場合は空文字を返す
}

/**
 * Emotionのカラーからborderクラスを動的に作成する
 * @param emotionColor - emotionのvalue red,purpleなど
 * @returns
 */

export function generateBgClass(emotionColor: string) {
  const bgClasses: Record<string, string> = {
    green: "bg-green",
    yellow: "bg-yellow",
    orange: "bg-orange",
    pink: "bg-pink",
    red: "bg-red",
    blue: "bg-blue",
    purple: "bg-purple",
  };

  return bgClasses[emotionColor] || ""; // 色が見つからない場合は空文字を返す
}
