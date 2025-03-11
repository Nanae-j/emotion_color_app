import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";

const PostPage = () => {
  return (
    <div>
      <main>
        <div className="max-w-theme-max-width mx-auto px-5 pt-30 pb-20 md:px-10 md:pt-40">
          <div className="border-yellow mb-8 min-h-30 rounded-md border-2 p-5">
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

            {/* コメント */}
            <ul className="mt-10 ml-auto w-[90%]">
              <li className="border-blue rounded-md border-2 p-5">
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
                <p className="mb-5">ここにコメント内容が入ります</p>
              </li>
            </ul>
            {/* コメント */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
