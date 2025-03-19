"use client";

import { useState } from "react";
import { usePostEdit } from "./PostEditContext";
import PostEditDelete from "./PostEditDelete";
import { Post } from "@/types/types";

interface PostEditManagerProps {
  post: Post;
  children: React.ReactNode; // 投稿のコンテンツ部分を受け取る
}

export const PostEditManager = ({ post, children }: PostEditManagerProps) => {
  const { isEditing, setIsEditing } = usePostEdit();

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async (updatedPost) => {
    // 保存処理は PostEditForm 内で行い、完了時に通知をもらう
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        // <PostEditForm
        //   post={post}
        //   onCancel={handleCancelEdit}
        //   onSave={handleSaveEdit}
        // />
        <p>編集モード</p>
      ) : (
        children // 通常モードでは渡された子要素（投稿の内容）を表示
      )}
    </>
  );
};

interface PostEditDeleteManagerProps {
  post: Post;
}

export const PostEditDeleteManager = ({ post }: PostEditDeleteManagerProps) => {
  const { isEditing, setIsEditing } = usePostEdit();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      {!isEditing && (
        <div className="flex justify-end">
          <PostEditDelete post={post} onEditClick={handleEditClick} />
        </div>
      )}
    </>
  );
};
