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
interface PostEditContextType {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

// デフォルト値を型と一致するように設定
const defaultContextValue: PostEditContextType = {
  isEditing: false,
  setIsEditing: () => {},
};

const PostEditContext = createContext<PostEditContextType>(defaultContextValue);

interface PostEditProviderProps {
  children: ReactNode;
}

export const PostEditProvider = ({ children }: PostEditProviderProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <PostEditContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </PostEditContext.Provider>
  );
};

export const usePostEdit = () => useContext(PostEditContext);
