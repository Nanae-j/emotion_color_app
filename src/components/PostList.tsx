import { getPosts } from "@/utils/getPosts";
import PostListItem from "./PostListItem";
import { Post } from "@/types/types";

interface PostListProps {
  username?: string;
  color?: string;
}

const PostList = async ({ username, color }: PostListProps) => {
  let posts: Post[] = [];
  if (username) {
    posts = await getPosts(username);
  } else if (color) {
    posts = await getPosts(undefined, color);
  } else {
    posts = await getPosts();
  }

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
