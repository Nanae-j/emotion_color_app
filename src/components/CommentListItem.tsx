import React from "react";
import Image from "next/image";
import { generateBorderClass } from "@/utils/generateColorClass";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { formatContent } from "@/utils/formatContent";

interface CommentListItem {
  comment: {
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
    colors: {
      color: string;
    }[];
    id: string;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    userId: string;
    postId: string;
  };
}

const CommentListItem = ({ comment }: CommentListItem) => {
  const borderColor = generateBorderClass(comment.colors[0].color);

  return (
    <li className={`${borderColor} mb-8 rounded-md border-2 p-5`}>
      <div className="mb-5 flex items-center gap-3">
        <Link href={`/profile/${comment.user.username}`}>
          <div className="relative -z-10 h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image
              src={
                comment.user.image
                  ? comment.user.image
                  : "https://placehold.jp/150x150.png"
              }
              alt="user"
              width={30}
              height={30}
              className="absolute top-1/2 left-1/2 h-full w-full -translate-1/2"
            />
          </div>
        </Link>
        <div>
          <p>{comment.user.name}</p>
          <p>{formatDate(comment.createdAt)}</p>
        </div>
      </div>
      <p
        className="mb-5"
        dangerouslySetInnerHTML={{ __html: formatContent(comment.content) }}
      />
      <div className="flex items-center justify-end gap-4">
        {comment.colors && (
          <ul className="flex items-center gap-4">
            {comment.colors.map((color, index) => (
              <li
                key={index}
                className={`h-8 w-8 rounded-full bg-${color.color}`}
              ></li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default CommentListItem;
