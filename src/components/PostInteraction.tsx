import { FaRegCommentDots } from "react-icons/fa";
import { getActionData } from "@/utils/getActionData";
import { Post } from "@/types/types";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import EmpathyInteraction from "./EmpathyInteraction";
import { ActionType } from "@prisma/client";
import SupportInteraction from "./SupportInterraction";
import ExperienceInteraction from "./ExperienceInteraction";

interface PostInteractionProps {
  post: Post;
}

const PostInteraction = async ({ post }: PostInteractionProps) => {
  const postID = post.id;
  const actionData = await getActionData(postID);

  // 認証チェック
  const { userId } = await auth();
  if (!userId) {
    throw new Error("認証されていません。ログインしてください。");
  }

  // 現在ログインしているユーザーがアクションしているかのフラグを取得する関数
  const getExistingFlag = (type: ActionType, userId: string): boolean => {
    const existingFlag = actionData.users[type].includes(userId);
    return existingFlag;
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <EmpathyInteraction
          actionData={actionData}
          postID={postID}
          existingEmpathy={getExistingFlag("EMPATHY", userId)}
        />
      </div>
      <div className="flex items-center gap-1">
        <SupportInteraction
          actionData={actionData}
          postID={postID}
          existingSupport={getExistingFlag("SUPPORT", userId)}
        />
      </div>
      <div className="flex items-center gap-1">
        <ExperienceInteraction
          actionData={actionData}
          postID={postID}
          existingExperience={getExistingFlag("EXPERIENCE", userId)}
        />
      </div>
      <Link href={`/post/${post.id}`} className="flex items-center gap-1">
        <button className="cursor-pointer">
          <FaRegCommentDots />
        </button>
        <span>{post._count.comments}</span>
      </Link>
    </>
  );
};

export default PostInteraction;
