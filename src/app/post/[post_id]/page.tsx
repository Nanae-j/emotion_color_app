import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { generateBorderClass } from "@/utils/generateColorClass";
import { formatDate } from "@/utils/formatDate";
import { formatContent } from "@/utils/formatContent";
import PostInteraction from "@/components/PostInteraction";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { PostEditProvider } from "@/components/PostEditContext";
import { auth } from "@clerk/nextjs/server";
import {
  PostEditDeleteManager,
  PostEditManager,
} from "@/components/PostEditManager";
import NotFound from "@/app/not-found";
import { redirect } from "next/navigation";

type PostPageParams = {
  params: Promise<{
    post_id: string;
  }>;
};

export default async function PostPage({ params }: PostPageParams) {
  const resolvedParams = await params;
  const postID = resolvedParams.post_id;

  const posts_ids = await prisma.post.findMany({
    select: {
      id: true,
    },
  });

  const posts_ids_array: string[] = [];
  posts_ids.map((id) => {
    posts_ids_array.push(id.id);
  });

  const isExistingPost = posts_ids_array.includes(postID);

  const post = await prisma.post.findUnique({
    where: {
      id: postID,
    },
    include: {
      user: true,
      actions: {
        select: {
          type: true,
          userId: true,
        },
      },
      colors: {
        select: {
          color: true,
        },
      },
      _count: {
        select: {
          comments: true,
          actions: true,
        },
      },
    },
  });

  if (!post) {
    redirect("/");
  }

  const { userId } = await auth();
  const isOwnPost = userId === post.user.id;

  const borderColor = generateBorderClass(post.colors[0].color);

  const postContent = (
    <>
      <p
        className="mb-5"
        dangerouslySetInnerHTML={{
          __html: formatContent(post.content),
        }}
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
    </>
  );

  return !isExistingPost ? (
    <>
      <NotFound />
    </>
  ) : (
    <div>
      <main>
        <div className="max-w-theme-max-width mx-auto px-5 pt-30 pb-20 md:px-10 md:pt-40">
          <PostEditProvider>
            <div
              className={`mb-8 min-h-30 rounded-md border-2 p-5 ${borderColor}`}
            >
              <div>
                <div className="flex justify-between">
                  <div className="mb-5 flex items-center gap-3">
                    <div>
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
                    </div>
                    <div>
                      <p>{post.user.name}</p>
                      <p>{formatDate(post.createdAt)}</p>
                    </div>
                  </div>
                  {isOwnPost && <PostEditDeleteManager post={post} />}
                </div>

                {/* 編集機能はクライアントコンポーネントに委譲 */}
                <PostEditManager post={post}>{postContent}</PostEditManager>

                {/* 返信用フォーム */}
                <CommentForm post={post} />
                {/* 返信用フォーム */}

                {/* コメント */}
                <CommentList postID={postID} />
                {/* コメント */}
              </div>
            </div>
          </PostEditProvider>
        </div>
      </main>
    </div>
  );
}
