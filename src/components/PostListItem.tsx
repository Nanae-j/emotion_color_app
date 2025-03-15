import Image from "next/image";
// import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { formatContent } from "@/utils/formatContent";
import { generateBorderClass } from "@/utils/generateColorClass";
import PostInteraction from "./PostInteraction";
import { Post } from "@/types/types";

interface PostListItemProps {
  post: Post;
}

const PostListItem = async ({ post }: PostListItemProps) => {
  const borderColor = generateBorderClass(post.colors[0].color);

  return (
    <>
      <li className={`mb-8 min-h-30 rounded-md border-2 p-5 ${borderColor}`}>
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="relative -z-10 h-[50px] w-[50px] overflow-hidden rounded-full">
              <Image
                src={
                  post.user.image
                    ? post.user.image
                    : "https://placehold.jp/150x150.png"
                }
                alt="user"
                width={30}
                height={30}
                className="absolute top-1/2 left-1/2 h-full w-full -translate-1/2"
              />
            </div>
            <div>
              <p>{post.user.name}</p>
              <p>{formatDate(post.createdAt)}</p>
            </div>
          </div>
          <p
            className="mb-5"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <PostInteraction post={post} />
            </div>
            {post.colors && (
              <ul className="flex items-center gap-4">
                {post.colors.map((color, index) => (
                  <li
                    key={index}
                    className={`h-8 w-8 rounded-full bg-${color.color}`}
                  ></li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default PostListItem;
