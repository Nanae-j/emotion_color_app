"use client";

import { followAction } from "@/actions/followAction";

interface FollowButtonProps {
  isViewingOwnProfile: boolean;
  isFollowing: boolean;
  currentUserId: string;
}

const FollowButton = ({
  isViewingOwnProfile,
  isFollowing,
  currentUserId,
}: FollowButtonProps) => {
  const followActionWithFlag = followAction.bind(
    null,
    isFollowing,
    currentUserId
  );
  return (
    <div>
      <form action={followActionWithFlag}>
        <button
          className={`transition-color rounded-md px-10 py-3 text-white hover:bg-white hover:text-blue-400 hover:outline-2 hover:outline-blue-400 ${isViewingOwnProfile ? "bg-default pointer-events-none opacity-20" : "bg-blue-400"}`}
        >
          {isFollowing ? "フォローを解除する" : "フォローする"}
        </button>
      </form>
    </div>
  );
};

export default FollowButton;
