"use client";

import { updateCommentAction } from "@/actions/updateCommentAction";
import { colorsData } from "@/data/colorsData";
import { EmotionColor, Comment, UpdateCommentPost } from "@/types/types";
import { generateBgClass, generateTextClass } from "@/utils/generateColorClass";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { FiSend } from "react-icons/fi";

interface PostEditForm {
  comment: Comment;
  onCancel: () => void;
  onSave: (_updatedPost: UpdateCommentPost) => Promise<void>;
}

const CommentEditForm = ({ comment, onCancel, onSave }: PostEditForm) => {
  const initialState = {
    error: undefined,
    success: false,
    formData: {
      postContent: "",
      selectedEmotions: [] as string[],
    },
  };

  // 初期値として現在の投稿内容と感情を設定
  const [selectedColors, setSelectedColors] = useState<EmotionColor[]>(() => {
    return colorsData.map((color) => ({
      ...color,
      // post.colorsは{color: string}[]の配列なので、各colorオブジェクトからcolorプロパティを抽出して比較
      checked:
        comment.colors?.some((item) => item.color === color.value) || false,
    }));
  });

  const [state, formAction] = useActionState(updateCommentAction, initialState);
  // 投稿の現在のcontentをセット
  const [postContent, setPostContent] = useState(comment.content || "");

  // エラーが発生して状態が戻ってきた場合にフォームの状態を復元
  useEffect(() => {
    if (state.success) {
      // 成功時に更新された投稿を親コンポーネントに通知
      const updatedPost = {
        ...comment,
        content: postContent,
        colors: selectedColors
          .filter((color) => color.checked)
          .map((color) => ({ color: color.value })),
      };

      onSave(updatedPost).then(() => {
        // 成功時にフォームをリセット
        setPostContent("");

        // すべての色の選択を解除
        const resetColors = selectedColors.map((color) => ({
          ...color,
          checked: false,
        }));
        setSelectedColors(resetColors);
      });
    } else if (state.error && state.formData) {
      // テキストエリアの内容を復元
      setPostContent(state.formData.postContent);

      // 色の選択状態を復元
      const restoredColors = selectedColors.map((color) => ({
        ...color,
        checked:
          state.formData?.selectedEmotions?.includes(color.emotion) || false,
      }));
      setSelectedColors(restoredColors);
    }
  }, [state.error, state.formData, state.success]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: { target: { value: string } }) => {
    const newColors = selectedColors.map((color) => {
      const newColor = { ...color };

      if (newColor.value === e.target.value) {
        newColor.checked = !newColor.checked;
      }

      return newColor;
    });

    setSelectedColors(newColors);
  };

  // フォーム送信時に現在の状態をサーバーアクションに渡す
  const handleSubmit = async (formData: FormData) => {
    // 現在選択されている感情を記録
    const selectedEmotions = selectedColors
      .filter((color) => color.checked)
      .map((color) => color.value);

    // フォームデータに現在の状態を追加
    formData.append(
      "_formState",
      JSON.stringify({
        postContent: postContent,
        selectedEmotions: selectedEmotions,
      })
    );

    // 投稿IDを追加して更新であることを示す
    formData.append("commentID", comment.id || "");

    await formAction(formData);

    // 注意: ここでフォームをリセットしないでください
    // 成功時のリセットはuseEffectで処理します
  };

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        className="bg-default hover:outline-default hover:text-default rounded-md px-6 py-2 text-xl text-white transition-colors hover:bg-white hover:outline-2 disabled:bg-gray-300"
        disabled={pending}
      >
        <FiSend />
      </button>
    );
  };

  return (
    <div>
      <div className="cursor-pointer py-3 text-red-500" onClick={onCancel}>
        編集をキャンセルする
      </div>
      <form action={handleSubmit}>
        <div className="mb-3 text-right">
          <SubmitButton />
        </div>
        <textarea
          name="postContent"
          id="postContent"
          placeholder="Share your thoughts and feelings..."
          className="border-whitesmoke outline-default h-32 w-full resize-none rounded-2xl border-1 bg-white p-3"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <p className="flex items-center gap-1">
          私の気分は：
          {selectedColors.map((color) => {
            const textColor = generateTextClass(color.value);
            return color.checked ? (
              <span
                key={`comment_edit_${color.label}`}
                className={`${textColor}`}
              >
                {color.label}
              </span>
            ) : (
              ""
            );
          })}
        </p>
        <div className="my-5 flex flex-wrap items-center gap-5">
          {selectedColors.map((color, index) => {
            const bgColor = generateBgClass(color.value);
            return (
              <div key={`comment_edit_${color.value}`}>
                <input
                  type="checkbox"
                  id={`color-comment-edit-${index}`}
                  value={color.value}
                  className="sr-only hidden" // デフォルトのチェックボックスを非表示
                  checked={color.checked}
                  onChange={handleChange}
                  name={color.value}
                />
                <div className="inline-block">
                  <label
                    htmlFor={`color-comment-edit-${index}`}
                    className="flex cursor-pointer flex-col items-center"
                  >
                    <div
                      className={`${bgColor} ${color.checked ? "h-10 w-10" : "h-8 w-8"} rounded-full transition-all`}
                    ></div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </form>
      {state.error && <p className="mt-1 text-red-800">{state.error}</p>}
    </div>
  );
};

export default CommentEditForm;
