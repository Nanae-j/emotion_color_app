"use client";

import { experienceAction } from "@/actions/experinceAction";
import { useOptimistic } from "react";
import { LuHandHeart } from "react-icons/lu";

interface ExperienceInteractionProps {
  actionData: {
    counts: {
      EMPATHY: number;
      SUPPORT: number;
      EXPERIENCE: number;
    };
  };
  postID: string;
  existingExperience: boolean;
}

const ExperienceInteraction = ({
  actionData,
  postID,
  existingExperience,
}: ExperienceInteractionProps) => {
  // const empathyActionWithPostID = empathyAction.bind(null, postID);

  const [experienceOptimisticState, updateExperienceOptimistic] = useOptimistic<
    number,
    void
  >(
    actionData.counts.EXPERIENCE,
    // updateFn
    (currentState) => {
      if (existingExperience) {
        existingExperience = !existingExperience;
        return currentState - 1;
      } else {
        existingExperience = !existingExperience;
        return currentState + 1;
      }
    }
  );

  const handleEmpathyInteraction = async () => {
    try {
      updateExperienceOptimistic();

      //関数でラップした際はbindは不要で引数渡せる
      await experienceAction(postID);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        action={handleEmpathyInteraction}
        className="flex items-center justify-center"
      >
        <button
          className={`${existingExperience ? "text-green-800" : ""} text-lg`}
        >
          <LuHandHeart />
        </button>
      </form>
      <span className={existingExperience ? "text-green-800" : ""}>
        {experienceOptimisticState}
      </span>
    </>
  );
};

export default ExperienceInteraction;
