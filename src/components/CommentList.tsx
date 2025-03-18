import { prisma } from "@/lib/prisma";
import CommentListItem from "./CommentListItem";

interface CommentListProps {
  postID: string;
}

const CommentList = async ({ postID }: CommentListProps) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postID,
    },
    include: {
      user: true,
      colors: {
        select: {
          color: true,
        },
      },
    },
  });
  return (
    <ul className="mt-10 ml-auto w-[90%]">
      {comments.map((comment) => (
        <CommentListItem comment={comment} key={comment.id} />
      ))}
    </ul>
  );
};

export default CommentList;
