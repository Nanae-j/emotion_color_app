import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <div className="">
      <ul className="h-[80vh] overflow-y-scroll px-5 py-10">
        <PostListItem />
      </ul>
    </div>
  );
};

export default PostList;
