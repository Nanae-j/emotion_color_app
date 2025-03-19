"use client";

import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

// コンテキストの型を定義
interface CommentEditContextType {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

// デフォルト値を型と一致するように設定
const defaultContextValue: CommentEditContextType = {
  isEditing: false,
  setIsEditing: () => {},
};

const CommentEditContext =
  createContext<CommentEditContextType>(defaultContextValue);

interface CommentEditProviderProps {
  children: ReactNode;
}

export const CommentEditProvider = ({ children }: CommentEditProviderProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <CommentEditContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </CommentEditContext.Provider>
  );
};

export const useCommentEdit = () => useContext(CommentEditContext);
