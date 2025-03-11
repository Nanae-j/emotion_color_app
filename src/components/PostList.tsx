import PostListItem from "./PostListItem";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";

const PostList = () => {
  return (
    <div className="">
      <h2 className="text-default mb-4 flex items-center gap-3 text-3xl font-bold tracking-wider">
        <span>
          <FaClockRotateLeft />
        </span>
        <span>Time Line</span>
      </h2>
      <div className="text-lightgray flex items-center gap-2">
        <span className="flex items-center gap-1">
          <FaRegHeart />
          <span className="tracking-widest">:共感</span>
        </span>
        <span className="flex items-center gap-1">
          <GoMegaphone />
          <span className="tracking-widest">:応援</span>
        </span>
        <span className="flex items-center gap-1">
          <LuHandHeart />
          <span className="tracking-widest">:経験あり</span>
        </span>
      </div>
      <ul className="h-[80vh] overflow-y-scroll px-5 py-10">
        <PostListItem />
      </ul>
    </div>
  );
};

export default PostList;
