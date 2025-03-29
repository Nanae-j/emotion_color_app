"use client";

import { useCommentEdit } from "./CommentEditContext";
import { Comment, UpdateCommentPost } from "@/types/types";
import CommentEditDelete from "./CommentEditDelete";
import CommentEditForm from "./CommentEditForm";

// 投稿の内容とフォームのコンポーネント - isEditingの値で切り替え
interface CommentEditManagerProps {
  comment: Comment;
  children: React.ReactNode; // 投稿のコンテンツ部分を受け取る
}

export const CommentEditManager = ({
  comment,
  children,
}: CommentEditManagerProps) => {
  const { isEditing, setIsEditing } = useCommentEdit();

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSaveEdit = async (_updatedPost: UpdateCommentPost) => {
    // 保存処理は PostEditForm 内で行い、完了時に通知をもらう
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <CommentEditForm
          comment={comment}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      ) : (
        children // 通常モードでは渡された子要素（投稿の内容）を表示
      )}
    </>
  );
};

// 編集ボタンと削除ボタンのコンポーネント - isEditingの値で表示・非表示
interface CommentEditDeleteManagerProps {
  comment: Comment;
}

export const CommentEditDeleteManager = ({
  comment,
}: CommentEditDeleteManagerProps) => {
  const { isEditing, setIsEditing } = useCommentEdit();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      {!isEditing && (
        <div className="flex justify-end">
          <CommentEditDelete comment={comment} onEditClick={handleEditClick} />
        </div>
      )}
    </>
  );
};
