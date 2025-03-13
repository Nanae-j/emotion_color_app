import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";

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
    };
    id: string;
    content: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const PostListItem = ({ post }: PostListItemProps) => {
  console.log(post);
  return (
    <>
      <li className="border-yellow mb-8 min-h-30 rounded-md border-2 p-5">
        <Link href={`/post/${post.id}`}>
          <div className="mb-5 flex items-center gap-3">
            <div className="relative -z-10 h-[50px] w-[50px] overflow-hidden rounded-full">
              <Image
                src={post.user.image ? post.user.image : "https://placehold.jp/150x150.png"}
                alt="user"
                width={30}
                height={30}
                className="absolute top-1/2 left-1/2 h-full w-full -translate-1/2"
              />
            </div>
            <div>
              <p>{post.user.name}</p>
              <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <p className="mb-5">{post.content}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button>
                <FaRegHeart />
              </button>
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <GoMegaphone className="stroke-1" />
              </button>
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="">
                <LuHandHeart />
              </button>
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="">
                <FaRegCommentDots />
              </button>
              <span>{post._count.comments}</span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PostListItem;
