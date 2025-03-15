import SignOutAlert from "@/components/SignOutAlert";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { LuHandHeart } from "react-icons/lu";

export default function Home() {
  return (
    <div className="relative">
      <main className="h-screen overflow-x-hidden">
        <SignOutAlert />
        <div className="max-w-theme-max-width mx-auto px-5 pt-30 pb-20 md:px-10 md:pt-40">
          <PostForm />
          <div className="pb-3">
            <h2 className="text-default mb-4 flex items-center gap-3 text-3xl font-bold tracking-wider">
              <span>
                <FaClockRotateLeft />
              </span>
              <span>Time Line</span>
            </h2>
            <div className="text-lightgray flex items-center gap-2">
              <span className="flex items-center gap-1">
                <FaRegHeart />
                <span className="tracking-widest">:共感</span>
              </span>
              <span className="flex items-center gap-1">
                <GoMegaphone />
                <span className="tracking-widest">:応援</span>
              </span>
              <span className="flex items-center gap-1">
                <LuHandHeart />
                <span className="tracking-widest">:経験あり</span>
              </span>
            </div>
          </div>
          <PostList />
        </div>
      </main>
    </div>
  );
}
