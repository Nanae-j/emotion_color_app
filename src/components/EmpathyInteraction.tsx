"use client";

import { empathyAction } from "@/actions/empathyAction";
import { useOptimistic } from "react";
import { FaRegHeart } from "react-icons/fa";

interface EmpathyInteractionProps {
  actionData: {
    counts: {
      EMPATHY: number;
      SUPPORT: number;
      EXPERIENCE: number;
    };
  };
  postID: string;
  existingEmpathy: boolean;
}

const EmpathyInteraction = ({
  actionData,
  postID,
  existingEmpathy,
}: EmpathyInteractionProps) => {
  // const empathyActionWithPostID = empathyAction.bind(null, postID);

  const [empathyOptimisticState, updateEmpathyOptimistic] = useOptimistic<
    number,
    void
  >(
    actionData.counts.EMPATHY,
    // updateFn
    (currentState) => {
      if (existingEmpathy) {
        return currentState - 1;
      } else {
        return currentState + 1;
      }
    }
  );

  const handleEmpathyInteraction = async () => {
    try {
      updateEmpathyOptimistic();

      //関数でラップした際はbindは不要で引数渡せる
      await empathyAction(postID);
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
        <button>
          <FaRegHeart />
        </button>
      </form>
      <span>{empathyOptimisticState}</span>
    </>
  );
};

export default EmpathyInteraction;
