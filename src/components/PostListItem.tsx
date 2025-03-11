import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";

const PostListItem = () => {
  return (
    <>
      <li className="border-yellow mb-8 min-h-30 rounded-md border-2 p-5">
        <Link href="/post/iiii">
          <div className="mb-5 flex items-center gap-3">
            <div className="relative -z-10 h-[50px] w-[50px] overflow-hidden rounded-full">
              <Image
                src="https://placehold.jp/150x150.png"
                alt="アバター"
                width={30}
                height={30}
                className="absolute top-1/2 left-1/2 h-full w-full -translate-1/2"
              />
            </div>
            <div>
              <p>User Name</p>
              <p>2025/2/27 11:00:30</p>
            </div>
          </div>
          <p className="mb-5">ここに投稿内容が入ります</p>
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
              <span>0</span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PostListItem;
