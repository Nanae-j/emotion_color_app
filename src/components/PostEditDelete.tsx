import { Post } from "@/types/types";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

interface PostEditDelete {
  post: Post;
  onEditClick: () => void;
}

const PostEditDelete = ({ post, onEditClick }: PostEditDelete) => {
  return (
    <ul className="flex gap-x-5">
      <li>
        <button className="hover:text-green-700" onClick={onEditClick}>
          <FaPen />
        </button>
      </li>
      <li>
        <button className="hover:text-red">
          <FaTrashAlt />
        </button>
      </li>
    </ul>
  );
};

export default PostEditDelete;
