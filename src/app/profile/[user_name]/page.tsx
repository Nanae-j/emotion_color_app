import FollowButton from "@/components/FollowButton";
import PostList from "@/components/PostList";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

type ProfileParams = {
  params: {
    user_name: string;
  };
};

const ProfilePage = async ({ params }: ProfileParams) => {
  const resolvedParams = await params;
  const username = resolvedParams.user_name;
  const { userId } = await auth();

  if (!userId) {
    return;
  }

  const userData = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          following: true,
          followedBy: true,
          posts: true,
        },
      },

      //現在ログインしているユーザーにフォローされているかを確認
      followedBy: {
        where: {
          followerId: userId,
        },
      },
    },
  });

  if (!userData) {
    return;
  }

  // 自分のプロフィールページを見ているかの判定フラグ
  const isViewingOwnProfile = userId === userData.id;

  //フォローされていれば配列の中にオブジェクトが入る = lengthは1以上になる
  const isFollowing = userData.followedBy.length > 0;

  return (
    <div>
      <main className="h-screen overflow-x-hidden">
        <div className="max-w-theme-max-width mx-auto px-5 pt-30 pb-20 md:px-10 md:pt-40">
          <article className="mb-5 md:flex md:justify-between">
            {/* 画像・情報 */}
            <div className="mb-8 flex-1 md:mb-0">
              <div className="flex flex-wrap items-center gap-x-5">
                <div className="relative -z-10 mb-5 h-[10rem] w-[10rem] overflow-hidden rounded-full">
                  <Image
                    src={
                      userData.image
                        ? userData.image
                        : "https://placehold.jp/150x150.png"
                    }
                    alt="アバター"
                    width={30}
                    height={30}
                    className="absolute top-1/2 left-1/2 h-full w-full -translate-1/2"
                  />
                </div>
                <p className="text-4xl">{userData.name}</p>
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">
                    {userData._count.followedBy}
                  </div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">
                    {userData._count.following}
                  </div>
                  <div className="text-muted-foreground">Following</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">
                    {userData._count.posts}
                  </div>
                  <div className="text-muted-foreground">Post</div>
                </div>
              </div>
            </div>
            {/* 画像・情報 */}

            {/* フォローボタン */}
            <FollowButton
              isViewingOwnProfile={isViewingOwnProfile}
              isFollowing={isFollowing}
            />
            {/* フォローボタン */}
          </article>
          <PostList username={username} />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
