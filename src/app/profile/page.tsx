import Header from "@/components/Header";
import PostList from "@/components/PostList";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <main className="h-screen overflow-x-hidden">
        <div className="px-10 pt-40 pb-20">
          <article className="mb-5 flex justify-between">
            {/* 画像・情報 */}
            <div className="flex-1">
              <div className="relative -z-10 mb-5 h-[10rem] w-[10rem] overflow-hidden rounded-full">
                <Image
                  src="https://placehold.jp/150x150.png"
                  alt="アバター"
                  width={30}
                  height={30}
                  className="absolute top-1/2 left-1/2 h-full w-full -translate-1/2"
                />
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-muted-foreground">Following</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-muted-foreground">Post</div>
                </div>
              </div>
            </div>
            {/* 画像・情報 */}

            {/* フォローボタン */}
            <div>
              <form action="">
                <button className="transition-color rounded-md bg-blue-400 px-10 py-3 text-white hover:bg-white hover:text-blue-400 hover:outline-2 hover:outline-blue-400">
                  フォロー
                </button>
              </form>
            </div>
            {/* フォローボタン */}
          </article>

          <PostList />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
