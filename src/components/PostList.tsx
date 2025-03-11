import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <div className="">
      <ul className="h-[80vh] overflow-y-scroll py-10 md:px-5">
        <PostListItem />
      </ul>
    </div>
  );
};

export default PostList;
