import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <div className="h-[80vh] overflow-y-scroll rounded-2xl border-1 border-[#f5f5f5] p-5">
      <ul className="flex flex-col gap-y-5">
        <PostListItem />
      </ul>
    </div>
  );
};

export default PostList;
