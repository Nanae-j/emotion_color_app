import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";

const PostListItem = () => {
  return (
    <>
      <li className="border-yellow mb-8 min-h-30 rounded-md border-2 p-5">
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
        <div className="flex items-center gap-3">
          <button>
            <FaRegHeart />
          </button>
          <button>
            <GoMegaphone className="stroke-1" />
          </button>
          <button className="">
            <LuHandHeart />
          </button>
        </div>
      </li>
    </>
  );
};

export default PostListItem;
