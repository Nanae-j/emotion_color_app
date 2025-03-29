import { ActionType } from "@prisma/client";

export type EmotionColor = {
  emotion: string; // 感情名
  label: string; // ラベル（日本語）
  value: string; // 色の値（例えば "green", "yellow" など）
  checked?: boolean; // チェックされたかどうか (オプション)
};

// `emotion` が `colorsData` 内のいずれかの値であることを型で保証する
export type Emotion =
  | "unhurried"
  | "excited"
  | "smiling"
  | "thrill"
  | "irritation"
  | "sniffling"
  | "uneasiness";

export type Post = {
  user: {
    name: string;
    id: string;
    email: string;
    username: string;
    bio: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
  actions: {
    type: ActionType;
    userId: string;
  }[];
  colors: {
    color: string;
  }[];
  _count: {
    comments: number;
    actions: number;
  };
  id: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Comment = {
  user: {
    name: string;
    id: string;
    email: string;
    username: string;
    bio: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
  colors: {
    color: string;
  }[];
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  userId: string;
  postId: string;
};

export type UpdatePost = {
  content: string;
  colors: {
    color: string;
  }[];
  user: {
    name: string;
    id: string;
    email: string;
    username: string;
    bio: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
  actions: {
    type: "EMPATHY" | "SUPPORT" | "EXPERIENCE";
    userId: string;
  }[];
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UpdateCommentPost = {
  content: string;
  colors: {
    color: string;
  }[];
  user: {
    name: string;
    id: string;
    email: string;
    username: string;
    bio: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  postId: string;
};
