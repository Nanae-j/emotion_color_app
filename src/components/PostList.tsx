import { getPosts } from "@/utils/getPosts";
import PostListItem from "./PostListItem";

interface PostListProps {
  username: string;
}

const PostList = async ({ username }: PostListProps) => {
  const posts = await getPosts(username);

  if (!posts) {
    throw new Error("ポストの情報が取得できませんでした");
  }

  return (
    <div className="">
      {posts.length >= 1 ? (
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
