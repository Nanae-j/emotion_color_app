import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { getActionCounts } from "@/utils/getActionCounts";
import { formatDate } from "@/utils/formatDate";
import { formatContent } from "@/utils/formatContent";
import { generateBorderClass } from "@/utils/generateColorClass";

interface PostListItemProps {
  post: {
    user: {
      name: string;
      id: string;
      email: string;
      username: string;
      bio: string | null;
      image: string | null;
      createdAt: Date;
      updatedAt: Date;
    };
    actions: {
      type: "EMPATHY" | "SUPPORT" | "EXPERIENCE";
      userId: string;
    }[];
    colors: {
      color: string;
    }[];
    _count: {
      comments: number;
      actions: number;
    };
    id: string;
    content: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const PostListItem = async ({ post }: PostListItemProps) => {
  const actionCounts = await getActionCounts(post.id);

  const borderColor = generateBorderClass(post.colors[0].color);

  return (
    <>
      <li className={`mb-8 min-h-30 rounded-md border-2 p-5 ${borderColor}`}>
        <Link href={`/post/${post.id}`}>
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
              <div className="flex items-center gap-1">
                <button>
                  <FaRegHeart />
                </button>
                <span>{actionCounts.EMPATHY}</span>
              </div>
              <div className="flex items-center gap-1">
                <button>
                  <GoMegaphone className="stroke-1" />
                </button>
                <span>{actionCounts.SUPPORT}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="">
                  <LuHandHeart />
                </button>
                <span>{actionCounts.EXPERIENCE}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="">
                  <FaRegCommentDots />
                </button>
                <span>{post._count.comments}</span>
              </div>
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
        </Link>
      </li>
    </>
  );
};

export default PostListItem;
