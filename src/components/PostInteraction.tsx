import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { getActionData } from "@/utils/getActionData";
import { Post } from "@/types/types";
import { empathyAction } from "@/actions/empathyAction";

interface PostInteractionProps {
  post: Post;
}

const PostInteraction = async ({ post }: PostInteractionProps) => {
  const postID = post.id;
  const actionData = await getActionData(postID);

  const empathyActionWithPostID = empathyAction.bind(null, postID);

  return (
    <>
      <div className="flex items-center gap-1">
        <form
          action={empathyActionWithPostID}
          className="flex items-center justify-center"
        >
          <button>
            <FaRegHeart />
          </button>
        </form>
        <span>{actionData.counts.EMPATHY}</span>
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
