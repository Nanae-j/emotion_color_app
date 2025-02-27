import PostListItem from "./PostListItem";
import { FaClockRotateLeft } from "react-icons/fa6";

const PostList = () => {
  return (
    <div className="">
      <h2 className="text-default flex items-center gap-3 text-3xl font-bold tracking-wider">
        <span>
          <FaClockRotateLeft />
        </span>
        <span>Time Line</span>
      </h2>
      <ul className="h-[80vh] overflow-y-scroll rounded-2xl border-[#f5f5f5] px-5 py-10">
        <PostListItem />
      </ul>
    </div>
  );
};

export default PostList;
