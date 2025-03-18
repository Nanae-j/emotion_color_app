"use client";

import { followAction } from "@/actions/followAction";
import { useOptimistic } from "react";

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
  // const followActionWithFlag = followAction.bind(
  //   null,
  //   isFollowing,
  //   currentUserId
  // );

  const [optimisticFollow, changeOptimisticFollow] = useOptimistic<
    { isFollowing: boolean },
    void
  >({ isFollowing }, (currentState) => ({
    isFollowing: !currentState.isFollowing,
  }));

  const handleFollowAction = async () => {
    try {
      changeOptimisticFollow();
      await followAction(isFollowing, currentUserId);
    } catch (error) {
      console.log(error);
    }
  };

  const getButtonContent = () => {
    if (optimisticFollow.isFollowing) {
      return "フォローを解除する";
    }

    return "フォローする";
  };

  const getButtonStyle = () => {
    if (isViewingOwnProfile) {
      return "bg-default pointer-events-none opacity-20";
    } else if (!isViewingOwnProfile && optimisticFollow.isFollowing) {
      return "bg-white text-blue-400 outline-2 outline-blue-400 hover:bg-blue-400 hover:text-white";
    } else if (!isViewingOwnProfile && !optimisticFollow.isFollowing) {
      return "text-white bg-blue-400 hover:bg-white hover:text-blue-400 hover:outline-2 hover:outline-blue-400";
    }
  };

  return (
    <div>
      <form action={handleFollowAction}>
        <button
          className={`transition-color rounded-md px-10 py-3 ${getButtonStyle()}`}
        >
          {getButtonContent()}
        </button>
      </form>
    </div>
  );
};

export default FollowButton;
