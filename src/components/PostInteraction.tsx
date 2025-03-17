import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { getActionData } from "@/utils/getActionData";
import { Post } from "@/types/types";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import EmpathyInteraction from "./EmpathyInteraction";
import { ActionType } from "@prisma/client";

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
        <form action="" className="flex items-center justify-center">
          <button>
            <GoMegaphone className="stroke-1" />
          </button>
        </form>
        <span>{actionData.counts.SUPPORT}</span>
      </div>
      <div className="flex items-center gap-1">
        <form action="" className="flex items-center justify-center">
          <button className="">
            <LuHandHeart />
          </button>
        </form>
        <span>{actionData.counts.EXPERIENCE}</span>
      </div>
      <Link href={`/post/${post.id}`} className="flex items-center gap-1">
        <button className="">
          <FaRegCommentDots />
        </button>
        <span>{post._count.comments}</span>
      </Link>
    </>
  );
};

export default PostInteraction;
