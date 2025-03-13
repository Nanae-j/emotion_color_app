import { prisma } from "@/lib/prisma";
import PostListItem from "./PostListItem";
import { auth } from "@clerk/nextjs/server";

const PostList = async () => {
  let posts = [];

  const { userId } = await auth();

  if (!userId) {
    return;
  }

  posts = await prisma.post.findMany({
    where: {
      userId: {
        in: [userId],
      },
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
          actions: true
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="">
      <ul className="h-[80vh] overflow-y-scroll py-10 md:px-5">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
