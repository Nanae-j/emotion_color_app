import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { getActionCounts } from "@/utils/getActionCounts";
import { Post } from "@/types/types";

interface PostInteractionProps {
  post: Post;
}

const PostInteraction = async ({ post }: PostInteractionProps) => {
  const actionCounts = await getActionCounts(post.id);

  return (
    <>
      <div className="flex items-center gap-1">
        <button>
          <FaRegHeart />
        </button>
        <span>{actionCounts.EMPATHY}</span>
      </div>
      <div className="flex items-center gap-1">
        <button>
          <GoMegaphone className="stroke-1" />
        </button>
        <span>{actionCounts.SUPPORT}</span>
      </div>
      <div className="flex items-center gap-1">
        <button className="">
          <LuHandHeart />
        </button>
        <span>{actionCounts.EXPERIENCE}</span>
      </div>
      <div className="flex items-center gap-1">
        <button className="">
          <FaRegCommentDots />
        </button>
        <span>{post._count.comments}</span>
      </div>
    </>
  );
};

export default PostInteraction;
