import { getPosts } from "@/utils/getPosts";
import PostListItem from "./PostListItem";

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className="">
      {posts ? (
        <ul className="h-[80vh] overflow-y-scroll py-10 md:px-5">
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <p>投稿がありません</p>
      )}
    </div>
  );
};

export default PostList;
