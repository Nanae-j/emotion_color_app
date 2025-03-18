"use client";

interface FollowButtonProps {
  isViewingOwnProfile: boolean;
  isFollowing: boolean;
}

const FollowButton = ({
  isViewingOwnProfile,
  isFollowing,
}: FollowButtonProps) => {
  return (
    <div>
      <form action="">
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
