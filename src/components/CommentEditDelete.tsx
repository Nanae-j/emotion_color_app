import { Comment } from "@/types/types";
import { FaPen } from "react-icons/fa";
import CommentDelete from "./CommentDelete";

interface CommentEditDelete {
  comment: Comment;
  onEditClick: () => void;
}

const CommentEditDelete = ({ comment, onEditClick }: CommentEditDelete) => {
  return (
    <ul className="flex gap-x-5">
      <li>
        <button className="hover:text-green-700" onClick={onEditClick}>
          <FaPen />
        </button>
      </li>
      <li>
        <CommentDelete commentID={comment.id} />
      </li>
    </ul>
  );
};

export default CommentEditDelete;
